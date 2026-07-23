import { useEffect, useRef } from 'react'

/**
 * A restrained particle-network canvas: a handful of drifting emerald nodes
 * connected by faint lines when close together. Pauses off-screen and
 * respects prefers-reduced-motion.
 */
export default function ParticleField({ density = 46, className = '' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    if (prefersReducedMotion) return

    let width, height, particles, animationId, running = true

    const resize = () => {
      width = canvas.width = canvas.offsetWidth * devicePixelRatio
      height = canvas.height = canvas.offsetHeight * devicePixelRatio
    }

    const init = () => {
      resize()
      particles = Array.from({ length: density }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25 * devicePixelRatio,
        vy: (Math.random() - 0.5) * 0.25 * devicePixelRatio,
        r: Math.random() * 1.6 + 0.6,
      }))
    }

    const step = () => {
      if (!running) return
      ctx.clearRect(0, 0, width, height)

      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(0, 229, 153, 0.55)'
        ctx.fill()
      })

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          const maxDist = 130 * devicePixelRatio
          if (dist < maxDist) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(0, 229, 153, ${0.12 * (1 - dist / maxDist)})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }

      animationId = requestAnimationFrame(step)
    }

    init()
    step()

    const handleResize = () => {
      resize()
    }
    window.addEventListener('resize', handleResize)

    const observer = new IntersectionObserver(([entry]) => {
      running = entry.isIntersecting
      if (running) step()
      else cancelAnimationFrame(animationId)
    })
    observer.observe(canvas)

    return () => {
      running = false
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
      observer.disconnect()
    }
  }, [density])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`w-full h-full ${className}`}
    />
  )
}
