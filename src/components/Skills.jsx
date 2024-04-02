import { Container } from '@mui/material'
import React from 'react'

const Skills = () => {
    const skill = [
        {
            name: 'Bootstrap',
            src: 'https://vdigtech.com/wp-content/uploads/2024/03/Bootstrap.png'
        },
        {
            name: 'HTML',
            src: 'https://vdigtech.com/wp-content/uploads/2024/03/html-5.png'
        },
        {
            name: 'CSS',
            src: 'https://vdigtech.com/wp-content/uploads/2024/03/css-3.png'
        },
        {
            name: 'javascript',
            src: 'https://vdigtech.com/wp-content/uploads/2024/03/js.png'
        },
        {
            name: 'React',
            src: 'https://vdigtech.com/wp-content/uploads/2024/03/science.png'
        },
        {
            name: 'WordPress',
            src: 'https://vdigtech.com/wp-content/uploads/2024/03/wordpress.png'
        },


    ]

    const skillTwo = [
        {
            name: 'php',
            src: 'https://vdigtech.com/wp-content/uploads/2024/03/Frame-3.png'
        },
        {
            name: 'node.js',
            src: 'https://vdigtech.com/wp-content/uploads/2024/03/Frame-1-2.png'
        },
        {
            name: 'Sass',
            src: 'https://vdigtech.com/wp-content/uploads/2024/03/Frame-2-1.png'
        },
        {
            name: 'Angular',
            src: 'https://vdigtech.com/wp-content/uploads/2024/03/Frame-3-1.png'
        },
        {
            name: 'Shopify',
            src: 'https://vdigtech.com/wp-content/uploads/2024/03/shopify.png'
        },
        {
            name: 'Vue.js',
            src: 'https://vdigtech.com/wp-content/uploads/2024/03/Frame-4.png'
        }
    ]

    return (
        <>
            <div>
                <Container>
                    <div>
                        <h4 className='text-center'>Here are Numerous Topics That <br /> Will Enhance Your Skills</h4>
                        <div className='flex flex-wrap justify-center gap-5 pt-9'>
                            {
                                skill.map((item, i) => (
                                    <div key={i} className='relative bg-blue-100 rounded-full w-[20%] md:w-[33%]'>
                                        <div className='flex justify-center gap-3 items-center px-9 py-6'>
                                            <img width='30px' src={item.src} alt="bootstrap" />
                                            <p className=' font-semibold text-lg text-center' key={i}>{item.name}</p>
                                        </div>
                                        <p className='absolute -z-10 rounded-full bg-blue-500 -bottom-2 w-full h-full'></p>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='flex flex-wrap justify-center gap-5 pt-9'>
                            {
                                skillTwo.map((item, i) => (
                                    <div key={i} className='relative bg-blue-100 rounded-full w-[20%]'>
                                        <div className='flex justify-center gap-3 items-center px-9 py-6'>
                                            <img width='30px' src={item.src} alt="bootstrap" />
                                            <p className=' font-semibold text-lg text-center' key={i}>{item.name}</p>
                                        </div>
                                        <p className='absolute -z-10 rounded-full bg-blue-500 -bottom-2 w-full h-full'></p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </Container>
            </div>
        </>

    )
}

export default Skills