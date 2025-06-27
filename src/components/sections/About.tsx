"use client";

import { motion } from "framer-motion";
import { FaAngular, FaReact, FaDesktop } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px]" />
      </div>
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="inline-block text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">About Me</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Background</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square relative rounded-2xl overflow-hidden glass border border-gray-200/10 dark:border-gray-700/20 shadow-subtle dark:shadow-subtle-dark">
              <svg className="w-full h-full text-gray-300" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-xl glass border border-gray-200/10 dark:border-gray-700/20 shadow-subtle dark:shadow-subtle-dark flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">5+</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Years<br />Experience</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Full Stack Developer & IT Specialist</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I&apos;m a passionate full-stack developer specializing in Angular and Spring Boot development. With expertise in creating responsive web applications and mobile solutions using React Native, I deliver high-quality software that meets client needs.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              My technical skills include frontend technologies like Angular, React Native, and Next.js, complemented by backend expertise in Spring Boot and Laravel. I&apos;m proficient in database management with MySQL and have extensive experience with DevOps tools including Git, Docker, and GitHub Actions.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Additionally, I provide IT services including hardware and software maintenance, ensuring comprehensive technical solutions for all client needs.
            </p>
            
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
          </motion.div>
        </div>
      </div>
    </section>
  );
} 