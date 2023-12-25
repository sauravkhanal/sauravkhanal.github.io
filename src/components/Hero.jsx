// import userImage from '../assets/mee.jpg'
import resume from '../assets/Saurav_Khanal_cv.pdf'

export default function Hero() {

    return (
        <section className="grid grid-rows-3 ">
            <div></div>
            <div className='flex flex-col md:flex-row md:justify-center md:items-center md:space-x-4 md:flex-grow '>
                <img
                    className='overflow-hidden rounded-full w-48 h-48 object-cover'
                    src="https://img.freepik.com/premium-vector/children-portrait-cartoon-vector-illustration_723224-2901.jpg?w=740" alt="profile image"
                />
                <div className='grid gap-2'>
                    <p className='text-lg font-semibold'>Hello there!</p>
                    <p className='text-3xl font-bold'>I'm <span className='text-action'>Saurav</span></p>
                    <p className='text-xl font-semibold'>A computer Engineering Student</p>
                    <div>
                        <a href="https://www.github.com/sauravkhanal" target='_blank'><i className="fa-brands fa-github  fa-xl"></i></a>
                        <a href="https://www.linkedin.com/in/khanalsaurav" target='_blank'><i className="fa-brands fa-linkedin mx-2 fa-xl"></i></a>
                    </div>
                </div>
            </div>
            <div>
                {/* <div></div> */}
            </div>
                <button className="text-white bg-dark p-2 rounded-md justify-self-center self-end hover:bg-med"><a href={resume}target='_blank'>Resume</a></button>
        </section>
    )
}