import React from 'react'
import Navbar from '../components/Navbar'
const Header = () => {
  return (
    <div className='flex  items-center justify-between px-10 py-5 w-full'>
       <div className='w-[15%] '>
        <h1 className='text-[1.3rem] font-bold'>Aditya Jain</h1>
        <h1 className='text-[0.8rem]'>Web Developer</h1>
       </div>
      <Navbar className='w-[70%]'/>
      <div className='w-[13%] p-2 text-[0.9rem] font-semibold flex justify-between'>
        <button>Resume</button>
        <button>Hire Me</button>
      </div>
    </div>
  )
}

export default Header
