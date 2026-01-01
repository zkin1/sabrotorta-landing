'use client'

// components/Footer.jsx - VERSIÓN PROFESIONAL
import { Heart, Mail, Phone, MapPin, Instagram, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-brand-dark text-white">
      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-brand-cream to-transparent opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Column 1: About */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <h3 className="text-4xl font-bold mb-4 font-script">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lightPink to-brand-pink">
                  Sabrotortas
                </span>
              </h3>
              <div className="w-20 h-1 bg-gradient-to-r from-brand-pink to-brand-lightPink rounded-full"></div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed text-lg font-sans">
              Endulzando momentos especiales desde 2006. Somos expertos en catering, tortas decoradas y organización de eventos con calidad, innovación y atención personalizada.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white font-sans">Enlaces Rápidos</h4>
            <ul className="space-y-4 font-sans">
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-brand-pink transition-colors flex items-center gap-2 group">
                  <span className="w-2 h-2 bg-brand-pink rounded-full group-hover:scale-150 transition-transform"></span>
                  Nuestros Servicios
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-400 hover:text-brand-pink transition-colors flex items-center gap-2 group">
                  <span className="w-2 h-2 bg-brand-pink rounded-full group-hover:scale-150 transition-transform"></span>
                  Contacto
                </a>
              </li>

              <li>
                <a href="https://www.matrimonios.cl/torta-novios/sabrotortas--e109387" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-pink transition-colors flex items-center gap-2 group">
                  <span className="w-2 h-2 bg-brand-pink rounded-full group-hover:scale-150 transition-transform"></span>
                  Matrimonios.cl
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white font-sans">Contacto Directo</h4>
            <ul className="space-y-4 font-sans">
              <li className="flex items-start gap-3 group">
                <Mail className="w-5 h-5 text-brand-pink mt-1 group-hover:scale-125 transition-transform" />
                <div>
                  <p className="text-gray-500 text-sm">Email</p>
                  <a href="mailto:ventas@sabrotortas.cl" className="text-gray-300 hover:text-brand-pink transition-colors">
                    ventas@sabrotortas.cl
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <Phone className="w-5 h-5 text-brand-pink mt-1 group-hover:scale-125 transition-transform" />
                <div>
                  <p className="text-gray-500 text-sm">Teléfono/WhatsApp</p>
                  <a href="tel:+56977794373" className="text-gray-300 hover:text-brand-pink transition-colors">
                    +569 7779 4373
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-brand-pink mt-1 group-hover:scale-125 transition-transform" />
                <div>
                  <p className="text-gray-500 text-sm">Ubicación</p>
                  <p className="text-gray-300">Huechuraba, Santiago</p>
                </div>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-8">
              <h5 className="text-sm font-bold text-gray-500 mb-4 uppercase tracking-wider font-sans">Redes Sociales</h5>
              <div className="flex gap-4">

                <a
                  href="https://wa.me/56977794373?text=Hola!%20Me%20gustar%C3%ADa%20solicitar%20informaci%C3%B3n%20sobre%20sus%20servicios."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 bg-gray-800 hover:bg-green-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-12 shadow-lg"
                >
                  <Phone className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-10 mt-10 font-sans">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-gray-400 flex items-center justify-center md:justify-start gap-2 mb-2">
                Hecho con <Heart className="w-4 h-4 text-brand-pink fill-brand-pink animate-pulse" /> por Sabrotortas
              </p>
              <p className="text-sm text-gray-500 font-semibold mb-1">
                Resolución Sanitaria N° 12343/2006
              </p>
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} Sabrotortas - Yannett Sandoval Saldaña
              </p>
              <p className="text-xs text-gray-600 mt-1">
                Todos los derechos reservados
              </p>
            </div>

            <button
              onClick={scrollToTop}
              className="group w-14 h-14 bg-gradient-to-r from-brand-pink to-brand-lightPink hover:from-pink-600 hover:to-pink-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xl"
              aria-label="Volver arriba"
            >
              <ArrowUp className="w-6 h-6 text-white group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 pt-8 border-t border-gray-800 font-sans">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-sm text-gray-500">
            <div>
              <p className="font-semibold text-gray-400 mb-2">🍰 Catering Premium</p>
              <p>Eventos corporativos y familiares</p>
            </div>
            <div>
              <p className="font-semibold text-gray-400 mb-2">🎂 Tortas Decoradas</p>
              <p>Diseños únicos y personalizados</p>
            </div>
            <div>
              <p className="font-semibold text-gray-400 mb-2">🎉 Organización de Eventos</p>
              <p>Servicio integral completo</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}