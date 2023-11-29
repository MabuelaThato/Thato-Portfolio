import React from 'react'
import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from '@/components/ui/button';

export const Hero = () => {
  return (
   <div className="
   items-center min-h-screen bg-cover flex flex-col w-full"
  style={{
    backgroundImage:
      'url("/image.jpg")',
  }}
  >
    <div className='w-full pt-72 md:pt-40 px-10 md:px-32 text-center'>
        <img src="/profile.jpg" alt="" className='profile p-1 bg-white drop-shadow-2xl w-[200px] md:w-[270px]'/>
        <h1 className='text-4xl md:text-6xl mt-12 mb-6 font-medium'>
            Thato Mabuela
        </h1>
        <div className='flex flex-row justify-center mb-6 space-x-4'>
            <a href="https://github.com/MabuelaThato" target="_blank" className=''>
            <FaGithub size={32}/>
            </a>
            <a href="https://www.linkedin.com/in/thato-mabuela-68781017a/" target="_blank">
            <FaLinkedin size={32} />
            </a>
        </div>
        <div className='flex flex-row justify-center space-x-6'>
            <Button  className='text-lg' variant="outline">
                <a href="/Thato-Mabuela-CV.pdf" download="Thato-Mabuela-CV.pdf">
                    Get CV
                </a>
            </Button>
            <Button  className='text-lg'>
                <Link href="/#contact">
                    Hire me
                </Link>
            </Button>
        </div>
    </div>
       
   
   </div>
  )
}
