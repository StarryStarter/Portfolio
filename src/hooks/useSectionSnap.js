import { useEffect } from 'react'

/**
 * Magnetic section snap:
 * Allows completely natural, fast continuous scrolling.
 * When the user pauses or stops scrolling (e.g. lifts finger/stops wheel),
 * it gently magnetic-snaps to the nearest section top if close enough.
 */
export default function useSectionSnap(sectionIds = [], options = {}) {
  const { delay = 180, snapThreshold = 0.35 } = options

  useEffect(() => {
    if (!sectionIds.length) return

    let isUserInteracting = false
    let timeoutId = null
    let isSnapping = false

    const handleTouchStart = () => {
      isUserInteracting = true
    }

    const handleTouchEnd = () => {
      isUserInteracting = false
      scheduleSnap()
    }

    const snapToNearestSection = () => {
      if (isSnapping) return

      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean)

      if (!sections.length) return

      const viewportHeight = window.innerHeight
      let closestSection = null
      let minDistance = Infinity

      for (const section of sections) {
        const rect = section.getBoundingClientRect()
        // Calculate distance from section top to top of viewport
        const dist = Math.abs(rect.top)

        // Only snap if section top is reasonably near the viewport top
        if (dist < viewportHeight * snapThreshold && dist < minDistance) {
          minDistance = dist
          closestSection = section
        }
      }

      // If within snap distance (and not already perfectly aligned), snap smoothly
      if (closestSection && minDistance > 12) {
        isSnapping = true
        closestSection.scrollIntoView({ behavior: 'smooth', block: 'start' })

        setTimeout(() => {
          isSnapping = false
        }, 800)
      }
    }

    const scheduleSnap = () => {
      if (timeoutId) clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        if (!isUserInteracting) {
          snapToNearestSection()
        }
      }, delay)
    }

    const handleScroll = () => {
      if (isSnapping) return
      scheduleSnap()
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchend', handleTouchEnd, { passive: true })
    window.addEventListener('wheel', scheduleSnap, { passive: true })

    return () => {
      if (timeoutId) clearTimeout(timeoutId)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
      window.removeEventListener('wheel', scheduleSnap)
    }
  }, [sectionIds, delay, snapThreshold])
}
