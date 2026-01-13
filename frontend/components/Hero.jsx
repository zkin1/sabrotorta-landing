'use client'

import { ArrowRight } from 'lucide-react'
import { useInView } from '@/hooks/useInView'
import Image from 'next/image'

export default function Hero() {
  const [ref, isVisible] = useInView()

  return (
    <section ref={ref} className="relative min-h-[700px] sm:min-h-screen flex items-end md:items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Mobile Image */}
        <Image
          src="/images/galeria/gallery-14.webp"
          alt="Sabrotortas Banner"
          fill
          quality={85}
          sizes="(max-width: 768px) 100vw, 0vw"
          className="object-cover object-center md:hidden"
        />
        {/* Desktop Image */}
        <Image
          src="/assets/images/banner-pc-2.webp"
          alt="Sabrotortas Banner"
          fill
          priority
          fetchPriority="high"
          quality={100}
          sizes="(min-width: 769px) 100vw, 0vw"
          className="hidden md:block object-cover object-center"
        />

        {/* Optimized gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-4 pt-0 md:py-20">
        {/* Content Container - Left Aligned */}
        <div className="max-w-3xl">

          {/* Kicker */}
          <span className="text-brand-lightPink tracking-[0.2em] text-xs sm:text-sm md:text-base font-bold uppercase mb-3 sm:mb-4 block animate-fade-in-up opacity-0 drop-shadow-lg">
            El arte de celebrar
          </span>

          {/* Main Title */}
          <h1 className="mb-4 sm:mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s' }}>
            <span className="font-script text-7xl sm:text-8xl md:text-9xl bg-gradient-to-r from-brand-pink via-pink-400 to-brand-pink bg-clip-text text-transparent block mb-2 leading-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
              Sabrotortas
            </span>
            <span className="font-sans text-2xl sm:text-3xl md:text-4xl font-light text-white block leading-tight drop-shadow-lg">
              Repostería de Excelencia & Catering
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-8 max-w-2xl font-light leading-relaxed animate-fade-in-up opacity-0 drop-shadow-lg" style={{ animationDelay: '0.2s' }}>
            Donde cada creación es un testimonio de <span className="text-brand-lightPink font-medium">pasión, arte y atención impecable al detalle</span>. Transformamos tus eventos en experiencias inolvidables.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in-up w-full sm:w-auto max-w-sm sm:max-w-none mx-auto sm:mx-0 opacity-0" style={{ animationDelay: '0.3s' }}>
            <a
              href="#contacto"
              className="group bg-gradient-to-r from-brand-pink to-pink-500 text-white px-8 py-4 rounded-full font-bold text-sm sm:text-base tracking-wide hover:shadow-2xl hover:shadow-brand-pink/40 transition-all duration-300 flex items-center justify-center gap-2 uppercase w-full sm:w-auto transform hover:scale-105"
            >
              Solicitar Cotización
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#servicios"
              className="bg-white/5 text-white border border-white/20 px-8 py-4 rounded-full font-medium text-sm sm:text-base tracking-wide hover:bg-white/15 hover:border-white/40 transition-all duration-300 flex items-center justify-center uppercase w-full sm:w-auto backdrop-blur-sm"
            >
              Explorar Servicios
            </a>
            <a
              href="#galeria"
              className="bg-white/5 text-white border border-white/20 px-8 py-4 rounded-full font-medium text-sm sm:text-base tracking-wide hover:bg-white/15 hover:border-white/40 transition-all duration-300 flex items-center justify-center uppercase w-full sm:w-auto backdrop-blur-sm"
            >
              Ver Galería
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
