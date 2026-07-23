import Hero from '../sections/Hero'
import About from '../sections/About'
import Education from '../sections/Education'
import Experience from '../sections/Experience'
import Skills from '../sections/Skills'
import Projects from '../sections/Projects'
import Achievements from '../sections/Achievements'
import Contact from '../sections/Contact'

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
    </main>
  )
}
