import React, {useEffect, useState} from 'react'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-scroll'
import { easeInOut, motion, useScroll } from 'framer-motion'

const Header = () => {

  const [sticky, setSticky] = useState(false)


  useEffect(() => {
      window.addEventListener('scroll', () => {
          window.scrollY > 50 ? setSticky(true): setSticky(false)
      })    

  }, [])
  

  return (
    <div
    className={`flex items-center p-4 fixed text-xl w-full top-0 z-10 text-white justify-evenly`}>
        <h1 className='text-5xl font-bold font-sofadiOne'>Mbrk</h1>
        <motion.ul  className='z-10 flex gap-4 px-10 py-4 text-base font-semibold text-black bg-white ml-60 rounded-3xl'>
          <Link to="home" spy={true} activeStyle={{
             fontSize: '20px'
          }} 
          smooth={true} offset={50} duration={500}>
            <motion.li
            initial={{scale: 1}}
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.5}}
            transition={{ ease: 'backInOut'}}
            className='cursor-pointer'
            >Home</motion.li>
          </Link>
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
          <Link to="contact" spy={true} activeStyle={{
             fontSize: '20px'
          }} 
           smooth={true} offset={50} duration={500}>
            <motion.li
            initial={{scale: 1}}
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.5}}
            transition={{ ease: 'backInOut'}}
            className='cursor-pointer'
            >Contact Me</motion.li>
          </Link>
        </motion.ul>
        <motion.button
        initial={{scale: 1}}
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.9}}
        className='p-2 text-3xl bg-white rounded-full cursor-pointer ml-60 bg-opacity-30'><FaBars /></motion.button>
    </div>
  )
}

export default Header