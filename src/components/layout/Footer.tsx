"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowUp, FiMapPin, FiPhone } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log("Form submitted:", formData);
    
    // Simulate successful form submission
    setFormStatus({
      submitted: true,
      error: false,
      message: "Thank you for your message! I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
    
    // Reset status after 5 seconds
    setTimeout(() => {
      setFormStatus({ submitted: false, error: false, message: "" });
    }, 5000);
  };
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer id="contact" className="pt-20 pb-12 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px]" />
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px]" />
      </div>
      
      <div className="section-container relative z-10">
        {/* Contact Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="inline-block text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>
        
        {/* Contact Form and Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/5 dark:bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/10 dark:border-gray-800/30 shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Let&apos;s Connect</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Have a project in mind or want to discuss potential opportunities?
              Fill out the form or reach out through the provided channels.
            </p>

            <div className="space-y-6">
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center mr-4">
                  <FiMail className="text-blue-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                  <a href="mailto:ma.bourchada@gmail.com" className="hover:text-blue-500 transition-colors">
                    ma.bourchada@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center mr-4">
                  <FiPhone className="text-blue-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                  <a href="tel:+21658690686" className="hover:text-blue-500 transition-colors">
                    +216 58 690 686
                  </a>
                </div>
              </div>
              
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center mr-4">
                  <FiMapPin className="text-blue-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                  <p>Djerba, Tunisia</p>
                </div>
              </div>
              
              <div className="flex space-x-4 pt-4">
                <a
                  href="https://github.com/Mohamed-Ali-Bourchada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-blue-500/10 transition-colors"
                  aria-label="GitHub"
                >
                  <FiGithub className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/mohamed-ali-bourchada/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-blue-500/10 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://x.com/MohamedBrrr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-blue-500/10 transition-colors"
                  aria-label="Twitter"
                >
                  <FiTwitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white/5 dark:bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/10 dark:border-gray-800/30 shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/5 dark:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/5 dark:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/5 dark:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all"
              >
                Send Message
              </button>

              {formStatus.message && (
                <div
                  className={`mt-4 p-3 rounded-lg ${
                    formStatus.error
                      ? "bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-300"
                      : "bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300"
                  }`}
                >
                  {formStatus.message}
                </div>
              )}
            </form>
          </motion.div>
        </div>
        
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12 pt-8 border-t border-gray-200/10 dark:border-gray-800/30">
          <div className="col-span-1">
            <Link
              href="#home"
              className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity"
            >
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Dev</span>
              <span className="font-semibold">Portfolio</span>
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-md">
              Professional web and mobile development services.
              Available for freelance work and collaborations.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">Navigation</h3>
            <ul className="grid grid-cols-2 gap-2">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <Link 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-gray-300">Web Development</li>
              <li className="text-gray-600 dark:text-gray-300">Mobile App Development</li>
              <li className="text-gray-600 dark:text-gray-300">UI/UX Design</li>
              <li className="text-gray-600 dark:text-gray-300">Consulting</li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-gray-200/10 dark:border-gray-800/30">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 md:mb-0">
            © {currentYear} Mohamed Ali Bourchada. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="p-3 rounded-full glass hover:bg-gray-200/10 dark:hover:bg-gray-700/30 transition-all hover:scale-110"
            aria-label="Scroll to top"
          >
            <FiArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
} 