import nodemailer from 'nodemailer'

// Simple in-memory rate limiting
const rateLimit = new Map()
const RATE_LIMIT_WINDOW = 15 * 60 * 1000 // 15 minutes
const RATE_LIMIT_MAX = 3 // 3 requests per window

function isRateLimited(ip) {
    const now = Date.now()
    const entry = rateLimit.get(ip)

    // Clean old entries periodically
    if (rateLimit.size > 1000) {
        for (const [key, val] of rateLimit) {
            if (now - val.firstRequest > RATE_LIMIT_WINDOW) rateLimit.delete(key)
        }
    }

    if (!entry || now - entry.firstRequest > RATE_LIMIT_WINDOW) {
        rateLimit.set(ip, { firstRequest: now, count: 1 })
        return false
    }

    entry.count++
    if (entry.count > RATE_LIMIT_MAX) return true
    return false
}

// Validation helpers
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function sanitizeString(str) {
    if (typeof str !== 'string') return ''
    return str.trim().replace(/[<>]/g, '')
}

function escapeHtml(text) {
    if (typeof text !== 'string') return ''
    return text.replace(/[&<>"']/g, m => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
    })[m])
}

export async function POST(request) {
    try {
        // Rate limiting
        const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
        if (isRateLimited(ip)) {
            return Response.json(
                { success: false, message: 'Demasiadas solicitudes. Por favor intenta en 15 minutos.' },
                { status: 429 }
            )
        }

        const body = await request.json()

        // Sanitize inputs
        const nombre = sanitizeString(body.nombre)
        const email = sanitizeString(body.email).toLowerCase()
        const telefono = sanitizeString(body.telefono)
        const servicio = sanitizeString(body.servicio)
        const fecha = sanitizeString(body.fecha) || null
        const mensaje = sanitizeString(body.mensaje)

        // Validate required fields
        if (!nombre || nombre.length < 2) {
            return Response.json(
                { success: false, message: 'El nombre debe tener al menos 2 caracteres.' },
                { status: 400 }
            )
        }

        if (!email || !isValidEmail(email)) {
            return Response.json(
                { success: false, message: 'Por favor ingresa un email válido.' },
                { status: 400 }
            )
        }

        if (!telefono || telefono.length < 8) {
            return Response.json(
                { success: false, message: 'El teléfono debe tener al menos 8 caracteres.' },
                { status: 400 }
            )
        }

        if (!servicio) {
            return Response.json(
                { success: false, message: 'Por favor selecciona un servicio.' },
                { status: 400 }
            )
        }

        if (!mensaje || mensaje.length < 5) {
            return Response.json(
                { success: false, message: 'Por favor escribe un mensaje (mínimo 5 caracteres).' },
                { status: 400 }
            )
        }

        // Escape HTML for email content
        const safeNombre = escapeHtml(nombre)
        const safeEmail = escapeHtml(email)
        const safeTelefono = escapeHtml(telefono)
        const safeServicio = escapeHtml(servicio)
        const safeFecha = escapeHtml(fecha || 'No especificada')
        const safeMensaje = escapeHtml(mensaje)

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        })

        // Email al administrador
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `Nueva Solicitud de Cotización - ${safeNombre}`,
            html: `
                <h2>Nueva Solicitud de Cotización</h2>
                <p><strong>Nombre:</strong> ${safeNombre}</p>
                <p><strong>Email:</strong> ${safeEmail}</p>
                <p><strong>Teléfono:</strong> ${safeTelefono}</p>
                <p><strong>Servicio:</strong> ${safeServicio}</p>
                <p><strong>Fecha del Evento:</strong> ${safeFecha}</p>
                <p><strong>Mensaje:</strong></p>
                <p>${safeMensaje}</p>
                <hr>
                <p><em>Responde a: ${safeEmail}</em></p>
            `
        })

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

        return Response.json(
            { success: true, message: '¡Solicitud enviada exitosamente! Te contactaremos pronto.' },
            { status: 200 }
        )
    } catch (error) {
        console.error('Error enviando email:', error)
        return Response.json(
            { success: false, message: 'Error al enviar. Por favor intenta nuevamente.' },
            { status: 500 }
        )
    }
}
