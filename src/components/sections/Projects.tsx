"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiGithub, FiExternalLink, FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

// Real projects data with enhanced descriptions
const projects = [
  {
    id: 1,
    title: "Gimavra",
    description:
      "Online training management platform with integrated payment system via Konnect API, JWT authentication, and WebSocket real-time communication.",
    image: "/projects/gimavra.webp",
    tags: ["Spring Boot", "Angular", "WebSocket", "JWT", "Docker", "GitHub Actions", "Konnect API", "MySQL","bootstrap"],
    category: "Web App",
    featured: true,
    githubUrl: "#", // Private repository
    liveUrl: "https://gimavra.com",
  },
  {
    id: 2,
    title: "JaziraStore",
    description:
      "E-commerce website built with WordPress and WooCommerce offering a seamless shopping experience with product management and payment integration.",
    image: "/projects/jazirastore.webp",
    tags: ["WordPress", "WooCommerce", "PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
    category: "E-commerce",
    featured: true,
    githubUrl: "#", // Private repository
    liveUrl: "https://jazirastore.tn",
  },
  {
    id: 3,
    title: "E-Library Management",
    description:
      "Comprehensive library management system for tracking physical books, managing loans, and user accounts with an intuitive interface.",
    image: "/projects/elibrary.webp",
    tags: ["Spring Boot", "Angular", "MySQL"," Bootstrap"],
    category: "Web App",
    featured: true,
    githubUrl: "https://github.com/Mohamed-Ali-Bourchada/E-Library.git",
    liveUrl: "#",
  },
  {
    id: 4,
    title: "ZipBook",
    description:
      "Online e-book platform for browsing digital books with an admin dashboard to manage books and users. Built with PHP and MySQL.",
    image: "/projects/zipbook.webp",
    tags: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
    category: "Web App",
    featured: false,
    githubUrl: "https://github.com/Mohamed-Ali-Bourchada/ebookWebSite.git",
    liveUrl: "#",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description:
      "Modern personal portfolio website showcasing projects and skills with a responsive design, animations, and dark/light mode.",
    image: "/projects/portfolio.webp",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "Frontend",
    featured: true,
    githubUrl: "https://github.com/Mohamed-Ali-Bourchada/nextjs-portfolio.git",
    liveUrl: "#",
  },
  {
    id: 6,
    title: "Adhkar App",
    description:
      "Mobile application for Islamic daily remembrance prayers with a clean, user-friendly interface built with React Native.",
    image: "/projects/adhkar.webp",
    tags: ["React Native"],
    category: "Mobile",
    featured: false,
    githubUrl: "https://github.com/Mohamed-Ali-Bourchada/AdhkarApp.git",
    liveUrl: "#",
  },
  {
    id: 7,
    title: "Academic Management System",
    description:
      "System for managing academic subjects, exams, and student records with comprehensive reporting built with Laravel.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop",
    tags: ["Laravel", "PHP", "MySQL", "Bootstrap", "Vite"],
    category: "Web App",
    featured: false,
    githubUrl: "https://github.com/Mohamed-Ali-Bourchada/first_laravel.git",
    liveUrl: "#",
  },
];

// Extract unique categories
const allCategories = ["All", ...new Set(projects.map(project => project.category))];

// Featured projects for the carousel
const featuredProjects = projects.filter(project => project.featured);

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  
  // Handle click outside modal
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        closeModal();
      }
    }
    
    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  // Handle escape key
  useEffect(() => {
    function handleEscKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeModal();
      }
    }
    
    if (isModalOpen) {
      document.addEventListener("keydown", handleEscKey);
      document.body.style.overflow = "hidden";
    }
    
    return () => {
      document.removeEventListener("keydown", handleEscKey);
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const openModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const toggleShowAllProjects = () => {
    setShowAllProjects(!showAllProjects);
  };

  return (
    <section id="projects" className="py-8 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 -right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute -bottom-40 -left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.03]" />
      </div>
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2"
          >
            Portfolio
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300"
          >
            Featured Projects
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-center"
          >
            Explore my latest work across various technologies and domains. Each project represents a unique challenge solved with modern development practices.
          </motion.p>
        </motion.div>

        {/* Featured Projects Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mb-10 relative"
        >
          <div className="relative">
            <Swiper
              key="featured-projects-swiper"
              modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
              effect="coverflow"
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2,
                slideShadows: false,
              }}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 1.5,
                  centeredSlides: true,
                },
                1024: {
                  slidesPerView: 2.5,
                  centeredSlides: true,
                },
              }}
              spaceBetween={30}
              centeredSlides={true}
              initialSlide={1}
              grabCursor={true}
              loop={true}
              speed={400}
              simulateTouch={true}
              touchRatio={1.5}
              touchAngle={45}
              threshold={5}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              navigation={{
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
              }}
              className="!pb-16"
            >
              {/* Duplicate slides to ensure better looping */}
              {featuredProjects.concat(featuredProjects).slice(0, featuredProjects.length * 2).map((project, index) => (
                <SwiperSlide key={`${project.id}-${index}`} className="py-8">
                  <div 
                    className="card-hover rounded-3xl overflow-hidden border border-gray-200/20 dark:border-gray-700/30 shadow-lg hover:shadow-xl transition-all duration-300 group h-full flex flex-col bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm transform hover:-translate-y-1 cursor-pointer"
                    onClick={() => openModal(project)}
                    onMouseEnter={() => setHoveredId(project.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    {/* Image section */}
                    <div className="relative h-64 overflow-hidden">
                      <div className="absolute top-4 left-4 z-10">
                        <span className="px-3 py-1 bg-black/70 backdrop-blur-sm text-white text-xs rounded-full border border-white/10 font-medium">
                          {project.category}
                        </span>
                      </div>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        loading="eager"
                        priority={index < 3}
                        className={`object-cover transition-all duration-700 ${hoveredId === project.id ? 'scale-110 filter brightness-90' : 'filter brightness-95'}`}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80 transition-opacity duration-300 ${hoveredId === project.id ? 'opacity-95' : 'opacity-80'}`}></div>
                      
                      {/* Content overlay on image */}
                      <div className="absolute inset-0 flex flex-col justify-end p-6">
                        <h3 className="text-2xl font-bold mb-3 text-white drop-shadow-md">{project.title}</h3>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs rounded-full border border-white/10"
                            >
                              {tag}
                            </span>
                          ))}
                          {project.tags.length > 3 && (
                            <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs rounded-full border border-white/10">
                              +{project.tags.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {/* Content section */}
                    <div className="p-6 flex flex-col flex-grow">
                      <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3 flex-grow">
                        {project.description}
                      </p>
                      <div className="flex justify-between items-center mt-auto">
                        <div className="flex space-x-4">
                          {project.githubUrl !== "#" && (
                            <Link
                              href={project.githubUrl}
                              className="p-2 rounded-full hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition-all hover:scale-110"
                              aria-label={`GitHub repository for ${project.title}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <FiGithub className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                            </Link>
                          )}
                          {project.liveUrl !== "#" && (
                            <Link
                              href={project.liveUrl}
                              className="p-2 rounded-full hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition-all hover:scale-110"
                              aria-label={`Live demo for ${project.title}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <FiExternalLink className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                            </Link>
                          )}
                        </div>
                        <button className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline group/link cursor-pointer">
                          <span>View Details</span>
                          <FiArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            {/* Custom navigation buttons - smaller and more modern */}
            <div className="swiper-button-prev after:content-none !w-8 !h-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-md border border-gray-100 dark:border-gray-700 hover:bg-blue-500 hover:border-blue-600 dark:hover:bg-blue-600 dark:hover:border-blue-500 transition-all duration-300 flex items-center justify-center !left-2 lg:!left-4 cursor-pointer">
              <FiChevronLeft className="h-4 w-4 text-gray-700 dark:text-gray-200 group-hover:text-white" />
            </div>
            <div className="swiper-button-next after:content-none !w-8 !h-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-md border border-gray-100 dark:border-gray-700 hover:bg-blue-500 hover:border-blue-600 dark:hover:bg-blue-600 dark:hover:border-blue-500 transition-all duration-300 flex items-center justify-center !right-2 lg:!right-4 cursor-pointer">
              <FiChevronRight className="h-4 w-4 text-gray-700 dark:text-gray-200 group-hover:text-white" />
            </div>
          </div>
        </motion.div>

        {/* Toggle button for showing all projects */}
        <div className="mt-4 mb-6 text-center">
          <button
            onClick={toggleShowAllProjects}
            className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-1 cursor-pointer"
          >
            <span>{showAllProjects ? 'Hide All Projects' : 'View All Projects'}</span>
            <FiArrowRight className={`ml-2 h-5 w-5 transition-transform duration-300 ${showAllProjects ? 'rotate-90' : ''}`} />
          </button>
        </div>

        {/* All Projects Section */}
        <div className={`transition-all duration-500 ${showAllProjects ? 'opacity-100 max-h-[5000px] mt-6' : 'opacity-0 max-h-0 overflow-hidden'}`}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showAllProjects ? 1 : 0 }}
            className="mb-6 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
              All Projects
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6" />
          </motion.div>

          {/* Category Filter */}
          <motion.div 
            animate={{ opacity: showAllProjects ? 1 : 0 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {allCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          <motion.div 
            animate={{ opacity: showAllProjects ? 1 : 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: showAllProjects ? 1 : 0, y: showAllProjects ? 0 : 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-hover rounded-3xl overflow-hidden border border-gray-200/20 dark:border-gray-700/30 shadow-lg hover:shadow-xl transition-all duration-300 group h-full flex flex-col bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm cursor-pointer"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => openModal(project)}
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-black/70 backdrop-blur-sm text-white text-xs rounded-full border border-white/10 font-medium">
                      {project.category}
                    </span>
                  </div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={`object-cover transition-all duration-700 ${hoveredId === project.id ? 'scale-110 filter brightness-90' : 'filter brightness-95'}`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80 transition-opacity duration-300 ${hoveredId === project.id ? 'opacity-95' : 'opacity-80'}`}></div>
                  
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-bold mb-3 text-white drop-shadow-md">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs rounded-full border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs rounded-full border border-white/10">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center mt-auto">
                    <div className="flex space-x-4">
                      {project.githubUrl !== "#" && (
                        <Link
                          href={project.githubUrl}
                          className="p-2 rounded-full hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition-all hover:scale-110"
                          aria-label={`GitHub repository for ${project.title}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FiGithub className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                        </Link>
                      )}
                      {project.liveUrl !== "#" && (
                        <Link
                          href={project.liveUrl}
                          className="p-2 rounded-full hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition-all hover:scale-110"
                          aria-label={`Live demo for ${project.title}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FiExternalLink className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                        </Link>
                      )}
                    </div>
                    <button
                      className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline group/link cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(project);
                      }}
                    >
                      <span>View Details</span>
                      <FiArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Project Detail Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            ref={modalRef}
            className="bg-white dark:bg-gray-900 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl"
          >
            <div className="relative h-80 sm:h-96">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80"></div>
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all"
                aria-label="Close modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs rounded-full mb-3">
                  {selectedProject.category}
                </span>
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">{selectedProject.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs rounded-full border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="p-6 sm:p-8">
              <div className="prose dark:prose-invert max-w-none">
                <h4 className="text-xl font-semibold mb-4">Project Overview</h4>
                <p className="mb-6">{selectedProject.description}</p>
                
                <h4 className="text-xl font-semibold mb-4">Key Features</h4>
                <ul className="list-disc pl-5 space-y-2 mb-6">
                  <li>Responsive design optimized for all device sizes</li>
                  <li>Intuitive user interface with modern design principles</li>
                  <li>Performance optimized for fast loading times</li>
                  <li>Secure authentication and data protection</li>
                  <li>Comprehensive documentation and clean code structure</li>
                </ul>
                
                <h4 className="text-xl font-semibold mb-4">Technologies Used</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                  {selectedProject.tags.map((tech) => (
                    <div key={tech} className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 mt-8">
                {selectedProject.githubUrl !== "#" && (
                  <Link
                    href={selectedProject.githubUrl}
                    className="inline-flex items-center px-6 py-3 rounded-full bg-gray-800 hover:bg-gray-900 text-white font-medium transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub className="mr-2 h-5 w-5" />
                    <span>View Code</span>
                  </Link>
                )}
                {selectedProject.liveUrl !== "#" && (
                  <Link
                    href={selectedProject.liveUrl}
                    className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink className="mr-2 h-5 w-5" />
                    <span>Live Demo</span>
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
} 