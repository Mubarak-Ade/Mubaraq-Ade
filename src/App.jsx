import React from "react"
import Hero from "./page/hero"
import About from "./page/About"
import Header from "./page/header"
import Skills from "./page/Skills"
import { useScroll, motion } from "framer-motion"
import Projects from "./page/projects"
import Contact from "./page/contact"
import Footer from "./page/footer"

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
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
    </>
  )
}

export default App
