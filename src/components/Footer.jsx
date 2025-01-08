'use client'

import React from 'react'
import Link from 'next/link'
import { Github, Linkedin, Mail, LinkIcon, Code, DollarSign } from 'lucide-react'
import { SiLeetcode } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";
import { TbBrandFiverr } from "react-icons/tb";
import { GoArrowUpRight } from "react-icons/go";



const Footer = () => {
  return (
    <footer className='mt-10 text-white'>
      <div className='bg-white/20 w-full h-[0.05rem]'></div>
      <div className='p-10 max-w-[900px] mx-auto'>
        <div className='flex flex-col md:grid md:grid-cols-3 lg:grid-cols-3 gap-10 text-left'>
          <div>
            <h3 className='text-[0.7rem] font-bold mb-4 text-gray-600'>SOCIAL LINKS</h3>
            <ul className='space-y-2'>
              <li>
                <Link href="https://github.com/yourusername" className='flex items-center hover:text-gray-300 transition-colors'>
                  GitHub
                  <GoArrowUpRight />
                </Link>
              </li>
              <li>
                <Link href="https://linkedin.com/in/yourusername" className='flex items-center hover:text-gray-300 transition-colors'>
                  LinkedIn
                  <GoArrowUpRight />
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/yourusername" className='flex items-center hover:text-gray-300 transition-colors'>
                  Twitter
                  <GoArrowUpRight />
                </Link>
              </li>
              <li>
                <Link href="mailto:your.email@example.com" className='flex items-center hover:text-gray-300 transition-colors'>
                  Email
                  <GoArrowUpRight />
                </Link>
              </li>
              <li>
                <Link href="https://linktr.ee/yourusername" className='flex items-center hover:text-gray-300 transition-colors'>
                  Linktree
                  <GoArrowUpRight />
                </Link>
              </li>
              <li>
                <Link href="https://leetcode.com/yourusername" className='flex items-center hover:text-gray-300 transition-colors'>
                  LeetCode
                  <GoArrowUpRight />
                </Link>
              </li>
              <li>
                <Link href="https://www.fiverr.com/yourusername" className='flex items-center hover:text-gray-300 transition-colors'>
                  {/* <TbBrandFiverr className='w-5 h-5 mr-2' /> */}
                  Fiverr
                  <GoArrowUpRight />
                </Link>
              </li>
            </ul>
          </div>
          <div className=''>
          <h3 className='text-[0.7rem] font-bold mb-4 text-gray-600'>SOCIAL LINKS</h3>
            <ul className='space-y-2'>
              <li>
                <Link href="/portfolio" className='hover:text-gray-300 transition-colors flex items-center'>
                 <p>Portfolio</p> 
                 <GoArrowUpRight />
                </Link>
              </li>
              <li>
                <Link href="/services" className='hover:text-gray-300 transition-colors flex items-center'>
                 <p>Services</p> 
                 <GoArrowUpRight />
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className='hover:text-gray-300 transition-colors flex items-center'>
                <p>Testimonials</p>
                <GoArrowUpRight />
                </Link>
              </li>
              <li>
                <Link href="/contact" className='hover:text-gray-300 transition-colors flex items-center'>
                  <p>Contact</p>
                  <GoArrowUpRight />
                </Link>
              </li>
            </ul>
          </div>
          <div className=''>
            <h3 className='text-xl font-semibold mb-4'>About Me</h3>
            <p className='text-gray-300 w-full'>
              Freelance frontend developer specializing in creating modern, responsive, and user-friendly web applications. With a strong foundation in problem-solving and algorithm design, I bring efficiency and innovation to every project. Let's work together to bring your ideas to life!
            </p>
          </div>
        </div>
        <div className='mt-8 text-center text-gray-400'>
          <p>&copy; {new Date().getFullYear()} Aditya . All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

