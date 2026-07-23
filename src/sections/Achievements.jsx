import { motion } from 'framer-motion'
import { achievements } from '../utils/data'
import SectionHeading from '../components/SectionHeading'
import GlassCard from '../components/GlassCard'
import useCounter from '../hooks/useCounter'
import { fadeUp, staggerContainer, viewport } from '../animations/variants'

function AchievementCard({ item, index }) {
  // Parse numeric value and suffix (e.g., "500+" -> 500 and "+")
  const match = item.metric.match(/^(\d+)(.*)$/)
  const numericValue = match ? parseInt(match[1], 10) : 0
  const suffix = match ? match[2] : item.metric

  const [counterRef, value] = useCounter(numericValue, { duration: 1400 })

  return (
    <motion.div variants={fadeUp} custom={index * 0.08}>
      <GlassCard className="p-8 h-full">
        <p ref={counterRef} className="font-display text-4xl sm:text-5xl font-bold gradient-text">
          {numericValue > 0 ? value : item.metric}
          {numericValue > 0 ? suffix : ''}
        </p>
        <h3 className="mt-4 font-semibold text-lg">{item.title}</h3>
        <p className="mt-2 text-sm text-muted leading-relaxed">{item.detail}</p>
      </GlassCard>
    </motion.div>
  )
}

export default function Achievements() {
  return (
    <section id="achievements" className="relative section-pad container-px">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          index=""
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
            <AchievementCard key={a.id} item={a} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
