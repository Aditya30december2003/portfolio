'use client'

import { motion } from "framer-motion"
import { X, Minus, Square } from 'lucide-react'

export default function Portfolio() {
  return (
    <div className="mt-16">
    <div className="text-white p-8">
      <div className="w-full lg:max-w-[870px] mx-auto mt-8">
        {/* Windows-style Frame */}
        <div className="relative w-full shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] border-2 border-white/35  p-2 rounded-lg bg-[#2D2D2D] overflow-hidden">
          {/* Windows Top Bar */}
          <div className="h-9 bg-[#3C3C3C] flex justify-between items-center px-4 rounded-t-md">
            <div className="text-sm text-gray-300">Portfolio</div>
            <div className="flex gap-4">
              <Minus className="w-4 h-4 text-gray-300 cursor-pointer bg-yellow-500 rounded-xl p-1 font-bold" />
              <Square className="w-4 h-4 text-gray-300 cursor-pointer bg-green-600 rounded-xl p-1 font-bold" />
              <X className="w-4 h-4 text-gray-300 cursor-pointer bg-red-600 rounded-xl p-1 font-bold" />
            </div>
          </div>

          {/* Content Area */}
          <div className="w-full bg-[#1C1C1C] p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-[950px] mx-auto pt-24"
            >
              <h1 className="text-3xl glow glow-icon md:text-4xl lg:text-6xl leading-tight mb-8 font-semibold">
              I design digital experiences,
                <br />
                build seamless interactions <span className="italic">and craft compelling stories</span>.
              </h1>
              
              <div className="space-y-2 font-bold">
                <p className="text-xl text-white/90">
                  Web Developer
                </p>
                <p className="text-xl text-white/60">
                  Freelancer
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}