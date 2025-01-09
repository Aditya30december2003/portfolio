'use client'

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : 'unset';
  };

  // Main navigation items
  const mainNavItems = [
    { label: 'Home', href: '/' },
    { label: 'Portfolio', href: '/portfolio' }
  ];

  // Sub navigation items that appear on home page
  const subNavItems = [
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
    { label: 'Skills', href: '#skills' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between px-2 lg:px-10 py-2 lg:py-5 w-full bg-black/95 lg:bg-transparent">
        <div className="w-[50%] lg:w-[15%]">
          <h1 className="text-[1.3rem] lg:text-[1.5rem] font-bold">Aditya Jain</h1>
          <h1 className="text-[1rem] lg:text-[0.8rem]">Web Developer</h1>
        </div>

        <Navbar className="w-[70%]" />

        <div className="w-[13%] p-2 text-[1rem] font-semibold lg:flex justify-between hidden">
          <button onClick={()=>window.open('/Aditya Jain_CV_Resume_NEW_Online.pdf' , '_blank')} className="hover:opacity-80 transition-opacity">
          Resume
          </button>
          <Link href='https://www.fiverr.com/aditya30122003?public_mode=true' target='_blank' className="hover:opacity-80 transition-opacity">Hire Me</Link>
        </div>

        <button 
          onClick={toggleMenu} 
          className="block lg:hidden z-50"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={40} /> : <Menu size={40} />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden
                   ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={toggleMenu}
      />

      {/* Mobile Navigation Menu */}
      <div 
        className={`fixed top-0 left-0 h-screen w-[100%] max-w-sm backdrop-blur-sm 
                   transform transition-transform duration-300 ease-in-out lg:hidden
                   ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        style={{ top: '64px' }}
      >
        <nav className="flex flex-col px-6 pt-8">
          {/* Main Nav Items */}
          <div className="space-y-8 border-b border-gray-800 pb-8">
            {mainNavItems.map((item) => (
              <Link 
                key={item.label}
                href={item.href} 
                className={`text-xl font-semibold hover:text-gray-300 transition-colors block
                           ${pathname === item.href ? 'text-white' : 'text-gray-400'}`}
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Sub Nav Items - Only shown when on home page */}
          <div className={`transition-all duration-300 ease-in-out overflow-hidden
                          ${isHome ? 'max-h-[500px] opacity-100 mt-8' : 'max-h-0 opacity-0'}`}>
            <div className="space-y-8">
              {subNavItems.map((item) => (
                <a 
                  key={item.label}
                  href={item.href} 
                  className="text-xl font-semibold hover:text-gray-300 transition-colors block"
                  onClick={toggleMenu}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          
          <div className="pt-8 flex flex-col space-y-4 mt-auto">
            <button onClick={()=>window.open('/Aditya Jain_CV_Resume_NEW_Online.pdf' , '_blank')} className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition-colors">
              Resume
            </button>
            <Link href='https://www.fiverr.com/aditya30122003?public_mode=true' className="px-6 py-2 border border-white text-center rounded-full hover:bg-white hover:text-black transition-colors">
              Hire Me
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;