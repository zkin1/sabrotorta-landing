'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
    const [isVisible, setIsVisible] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        let ticking = false

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const heroHeight = window.innerHeight * 0.9
                    setIsVisible(window.scrollY > heroHeight)
                    ticking = false
                })
                ticking = true
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 bg-white/95 border-b border-gray-200/50 shadow-sm transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'
                }`}
        >
            <div className="w-full px-6 lg:px-8">
                <div className="flex items-center justify-between h-14">
                    {/* Left side - Logo */}
                    <Link href="/" className="flex items-center">
                        <span className="font-script text-2xl bg-gradient-to-r from-brand-pink to-pink-400 bg-clip-text text-transparent">
                            Sabrotortas
                        </span>
                    </Link>

                    {/* Right side - Navigation Links */}
                    <div className="flex items-center gap-1">
                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-1">
                            <a
                                href="#servicios"
                                className="text-gray-700 hover:text-brand-pink transition-colors font-medium text-sm px-4 py-2"
                            >
                                Servicios
                            </a>
                            <a
                                href="#galeria"
                                className="text-gray-700 hover:text-brand-pink transition-colors font-medium text-sm px-4 py-2"
                            >
                                Galería
                            </a>
                            <a
                                href="#nosotros"
                                className="text-gray-700 hover:text-brand-pink transition-colors font-medium text-sm px-4 py-2"
                            >
                                Nosotros
                            </a>
                            <a
                                href="#contacto"
                                className="text-gray-700 hover:text-brand-pink transition-colors font-medium text-sm px-4 py-2"
                            >
                                Solicitar Cotización
                            </a>
                        </div>

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
                    <div className="lg:hidden py-4 border-t border-gray-200/50">
                        <div className="flex flex-col gap-2">
                            <a
                                href="#servicios"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-gray-700 hover:text-brand-pink transition-colors font-medium py-2"
                            >
                                Servicios
                            </a>
                            <a
                                href="#galeria"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-gray-700 hover:text-brand-pink transition-colors font-medium py-2"
                            >
                                Galería
                            </a>
                            <a
                                href="#nosotros"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-gray-700 hover:text-brand-pink transition-colors font-medium py-2"
                            >
                                Nosotros
                            </a>
                            <a
                                href="#contacto"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-gray-700 hover:text-brand-pink transition-colors font-medium py-2"
                            >
                                Solicitar Cotización
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}
