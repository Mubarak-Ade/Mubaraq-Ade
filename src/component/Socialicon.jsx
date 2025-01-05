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
		<div>
			<AnimatePresence>
				<motion.ul className="flex flex-col items-center m-auto text-2xl  justify-evenly h-60">
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
					><a href="https://www.facebook.com/adeshinamubarak.ibrahim" target='_blank'><FaFacebookF className="text-blue-800 bg-white rounded-full cursor-pointer" /></a></motion.li>
					<motion.li
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.8 }}
					><a href="https://x.com/Mubaraq_ade" target='_blank'><FaXTwitter className='cursor-pointer text-black' /></a></motion.li>
				</motion.ul>
			</AnimatePresence>
		</div>
	)
}

export default SocialIcon