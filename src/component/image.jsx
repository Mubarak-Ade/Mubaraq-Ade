import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import '../App.css'
import ProfileImg from '../assets/profile-pic/profile.jpg'

function Image() {
  return (
    <div>
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
            className="hero-Img flex items-center self-center p-2 order-1  bg-blue-900 rounded-full">
                <motion.img  className='rounded-full w-full h-full' src={ProfileImg} alt="" />
            </motion.div>    
        </AnimatePresence>
    </div>
  )
}

export default Image