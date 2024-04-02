import { Container } from '@mui/material'
import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Link } from 'react-router-dom';
import SliderSite from '../components/Slider-site';
import { sliderData } from '../data/SliderSite';


const About = () => {
    return (
        <>
            <section className='hero-sec'>
                <Container>
                    <div>
                        <h1> About Us</h1>
                        <span className='text-blue-900 font-normal'>Home</span>
                        <ArrowRightAltIcon className='ml-1' />
                        <span className='ml-1 text-blue-900 font-normal'>Pages</span>
                        <ArrowRightAltIcon className='ml-1' />
                        <span className='ml-1 text-blue-900 font-normal'>About Us</span>
                    </div>
                </Container>
            </section>
            <section className='-mt-52'>
                <Container>
                    <div className='relative'>
                        <img className='rounded-xl' src="https://real-estate-sable-pi.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout-video-illustration.0c7bebe2.png&w=1920&q=75" alt="" />
                        <div className='video-btn relative bg-white p-8 rounded-full'>
                            <Link to='https://www.youtube.com/watch?v=LCihLrSehCo' target='_blank'><PlayArrowIcon fontSize='large' /></Link>
                        </div>
                    </div>
                </Container>
            </section>

            <section className='mt-12'>
                
                <Container>
                    <div>
                        <div className='text-center'>
                            <h5>Investing in real estate is now easier than buying stocks</h5>
                            <h3 className=''>Make property Investing in simple, accessible and transparent</h3>
                            <p>Our mission is to empower the world to build wealth through modern real estate investing.</p>
                        </div>

                        <div className='flex justify-between'>
                            <div className='flex gap-4 mt-12 items-center'>
                                <img src="https://real-estate-sable-pi.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finvestors.41071d6a.png&w=128&q=75" alt="" />
                                <div className='flex flex-col'>
                                    <h3 className='leading-none'>6738</h3>
                                    <p>Investors</p>
                                </div>
                            </div>
                            <div className='flex gap-4 mt-12 items-center'>
                                <img src="https://real-estate-sable-pi.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcompleted.2d51e16f.png&w=128&q=75" alt="" />
                                <div className='flex flex-col'>
                                    <h3 className='leading-none'>61316</h3>
                                    <p>Investments Completed</p>
                                </div>
                            </div>
                            <div className='flex gap-4 mt-12 items-center'>
                                <img src="https://real-estate-sable-pi.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fannual-return.5c475247.png&w=128&q=75" alt="" />
                                <div className='flex flex-col'>
                                    <h3 className='leading-none'>10.36%</h3>
                                    <p>Average Annual Return</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <section className='mt-12'>
                    <SliderSite sliderData={sliderData} />
            </section>
        </>
    )
}

export default About