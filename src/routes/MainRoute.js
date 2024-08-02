import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../components/Header'
import Footer  from '../components/Footer'
import Home from '../pages/Home'
import AboutUs from '../pages/AboutUs'
import ContactUs from '../pages/ContactUs'

const MainRoute = () => {
  return (

      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="AboutUs" element={<AboutUs />} />
        <Route path="ContactUs" element={<ContactUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
 
  )
}

export default MainRoute
