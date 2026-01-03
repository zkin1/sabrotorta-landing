'use client'

// components/Servicios.jsx - VERSIÓN PROFESIONAL
import { Coffee, Cake, Sparkles, Users, CheckCircle, ArrowRight } from 'lucide-react'
import { useInView } from '@/hooks/useInView'

export default function Servicios() {
  const [ref, isVisible] = useInView()
  const servicios = [
    {
      icon: Coffee,
      title: 'Catering Corporativo',
      description: 'Servicios de catering, coffees y brunchs para empresas e instituciones. Más de 10 años de experiencia atendiendo a empresas destacadas con estándares de excelencia.',
      items: ['Coffees y desayunos ejecutivos', 'Eventos corporativos', 'Celebraciones internas', 'Cafetería para capacitaciones'],
      color: 'from-pink-400 to-rose-500',
      bgColor: 'from-pink-50 to-rose-50'
    },
    {
      icon: Cake,
      title: 'Tortas Decoradas',
      description: 'Tortas únicas y personalizadas para cada ocasión. Alta calidad e innovación en diseños y sabores. Cada torta es una obra de arte comestible.',
      items: ['Cumpleaños temáticos', 'Matrimonios elegantes', 'Baby Showers personalizados', 'Aniversarios especiales'],
      color: 'from-pink-400 to-purple-500',
      bgColor: 'from-pink-50 to-purple-50'
    },
    {
      icon: Users,
      title: 'Organización de Eventos',
      description: 'Personal profesional y equipamiento completo para tus celebraciones familiares y empresariales. Te acompañamos en cada detalle.',
      items: ['Amoblado completo (sillas y mesas)', 'Decoración temática', 'Ambientación de locales', 'Asesoría personalizada 24/7'],
      color: 'from-blue-400 to-indigo-500',
      bgColor: 'from-blue-50 to-indigo-50'
    }
  ]

  return (
    <section id="servicios" ref={ref} className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-12 md:mb-20 will-animate ${isVisible ? 'animate-in-up' : ''}`}>
          <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-pink-100 to-fuchsia-100 rounded-full mb-4 md:mb-6 shadow-md">
            <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-pink-600" />
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-4 md:mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Soluciones integrales para hacer de tu evento algo inolvidable.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20">
          {servicios.map((servicio, index) => (
            <div
              key={index}
              className={`group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden will-animate ${isVisible ? 'animate-in-up' : ''}`}
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-br ${servicio.color} rounded-lg flex items-center justify-center mb-6 shadow-md`}>
                  <servicio.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {servicio.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {servicio.description}
                </p>

                <ul className="space-y-4 hidden md:block">
                  {servicio.items.map((item, idx) => (
                    <li key={idx} className="flex items-start group/item">
                      <CheckCircle className="w-6 h-6 text-pink-500 mr-3 mt-0.5 flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                      <span className="text-gray-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <a href="#contacto" className="inline-flex items-center text-pink-600 font-bold hover:gap-3 transition-all group/link">
                    Más información
                    <ArrowRight className="w-5 h-5 ml-2 group-hover/link:translate-x-2 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>



        {/* CTA Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-pink-400 to-pink-500 rounded-3xl p-12 md:p-16 text-center shadow-2xl">
          <div className="relative z-10">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ¿Tienes algo especial en mente?
            </h3>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Contamos con asesoría personalizada para adaptar nuestros servicios a tus necesidades específicas. Tu imaginación es nuestro límite.
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center bg-white text-pink-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-gray-100 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 gap-3"
            >
              Contáctanos Ahora
              <ArrowRight className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}