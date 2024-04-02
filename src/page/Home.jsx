import { Button, Container, Stack } from '@mui/material'
import React from 'react'
import Skills from '../components/Skills'
import Services from '../components/Services'

const Home = () => {
  return (
    <>
      <section className='hero-sec-home'>
        <Container>
          <div className='flex md:block'>
            <div className='w-1/2 md:w-full'>
              <h5 className='text-blue-500'>A smarter, better way to invest</h5>
              <h1 className='md:text-4xl'>Real Estate <br /> Investment <br /> For <span className='text-blue-500'> Everyone </span></h1>
              <p>Buy shares of rental properties, earn monthly income, and watch your money grow</p>
              <button className='bg-blue-500 py-3 text-lg font-semibold rounded-xl px-7 text-white mt-4'>
                Contact
              </button>
            </div>
            <div className='w-1/2 md:w-full absolute md:static right-0 bottom-[3rem]'>
              <img className='w-[59vw] md:w-full h-auto ' src="https://real-estate-sable-pi.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-illustration.ee80d5d2.png&w=1200&q=75" alt="" />
            </div>
          </div>
        </Container>
      </section>
      <section className='mt-12'>
        <Skills />
      </section>
      <section className='mt-12 bg-blue-100 p-10'>
        <Services />
      </section>
      <section className='mt-12'>
        <Container>
          <div className='flex md:flex-wrap items-center'>
            <div className='w-1/2 md:w-full'>
              <h5>With Revest anyone can invest!</h5>
              <h1>Numbers Said More Than Words</h1>
              <p>our low minimums give you the flexibility to invest the right amount, at the right time, to meet your goals.</p>
            </div>

            <div className='w-1/2 md:pt-5 flex md:flex-wrap md:w-full items-center gap-8'>
              <div className='w-1/2 md:w-full  md:flex-wrap flex flex-col gap-8'>
                <div className='box-overlay rounded-xl py-10 px-5  hover:-translate-y-2 transition-all'>
                  <figure className='flex justify-center'>
                    <img className='rounded-full ' src="https://real-estate-sable-pi.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplatforms.c9d53e8d.png&w=128&q=75" alt="" />
                  </figure>
                  <div className='pt-6 text-center'>
                    <span className='text-4xl text-blue-900 font-semibold mt-'>3000+</span>
                    <p className='pt-2'>Investors Using Platform</p>
                  </div>
                </div>

                <div className='box-overlay  rounded-xl py-10 px-5 hover:-translate-y-2 transition-all'>
                  <figure className='flex justify-center'>
                    <img className='rounded-full' src="https://real-estate-sable-pi.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplatforms.c9d53e8d.png&w=128&q=75" alt="" />
                  </figure>
                  <div className='pt-6 text-center'>
                    <span className='text-4xl text-blue-900 font-semibold mt-'>18%</span>
                    <p className='pt-2'>Returns upto</p>
                  </div>
                </div>
              </div>

              <div className='w-1/2 md:w-full  md:flex-wrap flex flex-col gap-4 hover:-translate-y-2 transition-all'>
                <div className='box-overlay rounded-xl py-10 px-5'>
                  <figure className='flex justify-center'>
                    <img className='rounded-full' src="https://real-estate-sable-pi.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplatforms.c9d53e8d.png&w=128&q=75" alt="" />
                  </figure>
                  <div className='pt-6 text-center'>
                    <span className='text-4xl text-blue-900 font-semibold mt-'>45</span>
                    <p className='pt-2'>Years Experience</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Home