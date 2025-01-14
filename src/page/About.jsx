import React from 'react'
import { BiSupport } from 'react-icons/bi'
import { FaAward, FaBriefcase } from 'react-icons/fa'
import Profile from '../assets/profile_pic/profile-one.jpg'

function About() {
  return (
    <div id='about' className='flex flex-col items-center justify-center min-h-screen p-4 bg-center bg-cover bg-gradient-to-tr from-indigo-600 via-blue-950 to-sky-800 bg-opacity-70'>
        <h1 className='text-5xl text-center text-white font-ubuntu'>About Me</h1>
        <h1 className='text-xl text-center text-gray-300 font-roboto'>My Introduction</h1>
        <div className="grid lg:grid-cols-[repeat(2,1fr)] grid-cols-1  gap-10 place-items-center mt-20 " >
            <div className="flex items-center justify-center w-1/2 img">
                <img src={Profile} alt="profile.jpg" className='lg:size-72 rounded-3xl' />
            </div>
            <div className="w-full text-xl text-white font-roboto">
                <div className="flex items-center gap-1 p-2 text-center justify-evenly">
                    <div className="flex flex-col items-center justify-center rounded-full lg:gap-4 bg-sky-700 bg-opacity-40 lg:w-36 lg:h-36 md:size-32 w-28 h-28">
                        <FaAward />
                        <h1 className='font-mono text-sm font-bold lg:text-xl'>Experience</h1>
                        <h2 className='font-sans text-xs text-gray-300 font-extralight'>2 years coding</h2>
                    </div>
                    <div className="flex flex-col items-center justify-center rounded-full lg:gap-4 bg-sky-700 bg-opacity-40 lg:w-36 lg:h-36 md:size-32 w-28 h-28">
                        <FaBriefcase />
                        <h1 className='font-mono text-lg font-bold lg:text-xl'>Completed</h1>
                        <h2 className='font-sans text-xs text-gray-300 font-extralight'>10 Projects</h2>
                    </div>
                    <div className="flex flex-col items-center justify-center rounded-full lg:gap-4 bg-sky-700 bg-opacity-40 lg:w-36 lg:h-36 md:size-32 w-28 h-28">
                        <BiSupport />
                        <h1 className='font-mono text-lg font-bold lg:text-xl'>Support</h1>
                        <h2 className='font-sans text-xs text-gray-300 font-extralight'>Online 24/7</h2>
                    </div>
                </div>
                <p className='p-2 m-2 border-l'>I'm Mubaraq Ibrahim, a frontend developer with a passion for crafting clean and responsive websites.
                     I have experience in HTML, CSS, JavaScript, and React, and I love bringing ideas to life through web development.
                     My goal is to create web solutions that are intuitive, fast, and user-friendly.</p>
                <p className='p-2 m-2 border-l'>With experience working on various projects, from personal portfolio websites to e-commerce platforms, 
                    I am always looking for new challenges and opportunities to grow as a developer. I specialize in frontend development, 
                    with a focus on creating clean, responsive designs and implementing dynamic user interfaces using React.</p>
            </div>
        </div>
    </div>
  )
}

export default About
