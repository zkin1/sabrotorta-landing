'use client'

import { useInView } from '@/hooks/useInView'
import { useState } from 'react'
import { X, ChevronLeft, ChevronRight, Eye } from 'lucide-react'

export default function Galeria() {
    const [ref, isVisible] = useInView()
    const [showModal, setShowModal] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null)
    const [lightboxIndex, setLightboxIndex] = useState(0)

    // All 17 gallery images
    const allImages = Array.from({ length: 17 }, (_, i) => ({
        id: i + 1,
        image: `/images/galeria/gallery-${i + 1}.jpeg`,
        alt: `Creación ${i + 1}`
    }))

    // Specific featured images: gallery-2, 4, 5, 8, 9, 14
    const featuredImageIds = [2, 4, 5, 8, 9, 14]
    const featuredImages = featuredImageIds.map(id => allImages[id - 1])

    const openModal = () => {
        setShowModal(true)
        document.body.style.overflow = 'hidden'
    }

    const closeModal = () => {
        setShowModal(false)
        setSelectedImage(null)
        document.body.style.overflow = 'auto'
    }

    const openLightbox = (index) => {
        setLightboxIndex(index)
        setSelectedImage(allImages[index])
    }

    const nextImage = () => {
        const newIndex = (lightboxIndex + 1) % allImages.length
        setLightboxIndex(newIndex)
        setSelectedImage(allImages[newIndex])
    }

    const prevImage = () => {
        const newIndex = (lightboxIndex - 1 + allImages.length) % allImages.length
        setLightboxIndex(newIndex)
        setSelectedImage(allImages[newIndex])
    }

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

                {/* Featured Images Grid - Bento Box Style */}
                <div className="relative mb-8 md:mb-12">
                    {/* Desktop: Bento Box Layout */}
                    <div className="hidden md:grid md:grid-cols-12 md:auto-rows-[200px] gap-4">
                        {/* Gallery-2 - Large (4 cols x 2 rows) */}
                        <div
                            className={`col-span-4 row-span-2 group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer will-animate ${isVisible ? 'animate-in-up' : ''}`}
                            style={{ animationDelay: '0s' }}
                            onClick={() => {
                                openModal()
                                openLightbox(1)
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-purple-100"></div>
                            <img
                                src={featuredImages[0].image}
                                alt={featuredImages[0].alt}
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                <Eye className="w-12 h-12 text-white transform scale-0 group-hover:scale-100 transition-transform duration-500" />
                            </div>
                        </div>

                        {/* Gallery-4 - Tall (3 cols x 2 rows) */}
                        <div
                            className={`col-span-3 row-span-2 group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer will-animate ${isVisible ? 'animate-in-up' : ''}`}
                            style={{ animationDelay: '0.1s' }}
                            onClick={() => {
                                openModal()
                                openLightbox(3)
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-pink-100"></div>
                            <img
                                src={featuredImages[1].image}
                                alt={featuredImages[1].alt}
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                <Eye className="w-10 h-10 text-white transform scale-0 group-hover:scale-100 transition-transform duration-500" />
                            </div>
                        </div>

                        {/* Gallery-5 - Wide (5 cols x 2 rows) */}
                        <div
                            className={`col-span-5 row-span-2 group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer will-animate ${isVisible ? 'animate-in-up' : ''}`}
                            style={{ animationDelay: '0.2s' }}
                            onClick={() => {
                                openModal()
                                openLightbox(4)
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100"></div>
                            <img
                                src={featuredImages[2].image}
                                alt={featuredImages[2].alt}
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                <Eye className="w-12 h-12 text-white transform scale-0 group-hover:scale-100 transition-transform duration-500" />
                            </div>
                        </div>

                        {/* Gallery-8 - Medium (5 cols x 2 rows) */}
                        <div
                            className={`col-span-5 row-span-2 group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer will-animate ${isVisible ? 'animate-in-up' : ''}`}
                            style={{ animationDelay: '0.3s' }}
                            onClick={() => {
                                openModal()
                                openLightbox(7)
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-yellow-100"></div>
                            <img
                                src={featuredImages[3].image}
                                alt={featuredImages[3].alt}
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                <Eye className="w-12 h-12 text-white transform scale-0 group-hover:scale-100 transition-transform duration-500" />
                            </div>
                        </div>

                        {/* Gallery-9 - Medium (4 cols x 2 rows) */}
                        <div
                            className={`col-span-4 row-span-2 group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer will-animate ${isVisible ? 'animate-in-up' : ''}`}
                            style={{ animationDelay: '0.4s' }}
                            onClick={() => {
                                openModal()
                                openLightbox(8)
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-pink-100"></div>
                            <img
                                src={featuredImages[4].image}
                                alt={featuredImages[4].alt}
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                <Eye className="w-12 h-12 text-white transform scale-0 group-hover:scale-100 transition-transform duration-500" />
                            </div>
                        </div>

                        {/* Gallery-14 - Medium (3 cols x 2 rows) */}
                        <div
                            className={`col-span-3 row-span-2 group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer will-animate ${isVisible ? 'animate-in-up' : ''}`}
                            style={{ animationDelay: '0.5s' }}
                            onClick={() => {
                                openModal()
                                openLightbox(13)
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-blue-100"></div>
                            <img
                                src={featuredImages[5].image}
                                alt={featuredImages[5].alt}
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                <Eye className="w-12 h-12 text-white transform scale-0 group-hover:scale-100 transition-transform duration-500" />
                            </div>
                        </div>
                    </div>

                    {/* Mobile: Simple 2-column Grid */}
                    <div className="grid md:hidden grid-cols-2 gap-3">
                        {featuredImages.map((item, index) => (
                            <div
                                key={item.id}
                                className={`group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer will-animate ${isVisible ? 'animate-in-up' : ''} ${index === 0 || index === 2 ? 'row-span-2' : ''
                                    }`}
                                style={{
                                    animationDelay: `${0.1 * index}s`,
                                    aspectRatio: index === 0 || index === 2 ? '1/1.5' : '1/1'
                                }}
                                onClick={() => {
                                    openModal()
                                    openLightbox(item.id - 1)
                                }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-purple-100"></div>
                                <img
                                    src={item.image}
                                    alt={item.alt}
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                    <Eye className="w-8 h-8 text-white transform scale-0 group-hover:scale-100 transition-transform duration-500" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* View More Button */}
                <div className={`text-center will-animate ${isVisible ? 'animate-in-up' : ''}`} style={{ animationDelay: '0.6s' }}>
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

            {/* Full Gallery Modal - Glassmorphism Design */}
            {showModal && (
                <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md overflow-y-auto animate-in fade-in duration-300" onClick={closeModal}>
                    <div className="min-h-screen p-3 md:p-6 lg:p-8 flex items-start justify-center">
                        {/* Modal Card Container - Glassmorphism */}
                        <div className="w-full max-w-7xl bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl my-4 md:my-8 overflow-hidden border border-white/20" onClick={(e) => e.stopPropagation()}>
                            {/* Modal Header - Glassmorphism */}
                            <div className="bg-white/40 backdrop-blur-lg border-b border-white/20 px-4 md:px-6 lg:px-8 py-4 md:py-6 flex justify-between items-center">
                                <div>
                                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-1">
                                        Galería Completa
                                    </h3>
                                    <p className="text-gray-600 text-xs md:text-sm">{allImages.length} creaciones únicas</p>
                                </div>
                                <button
                                    onClick={closeModal}
                                    className="text-gray-700 hover:bg-white/50 transition-all p-2 md:p-3 rounded-full touch-manipulation"
                                    aria-label="Cerrar galería"
                                >
                                    <X className="w-5 h-5 md:w-7 md:h-7" />
                                </button>
                            </div>

                            {/* Gallery Grid - Inside Card */}
                            <div className="p-3 md:p-6 lg:p-8 bg-gradient-to-b from-white/50 to-pink-50/50 max-h-[70vh] md:max-h-[75vh] overflow-y-auto">
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-4">
                                    {allImages.map((item, index) => (
                                        <div
                                            key={item.id}
                                            className="group relative rounded-xl md:rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer aspect-square touch-manipulation border border-gray-100"
                                            onClick={() => openLightbox(index)}
                                        >
                                            <img
                                                src={item.image}
                                                alt={item.alt}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-pink-500/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                <Eye className="w-7 h-7 md:w-9 md:h-9 text-white transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Lightbox - Professional Full Screen Image Viewer */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-sm flex flex-col animate-in fade-in duration-200"
                    onClick={closeModal}
                >
                    {/* Top Bar - Info and Close */}
                    <div className="flex justify-between items-center p-3 md:p-4 bg-black/50 backdrop-blur-md border-b border-white/10">
                        <div className="flex items-center gap-3 md:gap-4">
                            <div className="bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/20">
                                <span className="text-white text-sm md:text-base font-semibold">
                                    {lightboxIndex + 1} / {allImages.length}
                                </span>
                            </div>
                            <span className="text-white/70 text-xs md:text-sm hidden sm:block">
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
                    <div className="flex-1 flex items-center justify-center p-2 md:p-4 relative">
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

                        {/* Image */}
                        <img
                            src={selectedImage.image}
                            alt={selectedImage.alt}
                            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>

                    {/* Bottom Bar - Thumbnails and Navigation */}
                    <div className="bg-black/50 backdrop-blur-md border-t border-white/10 p-2 md:p-4">
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
                                        className={`flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-lg overflow-hidden border-2 transition-all ${idx === lightboxIndex
                                                ? 'border-pink-500 scale-110 shadow-lg'
                                                : 'border-white/20 hover:border-white/50 opacity-60 hover:opacity-100'
                                            }`}
                                    >
                                        <img
                                            src={img.image}
                                            alt={img.alt}
                                            className="w-full h-full object-cover"
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
                    `}</style>
                </div>
            )}
        </section>
    )
}
