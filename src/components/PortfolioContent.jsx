'use client'
import { ProjectCard } from '@/components/ProjectCard'
import { motion } from 'framer-motion'
import Image from 'next/image';
const projects = [
  {
    title: "Phedaz",
    company: "Phedaz Website",
    year: "25",
    description: "Soar beyond limits.",
    image: "/Phedaz.png",
    link: "https://phedaz.com/"
  },
  {
    title: "Techistlab",
    company: "Techistlab",
    year: "24-25",
    description: "Transforming ideas into digital excellence.",
    image: "/techistlab.png",
    link: "https://techistlab.co.uk/"
  },
    {
    title: "Perktify",
    company: "Perktify",
    year: "25",
    description: "Simplify your path from startup to star.",
    image: "/perktify.png",
    link: "https://perktify.com/"
  }
  // {
  //   title: "hostelEats",
  //   company: "hostelEats",
  //   year: "23",
  //   description: "The Best Foods Delivered",
  //   image: "/hosteleats.png",
  //   link: "https://aditya30december2003.github.io/Food_Delivery_App/"
  // },
  // {
  //   title: "BlogBuster",
  //   company: "BlogBuster",
  //   year: "24",
  //   description: "Revolutionizing blogging.",
  //   image: "/blogbuster.png",
  //   link: "https://blo-g-buster30.vercel.app/"
  // },
  // {
  //   title: "Netflix",
  //   company: "Netflix Clone",
  //   year: "23",
  //   description: "Building connections through gaming.",
  //   image: "/netflix.png",
  //   link: "https://batflix-seven.vercel.app/"
  // },
  // {
  //   title: "Linkedin",
  //   company: "Linkedin Clone",
  //   year: "24",
  //   description: "Building connections through gaming.",
  //   image: "/linkedin.png",
  //   link: "https://linkedin-ten-blond.vercel.app/"
  // }
]

export default function PortfolioContent() {
  return (
    <motion.div 
      className="min-h-screen p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full lg:max-w-[870px] mx-auto">
        <div className="grid grid-cols-1  gap-20">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

