'use client'

import { useState, useEffect, useRef } from 'react'

/**
 * Custom hook to detect when an element is in viewport
 * @param {Object} options - IntersectionObserver options
 * @returns {Array} [ref, isVisible] - Ref to attach to element and visibility state
 */
export function useInView(options = {}) {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            // Update visibility when element enters/exits viewport
            if (entry.isIntersecting) {
                setIsVisible(true)
            }
        }, {
            threshold: 0.1, // Trigger when 10% of element is visible
            ...options
        })

        const currentRef = ref.current
        if (currentRef) {
            observer.observe(currentRef)
        }

        // Cleanup observer on unmount
        return () => {
            if (currentRef) {
                observer.unobserve(currentRef)
            }
        }
    }, [options])

    return [ref, isVisible]
}
