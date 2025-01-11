'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useKeenSlider } from 'keen-slider/react'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

const gigs = [
  { id: 1, link:'https://www.fiverr.com/aditya30122003/bring-your-vision-to-life-expert-web-development-services?context_referrer=seller_page&ref_ctx_id=9438bde141104dca823fe726fd048054&pckg_id=1&pos=1&seller_online=true&imp_id=2afa9b2e-a146-4e67-823c-405d0511bc28' , title: 'Responsive Web Design',img:'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/370916920/original/015f4343954c72b5380b7d55eb709db9e3b351d7/bring-your-vision-to-life-expert-web-development-services.png' },
  { id: 2, link:'https://www.fiverr.com/aditya30122003/create-a-stunning-and-functional-gym-training-websites?context_referrer=seller_page&ref_ctx_id=9438bde141104dca823fe726fd048054&pckg_id=1&pos=2&seller_online=true&imp_id=091dd2a0-e950-40df-89a8-73ac09943731' , title: 'React Development', img:'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/371543054/original/bee637cc235a8131bb0404f70e1c9a7350ac19a1/create-a-stunning-and-functional-gym-training-websites.png' },
  { id: 3, link:'https://www.fiverr.com/aditya30122003/design-a-modern-landing-page-or-portfolio-website?context_referrer=seller_page&ref_ctx_id=9438bde141104dca823fe726fd048054&pckg_id=1&pos=3&seller_online=true&imp_id=289f5ebd-38c9-49d2-af98-7f6dab6d8c19' , title: 'Responsive Web Design',img:'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/411863795/original/fb908e06ce3a4ccaae1b0060faba2f0686f5912d/design-a-modern-landing-page-or-portfolio-website.png' },
  { id: 4, link:'https://www.fiverr.com/aditya30122003/create-a-custom-link-in-bio-page-with-react-and-tailwind?context_referrer=seller_page&ref_ctx_id=9438bde141104dca823fe726fd048054&pckg_id=1&pos=4&seller_online=true&imp_id=efaec9a2-a1db-484b-b1b7-004b5d0b1b1b' , title: 'React Development', img:'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/411880272/original/7cc83e058349c27164a8bafdc989a6fc35d72ffb/create-a-custom-link-in-bio-page-with-react-and-tailwind.png' },
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
    <div ref={sliderRef} className="keen-slider grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-5 p-2 w-full">
      {gigs.map((gig) => (
        <div key={gig.id} className="keen-slider__slide bg-white-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100">
          <Link href={gig.link} target='_blank' className=" bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 p-6 h-full flex flex-col justify-between transform transition duration-300 hover:shadow-xl">
            <div className=''>
              <img src={gig.img} alt="" />
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default FiverrGigs