import React from 'react'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import HireMe from '@/components/Hireme'

const page = () => {
  return (
    <div>
    <div className='max-w-[950px] mx-auto mt-10 flex flex-col gap-10'>
    <About/>
    <Skills/>
    <Experience/>
    <HireMe/>
    </div>
    </div>
  )
}

export default page
