'use client'

import { ArrowRight } from 'lucide-react'
import { useInView } from '@/hooks/useInView'

export default function Hero() {
  const [ref, isVisible] = useInView()

  return (
    <section ref={ref} className="relative min-h-[700px] sm:min-h-screen flex items-end sm:items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source media="(max-width: 768px)" srcSet="/images/galeria/gallery-14.jpeg" />
          <img
            src="/assets/images/banner-pc.png"
            alt="Sabrotortas Banner"
            className="w-full h-full object-cover object-center md:blur-[6px] md:scale-105"
          />
        </picture>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-6 pt-16 sm:py-20 md:pt-60 ">
        {/* Content Container - Left Aligned */}
        <div className="max-w-4xl">

          {/* Kicker */}
          <span className="text-brand-lightPink tracking-[0.2em] text-xs sm:text-sm md:text-base font-bold uppercase mb-3 sm:mb-4 block animate-fade-in-up opacity-0">
            El arte de celebrar
          </span>

          {/* Main Title */}
          <h1 className="mb-4 sm:mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s' }}>
            <span className="font-script text-7xl sm:text-7xl md:text-8xl lg:text-9xl bg-gradient-to-r from-brand-pink via-pink-400 to-brand-pink bg-clip-text text-transparent block mb-1 sm:mb-2 leading-tight">
              Sabrotortas
            </span>
            <span className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white block leading-tight">
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-4 sm:mb-8 max-w-xl sm:max-w-2xl font-light leading-relaxed animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s' }}>
            Donde cada creación es un testimonio de <span className="text-brand-lightPink font-medium">pasión, arte y atención impecable al detalle</span>. Catering y repostería para eventos inolvidables.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in-up w-full sm:w-auto max-w-sm sm:max-w-none mx-auto sm:mx-0 opacity-0" style={{ animationDelay: '0.3s' }}>
            <a
              href="#contacto"
              className="bg-brand-pink text-white px-6 py-3 sm:px-8 sm:py-4 rounded-sm font-bold text-sm sm:text-base md:text-lg tracking-wide hover:bg-pink-600 transition-colors duration-300 flex items-center justify-center gap-2 uppercase w-full sm:w-auto shadow-lg"
            >
              Solicitar Cotización
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href="#servicios"
              className="bg-transparent text-white border border-white/40 px-6 py-3.5 sm:px-8 sm:py-4 rounded-sm font-bold text-sm sm:text-base md:text-lg tracking-wide hover:bg-white/10 transition-colors duration-300 flex items-center justify-center uppercase w-full sm:w-auto text-center backdrop-blur-sm"
            >
              Explorar Servicios
            </a>
            <a
              href="#galeria"
              className="bg-transparent text-white border border-white/40 px-6 py-3 sm:px-8 sm:py-4 rounded-sm font-bold text-sm sm:text-base md:text-lg tracking-wide hover:bg-white/10 transition-colors duration-300 flex items-center justify-center uppercase w-full sm:w-auto text-center backdrop-blur-sm"
            >
              Ver Galería
            </a>

          </div>

        </div>
      </div>
    </section>
  )
}
