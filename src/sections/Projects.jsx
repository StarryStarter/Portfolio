import { motion } from 'framer-motion'
import { FiArrowUpRight, FiGithub } from 'react-icons/fi'
import { projects } from '../utils/data'
import SectionHeading from '../components/SectionHeading'
import GlassCard from '../components/GlassCard'
import { fadeUp, viewport } from '../animations/variants'

export default function Projects() {
  return (
    <section id="projects" className="relative section-pad container-px">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          index=""
          title="Selected "
          accent="Projects"
          description="Two systems built to make noisy problems legible."
        />

        <div className="mt-14 grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              variants={fadeUp}
              custom={i * 0.1}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="group"
            >
              <GlassCard tilt glowColor={project.accent} className="p-8 h-full flex flex-col">
                <div className="flex items-start justify-between gap-4">
                  <span
                    className="font-mono text-xs px-2.5 py-1 rounded-full border"
                    style={{ color: project.accent, borderColor: `${project.accent}55` }}
                  >
                    0{i + 1}
                  </span>
                  <div className="flex gap-2">
                    <motion.a
                      href={project.links.code}
                      aria-label={`${project.title} source code`}
                      data-cursor="pointer"
                      whileHover={{ scale: 1.15, rotate: 5, color: '#00E599', borderColor: '#00E599' }}
                      transition={{ type: 'spring', stiffness: 350, damping: 15 }}
                      className="w-9 h-9 grid place-items-center rounded-full border border-line transition-colors"
                    >
                      <FiGithub />
                    </motion.a>
                    <motion.a
                      href={project.links.live}
                      aria-label={`${project.title} live demo`}
                      data-cursor="pointer"
                      whileHover={{ scale: 1.15, rotate: -5, color: '#00E599', borderColor: '#00E599' }}
                      transition={{ type: 'spring', stiffness: 350, damping: 15 }}
                      className="w-9 h-9 grid place-items-center rounded-full border border-line transition-colors"
                    >
                      <FiArrowUpRight />
                    </motion.a>
                  </div>
                </div>

                <h3 className="mt-6 font-display text-2xl font-semibold">{project.title}</h3>
                <p className="mt-3 text-muted leading-relaxed flex-1">{project.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.08, color: '#ffffff', backgroundColor: 'rgba(255,255,255,0.08)' }}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/[0.04] text-muted transition-colors cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
