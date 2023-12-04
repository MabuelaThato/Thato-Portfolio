import { Separator } from '@/components/ui/separator';
import React from 'react'
import { BsPatchCheckFill } from "react-icons/bs";

export const Skills = () => {
  const style = { color: '#D47ABA'}

  return (
    <div className='text-left px-6 md:px-16' id='skills'>
        <h1 className='text-2xl md:text-4xl font-semibold mb-6 md:mb-10 lg:mb-12 '>Skills</h1>
        <div className='grid grid-cols-2 font-light md:space-x-8 mb-16'>
          <div className='flex flex-col space-y-4 md:space-y-8'>

            <div>
              <span className='flex space-x-4 items-center text-lg md:text-2xl'><BsPatchCheckFill style={style}/><span>HTML</span></span>
            </div>
            <div>
              <span className='flex space-x-4 items-center text-lg md:text-2xl'><BsPatchCheckFill style={style}/><span>CSS</span></span>
            </div>
            <div>
              <span className='flex space-x-4 items-center text-lg md:text-2xl'><BsPatchCheckFill style={style}/><span>JavaScript</span></span>
            </div>
            <div>
              <span className='flex space-x-4 items-center text-lg md:text-2xl'><BsPatchCheckFill style={style}/><span>TypeScript</span></span>
            </div>
            <div>
              <span className='flex space-x-4 items-center text-lg md:text-2xl'><BsPatchCheckFill style={style}/><span>API intergration</span></span>
            </div>

          </div>

          <div className='flex flex-col space-y-4 md:space-y-8'>

            <div>
              <span className='flex space-x-4 items-center text-lg md:text-2xl'><BsPatchCheckFill style={style}/><span>React</span></span>
            </div>
            <div>
              <span className='flex space-x-4 items-center text-lg md:text-2xl'><BsPatchCheckFill style={style}/><span>Nextjs</span></span>
            </div>
            <div>
              <span className='flex space-x-4 items-center text-lg md:text-2xl'><BsPatchCheckFill style={style}/><span>Front-end frameworks</span></span>
            </div>
            <div>
              <span className='flex space-x-4 items-center text-lg md:text-2xl'><BsPatchCheckFill style={style}/><span>Responsive design</span></span>
            </div>
            <div className='flex flex-col '>
              <span className='flex space-x-4 items-center text-lg md:text-2xl'><BsPatchCheckFill style={style}/><span>Git</span></span>
            </div>

          </div>
        </div>
      <div className='px-12'>
        <Separator />
        </div>
   </div>
  )
}
