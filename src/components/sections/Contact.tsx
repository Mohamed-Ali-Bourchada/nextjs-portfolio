"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Initialize EmailJS once on component mount
  useEffect(() => {
    emailjs.init("process.env.NEXT_PUBLIC_EMAILJS_USER!");
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted, attempting to send email...");
    
    if (!formRef.current) return;
    
    setLoading(true);
    setError("");
    
    try {
      // Make sure the form fields match your EmailJS template variables
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_USER!
      );
      
      console.log('Email sent successfully!', result.text);
      setSuccess(true);
      formRef.current.reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
      
    } catch (error: unknown) {
      console.error('Error sending email:', error);
      // Display more detailed error information
      if (typeof error === 'object' && error !== null && 'text' in error) {
        setError(`Failed to send message: ${(error as {text: string}).text}`);
      } else {
        setError("Failed to send message. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="pt-10 pb-12 relative overflow-hidden">
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
            {success ? (
              <div className="p-6 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300 rounded-lg text-center">
                <h3 className="text-xl font-semibold mb-2">Thank you!</h3>
                <p>Your message has been sent. I&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
                <div>
                  <label
                    htmlFor="from_name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="from_name"
                    name="from_name"
                    type="text"
                    required
                    aria-required="true"
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
                    aria-required="true"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/5 dark:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    aria-required="true"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/5 dark:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                    placeholder="Message subject"
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
                    aria-required="true"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/5 dark:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                {error && (
                  <div className="p-3 bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-300 rounded-lg">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 