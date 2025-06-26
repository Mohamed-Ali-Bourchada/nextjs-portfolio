"use client";

import { motion } from "framer-motion";
import { FiDownload, FiArrowRight, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/components/layout/ThemeProvider";

// Dynamic image URLs
const profileImageUrl = "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=400&auto=format&fit=crop";
const techIcons = [
  { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "TypeScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
];

export default function Hero() {
  const { theme } = useTheme();
  
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden"
    >
      {/* Modern background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent/10 rounded-full blur-[100px]" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.03]" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 md:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary dark:text-primary-light mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              Available for work
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="block mb-2">Full-Stack Web &</span>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Mobile Developer
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
              Experienced in building scalable web and mobile applications with modern technologies.
              Turning ideas into elegant, functional solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Resume download would be available in a real portfolio");
                }}
                className="btn-primary inline-flex items-center justify-center"
              >
                <FiDownload className="mr-2" />
                Download CV
              </a>
              
              <Link
                href="#projects"
                className="btn-secondary inline-flex items-center justify-center"
              >
                View Projects
                <FiArrowRight className="ml-2" />
              </Link>
            </div>
            
            {/* Tech stack */}
            <div className="mb-8">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Tech Stack</p>
              <div className="flex gap-4">
                {techIcons.map((icon) => (
                  <div 
                    key={icon.name}
                    className="w-10 h-10 rounded-lg glass flex items-center justify-center p-1.5"
                    title={icon.name}
                  >
                    <Image 
                      src={icon.url} 
                      alt={icon.name} 
                      width={30} 
                      height={30}
                      className={`${theme === 'dark' ? 'filter invert' : ''}`}
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Social links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500 dark:text-gray-400">Connect with me:</span>
              <div className="flex gap-3">
                <a href="#" className="p-2 rounded-full glass hover:bg-gray-200/10 dark:hover:bg-gray-700/30 transition-all hover:scale-110">
                  <FiGithub className="h-5 w-5" />
                </a>
                <a href="#" className="p-2 rounded-full glass hover:bg-gray-200/10 dark:hover:bg-gray-700/30 transition-all hover:scale-110">
                  <FiLinkedin className="h-5 w-5" />
                </a>
                <a href="#" className="p-2 rounded-full glass hover:bg-gray-200/10 dark:hover:bg-gray-700/30 transition-all hover:scale-110">
                  <FiTwitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Hero image/illustration */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 rounded-3xl glass border border-gray-200/10 dark:border-gray-800/30 overflow-hidden flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src={profileImageUrl}
                    alt="Developer Profile"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex flex-col justify-end p-6 text-white">
                    <h3 className="text-xl font-semibold mb-1">Your Name</h3>
                    <p className="text-sm text-gray-200">Full-Stack Developer</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-xl rotate-12 bg-primary/20 dark:bg-primary/10 backdrop-blur-lg"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-accent/20 dark:bg-accent/10 backdrop-blur-lg"></div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll down</span>
          <div className="w-6 h-10 border-2 border-gray-300/50 dark:border-gray-700/50 rounded-full flex justify-center">
            <motion.div
              animate={{ 
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="w-1.5 h-1.5 bg-primary dark:bg-primary-light rounded-full mt-2"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
} 