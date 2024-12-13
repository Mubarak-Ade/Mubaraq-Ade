import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { FaFacebookF, FaGithub, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import '../App.css'

function SocialIcon() {
  return (
    <div>
        <AnimatePresence>
            <motion.ul className="flex flex-col items-center m-auto text-2xl  justify-evenly h-60">
                <motion.li z
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
        </AnimatePresence>
    </div>
  )
}

export default SocialIcon