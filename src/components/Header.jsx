import { navigationItems } from "./data"

const Header = () => {

    return (
        <nav className=" hidden sm:flex flex-row sm:px-4 py-4 font-medium text-lg">
            {navigationItems.map(
                ([title, url], index) => {
                    return <a
                        key={index}
                        href={url}
                        className="block mx-8 hover:text-action hover:scale-110 transition p-1"
                    >
                        {title}
                    </a>
                }
            )
            }
        </nav>
    )
}

export default Header