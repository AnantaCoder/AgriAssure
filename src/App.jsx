import React from 'react'
import Navbar from './components/Navbar/Navbar'
import LandingPage from './components/LandingPage/LandingPage'
import Features from './components/Features/Features'
import Testimonial from './components/Testimonials/Testimonial'
import Map from './components/Map/Map'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <Features />
      <Testimonial />
      <Map />
      <Footer />
    </div>
  )
}

export default App
