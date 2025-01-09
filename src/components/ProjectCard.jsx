import React from 'react'
import PropTypes from 'prop-types'
import { ArrowRight, Minus, Square, X } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export function ProjectCard({ title, company, year, description, image, link, index }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.23, 1, 0.32, 1]
      }}
      className='p-2 border-2 border-gray-500/40 rounded-md shadow-[1px_5px_20px_2px_#a0aec0]'
    >
      <Link href={link} target='_blank'>
        <motion.div 
          className="group relative rounded-xl card-bg overflow-hidden cursor-pointer border border-white/10 p-2"
          whileHover={{ scale: 1.05, y: -10 }}
          transition={{ 
            type: "spring",
            stiffness: 300,
            damping: 20
          }}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-blue-500/10 opacity-0 transition-opacity duration-300"
            whileHover={{ opacity: 1 }}
          />
          
          {/* Project Info */}
          <div className="relative z-20 p-6 flex flex-col h-full">
            <motion.div 
              className="flex justify-between items-start mb-2"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <div>
                <h2 className="text-2xl font-semibold text-white mb-1">{title}</h2>
                <p className="text-gray-400">
                  {company}, '{year} — {description}
                </p>
              </div>
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            </motion.div>
          </div>

          {/* Browser Frame */}
          <div className="mt-4">
            <motion.div 
              className="bg-[#000000] rounded-lg shadow-xl"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="h-9 bg-[#2b2b2b] lg:bg-[#515050] rounded-t-lg flex justify-between items-center px-4 border-b border-white/5">
                <div className="flex items-center gap-4">
                  <div className="flex gap-2">
                    {/* <motion.div 
                      className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500"
                      whileHover={{ scale: 1.2 }}
                    />
                    <motion.div 
                      className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500"
                      whileHover={{ scale: 1.2 }}
                    />
                    <motion.div 
                      className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500"
                      whileHover={{ scale: 1.2 }}
                    /> */}
                  </div>
                  <div className="text-sm text-gray-300 truncate border-l border-white/10 pl-4">
                    {title}
                  </div>
                </div>
                <div className="flex gap-4">
                <Minus className="w-4 h-4 text-gray-300 cursor-pointer bg-yellow-500 rounded-xl p-1 font-bold" />
              <Square className="w-4 h-4 text-gray-300 cursor-pointer bg-green-600 rounded-xl p-1 font-bold" />
              <X className="w-4 h-4 text-gray-300 cursor-pointer bg-red-600 rounded-xl p-1 font-bold" />
                </div>
              </div>
              <div className="relative aspect-video overflow-hidden">
                <motion.img 
                  src={image} 
                  alt={title}
                  className="w-full h-full object-fit object-x-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  )
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
}

export default ProjectCard

