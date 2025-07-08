"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const isLoadingRef = useRef(true);
  const progressRef = useRef(0);

  useEffect(() => {
    isLoadingRef.current = isLoading;
  }, [isLoading]);

  useEffect(() => {
    progressRef.current = progress;
  }, [progress]);

  useEffect(() => {
    const startTime = new Date().getTime();
    const maxLoadTime = 5000;
    
    let observer: PerformanceObserver | undefined;
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      try {
        observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          if (entries.length > 0) {
            setProgress(prev => Math.min(90, prev + 5));
          }
        });
        
        observer.observe({ entryTypes: ['resource'] });
      } catch {
        // Silently fail if not supported
      }
    }
    
    // Start progress animation
    const progressInterval = setInterval(() => {
      const elapsed = new Date().getTime() - startTime;
      const calculatedProgress = Math.min(90, (elapsed / maxLoadTime) * 100);
      
      setProgress(Math.max(calculatedProgress, progressRef.current));
    }, 50);
    
    // Listen for window load event (when all resources are loaded)
    const handleLoad = () => {
      clearInterval(progressInterval);
      setProgress(100);
      
      // Small delay before hiding loader for smooth transition
      setTimeout(() => {
        setIsLoading(false);
      }, 300);
    };
    
    const maxLoadingTimeout = setTimeout(() => {
      if (isLoadingRef.current) {
        clearInterval(progressInterval);
        setProgress(100);
        setTimeout(() => setIsLoading(false), 300);
      }
    }, maxLoadTime);
    
    // Check if document is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }
    
    return () => {
      clearInterval(progressInterval);
      clearTimeout(maxLoadingTimeout);
      window.removeEventListener('load', handleLoad);
      observer?.disconnect();
    };
  }, []); // Empty dependency array - only run once on mount

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-900/95 backdrop-blur-sm"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
        >
          <div className="flex flex-col items-center justify-center">
            <motion.div 
              className="relative flex items-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* Logo */}
              <div className="text-4xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Dali</span>
                <span className="font-semibold">Dev</span>
              </div>
              
              {/* Animated circle */}
              <motion.div 
                className="absolute -inset-3 rounded-full border-2 border-blue-500/20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
              />
              
              {/* Animated arc */}
              <svg className="absolute -inset-3 h-full w-full -rotate-90">
                <motion.circle
                  cx="50%"
                  cy="50%"
                  r="calc(50% - 4px)"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  strokeDasharray="calc(2 * 3.14 * (50% - 4px))"
                  strokeDashoffset={`calc(2 * 3.14 * (50% - 4px) * (1 - ${progress / 100}))`}
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#9333ea" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 