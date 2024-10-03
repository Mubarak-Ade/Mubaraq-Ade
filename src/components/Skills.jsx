import { motion } from 'framer-motion'
import React from 'react'
import { DiMaterializecss } from 'react-icons/di'
import { FaCss3Alt, FaHtml5, FaJs, FaReact, FaGit, FaGitAlt, FaChrome } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa6'
import { RiTailwindCssFill } from 'react-icons/ri'
import { SiVisualstudiocode } from 'react-icons/si'


function Skills() {
  return (
    <motion.div id='skill'
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    className='flex flex-col items-center justify-center min-h-screen p-4 bg-center bg-cover bg-gradient-to-tl from-blue-600 via-sky-750 to-sky-800 bg-opacity-70'>
        <h1 className='my-28 text-center text-5xl text-white font-ubuntu'>My Skills</h1>
        <div className="grid grid-cols-2 w-4/5 gap-8">
            <div className="text-center flex-col justify-center items-center">
                <h1 className='mb-5 text-3xl text-white font-sofadiOne font-bold'>Frontend Development</h1>
                <div className="grid grid-cols-2 place-items-center gap-4">
                    <motion.div 
                    initial={{scale: 0}}
                    whileInView={{scale: 1}}
                    transition={{duration: 2}}
                    
                    className="flex flex-col items-center justify-center w-28 h-28 p-2 m-2 text-center bg-white rounded-3xl">
                        <FaHtml5 className='text-3xl text-orange-600' />
                        <h1 className="font-serif m-1 text-xs font-bold">Html</h1>
                        <h2 className="font-mono text-[0.7rem] m-1">Basic</h2>
                    </motion.div>
                    <motion.div 
                    initial={{scale: 0}}
                    whileInView={{scale: 1}}
                    transition={{duration: 2}}
                    className="flex flex-col items-center justify-center w-28 h-28 p-2 m-2 text-center bg-white rounded-3xl">
                        <FaCss3Alt className='text-3xl text-blue-500' />
                        <h1 className="font-serif m-1 text-xs font-bold">Css</h1>
                        <h2 className="font-mono text-[0.7rem] m-1">Intermediate</h2>
                    </motion.div>
                    <motion.div 
                    initial={{scale: 0}}
                    whileInView={{scale: 1}}
                    transition={{duration: 2}}
                    
                    className="flex flex-col items-center justify-center w-28 h-28 p-2 m-2 text-center bg-white rounded-3xl">
                        <FaJs className='text-3xl text-orange-600'/>
                        <h1 className="font-serif m-1 text-xs font-bold">Javascript</h1>
                        <h2 className="font-mono text-[0.7rem] m-1">Intermediate</h2>
                    </motion.div>
                    <motion.div 
                    initial={{scale: 0}}
                    whileInView={{scale: 1}}
                    transition={{duration: 2}}
                    
                    className="flex flex-col items-center justify-center w-28 h-28 p-2 m-2 text-center bg-white rounded-3xl">
                        <FaReact  className='text-3xl text-blue-500'/>
                        <h1 className="font-serif m-1 text-xs font-bold">React</h1>
                        <h2 className="font-mono text-[0.7rem] m-1">Intermediate</h2>
                    </motion.div>
                </div>
            </div>
            <div className="text-center">
                <h1 className='mb-5 text-3xl text-white font-sofadiOne font-bold'>Css FrameWorks</h1>
                <div className="grid grid-cols-2 place-items-center gap-4">
                    <motion.div 
                    initial={{scale: 0}}
                    whileInView={{scale: 1}}
                    transition={{duration: 2}}
                    
                    className="flex flex-col items-center justify-center w-28 h-28 p-2 m-2 text-center bg-white rounded-3xl">
                        <RiTailwindCssFill className='text-3xl text-sky-500'/>
                        <h1 className="font-serif m-1 text-xs font-bold">Tailwind</h1>
                        <h2 className="font-mono text-[0.7rem] m-1">Intermediate</h2>
                    </motion.div>
                    <motion.div 
                    initial={{scale: 0}}
                    whileInView={{scale: 1}}
                    transition={{duration: 2}}
                    
                    className="flex flex-col items-center justify-center w-28 h-28 p-2 m-2 text-center bg-white rounded-3xl">

                        <DiMaterializecss className='text-3xl text-sky-500'/>
                        <h1 className="font-serif m-1 text-xs font-bold">Material UI</h1>
                        <h2 className="font-mono text-[0.7rem] m-1">Intermediate</h2>
                    </motion.div>
                </div>
            </div>
            <div className="text-center">
                <h1 className='mb-5 text-3xl text-white font-sofadiOne font-bold'>Version Control</h1>
                <div className="grid grid-cols-2 place-items-center gap-4">
                    <motion.div 
                    initial={{scale: 0}}
                    whileInView={{scale: 1}}
                    transition={{duration: 2}}
                    
                    className="flex flex-col items-center justify-center w-28 h-28 p-2 m-2 text-center bg-white rounded-3xl">
                        <FaGitAlt className='text-3xl text-red-600' />
                        <h1 className="font-serif m-1 text-xs font-bold">Git</h1>
                        <h2 className="font-mono text-[0.7rem] m-1">Basic</h2>
                    </motion.div>
                    <motion.div 
                    initial={{scale: 0}}
                    whileInView={{scale: 1}}
                    transition={{duration: 2}}
                    
                    className="flex flex-col items-center justify-center w-28 h-28 p-2 m-2 text-center bg-white rounded-3xl">
                        <FaGithub className='text-3xl text-black' />
                        <h1 className="font-serif m-1 text-xs font-bold">GitHub</h1>
                        <h2 className="font-mono text-[0.7rem] m-1">Basic</h2>
                    </motion.div>
                </div>
            </div>
            <div className="text-center">
                <h1 className='mb-5 text-3xl text-white font-sofadiOne font-bold'>Tools</h1>
                <div className="grid grid-cols-2 place-items-center gap-4">
                    <motion.div 
                    initial={{scale: 0}}
                    whileInView={{scale: 1}}
                    transition={{duration: 2}}
                    
                    className="flex flex-col items-center justify-center w-28 h-28 p-2 m-2 text-center bg-white rounded-3xl">
                        <SiVisualstudiocode className='text-3xl text-blue-600' />
                        <h1 className="font-serif m-1 text-xs font-bold">VsCode</h1>
                        <h2 className="font-mono text-[0.7rem] m-1">Basic</h2>
                    </motion.div>
                    <motion.div 
                    initial={{scale: 0}}
                    whileInView={{scale: 1}}
                    transition={{duration: 2}}
                    
                    className="flex flex-col items-center justify-center w-28 h-28 p-2 m-2 text-center bg-white rounded-3xl">
                        <FaChrome className='text-3xl text-yellow-400' />
                        <h1 className="font-serif m-1 text-xs font-bold">Chrome DevTools</h1>
                        <h2 className="font-mono text-[0.7rem] m-1">Basic</h2>
                    </motion.div>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default Skills
