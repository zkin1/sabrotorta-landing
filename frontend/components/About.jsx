'use client'

import { useInView } from '@/hooks/useInView'
import { CheckCircle, Award, History } from 'lucide-react'

export default function About() {
    const [ref, isVisible] = useInView()

    return (
        <section id="nosotros" ref={ref} className="py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Content Column */}
                    <div className={`will-animate ${isVisible ? 'animate-in-left' : ''}`}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-lightPink/20 text-brand-pink font-semibold text-sm mb-6 font-sans">
                            <History className="w-4 h-4" />
                            <span>Desde 2006</span>
                        </div>

                        <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight font-script">
                            Una historia de <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-lightPink">pasión y compromiso</span>
                        </h2>

                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-sans">
                            {/* Mobile Summary */}
                            <div className="block md:hidden">
                                <p className="mb-6">
                                    Fundada en 2006, Sabrotortas ofrece <strong>catering y pastelería de excelencia</strong>. Con Resolución Sanitaria y 18 años de experiencia, hemos trabajado con grandes marcas como Paris y La Polar, garantizando calidad y confianza.
                                </p>
                                <a
                                    href="#contacto"
                                    className="inline-flex w-full items-center justify-center bg-brand-pink text-white px-6 py-3 rounded-xl font-bold hover:bg-pink-600 transition-colors shadow-md"
                                >
                                    Solicitar Cotización
                                </a>
                            </div>

                            {/* Desktop Full Text */}
                            <div className="hidden md:block space-y-6">
                                <p>
                                    Nos formamos como empresa a inicios del año 2006 teniendo como objetivo brindar siempre un servicio de primera calidad y una atención centrada en el cliente, brindando apoyo en cada una de las etapas del proceso.
                                </p>
                                <p>
                                    Desde nuestros comienzos hemos ido creciendo paulatinamente en el desarrollo de nuestra actividad y cartera de clientes. Nuestra vitrina ha sido internet, donde hemos utilizado las herramientas disponibles para la promoción y venta de nuestros productos.
                                </p>
                                <p>
                                    Hemos tenido el honor de participar en importantes eventos como ferias de la Municipalidad de Huechuraba, Exponovios, Expobebé, y eventos para grandes tiendas como Paris y La Polar.
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                    <Award className="w-5 h-5 text-green-600" />
                                </div>
                                <span className="font-semibold text-gray-800">Resolución Sanitaria N° 12343/2006</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-brand-blue/20 flex items-center justify-center flex-shrink-0">
                                    <CheckCircle className="w-5 h-5 text-brand-blue" />
                                </div>
                                <span className="font-semibold text-gray-800">Atención Personalizada</span>
                            </div>
                        </div>
                    </div>

                    {/* Image Column */}
                    <div className={`relative will-animate ${isVisible ? 'animate-in-right' : ''}`}>
                        {/* Main Image Frame */}
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                            {/* Usamos torta-5.png como foto principal de la historia */}
                            <img
                                src="/images/galeria/torta-5.png"
                                alt="Experiencia Sabrotortas"
                                className="w-full h-auto object-cover"
                                onError={(e) => {
                                    e.target.src = "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop"
                                }}
                            />
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-gradient-to-br from-brand-pink/30 to-brand-lightPink/30 rounded-full opacity-50 blur-3xl -z-10"></div>
                        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-gradient-to-br from-brand-blue/30 to-purple-200 rounded-full opacity-50 blur-3xl -z-10"></div>

                        {/* Experience Card */}
                        <div className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-6 bg-white p-4 sm:p-6 rounded-2xl shadow-xl z-20 border border-gray-100 max-w-[200px] sm:max-w-xs animate-float">
                            <p className="text-2xl sm:text-4xl font-bold text-brand-pink mb-1 font-script">10+ Años</p>
                            <p className="text-xs sm:text-base text-gray-600 font-medium font-sans">Entregando servicios de catering y repostería a destacadas empresas</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
