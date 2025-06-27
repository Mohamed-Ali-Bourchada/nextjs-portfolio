"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

export default function HeroBackground() {
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    if (typeof window !== 'undefined') {
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }
  }, []);
  
  // Generate particle data only on client side - reduced for mobile
  const particles = useMemo(() => {
    if (typeof window === 'undefined') return [];
    
    // Reduce particle count on mobile
    const count = isMobile ? 10 : 25;
    
    return Array.from({ length: count }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      opacity: Math.random() * 0.5 + 0.3,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5
    }));
  }, [isMobile]);
  
  // Generate grid points for tech grid effect - reduced for mobile
  const gridPoints = useMemo(() => {
    if (typeof window === 'undefined') return [];
    
    // Reduce grid points on mobile
    const count = isMobile ? 12 : 30;
    
    return Array.from({ length: count }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      pulseDelay: Math.random() * 5
    }));
  }, [isMobile]);
  
  // Generate floating shapes - reduced for mobile
  const floatingShapes = useMemo(() => {
    if (typeof window === 'undefined') return [];
    
    // Reduce shapes on mobile
    const count = isMobile ? 3 : 6;
    
    return Array.from({ length: count }, (_, i) => ({
      x: 15 + (i * 15) % 90,
      y: 10 + (i * 20) % 80,
      size: Math.random() * (isMobile ? 60 : 80) + (isMobile ? 30 : 40),
      opacity: Math.random() * 0.2 + 0.1,
      duration: Math.random() * 25 + 15,
      delay: i * 2,
      shape: ['circle', 'square', 'hexagon'][Math.floor(Math.random() * 3)]
    }));
  }, [isMobile]);
  
  // Set isClient to true after component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Use simpler background for mobile
  if (isMobile) {
    return (
      <div className="absolute inset-0 pointer-events-none">
        {/* Base gradient - simplified for mobile */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#090a10] via-[#0c0e18] to-[#0f1119]" />
        
        {isClient && (
          <>
            {/* Main gradient orbs - simplified for mobile */}
            <div className="absolute -top-[10%] -left-[10%] w-[40rem] h-[40rem] rounded-full bg-gradient-to-r from-blue-600/5 to-indigo-600/5 blur-[120px]" />
            
            <div className="absolute -bottom-[20%] -right-[10%] w-[35rem] h-[35rem] rounded-full bg-gradient-to-r from-violet-600/5 to-cyan-600/5 blur-[140px]" />

            {/* Accent gradient */}
            <div className="absolute top-[30%] right-[5%] w-[20rem] h-[20rem] rounded-full bg-gradient-to-r from-cyan-500/5 to-emerald-500/5 blur-[100px]" />
            
            {/* Minimal particles for mobile */}
            {particles.map((particle, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute rounded-full bg-blue-400"
                style={{
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                  left: `${particle.x}%`,
                  top: `${particle.y}%`,
                  opacity: particle.opacity,
                }}
                animate={{ 
                  opacity: [particle.opacity, particle.opacity * 0.5, particle.opacity]
                }}
                transition={{ 
                  duration: particle.duration / 2, // Faster animations on mobile
                  delay: particle.delay,
                  repeat: Infinity,
                  repeatType: "mirror"
                }}
              />
            ))}
          </>
        )}
      </div>
    );
  }

  // Full version for desktop
  return (
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
  );
} 