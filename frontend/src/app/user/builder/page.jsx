'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter
import axios from 'axios';
import Portfolio from '@/app/portfolio/page';
import Portfolio2 from '@/app/portfolio2/page';
import Portfolio3 from '@/app/portfolio3/page';
import Portfolio4 from '@/app/portfolio4/page';
import Portfolio5 from '@/app/portfolio5/page';
import Portfolio6 from '@/app/portfolio6/page';
import {
  IconUpload,
  IconSwitchHorizontal,
  IconExternalLink,
  IconChevronDown,
  IconChevronUp,
  IconDeviceFloppy,
  IconEye, // Correct icon for "Save"
} from '@tabler/icons-react';
import Link from 'next/link';

const PortfolioBuilder = () => {
  const router = useRouter(); // Initialize router for navigation
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [portfolioData, setPortfolioData] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState('Portfolio');
  const [isTemplateSelectorOpen, setIsTemplateSelectorOpen] = useState(false);
  const [savedPortfolioId, setSavedPortfolioId] = useState('');

  useEffect(() => {
    const savedTemplate = localStorage.getItem('selectedTemplate');
    if (savedTemplate) {
      setSelectedTemplate(savedTemplate);
    }

    const savedData = localStorage.getItem('extractedData');
    if (savedData) {
      setPortfolioData(JSON.parse(savedData));
    }
  }, []);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      alert('Please select a PDF file.');
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append('pdf', file);

    axios
      .post('http://localhost:5500/upload-pdf', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((result) => {
        if (result.data && typeof result.data === 'object') {
          setResponse(result.data);
          setPortfolioData(result.data);
          localStorage.setItem('extractedData', JSON.stringify(result.data));
        } else {
          throw new Error('Invalid response format from server');
        }
      })
      .catch((error) => {
        console.log('Error:', error.response?.data || error.message);
        alert(error.response?.data?.error || 'Failed to process PDF');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleSave = () => {
    if (!file) {
      alert('Please upload your resume.');
      return;
    }

    const token = localStorage.getItem('user');
    // const websiteCode = getGeneratedCode();

    axios
      .post(
        'http://localhost:5500/api/portfolio/save-portfolio',
        {
          resumeFile: file.name, // or the path/url after upload
          portfolioData,
          template: selectedTemplate,
          isPublished: false,
        },
        {
          headers: {
            'x-auth-token': token,
          },
        }
      )
      .then((response) => {
        alert('Portfolio saved successfully!');
        setSavedPortfolioId(response.data._id);
        // router.push('/user/dashboard');
      })
      .catch((error) => {
        console.error('Error saving portfolio:', error.response?.data || error.message);
        alert('Failed to save portfolio.');
      });
  };

  const openPortfolioInNewTab = () => {
    const templateUrls = {
      Portfolio: '/portfolio',
      Portfolio2: '/portfolio2',
      Portfolio3: '/portfolio3',
      Portfolio4: '/portfolio4',
      Portfolio5: '/portfolio5',
      Portfolio6: '/portfolio6',
    };
    window.open(templateUrls[selectedTemplate], '_blank');
  };

  const handleTemplateChange = (template) => {
    setSelectedTemplate(template);
    localStorage.setItem('selectedTemplate', template);
  };

  const toggleTemplateSelector = () => {
    setIsTemplateSelectorOpen(!isTemplateSelectorOpen);
  };

  const getGeneratedCode = () => {
    // You should replace this with actual code extraction logic
    // For example, you might serialize the selected template's JSX or HTML
    return `<html><body><h1>${portfolioData?.name || ''}</h1></body></html>`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-4xl bg-white shadow-2xl rounded-lg p-10">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-8 flex items-center gap-3">
            <IconUpload size={32} className="text-blue-600" />
            Upload Your Resume
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="relative">
              {/* Hidden file input */}
              <input
                type="file"
                accept="application/pdf"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              {/* Styled button */}
              <button
                type="button"
                className="px-6 py-3 rounded-lg text-white font-semibold bg-blue-600 hover:bg-blue-700 flex items-center justify-center gap-2 shadow-md"
              >
                <IconUpload size={24} />
                Choose File
              </button>
            </div>
            {/* Display selected file name */}
            {file && (
              <p className="text-gray-700 font-medium">
                Selected File: <span className="font-semibold">{file.name}</span>
              </p>
            )}
            <button
              type="submit"
              className={`px-6 py-3 rounded-lg text-white font-semibold flex items-center justify-center gap-2 shadow-md ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                }`}
              disabled={loading}
            >
              <IconUpload size={24} />
              {loading ? 'Uploading...' : 'Upload'}
            </button>

          </form>

          <div className="mt-8">
            <button
              onClick={toggleTemplateSelector}
              className="flex items-center gap-2 text-gray-700 font-semibold mb-4"
            >
              {isTemplateSelectorOpen ? (
                <>
                  <IconChevronUp size={24} />
                  Hide Template Selector
                </>
              ) : (
                <>
                  <IconChevronDown size={24} />
                  Show Template Selector
                </>
              )}
            </button>

            {isTemplateSelectorOpen && (
              <div className="grid grid-cols-2 gap-6">
                {[
                  { name: 'Portfolio', label: 'Portfolio' },
                  { name: 'Portfolio2', label: 'Portfolio 2' },
                  { name: 'Portfolio3', label: 'Portfolio 3' },
                  { name: 'Portfolio4', label: 'Portfolio 4' },
                  { name: 'Portfolio5', label: 'Portfolio 5' },
                  { name: 'Portfolio6', label: 'Portfolio 6' },
                ].map((template) => (
                  <button
                    key={template.name}
                    onClick={() => handleTemplateChange(template.name)}
                    className={`p-4 border rounded-lg text-center font-semibold shadow-md ${selectedTemplate === template.name
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                  >
                    {template.label}
                  </button>

                ))}
              </div>
            )}
          </div>

          {response && (
            <div className="mt-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Structured Data</h2>
              {portfolioData && (
                <div className="flex flex-col gap-6">
                  <div className="flex gap-4">
                    <button
                      onClick={openPortfolioInNewTab}
                      className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-800 flex items-center gap-2 shadow-md"
                    >
                      <IconExternalLink size={24} />
                      Open Portfolio in New Tab
                    </button>
                    <button
                      onClick={handleSave}
                      className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 flex items-center gap-2 shadow-md"
                    >
                      <IconDeviceFloppy size={24} />
                      Save Portfolio
                    </button>
                    {
                      savedPortfolioId && (

                        <Link
                          href={`/user/preview/${savedPortfolioId}`}
                          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 flex items-center gap-2 shadow-md"
                        >
                          <IconEye size={24} />
                          Preview
                        </Link>
                      )
                    }
                  </div>

                  <div className="mt-6">
                    {selectedTemplate === 'Portfolio' && <Portfolio portfolioData={portfolioData} />}
                    {selectedTemplate === 'Portfolio2' && <Portfolio2 portfolioData={portfolioData} />}
                    {selectedTemplate === 'Portfolio3' && <Portfolio3 portfolioData={portfolioData} />}
                    {selectedTemplate === 'Portfolio4' && <Portfolio4 portfolioData={portfolioData} />}
                    {selectedTemplate === 'Portfolio5' && <Portfolio5 portfolioData={portfolioData} />}
                    {selectedTemplate === 'Portfolio6' && <Portfolio6 portfolioData={portfolioData} />}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioBuilder;