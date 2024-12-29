import React from 'react'

const Navbar = () => {
  return (
    <div>
      <ul className='flex bg-green-400 w-full gap-4 text-[0.9rem] font-semibold py-1 px-2 rounded-[4rem]'>
        <li className='cursor-pointer hover:bg-red-500 rounded-[4rem] px-3 py-2'>Home</li>
        <li className='cursor-pointer hover:bg-red-500 rounded-[4rem] px-3 py-2'>About</li>
        <li className='cursor-pointer hover:bg-red-500 rounded-[4rem] px-3 py-2'>Contact</li>
        <li className='cursor-pointer hover:bg-red-500 rounded-[4rem] px-3 py-2'>Skills</li>
        <li className='cursor-pointer hover:bg-red-500 rounded-[4rem] px-3 py-2'>Projects</li>
      </ul>
    </div>
  )
}

export default Navbar
