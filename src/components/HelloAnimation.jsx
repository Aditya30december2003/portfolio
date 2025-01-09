'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const HelloAnimation = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      onComplete()
    }, 3000) // Adjust this value to control how long the animation stays on screen

    return () => clearTimeout(timer)
  }, [onComplete])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0.5 } }
  }

  const textVariants = {
    hidden: { width: 0 },
    visible: { width: '100%', transition: { duration: 2, ease: 'easeInOut' } }
  }

  if (!isVisible) return null

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black text-white"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
    >
      <motion.div
        className="text-6xl font-bold overflow-hidden"
        variants={textVariants}
      >
        <span className="whitespace-nowrap">Hello.</span>
      </motion.div>
    </motion.div>
  )
}

export default HelloAnimation

