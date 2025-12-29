'use client'

// components/Clientes.jsx - VERSIÓN PROFESIONAL
import { Building2, Star, TrendingUp, Users, Award, Shield } from 'lucide-react'
import { useInView } from '@/hooks/useInView'

export default function Clientes() {
  const [ref, isVisible] = useInView()
  const clientes = [
    { nombre: 'Bebé Paris', descripcion: 'Catering para eventos en Tiendas Paris Mall Plaza Norte', logo: '🏬' },
    { nombre: 'La Polar', descripcion: 'Catering para eventos de Novios en Mall Florida Center', logo: '🏢' },
    { nombre: 'Municipalidad de Vitacura', descripcion: 'Catering inauguración Punto Ecológico Parque Bicentenario', logo: '🏛️' },
    { nombre: 'UDLA', descripcion: 'Servicios de café y desayunos para cursos', logo: '🎓' },
    { nombre: 'Minera Fluor', descripcion: 'Servicios de café para celebraciones internas', logo: '⛏️' },
    { nombre: 'SALFA', descripcion: 'Cafetería para curso de capacitación 2015', logo: '🚗' },
    { nombre: 'Action Line', descripcion: 'Tortas y cafés para celebraciones y aniversarios', logo: '📊' }
  ]

  const stats = [
    {
      value: '18+',
      label: 'Años de Experiencia',
      icon: TrendingUp,
      color: 'from-pink-500 to-orange-500'
    },
    {
      value: '500+',
      label: 'Eventos Realizados',
      icon: Users,
      color: 'from-blue-500 to-purple-500'
    },
    {
      value: '100%',
      label: 'Clientes Satisfechos',
      icon: Star,
      color: 'from-green-500 to-teal-500'
    },
    {
      value: '50+',
      label: 'Empresas Atendidas',
      icon: Award,
      color: 'from-orange-500 to-red-500'
    }
  ]

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 md:mb-20 will-animate ${isVisible ? 'animate-in-up' : ''}`}>
          <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mb-4 md:mb-6 shadow-md">
            <Building2 className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-800 mb-4 md:mb-6">
            Confían en Nosotros
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            Más de 18 años entregando servicios de calidad a destacadas empresas.
          </p>
        </div>

        {/* Stats Grid - Hidden on mobile for simplicity */}
        <div className="hidden md:grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border border-gray-100 will-animate ${isVisible ? 'animate-in-up' : ''}`}
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg mb-4 shadow-md`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className={`text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-600 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Clients Grid */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Empresas que nos prefieren
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientes.map((cliente, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 will-animate ${isVisible ? 'animate-in-up' : ''}`}
                style={{ animationDelay: `${0.05 * (index + 1)}s` }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-orange-100 rounded-lg flex items-center justify-center text-2xl flex-shrink-0 shadow-sm">
                    {cliente.logo}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">
                      {cliente.nombre}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {cliente.descripcion}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mt-4 pt-4 border-t border-gray-100">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-gray-600 text-xs">Excelente</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}