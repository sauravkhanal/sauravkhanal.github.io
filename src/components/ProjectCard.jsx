import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faExternalLinkAlt, faCircle } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = ({ name, description, imageURL, demoURL, sourceURL, tools, status }) => {

    return (

        <div className="max-w-sm bg-white rounded-xl overflow-hidden shadow-md p-4 grid gap-5">
            <p className="row-start-1 col-span-2 text-center font-medium text-xl">{name}</p>
            <img className='w-28 row-start-2 col-start-1 rounded-md self-center h-28 object-contain' src={imageURL} alt={name} />
            <p className="mb-4 row-start-2 col-start-2 self-center">{description}</p>
            <p className="col-span-2 text-sm text-med">Tools Used: &nbsp;{tools}</p>
            <p className="col-span-2 text-sm ">
                Status:&nbsp;{status}&nbsp;<FontAwesomeIcon icon={faCircle} className={`text-${status}`} />
            </p>

            <div className="flex flex-row justify-evenly col-span-2 items-center ">
                {
                    demoURL && <a href={demoURL} target="_blank" className="bg-med text-white px-4 py-2 rounded-md hover:bg-action">Demo&nbsp; <FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                }
                {/* <a href={demoURL} target="_blank" className="bg-med text-white px-4 py-2 rounded-md hover:bg-action">Demo&nbsp; <FontAwesomeIcon icon={faExternalLinkAlt} /></a> */}
                <a href={sourceURL} target="_blank" className="bg-med text-white px-4 py-2 rounded-md hover:bg-action flex-grow-0">Code&nbsp;<FontAwesomeIcon icon={faCode} /></a>

            </div>
        </div>
    )
}

export default ProjectCard