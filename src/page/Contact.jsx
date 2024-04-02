import React from 'react'
import { Container } from '@mui/material';


const Contact = () => {
    return (
        <>
            <section className='hero-sec'>
                <Container>
                    <div className='text-center'>
                        <h1>How can we help?</h1>
                        <p>Got a question?</p>
                    </div>
                </Container>
            </section>
            <section className='-mt-52 md:mt-8'>
                <Container>
                    <div className='flex gap-5 md:flex-wrap justify-between'>
                        <div className='shadow-contact p-8 bg-white text-center flex flex-col gap-5 rounded-xl transition-all hover:-translate-y-2'>
                            <figure className='flex justify-center'>
                                <img src="https://real-estate-sable-pi.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Femail.bc40e3ef.png&w=256&q=75" alt="" />
                            </figure>
                            <h4>Send Us an Email</h4>
                            <p className='border-b pb-5'>Lorem ipsum dolor sit amet consectetur adipiscing.</p>
                            <h4 className='font-semibold text-lg text-center'>contact@revest.com</h4>
                        </div>
                        <div className='shadow-contact p-8 bg-white text-center flex flex-col gap-5 rounded-xl transition-all hover:-translate-y-2'>
                            <figure className='flex justify-center'>
                                <img src="https://real-estate-sable-pi.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fphone.ee7d86e7.png&w=256&q=75" alt="" />
                            </figure>
                            <h4>Give Us a Call</h4>
                            <p className='border-b pb-5'>Lorem ipsum dolor sit amet consectetur adipiscing.</p>
                            <h4 className='font-semibold text-lg text-center'>(414) 807 - 7478</h4>
                        </div>
                        <div className='shadow-contact p-8 bg-white text-center flex flex-col gap-5 rounded-xl transition-all hover:-translate-y-2'>
                            <figure className='flex justify-center'>
                                <img src="https://real-estate-sable-pi.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fchat.54b8d0c8.png&w=256&q=75" alt="" />
                            </figure>
                            <h4>Chat with us</h4>
                            <p className='border-b pb-5'>Lorem ipsum dolor sit amet consectetur adipiscing.</p>
                            <h4 className='font-semibold text-lg text-center'>Open live chat</h4>
                        </div>
                    </div>
                </Container>
            </section>

            <section className='mt-12'>
                <Container>
                    <div className='p-6 border border-[#c3c7e4] rounded-2xl max-w-[70%] md:max-w-full mx-auto'>
                        <h1 className='text-center font-semibold'>Ask a Question</h1>
                        <div className='pt-10'>
                            <form>
                                <div className='flex flex-wrap justify-between gap-y-4'>
                                    <div className='w-[47.9%] md:w-full'>
                                        <label className='text-blue-900 font-semibold' htmlFor="firstname">First Name</label><br />
                                        <input className='border-[#c3c7e4] border py-5 px-7 rounded-xl outline-none w-full' name='firstname' id='firstname' type="text" placeholder='Enter Your First Name' />
                                    </div>
                                    <div className='w-[47.9%] md:w-full'>
                                        <label className='text-blue-900 font-semibold' htmlFor="lastname">Last Name</label><br />
                                        <input className='border-[#c3c7e4] border py-5 px-7 rounded-xl outline-none w-full' name='lastname' id='lastname' type="text" placeholder='Enter Your Last Name' />
                                    </div>
                                    <div className='w-full'>
                                        <label className='text-blue-900 font-semibold' htmlFor="lastname">Email</label><br />
                                        <input className='border-[#c3c7e4] border py-5 px-7 rounded-xl outline-none w-full' name='Email' id='Email' type="email" placeholder='Enter Your Email Name' />
                                    </div>
                                    <div className='w-full'>
                                        <label className='text-blue-900 font-semibold' htmlFor="phone">phone</label><br />
                                        <input className='border-[#c3c7e4] border py-5 px-7 rounded-xl outline-none w-full' name='phone' id='phone' type="phone" placeholder='Enter Your Phone Number' />
                                    </div>
                                    <div className='w-full'>
                                        <label className='text-blue-900 font-semibold' htmlFor="Subject">Subject</label><br />
                                        <input className='border-[#c3c7e4] border py-5 px-7 rounded-xl outline-none w-full' name='Subject' id='Subject' type="text" placeholder='Write Subject' />
                                    </div>
                                    <div className='w-full'>
                                        <label className='text-blue-900 font-semibold' htmlFor="Message">Message</label><br />
                                        <textarea className='border-[#c3c7e4] border py-5 px-7 rounded-xl outline-none w-full' name="Message" id="Message" cols="10" rows="5" placeholder='Write Message' />
                                    </div>
                                    <div className='w-full'>
                                        <input className='border-[#c3c7e4] border py-5 px-7 rounded-xl outline-none w-full' name='Subject' id='Subject' type="submit" placeholder='Write Subject' />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Contact