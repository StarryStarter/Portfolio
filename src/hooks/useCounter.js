import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

/**
 * Animates from 0 to `end` once the returned ref scrolls into view.
 */
export default function useCounter(end = 0, { duration = 1600 } = {}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px -10% 0px' })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let start = null
    let frame

    const step = (timestamp) => {
      if (start === null) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.floor(eased * end))

      if (progress < 1) frame = requestAnimationFrame(step)
      else setValue(end)
    }

    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [isInView, end, duration])

  return [ref, value]
}
