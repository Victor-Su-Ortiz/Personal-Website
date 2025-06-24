import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Skills from './components/Skills'
import Publications from './components/Publications'
import Contact from './components/Contact'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Education />
        <Skills />
        <Publications />
        <Contact />
      </main>
    </>
  )
}