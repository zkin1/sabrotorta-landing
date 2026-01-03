'use client'

// components/Contacto.jsx - VERSIÓN PROFESIONAL
import { Mail, Phone, MapPin, MessageCircle, Clock, Send, Instagram } from 'lucide-react'
import { useInView } from '@/hooks/useInView'
import { useState } from 'react'
import { API_ENDPOINTS } from '@/lib/config'

export default function Contacto() {
  const [ref, isVisible] = useInView()
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    const formData = new FormData(e.target)
    const data = {
      nombre: formData.get('nombre'),
      email: formData.get('email'),
      telefono: formData.get('telefono'),
      servicio: formData.get('servicio'),
      fecha: formData.get('fecha') || null,
      mensaje: formData.get('mensaje')
    }

    try {
      const response = await fetch(API_ENDPOINTS.contact, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setMessage('¡Solicitud enviada exitosamente! Te contactaremos pronto.')
        e.target.reset()

        // Scroll suave al mensaje de éxito
        setTimeout(() => {
          const messageEl = document.querySelector('.success-message')
          if (messageEl) messageEl.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 100)
      } else {
        setMessage(result.message || 'Error al enviar. Por favor intenta nuevamente.')
      }
    } catch (error) {
      console.error('Error enviando formulario:', error)
      setMessage('Error de conexión. Verifica tu internet e intenta nuevamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contacto" ref={ref} className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 md:mb-20 will-animate ${isVisible ? 'animate-in-up' : ''} px-4`}>
          <span className="text-pink-600 font-bold text-base md:text-lg uppercase tracking-wider block mb-2">Hablemos</span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-800 mb-4 md:mb-6 leading-tight">
            ¡Hagamos Realidad tu Evento!
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            Estamos listos para hacer realidad tus ideas. Respuesta en menos de 24 horas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Form (Order 1 on mobile) */}
          <div className="order-1 lg:order-2 bg-white p-6 md:p-10 rounded-3xl shadow-2xl border-2 border-gray-100">

            {/* WhatsApp Direct Button (Requested at Top) */}
            <div className="mb-8">
              <a
                href="https://wa.me/56977794373?text=Hola!%20Me%20gustar%C3%ADa%20solicitar%20informaci%C3%B3n%20sobre%20sus%20servicios."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 mb-6"
              >
                <MessageCircle className="w-6 h-6" />
                Chat Directo WhatsApp
              </a>

              <div className="relative flex py-2 items-center mb-2">
                <div className="flex-grow border-t border-gray-200"></div>
                <span className="flex-shrink-0 mx-4 text-gray-400 text-sm">O completa el formulario</span>
                <div className="flex-grow border-t border-gray-200"></div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-3">Solicita tu Cotización</h3>
              <p className="text-gray-600">Te contactaremos en menos de 24 horas</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-bold text-gray-700 mb-3">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all text-gray-800 font-medium"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="telefono" className="block text-sm font-bold text-gray-700 mb-3">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    required
                    className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all text-gray-800 font-medium"
                    placeholder="+56 9 xxxx xxxx"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-3">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all text-gray-800 font-medium"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="servicio" className="block text-sm font-bold text-gray-700 mb-3">
                  Servicio de Interés *
                </label>
                <select
                  id="servicio"
                  name="servicio"
                  required
                  className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all text-gray-800 font-medium"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="Tortas Decoradas">Tortas Decoradas</option>
                  <option value="Catering">Catering (Empresas/Particular)</option>
                  <option value="Coffe Break">Coffe Break</option>
                  <option value="Brunch">Brunch</option>
                  <option value="Preparación de Eventos">Preparación de Eventos (Decoración/Mobiliario)</option>
                </select>
              </div>

              <div>
                <label htmlFor="fecha" className="block text-sm font-bold text-gray-700 mb-3">
                  Fecha del Evento
                </label>
                <input
                  type="date"
                  id="fecha"
                  name="fecha"
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all text-gray-800 font-medium"
                />
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-bold text-gray-700 mb-3">
                  Cuéntanos sobre tu evento *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows="5"
                  required
                  className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all resize-none text-gray-800 font-medium"
                  placeholder="Describe tu evento..."
                ></textarea>
              </div>

              {message && (
                <div className={`p-5 rounded-2xl text-center font-semibold animate-in fade-in duration-300 ${message.includes('exitosamente')
                  ? 'bg-green-100 text-green-800 border-2 border-green-300 success-message'
                  : 'bg-red-100 text-red-800 border-2 border-red-300'
                  }`}>
                  {message.includes('exitosamente') && <span className="text-2xl mr-2">✅</span>}
                  {!message.includes('exitosamente') && <span className="text-2xl mr-2">⚠️</span>}
                  {message}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="group w-full bg-gradient-to-r from-pink-500 via-pink-600 to-fuchsia-500 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white py-5 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Enviando...' : 'Enviar Solicitud'}
                {!loading && <Send className="w-6 h-6 group-hover:translate-x-2 transition-transform" />}
              </button>

              <p className="text-sm text-gray-500 text-center">
                * Campos obligatorios - Responderemos en menos de 24 horas
              </p>
            </form>
          </div>

          {/* Contact Info (Order 2 on mobile) */}
          <div className={`space-y-6 order-2 lg:order-1 will-animate ${isVisible ? 'animate-in-left' : ''}`}>
            {/* Main Contact Card */}
            <div className="bg-gradient-to-br from-pink-400 to-pink-500 p-8 rounded-2xl shadow-xl text-white">
              <h3 className="text-2xl font-bold mb-6">Información</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold mb-1">Teléfono / WhatsApp</p>
                    <a href="tel:+56977794373" className="text-xl font-bold hover:underline">
                      +569 7779 4373
                    </a>
                  </div>
                </div>

                <div className="group flex items-start gap-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-lg mb-2 text-white/90">Email</p>
                    <a href="mailto:ventas@sabrotortas.cl" className="text-lg sm:text-xl md:text-2xl font-bold hover:underline break-words md:break-normal">
                      ventas@sabrotortas.cl
                    </a>
                    <p className="text-white/80 text-sm mt-1">Respuesta en 24hrs</p>
                  </div>
                </div>

                <div className="group flex items-start gap-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-lg mb-2 text-white/90">Ubicación</p>
                    <p className="text-xl font-bold">Santiago, Chile</p>
                    <p className="text-white/80 text-sm mt-1">Cobertura en toda la RM</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-10 pt-10 border-t border-white/30">
                <p className="font-bold text-lg mb-6 text-white/90">Síguenos en Redes Sociales</p>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com/_u/sabrotortas.cl/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/social w-14 h-14 bg-white/20 backdrop-blur-sm hover:bg-white rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-12"
                  >
                    <Instagram className="w-7 h-7 text-white group-hover/social:text-pink-500 transition-colors" />
                  </a>
                  <a
                    href="https://wa.me/56977794373?text=Hola!%20Me%20gustar%C3%ADa%20solicitar%20informaci%C3%B3n%20sobre%20sus%20servicios."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/social w-14 h-14 bg-white/20 backdrop-blur-sm hover:bg-white rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-12"
                  >
                    <MessageCircle className="w-7 h-7 text-white group-hover/social:text-green-500 transition-colors" />
                  </a>
                </div>
              </div>
            </div>

            {/* Schedule Card */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center">
                  <Clock className="w-7 h-7 text-purple-600" />
                </div>
                <h4 className="font-bold text-2xl text-gray-800">Horario de Atención</h4>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <span className="text-gray-700 font-semibold">Lunes a Viernes</span>
                  <span className="text-pink-600 font-bold">9:00 - 19:00</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <span className="text-gray-700 font-semibold">Sábados</span>
                  <span className="text-pink-600 font-bold">10:00 - 14:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-semibold">WhatsApp</span>
                  <span className="text-green-600 font-bold">24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-size-200 {
          background-size: 200% 200%;
        }
        .bg-pos-0 {
          background-position: 0% 50%;
        }
        .bg-pos-100 {
          background-position: 100% 50%;
        }
      `}</style>
    </section>
  )
}