import { FiArrowUp, FiGithub, FiLinkedin, FiTwitter, FiCode } from 'react-icons/fi'
import { profile } from '../utils/data'
import MagneticButton from './MagneticButton'

const socialIcons = {
  github: FiGithub,
  linkedin: FiLinkedin,
  twitter: FiTwitter,
  leetcode: FiCode,
}

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollTop = () => {
    document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-line container-px pt-16 pb-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-10">
        <div>
          <p className="font-display text-2xl sm:text-3xl font-semibold">
            Let's build something <span className="text-emerald">impactful</span>.
          </p>
          <a
            href={`mailto:${profile.email}`}
            data-cursor="pointer"
            className="mt-3 inline-block text-muted hover:text-emerald transition-colors"
          >
            {profile.email}
          </a>
        </div>

        <div className="flex items-center gap-4">
          {Object.entries(profile.socials).map(([key, url]) => {
            const Icon = socialIcons[key]
            return (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={key}
                data-cursor="pointer"
                className="w-11 h-11 grid place-items-center rounded-full glass text-muted hover:text-emerald hover:border-emerald/40 hover:-translate-y-1 hover:scale-110 transition-all duration-300"
              >
                <Icon />
              </a>
            )
          })}
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 flex flex-col-reverse sm:flex-row items-center justify-between gap-4 text-sm text-muted">
        <p>© {year} {profile.name}. Built with React & Tailwind CSS.</p>
        <MagneticButton
          onClick={scrollTop}
          aria-label="Back to top"
          className="w-10 h-10 grid place-items-center rounded-full border border-line hover:border-emerald hover:text-emerald transition-colors"
        >
          <FiArrowUp />
        </MagneticButton>
      </div>
    </footer>
  )
}
