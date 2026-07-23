import gsap from 'gsap'

/**
 * Builds the hero entrance timeline. Expects a refs object with:
 * eyebrow, title (array of line elements), subtitle, ctas, portrait, spine
 */
export function playHeroEntrance(refs) {
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches

  const tl = gsap.timeline({
    defaults: { ease: 'power3.out' },
  })

  if (prefersReducedMotion) {
    gsap.set(
      [refs.eyebrow, refs.title, refs.subtitle, refs.ctas, refs.portrait, refs.spine],
      { opacity: 1, y: 0, x: 0, clearProps: 'all' }
    )
    return tl
  }

  tl.set([refs.eyebrow, refs.subtitle, refs.ctas], { opacity: 0, y: 24 })
  tl.set(refs.title, { opacity: 0, y: '110%' })
  tl.set(refs.portrait, { opacity: 0, scale: 1.08, filter: 'blur(18px)' })
  tl.set(refs.spine, { opacity: 0, strokeDashoffset: 1000 })

  tl.to(refs.spine, { opacity: 1, strokeDashoffset: 0, duration: 1.8, ease: 'power2.inOut' }, 0)
    .to(refs.eyebrow, { opacity: 1, y: 0, duration: 0.6 }, 0.2)
    .to(refs.title, { opacity: 1, y: '0%', duration: 0.9, stagger: 0.08 }, 0.35)
    .to(refs.subtitle, { opacity: 1, y: 0, duration: 0.7 }, 0.8)
    .to(refs.ctas, { opacity: 1, y: 0, duration: 0.6 }, 0.95)
    .to(
      refs.portrait,
      { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1.2 },
      0.5
    )

  return tl
}
