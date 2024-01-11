import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { useState } from 'react'
import { navigationItems } from './data'

function DrawerToggle() {
    const [isDrawerOpen, setISDrawerOpen] = useState(false)
    const toggleDrawer = () => {
        setISDrawerOpen(previousState => !previousState)
    }
    return (
        <>
            <button
                onClick={toggleDrawer}
                className='block sm:hidden text-left p-5 fixed text-3xl'
            >
                <i className='fa-solid fa-bars'></i>
            </button>
            <Drawer
                className=''
                open={isDrawerOpen}
                onClose={toggleDrawer}
                direction='left'
                lockBackgroundScroll='true'
            >
                {navigationItems.map(
                    ([title, url], index) => {
                        return <a
                            key={index}
                            onClick={toggleDrawer}
                            href={url}
                            className="block mx-8 hover:text-action hover:underline p-1"
                        >
                            {title}
                        </a>
                    }
                )
                }

            </Drawer>
        </>
    )
}

export default DrawerToggle