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
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
    })

    function raf(time) {
      lenis.raf(time)
    }

    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(raf)
      lenis.destroy()
    }
  }, [])
}
