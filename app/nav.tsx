import React from 'react'
import Link from "next/link"

export const Nav = () => {
  return (
    <div className='container w-full bg-[#FBFAFE] drop-shadow-2xl px-6 md:px-12'>
        <div className=' py-4 md:px-6 lg:px-10 items-center flex justify-start text-lg font-semibold'>
           
            <div className='flex gap-4 md:gap-6 lg:gap-11  '>
                <Link href="/#experience" className='hover:'>Experience</Link>
                <Link href="/#skills" className='hover:'>Skills</Link>
                <Link href="/#projects" className='hover:'>Projects</Link>
                <Link href="/#contact" className='hover:'>Contact</Link>
                
              
            </div>
        </div>
        
    </div>
  )
}
