import { useState } from "react"
import Cursor from "./components/Cursor"
import Intro from "./components/Intro"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Testimonials from "./components/Testimonials"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import BackToTop from "./components/BackToTop"

function App() {
  const [introDone, setIntroDone] = useState(false)

  return (
    <div className="font-sans overflow-x-hidden">
      <Cursor />
      {!introDone && <Intro onDone={() => setIntroDone(true)} />}
      <div style={{ opacity: introDone ? 1 : 0, transition: "opacity 0.8s ease" }}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Testimonials />
        <Experience />
        <Contact />
        <Footer />
        <BackToTop />
      </div>
    </div>
  )
}

export default App