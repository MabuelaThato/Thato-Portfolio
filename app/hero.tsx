import React from 'react'
import Link from "next/link"
import { Button } from '@/components/ui/button';

export const Hero = () => {
  return (
   <div className="items-center w-full mt-24 px-16 ">
    <div className='w-full mx-auto grid grid-rows-1 lg:grid-cols-2 text-center lg:text-left items-center justify-center'>
        <div className='flex flex-col space-y-12'>
        <h1 className='text-4xl md:text-7xl font-black'>
            Thato Mabuela<span className='text-[#A065ED] text-8xl'>.</span>
        </h1>
        <p className='text-lg'>
        I'm a <span className='text-[#A065ED]'>frontend developer</span> based in Johannesburg, South Africa. I am passionate about crafting user-friendly interfaces that bring designs to life.
        </p>
        <div className='flex flex-row space-x-6 mx-auto lg:mx-0'>
            <Button  className='text-md border-2 bg-[#312244] font-medium border-[#312244] hover:text-[#312244] hover:bg-white' variant="default">
                <a href="/Thato-Mabuela-CV.pdf" download="Thato-Mabuela-CV.pdf">
                    Get CV
                </a>
            </Button>
            <Button  className='text-md bg-[#A065ED] text-white font-medium border-2 hover:bg-white border-[#A065ED] hover:text-[#A065ED]'>
                <Link href="/#contact">
                    Get in touch
                </Link>
            </Button>
        </div>
        </div>
        <img src="/profile.jpg" alt="" className='invisible lg:visible profile border border-[#A065ED/30] p-2 bg-white drop-shadow-[0_20px_13px_rgba(160,101,237,0.25)] w-[200px] md:w-[270px] lg:w-[320px]'/>
    </div>
       
   
   </div>
  )
}
