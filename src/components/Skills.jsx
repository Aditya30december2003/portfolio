'use client';

import React from 'react';
import { motion } from "framer-motion";
import { GoDotFill } from "react-icons/go";
import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiNextdotjs, SiMongodb, SiCplusplus, SiAppwrite, SiPrisma } from "react-icons/si";
import { TbBrandGithub } from "react-icons/tb";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500" },
    { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-500" },
    { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-500" },
    { name: "React", icon: <FaReact />, color: "text-cyan-500" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "text-black" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-teal-500" },
    { name: "MongoDB", icon: <SiMongodb />, color: "text-green-700" },
    { name: "C++", icon: <SiCplusplus />, color: "text-blue-600" },
    { name: "GitHub", icon: <TbBrandGithub />, color: "text-gray-800" },
    { name: "Prisma", icon: <SiPrisma />, color: "text-indigo-500" },
    { name: "Appwrite", icon: <SiAppwrite />, color: "text-pink-500" },
    { name: "Git", icon: <FaGitAlt />, color: "text-orange-700" },
  ];

  return (
    <div className="p-10 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className=""
      >
        <div className="flex items-center gap-2">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
           <GoDotFill className="text-white text-xl glow glow-icon" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[0.85rem] font-semibold tracking-wider"
          >
            SKILLS
          </motion.h1>
        </div>
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-[2.5rem] w-[90%] font-bold mb-6 bg-gradient-to-r from-gray-500 to-gray-500 bg-clip-text text-transparent"
        >
          MY <span className='italic text-white title'>Tech Stack</span>
        </motion.h2>
      </motion.div>

      <motion.div 
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut"
            }}
            whileHover={{ y: -5 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "tween", duration: 0.2 }}
              className="flex flex-col items-center p-6 bg-white  bg-opacity-25 backdrop-blur-lg rounded-xl
                         border border-transparent hover:border-gray-500/20 shadow-lg"
            >
              <motion.div
                whileHover={{ rotate: 20, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className={`text-4xl mb-3 ${skill.color}`}
              >
                {skill.icon}
              </motion.div>
              <p className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
                {skill.name}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;