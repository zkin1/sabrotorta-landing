'use client'

import { ArrowRight } from 'lucide-react'
import { useInView } from '@/hooks/useInView'
import Image from 'next/image'

export default function Servicios() {
  const [ref, isVisible] = useInView()

  const servicios = [
    {
      id: 'catering',
      titleMain: 'Catering',
      titleAccent: 'Corporativo',
      description: 'Ofrecemos servicios de catering, coffees y brunchs para empresas e instituciones. Más de 10 años de experiencia atendiendo a empresas destacadas con estándares de excelencia.',
      image: '/images/servicios/catering.webp'
    },
    {
      id: 'reposteria',
      titleMain: 'Repostería',
      titleAccent: 'de Autor',
      description: 'Creamos tortas únicas y personalizadas para cada ocasión. Alta calidad e innovación en diseños y sabores. Cada torta es una obra de arte comestible que combina técnicas artesanales con ingredientes premium.',
      image: '/images/servicios/reposteria.webp'
    },
    {
      id: 'organizacion',
      titleMain: 'Organización',
      titleAccent: 'de Eventos',
      description: 'Te acompañamos desde la planificación de tu matrimonio, ceremonia o unión civil con servicio integral: banquetería, decoración y detalles especiales. Realizamos eventos de todos los tamaños con valores accesibles para cada presupuesto. Nuestro equipo de profesionales hará realidad tu celebración soñada.',
      image: '/images/servicios/organizacion.webp'
    }
  ]

  return (
    <section id="servicios" ref={ref} className="section-servicios py-20 px-4">
      {/* Header */}
      <div className={`text-center mb-16 will-animate ${isVisible ? 'animate-in-up' : ''}`}>
        <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
          SERVICIOS
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-6">
          Lo que Hacemos
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {servicios.map((servicio, index) => (
          <div
            key={servicio.id}
            className={`group relative rounded-3xl overflow-hidden shadow-lg transition-all duration-500 will-animate ${isVisible ? 'animate-in-up' : ''}`}
            style={{ animationDelay: `${0.1 * (index + 1)}s` }}
          >
            {/* Background Image */}
            <div className="relative h-[420px] sm:h-[500px] lg:h-[600px]">
              <Image
                src={servicio.image}
                alt={`${servicio.titleMain} ${servicio.titleAccent}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                quality={75}
                loading="lazy"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-8 text-white">
              {/* Small Label */}
              <p className="text-xs uppercase tracking-[0.4em] mb-3 text-white/95">
                SERVICIO
              </p>

              {/* Title */}
              <h3 className="text-3xl sm:text-4xl mb-3">
                <span className="font-serif font-light block">
                  {servicio.titleMain}
                </span>
                <span className="font-script text-pink-400 block mt-1" style={{ fontFamily: "'Dancing Script', cursive" }}>
                  {servicio.titleAccent}
                </span>
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base leading-relaxed mb-6 text-white">
                {servicio.description}
              </p>

              {/* CTA Link */}
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-wider font-semibold group-hover:gap-3 transition-all text-white hover:text-pink-400"
              >
                Solicitar Cotización
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}