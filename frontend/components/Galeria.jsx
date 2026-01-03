'use client'

import { useInView } from '@/hooks/useInView'
import { useState } from 'react'
import { X } from 'lucide-react'

export default function Galeria() {
    const [ref, isVisible] = useInView()

    // Nombres de archivos generados: torta-1.png hasta torta-10.png
    const portfolioItems = [
        {
            id: 1,
            image: '/images/galeria/torta-1.png',
            category: 'Bodas',
            title: 'Elegancia Floral',
            description: 'Diseño de 3 pisos con flores de azúcar artesanales'
        },
        {
            id: 2,
            image: '/images/galeria/torta-2.png',
            category: 'Infantil',
            title: 'Aventura en la Selva',
            description: 'Modelado 3D de personajes y colores vibrantes'
        },
        {
            id: 3,
            image: '/images/galeria/torta-3.png',
            category: 'Bautizos',
            title: 'Dulzura Angelical',
            description: 'Tonos pasteles y detalles en encaje comestible'
        },
        {
            id: 4,
            image: '/images/galeria/torta-4.png',
            category: 'Cumpleaños',
            title: 'Fantasía de Chocolate',
            description: 'Drip cake con decoraciones de chocolate belga'
        },
        {
            id: 5,
            image: '/images/galeria/torta-5.png',
            category: 'Corporativo',
            title: 'Aniversario Empresa',
            description: 'Gran formato con logo corporativo comestible'
        },
        {
            id: 6,
            image: '/images/galeria/torta-6.png',
            category: 'Bodas',
            title: 'Rustico Chic',
            description: 'Semi-naked cake con flores naturales'
        }
    ]

    const [selectedImage, setSelectedImage] = useState(null)

    return (
        <section ref={ref} className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`text-center mb-12 will-animate ${isVisible ? 'animate-in-up' : ''}`}>
                    <h3 className="text-4xl font-bold text-gray-800 mb-4 font-script">
                        Nuestras Creaciones
                    </h3>
                    <p className="text-lg text-gray-600 font-sans">
                        Cada torta es una obra de arte comestible
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {portfolioItems.map((item, index) => (
                        <div
                            key={item.id}
                            className={`group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 aspect-square will-animate cursor-pointer ${isVisible ? 'animate-in-up' : ''} ${index >= 4 ? 'hidden md:block' : ''}`}
                            style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                            onClick={() => setSelectedImage(item)}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                onError={(e) => {
                                    e.target.src = `https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop`;
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-6">
                                <p className="text-white font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 font-sans">
                                    Ver Detalles
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal - Simple & Clean */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 transition-opacity duration-300 animate-in fade-in"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
                        <button
                            className="absolute -top-12 right-0 text-white hover:text-brand-pink transition-colors p-2"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="w-8 h-8" />
                        </button>

                        <img
                            src={selectedImage.image}
                            alt={selectedImage.title}
                            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />


                    </div>
                </div>
            )}
        </section>
    )
}
