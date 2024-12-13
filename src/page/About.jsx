import React from 'react'
import { BiSupport } from 'react-icons/bi'
import { FaAward, FaBriefcase } from 'react-icons/fa'

function About() {
  return (
    <div id='about' className='flex flex-col items-center justify-center min-h-screen p-4 bg-center bg-cover bg-gradient-to-tr from-indigo-600 via-blue-950 to-sky-800 bg-opacity-70'>
        <h1 className='text-5xl text-center text-white font-ubuntu'>About Me</h1>
        <h1 className='text-xl text-center text-gray-300 font-roboto'>My Introduction</h1>
        <div className="grid grid-cols-[repeat(2,1fr)] about-section place-items-center mt-20 " >
            <div className="flex items-center justify-center img w-1/2">
                <img src="/src/assets/profile1.jpg" alt="profile.jpg" className='size-72 rounded-3xl' />
            </div>
            <div className="w-full text-xl text-white font-roboto">
                <div className="flex items-center p-4 text-center justify-evenly">
                    <div className="flex flex-col tag items-center justify-center gap-4 rounded-full bg-sky-700 bg-opacity-40 w-36 h-36">
                        <FaAward />
                        <h1 className='font-mono text-xl font-bold'>Experience</h1>
                        <h2 className='font-sans text-xs text-gray-300 font-extralight'>2 years coding</h2>
                    </div>
                    <div className="flex flex-col tag items-center justify-center gap-4 rounded-full bg-sky-700 bg-opacity-40 w-36 h-36">
                        <FaBriefcase />
                        <h1 className='font-mono text-xl font-bold'>Completed</h1>
                        <h2 className='font-sans text-xs text-gray-300 font-extralight'>10 Projects</h2>
                    </div>
                    <div className="flex flex-col tag items-center justify-center gap-4 rounded-full bg-sky-700 bg-opacity-40 w-36 h-36">
                        <BiSupport />
                        <h1 className='font-mono text-xl font-bold'>Support</h1>
                        <h2 className='font-sans text-xs text-gray-300 font-extralight'>Online 24/7</h2>
                    </div>
                </div>
                <p className='border-l p-2 m-2'>I'm Mubaraq Ibrahim, a frontend developer with a passion for crafting clean and responsive websites.
                     I have experience in HTML, CSS, JavaScript, and React, and I love bringing ideas to life through web development.
                     My goal is to create web solutions that are intuitive, fast, and user-friendly.</p>
                <p className='border-l p-2 m-2'>With experience working on various projects, from personal portfolio websites to e-commerce platforms, 
                    I am always looking for new challenges and opportunities to grow as a developer. I specialize in frontend development, 
                    with a focus on creating clean, responsive designs and implementing dynamic user interfaces using React.</p>
            </div>
        </div>
    </div>
  )
}

export default About
