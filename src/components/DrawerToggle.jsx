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
        <div className="self-start">
            <button
                onClick={toggleDrawer}
                className='block sm:hidden text-left p-3 fixed'
            >
               <svg height="32" width="24" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
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
        </div>
    )
}

export default DrawerToggle