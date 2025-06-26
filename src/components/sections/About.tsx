"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "@/components/layout/ThemeProvider";

// Dynamic image URL for profile
const profileImageUrl = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop";

// Tech stack with image URLs instead of icons
const technologies = [
  { 
    name: "React", 
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    darkInvert: true
  },
  { 
    name: "Next.js", 
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    darkInvert: true
  },
  { 
    name: "TypeScript", 
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    darkInvert: false
  },
  { 
    name: "Node.js", 
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    darkInvert: false
  },
  { 
    name: "MongoDB", 
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    darkInvert: false
  },
  { 
    name: "TailwindCSS", 
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    darkInvert: false
  },
  { 
    name: "Docker", 
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    darkInvert: false
  },
  { 
    name: "GitHub", 
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    darkInvert: true
  },
];

export default function About() {
  const { resolvedTheme } = useTheme();
  
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-accent/5 rounded-full blur-[100px]" />
      </div>
    
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="inline-block text-sm font-medium text-primary dark:text-primary-light uppercase tracking-wider mb-2">About Me</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Background</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Main image */}
              <div className="absolute inset-0 rounded-3xl glass border border-gray-200/10 dark:border-gray-800/30 overflow-hidden shadow-subtle dark:shadow-subtle-dark">
                <Image
                  src={profileImageUrl}
                  alt="Developer profile"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl rotate-12 bg-primary/10 dark:bg-primary/5 backdrop-blur-lg"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-accent/10 dark:bg-accent/5 backdrop-blur-lg"></div>
              
              {/* Experience badge */}
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-900 rounded-2xl shadow-subtle dark:shadow-subtle-dark p-4 glass border border-gray-200/10 dark:border-gray-800/30">
                <div className="text-center">
                  <span className="block text-3xl font-bold text-primary dark:text-primary-light">5+</span>
                  <span className="text-sm text-gray-600 dark:text-gray-300">Years Experience</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">Full-Stack Web & Mobile Developer</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I&apos;m a passionate full-stack developer with expertise in building scalable web and mobile applications. 
              With a strong foundation in both frontend and backend technologies, I create seamless, 
              user-focused experiences that drive business growth.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              My approach combines clean code, modern architecture patterns, and continuous learning to 
              deliver high-quality solutions that meet client needs and exceed expectations.
            </p>

            <div>
              <h4 className="font-medium mb-6">Technologies I work with:</h4>
              <div className="grid grid-cols-4 gap-6">
                {technologies.map((tech) => (
                  <motion.div
                    key={tech.name}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-12 h-12 rounded-lg glass flex items-center justify-center p-2 mb-2">
                      <Image 
                        src={tech.imageUrl} 
                        alt={tech.name} 
                        width={30} 
                        height={30}
                        className={resolvedTheme === 'dark' && tech.darkInvert ? 'filter invert' : ''}
                      />
                    </div>
                    <span className="text-xs text-gray-600 dark:text-gray-300">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 