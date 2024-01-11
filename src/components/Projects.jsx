import ProjectCard from "./ProjectCard";
import { projects } from "./data";

export default function Projects() {

    return (
        <div className=" min-h-screen m-5">
            <p id="projects" className="text-2xl text-center font-bold p-5 sm:p-10">MY PROJECTS</p>
            <div className=' text-ongoing' hidden>hidden text</div>
            <div className='text-completed' hidden>hidden text</div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 align-center gap-6"> 
                {
                    projects.map((project, index) => {
                        return <ProjectCard key={index} {...project} className='' />
                    })
                }
            </div>
        </div>
    )
}

