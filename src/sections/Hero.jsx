import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FiArrowDown, FiDownload } from 'react-icons/fi'
import { profile, roles } from '../utils/data'
import useTypingEffect from '../hooks/useTypingEffect'
import { playHeroEntrance } from '../animations/gsapHero'
import AnimatedLine from '../components/AnimatedLine'
import ParticleField from '../components/ParticleField'
import MagneticButton from '../components/MagneticButton'

export default function Hero() {
  const eyebrowRef = useRef(null)
  const titleLine1 = useRef(null)
  const titleLine2 = useRef(null)
  const subtitleRef = useRef(null)
  const ctasRef = useRef(null)
  const portraitRef = useRef(null)
  const spineRef = useRef(null)

  const typed = useTypingEffect(roles)

  useEffect(() => {
    const ctx = playHeroEntrance({
      eyebrow: eyebrowRef.current,
      title: [titleLine1.current, titleLine2.current],
      subtitle: subtitleRef.current,
      ctas: ctasRef.current,
      portrait: portraitRef.current,
      spine: spineRef.current,
    })
    return () => ctx.kill()
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center pt-28 pb-16 container-px overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 opacity-60">
        <ParticleField density={42} />
      </div>
      <div className="absolute inset-0 -z-10 hidden md:block">
        <AnimatedLine ref={spineRef} />
      </div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-[1.15fr,0.85fr] gap-12 lg:gap-8 items-center">
        <div>
          <p ref={eyebrowRef} className="eyebrow">
            <span className="inline-block w-6 h-px bg-emerald mr-2 align-middle" />
            WELCOME TO MY PORTFOLIO
          </p>

          <h1 className="mt-6 font-display font-semibold leading-[1.05] text-[13vw] sm:text-6xl lg:text-7xl overflow-hidden">
            <span className="block overflow-hidden">
              <span ref={titleLine1} className="block text-white/50">
                Hi, I'm
              </span>
            </span>
            <span className="block overflow-hidden mt-1">
              <span ref={titleLine2} className="block text-emerald font-bold">
                Sachin Kumar
              </span>
            </span>
          </h1>

          <div className="mt-5 font-mono text-sm sm:text-base text-muted flex items-center gap-2">
            <span className="text-emerald font-bold">{'>'}</span>
            <span className="text-white font-medium">{typed}</span>
            <span className="inline-block w-[2px] h-4 bg-emerald ml-0.5 animate-pulse" />
          </div>

          <p ref={subtitleRef} className="mt-6 max-w-xl text-base sm:text-lg text-muted leading-relaxed">
            {profile.tagline}
          </p>

          <div ref={ctasRef} className="mt-10 flex flex-wrap items-center gap-4">
            <MagneticButton
              as="a"
              href={profile.resumeUrl}
              download
              data-cursor="pointer"
              className="inline-flex items-center gap-2 rounded-full bg-emerald text-ink font-semibold px-7 py-3.5 shadow-emerald-glow hover:brightness-110 transition"
            >
              <FiDownload /> Download Resume
            </MagneticButton>
            <MagneticButton
              as="a"
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              data-cursor="pointer"
              className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-3.5 font-semibold hover:border-emerald hover:text-emerald transition"
            >
              Contact Me
            </MagneticButton>
          </div>
        </div>

        <motion.div
          ref={portraitRef}
          whileHover={{ scale: 1.04 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="relative mx-auto lg:mx-0 w-64 h-64 sm:w-80 sm:h-80 cursor-pointer"
        >
          <div
            className="absolute inset-0 rounded-[2rem] p-[3px] animate-spin"
            style={{
              background: 'conic-gradient(from 0deg, #00E599, #7C9CFF, #00E599)',
              animationDuration: '10s',
              willChange: 'transform',
            }}
          >
            <div className="w-full h-full rounded-[calc(2rem-3px)] bg-surface grid place-items-center overflow-hidden">
              <span className="font-display text-6xl sm:text-7xl font-bold text-white/90 select-none">
                SK
              </span>
            </div>
          </div>
          <motion.div
            whileHover={{ scale: 1.08, y: -3 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            className="absolute -bottom-4 -left-4 glass-strong rounded-xl px-4 py-2 font-mono text-xs shadow-lg border border-emerald/20"
          >
            <span className="text-emerald animate-pulse">●</span> Available for opportunities
          </motion.div>
        </motion.div>
      </div>

      <a
        href="#about"
        onClick={(e) => {
          e.preventDefault()
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
        }}
        data-cursor="pointer"
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-muted text-xs font-mono"
      >
        SCROLL
        <FiArrowDown className="animate-bounce text-emerald" />
      </a>
    </section>
  )
}
