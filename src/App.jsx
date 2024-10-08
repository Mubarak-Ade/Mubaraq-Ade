import React from "react"
import Hero from "./components/hero"
import About from "./components/About"
import Header from "./components/header"
import Skills from "./components/Skills"
import { useScroll, motion } from "framer-motion"
import Projects from "./components/projects"
import Contact from "./components/contact"
import Footer from "./components/footer"

function App() {

  const { scrollYProgress } = useScroll()
  
  return (
    <>
        <div className="">
            <motion.div 
              style={{
                  scaleX: scrollYProgress,
                  transformOrigin: 'left',
                  position: 'fixed',
                  display: 'block',
                  height: '5rem'
              }}
        className="w-full h-40 top-0 bg-slate-400 bg-opacity-50" />
            <Header />
        </div>
        <main className="">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </main>
    </>
  )
}

export default App
