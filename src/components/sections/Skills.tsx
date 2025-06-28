"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// Dynamically import skill categories
const SkillCategories = dynamic(() => import("./skills/SkillCategories"), {
  ssr: true,
  loading: () => <div className="min-h-[400px]">Loading skills...</div>
});

export default function Skills() {
  return (
    <section id="skills" className="py-6 relative overflow-hidden">
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

        {/* Dynamically loaded skill categories */}
        <SkillCategories />
      </div>
    </section>
  );
} 