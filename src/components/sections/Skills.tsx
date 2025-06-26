"use client";

import { motion } from "framer-motion";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaAngular, 
  FaBootstrap, FaFigma, FaJava, FaPhp, FaGithub, 
  FaDocker, FaGitAlt
} from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiLaravel, SiSpringboot } from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "Angular", icon: FaAngular, level: 90 },
      { name: "React Native", icon: FaReact, level: 85 },
      { name: "TypeScript", icon: SiTypescript, level: 90 },
      { name: "JavaScript", icon: FaJs, level: 95 },
      { name: "HTML", icon: FaHtml5, level: 95 },
      { name: "CSS", icon: FaCss3Alt, level: 90 },
      { name: "Bootstrap", icon: FaBootstrap, level: 85 },
      { name: "Figma", icon: FaFigma, level: 80 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Spring Boot", icon: SiSpringboot, level: 85 },
      { name: "Java", icon: FaJava, level: 80 },
      { name: "PHP", icon: FaPhp, level: 85 },
      { name: "Laravel", icon: SiLaravel, level: 80 },
      { name: "Next.js", icon: SiNextdotjs, level: 85 },
    ],
  },
  {
    title: "DevOps / Tools",
    skills: [
      { name: "Git", icon: FaGitAlt, level: 90 },
      { name: "GitHub", icon: FaGithub, level: 90 },
      { name: "Docker", icon: FaDocker, level: 80 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-xl font-semibold mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <skill.icon className="w-5 h-5 mr-2" />
                        <span>{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="h-full bg-blue-600 dark:bg-blue-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 