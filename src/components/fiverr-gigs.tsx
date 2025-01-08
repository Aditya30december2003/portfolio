'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { TypeAnimation } from "react-type-animation";

gsap.registerPlugin(ScrollTrigger)

const gigs = [
  { id: 1, title: 'Responsive Web Design', price: '$50' },
  { id: 2, title: 'React Development', price: '$100' },
]

const FiverrGigs = () => {
  const sliderRef = useRef(null)
  const [sliderInstance] = useKeenSlider({
    loop: true,
    mode: 'free-snap',
    slides: {
      perView: 1,
      spacing: 15,
    },
    breakpoints: {
      '(min-width: 640px)': {
        slides: { perView: 2, spacing: 15 },
      },
      '(min-width: 768px)': {
        slides: { perView: 3, spacing: 15 },
      },
    },
  })

  useEffect(() => {
    const slider = sliderRef.current
    const cards = slider.querySelectorAll('.gig-card')

    gsap.fromTo(
      cards,
      { opacity: 0, y: 50, rotation: -5 },
      {
        opacity: 1,
        y: 0,
        rotation: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: slider,
          start: 'top 80%',
        },
      }
    )

    cards.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, { scale: 1.05, duration: 0.3, ease: 'power2.out' })
      })
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { scale: 1, duration: 0.3, ease: 'power2.out' })
      })
    })
  }, [])

  return (
    <div ref={sliderRef} className="keen-slider flex gap-10 p-2 w-full">
      {gigs.map((gig) => (
        <div key={gig.id} className="keen-slider__slide">
          <div className=" bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 p-6 h-full flex flex-col justify-between transform transition duration-300 hover:shadow-xl">
            <div>
              <h1>{gig.title}</h1>
              <p></p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FiverrGigs