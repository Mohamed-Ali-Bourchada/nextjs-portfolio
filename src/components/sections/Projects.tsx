"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiGithub, FiExternalLink, FiArrowRight } from "react-icons/fi";
import Link from "next/link";

// Dynamic project images from Unsplash
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, cart functionality, and payment integration.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800&auto=format&fit=crop",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A mobile application for task management with real-time updates and team collaboration features.",
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=800&auto=format&fit=crop",
    tags: ["React Native", "TypeScript", "Firebase"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 3,
    title: "Admin Dashboard",
    description:
      "A responsive admin dashboard with analytics, user management, and data visualization.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    tags: ["React", "Tailwind CSS", "Chart.js", "Next.js"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 4,
    title: "Booking System",
    description:
      "A reservation system for appointments and services with calendar integration.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Auth.js"],
    githubUrl: "#",
    liveUrl: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 -right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.03]" />
      </div>
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="inline-block text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-3xl overflow-hidden border border-gray-200/10 dark:border-gray-700/20 shadow-subtle dark:shadow-subtle-dark group"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs rounded-full">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-4">
                    <Link
                      href={project.githubUrl}
                      className="p-2 rounded-full glass hover:bg-gray-200/10 dark:hover:bg-gray-700/30 transition-all hover:scale-110"
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <FiGithub className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                    </Link>
                    <Link
                      href={project.liveUrl}
                      className="p-2 rounded-full glass hover:bg-gray-200/10 dark:hover:bg-gray-700/30 transition-all hover:scale-110"
                      aria-label={`Live demo for ${project.title}`}
                    >
                      <FiExternalLink className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                    </Link>
                  </div>
                  <Link
                    href={project.liveUrl}
                    className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    View Details
                    <FiArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            href="#"
            className="btn-primary inline-flex items-center justify-center"
          >
            View All Projects
            <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
} 