import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../page/Home'
import Header from '../components/Header'
import Footer from '../components/Footer'
import About from '../page/About'
import Service from '../page/Service'

const Routing = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/'>
          <Route path='/impactmindz-tech' element={<Home />} />
        </Route>
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Routing