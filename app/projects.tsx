import React from 'react'
import { FaGithub } from "react-icons/fa"
import { PiArrowSquareOut } from "react-icons/pi";

const Projects = () => {
  return (
    <div id='projects'>
        <div className='grid grid-cols-2'>
             <img src="/Pailane-website.png" alt=""  className='p-1 drop-shadow-xl'/>
             <div>
                <h1 className='font-semibold text-2xl'>Financial advisor website</h1>
                <p>
                    This project is a website I created for a financial advisor to let potential clients
                    know of his services and get in touch with him.

                    <div className='flex flex-row space-x-4'>
                        <div>
                            <span className='flex space-x-1'>Code <a href="https://github.com/MabuelaThato/pailane"><FaGithub size={32}/></a></span>
                        </div>
                        <div>
                            <span className='flex space-x-1'>Live Demo <a href="https://pailane.vercel.app/"><PiArrowSquareOut /></a></span>
                        </div>
                    </div>
                </p>

             </div>
        </div>
    </div>
  )
}

export default Projects