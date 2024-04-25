"use client"
import React from 'react'
import { FaGithub, FaPhoneAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Contact = () => {

  return (
    <div className='p-6 md:py-6 lg:px-12 bg-[#312244] text-white drop-shadow-2xl' id='contact'>
        <div className='flex flex-col lg:flex-row items-center lg:space-x-6 space-y-4 text-sm lg:text-base justify-around md:text-xl'>
            <p className='flex space-x-2 items-center'>
                <div><FaPhoneAlt /></div>
                <div>0794802246</div>
            </p>
            <p className='flex space-x-2 items-center'>
                <FiMail />
                <div>mabuelathato03@gmail.com</div>
            </p>
            <a href="https://github.com/MabuelaThato" target="_blank" className=' flex space-x-2 items-center'>
                <FaGithub />
                <div>
                https://github.com/MabuelaThato
                </div>
            </a>
        </div>
    </div>
  )
}

export default Contact