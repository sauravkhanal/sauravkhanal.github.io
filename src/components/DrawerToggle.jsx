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
                className='block sm:hidden text-left p-5 fixed text-2xl'
            >
                <i className='fa-solid fa-bars'></i>
            </button>
            <Drawer
                className='flex'
                open={isDrawerOpen}
                onClose={toggleDrawer}
                direction='left'
                lockBackgroundScroll='true'
            >
                <div className='flex flex-col grow justify-center ml-8 space-y-2 align-middle text-lg' >
                    {navigationItems.map(
                        ([title, url], index) => {
                            return <a
                                key={index}
                                onClick={toggleDrawer}
                                href={url}
                                className="hover:text-action hover:underline p-1"
                            >
                                {title}
                            </a>
                        }
                    )
                    }
                </div>

            </Drawer>
        </>
    )
}

export default DrawerToggle