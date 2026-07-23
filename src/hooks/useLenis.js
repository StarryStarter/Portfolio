import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'

/**
 * Sets up Lenis smooth scrolling and syncs it with GSAP's ticker so that
 * ScrollTrigger-driven animations stay perfectly in step with scroll position.
 * Respects prefers-reduced-motion by skipping smoothing entirely.
 */
export default function useLenis() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) return

    const lenis = new Lenis({
      duration: 0.7,
      easing: (t) => 1 - Math.pow(1 - t, 3), // Smooth ease-out curve near end of scroll
      smoothWheel: true,
      wheelMultiplier: 1.1,
      touchMultiplier: 1.0,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
    }

    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(500, 33)

    return () => {
      gsap.ticker.remove(raf)
      lenis.destroy()
    }
  }, [])
}
