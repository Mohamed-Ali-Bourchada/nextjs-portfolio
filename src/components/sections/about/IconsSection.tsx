"use client";

import { FaAngular, FaReact, FaDesktop } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";

export default function IconsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-lg glass flex items-center justify-center mr-3">
          <FaAngular className="text-red-600 w-5 h-5" />
        </div>
        <span className="font-medium">Angular Development</span>
      </div>
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-lg glass flex items-center justify-center mr-3">
          <SiSpringboot className="text-green-600 w-5 h-5" />
        </div>
        <span className="font-medium">Spring Boot</span>
      </div>
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-lg glass flex items-center justify-center mr-3">
          <FaReact className="text-blue-500 w-5 h-5" />
        </div>
        <span className="font-medium">React Native</span>
      </div>
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-lg glass flex items-center justify-center mr-3">
          <FaDesktop className="text-gray-300 w-5 h-5" />
        </div>
        <span className="font-medium">IT Services</span>
      </div>
    </div>
  );
} 