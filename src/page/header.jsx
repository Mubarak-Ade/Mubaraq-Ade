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
      className="z-50 fixed flex md:justify-between lg:justify-around justify-between  items-center p-4 w-full text-white text-xl">
      <div className="flex items-center justify-between w-[65%] md:justify-between lg:justify-start lg:items-center gap-5 md:w-[55%] lg:w-fit">
        <img src="../assets/logos/logo3.png" className="rounded-full size-16" alt="" />
        <h1 className='font-bold font-ubuntu text-5xl'>AIM</h1>
      </div>
      <div className={`bottom-0 left-0 z-[999px] lg:static fixed bg-white lg:bg-transparent px-10 py-4 rounded w-full md:w-full lg:w-fit h-72 md:h-[30rem] lg:h-full font-semibold text-black text-xl md:text-3xl lg:text-white lg:text-xl ${show ? 'md:block block' : 'md:hidden hidden lg:block'}`}>
        <motion.ul className='lg:flex place-items-center gap-4 grid grid-cols-3 h-full'>
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
              className='flex flex-col-reverse items-center cursor-pointer'
            >Home <FaHome className='sm:block md:block lg:hidden' /></motion.li>
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
              className='flex flex-col-reverse items-center cursor-pointer'
            >About <FaUser className='sm:block md:block lg:hidden' /></motion.li>
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
              className='flex flex-col-reverse items-center cursor-pointer'
            >Skill <FaUserNinja className='sm:block md:block lg:hidden' /></motion.li>
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
              className='flex flex-col-reverse items-center cursor-pointer'
            >Project <FaBriefcase className='sm:block mdblock: lg:hidden' /></motion.li>
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
              className='flex flex-col-reverse items-center cursor-pointer'
            >Contact <FaEnvelope className='sm:block mdblock: lg:hidden' /></motion.li>
          </Link>
          <motion.button
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setShow(false)}
            className={`' rounded-full' ${show ? 'block absolute right-0 p-4 top-0' : 'hidden'}`}><FaX size={25} className='bg-black p-1.5 rounded-full text-white' /></motion.button>
        </motion.ul>
      </div>
      <motion.button
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setShow(true)}
        className='sm:block md:block lg:hidden bg-white bg-opacity-30 p-4 rounded-full text-3xl cursor-pointer btn'><FaBars /></motion.button>
    </div>
  )
}

export default Header