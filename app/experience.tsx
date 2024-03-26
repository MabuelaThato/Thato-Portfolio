import React from 'react'
import { FaRegCalendarAlt } from "react-icons/fa";

const Experience = () => {
  return (
    <div className='px-6 lg:px-16 pb-6 md:pb-32 lg:mt-32' id='experience'>
        <h1 className='text-4xl md:text-7xl font-black mb-16'>
            Experience<span className='text-[#A065ED] text-8xl'>.</span>
        </h1>
        <div className='flex space-y-12 lg:space-y-0 flex-col lg:flex-row lg:space-x-28 justify-center'>
            <div className='p-8 border border-[#A065ED] rounded-md flex flex-col space-y-3 lg:w-96'>
              <div className='flex gap-2 text-[#A065ED] items-center text-sm'>
                <FaRegCalendarAlt />
                <span>July 2023 - September 2023</span>
              </div>
              <p className='text-lg font-bold'>Intern - SoImagine Systems</p>
              <p>
                Developing static websites and dynamic websites. Applying knowledge of APIs and databases.
              </p>
            </div>

          <div className='p-8 border border-[#A065ED] rounded-md flex flex-col space-y-3 lg:w-96'>
            <div className='flex gap-2 text-[#A065ED] items-center text-sm'>
            <FaRegCalendarAlt />
              <span>September 2023 – February 2023</span>
            </div>
            <p className='text-lg font-bold'>Junior E-learning developer - Afrizan Academy </p>
            <p>Used the learning material that was provided by the SETA and developed online courses teaching the
              learning material and creating tests and quizzes to test the learners understanding.
            </p>
          </div>
        </div>

    </div>
  )
}

export default Experience