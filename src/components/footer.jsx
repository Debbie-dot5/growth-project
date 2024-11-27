import React from 'react'

const Footer = () => {
  return (
    <div className='px-12 '>
     <img className='w-24 mb-10' src='/Logo.png' />

    <div className='flex flex-wrap justify-between '>
      
       
        <div className='bg-gray-400 w-400 px-4 py-4 rounded-2xl'>
            <h3 className='font-medium text-xl pb-1.5 text-gray-800'>Subscribe to newsletter</h3>
            <p className='font-normal text-base leading-6 pb-1.5 w-80 pr-2 text-gray-900'>Subscribe now to receive  tips on how to take your business to the next level.</p>

            <div className='space-x-3.5 pb-4 pt-4'>
            <input type="email" placeholder='Enter your email' className='border border-solid border-2 border-gray-300 py-1 pl-1.5'/>
            <button className='bg-custom-blue py-2 px-6 rounded-xl text-white cursor-pointer ' >Subscribe</button>
            </div>
        </div>

       
 


     
        <ul className='space-y-2'>
            <p className='font-semibold text-base text-cool-gray-200'>Company</p>
            <li className='text-sm'>About</li>
            <li className='text-sm'>Our Process</li>
            <li className='text-sm'>Join our team</li>

        </ul>
     


     
        <ul  className='space-y-2'>
            <p className='font-semibold text-base text-cool-gray-200'>Resources</p>
            <li className='text-sm'>News</li>
            <li className='text-sm'>Research</li>
            <li className='text-sm'>Recent Projects</li>

        </ul>
      


    
        <ul  className='space-y-2'>
            <p className='font-semibold text-base text-cool-gray-200'>Contact</p>
            <li className='text-sm'>hello@growthapp.com</li>
           

        </ul>
      
     
    </div>
    <div className='flex gap-4 mt-6 mb-8'>
            <img src='/linkedin.svg' />
            <img src='/twitter.svg' />


        </div>
    <span className='text-xs'>© 2023 Growth. All rights reserved</span>
    </div>
  )
}

export default Footer
//dont forget to add font family