import express from 'express'
import nodemailer from 'nodemailer'
import { supabase } from '../lib/supabase.js'

const router = express.Router()

// Configurar transporte de email
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
    },
})

// POST /api/contacto - Recibir solicitud de contacto
router.post('/contacto', async (req, res) => {
    try {
        const { nombre, email, telefono, servicio, fecha, mensaje } = req.body

        // Validar datos
        if (!nombre || !email || !telefono) {
            return res.status(400).json({
                success: false,
                message: 'Faltan datos requeridos',
            })
        }

        // 1. Guardar en Supabase
        const { data, error } = await supabase
            .from('solicitudes')
            .insert([
                {
                    nombre,
                    email,
                    telefono,
                    servicio: servicio || 'No especificado',
                    fecha: fecha || new Date().toISOString().split('T')[0],
                    descripcion: mensaje || '',
                    estado: 'pendiente',
                    created_at: new Date().toISOString(),
                },
            ])
            .select()

        if (error) {
            console.error('Error insertando en BD:', error)
            return res.status(500).json({
                success: false,
                message: 'Error al guardar la solicitud',
            })
        }

        // 2. Enviar email de confirmación al cliente
        await transporter.sendMail({
            from: process.env.GMAIL_USER,
            to: email,
            subject: 'Solicitud Recibida - SabroTortas',
            html: `
                <h2>¡Gracias por tu solicitud!</h2>
                <p>Hola ${nombre},</p>
                <p>Hemos recibido tu solicitud para: <strong>${servicio}</strong></p>
                <p><strong>Detalles:</strong></p>
                <ul>
                    <li>Teléfono: ${telefono}</li>
                    <li>Fecha solicitada: ${fecha}</li>
                    <li>Mensaje: ${mensaje}</li>
                </ul>
                <p>Nuestro equipo revisará tu solicitud y se pondrá en contacto contigo pronto.</p>
                <p>¡Gracias por elegir SabroTortas!</p>
            `,
        })

        // 3. Enviar email de notificación al admin
        await transporter.sendMail({
            from: process.env.GMAIL_USER,
            to: process.env.GMAIL_USER,
            subject: `Nueva Solicitud - ${nombre}`,
            html: `
                <h2>Nueva Solicitud de Cliente</h2>
                <p><strong>Cliente:</strong> ${nombre}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Teléfono:</strong> ${telefono}</p>
                <p><strong>Servicio:</strong> ${servicio}</p>
                <p><strong>Fecha Solicitada:</strong> ${fecha}</p>
                <p><strong>Mensaje:</strong> ${mensaje}</p>
                <p><a href="http://localhost:3001/solicitudes">Ver en Panel Admin</a></p>
            `,
        })

        return res.status(201).json({
            success: true,
            message: 'Solicitud guardada correctamente',
            data: data[0],
        })
    } catch (error) {
        console.error('Error:', error)
        return res.status(500).json({
            success: false,
            message: 'Error interno del servidor',
        })
    }
})

// GET /api/solicitudes - Obtener todas las solicitudes
router.get('/solicitudes', async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('solicitudes')
            .select('*')
            .order('created_at', { ascending: false })

        if (error) {
            console.error('Error obteniendo solicitudes:', error)
            return res.status(500).json({
                success: false,
                message: 'Error al obtener solicitudes',
            })
        }

        return res.json({
            success: true,
            data,
        })
    } catch (error) {
        console.error('Error:', error)
        return res.status(500).json({
            success: false,
            message: 'Error interno del servidor',
        })
    }
})

// PUT /api/solicitudes/:id - Actualizar estado de solicitud
router.put('/solicitudes/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { estado } = req.body

        if (!estado) {
            return res.status(400).json({
                success: false,
                message: 'Falta el estado',
            })
        }

        const { data, error } = await supabase
            .from('solicitudes')
            .update({ estado })
            .eq('id', id)
            .select()

        if (error) {
            console.error('Error actualizando solicitud:', error)
            return res.status(500).json({
                success: false,
                message: 'Error al actualizar solicitud',
            })
        }

        return res.json({
            success: true,
            message: 'Solicitud actualizada',
            data: data[0],
        })
    } catch (error) {
        console.error('Error:', error)
        return res.status(500).json({
            success: false,
            message: 'Error interno del servidor',
        })
    }
})

// DELETE /api/solicitudes/:id - Eliminar solicitud
router.delete('/solicitudes/:id', async (req, res) => {
    try {
        const { id } = req.params

        const { error } = await supabase
            .from('solicitudes')
            .delete()
            .eq('id', id)

        if (error) {
            console.error('Error eliminando solicitud:', error)
            return res.status(500).json({
                success: false,
                message: 'Error al eliminar solicitud',
            })
        }

        return res.json({
            success: true,
            message: 'Solicitud eliminada',
        })
    } catch (error) {
        console.error('Error:', error)
        return res.status(500).json({
            success: false,
            message: 'Error interno del servidor',
        })
    }
})

export default router
