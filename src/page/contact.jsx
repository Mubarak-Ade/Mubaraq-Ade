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
        <div id='contact' className='flex flex-col items-center min-h-screen bg-gradient-to-tr from-sky-900 via-indigo-900 to-blue-900'>
            <h1 className='pt-10 pb-4 text-5xl text-center text-white font-ubuntu'>Contact Me</h1>
            <div className="grid grid-cols-1 place-items-center lg:grid-cols-2">
                <div className="flex flex-col items-center justify-center gap-2 p-4 m-4 w-96 rounded-3xl">
                    <h1 className='p-2 text-white font-playfair'>Contact Me Directly</h1>
                    <div className="flex flex-col items-center justify-center gap-2 p-2 text-xl text-white border w-72 h-44 rounded-3xl">
                        <RiMailSendFill size={35} className='text-white rounded-full ' />
                        <h1>Email</h1>
                        <h1 className='text-lg font-thin text-gray-300'>user@gmail.com</h1>
                        <h1 className='flex text-base font-bold text-gray-300'>Write me <FaArrowRightLong size={30} className='p-2' /></h1>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2 p-2 text-xl text-white border w-72 h-44 rounded-3xl">
                        <FaWhatsapp size={35} className='p-1 text-green-500 bg-white rounded-full' />
                        <h1>WhatsApp</h1>
                        <h1 className='text-lg font-thin text-gray-300'>999-888-777</h1>
                        <h1 className='flex text-base font-bold text-gray-300'>Write me <FaArrowRightLong size={30} className='p-2' /></h1>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2 p-2 text-xl text-white border w-72 h-44 rounded-3xl">
                        <FaFacebookMessenger size={35} className='text-blue-600 rounded-full ' />
                        <h1>Messanger</h1>
                        <h1 className='text-lg font-thin text-gray-300'>user.fb123</h1>
                        <h1 className='flex text-base font-bold text-gray-300'>Write me <FaArrowRightLong size={30} className='p-2' /></h1>
                    </div>
                </div>
                <div className="m-4 w-[20rem] lg:w-[30rem] md:w-[35rem] place-self-center form">
                    <h1 className='p-4 text-center text-white font-playfair'>Have a project in mind? I'd love to hear from you!</h1>
                    <div className="self-center ">
                        <form ref={form} onSubmit={sendEmail} action="" className='flex flex-col items-center justify-center p-4 bg-white rounded-3xl '>
                            <input
                                id='name'
                                type="text"
                                name='name'
                                placeholder='Enter your name' className='relative w-full p-4 m-4 text-sm bg-transparent border h-14 rounded-3xl border-slate-400' /><br />

                            <input
                                id='email'
                                type="email"
                                name="email"
                                placeholder='Enter your Email Address' className='relative w-full p-4 m-4 text-sm bg-transparent border h-14 rounded-3xl border-slate-400' /><br />

                            <textarea
                                name="project"
                                placeholder='write your project'
                                id="msg" className='relative w-full p-4 m-4 bg-white border border-gray-500 h-60 rounded-2xl' ></textarea><br />

                            <motion.input 
                            whileHover={{
                                scale: 0.9
                            }}
                            whileTap={{
                                scale: 1.1
                            }}
                            type="submit" value="Send" className='h-12 ml-4 text-white cursor-pointer bg-stone-950 w-28 rounded-2xl' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact