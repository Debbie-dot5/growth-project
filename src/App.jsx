import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Main from './components/main'
import Testimonial from './components/testimonial'
import Pricing from './components/pricing'
import Faq from './components/faq'
import Footer from './components/footer'

const App = () => {

  return (
    <div className='w-full relative'>

     <div>
      <Navbar />
      <Hero  />
     </div>

      <div className='bg-black text-white' >
      <Main />
      <Testimonial />
      </div>

    <div>
     <Pricing />
      <Faq />
    </div>

    <div className=' bg-black text-white'>
    <Footer />
    </div>

   
    </div>
  )
}

export default App
