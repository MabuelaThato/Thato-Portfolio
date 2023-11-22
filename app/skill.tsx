import React from 'react'
import { BsPatchCheckFill } from "react-icons/bs";

export const Skills = () => {
  return (
    <div className='' id='skills'>
      <div className='bg-white m-4 md:m-12 lg:m-24 rounded-xl text-center p-3 md:p-10 lg:p-20 py-14 drop-shadow-2xl'>
        <h1 className='text-2xl md:text-4xl font-black mb-6'>Skills</h1>
        <div className='grid grid-cols-2'>
          <div className='flex flex-col space-y-4 '>

            <div>
              <span className='flex space-x-2 items-center text-lg'><BsPatchCheckFill /><span>HTML</span></span>
              <p className='text-left ml-6 text-slate-200'>Intermediate</p>
            </div>
            <div>
              <span className='flex space-x-2 items-center text-lg'><BsPatchCheckFill /><span>CSS</span></span>
              <p className='text-left ml-6 text-slate-200'>Intermediate</p>
            </div>
            <div>
              <span className='flex space-x-2 items-center text-lg'><BsPatchCheckFill /><span>JavaScript</span></span>
              <p className='text-left ml-6 text-slate-200'>Basic</p>
            </div>
            <div>
              <span className='flex space-x-2 items-center text-lg'><BsPatchCheckFill /><span>TypeScript</span></span>
              <p className='text-left ml-6 text-slate-200'>Basic</p>
            </div>
            <div>
              <span className='flex space-x-2 items-center text-lg'><BsPatchCheckFill /><span>API intergration</span></span>
              <p className='text-left ml-6 text-slate-200'>Basic</p>
            </div>

          </div>

          <div className='flex flex-col space-y-4'>

            <div>
              <span className='flex space-x-2 items-center text-lg'><BsPatchCheckFill /><span>React</span></span>
              <p className='text-left ml-6 text-slate-200'>Intermediate</p>
            </div>
            <div>
              <span className='flex space-x-2 items-center text-lg'><BsPatchCheckFill /><span>Nextjs</span></span>
              <p className='text-left ml-6 text-slate-200'>Intermediate</p>
            </div>
            <div>
              <span className='flex space-x-2 items-center text-lg'><BsPatchCheckFill /><span>Front-end frameworks</span></span>
              <p className='text-left ml-6 text-slate-200'>Intermediate</p>
            </div>
            <div>
              <span className='flex space-x-2 items-center text-lg'><BsPatchCheckFill /><span>Responsive design</span></span>
              <p className='text-left ml-6 text-slate-200'>Basic</p>
            </div>
            <div className='flex flex-col '>
              <span className='flex space-x-2 items-center text-lg'><BsPatchCheckFill /><span>Git</span></span>
              <p className='text-left ml-6 text-slate-200'>Basic</p>
            </div>

          </div>
        </div>
      </div>
   </div>
  )
}
