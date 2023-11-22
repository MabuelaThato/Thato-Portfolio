import React from 'react'
import Link from "next/link"

export const Nav = () => {
  return (
    <div className='container w-full bg[#FBFAFF] px-12'>
        <div className=' pt-8 pb-4 md:px-6 lg:px-10 items-center flex justify-end text-lg font-semibold'>
           
            <div className='flex flex-cols-3 gap-4 md:gap-6 lg:gap-11  '>
                <Link href="/" className='hover:'>Projects</Link>
                <Link href="/" className='hover:'>Contact</Link>
                
              
            </div>
        </div>
        
    </div>
  )
}
