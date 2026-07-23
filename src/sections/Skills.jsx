import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skills } from '../utils/data'
import SectionHeading from '../components/SectionHeading'
import GlassCard from '../components/GlassCard'
import { fadeUp, staggerContainer, viewport } from '../animations/variants'

const proficiency = [
  { label: 'Python', value: 92 },
  { label: 'C++', value: 88 },
  { label: 'Machine Learning', value: 85 },
  { label: 'React / JavaScript', value: 84 },
]

function SkillBar({ label, value, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <div ref={ref}>
      <div className="flex justify-between text-sm mb-2">
        <span className="font-medium">{label}</span>
        <span className="font-mono text-emerald">{value}%</span>
      </div>
      <div className="h-2 rounded-full bg-line/70 overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-emerald to-[#7C9CFF]"
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${value}%` : 0 }}
          transition={{ duration: 1, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative section-pad container-px">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          index="04"
          title="Skills & "
          accent="Stack"
          description="The tools that turn ideas into shipped systems."
        />

        <div className="mt-14 grid lg:grid-cols-2 gap-10">
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <GlassCard className="p-8">
              <p className="eyebrow mb-6">Core Proficiency</p>
              <div className="space-y-6">
                {proficiency.map((s, i) => (
                  <SkillBar key={s.label} {...s} index={i} />
                ))}
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid sm:grid-cols-2 gap-5"
          >
            {Object.entries(skills).map(([category, items], i) => (
              <motion.div key={category} variants={fadeUp} custom={i * 0.05}>
                <GlassCard className="p-6 h-full">
                  <p className="font-mono text-xs uppercase tracking-widest text-emerald mb-4">
                    {category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="text-xs sm:text-sm px-3 py-1.5 rounded-full border border-line text-muted hover:border-emerald/50 hover:text-white transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
