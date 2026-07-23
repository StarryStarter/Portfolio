import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

/**
 * Wraps any element (button, anchor) and gives it a subtle magnetic pull
 * toward the cursor when hovered. Falls back to no movement on touch.
 */
export default function MagneticButton({ children, className = '', as: Tag = 'button', ...props }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 200, damping: 14, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 200, damping: 14, mass: 0.4 })

  const handleMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const relX = e.clientX - (rect.left + rect.width / 2)
    const relY = e.clientY - (rect.top + rect.height / 2)
    x.set(relX * 0.35)
    y.set(relY * 0.35)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const MotionTag = motion(Tag)

  return (
    <MotionTag
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      data-cursor="pointer"
      className={className}
      {...props}
    >
      {children}
    </MotionTag>
  )
}
