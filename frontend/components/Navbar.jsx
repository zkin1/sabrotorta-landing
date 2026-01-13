'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
    const [isVisible, setIsVisible] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            // Show navbar when scrolled past hero
            const heroHeight = window.innerHeight * 0.9
            setIsVisible(window.scrollY > heroHeight)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/80 border-b border-white/20 shadow-lg transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    {/* Left side - Logo only */}
                    <Link href="/" className="flex-shrink-0">
                        <span className="font-script text-2xl sm:text-3xl lg:text-4xl bg-gradient-to-r from-brand-pink via-pink-400 to-brand-pink bg-clip-text text-transparent">
                            Sabrotortas
                        </span>
                    </Link>

                    {/* Right side - Navigation Links and CTA Button */}
                    <div className="flex items-center gap-4 lg:gap-8">
                        {/* Navigation Links - Desktop */}
                        <div className="hidden lg:flex items-center gap-6">
                            <a
                                href="#servicios"
                                className="text-gray-700 hover:text-brand-pink transition-colors duration-200 font-medium text-sm"
                            >
                                Servicios
                            </a>
                            <a
                                href="#galeria"
                                className="text-gray-700 hover:text-brand-pink transition-colors duration-200 font-medium text-sm"
                            >
                                Galería
                            </a>
                            <a
                                href="#nosotros"
                                className="text-gray-700 hover:text-brand-pink transition-colors duration-200 font-medium text-sm"
                            >
                                Nosotros
                            </a>
                        </div>

                        {/* CTA Button - Desktop only */}
                        <a
                            href="#contacto"
                            className="hidden lg:flex bg-brand-pink text-white px-8 py-3 rounded-full font-bold text-base tracking-wide hover:bg-pink-600 transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap items-center justify-center"
                        >
                            Solicitar Cotización
                        </a>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2 text-gray-700 hover:text-brand-pink transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden py-4 border-t border-gray-200/50 backdrop-blur-lg">
                        <div className="flex flex-col gap-3">
                            <a
                                href="#servicios"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-gray-700 hover:text-brand-pink transition-colors duration-200 font-medium py-2"
                            >
                                Servicios
                            </a>
                            <a
                                href="#galeria"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-gray-700 hover:text-brand-pink transition-colors duration-200 font-medium py-2"
                            >
                                Galería
                            </a>
                            <a
                                href="#nosotros"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-gray-700 hover:text-brand-pink transition-colors duration-200 font-medium py-2"
                            >
                                Nosotros
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}
