import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../page/Home'
import Header from '../components/Header'
import Footer from '../components/Footer'
import About from '../page/About'
import Service from '../page/Service'
import Contact from '../page/Contact'

const Routing = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route path='/'> */}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/Contact' element={<Contact />} />
        {/* </Route> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Routing