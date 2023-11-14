import React from 'react'
import Link from "next/link"

export const Hero = () => {
  return (
   <div className='hero-container'>

        <div className=' pt-6 pb-4 md:px-6 lg:px-10 items-center flex justify-between text-2xl font-semibold'>
            <div className='ml-10 font-black'>
                <h1 className='text-white'>
                    Thato's Portfolio
                </h1>
            </div>
            <div className='flex flex-cols-3 gap-4 md:gap-6 lg:gap-11 pr-8'>
                <Link href="/" className='hover:'>Projects</Link>
                <Link href="/" className='hover:'>Contact</Link>
            </div>
        </div>
      
     <div className=' w-full pt-28 pl-12 pr-10'>
        <div className='grid grid-cols-2 justify-center'>
            <div className='mx-auto'>
                <img src="/profile.jpg" alt=""  className='image'/>
            </div>
            <div className='text-left'>
                <h1 className='text-5xl mb-20 font-medium'>
                    Hi! I'm <span className='bg-[#212121] text-white font-bold p-2 rounded'>Thato Mabuela </span>
                </h1>
                <p className='text-xl'>
                A self-taught front-end and web developer, armed with determination and a passion for coding and creating dynamic websites and web applications.
                </p>

                <div className='flex flex-cols-2 space-x-16 font-semibold text-lg text-center mt-20'>
                    <button className='btn-1 rounded-full px-6 py-2 border border-[#212121]'>Hire Me</button>
                    <button className='btn-2 rounded-full px-6 py-2 border border-[#212121]'>Get CV</button>
                </div>
            </div>
        </div>
    </div>
   </div>
  )
}
