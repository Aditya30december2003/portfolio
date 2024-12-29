import React from 'react'
import { GoDotFill } from "react-icons/go";
const About = () => {
  return (
    <div className='bg-blue-500 h-[120vh] p-3 '>
      <div className='flex items-center gap-2'>
      <div>< GoDotFill/></div>
      <h1 className='text-[0.85rem] font-semibold'>ABOUT ME</h1>
      </div>
      <div>
        <h1 className='font-bold text-[2.5rem] w-[90%]'>I'm passionate about creating beautiful products that empower people.</h1>
      </div>
    </div>
  )
}

export default About
