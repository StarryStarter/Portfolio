import { motion } from 'framer-motion'
import { experience } from '../utils/data'
import SectionHeading from '../components/SectionHeading'
import GlassCard from '../components/GlassCard'
import { fadeUp, viewport } from '../animations/variants'

export default function Experience() {
  return (
    <section id="experience" className="relative section-pad container-px">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          index="03"
          title="Experience"
          description="Where the ideas met production traffic."
        />

        <div className="mt-14 relative">
          <div
            aria-hidden="true"
            className="absolute left-[27px] sm:left-1/2 top-0 bottom-0 w-px bg-line sm:-translate-x-1/2"
          />

          {experience.map((job, i) => (
            <motion.div
              key={job.id}
              variants={fadeUp}
              custom={i * 0.1}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="relative pl-16 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-10 mb-10 last:mb-0"
            >
              <div
                aria-hidden="true"
                className="absolute left-[19px] sm:left-1/2 top-2 w-4 h-4 -translate-x-1/2 rounded-full bg-ink border-2 border-emerald shadow-emerald-glow"
              />

              <div className="sm:text-right sm:pr-10">
                <span className="font-mono text-xs text-emerald">{job.period}</span>
              </div>

              <GlassCard className="p-7 sm:pl-10">
                <h3 className="font-display text-xl font-semibold">{job.role}</h3>
                <p className="text-emerald text-sm mt-1">{job.company}</p>
                <ul className="mt-4 space-y-2.5">
                  {job.points.map((point, idx) => (
                    <li key={idx} className="text-sm text-muted leading-relaxed flex gap-2">
                      <span className="text-emerald mt-1.5 shrink-0">▸</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
