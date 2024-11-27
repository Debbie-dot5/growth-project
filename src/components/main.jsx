import { useState } from "react";

const Main = () => {

  const [isPlay, setIsPlay] = useState();

  const tooglePlay = () => {
    setIsPlay(!isPlay);
  }
   
    return (
    <div className=' px-6 md:px-12 w-full relative mt-10'>
   
    <div className=' text-center relative '>
        <h1 className='text-4xl md:text-5xl font-medium tracking-[-1px] mb-10  pt-20 w-full md:w-1/2 md:px-2 text-center mx-auto'>See how it works and get started in less than 2 minutes</h1>

        <div className='relative flex justify-center mb-10'>

            <img src='/video-img.svg' alt='video of company' />

            <div onClick={tooglePlay} className='absolute inset-0 flex items-center justify-center'>
           {isPlay ? (
             <img className='w-12 md:w-18 hover:w-14 md:hover:w-18.5 rounded-full' src='/pause.jpg' alt='pause' />

           ): (
            <img className='w-12 md:w-18 hover:w-14 md:hover:w-18.5' src='/play.svg' alt='play' />

           )}


            </div>
        </div>

     <button className='bg-custom-blue hover:bg-hover-blue  py-4 px-8 rounded-2xl text-white cursor-pointer mb-16 w-full md:w-40' >Get Started</button>

    </div>

    <hr className="border-t-2 border-gray-700 my-4" />
    </div>
  )
}

export default Main
