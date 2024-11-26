import React from 'react'

const Main = () => {
  return (
    <>
   
    <div className='bg-white text-center relative'>
        <h1 className='text-5xl font-medium tracking-[-1px] mb-10 w-1/2 px-2 text-center mx-auto'>See how it works and get started in less than 2 minutes</h1>

        <div className='flex justify-center mb-10'>
            <img src='/video-img.svg' alt='video of company' />
            <div className='absolute top-80 left-1/2 transform -translate-x-1/2'>
            <img src='/play.svg' />
            </div>
        </div>

     <button className='bg-custom-blue py-4 px-8 rounded-2xl text-white cursor-pointer mb-16' >Get Started</button>

    </div>

    <hr class="border-t-2 border-gray-300 my-4" />
    </>
  )
}

export default Main
