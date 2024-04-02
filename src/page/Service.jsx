import React from 'react'
import Services from '../components/Services'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Accordion, AccordionDetails, AccordionSummary, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


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
      <section className='-mt-52 md:mt-8'>
        <Container>
          <div className='relative'>
            <img className='rounded-xl' src="https://real-estate-sable-pi.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout-video-illustration.0c7bebe2.png&w=1920&q=75" alt="" />
            <div className='video-btn relative bg-white md:p-3 p-8 rounded-full'>
              <Link to='https://www.youtube.com/watch?v=LCihLrSehCo' target='_blank'><PlayArrowIcon fontSize='large' /></Link>
            </div>
          </div>
        </Container>
      </section>

      <section className='mt-12'>
        <Services />
      </section>

      <section className='mt-12 bg-blue-100 p-10'>
        <Container>
          <div>
            <h4 className='text-center'>How We Works</h4>
            <div className='flex md:flex-wrap pt-10 gap-7 items-center text-center'>
              <div className='bg-white p-10 flex flex-col gap-3'>
                <h5 className='text-base'>Step 01</h5>
                <p className=' font-semibold text-lg border-b pb-4'>Web Inspection</p>
                <p className='text-base pt-4'>Proper inspection of a website with the best tools for the next stage.</p>
              </div>
              <ChevronRightIcon className='md:hidden' />
              <div className='bg-white p-10 flex flex-col gap-3'>
                <h5 className='text-base'>Step 02</h5>
                <p className=' font-semibold text-lg border-b pb-4'>Deep Optimization</p>
                <p className='text-base pt-4'>Optimizing the website with special strategies by covering all its needs.</p>
              </div>
              <ChevronRightIcon />
              <div className='bg-white p-10 flex flex-col gap-3'>
                <h5 className='text-base'>Step 03</h5>
                <p className=' font-semibold text-lg border-b pb-4'>Analyze Growth</p>
                <p className='text-base pt-4'>Expert analysis of website data for deploying a strategy for further growth.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className='mt-12'>
        <Container>
          <div className='flex md:flex-wrap gap-20'>
            <div className='w-1/2 md:w-full'>
              <img src="https://vdigtech.com/wp-content/uploads/2024/03/faq_services-details-style02-PQBW3XN-887x1024.jpg" alt="" />
            </div>
            <div className='w-1/2 md:w-full mx-auto'>
              <h4>Website Designing or Development Services</h4>
              <p>If you’re looking for website designing services, there are several options available to you.Here are a few avenues you can explore:</p>
              <div className='pt-8'>
                <Accordion sx={{boxShadow:'none' , padding:'0px 0'}} defaultExpanded>
                  <AccordionSummary
                  sx={{borderBottom:'1px solid rgba(0, 0, 0, 0.12)'}}
                    expandIcon={<ArrowDropDownIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    <Typography>Complete website management</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Complete website management encompasses comprehensive services to handle all aspects of a website’s operation and maintenance. It includes activities such as website design and development, content updates, security monitoring, performance optimization, SEO, backups and restoration, domain and hosting management, and ongoing support. This holistic approach ensures a well-maintained, secure, and high-performing website, allowing businesses to focus on their core operations while leaving the technical aspects to the experts, and website maintenance costs.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion sx={{boxShadow:'none' , padding:'0px 0'}}>
                  <AccordionSummary
                  sx={{borderBottom:'1px solid rgba(0, 0, 0, 0.12)'}}
                    expandIcon={<ArrowDropDownIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    <Typography>Security and protection</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Security and protection of a website are crucial to safeguard against cyber threats and unauthorized access. We monitor the website 24*7 to counter all kinds of threats to maintain the website safe.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion sx={{boxShadow:'none' , padding:'0px 0'}}>
                  <AccordionSummary
                  sx={{borderBottom:'1px solid rgba(0, 0, 0, 0.12)'}}
                    expandIcon={<ArrowDropDownIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    <Typography>Performance optimization</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Performance optimization refers to the process of improving a website’s speed, responsiveness, and overall performance to provide a better user experience. By implementing performance optimization techniques, websites can deliver a faster, smoother, and more engaging user experience, which can lead to improved search engine rankings, increased user satisfaction, and higher conversion rates.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Service