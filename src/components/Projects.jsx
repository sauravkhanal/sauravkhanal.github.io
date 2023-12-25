import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faExternalLinkAlt, faCircle } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = ({ name, description, imageURL, demoURL, sourceURL, tools, status }) => {


    return (

        <div id="projects" className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden shadow-md p-4 mb-6 grid gap-5">
            <p className="row-start-1 col-span-2 text-center font-medium text-xl">{name}</p>
            <img className='w-28 row-start-2 col-start-1 rounded-md self-center' src={imageURL} alt={name} />
            <p className="mb-4 row-start-2 col-start-2 self-center">{description}</p>
            <p className="col-span-2 text-sm text-med">Tools Used: &nbsp;{tools}</p>
            <p className="col-span-2 text-sm ">
                Status:&nbsp;{status}&nbsp;<FontAwesomeIcon icon={faCircle} className={`text-${status}`} />
            </p>

            <div className="flex flex-row justify-evenly col-span-2">
                {
                    demoURL &&  <a href={demoURL} target="_blank" className="bg-med text-white px-4 py-2 rounded-md hover:bg-action">Demo&nbsp; <FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                }
                {/* <a href={demoURL} target="_blank" className="bg-med text-white px-4 py-2 rounded-md hover:bg-action">Demo&nbsp; <FontAwesomeIcon icon={faExternalLinkAlt} /></a> */}
                <a href={sourceURL} target="_blank" className="bg-med text-white px-4 py-2 rounded-md hover:bg-action">Code&nbsp;<FontAwesomeIcon icon={faCode} /></a>

            </div>
        </div>
    )
}


export default function Projects() {

    const projectData = [
        {
            name: "Heritage Detector",
            description: "Detects heritage site within Kathmandu Durbar Square using YOLO V8.",
            imageURL: "https://khanalsaurav.com.np/YOLO-inference-webapp/static/media/b.b24aeaf94467f360da6b.jpg",
            demoURL: "https://khanalsaurav.com.np/YOLO-inference-webapp",
            sourceURL: "https://github.com/sauravkhanal/YOLO-inference-webapp",
            tools: "React, Material UI, FastAPI, YOLO",
            status: 'completed'
        },
        {
            name: "License Master",
            description: " Helps Engineering Graduate to prepare for Engineering License Exam (login/register completed)",
            imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN85gNLk8X6uQbrw5tP5SPRreKBvHXga8-tg&usqp=CAU",
            demoURL: "https://khanalsaurav.com.np/LicenseMaster/",
            sourceURL: "https://github.com/sauravkhanal/LicenseMaster",
            tools: 'Html, Javascript, Firebase',
            status: 'ongoing',
        },
        {
            name: "Signature Verification",
            description: "Done as minor project, compares similarity of two signatures.",
            imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmtIosrgub4PJen51LNRNJLdwZtqZZAvcTsZc3iB4PLiT3JIxqbvC3X17qYOOW4bBBCg&usqp=CAU',
            // demoURL: "https://github.com/sauravkhanal/Application",
            sourceURL: "https://github.com/sauravkhanal/Application",
            tools: 'python, tensorflow, tkinter',
            status: 'completed',
        }
    ];

    return (
        <div className="ml-20 mr-20 min-h-screen">
            <p className="text-2xl text-center font-bold p-10">MY PROJECTS</p>
            <div className=' text-ongoing' hidden>hidden text</div>
            <div className='text-completed' hidden>hidden text</div>
            <section className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-2">
                {
                    projectData.map((project, index) => {
                        return <ProjectCard key={index} {...project} />
                    })
                }
            </section>
        </div>
    )
}

