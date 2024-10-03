import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { FaFacebookF, FaGithub, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-scroll'

function Footer() {
  return (
    <div className='p-2 h-[25rem] bg-gradient-to-tr flex flex-col items-center justify-around from-blue-700 to-indigo-800'>
        <h1 className='font-sofadiOne text-6xl text-center p-4 text-white'>Mbrk</h1>
        <motion.ul  className='z-10 flex gap-8 text-lg font-semibold text-white rounded-3xl'>
            <Link to="about" spy={true} activeStyle={{
              fontSize: '20px'
            }} 
            smooth={true} offset={50} duration={500}>
            <motion.li
            initial={{scale: 1}}
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.5}}
            transition={{ ease: 'backInOut'}}
            className='cursor-pointer'
            >About</motion.li>
          </Link>
          <Link to="skill" spy={true} activeStyle={{
             fontSize: '20px'
          }} 
          smooth={true} offset={50} duration={500}>
            <motion.li
            initial={{scale: 1}}
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.5}}
            transition={{ ease: 'backInOut'}}
            className='cursor-pointer'
            >Skill</motion.li>
          </Link>
          <Link to="project" spy={true} activeStyle={{
             fontSize: '20px'
          }} 
           smooth={true} offset={50} duration={500}>
            <motion.li
            initial={{scale: 1}}
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.5}}
            transition={{ ease: 'backInOut'}}
            className='cursor-pointer'
            >Project</motion.li>
          </Link>
        </motion.ul>
        <AnimatePresence>
            <motion.ul className="flex items-center m-auto text-3xl gap-8 justify-evenly ">
                <motion.li 
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.8}}
                ><FaGithub className='bg-white rounded-full cursor-pointer' /></motion.li>
                <motion.li 
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.8}}
                ><FaWhatsapp className="text-green-600 cursor-pointer" /></motion.li>
                <motion.li 
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.8}}
                ><FaFacebookF className="text-blue-800 bg-white rounded-full cursor-pointer" /></motion.li>
                <motion.li 
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.8}}
                ><FaTwitter className='cursor-pointer text-sky-600' /></motion.li>
            </motion.ul>
        </AnimatePresence>
        <p className='text-xl text-white p-4'>© 2024 Mubaraq Ibrahim</p>
    </div>
  )
}

export default Footer