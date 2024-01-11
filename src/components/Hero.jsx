// import userImage from '../assets/mee.jpg'
import resume from '../assets/Saurav_Khanal_cv.pdf'

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
// <section className="grid grid-rows-3 cursor-default ">
//     <div></div>
//     <div className='flex flex-col md:flex-row md:justify-center md:items-center md:space-x-4 md:flex-grow '>
//         <img
//             className='overflow-hidden rounded-full w-48 h-48 object-cover'
//             src="https://img.freepik.com/premium-vector/children-portrait-cartoon-vector-illustration_723224-2901.jpg?w=740" alt="profile image"
//             draggable={false}
//         />
//         <div className='grid gap-2'>
//             <p className='text-lg font-semibold'>Hello there!</p>
//             <p className='text-3xl font-bold'>I'm <span className='text-action'>Saurav</span></p>
//             <p className='text-xl font-semibold'>A computer Engineering Student</p>
//             <div>
//                 <a href="https://www.github.com/sauravkhanal" target='_blank'><i className="fa-brands fa-github  fa-xl hover:text-med"></i></a>
//                 <a href="https://www.linkedin.com/in/khanalsaurav" target='_blank'><i className="fa-brands fa-linkedin mx-2 fa-xl hover:text-med"></i></a>
//             </div>
//         </div>
//     </div>
//     <div>
//         {/* <div></div> */}
//     </div>
//     <button className="text-white bg-dark p-2 rounded-md justify-self-center self-end hover:bg-med"><a href={resume} target='_blank'>Resume</a></button>
// </section>