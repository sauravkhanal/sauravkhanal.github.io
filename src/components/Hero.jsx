// import userImage from '../assets/mee.jpg'
import resume from '../assets/CV_Saurav_Khanal.pdf'

export default function Hero() {

    return (
        <section className="flex flex-col grow">
        {/* <div></div> */}
        <div className=' grow flex flex-col justify-center items-center sm:flex-row p-5'>
            <img
                className='w-44 h-44 rounded-full mb-5 object-cover'
                src="https://img.freepik.com/premium-vector/children-portrait-cartoon-vector-illustration_723224-2901.jpg?w=740" alt="profile image"
                draggable={false}
                />
            <div className='font-semibold text-lg pl-5 align-text'>
                <p className='text-base'>Hello there!</p>
                <p className='text-2xl'>I'm <span className='font-bold text-action'>Saurav</span></p>
                <p className=''>A Computer Engineering Student</p>
                <div>
                    <a href="https://www.github.com/sauravkhanal" target='_blank'><i className="fa-brands fa-github  fa-xl hover:text-slate-600"></i></a>
                    <a href="https://www.linkedin.com/in/khanalsaurav" target='_blank'><i className="fa-brands fa-linkedin mx-2 fa-xl hover:text-slate-600"></i></a>
                </div>
            </div>
        </div>
        <button className="self-center px-3 py-2 mb-8 bg-dark text-light rounded-md hover:bg-slate-600"><a href={resume} target='_blank'>Resume</a></button>
    </section>
    
    )
}
