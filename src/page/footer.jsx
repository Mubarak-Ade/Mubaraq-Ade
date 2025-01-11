import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { FaFacebookF, FaGithub, FaWhatsapp } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-scroll'


function Footer() {
	const number = '08172335480'
	const message = "Hello! i want to connect to you"
	const whatsappLink = `https://wa.me/${number}?text=${encodeURIComponent(message)}`
	return (
		<div className='p-2 h-[25rem] bg-gradient-to-tr flex flex-col items-center justify-around from-blue-700 to-indigo-800'>
			<h1 className='font-sofadiOne text-6xl text-center p-4 text-white'>AIM</h1>
			<motion.ul className='z-10 flex gap-8 text-lg font-semibold text-white rounded-3xl'>
				<Link to="about" spy={true} activeStyle={{
					fontSize: '20px'
				}}
					smooth={true} offset={50} duration={500}>
					<motion.li
						initial={{ scale: 1 }}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.5 }}
						transition={{ ease: 'backInOut' }}
						className='cursor-pointer'
					>About</motion.li>
				</Link>
				<Link to="skill" spy={true} activeStyle={{
					fontSize: '20px'
				}}
					smooth={true} offset={50} duration={500}>
					<motion.li
						initial={{ scale: 1 }}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.5 }}
						transition={{ ease: 'backInOut' }}
						className='cursor-pointer'
					>Skill</motion.li>
				</Link>
				<Link to="project" spy={true} activeStyle={{
					fontSize: '20px'
				}}
					smooth={true} offset={50} duration={500}>
					<motion.li
						initial={{ scale: 1 }}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.5 }}
						transition={{ ease: 'backInOut' }}
						className='cursor-pointer'
					>Project</motion.li>
				</Link>
			</motion.ul>
			<AnimatePresence>
				<motion.ul className="flex items-center m-auto text-3xl gap-4 justify-evenly ">
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
			<p className='text-xl text-white p-4'>© AIM. All right reserved</p>
		</div>
	)
}

export default Footer