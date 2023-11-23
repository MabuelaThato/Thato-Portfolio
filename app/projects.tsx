import React from 'react'
import { FaGithub } from "react-icons/fa"
import { PiArrowSquareOut } from "react-icons/pi";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTypescript,SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const Projects = () => {
  return (
    <div className='px-24 py-16' id='projects'>
        <h1 className='text-4xl font-medium mb-6'>Projects</h1>


        <div className='grid grid-cols-2 mt-12'>
            <a href="https://github.com/MabuelaThato/pailane" target="_blank">
                <img src="/Pailane-website.png" alt=""  className='p-2 rounded-lg bg-white drop-shadow-2xl w-[500px]'/>
            </a>
            
            <div>
                <h1 className='font-semibold text-2xl mb-10 mt-6'>Financial advisor website</h1>
                <p className='font-light mb-6'>
                    This project is a website I created for a financial advisor to let potential clients
                    know of his services and get in touch with him.

                    <p className='flex space-x-4 mt-10'>
                    <span className='font-medium underline underline-offset-4'>Tech stack:</span>
                    <span className='flex space-x-4'>
                        <FaHtml5 size={24}/>
                        <FaCss3Alt size={24}/>
                        <SiTypescript size={24}/>
                        <SiTailwindcss size={24}/>
                        <TbBrandNextjs size={24}/>
                    </span>
                </p>
                </p>
                    <div className='flex flex-row space-x-8 mb-10 mt-6'>
                        <div>
                            <a href="https://github.com/MabuelaThato/pailane" target="_blank" className='flex space-x-2'><span className='font-medium'>Code</span> <span><FaGithub size={24}/></span></a>
                        </div>
                        <div>
                            <a href="https://pailane.vercel.app/" target="_blank" className='flex space-x-2'><span className='font-medium'>Live Demo</span> <span><PiArrowSquareOut size={24}/></span></a>
                        </div>
                    </div>
            </div>

        </div>


    </div>
  )
}

export default Projects