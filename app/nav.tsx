import React from 'react'
import Link from "next/link"

export const Nav = () => {
  return (
    <div className='container w-full bg-transparent '>
        <div className=' pt-8 pb-4 md:px-6 lg:px-10 items-center flex justify-between text-xl font-semibold'>
            <div>
                <h1 className='text-white'>
                    Thato's Portfolio
                </h1>
            </div>
            <div className='flex flex-cols-3 gap-4 md:gap-6 lg:gap-11  '>
                <Link href="/" className='hover:'>Projects</Link>
                <Link href="/" className='hover:'>Contact</Link>
                
              
            </div>
        </div>
        
    </div>
  )
}
