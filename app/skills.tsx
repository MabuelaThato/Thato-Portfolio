import React from 'react'
import skills from '@/lib/skills'

export const Skills = () => {

  return (
    <div className='px-6 md:px-12 lg:px-12 py-8 md:py-32 md:pt-12' id='skills'>
        <h1 className='text-2xl md:text-4xl md:text-6xl font-black mb-6 lg:mb-16'>
            Skills<span className='text-[#A065ED] text-7xl'>.</span>
        </h1>
        <div className='flex flex-wrap gap-4 lg:gap-12 lg:justify-center'>
            {
              skills.map((skill:any) => {
                return (
                  <div className='bg-[#312244] text-white p-2 px-4 rounded-full lg:w-28 text-center'>
                    {skill}
                  </div>
                )
              })
            }
        </div>
   </div>
  )
}
