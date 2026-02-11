'use client'

import { MessageSquare, Palette, PartyPopper } from 'lucide-react'
import { useInView } from '@/hooks/useInView'

const steps = [
    {
        icon: MessageSquare,
        number: '1',
        title: 'Cotiza',
        accent: 'tu Evento',
        description: 'Cuéntanos tu idea y te entregaremos una cotización personalizada en menos de 24 horas. Sin compromiso.',
        color: 'from-pink-500 to-rose-500',
        bgLight: 'bg-pink-50',
    },
    {
        icon: Palette,
        number: '2',
        title: 'Diseñamos',
        accent: 'Juntos',
        description: 'Trabajamos contigo para definir cada detalle: sabores, diseños, decoración y logística para tu evento perfecto.',
        color: 'from-purple-500 to-fuchsia-500',
        bgLight: 'bg-purple-50',
    },
    {
        icon: PartyPopper,
        number: '3',
        title: 'Momentos',
        accent: 'Inolvidables',
        description: 'Nos encargamos de todo para que tú solo disfrutes. Entrega puntual, presentación impecable y sabor inolvidable.',
        color: 'from-amber-500 to-orange-500',
        bgLight: 'bg-amber-50',
    },
]

export default function ComoTrabajamos() {
    const [ref, isVisible] = useInView()

    return (
        <section ref={ref} className="py-20 md:py-28 bg-gradient-to-b from-white via-pink-50/20 to-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className={`text-center mb-16 md:mb-20 will-animate ${isVisible ? 'animate-in-up' : ''}`}>
                    <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
                        ¿CÓMO FUNCIONA?
                    </p>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-4 md:mb-6">
                        Así de Fácil
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                        En solo 3 pasos, tu evento soñado se hace realidad
                    </p>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative max-w-5xl mx-auto md:max-w-none">
                    {/* Connection line (desktop only) */}
                    <div className="hidden md:block absolute top-[60px] lg:top-24 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-pink-200 via-purple-200 to-amber-200" />

                    {/* Connection line (mobile only) - Vertical elegant line */}
                    <div className="md:hidden absolute top-12 bottom-12 left-1/2 w-px -ml-[0.5px] bg-gradient-to-b from-transparent via-pink-200 to-transparent" />

                    {steps.map((step, index) => (
                        <div
                            key={step.number}
                            className={`relative text-center will-animate ${isVisible ? 'animate-in-up' : ''}`}
                            style={{ animationDelay: `${0.15 * (index + 1)}s` }}
                        >
                            {/* Card Content Wrapper */}
                            <div className="relative z-10 bg-white md:bg-transparent rounded-2xl md:rounded-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] md:shadow-none p-6 pb-8 md:p-0 mx-4 md:mx-0 border border-gray-100 md:border-none">
                                {/* Step Number & Icon Badge */}
                                <div className="relative inline-flex items-center justify-center -mt-12 md:mt-0 mb-6 group">
                                    <div className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl md:rounded-3xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg shadow-pink-500/10 relative z-10 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 ring-8 ring-white md:ring-0`}>
                                        <step.icon className="w-9 h-9 md:w-11 md:h-11 text-white" />
                                    </div>
                                    <span className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm font-bold text-gray-700 shadow-md border border-gray-100 z-20">
                                        {step.number}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="space-y-3">
                                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
                                        <span className="font-sans block md:inline">{step.title}</span>{' '}
                                        {step.accent && (
                                            <span className="font-script text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-pink-400 block md:inline mt-1 md:mt-0">
                                                {step.accent}
                                            </span>
                                        )}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed max-w-sm mx-auto text-sm md:text-base">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className={`text-center mt-14 md:mt-20 will-animate ${isVisible ? 'animate-in-up' : ''}`} style={{ animationDelay: '0.6s' }}>
                    <a
                        href="#contacto"
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-brand-pink to-pink-500 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                    >
                        Comienza Aquí
                        <MessageSquare className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </section>
    )
}
