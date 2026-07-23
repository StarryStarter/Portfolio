import { motion } from 'framer-motion'
import { about } from '../utils/data'
import SectionHeading from '../components/SectionHeading'
import GlassCard from '../components/GlassCard'
import useCounter from '../hooks/useCounter'
import { fadeUp, staggerContainer, viewport } from '../animations/variants'

function StatCard({ stat, index }) {
  const [ref, value] = useCounter(stat.value)
  return (
    <motion.div variants={fadeUp} custom={index * 0.06}>
      <GlassCard className="p-6 h-full">
        <p ref={ref} className="font-display text-4xl font-semibold text-emerald">
          {value}
          {stat.suffix}
        </p>
        <p className="mt-2 text-sm text-muted">{stat.label}</p>
      </GlassCard>
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="about" className="relative section-pad container-px">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.9fr,1.1fr] gap-14 items-start">
        <SectionHeading
          index=""
          title="About "
          accent="Sachin"
          description="A quick systems check on who's building this."
        />

        <div>
          {about.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              custom={i * 0.08}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="text-muted leading-relaxed text-base sm:text-lg mb-5 last:mb-0"
            >
              {p}
            </motion.p>
          ))}

          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {about.stats.map((stat, i) => (
              <StatCard stat={stat} index={i} key={stat.label} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
