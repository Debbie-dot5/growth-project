import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Main from './components/main'
import Testimonial from './components/testimonial'
import Pricing from './components/pricing'
import Faq from './components/faq'

const App = () => {
  return (
    <div className='mx-12'>
      <Navbar />
      <Hero  />
      <Main />
      <Testimonial />
      <Pricing />
      <Faq />
    </div>
  )
}

export default App
