'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname , useRouter} from 'next/navigation';

const Navbar = () => {
  const route = useRouter();
  const pathname = usePathname();
  const [showSubNav, setShowSubNav] = useState(pathname === '/');

  const isActive = (path) => pathname === path;

  return (
    <div className="hidden lg:block">
      <nav className={`inline-flex shadow-[0px_1px_1px_rgba(221,_221,_221,_1),_0_1px_20px_rgba(204,_204,_204,_1)] 
                    rounded-[4rem] bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm 
                    bg-opacity-30 border border-gray-100 transition-all duration-300 ease-in-out`}>
        <div className="flex items-center p-1">
          {/* Main Navigation */}
          <div
            className={`cursor-pointer rounded-[4rem] px-6 py-2 transition-colors duration-200
                     ${isActive('/') ? 'bg-gray-600/70' : 'hover:bg-white hover:bg-opacity-10'}`}
            onClick={() => {
              route.push('/')
              setShowSubNav(true)
            }}
          >
            Home
          </div>
          <Link
            href="/portfolio"
            className={`cursor-pointer px-6 py-2 transition-colors duration-200 rounded-[4rem]
                     ${isActive('/portfolio') ? 'bg-gray-600/70' : 'hover:bg-white hover:bg-opacity-10'}`}
            onClick={() => setShowSubNav(false)}
          >
            Portfolio
          </Link>

          {/* Sub Navigation */}
          <div className={`flex items-center overflow-hidden transition-all duration-300 ease-in-out
                        ${showSubNav ? 'max-w-[300px] opacity-100' : 'max-w-0 opacity-0'}`}>
            <div className="h-4 w-px bg-gray-400 mx-2" /> {/* Divider */}
            <ul className="flex whitespace-nowrap pr-6">
              <li className="px-3">
                <a href="#about" className="hover:text-gray-300 text-[0.8rem] transition-colors duration-200">
                  About
                </a>
              </li>
              <li className="px-3">
                <a href="#contact" className="hover:text-gray-300 text-[0.8rem] transition-colors duration-200">
                  Contact
                </a>
              </li>
              <li className="px-3">
                <a href="#skills" className="hover:text-gray-300 text-[0.8rem] transition-colors duration-200">
                  Skills
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;