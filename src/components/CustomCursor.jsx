import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [isTouch, setIsTouch] = useState(true)
  const [isPointer, setIsPointer] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)

  const dotX = useSpring(x, { stiffness: 1000, damping: 60 })
  const dotY = useSpring(y, { stiffness: 1000, damping: 60 })
  const ringX = useSpring(x, { stiffness: 220, damping: 26 })
  const ringY = useSpring(y, { stiffness: 220, damping: 26 })
  const glowX = useSpring(x, { stiffness: 90, damping: 20 })
  const glowY = useSpring(y, { stiffness: 90, damping: 20 })

  const frame = useRef()

  useEffect(() => {
    const hoverFine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    setIsTouch(!hoverFine)
    if (!hoverFine) return

    const handleMove = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const handleOver = (e) => {
      const interactive = e.target.closest('a, button, [data-cursor="pointer"]')
      setIsPointer(Boolean(interactive))
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    window.addEventListener('mouseover', handleOver)
    window.addEventListener('mouseleave', () => setIsVisible(false))

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseover', handleOver)
      cancelAnimationFrame(frame.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isTouch) return null

  return (
    <div aria-hidden="true" style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.3s' }}>
      <motion.div className="cursor-glow" style={{ translateX: glowX, translateY: glowY }} />
      <motion.div
        className="cursor-ring"
        style={{
          translateX: ringX,
          translateY: ringY,
          width: isPointer ? 54 : 34,
          height: isPointer ? 54 : 34,
          background: isPointer ? 'rgba(0,229,153,0.12)' : 'transparent',
        }}
      />
      <motion.div className="cursor-dot" style={{ translateX: dotX, translateY: dotY }} />
    </div>
  )
}
