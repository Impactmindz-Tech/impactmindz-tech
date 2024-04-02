import { AppBar, Box, Container } from '@mui/material'
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/Untitled_design__1_-removebg-preview.png'
import MenuIcon from '@mui/icons-material/Menu';
import SidenavMobile from './SidenavMobile';

const Header = () => {
    const [navOpen, setNavOpen] = useState(false)
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
        <>
            <header className='p-4 py-5 fixed top-0 w-full bg-blue-100 z-10'>
                <Container>
                    <Box display='flex' justifyContent='space-between'>
                        <div className='text-4x'>
                            <Link to='/'>
                                <img className='w-16 h-12' src={logo} alt="company logo" />
                            </Link>
                        </div>
                        <nav className='flex md:hidden'>
                            <ul className='flex items-center justify-between gap-4'>
                                {links.map((item, i) => (
                                    <li key={i}>
                                        <NavLink to={item.to}>{item.name}</NavLink>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <div className='hamburger' onClick={() => setNavOpen(true)}>
                            <MenuIcon />
                        </div>
                    </Box>
                </Container>
            </header>
            <SidenavMobile navOpen={navOpen} setNavOpen={setNavOpen} />
        </>
    )
}

export default Header