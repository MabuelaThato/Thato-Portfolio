import React from 'react'

export const Skills = () => {
  return (
    <div className='bg-[#212121] w-full text-center p-20'>
        <h1 className='text-5xl text-white font-bold'>My Skills</h1>
        <div className='grid grid-cols-4 m-16  px-20 gap-9'>

            <div className='bg-[#FAFAFA] circle'>
            <img src="/html-5.png" alt="" className='w-[100px] mx-auto'/>
            </div>
            <div className='bg-[#FAFAFA] circle'>
            <img src="/css-3.png" alt="" className='w-[100px] mx-auto'/>
            </div>
            <div className='bg-[#FAFAFA] circle'>
            <img src="/js.png" alt="" className='w-[90px] mx-auto'/>
            </div>
            <div className='bg-[#FAFAFA] circle'>
            <img src="/typescript.png" alt="" className='w-[90px] mx-auto'/>
            </div>
            <div className='bg-[#FAFAFA] circle'>
            <img src="/react.png" alt="" className='w-[90px] mx-auto'/>
            </div>
            <div className='bg-[#FAFAFA] circle'>
            <img src="/next.svg" alt="" className='w-[100px] mx-auto'/>
            </div>
            <div className='bg-[#FAFAFA] circle'>
            <img src="/debugging.png" alt="" className='w-[90px] mx-auto'/>
            </div>
            <div className='bg-[#FAFAFA] circle'>
            <img src="/git.png" alt="" className='w-[100px] mx-auto'/>
            </div>
            <div className='bg-[#FAFAFA] circle'>
            <img src="ajax.png" alt="" className='w-[90px] mx-auto'/>
            </div>
            <div className='bg-[#FAFAFA] circle'>
            <img src="responsive.png" alt="" className='w-[100px] mx-auto'/>
            </div>

        </div>
    </div>
  )
}
