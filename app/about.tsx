import { Separator } from '@/components/ui/separator'
import React from 'react'

const About = () => {
  return (
    <div className='px-8 md:px-24 md:pt-24'>
        <h1 className='text-4xl font-medium mb-6'>About me</h1>
        <p className='text-xl mb-20 font-light'>
        I'm a Front-end developer based in <span className='font-semibold'>Johannesburg, South Africa</span>.
        I love the challenge of staying on top of industry trends and technologies,
        always pushing myself to learn and grow and making the web a more enjoyable place for everyone.
        <br/>
        <br/>
        I specialise in creating user interfaces that align with client specifications and needs.
        <br/>
        <br/>
        I'm enthusiastic about enhancing customer experiences through thoughtful design, 
        and I understand the importance of a well-crafted digital presence in attracting venture capital.
        </p>
        <div className='px-12'>
        <Separator />
        </div>
    </div>
  )
}

export default About