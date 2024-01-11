const Header = () => {
    return (
        <nav className="flex flex-row p-4 justify-center font-medium text-lg">
            {[
                ['Home', '#'],
                ['About', '#'],
                ['Projects', '#projects'],
                // ['Contact', '/contact']
            ].map(
                ([title, url], index) => {
                    return <a
                        key={index}
                        href={url}
                        className="block mx-8 hover:text-action hover:underline p-1"
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