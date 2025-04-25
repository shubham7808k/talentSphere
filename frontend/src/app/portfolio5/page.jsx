'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code, Briefcase, GraduationCap, Sparkles, User, Link as LinkIcon
} from 'lucide-react';

const Portfolio5 = ({ portfolioData: propPortfolioData }) => {
  const [portfolioData, setPortfolioData] = useState(propPortfolioData || null);

  useEffect(() => {
    if (!propPortfolioData && typeof window !== 'undefined') {
      const storedData = localStorage.getItem('extractedData');
      if (storedData) setPortfolioData(JSON.parse(storedData));
    }
  }, [propPortfolioData]);

  if (!portfolioData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <h1 className="text-3xl font-bold animate-pulse">Loading Portfolio...</h1>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 text-white min-h-screen p-5 sm:p-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl mx-auto"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold flex items-center justify-center gap-2">
          <User className="w-8 h-8" /> {portfolioData.name}
        </h1>
        <h2 className="text-xl sm:text-2xl mt-2 italic">{portfolioData.job_title}</h2>
        <p className="mt-4 text-base sm:text-lg text-white/90">{portfolioData.summary}</p>
      </motion.div>

      {/* Skills */}
      <section className="mt-12">
        <h3 className="text-2xl sm:text-3xl font-bold text-center flex justify-center items-center gap-2">
          <Sparkles className="w-6 h-6" /> Skills
        </h3>
        <div className="flex flex-wrap gap-3 justify-center mt-6">
          {portfolioData.skills?.map((skill, i) => (
            <span
              key={i}
              className="bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm sm:text-base hover:bg-white/20 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mt-14">
        <h3 className="text-2xl sm:text-3xl font-bold text-center flex justify-center items-center gap-2">
          <Briefcase className="w-6 h-6" /> Experience
        </h3>
        <div className="grid gap-6 md:grid-cols-2 mt-6">
          {portfolioData.experience?.map((exp, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-white/10 rounded-xl p-5 shadow-lg border border-white/20"
            >
              <h4 className="text-xl font-semibold">{exp.role}</h4>
              <p className="text-sm text-white/70">{exp.company} | {exp.duration}</p>
              <p className="mt-2">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mt-14">
        <h3 className="text-2xl sm:text-3xl font-bold text-center flex justify-center items-center gap-2">
          <Code className="w-6 h-6" /> Projects
        </h3>
        <div className="grid gap-6 md:grid-cols-2 mt-6">
          {portfolioData.projects?.map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-white/10 rounded-xl p-5 shadow-lg border border-white/20"
            >
              <h4 className="text-xl font-semibold">{project.title}</h4>
              <p className="mt-2">{project.description}</p>
              {project.technologies && (
                <p className="mt-2 text-sm text-white/80">
                  <strong>Tech:</strong> {project.technologies}
                </p>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-blue-300 hover:underline"
                >
                  <LinkIcon className="w-4 h-4" /> View Project
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mt-14">
        <h3 className="text-2xl sm:text-3xl font-bold text-center flex justify-center items-center gap-2">
          <GraduationCap className="w-6 h-6" /> Education
        </h3>
        <div className="grid gap-6 md:grid-cols-2 mt-6">
          {portfolioData.education?.map((edu, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-white/10 rounded-xl p-5 shadow-lg border border-white/20"
            >
              <h4 className="text-xl font-semibold">{edu.degree}</h4>
              <p className="text-sm text-white/80 mt-1">{edu.institution}</p>
              <p className="text-sm"><strong>Passout:</strong> {edu.end_year}</p>
              {edu.location && <p className="text-sm"><strong>Location:</strong> {edu.location}</p>}
              {edu.percentage && <p className="text-sm"><strong>Percentage:</strong> {edu.percentage}</p>}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 text-center text-white/80 text-sm py-6">
        &copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
      </footer>
    </div>
  );
};

export default Portfolio5;
