import { Drawer } from '@mui/material'
import React from 'react'
import Header from './Header'
import { NavLink } from 'react-router-dom'

const SidenavMobile = ({ navOpen, setNavOpen }) => {
    const links = [
        {
            name: "Home", to: "/"
        },
        {
            name: "About", to: "about"
        },
        {
            name: "Service", to: "service"
        },
        {
            name: "Contact", to: "contact"
        },
    ]
    return (
        <Drawer open={navOpen} onClose={() => setNavOpen(false)}>
            <header className='p-4 py-5 w-[50vw] top-0  bg-blue-100 z-10'>
                        <div className='text-4x'>
                            {/* <img className='w-16 h-12' src={logo} alt="company logo" /> */}
                        </div>
                        <nav className=''>
                            <ul className='flex flex-col gap-10 items-center justify-between'>
                                {
                                    links.map((item, i) => (
                                        <NavLink key={i} to={item.to}>
                                            <li >{item.name}</li>
                                        </NavLink>
                                    ))
                                }
                            </ul>
                        </nav>
            </header>
        </Drawer>
    )
}

export default SidenavMobile