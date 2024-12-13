import React, { useState, useEffect } from 'react'
import Header from './header'
import { motion, AnimatePresence } from 'framer-motion'
import { AiFillFacebook } from 'react-icons/ai'
import { IoLogoFacebook } from 'react-icons/io'
import { Link } from 'react-scroll'
import SocialIcon from '../component/Socialicon'
import Info from '../component/Info'
import Image from '../component/image'
import '../App.css'

const Hero = () => {
  
  return (
    <div id='home' className=' hero-section items-center justify-center min-h-screen space-y-6 text-current bg-img-1'>
        {/* <Header /> */}
            <SocialIcon />
            <Info />
            <Image />
    </div>
  )
}

export default Hero