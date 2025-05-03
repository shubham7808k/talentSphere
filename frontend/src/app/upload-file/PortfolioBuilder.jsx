import React, { useState } from 'react';

function PortfolioBuilder() {
  const [resumeText, setResumeText] = useState('');
  const [enhancedData, setEnhancedData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = async (e) => {
        const text = e.target.result;
        setResumeText(text);
      };

      reader.readAsText(file); // Assumes TXT or readable text from PDF
    }
  };

  const enhanceResume = async () => {
    setLoading(true);
    const prompt = `Enhance this resume in a professional way and return key data such as name, title, summary, skills, projects, and experience as JSON:
    
    ${resumeText}`;

    const response = await fetch(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      }
    );

    const data = await response.json();
    try {
      const content = data.candidates[0].content.parts[0].text;
      const jsonStart = content.indexOf('{');
      const jsonString = content.slice(jsonStart);
      const enhanced = JSON.parse(jsonString);
      setEnhancedData(enhanced);
    } catch (err) {
      alert('Could not parse response. Try with a simpler resume.');
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <div className="p-6 font-sans max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">AI Resume Enhancer & Portfolio Generator</h1>
      <input type="file" accept=".txt,.md,.pdf" onChange={handleFileUpload} />
      <button
        className="ml-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={enhanceResume}
        disabled={loading || !resumeText}
      >
        {loading ? 'Enhancing...' : 'Enhance Resume & Generate Portfolio'}
      </button>

      {enhancedData && (
        <div className="mt-8 bg-gray-100 p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-2">{enhancedData.name}</h2>
          <p className="text-gray-600 italic">{enhancedData.title}</p>
          <p className="mt-4">{enhancedData.summary}</p>

          <div className="mt-4">
            <h3 className="font-bold">Skills:</h3>
            <ul className="list-disc list-inside">
              {enhancedData.skills?.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="font-bold">Projects:</h3>
            <ul className="list-disc list-inside">
              {enhancedData.projects?.map((proj, index) => (
                <li key={index}>{proj}</li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="font-bold">Experience:</h3>
            <ul className="list-disc list-inside">
              {enhancedData.experience?.map((exp, index) => (
                <li key={index}>{exp}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default PortfolioBuilder;
