import nodemailer from 'nodemailer'

export async function POST(request) {
    try {
        const { nombre, telefono, email, servicio, fecha, mensaje } = await request.json()

        // Configurar transporte de email (usando Gmail u otro proveedor)
        // Reemplaza con tus credenciales reales
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        })

        // Email al administrador
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'caffemanagement@gmail.com',
            subject: `Nueva Solicitud de Cotización - ${nombre}`,
            html: `
        <h2>Nueva Solicitud de Cotización</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Servicio:</strong> ${servicio}</p>
        <p><strong>Fecha del Evento:</strong> ${fecha || 'No especificada'}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
        <hr>
        <p><em>Responde a: ${email}</em></p>
      `
        }

        // Enviar email
        await transporter.sendMail(mailOptions)

        return Response.json(
            { message: 'Email enviado exitosamente' },
            { status: 200 }
        )
    } catch (error) {
        console.error('Error enviando email:', error)
        return Response.json(
            { error: 'Error al enviar el email' },
            { status: 500 }
        )
    }
}
