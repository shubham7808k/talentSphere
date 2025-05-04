'use client';
import React, { useEffect, useState } from 'react';

const Portfolio = ({ portfolioData: propPortfolioData }) => {
  const [portfolioData, setPortfolioData] = useState(propPortfolioData || null);

  useEffect(() => {
    if (!propPortfolioData && typeof window !== 'undefined') {
      const storedData = localStorage.getItem('extractedData');
      if (storedData) {
        setPortfolioData(JSON.parse(storedData));
      }
    }
  }, [propPortfolioData]);

  if (!portfolioData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-gray-800">
              {portfolioData.name || 'My Portfolio'}
            </div>
            <div>
              {portfolioData.summary && <a href="#about" className="mx-2 text-gray-600 hover:text-gray-800">About</a>}
              {portfolioData.skills?.length > 0 && <a href="#skills" className="mx-2 text-gray-600 hover:text-gray-800">Skills</a>}
              {portfolioData.experience?.length > 0 && <a href="#experience" className="mx-2 text-gray-600 hover:text-gray-800">Experience</a>}
              {portfolioData.projects?.length > 0 && <a href="#projects" className="mx-2 text-gray-600 hover:text-gray-800">Projects</a>}
              {portfolioData.email && <a href="#contact" className="mx-2 text-gray-600 hover:text-gray-800">Contact</a>}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold text-gray-800">
              {portfolioData.name || 'Your Name'}
            </h1>
            {portfolioData.job_title && (
              <h2 className="text-2xl text-gray-600 mt-2">
                {portfolioData.job_title}
              </h2>
            )}
            <div className="mt-6">
              {portfolioData.email && (
                <a href={`mailto:${portfolioData.email}`} className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 mr-4">Email Me</a>
              )}
              {portfolioData.phone && (
                <a href={`tel:${portfolioData.phone}`} className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">Call Me</a>
              )}
            </div>
          </div>
          {portfolioData.image && (
            <div className="md:w-1/2 mt-6 md:mt-0">
              <img src={portfolioData.image} alt={`${portfolioData.name}'s profile`} className="rounded-full w-64 h-64 object-cover mx-auto" />
            </div>
          )}
        </div>
      </header>

      {/* About */}
      {portfolioData.summary && (
        <section id="about" className="max-w-7xl mx-auto px-4 py-12">
          <h3 className="text-3xl font-semibold mb-6 text-gray-800">About Me</h3>
          <p className="text-gray-700">{portfolioData.summary}</p>
        </section>
      )}

      {/* Skills */}
      {portfolioData.skills?.length > 0 && (
        <section id="skills" className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h3 className="text-3xl font-semibold mb-6 text-gray-800">Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {portfolioData.skills.map((skill, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded shadow text-center text-gray-700">{skill}</div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Experience */}
      {portfolioData.experience?.length > 0 && (
        <section id="experience" className="max-w-7xl mx-auto px-4 py-12">
          <h3 className="text-3xl font-semibold mb-6 text-gray-800">Experience</h3>
          <div className="space-y-6">
            {portfolioData.experience.map((exp, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4">
                <h4 className="text-2xl font-semibold text-gray-800">{exp.role}</h4>
                <p className="text-gray-600">{exp.company} | {exp.duration}</p>
                <p className="mt-2 text-gray-700">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {portfolioData.projects?.length > 0 && (
        <section id="projects" className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h3 className="text-3xl font-semibold mb-6 text-gray-800">Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {portfolioData.projects.map((project, index) => (
                <div key={index} className="border rounded shadow hover:shadow-lg transition p-4">
                  <h4 className="text-2xl font-semibold text-gray-800">{project.title}</h4>
                  <p className="mt-2 text-gray-700">{project.description}</p>
                  {project.technologies && (
                    <p className="mt-2 text-gray-600">
                      <span className="font-semibold">Technologies:</span> {project.technologies}
                    </p>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-blue-500 hover:underline">
                      View Project
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Education */}
      {portfolioData.education?.length > 0 && (
        <section id="education" className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h3 className="text-3xl font-semibold mb-6 text-gray-800">Education</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {portfolioData.education.map((education, index) => (
                <div key={index} className="border rounded shadow hover:shadow-lg transition p-4">
                  <h4 className="text-2xl font-semibold text-gray-800">{education.degree}</h4>
                  <p className="mt-2 text-gray-700">{education.institution}</p>
                  {education.end_year && (
                    <p className="mt-2 text-gray-600"><span className="font-semibold">Passout:</span> {education.end_year}</p>
                  )}
                  {education.location && (
                    <p className="mt-2 text-gray-600"><span className="font-semibold">Location:</span> {education.location}</p>
                  )}
                  {education.percentage && (
                    <p className="mt-2 text-gray-600"><span className="font-semibold">Percentage:</span> {education.percentage}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact */}
      {(portfolioData.email || portfolioData.phone) && (
        <section id="contact" className="max-w-7xl mx-auto px-4 py-12">
          <h3 className="text-3xl font-semibold mb-6 text-gray-800">Contact</h3>
          <p className="text-gray-700 mb-4">Feel free to reach out for collaborations or just a friendly hello!</p>
          <div className="flex flex-col md:flex-row items-center">
            {portfolioData.email && (
              <a href={`mailto:${portfolioData.email}`} className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 mr-4 mb-4 md:mb-0">Email Me</a>
            )}
            {portfolioData.phone && (
              <a href={`tel:${portfolioData.phone}`} className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600">Call Me</a>
            )}
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} {portfolioData.name || "Portfolio"}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
