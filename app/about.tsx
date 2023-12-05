import { Separator } from '@/components/ui/separator'
import React from 'react'

const About = () => {
  return (
    <div className='px-6 md:px-12 lg:px-16 pt-10 lg:pt-24'>
        <h1 className='text-2xl md:text-4xl font-semibold mb-6'>About me</h1>
        <p className='md:text-xl mb-6 md:mb-20 font-light'>
        I'm a Front-end developer based in <span className='font-semibold'>Johannesburg, South Africa</span>.
        I love the challenge of staying on top of industry trends and technologies,
        always pushing myself to learn and grow and making the web a more enjoyable place for everyone.
        <br/>
        <br/>
        I specialise in creating user interfaces that align with client specifications and needs.
        </p>
        <div className='px-12'>
        <Separator />
        </div>
    </div>
  )
}

export default About