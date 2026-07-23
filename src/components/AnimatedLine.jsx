import { forwardRef } from 'react'

/**
 * The page's signature motif: a "signal trace" — a single continuous line
 * that behaves like a waveform settling into a steady state, echoing the
 * idea of a system that turns noise into a clean signal (Sachin's own
 * description of his work). Drawn in by GSAP on hero load.
 */
const AnimatedLine = forwardRef(function AnimatedLine(_, ref) {
  return (
    <svg
      viewBox="0 0 1200 300"
      fill="none"
      className="absolute inset-x-0 top-1/2 -translate-y-1/2 w-full h-full opacity-80"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        ref={ref}
        d="M -50 150
           C 60 40, 140 260, 240 150
           C 320 65, 380 235, 460 150
           C 540 95, 580 205, 660 150
           C 760 90, 820 210, 920 150
           C 1000 105, 1060 195, 1250 150"
        stroke="url(#signalGradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
        pathLength="1000"
        strokeDasharray="1000"
        strokeDashoffset="1000"
      />
      <defs>
        <linearGradient id="signalGradient" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00E599" stopOpacity="0.15" />
          <stop offset="50%" stopColor="#00E599" stopOpacity="1" />
          <stop offset="100%" stopColor="#7C9CFF" stopOpacity="0.6" />
        </linearGradient>
      </defs>
    </svg>
  )
})

export default AnimatedLine
