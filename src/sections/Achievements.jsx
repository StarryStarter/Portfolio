import { motion } from 'framer-motion'
import { achievements } from '../utils/data'
import SectionHeading from '../components/SectionHeading'
import GlassCard from '../components/GlassCard'
import { fadeUp, staggerContainer, viewport } from '../animations/variants'

export default function Achievements() {
  return (
    <section id="achievements" className="relative section-pad container-px">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          index="06"
          title="Track "
          accent="Record"
          description="Consistency, measured in repetitions."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-14 grid sm:grid-cols-3 gap-6"
        >
          {achievements.map((a, i) => (
            <motion.div key={a.id} variants={fadeUp} custom={i * 0.08}>
              <GlassCard className="p-8 h-full">
                <p className="font-display text-4xl sm:text-5xl font-bold gradient-text">
                  {a.metric}
                </p>
                <h3 className="mt-4 font-semibold text-lg">{a.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{a.detail}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
