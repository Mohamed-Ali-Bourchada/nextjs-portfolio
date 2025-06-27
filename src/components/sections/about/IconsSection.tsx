"use client";

import { FaAngular, FaReact, FaDesktop } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { useEffect, useState } from "react";

export default function IconsSection() {
  const [mounted, setMounted] = useState(false);
  
  // Ensure icons render only after component is mounted
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Use explicit styles instead of Tailwind classes for icons
  const iconContainerStyle = {
    width: '2.5rem',
    height: '2.5rem',
    borderRadius: '0.5rem',
    background: 'rgba(15, 23, 42, 0.3)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '0.75rem'
  };

  if (!mounted) {
    return <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="flex items-center">
          <div className="w-10 h-10 rounded-lg bg-gray-800 mr-3"></div>
          <div className="h-5 w-24 bg-gray-800 rounded"></div>
        </div>
      ))}
    </div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
      <div className="flex items-center">
        <div style={iconContainerStyle}>
          <FaAngular style={{ color: '#dd0031', width: '1.25rem', height: '1.25rem' }} />
        </div>
        <span className="font-medium">Angular Development</span>
      </div>
      <div className="flex items-center">
        <div style={iconContainerStyle}>
          <SiSpringboot style={{ color: '#6db33f', width: '1.25rem', height: '1.25rem' }} />
        </div>
        <span className="font-medium">Spring Boot</span>
      </div>
      <div className="flex items-center">
        <div style={iconContainerStyle}>
          <FaReact style={{ color: '#61dafb', width: '1.25rem', height: '1.25rem' }} />
        </div>
        <span className="font-medium">React Native</span>
      </div>
      <div className="flex items-center">
        <div style={iconContainerStyle}>
          <FaDesktop style={{ color: '#e2e8f0', width: '1.25rem', height: '1.25rem' }} />
        </div>
        <span className="font-medium">IT Services</span>
      </div>
    </div>
  );
} 