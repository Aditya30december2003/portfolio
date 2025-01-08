'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import FiverrGigs  from '../components/fiverr-gigs'
import { BackgroundAnimation } from './background-animation'

gsap.registerPlugin(ScrollTrigger)
const HireMe = () => {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const paragraphRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    
  }, [])

  return (
    <section ref={sectionRef} className="relative bg-black py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <BackgroundAnimation />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center text-white mb-12">
          <h2 
            ref={headingRef} 
            className="text-4xl sm:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100"
          >
            Elevate Your Web Presence
          </h2>
          <p ref={paragraphRef} className="text-xl text-gray-300 max-w-2xl mx-auto">
            As a freelance frontend developer, I bring your web ideas to life with clean, performant, and modern solutions.
          </p>
        </div>

        <FiverrGigs />

        <div className="flex justify-center mt-12">
          <a 
            href="https://www.fiverr.com/yourprofile" 
            target="_blank" 
            className="bg-white text-black p-5 text-lg font-semibold rounded-[2rem]"
          >
            Hire Me on Fiverr
          </a>
        </div>
      </div>
    </section>
  )
}
export default HireMe