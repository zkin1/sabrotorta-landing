'use client'

import { useInView } from '@/hooks/useInView'

export default function Galeria() {
    const [ref, isVisible] = useInView()

    return (
        <section ref={ref} className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`text-center mb-12 will-animate ${isVisible ? 'animate-in-up' : ''}`}>
                    <h3 className="text-4xl font-bold text-gray-800 mb-4">
                        Nuestras Creaciones
                    </h3>
                    <p className="text-lg text-gray-600">
                        Cada torta es una obra de arte comestible
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                        <div
                            key={num}
                            className={`group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 aspect-square will-animate ${isVisible ? 'animate-in-up' : ''} ${num > 4 ? 'hidden md:block' : ''}`}
                            style={{ animationDelay: `${0.1 * num}s` }}
                        >
                            <img
                                src={`/images/tortas/torta-${num}.jpg`}
                                alt={`Torta decorada ${num}`}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                onError={(e) => {
                                    e.target.src = `https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop`;
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-6">
                                <p className="text-white font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    Ver Detalles
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
