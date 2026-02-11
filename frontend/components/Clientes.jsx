'use client'

// components/Clientes.jsx - VERSIÓN PROFESIONAL
import { Building2, ShoppingBag, Landmark, GraduationCap, Pickaxe, Car, LineChart } from 'lucide-react'
import { useInView } from '@/hooks/useInView'

export default function Clientes() {
  const [ref, isVisible] = useInView()
  const clientes = [
    { nombre: 'Bebé Paris', descripcion: 'Catering para eventos en Tiendas Paris Mall Plaza Norte', logo: ShoppingBag },
    { nombre: 'La Polar', descripcion: 'Catering para eventos de Novios en Mall Florida Center', logo: ShoppingBag },
    { nombre: 'Municipalidad de Vitacura', descripcion: 'Catering inauguración Punto Ecológico Parque Bicentenario', logo: Landmark },
    { nombre: 'UDLA', descripcion: 'Servicios de café y desayunos para cursos', logo: GraduationCap },
    { nombre: 'Minera Fluor', descripcion: 'Servicios de café para celebraciones internas', logo: Pickaxe },
    { nombre: 'SALFA', descripcion: 'Cafetería para curso de capacitación 2015', logo: Car },
    { nombre: 'Action Line', descripcion: 'Tortas y cafés para celebraciones y aniversarios', logo: LineChart }
  ]


  return (
    <section id="clientes" ref={ref} className="section-clientes py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 md:mb-20 will-animate ${isVisible ? 'animate-in-up' : ''}`}>
          <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mb-4 md:mb-6 shadow-md">
            <Building2 className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-4 md:mb-6">
            Confían en Nosotros
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            Más de 18 años entregando servicios de calidad a destacadas empresas.
          </p>
        </div>



        {/* Clients Grid */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientes.map((cliente, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 will-animate ${isVisible ? 'animate-in-up' : ''}`}
                style={{ animationDelay: `${0.05 * (index + 1)}s` }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-fuchsia-100 rounded-lg flex items-center justify-center text-2xl flex-shrink-0 shadow-sm">
                    <cliente.logo className="w-6 h-6 text-pink-500" />
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}