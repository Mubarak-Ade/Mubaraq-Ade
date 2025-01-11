import React, {useRef} from 'react'
import { FaArrowLeft, FaEnvelope, FaFacebookMessenger, FaInbox, FaMailchimp, FaVoicemail, FaWhatsapp } from 'react-icons/fa'
import { FaArrowRightLong, FaMessage } from 'react-icons/fa6'
import { RiMailSendFill } from 'react-icons/ri'
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_07hd0lg', 
                'template_z3mc91y', 
                form.current, {
                publicKey: 'SC2TM1J604T3EDYKB',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        e.target.reset()
    };

    return (
        <div id='contact' className='bg-gradient-to-tr flex flex-col items-center from-sky-900 via-indigo-900 to-blue-900 min-h-screen'>
            <h1 className='font-ubuntu text-5xl text-white text-center pt-10 pb-4'>Contact Me</h1>
            <div className="grid place-items-center grid-cols-1 lg:grid-cols-2">
                <div className="p-4 w-96 m-4 rounded-3xl flex items-center justify-center flex-col gap-2">
                    <h1 className='text-white font-playfair p-2'>Contact Me Directly</h1>
                    <div className="flex flex-col gap-2 text-white items-center border p-2 w-72 text-xl h-44 rounded-3xl justify-center">
                        <RiMailSendFill size={35} className='text-white rounded-full ' />
                        <h1>Email</h1>
                        <h1 className='text-gray-300 font-thin text-lg'>user@gmail.com</h1>
                        <h1 className='text-gray-300 text-base font-bold flex'>Write me <FaArrowRightLong size={30} className='p-2' /></h1>
                    </div>
                    <div className="flex flex-col gap-2 text-white items-center border p-2 w-72 text-xl h-44 rounded-3xl justify-center">
                        <FaWhatsapp size={35} className='text-green-500 bg-white rounded-full p-1' />
                        <h1>WhatsApp</h1>
                        <h1 className='text-gray-300 font-thin text-lg'>999-888-777</h1>
                        <h1 className='text-gray-300 text-base font-bold flex'>Write me <FaArrowRightLong size={30} className='p-2' /></h1>
                    </div>
                    <div className="flex flex-col gap-2 text-white items-center border p-2 w-72 text-xl h-44 rounded-3xl justify-center">
                        <FaFacebookMessenger size={35} className='text-blue-600  rounded-full ' />
                        <h1>Messanger</h1>
                        <h1 className='text-gray-300 font-thin text-lg'>user.fb123</h1>
                        <h1 className='text-gray-300 text-base font-bold flex'>Write me <FaArrowRightLong size={30} className='p-2' /></h1>
                    </div>
                </div>
                <div className="m-4 w-[25rem] lg:w-[30rem] md:w-[35rem] place-self-center form">
                    <h1 className='text-white text-center font-playfair p-4'>Have a project in mind? I'd love to hear from you!</h1>
                    <div className=" self-center">
                        <form ref={form} onSubmit={sendEmail} action="" className='flex flex-col justify-center items-center p-4 bg-white rounded-3xl '>
                            <input
                                id='name'
                                type="text"
                                name='name'
                                placeholder='Enter your name' className='w-full h-14 relative p-4 text-sm rounded-3xl m-4 bg-transparent border border-slate-400' /><br />

                            <input
                                id='email'
                                type="email"
                                name="email"
                                placeholder='Enter your Email Address' className='w-full h-14 relative p-4 text-sm rounded-3xl m-4 bg-transparent border border-slate-400' /><br />

                            <textarea
                                name="project"
                                placeholder='write your project'
                                id="msg" className='w-full h-60 m-4 relative p-4 border border-gray-500 rounded-2xl bg-white' ></textarea><br />

                            <motion.input 
                            whileHover={{
                                scale: 0.9
                            }}
                            whileTap={{
                                scale: 1.1
                            }}
                            type="submit" value="Send" className='bg-stone-950 w-28 h-12 ml-4 text-white rounded-2xl cursor-pointer' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact