"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// Dynamically import icons to reduce bundle size
const IconsSection = dynamic(() => import("./about/IconsSection"), {
  ssr: true,
  loading: () => <div className="h-20"></div>
});

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
              <Image 
                src="/projects/about.webp" 
                alt="About" 
                width={500}
                height={500}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 500px"
                priority={false}
              />
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
            
            {/* Dynamically loaded icons section */}
            <IconsSection />
          </motion.div>
        </div>
      </div>
    </section>
  );
} 