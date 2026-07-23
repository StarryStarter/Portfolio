import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { navLinks } from '../utils/data'
import useActiveSection from '../hooks/useActiveSection'
import MagneticButton from './MagneticButton'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useActiveSection(navLinks.map((l) => l.href.replace('#', '')))

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 24)
          ticking = false
        })
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'
        }`}
    >
      <nav
        className={`container-px mx-auto flex items-center justify-between max-w-7xl rounded-2xl transition-all duration-300 ${scrolled ? 'glass-strong px-5 py-3 mx-4 sm:mx-8' : 'px-2'
          }`}
        aria-label="Primary"
      >
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="font-display text-lg font-semibold tracking-tight"
          data-cursor="pointer"
        >
          Sachin<span className="text-emerald"></span>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '')
            const isActive = activeId === id
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  data-cursor="pointer"
                  className="relative px-4 py-2 text-sm font-medium text-muted hover:text-white transition-colors"
                >
                  <span className={isActive ? 'text-white' : ''}>{link.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-4 right-4 -bottom-0.5 h-[2px] bg-emerald rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            )
          })}
        </ul>

        <MagneticButton
          as="a"
          href="#contact"
          onClick={(e) => handleNavClick(e, '#contact')}
          className="hidden lg:inline-flex items-center gap-2 rounded-full border border-emerald/40 text-emerald px-5 py-2 text-sm font-medium hover:bg-emerald hover:text-ink transition-colors"
        >
          Let's talk
        </MagneticButton>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="lg:hidden text-2xl p-2 text-white"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden mx-4 mt-3 glass-strong rounded-2xl overflow-hidden"
          >
            <ul className="flex flex-col p-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="block py-3 text-base font-medium text-muted hover:text-emerald transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
