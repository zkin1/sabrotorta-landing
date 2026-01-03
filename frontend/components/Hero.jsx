'use client'

// components/Hero.jsx - VERSIÓN PROFESIONAL
import { Cake, Award, Heart, ArrowRight, Star } from 'lucide-react'
import { useInView } from '@/hooks/useInView'

export default function Hero() {
  const [ref, isVisible] = useInView()

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background - Transparent to show global theme */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        {/* Content Container - Elegant & Modern without heavy borders */}
        <div className="backdrop-blur-[2px] w-full max-w-5xl mx-auto">
          {/* Logo Removed as requested */}

          {/* Main Title - Static Visible */}
          <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-7xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-6 font-script">
              <span className="bg-gradient-to-r from-brand-pink via-pink-400 to-brand-pink bg-clip-text text-transparent pb-4 block leading-tight">
                Sabrotortas
              </span>
            </h1>

            {/* Rating Stars */}
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 sm:w-6 sm:h-6 fill-yellow-400 text-yellow-400 drop-shadow-sm" />
              ))}
              <span className="ml-2 text-gray-800 font-bold text-sm sm:text-base">5.0 / 5.0</span>
            </div>

            <p className="text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-4 font-bold px-2 font-sans tracking-tight">
              Endulzando tus momentos especiales desde 2006
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-4 font-sans font-medium">
              Catering profesional, tortas decoradas únicas y organización de eventos con la más alta calidad y atención personalizada. Más de 18 años de experiencia haciendo realidad tus celebraciones.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-stretch sm:items-center px-4 animate-fade-in-up">
            <a
              href="#contacto"
              className="group bg-brand-pink text-white px-6 py-4 sm:px-10 sm:py-5 rounded-full font-bold text-lg sm:text-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-brand-pink to-pink-500 hover:from-pink-500 hover:to-brand-pink"
            >
              Solicitar Cotización Gratis
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform" />
            </a>
            <a
              href="#servicios"
              className="group bg-white/80 text-gray-800 px-6 py-4 sm:px-10 sm:py-5 rounded-full font-bold text-lg sm:text-xl border-2 sm:border-3 border-gray-200/50 hover:border-brand-pink hover:text-brand-pink hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 backdrop-blur-md"
            >
              Ver Nuestros Servicios
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-gray-600 font-sans">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="font-semibold">+500 Eventos Realizados</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="font-semibold">100% Satisfacción Garantizada</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="font-semibold">Resolución Sanitaria</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes scroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(16px); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-in;
        }
        .animate-fade-in-down {
          animation: fadeInDown 1s ease-in;
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-in;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .bg-size-200 {
          background-size: 200% 200%;
        }
        .bg-pos-0 {
          background-position: 0% 50%;
        }
        .bg-pos-100 {
          background-position: 100% 50%;
        }
        .border-3 {
          border-width: 3px;
        }
      `}</style>
    </section>
  )
}
