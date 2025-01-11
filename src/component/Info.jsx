import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import '../App.css'

function Info() {
    let [current, setCurrent] = useState(0)
    const text = ["Hi i'm Mubaraq Ibrahim", "I create beautiful awesome responsive website"]
    const character = text[current].split("")
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrent(prev => 
            prev === text.length - 1 ? 0 : prev + 1
            )
            }, 10000);  
        return () => clearInterval(intervalId);

  }, [character, text, current])
  return (
    <AnimatePresence>
        <div className="flex flex-col items-center gap-10 lg:col-start-1 lg:row-start-1 row-start-3 p-2 md:w-[40rem]">
            <motion.h1 className='space-y-auto font-ubuntu text-white md:text-5xl text-3xl text-center lg:text-5xl'>
                {
                // text[current]
                character.map((text, index) => (
                    <motion.span
                    initial={{opacity: 0, visibility: 'hidden'}}
                    animate={{ opacity: [1,0,1], visibility: 'visible'}}
                    // whileView={{display: 'none'}}z
                    transition={{
                        delay: index * 0.1,
                        repeat: Infinity,
                        repeatType: 'loop',
                        repeatDelay: 1,
                        ease: 'linear',
                        duration: 5,
                    }}
                    exit={{
                        opacity: 0
                    }}
                    key={index} className=''> 
                    {text === "" ? '\u00A0' : text}
                    </motion.span>
                ))
            }
            </motion.h1>  
            <p className='mt-2 p-2 font-roboto text-white md:text-3xl text-center lg:text-xl' >Passionate about building web experiences that are fast, functional, and user-friendly. Let's work together!</p>
            <div className="flex gap-2 m-4">
                <Link to="project" spy={true} smooth={true} offset={50} duration={500}>
                    <motion.button 
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.8}}
                    className='bg-sky-900 hover:bg-sky-800 m-2 p-3 rounded-xl text-base text-white'>View My Work</motion.button>
                </Link>
                <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>
                    <motion.button 
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.8}}
                    className='bg-sky-900 hover:bg-sky-800 m-2 px-2 py-3 rounded-xl text-base text-white'>Hire Me</motion.button>
                </Link>
            </div>
        </div>
    </AnimatePresence>
  )
}

export default Info