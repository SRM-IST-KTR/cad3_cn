// components/Footer.js
"use client";
import Link from 'next/link';
import Image from 'next/image';
import bg from "@/public/footer_bg.png"
import cad from "@/public/cad.png"

const Footer = () => {
  return (
    <footer className="relative w-full">
      
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-black opacity-80">
         <Image
		 src={bg}
		 className='w-full'
		 />
        </div>   
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        
        <div className="flex flex-wrap justify-center text-white text-lg sm:text-xl font-bold tracking-wider space-x-4 sm:space-x-8 md:space-x-12 mb-8">
          <Link href="/about" className="hover:text-red-500 transition-colors duration-300 py-2">
            ABOUT
          </Link>
          <Link href="/timeline" className="hover:text-red-500 transition-colors duration-300 py-2">
            TIMELINE
          </Link>
          <Link href="/prize-pool" className="hover:text-red-500 transition-colors duration-300 py-2">
            PRIZE POOL
          </Link>
          <Link href="/sponsors" className="hover:text-red-500 transition-colors duration-300 py-2">
            OUR SPONSORS
          </Link>
          <Link href="/past-events" className="hover:text-red-500 transition-colors duration-300 py-2">
            PAST EVENTS
          </Link>
        </div>

        {/* CAD 3.0 Logo Area */}
        <div className="flex justify-center mb-8">
          
            <Image
			src={cad}
			className='absolute w-[500px]'/>
          
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          {/* LinkedIn */}
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="relative h-8 w-8 sm:h-10 sm:w-10">
            <div className="h-full w-full bg-white rounded-full flex items-center justify-center">
              {/* Replace with your LinkedIn icon */}
              <span className="text-gray-800 text-xs">LI</span>
            </div>
          </Link>
          
          {/* Twitter */}
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="relative h-8 w-8 sm:h-10 sm:w-10">
            <div className="h-full w-full bg-white rounded-full flex items-center justify-center">
              {/* Replace with your Twitter icon */}
              <span className="text-gray-800 text-xs">TW</span>
            </div>
          </Link>
          
          {/* Instagram */}
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="relative h-8 w-8 sm:h-10 sm:w-10">
            <div className="h-full w-full bg-white rounded-full flex items-center justify-center">
              {/* Replace with your Instagram icon */}
              <span className="text-gray-800 text-xs">IG</span>
            </div>
          </Link>
          
          {/* Discord */}
          <Link href="https://discord.com" target="_blank" rel="noopener noreferrer" className="relative h-8 w-8 sm:h-10 sm:w-10">
            <div className="h-full w-full bg-white rounded-full flex items-center justify-center">
              {/* Replace with your Discord icon */}
              <span className="text-gray-800 text-xs">DC</span>
            </div>
          </Link>
        </div>

        {/* Register Button */}
        <div className="flex justify-end">
          <Link href="/register" className="bg-white text-black px-6 py-2 rounded-md font-medium hover:bg-gray-200 transition-colors">
            Register
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;