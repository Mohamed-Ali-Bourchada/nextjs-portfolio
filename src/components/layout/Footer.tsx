"use client";

import Link from "next/link";
import { FiArrowUp} from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
 
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer id="contact" className="pt-10 pb-12 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px]" />
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px]" />
      </div>
      
      <div className="section-container relative z-10">  
      
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12 pt-8 border-t border-gray-200/10 dark:border-gray-800/30">
          <div className="col-span-1">
            <Link
              href="#home"
              className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity"
            >
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Dev</span>
              <span className="font-semibold">Portfolio</span>
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-md">
              Professional web and mobile development services.
              Available for freelance work and collaborations.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">Navigation</h3>
            <ul className="grid grid-cols-2 gap-2">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <Link 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-gray-300">Web Development</li>
              <li className="text-gray-600 dark:text-gray-300">Mobile App Development</li>
              <li className="text-gray-600 dark:text-gray-300">UI/UX Design</li>
              <li className="text-gray-600 dark:text-gray-300">Consulting</li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-gray-200/10 dark:border-gray-800/30">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 md:mb-0">
            © {currentYear} Mohamed Ali Bourchada. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="p-3 rounded-full glass hover:bg-gray-200/10 dark:hover:bg-gray-700/30 transition-all hover:scale-110"
            aria-label="Scroll to top"
          >
            <FiArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
} 