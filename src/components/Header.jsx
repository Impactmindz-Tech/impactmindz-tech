import { AppBar, Box, Container } from '@mui/material'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    const links = [
        {
            name: "Home", to: "/impactmindz-tech"
        },
        {
            name: "About", to: "about"
        },
        {
            name: "Service", to: "service"
        },
    ]
    return (
        <>
            <header className='p-4 py-5 fixed top-0 w-full bg-blue-100 z-10'>
                <Container>
                    <Box display='flex' justifyContent='space-between'>
                        <div className='text-4x'>
                            <img src="https://real-estate-sable-pi.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.cf81d1a9.png&w=256&q=75" alt="" />
                        </div>
                        <nav className='flex'>
                            <ul className='flex items-center justify-between gap-4'>
                                {
                                    links.map((item, i) => (
                                        <NavLink key={i} to={item.to}>
                                            <li >{item.name}</li>
                                        </NavLink>
                                    ))
                                }
                            </ul>
                        </nav>
                    </Box>
                </Container>
            </header>
        </>
    )
}

export default Header