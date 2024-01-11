import ProjectCard from "./ProjectCard";
import { projects } from "./data";

export default function Projects() {

    return (
        <div className="ml-20 mr-20 min-h-screen">
            <p id="projects" className="text-2xl text-center font-bold p-5">MY PROJECTS</p>
            <div className=' text-ongoing' hidden>hidden text</div>
            <div className='text-completed' hidden>hidden text</div>
            <section className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-2">
                {
                    projects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />
                    })
                }
            </section>
        </div>
    )
}

