"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { useEffect, useState, useMemo } from "react";

export default function Hero() {
  const [displayName, setDisplayName] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const fullName = "Mohamed Ali Bourchada";
  const [isClient, setIsClient] = useState(false);
  
  // Generate particle data only on client side
  const particles = useMemo(() => {
    if (typeof window === 'undefined') return [];
    
    return Array.from({ length: 25 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      opacity: Math.random() * 0.5 + 0.3,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5
    }));
  }, []);

  // Generate grid points for tech grid effect
  const gridPoints = useMemo(() => {
    if (typeof window === 'undefined') return [];
    
    return Array.from({ length: 30 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      pulseDelay: Math.random() * 5
    }));
  }, []);
  
  // Generate floating shapes
  const floatingShapes = useMemo(() => {
    if (typeof window === 'undefined') return [];
    
    return Array.from({ length: 6 }, (_, i) => ({
      x: 15 + (i * 15) % 90,
      y: 10 + (i * 20) % 80,
      size: Math.random() * 80 + 40,
      opacity: Math.random() * 0.2 + 0.1,
      duration: Math.random() * 25 + 15,
      delay: i * 2,
      shape: ['circle', 'square', 'hexagon'][Math.floor(Math.random() * 3)]
    }));
  }, []);
  
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
    <section className="min-h-screen relative flex items-center overflow-hidden py-10 md:py-0">
      {/* Enhanced background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#090a10] via-[#0c0e18] to-[#0f1119]" />
        
        {isClient && (
          <>
            {/* Main gradient orbs */}
            <motion.div 
              className="absolute -top-[10%] -left-[10%] w-[40rem] h-[40rem] rounded-full bg-gradient-to-r from-blue-600/5 to-indigo-600/5 blur-[120px]"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ 
                duration: 15, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
            
            <motion.div 
              className="absolute -bottom-[20%] -right-[10%] w-[35rem] h-[35rem] rounded-full bg-gradient-to-r from-violet-600/5 to-cyan-600/5 blur-[140px]"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ 
                duration: 18, 
                delay: 2,
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />

            {/* Accent gradient */}
            <motion.div 
              className="absolute top-[30%] right-[5%] w-[20rem] h-[20rem] rounded-full bg-gradient-to-r from-cyan-500/5 to-emerald-500/5 blur-[100px]"
              animate={{ 
                scale: [1, 1.15, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{ 
                duration: 12, 
                delay: 1,
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
            
            {/* Floating holographic shapes */}
            {floatingShapes.map((shape, i) => (
              <motion.div
                key={`shape-${i}`}
                className={`absolute rounded-${shape.shape === 'circle' ? 'full' : (shape.shape === 'square' ? 'md' : 'xl')} border border-blue-500/10 bg-gradient-to-r ${
                  i % 3 === 0 ? 'from-blue-600/5 to-indigo-600/5' : 
                  i % 3 === 1 ? 'from-violet-600/5 to-purple-600/5' : 
                  'from-cyan-600/5 to-teal-600/5'
                } backdrop-blur-3xl`}
                style={{
                  width: `${shape.size}px`,
                  height: `${shape.size}px`,
                  left: `${shape.x}%`,
                  top: `${shape.y}%`,
                  opacity: shape.opacity,
                }}
                animate={{ 
                  x: [0, 10, -10, 0],
                  y: [0, -15, 5, 0],
                  rotate: [0, 5, -5, 0],
                  opacity: [shape.opacity, shape.opacity * 1.5, shape.opacity],
                }}
                transition={{ 
                  duration: shape.duration,
                  delay: shape.delay,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              />
            ))}
            
            {/* Tech grid points */}
            {gridPoints.map((point, i) => (
              <motion.div
                key={`grid-${i}`}
                className="absolute rounded-full bg-blue-400"
                style={{
                  width: `${point.size}px`,
                  height: `${point.size}px`,
                  left: `${point.x}%`,
                  top: `${point.y}%`,
                }}
                animate={{ 
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{ 
                  duration: 4,
                  delay: point.pulseDelay,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            ))}
            
            {/* Digital particles */}
            {particles.map((particle, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute rounded-full bg-gradient-to-r from-blue-400 to-indigo-400"
                initial={{ 
                  x: `${particle.x}%`, 
                  y: `${particle.y}%`,
                  opacity: particle.opacity,
                }}
                animate={{ 
                  x: `${(particle.x + 30) % 100}%`, 
                  y: `${(particle.y + 30) % 100}%`,
                  opacity: [particle.opacity, particle.opacity * 0.5, particle.opacity]
                }}
                transition={{ 
                  duration: particle.duration,
                  delay: particle.delay,
                  repeat: Infinity,
                  repeatType: "mirror"
                }}
                style={{
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                }}
              />
            ))}
            
            {/* Soft glowing lines */}
            <svg className="absolute inset-0 w-full h-full opacity-30" style={{ zIndex: 0 }}>
              <motion.path 
                d="M0,100 Q150,50 300,150 T600,100" 
                stroke="url(#lineGradient1)" 
                strokeWidth="1" 
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.4 }}
                transition={{ duration: 3, delay: 1 }}
              />
              <motion.path 
                d="M100,0 Q200,150 100,300 T200,500" 
                stroke="url(#lineGradient2)" 
                strokeWidth="1" 
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                transition={{ duration: 3.5, delay: 1.5 }}
              />
              <motion.path 
                d="M300,0 Q400,200 300,400 T500,500" 
                stroke="url(#lineGradient3)" 
                strokeWidth="1" 
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.2 }}
                transition={{ duration: 4, delay: 2 }}
              />
              <defs>
                <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="lineGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#ec4899" stopOpacity="0.3" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Futuristic UI panel */}
            <motion.div
              className="absolute bottom-[10%] left-[5%] w-[150px] h-[80px] rounded-lg border border-blue-500/20 bg-gradient-to-r from-blue-900/10 to-indigo-900/10 backdrop-blur-sm overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.7, y: 0 }}
              transition={{ duration: 1, delay: 2.5 }}
            >
              <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-indigo-500 opacity-70"></div>
              <div className="p-2">
                <div className="flex justify-between items-center mb-2">
                  <div className="w-10 h-1 bg-blue-500/50 rounded"></div>
                  <div className="w-3 h-3 rounded-full bg-blue-400/50"></div>
                </div>
                <div className="space-y-1.5">
                  <div className="w-full h-1 bg-blue-500/30 rounded"></div>
                  <div className="w-2/3 h-1 bg-blue-500/30 rounded"></div>
                  <div className="w-1/2 h-1 bg-blue-500/30 rounded"></div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="absolute top-[15%] right-[10%] w-[120px] h-[120px] rounded-lg border border-indigo-500/20 bg-gradient-to-r from-indigo-900/10 to-violet-900/10 backdrop-blur-sm overflow-hidden"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 0.7, y: 0 }}
              transition={{ duration: 1, delay: 2.8 }}
            >
              <div className="h-1 w-full bg-gradient-to-r from-indigo-500 to-violet-500 opacity-70"></div>
              <div className="p-3">
                <div className="flex justify-between items-center mb-3">
                  <div className="w-8 h-8 rounded-full border border-indigo-500/30"></div>
                  <div className="space-y-1">
                    <div className="w-6 h-1 bg-indigo-500/30 rounded"></div>
                    <div className="w-4 h-1 bg-indigo-500/30 rounded"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="w-full h-1 bg-indigo-500/30 rounded"></div>
                  <div className="w-4/5 h-1 bg-indigo-500/30 rounded"></div>
                  <div className="w-3/5 h-1 bg-indigo-500/30 rounded"></div>
                </div>
              </div>
            </motion.div>
          </>
        )}
        
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
        
        {/* Subtle vignette effect */}
        <div className="absolute inset-0 bg-radial-gradient opacity-70"></div>
      </div>
      
      <div className="section-container relative z-10 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content Column */}
          <div className="order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isClient ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 md:space-y-8"
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
              
              <div className="space-y-3 md:space-y-4">
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
                  <div className="flex items-center">
                    <span className="break-words md:whitespace-nowrap">{isClient ? displayName : fullName}</span>
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
                className="flex flex-wrap gap-4 pt-2"
              >
                <motion.a 
                  href="#projects" 
                  className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium text-sm shadow-lg shadow-blue-900/20 flex items-center gap-2"
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
                  className="px-5 py-2.5 rounded-lg bg-gray-800/70 text-white font-medium text-sm border border-gray-700/70 shadow-md backdrop-blur-sm"
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
                className="flex items-center gap-4 md:gap-6 pt-2 md:pt-4"
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
          
          {/* Visual Column - Modern Web Developer Illustration */}
          <div className="relative order-1 md:order-2 flex justify-center md:justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full h-[300px] md:h-[500px]"
            >
              <div className="w-full h-full rounded-xl overflow-hidden bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/30 shadow-xl relative">
                {/* Abstract Developer Visual */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isClient ? { opacity: 1, scale: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="relative w-[280px] md:w-[400px] h-[240px] md:h-[280px]"
                  >
                    {/* Abstract 3D Geometric Elements */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* Central Sphere */}
                      <motion.div
                        className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-blue-500/30 to-indigo-500/30 border border-blue-400/30 shadow-lg shadow-blue-500/20 flex items-center justify-center"
                        animate={{ 
                          rotate: 360,
                          boxShadow: ["0 0 15px rgba(59, 130, 246, 0.3)", "0 0 25px rgba(59, 130, 246, 0.5)", "0 0 15px rgba(59, 130, 246, 0.3)"]
                        }}
                        transition={{ 
                          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                          boxShadow: { duration: 3, repeat: Infinity, repeatType: "reverse" }
                        }}
                      >
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border border-blue-500/30" />
                      </motion.div>
                      
                      {/* Orbiting Elements */}
                      <motion.div
                        className="absolute w-full h-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                      >
                        <motion.div
                          className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-500/30 to-blue-500/30 border border-cyan-400/30"
                          animate={{ rotate: -360 }}
                          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        />
                      </motion.div>
                      
                      <motion.div
                        className="absolute w-full h-full"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                      >
                        <motion.div
                          className="absolute bottom-0 right-0 w-12 h-12 rounded-full bg-gradient-to-r from-purple-500/30 to-indigo-500/30 border border-purple-400/30"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        />
                      </motion.div>
                      
                      <motion.div
                        className="absolute w-full h-full"
                        animate={{ rotate: 180 }}
                        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                      >
                        <motion.div
                          className="absolute bottom-1/4 left-0 w-8 h-8 rounded-md bg-gradient-to-r from-indigo-500/30 to-violet-500/30 border border-indigo-400/30 rotate-45"
                          animate={{ rotate: -180 }}
                          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                        />
                      </motion.div>
                    </div>
                    
                    {/* Connecting Lines */}
                    <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
                      <motion.circle 
                        cx="50%" 
                        cy="50%" 
                        r="35%" 
                        stroke="url(#orbitGradient1)" 
                        strokeWidth="1" 
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.5 }}
                        transition={{ duration: 2, delay: 1 }}
                      />
                      <motion.circle 
                        cx="50%" 
                        cy="50%" 
                        r="45%" 
                        stroke="url(#orbitGradient2)" 
                        strokeWidth="1" 
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.4 }}
                        transition={{ duration: 2.5, delay: 1.2 }}
                      />
                      <motion.circle 
                        cx="50%" 
                        cy="50%" 
                        r="55%" 
                        stroke="url(#orbitGradient3)" 
                        strokeWidth="1" 
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.3 }}
                        transition={{ duration: 3, delay: 1.4 }}
                      />
                      <defs>
                        <linearGradient id="orbitGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.4" />
                        </linearGradient>
                        <linearGradient id="orbitGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.4" />
                        </linearGradient>
                        <linearGradient id="orbitGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#ec4899" stopOpacity="0.4" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </motion.div>
                </div>
                
                {/* Tech Icons */}
                {isClient && (
                  <>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.7, delay: 0.7 }}
                      className="absolute top-[15%] right-[10%] md:right-[15%] w-[80px] md:w-[100px] h-[80px] md:h-[100px] rounded-lg bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-md border border-blue-500/30 flex items-center justify-center shadow-lg"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-10 h-10 text-blue-400">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                      </svg>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.7, delay: 0.9 }}
                      className="absolute bottom-[15%] left-[10%] md:left-[15%] w-[70px] md:w-[90px] h-[70px] md:h-[90px] rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md border border-purple-500/30 flex items-center justify-center shadow-lg"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-9 h-9 text-purple-400">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                      </svg>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.7, delay: 1.1 }}
                      className="absolute bottom-[25%] right-[15%] md:right-[20%] w-[60px] md:w-[80px] h-[60px] md:h-[80px] rounded-lg rotate-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-md border border-cyan-500/30 flex items-center justify-center shadow-lg"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8 text-cyan-400">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                      </svg>
                    </motion.div>
                    
                    {/* New tech icons */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.7, delay: 1.3 }}
                      className="absolute top-[35%] left-[20%] w-[50px] md:w-[70px] h-[50px] md:h-[70px] rounded-md rotate-6 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-md border border-orange-500/30 flex items-center justify-center shadow-lg"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-7 h-7 text-orange-400">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm0 0v-9m0 0l-4.5 4.5M12 12l4.5 4.5" />
                      </svg>
                    </motion.div>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 