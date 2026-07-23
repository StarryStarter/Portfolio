import { motion } from 'framer-motion'
import { fadeUp, viewport } from '../animations/variants'

export default function SectionHeading({ index, title, accent, description, align = 'left' }) {
  return (
    <div className={align === 'center' ? 'text-center mx-auto max-w-2xl' : ''}>
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="eyebrow flex items-center gap-2 justify-start"
        style={align === 'center' ? { justifyContent: 'center' } : undefined}
      >
        <span className="inline-block w-6 h-px bg-emerald" />
        LOG // {index}
      </motion.p>
      <motion.h2
        variants={fadeUp}
        custom={0.08}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight"
      >
        {title}
        {accent && <span className="text-emerald">{accent}</span>}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeUp}
          custom={0.16}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-4 text-muted text-base sm:text-lg leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}
