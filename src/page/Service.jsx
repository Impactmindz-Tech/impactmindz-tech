import React from 'react'
import Services from '../components/Services'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';



const Service = () => {
  return (
    <>
      <section className='hero-sec'>
        <Container>
          <div>
            <h1> Service</h1>
            <span className='text-blue-900 font-normal'>Home</span>
            <ArrowRightAltIcon className='ml-1' />
            <span className='ml-1 text-blue-900 font-normal'>Pages</span>
            <ArrowRightAltIcon className='ml-1' />
            <span className='ml-1 text-blue-900 font-normal'>Service</span>
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
        <Services />
      </section>
    </>
  )
}

export default Service