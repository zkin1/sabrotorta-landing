'use client'

import { useInView } from '@/hooks/useInView'
import { CheckCircle, Award, History, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function About() {
    const [ref, isVisible] = useInView()

    return (
        <section id="nosotros" ref={ref} className="py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Content Column */}
                    <div className={`will-animate ${isVisible ? 'animate-in-left' : 'opacity-0'}`}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-lightPink/20 text-brand-pink font-semibold text-sm mb-6 font-sans">
                            <History className="w-4 h-4" />
                            <span>Desde 2006</span>
                        </div>

                        <h2 className="text-5xl md:text-6xl  text-gray-800 mb-6 leading-tight font-script">
                            Una historia de <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-lightPink">pasión y compromiso</span>
                        </h2>

                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed ">
                            {/* Concise Text */}
                            <div className="space-y-6">
                                <p>
                                    Fundada en 2006, Sabrotortas se especializa en <strong> repostería de excelencia y catering profesional</strong>. Con Resolución Sanitaria N° 12343/2006 y más de 18 años de experiencia, garantizamos calidad y confianza en cada servicio.
                                </p>
                                <p>
                                    Hemos tenido el honor de trabajar con grandes empresas como <strong>Paris y La Polar</strong>, además de participar en importantes eventos como ferias municipales, Exponovios y Expobebé.
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
                    <div className={`relative will-animate ${isVisible ? 'animate-in-right' : 'opacity-0'}`}>
                        {/* Main Image Frame */}
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transition-shadow duration-500 hover:shadow-3xl">
                            {/* Certificate and Awards Image */}
                            <Image
                                src="/images/galeria/gallery-18.webp"
                                alt="Experiencia Sabrotortas - 10+ Años"
                                width={897}
                                height={597}
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                                quality={85}
                                loading="lazy"
                                decoding="async"
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-gradient-to-br from-brand-pink/30 to-brand-lightPink/30 rounded-full opacity-50 blur-3xl -z-10"></div>
                        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-gradient-to-br from-brand-blue/30 to-purple-200 rounded-full opacity-50 blur-3xl -z-10"></div>

                        {/* Experience Card */}
                        <div className={`absolute -bottom-8 -left-4 sm:-bottom-10 sm:-left-8 bg-white p-3 sm:p-4 rounded-2xl shadow-xl z-20 border border-gray-100 max-w-[160px] sm:max-w-[220px] will-animate ${isVisible ? 'animate-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
                            <p className="text-xl sm:text-3xl font-bold text-brand-pink mb-1 font-script">10+ Años</p>
                            <p className="text-[10px] sm:text-sm text-gray-600 font-medium font-sans leading-tight">Entregando servicios de catering y repostería</p>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}
