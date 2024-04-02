import { Container } from '@mui/material'
import React from 'react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const Services = () => {
    const service = [
        {
            src: 'https://vdigtech.com/wp-content/uploads/2024/03/development-1.png',
            name: 'Website Development',
            thumbImage: 'https://vdigtech.com/wp-content/uploads/2024/03/Image-20.jpg'
        },
        {
            src: 'https://vdigtech.com/wp-content/uploads/2024/03/XMLID_1809_.png',
            name: 'App Development',
            thumbImage: 'https://vdigtech.com/wp-content/uploads/2024/03/Image-21.jpg'
        },
        {
            src: 'https://vdigtech.com/wp-content/uploads/2024/03/brainstorming-1.png',
            name: 'Digital Markeing',
            thumbImage: 'https://vdigtech.com/wp-content/uploads/2024/03/Image-27.jpg'
        },
        {
            src: 'https://vdigtech.com/wp-content/uploads/2024/03/branding-1.png',
            name: 'Website Maintenance',
            thumbImage: 'https://vdigtech.com/wp-content/uploads/2024/03/Image-24.jpg'
        },
        {
            src: 'https://vdigtech.com/wp-content/uploads/2024/03/Group-1-2.png',
            name: 'Graphic Design',
            thumbImage: 'https://vdigtech.com/wp-content/uploads/2024/03/Untitled-design-1.png'
        },
        {
            src: 'https://vdigtech.com/wp-content/uploads/2024/03/optimization-1.png',
            name: 'Domain & Hosting',
            thumbImage: 'https://vdigtech.com/wp-content/uploads/2024/03/Untitled-design-2.png'
        },

    ]


    return (
        <>
            <div>
                <Container>
                    <div>
                        <h4 className='text-center'>Our Services</h4>
                        <p className='text-center pt-4'>Comprehensive Website Services to Ignite Your Online Success. Empower Your Business with Powerful Online Services from our Website.</p>
                    </div>
                    <div className='flex flex-wrap justify-center pt-4 gap-5'>
                        {
                            service.map((item, i) => (
                                <div key={i} className='box-shadow bg-white transition-all hover:-translate-y-1 pt-4 p-3 w-[23.69%]'>
                                    <div className='text-right'>
                                        <ArrowOutwardIcon className='text-blue-500 text-3xl' />
                                    </div>
                                    <div className=''>
                                        <img src={item.src} alt="" />
                                        <div className='flex flex-col gap-2 mt-4'>
                                            <p className=' font-semibold text-lg'>{item.name}</p>
                                            <img src={item.thumbImage} alt="" />
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Services