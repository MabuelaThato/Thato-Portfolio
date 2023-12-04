import { Separator } from '@/components/ui/separator'
import React from 'react'

const Experience = () => {
  return (
    <div className='px-6 md:px-12 lg:px-16 py-6 md:py-16' id='experience'>
        <h1 className='text-2xl md:text-4xl font-semibold mb-6'>Experience</h1>
        <p className='md:text-xl mb-8 font-light'>
            I am self-taught and driven by a passion for crafting engaging digital experiences.
            Armed with a solid foundation in HTML, CSS, and JavaScript, 
            I've navigated the ever-evolving landscape of web development and would love to start my career as a front-end developer.
        </p>
        <div className='px-12 md:mt-16'>
        <Separator />
        </div>

    </div>
  )
}

export default Experience