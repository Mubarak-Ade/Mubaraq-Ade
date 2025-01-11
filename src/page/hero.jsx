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
    <div id='home' className='justify-center items-center place-items-center place-content-center gap-10 grid grid-cols-1 md:grid-cols-[1fr] lg:grid-cols-2 bg-img-1 pt-40 w-full min-h-screen text-current'>
        {/* <Header /> */}
            <SocialIcon />
            <Info />
            <Image />
    </div>
  )
}

export default Hero