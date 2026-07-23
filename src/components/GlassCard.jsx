import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

/**
 * Non-tilt cards use a pure CSS hover lift — zero JS overhead.
 * Tilt cards get Framer Motion springs for the 3D mouse-follow effect.
 */
function TiltCard({ children, className, glowColor, ...props }) {
  const ref = useRef(null)
  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)

  const springX = useSpring(x, { stiffness: 150, damping: 18 })
  const springY = useSpring(y, { stiffness: 150, damping: 18 })

  const rotateX = useTransform(springY, [0, 1], [8, -8])
  const rotateY = useTransform(springX, [0, 1], [-8, 8])
  const glowXPct = useTransform(x, [0, 1], ['0%', '100%'])
  const glowYPct = useTransform(y, [0, 1], ['0%', '100%'])

  const handleMouseMove = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width)
    y.set((e.clientY - rect.top) / rect.height)
  }

  const reset = () => {
    x.set(0.5)
    y.set(0.5)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 250, damping: 20 }}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className={`relative glass rounded-2xl shadow-glass overflow-hidden ${className}`}
      {...props}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(360px circle at ${glowXPct} ${glowYPct}, ${glowColor}22, transparent 70%)`,
        }}
      />
      {children}
    </motion.div>
  )
}

export default function GlassCard({
  children,
  className = '',
  tilt = false,
  glowColor = '#00E599',
  ...props
}) {
  if (tilt) {
    return (
      <TiltCard className={className} glowColor={glowColor} {...props}>
        {children}
      </TiltCard>
    )
  }

  // Simple card — CSS-only hover, no Framer Motion overhead
  return (
    <div
      className={`relative glass rounded-2xl shadow-glass overflow-hidden transition-transform duration-200 hover:-translate-y-1.5 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
