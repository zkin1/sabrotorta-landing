'use client'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
    const whatsappNumber = '56977794373'
    const message = 'Hola! Me gustaría solicitar información sobre sus servicios.'

    const handleClick = () => {
        const url = 'https://wa.me/' + whatsappNumber + '?text=' + encodeURIComponent(message)
        window.open(url, '_blank')
    }

    return (
        <button
            onClick={handleClick}
            className="group fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:pr-6"
            aria-label="Contactar por WhatsApp"
        >
            <MessageCircle className="w-7 h-7" />
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out font-bold whitespace-nowrap">
                ¿Consultas?
            </span>
        </button>
    )
}
