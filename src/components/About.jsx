import React from 'react'
import { GoDotFill } from "react-icons/go";
import Image from 'next/image';
import { BsArrowUpRight } from "react-icons/bs";
import Link from 'next/link';
const About = () => {
  return (
    <div className='p-3 background mt-20' id='about'>
      <div className='flex items-center gap-2 glow-wrapper'>
      <GoDotFill className="text-white text-xl glow-icon" />
      <h1 className='text-[0.85rem] font-semibold'>ABOUT ME</h1>
      </div>
      <div>
        <h1 className='font-bold text-[1.6rem] lg:text-[2.5rem] w-full lg:w-[95%] title'>I'm passionate about creating beautiful products that empower people.</h1>
      </div>

      <div className='flex flex-col md:flex-row items-center gap-20 w-full mt-10'>
        <div className='md:w-[45%] w-full flex flex-col gap-7'>
        <div className='bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border-gray-100 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] border-2 rounded-md p-2'>
          <Image
          src="/Aditya.jpeg"
          width={600}
          height={900}
          alt="Picture of the author"
          className='rounded-md object-cover'
         />
        </div>
        <div className='flex flex-col gap-2'>
          <h1 className='font-semibold text-[1.7rem] lg:text-[1.3rem]'>Me as a Web Developer .</h1>
          <p className='text-[1.2rem] lg:text-[1rem] font-semibold'>I started my frontend development journey in November 2022, learning HTML and CSS before diving into JavaScript, GSAP, and Tailwind CSS. Eventually, I advanced to React, building dynamic and interactive web experiences with a focus on problem-solving and design.</p>
        </div>
        <Link href='https://aditya30december2003.github.io/Link_Tree/' target="_blank" className='flex gap-2 mx-auto'>
          <button className='text-[2rem] lg:text-[1.5rem] font-bold'>Linktree</button>
          <button><BsArrowUpRight size={25}/></button>
        </Link>
        <p className='font-semibold text-center lg:text-left text-[1.8rem] lg:text-[1.5rem] mt-7'>Thank you for visiting!</p>
        </div>
        <div className='w-full md:w-[35%] flex flex-col gap-6'>
         <p className='font-semibold'><span className='font-bold text-[1.3rem]'>Welcome to my personal portfolio! </span> Weaving the web's tapestry, one captivating website at a time, with a grand vision in mind.</p>
         <div className='bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border-gray-100 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-[100%] border-2 rounded-md'>
         <Image
          src="/Image2.png"
          width={600}
          height={500}
          alt="Picture of the author"
          className='rounded-md object-cover h-[20rem] w-full'
         />
         </div>
         <div className='text-[1rem] font-semibold'>
         While I enjoyed the creative freedom of academic practice, I craved a faster-paced environment and a broader impact. So, I ventured into freelancing. It was challenging at first, but with persistence, I eventually found success.
         </div>
        </div>
      </div>
    </div>
  )
}

export default About
