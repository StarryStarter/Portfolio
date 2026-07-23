import { motion } from 'framer-motion'
import { FiBookOpen } from 'react-icons/fi'
import { education } from '../utils/data'
import SectionHeading from '../components/SectionHeading'
import GlassCard from '../components/GlassCard'
import { fadeUp, viewport } from '../animations/variants'

export default function Education() {
  return (
    <section id="education" className="relative section-pad container-px">
      <div className="max-w-7xl mx-auto">
        <SectionHeading index="" title="Education" description="Academic background and foundation." />

        <div className="mt-12 space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              variants={fadeUp}
              custom={i * 0.08}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <GlassCard className="p-8 flex flex-col sm:flex-row gap-6 sm:items-center">
                <div className="w-14 h-14 shrink-0 rounded-xl bg-emerald/10 text-emerald grid place-items-center text-2xl">
                  <FiBookOpen />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="font-display text-xl sm:text-2xl font-semibold">{edu.school}</h3>
                    <span className="font-mono text-xs text-emerald">{edu.period}</span>
                  </div>
                  <p className="mt-1 text-muted">{edu.degree}</p>
                  <p className="mt-3 text-sm text-muted/90 leading-relaxed">{edu.detail}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
