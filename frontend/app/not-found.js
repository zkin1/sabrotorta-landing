'use client'

import Link from 'next/link'
import { Home } from 'lucide-react'

export default function NotFound() {
    return (
        <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center p-4 text-center">
            <div className="mb-8 animate-bounce">
                <span className="text-9xl">🍰</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-pink-600 mb-4 font-dancing">
                ¡Ups! Página no encontrada
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-md">
                Parece que esta rebanada de pastel ya no existe. Regresemos a la vitrina principal.
            </p>
            <Link
                href="/"
                className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
                <Home size={20} />
                Volver al Inicio
            </Link>
        </div>
    )
}
