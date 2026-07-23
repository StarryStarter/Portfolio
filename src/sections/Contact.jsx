import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { FiMail, FiSend, FiMapPin } from 'react-icons/fi'
import { profile } from '../utils/data'
import SectionHeading from '../components/SectionHeading'
import GlassCard from '../components/GlassCard'
import MagneticButton from '../components/MagneticButton'
import { fadeUp, viewport } from '../animations/variants'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const initialForm = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.warn('EmailJS env vars are not configured — see README for setup.')
      setStatus('error')
      return
    }

    try {
      setStatus('sending')
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_name: profile.name,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      )
      setStatus('success')
      setForm(initialForm)
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative section-pad container-px">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.8fr,1.2fr] gap-14">
        <div>
          <SectionHeading
            index="07"
            title="Get in "
            accent="Touch"
            description="Have a role, a project, or just a hard problem worth discussing?"
          />

          <div className="mt-10 space-y-4">
            <a
              href={`mailto:${profile.email}`}
              data-cursor="pointer"
              className="flex items-center gap-4 group"
            >
              <span className="w-11 h-11 grid place-items-center rounded-full glass text-emerald group-hover:bg-emerald group-hover:text-ink transition-colors">
                <FiMail />
              </span>
              <span className="text-muted group-hover:text-white transition-colors">
                {profile.email}
              </span>
            </a>
            <div className="flex items-center gap-4">
              <span className="w-11 h-11 grid place-items-center rounded-full glass text-emerald">
                <FiMapPin />
              </span>
              <span className="text-muted">{profile.location}</span>
            </div>
          </div>
        </div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
          <GlassCard className="p-8">
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="text-xs font-mono text-muted mb-2 block">
                    Your name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full rounded-xl bg-white/[0.03] border border-line px-4 py-3 text-sm focus:border-emerald outline-none transition-colors"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-xs font-mono text-muted mb-2 block">
                    Your email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded-xl bg-white/[0.03] border border-line px-4 py-3 text-sm focus:border-emerald outline-none transition-colors"
                    placeholder="jane@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="text-xs font-mono text-muted mb-2 block">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-white/[0.03] border border-line px-4 py-3 text-sm focus:border-emerald outline-none transition-colors resize-none"
                  placeholder="Tell me a little about what you're building..."
                />
              </div>

              <div className="flex items-center gap-4">
                <MagneticButton
                  as="button"
                  type="submit"
                  disabled={status === 'sending'}
                  data-cursor="pointer"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald text-ink font-semibold px-7 py-3.5 shadow-emerald-glow hover:brightness-110 transition disabled:opacity-60"
                >
                  <FiSend />
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </MagneticButton>

                {status === 'success' && (
                  <span className="text-sm text-emerald">Sent! I'll reply soon.</span>
                )}
                {status === 'error' && (
                  <span className="text-sm text-red-400">
                    Couldn't send — email me directly instead.
                  </span>
                )}
              </div>
            </form>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}
