"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Hero() {
  const [displayName, setDisplayName] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const fullName = "Mohamed Ali Bourchada";
  const [isClient, setIsClient] = useState(false);
  
  // Set isClient to true after component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // Cursor blinking effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);
  
  // Name typing animation
  useEffect(() => {
    if (displayName.length < fullName.length) {
      const timeout = setTimeout(() => {
        setDisplayName(fullName.substring(0, displayName.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [displayName, fullName]);

  return (
    <section className="min-h-screen relative flex items-center overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c] to-[#0f1119]" />
        
        {isClient && (
          <>
            <motion.div 
              className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-[120px]"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
            
            <motion.div 
              className="absolute bottom-1/4 right-1/4 w-[25rem] h-[25rem] rounded-full bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 blur-[100px]"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ 
                duration: 10, 
                delay: 1,
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
          </>
        )}
        
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      </div>
      
      <div className="section-container relative z-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Content Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isClient ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isClient ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-blue-900/40 to-indigo-900/40 text-blue-300 border border-blue-800/50 shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-blue-400 mr-2 animate-pulse"></span>
                Available for new projects
              </motion.div>
              
              <div className="space-y-4">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isClient ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-blue-400 font-medium text-lg"
                >
                  Hello, I&apos;m
                </motion.p>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={isClient ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
                >
                  <div className="flex items-center whitespace-nowrap">
                    <span className="whitespace-nowrap">{isClient ? displayName : fullName}</span>
                    {isClient && (
                      <span className={`w-[3px] h-8 bg-blue-400 ml-1 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}></span>
                    )}
                  </div>
                </motion.h1>
                
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  animate={isClient ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="text-xl md:text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400"
                >
                  Web & Mobile Developer
                </motion.h2>
              </div>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={isClient ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-gray-300 text-base max-w-lg leading-relaxed"
              >
                I create modern digital experiences with clean code and exceptional user interfaces. Specializing in full-stack development with a focus on performance and scalability.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isClient ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex flex-wrap gap-5 pt-2"
              >
                <motion.a 
                  href="#projects" 
                  className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium text-sm shadow-lg shadow-blue-900/20 flex items-center gap-2"
                  whileHover={isClient ? { scale: 1.03, boxShadow: "0 8px 25px rgba(30, 64, 175, 0.35)" } : undefined}
                  whileTap={isClient ? { scale: 0.98 } : undefined}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  View Projects
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </motion.a>
                
                <motion.a 
                  href="#contact" 
                  className="px-6 py-2.5 rounded-lg bg-gray-800/70 text-white font-medium text-sm border border-gray-700/70 shadow-md backdrop-blur-sm"
                  whileHover={isClient ? { scale: 1.03, backgroundColor: "rgba(31, 41, 55, 0.8)" } : undefined}
                  whileTap={isClient ? { scale: 0.98 } : undefined}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Contact Me
                </motion.a>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isClient ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex items-center gap-6 pt-4"
              >
                <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Connect</span>
                <div className="flex gap-3">
                  <motion.a 
                    href="https://github.com/Mohamed-Ali-Bourchada" target="_blank"
                    className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-800/60 border border-gray-700/60 backdrop-blur-sm"
                    whileHover={isClient ? { y: -3, borderColor: "#3b82f6", boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)" } : undefined}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <FaGithub className="w-4 h-4 text-gray-300" />
                  </motion.a>
                  <motion.a 
                    href="https://www.linkedin.com/in/mohamed-ali-bourchada/" target="_blank"
                    className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-800/60 border border-gray-700/60 backdrop-blur-sm"
                    whileHover={isClient ? { y: -3, borderColor: "#3b82f6", boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)" } : undefined}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <FaLinkedinIn className="w-4 h-4 text-gray-300" />
                  </motion.a>
                  <motion.a 
                    href="https://twitter.com/ma_bourchada" target="_blank"
                    className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-800/60 border border-gray-700/60 backdrop-blur-sm"
                    whileHover={isClient ? { y: -3, borderColor: "#3b82f6", boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)" } : undefined}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <FaTwitter className="w-4 h-4 text-gray-300" />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Visual Column - Abstract Shapes */}
          <div className="relative">
            {isClient ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative h-[500px] w-full"
              >
                {/* Abstract geometric shapes */}
                <motion.div 
                  className="absolute top-[20%] right-[10%] w-64 h-64"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-sm border border-blue-500/20" />
                  <motion.div 
                    className="absolute inset-0 rounded-full"
                    animate={{ 
                      boxShadow: [
                        "0 0 20px 5px rgba(59, 130, 246, 0.3)", 
                        "0 0 30px 8px rgba(59, 130, 246, 0.4)", 
                        "0 0 20px 5px rgba(59, 130, 246, 0.3)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </motion.div>
                
                <motion.div 
                  className="absolute top-[50%] left-[15%] w-40 h-40"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.7 }}
                >
                  <div className="absolute inset-0 rounded-lg rotate-45 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 backdrop-blur-sm border border-purple-500/20" />
                  <motion.div 
                    className="absolute inset-0 rounded-lg rotate-45"
                    animate={{ 
                      boxShadow: [
                        "0 0 20px 5px rgba(168, 85, 247, 0.2)", 
                        "0 0 30px 8px rgba(168, 85, 247, 0.3)", 
                        "0 0 20px 5px rgba(168, 85, 247, 0.2)"
                      ]
                    }}
                    transition={{ duration: 4, delay: 1, repeat: Infinity }}
                  />
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-[15%] right-[25%] w-52 h-52"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.9 }}
                >
                  <div className="absolute inset-0 rounded-lg rotate-12 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-500/20" />
                  <motion.div 
                    className="absolute inset-0 rounded-lg rotate-12"
                    animate={{ 
                      boxShadow: [
                        "0 0 20px 5px rgba(6, 182, 212, 0.2)", 
                        "0 0 30px 8px rgba(6, 182, 212, 0.3)", 
                        "0 0 20px 5px rgba(6, 182, 212, 0.2)"
                      ]
                    }}
                    transition={{ duration: 3.5, delay: 0.5, repeat: Infinity }}
                  />
                </motion.div>
                
                {/* Connecting lines */}
                <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
                  <motion.path 
                    d="M320,128 L180,240 L320,380" 
                    stroke="url(#lineGradient)" 
                    strokeWidth="1" 
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.3 }}
                    transition={{ duration: 1.5, delay: 1.2 }}
                  />
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.4" />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* Floating particles */}
                {Array.from({ length: 15 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full bg-blue-400"
                    initial={{ 
                      x: `${Math.random() * 100}%`, 
                      y: `${Math.random() * 100}%`,
                      opacity: Math.random() * 0.5 + 0.3,
                      scale: Math.random() * 0.6 + 0.2
                    }}
                    animate={{ 
                      x: `${Math.random() * 100}%`, 
                      y: `${Math.random() * 100}%` 
                    }}
                    transition={{ 
                      duration: Math.random() * 20 + 10,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                    style={{
                      width: `${Math.random() * 5 + 2}px`,
                      height: `${Math.random() * 5 + 2}px`,
                    }}
                  />
                ))}
              </motion.div>
            ) : (
              // Static fallback for server-side rendering
              <div className="relative h-[500px] w-full">
                <div className="absolute top-[20%] right-[10%] w-64 h-64 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20" />
                <div className="absolute top-[50%] left-[15%] w-40 h-40 rounded-lg rotate-45 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/20" />
                <div className="absolute bottom-[15%] right-[25%] w-52 h-52 rounded-lg rotate-12 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
} 