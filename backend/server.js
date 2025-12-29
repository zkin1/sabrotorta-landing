const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const path = require('path')
const { createClient } = require('@supabase/supabase-js')
const nodemailer = require('nodemailer')
const helmet = require('helmet')
const jwt = require('jsonwebtoken')
const { validate: uuidValidate } = require('uuid')
const rateLimit = require('express-rate-limit')

dotenv.config({ path: path.join(__dirname, '.env') })

const app = express()
const PORT = process.env.PORT || 5002

app.use(helmet())

const allowedOrigins = process.env.CLIENT_URLS
    ? process.env.CLIENT_URLS.split(',').map(url => url.trim())
    : ['http://localhost:3000', 'http://localhost:3001']

const corsOptions = {
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin) || process.env.NODE_ENV !== 'production') {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    methods: 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type,Authorization',
    optionsSuccessStatus: 200,
}

app.use(cors(corsOptions))
app.use(express.json({ limit: '1mb' }))

const supabase = createClient(
    process.env.SUPABASE_URL || '',
    process.env.SUPABASE_ANON_KEY || process.env.SUPABASE_KEY || ''
)

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
})

// Auth helper
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (!token) return res.status(401).json({ success: false, message: 'Acceso no autorizado' })

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ success: false, message: 'Token inválido' })
        req.user = user
        next()
    })
}

function sanitizeString(str) { return (typeof str === 'string') ? str.trim().replace(/[<>]/g, '') : '' }
function escapeHtml(text) {
    if (typeof text !== 'string') return ''
    return text.replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' })[m])
}
function isValidEmail(email) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) }

// Rate Limiting para formulario de contacto (prevenir spam)
const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 3, // 3 solicitudes por IP
    message: { success: false, message: 'Demasiadas solicitudes. Por favor intenta en 15 minutos.' },
    standardHeaders: true,
    legacyHeaders: false,
})

// Public: Contacto
app.post('/api/contacto', contactLimiter, async (req, res) => {
    try {
        let { nombre, email, telefono, servicio, fecha_evento, mensaje } = req.body
        nombre = sanitizeString(nombre)
        email = sanitizeString(email).toLowerCase()
        telefono = sanitizeString(telefono)
        servicio = sanitizeString(servicio)
        mensaje = sanitizeString(mensaje)

        if (!nombre || nombre.length < 2) return res.status(400).json({ success: false, message: 'Nombre inválido' })
        if (!email || !isValidEmail(email)) return res.status(400).json({ success: false, message: 'Email inválido' })
        if (!telefono || telefono.length < 8) return res.status(400).json({ success: false, message: 'Teléfono inválido' })

        let fechaEvento = null
        if (fecha_evento) {
            const fecha = new Date(fecha_evento)
            if (isNaN(fecha.getTime())) return res.status(400).json({ success: false, message: 'Fecha inválida' })
            fechaEvento = fecha_evento
        }

        const { data, error } = await supabase.from('solicitudes').insert([{
            nombre, email, telefono, servicio: servicio || null, fecha_evento: fechaEvento, mensaje: mensaje || null, estado: 'nueva'
        }]).select()

        if (error) throw error

        // Emails
        const safeNombre = escapeHtml(nombre)
        const safeServicio = escapeHtml(servicio || 'No especificado')
        const safeMensaje = escapeHtml(mensaje || 'Sin mensaje')
        const adminEmail = process.env.EMAIL_USER // Email del admin desde .env

        try {
            // Email de confirmación al cliente
            await transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: email,
                subject: 'Recibimos tu solicitud - SabroTortas',
                html: `
                    <h2>¡Hola ${safeNombre}!</h2>
                    <p>Hemos recibido tu solicitud de cotización.</p>
                    <p><strong>Servicio:</strong> ${safeServicio}</p>
                    <p>Nos pondremos en contacto contigo en menos de 24 horas.</p>
                    <br>
                    <p>Saludos,<br><strong>Equipo SabroTortas</strong></p>
                `
            })

            // Email de notificación al admin
            await transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: adminEmail, // Enviar al correo del .env
                subject: `Nueva Solicitud de ${safeNombre}`,
                html: `
                    <h2>Nueva Solicitud de Cotización</h2>
                    <p><strong>Nombre:</strong> ${safeNombre}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Teléfono:</strong> ${telefono}</p>
                    <p><strong>Servicio:</strong> ${safeServicio}</p>
                    <p><strong>Fecha Evento:</strong> ${fechaEvento || 'No especificada'}</p>
                    <p><strong>Mensaje:</strong> ${safeMensaje}</p>
                    <br>
                    <p>Revisar en el panel administrativo.</p>
                `
            })
        } catch (e) {
            console.error('Email error', e)
        }

        return res.status(201).json({ success: true, message: 'Solicitud enviada', data: data[0] })
    } catch (error) {
        console.error('Error contacto:', error)
        return res.status(500).json({ success: false, message: 'Error en servidor' })
    }
})

// Protected routes (Admin access via Headers)
app.get('/api/solicitudes', authenticateToken, async (req, res) => {
    const { data, error } = await supabase.from('solicitudes').select('*').order('created_at', { ascending: false })
    if (error) return res.status(500).json({ success: false, message: 'Error' })
    return res.json({ success: true, data })
})

app.delete('/api/solicitudes/:id', authenticateToken, async (req, res) => {
    const { id } = req.params
    if (!uuidValidate(id)) return res.status(400).json({ error: 'ID inválido' })
    const { error } = await supabase.from('solicitudes').delete().eq('id', id)
    if (error) return res.status(500).json({ success: false, message: 'Error' })
    return res.json({ success: true, message: 'Eliminada' })
})

app.get('/api/config', async (req, res) => {
    try {
        const { data } = await supabase.from('configuracion_web').select('*')
        const config = {}
        if (data) {
            data.forEach(item => { config[item.key] = item.value })
        }
        return res.json({ success: true, data: config })
    } catch (error) {
        console.error('Error config:', error)
        return res.status(500).json({ success: false, message: 'Error en servidor' })
    }
})

app.get('/api/health', (req, res) => res.json({ status: 'Backend landing OK' }))

app.listen(PORT, () => {
    console.log(`✅ Backend landing ejecutándose en puerto ${PORT}`)
})
