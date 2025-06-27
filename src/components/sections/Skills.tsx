"use client";

import { motion } from "framer-motion";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaAngular, 
  FaBootstrap, FaJava, FaPhp, FaGithub, 
  FaDocker, FaGitAlt,
  FaDesktop, FaLaptopCode
} from "react-icons/fa";
import { 
  SiTypescript, SiSpringboot, SiLaravel, SiNextdotjs,
  SiTailwindcss, SiMysql, SiGithubactions
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend Development",
    description: "Creating responsive, interactive user interfaces",
    skills: [
      { name: "Angular", icon: FaAngular, color: "text-red-600" },
      { name: "React Native", icon: FaReact, color: "text-blue-500" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-gray-200" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
      { name: "JavaScript", icon: FaJs, color: "text-yellow-500" },
      { name: "HTML5", icon: FaHtml5, color: "text-orange-600" },
      { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
      { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-600" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
    ]
  },
  {
    title: "Backend Development",
    description: "Building robust, scalable server-side applications",
    skills: [
      { name: "Spring Boot", icon: SiSpringboot, color: "text-green-600" },
      { name: "Laravel", icon: SiLaravel, color: "text-red-500" },
      { name: "Java", icon: FaJava, color: "text-red-500" },
      { name: "PHP", icon: FaPhp, color: "text-indigo-500" },
    ]
  },
  {
    title: "Database",
    description: "Database management and optimization",
    skills: [
      { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
    ]
  },
  {
    title: "DevOps & Tools",
    description: "Automating workflows and deployment processes",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
      { name: "GitHub", icon: FaGithub, color: "text-gray-200" },
      { name: "Docker", icon: FaDocker, color: "text-blue-500" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "text-blue-400" },
    ]
  },
  {
    title: "IT Services",
    description: "Hardware and software maintenance",
    skills: [
      { name: "Hardware Maintenance", icon: FaDesktop, color: "text-gray-300" },
      { name: "Software Maintenance", icon: FaLaptopCode, color: "text-green-400" },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 -left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px]" />
      </div>
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="inline-block text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">Technical Expertise</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Skills</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-20">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Category Header */}
              <div className="flex items-center mb-8 relative">
                <div className="absolute left-0 -top-10 text-8xl font-bold text-gray-800/5 dark:text-gray-100/5 select-none">
                  {`0${catIndex + 1}`}
                </div>
                <div className="z-10">
                  <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                  <p className="text-gray-400 text-sm max-w-2xl">{category.description}</p>
                </div>
              </div>
              
              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="relative overflow-hidden rounded-xl">
                      {/* Background gradient based on skill color */}
                      <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${skill.color.replace('text-', 'bg-')}`}></div>
                      
                      {/* Skill card */}
                      <div className="glass border border-gray-700/20 group-hover:border-gray-700/40 p-5 rounded-xl transition-all duration-300 h-full flex flex-col items-center justify-center text-center">
                        <div className="w-12 h-12 rounded-full bg-gray-800/50 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                          <skill.icon className={`h-6 w-6 ${skill.color}`} />
                        </div>
                        <h4 className="font-medium text-sm">{skill.name}</h4>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Decorative line */}
              {catIndex < skillCategories.length - 1 && (
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700/20 to-transparent mt-16"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 