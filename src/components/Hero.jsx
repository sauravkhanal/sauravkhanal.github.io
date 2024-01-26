import profileImage from '../assets/mee.jpg'
import resume from '../assets/CV_Saurav_Khanal.pdf'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {

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
                        <a href="https://www.github.com/sauravkhanal" target='_blank' className='hover:text-slate-600 text-2xl' title='Github'><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/khanalsaurav" target='_blank' className='hover:text-slate-600 text-2xl' title='Linkedin'><FaLinkedin /></a>
                        <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=sauravkhanal635@gmail.com" target='_blank' className='hover:text-slate-600 text-2xl' title='mail' ><FaEnvelope /></a>
                    </div>
                </div>
            </div>
            <button className="self-center px-3 py-2 mb-8 bg-dark text-light rounded-md hover:bg-slate-600"><a href={resume} target='_blank'>Resume</a></button>
        </section>

    )
}
