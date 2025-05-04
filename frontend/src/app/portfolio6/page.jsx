'use client';
import React, { useEffect, useState } from 'react';
import {
  Code, Briefcase, GraduationCap, Sparkles, User, Link as LinkIcon
} from 'lucide-react';

const Portfolio6 = ({ portfolioData: propPortfolioData }) => {
  const [portfolioData, setPortfolioData] = useState(propPortfolioData || null);

  useEffect(() => {
    if (!propPortfolioData && typeof window !== 'undefined') {
      const storedData = localStorage.getItem('extractedData');
      if (storedData) setPortfolioData(JSON.parse(storedData));
    }
  }, [propPortfolioData]);

  if (!portfolioData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
        <h1 className="text-3xl font-bold animate-pulse">Loading Portfolio...</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 text-gray-800 p-6 sm:p-10">
      {/* === Header Section === */}
      <header className="text-center max-w-5xl mx-auto mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold flex justify-center items-center gap-2 text-purple-800">
          <User className="w-8 h-8" /> {portfolioData.name || 'Your Name'}
        </h1>
        {portfolioData.job_title && (
          <h2 className="text-xl sm:text-2xl text-gray-600 mt-2">{portfolioData.job_title}</h2>
        )}
        {portfolioData.summary && (
          <p className="mt-4 text-gray-700">{portfolioData.summary}</p>
        )}
      </header>

      {/* === Skills Section === */}
      {portfolioData.skills?.length > 0 && (
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-center text-indigo-600 flex justify-center gap-2">
            <Sparkles /> Skills
          </h3>
          <div className="flex flex-wrap gap-3 justify-center mt-6">
            {portfolioData.skills.map((skill, i) => (
              <span
                key={i}
                className="bg-purple-200 text-purple-800 font-medium px-4 py-2 rounded-full shadow hover:bg-purple-300 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* === Experience Section === */}
      {portfolioData.experience?.length > 0 && (
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-center text-indigo-600 flex justify-center gap-2">
            <Briefcase /> Experience
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {portfolioData.experience.map((exp, i) => (
              <div key={i} className="bg-white rounded-lg shadow p-6 border border-gray-200">
                <h4 className="text-xl font-semibold text-purple-800">{exp.role}</h4>
                <p className="text-sm text-gray-500">{exp.company} | {exp.duration}</p>
                <p className="mt-2 text-gray-700">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* === Projects Section === */}
      {portfolioData.projects?.length > 0 && (
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-center text-indigo-600 flex justify-center gap-2">
            <Code /> Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {portfolioData.projects.map((project, i) => (
              <div key={i} className="bg-white rounded-lg shadow p-6 border border-gray-200">
                <h4 className="text-xl font-semibold text-purple-800">{project.title}</h4>
                <p className="text-gray-600 mt-2">{project.description}</p>
                {project.technologies && (
                  <p className="text-sm text-gray-500 mt-2">
                    <strong>Tech:</strong> {project.technologies}
                  </p>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-blue-500 hover:underline"
                  >
                    <LinkIcon className="inline-block w-4 h-4 mr-1" /> View Project
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* === Education Section === */}
      {portfolioData.education?.length > 0 && (
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-center text-indigo-600 flex justify-center gap-2">
            <GraduationCap /> Education
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {portfolioData.education.map((edu, i) => (
              <div key={i} className="bg-white rounded-lg shadow p-6 border border-gray-200">
                <h4 className="text-xl font-semibold text-purple-800">{edu.degree}</h4>
                <p className="text-sm text-gray-500">{edu.institution} | {edu.end_year}</p>
                <p className="text-sm text-gray-600 mt-2">
                  {edu.location && <span><strong>Location:</strong> {edu.location}<br /></span>}
                  {edu.percentage && <span><strong>Percentage:</strong> {edu.percentage}</span>}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* === Footer === */}
      <footer className="text-center text-gray-600 mt-12">
        <p className="text-sm">&copy; {new Date().getFullYear()} {portfolioData.name || 'Portfolio'}. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio6;
