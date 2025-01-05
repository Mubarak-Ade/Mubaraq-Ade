import React, { useEffect, useState } from 'react'
import { FaBars, FaBriefcase, FaEnvelope, FaHome, FaUserNinja } from 'react-icons/fa'
import { Link } from 'react-scroll'
import { easeInOut, motion, useScroll } from 'framer-motion'
import { FaUser, FaX } from 'react-icons/fa6'

const Header = () => {

  const [sticky, setSticky] = useState(false)
  const [show, setShow] = useState(false)


  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })

  }, [])


  return (
    <div
      className={`flex header items-center p-4 fixed text-xl w-full text-white z-50 justify-around`}>
      <div className="flex items-center justify-center gap-5">
        <img src="/src/assets/logos/Logo3.png" className="size-16 rounded-full"  alt="" />
        <h1 className='text-5xl font-bold font-ubuntu'>AIM</h1>
      </div>
      <div className={show ? 'navshow' : 'navbar'}>
        <motion.ul className='z-50 flex gap-4 px-10 py-4 text-lg font-semibold relative text-black bg-white rounded-3xl'>
          <Link to="home" spy={true} activeStyle={{
            fontSize: '21px',
            fontWeight: 'bold'
          }}
            smooth={true} offset={50} duration={500}>
            <motion.li
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.5 }}
              transition={{ ease: 'backInOut' }}
              className='cursor-pointer flex flex-col-reverse items-center'
            >Home <FaHome className='icons' /></motion.li>
          </Link>
          <Link to="about" spy={true} activeStyle={{
            fontSize: '21px',
            fontWeight: 'bold'
          }}
            smooth={true} offset={50} duration={500}>
            <motion.li
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.5 }}
              transition={{ ease: 'backInOut' }}
              className='cursor-pointer flex flex-col-reverse items-center'
            >About <FaUser className='icons' /></motion.li>
          </Link>
          <Link to="skill" spy={true} activeStyle={{
            fontSize: '21px',
            fontWeight: 'bold'
          }}
            smooth={true} offset={50} duration={500}>
            <motion.li
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.5 }}
              transition={{ ease: 'backInOut' }}
              className='cursor-pointer flex flex-col-reverse items-center'
            >Skill <FaUserNinja className='icons' /></motion.li>
          </Link>
          <Link to="project" spy={true} activeStyle={{
            fontSize: '21px',
            fontWeight: 'bold'
          }}
            smooth={true} offset={50} duration={500}>
            <motion.li
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.5 }}
              transition={{ ease: 'backInOut' }}
              className='cursor-pointer flex flex-col-reverse items-center'
            >Project <FaBriefcase className='icons' /></motion.li>
          </Link>
          <Link to="contact" spy={true} activeStyle={{
            fontSize: '21px',
            fontWeight: 'bold'
          }}
            smooth={true} offset={50} duration={500}>
            <motion.li
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.5 }}
              transition={{ ease: 'backInOut' }}
              className='cursor-pointer flex flex-col-reverse items-center'
            >Contact <FaEnvelope className='icons' /></motion.li>
          </Link>
          <motion.button
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setShow(false)}
            className={`' rounded-full' ${show ? 'block' : 'hidden'}`}><FaX size={25} className='p-1.5 bg-black text-white rounded-full' /></motion.button>
        </motion.ul>
      </div>
      <motion.button
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setShow(true)}
        className='p-2 text-3xl bg-white rounded-full btn hidden cursor-pointer bg-opacity-30'><FaBars /></motion.button>
    </div>
  )
}

export default Header