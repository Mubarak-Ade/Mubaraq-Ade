import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { FaFacebookF, FaGithub, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import '../App.css'

function SocialIcon() {
	const number = '08172335480'
	const message = "Hello! i want to connect to you"
	const whatsappLink = `https://wa.me/${number}?text=${encodeURIComponent(message)}`
	return (
		<div className="border-x-2 lg:col-span-2 lg:row-start-2 lg:m-4 divide-solid divide-black">
			<AnimatePresence>
				<motion.ul className="flex justify-evenly items-center md:gap-10 gap-5 m-auto p-5 text-3xl md:text-5xl lg:text-2xl">
					<motion.li z
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.8 }}
					><a href="https://github.com/Mubarak-Ade" target='_blank'><FaGithub className='bg-white rounded-full cursor-pointer' /></a></motion.li>
					<motion.li
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.8 }}
					><a href={whatsappLink}><FaWhatsapp className="text-green-600 cursor-pointer" /></a></motion.li>
					<motion.li
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.8 }}
					><a href="https://www.facebook.com/adeshinamubarak.ibrahim" target='_blank'><FaFacebookF className="bg-white rounded-full text-blue-800 cursor-pointer" /></a></motion.li>
					<motion.li
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.8 }}
					><a href="https://x.com/Mubaraq_ade" target='_blank'><FaXTwitter className='text-black cursor-pointer' /></a></motion.li>
				</motion.ul>
			</AnimatePresence>
		</div>
	)
}

export default SocialIcon