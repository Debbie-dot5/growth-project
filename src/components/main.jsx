import React from 'react'

const Main = () => {


   
       return (
    <div>
   
    <div className='bg-white text-center relative'>
        <h1 className='text-4xl md:text-5xl font-medium tracking-[-1px] mb-10 mt-40 w-full md:w-1/2 md:px-2 text-center mx-auto'>See how it works and get started in less than 2 minutes</h1>

        <div className='relative flex justify-center mb-10'>

            <img src='/video-img.svg' alt='video of company' />

            <div className='absolute inset-0 flex items-center justify-center'>
            <img className='w-12 md:w-18' src='/play.svg' alt='play' />
            </div>
        </div>

     <button className='bg-custom-blue py-4 px-8 rounded-2xl text-white cursor-pointer mb-16 w-full md:w-40' >Get Started</button>

    </div>

    <hr class="border-t-2 border-gray-300 my-4" />
    </div>
  )
}

export default Main
