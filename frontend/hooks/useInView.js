'use client'

import { useState, useEffect, useRef, useMemo } from 'react'

/**
 * Custom hook to detect when an element is in viewport
 * Optimized for performance with memoization
 * @param {Object} options - IntersectionObserver options
 * @returns {Array} [ref, isVisible] - Ref to attach to element and visibility state
 */
export function useInView(options = {}) {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef(null)
    const observerRef = useRef(null)

    // Memoize options to prevent observer recreation
    const observerOptions = useMemo(() => ({
        threshold: 0.1,
        rootMargin: '50px', // Start animation slightly before element is visible
        ...options
    }), [options.threshold, options.rootMargin, options.root])

    useEffect(() => {
        const currentRef = ref.current
        if (!currentRef) return

        // Reuse observer if possible
        if (!observerRef.current) {
            observerRef.current = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    // Disconnect after first intersection to save resources
                    observerRef.current?.disconnect()
                }
            }, observerOptions)
        }

        observerRef.current.observe(currentRef)

        // Cleanup
        return () => {
            observerRef.current?.disconnect()
        }
    }, [observerOptions])

    return [ref, isVisible]
}
