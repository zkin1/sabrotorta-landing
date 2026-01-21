'use client'

import { useInView } from '@/hooks/useInView'
import { useState, useMemo, useCallback, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { X, ChevronLeft, ChevronRight, Eye, ChevronDown } from 'lucide-react'
import Image from 'next/image'

export default function Galeria() {
    const [ref, isVisible] = useInView()
    const [showModal, setShowModal] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null)
    const [lightboxIndex, setLightboxIndex] = useState(0)
    const [showScrollHint, setShowScrollHint] = useState(true)
    const galleryScrollRef = useRef(null)

    // Memoize gallery images to prevent recreation on every render
    const allImages = useMemo(() =>
        Array.from({ length: 18 }, (_, i) => ({
            id: i + 1,
            image: `/images/galeria/gallery-${i + 1}.webp`,
            alt: `Creación ${i + 1}`
        })), []
    )

    // Imágenes destacadas para preview (8 imágenes para mejor balance)
    const previewImages = useMemo(() => {
        // IDs de las imágenes que queremos mostrar
        const featuredIds = [17, 1, 5, 2, 9, 4, 8]
        return featuredIds.map(id => allImages[id - 1])
    }, [allImages])

    const openModal = useCallback(() => {
        setShowModal(true)
        setShowScrollHint(true) // Reset scroll hint when modal opens
        document.body.style.overflow = 'hidden'
    }, [])

    const closeModal = useCallback(() => {
        setShowModal(false)
        setSelectedImage(null)
        document.body.style.overflow = 'auto'
        document.body.classList.remove('lightbox-open')
    }, [])

    const openLightbox = useCallback((index) => {
        setLightboxIndex(index)
        setSelectedImage(allImages[index])
        document.body.classList.add('lightbox-open')
    }, [allImages])

    const nextImage = useCallback(() => {
        setLightboxIndex(prev => {
            const newIndex = (prev + 1) % allImages.length
            setSelectedImage(allImages[newIndex])
            return newIndex
        })
    }, [allImages])

    const prevImage = useCallback(() => {
        setLightboxIndex(prev => {
            const newIndex = (prev - 1 + allImages.length) % allImages.length
            setSelectedImage(allImages[newIndex])
            return newIndex
        })
    }, [allImages])

    // Handle scroll to hide hint
    const handleScroll = useCallback(() => {
        if (galleryScrollRef.current && galleryScrollRef.current.scrollTop > 50) {
            setShowScrollHint(false)
        }
    }, [])

    return (
        <section id="galeria" ref={ref} className="py-16 md:py-24 bg-gradient-to-b from-white to-pink-50/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className={`text-center mb-12 md:mb-16 will-animate ${isVisible ? 'animate-in-up' : ''}`}>
                    <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
                        GALERÍA
                    </p>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-4 md:mb-6">
                        Nuestras Creaciones
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                        Cada torta es una obra de arte comestible
                    </p>
                </div>

                {/* Preview Grid - Bento layout para móvil y desktop */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-8 md:mb-12 auto-rows-[200px]">
                    {previewImages.map((item, index) => {
                        // Layout Bento para móvil y desktop
                        let spanClass = ''

                        if (index === 0) {
                            // Primera imagen: Grande (2 filas) en móvil y desktop
                            spanClass = 'row-span-2'
                        } else if (index === 3) {
                            // Imagen 4: Grande (2 filas) solo en desktop
                            spanClass = 'row-span-1 md:row-span-2'
                        } else {
                            // Resto: Normales
                            spanClass = 'row-span-1'
                        }

                        return (
                            <div
                                key={item.id}
                                className={`group relative rounded-2xl overflow-hidden cursor-pointer will-animate ${spanClass} ${isVisible ? 'animate-in-up' : ''} delay-${index}00`}
                                onClick={() => {
                                    openModal()
                                    openLightbox(item.id - 1)
                                }}
                            >
                                <Image
                                    src={item.image}
                                    alt={item.alt}
                                    fill
                                    sizes="(max-width: 768px) 50vw, 33vw"
                                    quality={75}
                                    loading="lazy"
                                    className="object-cover transition-transform duration-700 hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="bg-white/90 rounded-full shadow-lg p-3">
                                        <Eye className="text-pink-600 w-6 h-6" />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* View More Button */}
                <div className={`text-center will-animate ${isVisible ? 'animate-in-up' : ''} delay-600`}>
                    <button
                        onClick={openModal}
                        className="group relative inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-base md:text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
                    >
                        <span className="relative z-10">Ver Todas las Fotos</span>
                        <Eye className="w-5 h-5 md:w-6 md:h-6 relative z-10 group-hover:rotate-12 transition-transform" />
                        <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                    <p className="text-xs md:text-sm text-gray-500 mt-3 md:mt-4">{allImages.length} fotos en total</p>
                </div>
            </div>

            {/* Full Gallery Modal */}
            {showModal && typeof document !== 'undefined' && createPortal(
                <div className="fixed inset-0 z-[100] bg-black/80 overflow-y-auto animate-in fade-in duration-300" onClick={closeModal}>
                    <div className="min-h-screen p-3 md:p-6 lg:p-8 flex items-start justify-center">
                        {/* Modal Card Container */}
                        <div className="w-full max-w-7xl bg-white rounded-3xl shadow-2xl my-4 md:my-8 overflow-hidden" onClick={(e) => e.stopPropagation()}>
                            {/* Modal Header */}
                            <div className="bg-white border-b border-gray-100 px-4 md:px-6 lg:px-8 py-4 md:py-6 flex justify-between items-center">
                                <div>
                                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-1">
                                        Galería Completa
                                    </h3>
                                </div>
                                <button
                                    onClick={closeModal}
                                    className="text-gray-700 hover:bg-white/50 transition-all p-2 md:p-3 rounded-full touch-manipulation"
                                    aria-label="Cerrar galería"
                                >
                                    <X className="w-5 h-5 md:w-7 md:h-7" />
                                </button>
                            </div>

                            {/* Gallery Grid - Grid Uniforme como en las fotos */}
                            <div className="relative">
                                <div
                                    ref={galleryScrollRef}
                                    onScroll={handleScroll}
                                    className="p-3 md:p-6 lg:p-8 bg-gradient-to-b from-white/50 to-pink-50/50 max-h-[70vh] md:max-h-[75vh] overflow-y-auto gallery-scroll"
                                >
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                                        {allImages.map((item, index) => (
                                            <div
                                                key={item.id}
                                                className="group relative rounded-xl md:rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer aspect-square touch-manipulation border border-gray-100"
                                                onClick={() => openLightbox(index)}
                                            >
                                                <Image
                                                    src={item.image}
                                                    alt={item.alt}
                                                    fill
                                                    sizes="(max-width: 768px) 50vw, 33vw"
                                                    quality={75}
                                                    loading="lazy"
                                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-pink-500/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                    <Eye className="w-7 h-7 md:w-9 md:h-9 text-white transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Gradient Fade-out Overlay */}
                                <div
                                    className={`absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none transition-opacity duration-500 ${showScrollHint ? 'opacity-100' : 'opacity-0'}`}
                                />

                                {/* Scroll Hint Indicator */}
                                <div
                                    className={`absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none transition-all duration-500 ${showScrollHint ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                                >
                                    <p className="text-sm md:text-base font-semibold text-gray-700 bg-white/90 px-4 py-2 rounded-full shadow-lg backdrop-blur-sm">
                                        Desliza para ver más
                                    </p>
                                    <ChevronDown className="w-6 h-6 text-pink-500 animate-bounce" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>,
                document.body
            )}

            {/* Lightbox - Professional Full Screen Image Viewer */}
            {selectedImage && typeof document !== 'undefined' && createPortal(
                <div
                    className="fixed inset-0 z-[110] bg-black/95 flex flex-col animate-in fade-in duration-200"
                    onClick={closeModal}
                >
                    {/* Top Bar - Info and Close */}
                    <div className="flex justify-between items-center p-3 md:p-4 bg-black/80 border-b border-white/10">
                        <div className="flex items-center gap-3 md:gap-4">
                            <div className="bg-white/10 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/20">
                                <span className="text-white text-sm md:text-base font-semibold">
                                    {lightboxIndex + 1} / {allImages.length}
                                </span>
                            </div>
                            <span className="text-white/95 text-xs md:text-sm hidden sm:block">
                                Creación {lightboxIndex + 1}
                            </span>
                        </div>
                        <button
                            className="text-white hover:bg-white/10 transition-colors p-2 md:p-2.5 rounded-full touch-manipulation backdrop-blur-sm border border-white/10"
                            onClick={closeModal}
                            aria-label="Cerrar imagen"
                        >
                            <X className="w-5 h-5 md:w-6 md:h-6" />
                        </button>
                    </div>

                    {/* Main Image Area */}
                    <div className="flex-1 flex items-center justify-center p-2 relative overflow-hidden min-h-0">
                        {/* Navigation Buttons - Side */}
                        <button
                            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-white/20 transition-all p-2.5 md:p-3 rounded-full z-10 touch-manipulation backdrop-blur-md border border-white/20 hover:scale-110"
                            onClick={(e) => {
                                e.stopPropagation()
                                prevImage()
                            }}
                            aria-label="Imagen anterior"
                        >
                            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
                        </button>

                        <button
                            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-white/20 transition-all p-2.5 md:p-3 rounded-full z-10 touch-manipulation backdrop-blur-md border border-white/20 hover:scale-110"
                            onClick={(e) => {
                                e.stopPropagation()
                                nextImage()
                            }}
                            aria-label="Imagen siguiente"
                        >
                            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                        </button>

                        {/* Image - Strictly contained */}
                        <div className="relative w-full h-full flex items-center justify-center">
                            <Image
                                src={selectedImage.image}
                                alt={selectedImage.alt}
                                key={selectedImage.id}
                                width={1200}
                                height={800}
                                quality={90}
                                priority
                                className="max-w-full max-h-full w-auto h-auto object-contain shadow-2xl transition-opacity duration-300"
                                onClick={(e) => e.stopPropagation()}
                            />
                        </div>
                    </div>

                    {/* Bottom Bar - Thumbnails and Navigation */}
                    <div className="bg-black/80 border-t border-white/10 p-2 md:p-4">
                        <div className="max-w-7xl mx-auto">
                            {/* Thumbnail Strip */}
                            <div className="flex items-center gap-2 md:gap-3 overflow-x-auto pb-2 scrollbar-hide">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        prevImage()
                                    }}
                                    className="flex-shrink-0 text-white hover:bg-white/10 p-2 rounded-lg transition-colors"
                                    aria-label="Anterior"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </button>

                                {allImages.map((img, idx) => (
                                    <button
                                        key={img.id}
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            openLightbox(idx)
                                        }}
                                        className={`flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-lg overflow-hidden border-2 transition-all relative ${idx === lightboxIndex
                                            ? 'border-pink-500 scale-110 shadow-lg'
                                            : 'border-white/20 hover:border-white/50 opacity-60 hover:opacity-100'
                                            }`}
                                    >
                                        <Image
                                            src={img.image}
                                            alt={img.alt}
                                            fill
                                            sizes="64px"
                                            quality={60}
                                            loading="lazy"
                                            className="object-cover"
                                        />
                                    </button>
                                ))}

                                <button
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        nextImage()
                                    }}
                                    className="flex-shrink-0 text-white hover:bg-white/10 p-2 rounded-lg transition-colors"
                                    aria-label="Siguiente"
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <style jsx>{`
                        .scrollbar-hide::-webkit-scrollbar {
                            display: none;
                        }
                        .scrollbar-hide {
                            -ms-overflow-style: none;
                            scrollbar-width: none;
                        }
                        
                        /* Custom scrollbar for gallery */
                        .gallery-scroll::-webkit-scrollbar {
                            width: 8px;
                        }
                        .gallery-scroll::-webkit-scrollbar-track {
                            background: rgba(0, 0, 0, 0.05);
                            border-radius: 10px;
                        }
                        .gallery-scroll::-webkit-scrollbar-thumb {
                            background: linear-gradient(to bottom, #ec4899, #d946ef);
                            border-radius: 10px;
                            transition: background 0.3s;
                        }
                        .gallery-scroll::-webkit-scrollbar-thumb:hover {
                            background: linear-gradient(to bottom, #db2777, #c026d3);
                        }
                        
                        /* Firefox */
                        .gallery-scroll {
                            scrollbar-width: thin;
                            scrollbar-color: #ec4899 rgba(0, 0, 0, 0.05);
                        }
                    `}</style>
                </div>,
                document.body
            )}
        </section>
    )
}