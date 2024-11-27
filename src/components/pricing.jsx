import React from 'react'

const Pricing = () => {
  return (
    <div className='px-6 md:px-12 max-w-screen-lg mx-auto '>
      <div className='text-center pb-14 pt-20'>
        <h2 className=' text-4xl md:text-5xl font-medium leading-10 mb-4 md:mb-6'>Pricing</h2>
        <p className='text-base font-normal leading-6 tracking--3px'>Start free and scale while you grow. No hidden fees. Unlimited users for free.</p>
      </div>

      <div className=' flex flex-wrap items-center justify-center gap-6 w-full'>

        <div className='bg-gray-100  rounded-2xl px-6 py-8 w-full md:w-auto'>
            <h3 className='font-medium text-4xl leading-custom-43-2  pb-6'>Simple</h3>
            <p className='text-base w-72 pb-6'>Keep track of your contacts, gain valuable insights, 
                analyse live data and performance metrics.</p>
                <div className='flex items-center'>
                    <h3 className='text-4xl leading-custom-43-2 font-medium'>Free</h3>
                    <span className='pt-4 text-sm pl-2'>* No credit card required </span>
                </div>

                <hr className='border-t-2 border-gray-300 my-4' />

                <div className='space-y-2'>
                    <div className='flex gap-4 items-center text-left'><img src='/check.svg' /> Real-time monitoring </div>
                    <div className='flex gap-4 items-center text-left'><img src='/check.svg' /> Track key performance indicators </div>
                    <div className='flex gap-4 items-center text-left'><img src='/check.svg' /> Schedule appointments </div>
                    <div className='flex gap-4 items-center text-left'><img src='/check.svg' /> Organize, delegate and keep track of tasks </div>
                </div>

                <button className='bg-custom-blue hover:bg-hover-blue py-3.5 rounded-2xl text-white cursor-pointer mt-12 w-full' >Get Started</button>
        </div>

        {/* second pricing */}

  

  
        <div className='text-white bg-black px-6 py-8 rounded-2xl w-full md:w-auto'>
            
            <h3 className='font-medium text-4xl leading-custom-43-2  pb-6'>Premium</h3>
            <p className='text-base w-72 pb-6'>Keep track of your contacts, gain valuable insights, 
                analyse live data and performance metrics.</p>
                <div className='flex items-center'>
                    <h3 className='text-4xl leading-custom-43-2 font-medium'>$49</h3>
                    <span  className='pt-4 text-base pl-2'>/month </span>
                </div>

                <hr className='border-t-2 border-gray-300 my-4' />

               
                <div className='space-y-2 w-full md:w-400 items-center '>
                <p>Everything from the free plan <br />plus:</p>
                    <div className='flex gap-4 items-center text-left'><img src='/check-white.svg' /> Data-driven decisions </div>
                    <div className='flex gap-4 items-center text-left'><img src='/check-white.svg' /> Data visualisation </div>
                    <div className='flex gap-4 items-center text-left' ><img src='/check-white.svg' /> Schedule appointments </div>
                    <div className='flex gap-4 items-center text-left'><img src='/check-white.svg' /> Store and organise contact information </div >
                    <div className='flex gap-4 items-center text-left'><img src='/check-white.svg' /> Teal-time communication tools for messaging and video conferencing </div>

                </div>

                <button className='bg-custom-blue hover:bg-hover-blue py-4 px-8 rounded-2xl text-white cursor-pointer my-12 w-full' >Get Started</button>
               
        </div>
      </div>

      <div className='text-center mt-8 pb-10'>
        <p>All prices are in USD and charged per month with applicable taxes added at checkout.</p>
        <ul className='list-none hover:text-hover-blue cursor-pointer '>
          <li className='flex justify-center items-center font-semibold '>
            View features 
            <img src='/arrow.svg' alt='arrow' className='ml-2  hover:hidden' />
            <img src='/blue-arrow.svg' alt='arrow' className='ml-2 hidden hover:block' />

          </li>
        </ul>
      </div>
               
      <hr className="border-t-2 border-gray-300 my-4" />


    </div>
  )
}

export default Pricing
