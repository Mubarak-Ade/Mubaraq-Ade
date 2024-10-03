import React, { useState, useEffect } from 'react'
import Header from './header'
import { motion, AnimatePresence } from 'framer-motion'
import { AiFillFacebook } from 'react-icons/ai'
import { IoLogoFacebook } from 'react-icons/io'
import { FaFacebookF, FaGithub, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Hero = () => {
  let [current, setCurrent] = useState(0)
  const text = ["Hi i'm Mubarak Ibrahim", "I create beautiful awesome responsive website"]
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
    <div id='home' className='flex flex-col items-center justify-center min-h-screen space-y-6 text-current bg-img-1'>
        {/* <Header /> */}
        <div className="flex items-center justify-center">
            <AnimatePresence>
                <div className="self-center w-20 p-2 m-2 bg-opacity-25 border-r">
                    <motion.ul className="flex flex-col items-center m-auto text-2xl  justify-evenly h-60">
                      <motion.li 
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.8}}
                      ><a href=""><FaGithub className='bg-white rounded-full cursor-pointer' /></a></motion.li>
                      <motion.li 
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.8}}
                      ><a href=""><FaWhatsapp className="text-green-600 cursor-pointer" /></a></motion.li>
                      <motion.li 
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.8}}
                      ><a href=""><FaFacebookF className="text-blue-800 bg-white rounded-full cursor-pointer" /></a></motion.li>
                      <motion.li 
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.8}}
                      ><a href=""><FaTwitter className='cursor-pointer text-sky-600' /></a></motion.li>
                    </motion.ul>
                </div>
            </AnimatePresence>
            <div className="content-center w-3/5 space-y-4 text-center">
                <AnimatePresence>
                    <motion.h1 className='self-center gap-3 p-4 text-white space-y-auto text-7xl text-wrap font-ubuntu h-72'>
                        {
                          // text[current]
                          character.map((text, index) => (
                            <motion.span
                              initial={{opacity: 0, visibility: 'hidden'}}
                              animate={{ opacity: [1,0,1], visibility: 'visible'}}
                              // whileView={{display: 'none'}}
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
                </AnimatePresence>
                <p className='p-2 text-2xl text-white font-roboto' >Passionate about building web experiences that are fast, functional, and user-friendly. Let's work together!</p>
                <div className="flex gap-2">
                <Link to="project" spy={true} smooth={true} offset={50} duration={500}>
                    <motion.button 
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.8}}
                    className='text-base bg-sky-900 p-3  text-white rounded-2xl m-2 hover:bg-sky-800'>View My Work</motion.button>
                </Link>
                <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>
                    <motion.button 
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.8}}
                    className='text-base bg-sky-900 px-2 py-3  text-white rounded-2xl m-2 hover:bg-sky-800'>Hire Me</motion.button>
                </Link>
                </div>
            </div>
            <AnimatePresence>
                <motion.div
                initial={{
                  borderRadius: '100%',
                  scale: 1
                }}
                animate={{
                  borderRadius: ['60%', '40%', '30%', '70%/60%', '30%', '70%', '40%'],
                  scale: [0.9,0.8,1,0.8,0.9]
                }}
                transition={{
                  duration: 4,
                  ease: 'easeInOut',
                  repeat: Infinity,
                  repeatType: 'loop',
                  repeatDelay: 4,
                  delay: 2
                }}
                className="flex items-center self-center p-2 bg-blue-900 rounded-full size-fit">
                    <motion.img  className='rounded-full size-[30rem]' src="/src/assets/profile2.jpg" alt="" />
                </motion.div>    
            </AnimatePresence>
        </div>
    </div>
  )
}

export default Hero