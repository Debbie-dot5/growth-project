import React from 'react'

const Hero = () => {


  return (
    <>
      <div className='px-6 md:px-12 mt-88 relative w-full md:w-3/5'>
      
      <div className='mb-8'>
       <h1 className='text-4xl  md:text-6xl text-center md:text-start font-medium leading-custom-1.1 md:mr-4 pb-4 px-4 md:px-0 '>A powerful solution to grow your startup. Fast!</h1>
        <p className='text-center md:text-left  text-xl font-normal md:w-2/3 md:pr-14'>Organise, collaborate, and track progress seamlessly with our one-stop-shop startup growth tool.</p>
        </div>

        <div className='flex w-full md:w-96 space-y-3.5 md:space-y-0 md:space-x-2.5 flex-col md:flex-row z-30'>
            <button className='bg-custom-blue hover:bg-hover-blue py-4 px-8 rounded-2xl text-white cursor-pointer' >Get Started</button>
            <button className=' bg-gray-100 flex items-center justify-center md:ml-2 py-4 px-8 rounded-2xl cursor-pointer gap-2'>
                 <img  src='/book-a-demo.png' />
                  Book a demo
                  </button>

        </div>
      </div>

      <div className='relative top-14 md:-top-40  w-full h-full px-6 md:px-12'>
        <img 
          className='hidden md:block w-full h-auto' 
          src="/desktop-hero.svg" 
          alt="hero images for now"
          fetchPriority='high'
          loading='lazy'
         />
        <img 
          className='block md:hidden w-full h-auto' 
          src="/mobile-hero.svg" 
          alt="hero images for now" 
          fetchPriority='high'
          loading='lazy'
        />
      </div>

     
    </>
  )
}

export default Hero
