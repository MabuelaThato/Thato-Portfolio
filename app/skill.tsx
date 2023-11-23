import React from 'react'
import { BsPatchCheckFill } from "react-icons/bs";

export const Skills = () => {
  const style = { color: '#D47ABA'}
  return (
    <div className='' id='skills'>
      <div className='bg-white m-4 md:m-12 lg:m-16 rounded-xl p-3 md:px-24 md:py-12 lg:px-44 lg:py-24 drop-shadow-2xl'>
        <h1 className='text-2xl md:text-4xl font-medium mb-20 underline decoration-[#D47ABA] underline-offset-8'>Skills</h1>
        <div className='grid grid-cols-2 font-light space-x-12'>
          <div className='flex flex-col space-y-8'>

            <div>
              <span className='flex space-x-4 items-center text-2xl'><BsPatchCheckFill style={style}/><span>HTML</span></span>
              <p className='text-left ml-10 text-slate-400 text-sm'>Intermediate</p>
            </div>
            <div>
              <span className='flex space-x-4 items-center text-2xl'><BsPatchCheckFill style={style}/><span>CSS</span></span>
              <p className='text-left ml-10 text-slate-400 text-sm'>Intermediate</p>
            </div>
            <div>
              <span className='flex space-x-4 items-center text-2xl'><BsPatchCheckFill style={style}/><span>JavaScript</span></span>
              <p className='text-left ml-10 text-slate-400 text-sm'>Basic</p>
            </div>
            <div>
              <span className='flex space-x-4 items-center text-2xl'><BsPatchCheckFill style={style}/><span>TypeScript</span></span>
              <p className='text-left ml-10 text-slate-400 text-sm'>Basic</p>
            </div>
            <div>
              <span className='flex space-x-4 items-center text-2xl'><BsPatchCheckFill style={style}/><span>API intergration</span></span>
              <p className='text-left ml-10 text-slate-400 text-sm'>Basic</p>
            </div>

          </div>

          <div className='flex flex-col space-y-8'>

            <div>
              <span className='flex space-x-4 items-center text-2xl'><BsPatchCheckFill style={style}/><span>React</span></span>
              <p className='text-left ml-10 text-slate-400 text-sm'>Intermediate</p>
            </div>
            <div>
              <span className='flex space-x-4 items-center text-2xl'><BsPatchCheckFill style={style}/><span>Nextjs</span></span>
              <p className='text-left ml-10 text-slate-400 text-sm'>Intermediate</p>
            </div>
            <div>
              <span className='flex space-x-4 items-center text-2xl'><BsPatchCheckFill style={style}/><span>Front-end frameworks</span></span>
              <p className='text-left ml-10 text-slate-400 text-sm'>Intermediate</p>
            </div>
            <div>
              <span className='flex space-x-4 items-center text-2xl'><BsPatchCheckFill style={style}/><span>Responsive design</span></span>
              <p className='text-left ml-10 text-slate-400 text-sm'>Basic</p>
            </div>
            <div className='flex flex-col '>
              <span className='flex space-x-4 items-center text-2xl'><BsPatchCheckFill style={style}/><span>Git</span></span>
              <p className='text-left ml-10 text-slate-400 text-sm'>Basic</p>
            </div>

          </div>
        </div>
      </div>
   </div>
  )
}
