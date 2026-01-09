'use client'

// components/Servicios.jsx - VERSIÓN INMERSIVA
import { ArrowRight } from 'lucide-react'
import { useInView } from '@/hooks/useInView'

export default function Servicios() {
  const [ref, isVisible] = useInView()

  const servicios = [
    {
      id: 'catering',
      titleMain: 'Catering',
      titleAccent: 'Corporativo',
      description: 'Ofrecemos servicios de catering, coffees y brunchs para empresas e instituciones. Más de 10 años de experiencia atendiendo a empresas destacadas con estándares de excelencia. Cada evento es una oportunidad para crear experiencias memorables que reflejan la calidad y profesionalismo de tu marca.',
      image: '/images/servicios/catering.webp'
    },
    {
      id: 'reposteria',
      titleMain: 'Repostería',
      titleAccent: 'de Autor',
      description: 'Creamos tortas únicas y personalizadas para cada ocasión. Alta calidad e innovación en diseños y sabores. Cada torta es una obra de arte comestible que combina técnicas artesanales con ingredientes premium. Nos especializamos en transformar tus ideas en creaciones dulces que sorprenden y deleitan.',
      image: '/images/servicios/reposteria.webp'
    },
    {
      id: 'organizacion',
      titleMain: 'Organización',
      titleAccent: 'Integral',
      description: 'Contamos con personal profesional y equipamiento completo para tus celebraciones familiares y empresariales. Te acompañamos en cada detalle, desde la planificación inicial hasta la ejecución final. Nuestro equipo se encarga de crear ambientes únicos que reflejan tu estilo y hacen de tu evento una experiencia inolvidable.',
      image: '/images/servicios/organizacion.webp'
    }
  ]

  return (
    <section id="servicios" ref={ref} className="py-0">
      {/* Header */}
      <div className={`text-center py-20 px-4 will-animate ${isVisible ? 'animate-in-up' : ''}`}>
        <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
          SERVICIOS
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-6">
          Lo que Hacemos
        </h2>
      </div>

      {/* Immersive Services Sections */}
      <div className="space-y-0 md:space-y-8 md:px-8">
        {servicios.map((servicio, index) => (
          <div
            key={servicio.id}
            className={`relative min-h-[600px] md:min-h-[60vh] flex items-center will-animate md:rounded-[3rem] overflow-hidden shadow-2xl ${isVisible ? 'animate-in-up' : ''}`}
            style={{ animationDelay: `${0.15 * index}s` }}
          >
            {/* Background Image */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={servicio.image}
                alt={`${servicio.titleMain} ${servicio.titleAccent}`}
                className="w-full h-full object-cover"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center center',
                  filter: 'brightness(0.6)'
                }}
              />
              {/* Overlay Oscuro */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-black/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 w-full">
              <div className="max-w-xl">
                {/* Small Label */}
                <p className="text-xs uppercase tracking-[0.4em] mb-6 text-white/80">
                  SERVICIO
                </p>

                {/* Title with Mixed Typography */}
                <h3 className="text-5xl sm:text-6xl md:text-7xl mb-6 text-white">
                  <span className="font-serif font-light block">
                    {servicio.titleMain}
                  </span>
                  <span className="font-script text-pink-400 block mt-2" style={{ fontFamily: "'Dancing Script', cursive" }}>
                    {servicio.titleAccent}
                  </span>
                </h3>

                {/* Description */}
                <p className="text-base md:text-lg leading-relaxed mb-8 text-white/95">
                  {servicio.description}
                </p>

                {/* CTA Link */}
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 text-sm uppercase tracking-wider font-semibold group transition-all text-white hover:text-pink-400"
                >
                  Ver más detalles
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>


    </section>
  )
}