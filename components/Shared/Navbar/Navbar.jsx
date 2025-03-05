"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from "@/public/logo.svg"
import us from "@/public/uzr.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
	<div>
    <nav className="bg-gradient-to-b from-black to-transparent w-full z-50">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="relative">
                <Image 
                  src={logo}
                  
				  className='lg:w-32 md:w-[122px] w-[96px] lg:p-2 md:p-3'
                  priority
                />
              </div>
            </Link>
          </div>
   
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link href="/About" className="text-white  font-bold hover:text-red-500 px-3 py-2 text-sm transition-colors">
                About
              </Link>
              <Link href="/prize" className="text-white hover:text-red-500 px-3 py-2 text-sm font-bold transition-colors">
                Prize
              </Link>
              <Link href="/timeline" className="text-white hover:text-red-500 px-3 py-2 text-sm font-bold transition-colors">
                Timeline
              </Link>
              <Link href="/sponsors" className="text-white hover:text-red-500 px-3 py-2 text-sm font-bold transition-colors">
                Our Sponsors
              </Link>
              <Link href="/contact" className="text-white hover:text-red-500 px-3 py-2 text-sm font-bold transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center">
            <div className="relative w-8 h-8">
              <Image 
                src="/placeholder-user.png" 
                alt="User" 
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="bg-black inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-black`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/about" className="text-white hover:text-red-500 block px-3 py-2 text-base font-medium">
            About
          </Link>
          <Link href="/prize" className="text-white hover:text-red-500 block px-3 py-2 text-base font-medium">
            Prize
          </Link>
          <Link href="/timeline" className="text-white hover:text-red-500 block px-3 py-2 text-base font-medium">
            Timeline
          </Link>
          <Link href="/sponsors" className="text-white hover:text-red-500 block px-3 py-2 text-base font-medium">
            Our Sponsors
          </Link>
          <Link href="/contact" className="text-white hover:text-red-500 block px-3 py-2 text-base font-medium">
            Contact Us
          </Link>
          
          <div className="flex items-center px-3 py-2">
            <div className="relative w-8 h-8 mr-3">
              <Image 
                src={us} 
                alt="User" 
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <span className="text-white text-base font-medium">User</span>
          </div>
        </div>
      </div>
    </nav>
	</div>
  );
};

export default Navbar;