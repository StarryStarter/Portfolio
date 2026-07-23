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
          index="05"
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
                    <a
                      href={project.links.code}
                      aria-label={`${project.title} source code`}
                      data-cursor="pointer"
                      className="w-9 h-9 grid place-items-center rounded-full border border-line hover:border-emerald hover:text-emerald transition-colors"
                    >
                      <FiGithub />
                    </a>
                    <a
                      href={project.links.live}
                      aria-label={`${project.title} live demo`}
                      data-cursor="pointer"
                      className="w-9 h-9 grid place-items-center rounded-full border border-line hover:border-emerald hover:text-emerald transition-colors"
                    >
                      <FiArrowUpRight />
                    </a>
                  </div>
                </div>

                <h3 className="mt-6 font-display text-2xl font-semibold">{project.title}</h3>
                <p className="mt-3 text-muted leading-relaxed flex-1">{project.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/[0.04] text-muted"
                    >
                      {tech}
                    </span>
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
