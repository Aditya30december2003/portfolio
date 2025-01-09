'use client';
import { GoDotFill } from "react-icons/go";
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const Experience = () => {
  const experiences = [
    {
      company: "Fiverr",
      role: "Freelance Frontend Developer",
      period: "Ongoing",
      description:
        "Delivered high-quality web projects to diverse clients worldwide, ensuring 100% satisfaction across 10+ projects. Specialized in React.js and modern JavaScript frameworks.",
    },
    {
      company: "Solution Aver InfoTech",
      role: "Frontend Web Developer Intern",
      period: "07/23 - 08/23",
      description:
        "Led development of user-friendly web applications, improving engagement by 20% and mobile experience by 25%. Collaborated with cross-functional teams and managed project deadlines effectively.",
    },
    {
      company: "AVID Web Solutions",
      role: "Frontend Web Developer Intern",
      period: "Summer'23",
      description:
        "Enhanced web development practices, reducing bugs by 25% and improving loading speed by 30%. Led debugging sessions and participated in code reviews.",
    },
  ];

  const lineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const line = lineRef.current;

      if (line) {
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;
        const lineHeight = Math.min((scrollY / windowHeight) * 100, 100);
        line.style.height = `${lineHeight}%`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-red-500 background mt-5">
      <section className="max-w-screen-xl mx-auto px-6">
        <div className="flex items-center space-x-3 mb-4">
          <GoDotFill className="text-white text-xl" />
          <h1 className="text-[0.85rem] font-extrabold text-white">MY EXPERIENCE</h1>
        </div>
        <div className="relative flex items-start space-x-12">
          <div className="w-full space-y-12 flex flex-col gap-10">
            {experiences.map((exp, index) => (
              <div key={index}>
                {/* <div className="absolute left-[-20px] top-[50%] transform -translate-y-1/2 w-4 h-4 rounded-full bg-gray-600"></div> */}
                <div className="flex flex-col md:flex-row w-full">
                  <div className="w-full md:w-[50%] p-2">
                  <h3 className="text-3xl md:text-4xl font-bold text-white md:w-[70%] w-full">{exp.company}</h3>
                  </div>
                  <div className="w-full md:w-[50%] p-2">
                  <p className="text-2xl font-bold text-white">{exp.role}</p>
                  <p className="text-[1.1rem] font-semibold text-gray-500">{exp.period}</p>
                  <p className="text-gray-200 mt-3 font-medium">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
