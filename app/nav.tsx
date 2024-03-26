import React from 'react'
import Link from "next/link"

export const Nav = () => {
  return (
    <div className='w-full bg-white drop-shadow-md px-6 md:px-12'>
        <div className=' py-4 md:px-6 items-center flex justify-start'>
           
            <div className='flex gap-4 md:gap-6 lg:gap-11 lg:text-lg'>
                <Link href="/#experience" className='hover:text-[#A065ED]'>Experience</Link>
                <Link href="/#skills" className='hover:text-[#A065ED]'>Skills</Link>
                <Link href="/#projects" className='hover:text-[#A065ED]'>Projects</Link>
                <Link href="/#contact" className='hover:text-[#A065ED]'>Contact</Link>
                
              
            </div>
        </div>
        
    </div>
  )
}
