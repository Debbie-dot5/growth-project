import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Main from './components/main'
import Testimonial from './components/testimonial'
import Pricing from './components/pricing'
import Faq from './components/faq'
import Footer from './components/footer'

const App = () => {

  const blackBackgroundStyle = {
    backgroundColor: 'white', 
    color: 'black', 
    height: '100vh'          
  }; 

  return (
    <div className='px-6 md:px-12'>
     <Navbar />
     <Hero  />
       <Main />
      <Testimonial />
      <Pricing />
      <Faq />
      <Footer />
    </div>
  )
}

export default App
