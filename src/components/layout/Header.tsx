"use client";

import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";
import { FiSun, FiMoon, FiMenu, FiX, FiMonitor } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showThemeMenu, setShowThemeMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Close theme menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setShowThemeMenu(false);
    };
    
    if (showThemeMenu) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [showThemeMenu]);

  const toggleThemeMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowThemeMenu(!showThemeMenu);
  };

  const setThemeOption = (newTheme: "light" | "dark" | "system") => {
    setTheme(newTheme);
    setShowThemeMenu(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="section-container flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#home"
          className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity"
        >
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Dev</span>
          <span className="font-semibold">Portfolio</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-all duration-300 relative ${
                activeSection === link.href.substring(1)
                  ? "text-primary dark:text-primary-light"
                  : "text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light"
              }`}
            >
              {link.label}
              {activeSection === link.href.substring(1) && (
                <motion.span 
                  layoutId="activeSection"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary dark:bg-primary-light rounded-full"
                />
              )}
            </Link>
          ))}
          
          {/* Theme toggle with dropdown */}
          <div className="relative">
            <button
              onClick={toggleThemeMenu}
              className="p-2 rounded-full glass hover:bg-gray-200/10 dark:hover:bg-gray-700/30 transition-colors"
              aria-label="Toggle theme"
            >
              {resolvedTheme === "dark" ? (
                <FiMoon className="h-5 w-5 text-yellow-400" />
              ) : (
                <FiSun className="h-5 w-5 text-amber-500" />
              )}
            </button>
            
            <AnimatePresence>
              {showThemeMenu && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 w-40 glass rounded-xl border border-gray-200/10 dark:border-gray-800/30 overflow-hidden shadow-subtle dark:shadow-subtle-dark z-50"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="py-1">
                    <button
                      onClick={() => setThemeOption("light")}
                      className={`flex items-center w-full px-4 py-2 text-sm ${
                        theme === "light" 
                          ? "text-primary dark:text-primary-light bg-primary/5" 
                          : "text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      <FiSun className="mr-2 h-4 w-4" />
                      Light
                    </button>
                    <button
                      onClick={() => setThemeOption("dark")}
                      className={`flex items-center w-full px-4 py-2 text-sm ${
                        theme === "dark" 
                          ? "text-primary dark:text-primary-light bg-primary/5" 
                          : "text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      <FiMoon className="mr-2 h-4 w-4" />
                      Dark
                    </button>
                    <button
                      onClick={() => setThemeOption("system")}
                      className={`flex items-center w-full px-4 py-2 text-sm ${
                        theme === "system" 
                          ? "text-primary dark:text-primary-light bg-primary/5" 
                          : "text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      <FiMonitor className="mr-2 h-4 w-4" />
                      System
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <div className="relative">
            <button
              onClick={toggleThemeMenu}
              className="p-2 mr-2 rounded-full glass hover:bg-gray-200/10 dark:hover:bg-gray-700/30 transition-colors"
              aria-label="Toggle theme"
            >
              {resolvedTheme === "dark" ? (
                <FiMoon className="h-4 w-4 text-yellow-400" />
              ) : (
                <FiSun className="h-4 w-4 text-amber-500" />
              )}
            </button>
            
            <AnimatePresence>
              {showThemeMenu && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 w-40 glass rounded-xl border border-gray-200/10 dark:border-gray-800/30 overflow-hidden shadow-subtle dark:shadow-subtle-dark z-50"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="py-1">
                    <button
                      onClick={() => setThemeOption("light")}
                      className={`flex items-center w-full px-4 py-2 text-sm ${
                        theme === "light" 
                          ? "text-primary dark:text-primary-light bg-primary/5" 
                          : "text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      <FiSun className="mr-2 h-4 w-4" />
                      Light
                    </button>
                    <button
                      onClick={() => setThemeOption("dark")}
                      className={`flex items-center w-full px-4 py-2 text-sm ${
                        theme === "dark" 
                          ? "text-primary dark:text-primary-light bg-primary/5" 
                          : "text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      <FiMoon className="mr-2 h-4 w-4" />
                      Dark
                    </button>
                    <button
                      onClick={() => setThemeOption("system")}
                      className={`flex items-center w-full px-4 py-2 text-sm ${
                        theme === "system" 
                          ? "text-primary dark:text-primary-light bg-primary/5" 
                          : "text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      <FiMonitor className="mr-2 h-4 w-4" />
                      System
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md glass hover:bg-gray-200/10 dark:hover:bg-gray-700/30 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <FiX className="h-5 w-5" />
            ) : (
              <FiMenu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass border-t border-gray-200/10 dark:border-gray-800/30 overflow-hidden"
          >
            <div className="section-container py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block py-3 px-4 text-base font-medium rounded-lg transition-colors ${
                    activeSection === link.href.substring(1)
                      ? "bg-primary/10 text-primary dark:text-primary-light"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-100/10 dark:hover:bg-gray-800/30"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
} 