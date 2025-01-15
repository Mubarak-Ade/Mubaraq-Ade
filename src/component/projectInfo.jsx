import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { FaReact } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'
import { RiTailwindCssFill } from 'react-icons/ri'

function ProjectInfo({ name, description, image, tech, features, challenges, github, website }) {

	const [show, setShow] = useState(false)

	return (
		<motion.div
			className="flex flex-col relative items-center justify-center w-72 p-2 m-4 text-wrap text-white border shadow-2xl rounded-3xl">
			<h1 className='pt-2 font-playfair text-xl'>{name}</h1>
			<img src={image} alt="" className='w-44 pt-2 h-48' />
			
			<motion.button
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.8 }}
				className='text-base font-semibold bg-sky-700 hover:bg-sky-600 text-white p-3 w-1/2 m-2 rounded-2xl  text-center '> <a href={website}>Demo</a></motion.button>
			
			<motion.button
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				className='text-base font-semibold bg-black hover:bg-gray-900 text-white mb-8 p-3 w-1/2 rounded-2xl text-center '> <a href={github}>GIthub</a></motion.button>

			
			<motion.button
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.8 }}
				onClick={() => setShow(true)} className='absolute right-0 text-sm bottom-0 p-2 mr-4'>View more</motion.button>
			
			{show && <motion.div
				initial={{ scale: 0 }}
				whileInView={{ scale: 1 }}
				className="bg-slate-900 flex flex-col gap-4 items-center justify-start absolute h-full w-full overflow-y-auto z-50 card p-8 rounded-3xl bg-opacity-50">

				<motion.button
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.8 }}
					onClick={() => setShow(false)}
					className='absolute left-0 top-0 p-2 m-2 bg-white text-black text-xs rounded-full'
				>
					<FaX />
				</motion.button>

				<h1 className='font-bold text-xs text-white text-center'>{description}</h1>

				<div className="flex gap-4 text-center items-center justify-center">Tech Stack: {tech}</div>
				{features}

				<p className='text-xs'>{challenges}</p>
			</motion.div>
			}
		</motion.div>
	)
}

export default ProjectInfo