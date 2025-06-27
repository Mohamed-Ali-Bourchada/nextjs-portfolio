"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
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

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900/30">
      <div className="section-container">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Have a project in mind or want to discuss potential opportunities?
              Fill out the form or reach out through the provided channels.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:ma.bourchada@gmail.com"
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <FaEnvelope className="mr-3 text-blue-600 dark:text-blue-400" />
                <span>ma.bourchada@gmail.com</span>
              </a>
              <a
                href="https://github.com/Mohamed-Ali-Bourchada"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <FaGithub className="mr-3 text-blue-600 dark:text-blue-400" />
                <span>github</span>
              </a>
              <a
                href="https://www.linkedin.com/in/mohamed-ali-bourchada/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <FaLinkedin className="mr-3 text-blue-600 dark:text-blue-400" />
                <span>linkedin</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
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
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
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
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
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
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/50 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
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
      </div>
    </section>
  );
} 