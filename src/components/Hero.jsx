import profileImage from '../assets/mee.jpg'
import resume from '../assets/CV_Saurav_Khanal.pdf'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useState, useEffect } from 'react';

export default function Hero() {
    const [pulse, setPulse] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setPulse(true);

            //remove animation after 2s
            setTimeout(() => {
                setPulse(false);
            }, 2000); // animation duration

        }, 5000); // cycle duration

        // Cleanup the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <section className="flex flex-col grow">
            {/* <div></div> */}
            <div className=' grow flex flex-col justify-center items-center sm:flex-row p-5'>
                <img
                    className='w-48 h-48 rounded-full mb-5 object-cover'
                    src={profileImage} draggable={false}
                />
                <div className='font-semibold text-lg pl-5 align-text cursor-default'>
                    <p className='text-base'>Hello there!</p>
                    <p className='text-2xl'>I'm <span className='font-bold text-action'>Saurav</span></p>
                    <p className=''>A Computer Engineering Student</p>
                    <div className='flex gap-2 pt-1'>
                        <a href="https://www.github.com/sauravkhanal" target='_blank' className='hover:text-slate-600 text-2xl hover:scale-110 active:scale-95 transition' title='Github'><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/khanalsaurav" target='_blank' className='hover:text-slate-600 text-2xl hover:scale-110 active:scale-95 transition' title='Linkedin'><FaLinkedin /></a>
                        <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=sauravkhanal635@gmail.com" target='_blank' className='hover:text-slate-600 text-2xl hover:scale-110 active:scale-95 transition' title='mail' ><FaEnvelope /></a>
                    </div>
                </div>
            </div>
            <button className={`self-center px-3 py-2 mb-8 bg-dark text-light rounded-md hover:bg-slate-600 hover:scale-105 active:scale-95 transition ${pulse && 'animate-spin'}`}><a href={resume} target='_blank'>Resume</a></button>
        </section>

    )
}
