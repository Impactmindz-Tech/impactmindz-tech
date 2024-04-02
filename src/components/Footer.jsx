import { Container } from '@mui/material'
import React from 'react'
import EmailSubscribe from './EmailSubscribe'
import logo from '../assets/Untitled_design__1_-removebg-preview.png'


const Footer = () => {
    return (
        <>
            <footer className='footer p-12 md:p-2 mt-12'>
                <Container>
                    <div className='flex flex-col gap-16 md:gap-2'>
                        <div className=''>
                            <div className='border-b border-[#3a4153] flex justify-between md:flex-col pb-8'>
                                <div>
                                    <h5 className='text-white'>Subscribe for updates</h5>
                                    <p className='text-white pt-4'>Stay on top of the latest blog posts, news and announcements</p>
                                </div>
                                <div>
                                    <EmailSubscribe />
                                </div>
                            </div>
                        </div>
                        <div className=' text-white gap-9'>
                            <div className='text-center'>
                                <figure className='flex justify-center'>
                                    <img className='w-20 h-16' src={logo} alt="" />
                                </figure>
                                <p className='text-white text-base pt-5 px-64 md:px-0 md:pb-3'>Revest is a platform offering anyone the ability to invest and potentially earn money from property at the click of a button</p>
                            </div>
                            {/* {
                                    footerLinks.map((item, i) => (
                                        <div key={i} className='flex md:flex-wrap w-[75%] gap-9 md:w-full'>
                                            <div className='w-1/4 md:w-[42%]'>
                                                <h6 className='text-lg font-semibold'>Company</h6>
                                                {item.company.map((compantLinks, i) => (
                                                    <NavLink key={i}>
                                                        <div  className='border-b  border-[#3a4153]'>
                                                            <p  className='text-white text-base py-2 mt-3 hover:translate-x-3 transition-all'>{compantLinks.name}</p>
                                                        </div>
                                                    </NavLink>
                                                ))}
                                            </div>
                                            <div className='w-1/4 md:w-[42%]'>
                                                <h6 className='text-lg font-semibold'>Invest</h6>
                                                {item.invest.map((invest, i) => (
                                                    <NavLink key={i}>
                                                        <div className='border-b  border-[#3a4153]'>
                                                            <p  className='text-white text-base py-2 mt-3 hover:translate-x-3 transition-all'>{invest.name}</p>
                                                        </div>
                                                    </NavLink>
                                                ))}
                                            </div>
                                            <div className='w-1/4 md:w-[42%]'>
                                                <h6 className='text-lg font-semibold'>Insights</h6>
                                                {item.Insights.map((Insights, i) => (
                                                    <NavLink key={i}>
                                                        <div className='border-b  border-[#3a4153]'>
                                                            <p className='text-white text-base py-2 mt-3 hover:translate-x-3 transition-all'>{Insights.name}</p>
                                                        </div>
                                                    </NavLink>
                                                ))}
                                            </div>
                                            <div className='w-1/4 md:w-[42%]'>
                                                <h6 className='text-lg font-semibold'>Legal</h6>
                                                {item.legal.map((legal, i) => (
                                                    <NavLink key={i}>
                                                        <div className='border-b  border-[#3a4153]'>
                                                            <p  className='text-white text-base py-2 mt-3 hover:translate-x-3 transition-all'>{legal.name}</p>
                                                        </div>
                                                    </NavLink>
                                                ))}
                                            </div>
                                        </div>
                                    ))
                                } */}
                        </div>
                    </div>
                </Container>
            </footer>
        </>
    )
}

export default Footer