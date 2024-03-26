import React from 'react'

export const Skills = () => {

  return (
    <div className='text-left px-6 lg:px-16 ' id='skills'>
        <h1 className='text-4xl md:text-7xl font-black mb-16'>
            Skills<span className='text-[#A065ED] text-8xl'>.</span>
        </h1>
        <div className='grid grid-cols-3 lg:grid-cols-6 space-x-2 space-y-2 lg:space-y-0 lg:space-x-6 mb-16 text-center'>

            <div className='bg-[#A065ED] text-white p-2 px-4 rounded-full lg:w-28 '>
              HTML
            </div>
            <div className='bg-[#A065ED] text-white p-2 px-4 rounded-full lg:w-28'>
              CSS
            </div>
            <div className='bg-[#A065ED] text-white p-2 px-4 rounded-full lg:w-28'>
              JavaScript
            </div>
            <div className='bg-[#A065ED] text-white p-2 px-4 rounded-full lg:w-28'>
              TypeScript
            </div>
            <div className='bg-[#A065ED] text-white p-2 px-4 rounded-full lg:w-28'>
              API
            </div>
            <div className='bg-[#A065ED] text-white p-2 px-4 rounded-full lg:w-24'>
              Nextjs
            </div>
        </div>
   </div>
  )
}
