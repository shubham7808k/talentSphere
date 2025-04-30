import React, { useState } from "react";

// Mock function to simulate Google API enhancement (replace with real API call)
const enhanceResumeWithGoogleAPI = async (resumeText) => {
  // Replace with real API call using fetch and Google API key
  return `Enhanced Resume:\n\n${resumeText}\n\n[Enhanced by Google AI]`;
};

const ResumeEnhancer = () => {
  const [resumeText, setResumeText] = useState("");
  const [enhancedText, setEnhancedText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];

    if (file && file.type === "text/plain") {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const text = e.target.result;
        setResumeText(text);

        setLoading(true);
        const enhanced = await enhanceResumeWithGoogleAPI(text);
        setEnhancedText(enhanced);
        setLoading(false);
      };
      reader.readAsText(file);
    } else {
      alert("Please upload a plain text (.txt) version of your resume.");
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Resume Enhancer</h2>

      <input
        type="file"
        accept=".txt"
        onChange={handleFileUpload}
        className="mb-4"
      />

      {loading && <p className="text-blue-600">Enhancing resume with Google API...</p>}

      {enhancedText && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Enhanced Resume</h3>
          <pre className="bg-gray-100 p-4 rounded text-sm whitespace-pre-wrap">{enhancedText}</pre>
        </div>
      )}
    </div>
  );
};

export default ResumeEnhancer;
