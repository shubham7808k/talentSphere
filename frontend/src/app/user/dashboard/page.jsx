'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import DashboardNavbar from '@/components/DashboardNavbar';

const Dashboard = () => {
  const [portfolios, setPortfolios] = useState([]);
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [showCodeModal, setShowCodeModal] = useState(false);
  const [currentCode, setCurrentCode] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('user');
    if (!token) {
      alert('Please login first.');
      setIsSignedIn(false);
      return;
    }
    axios.get('http://localhost:5500/api/portfolio/user-portfolios', {
      headers: { 'x-auth-token': token }
    })
    .then((response) => setPortfolios(response.data))
    .catch((error) => {
      console.error('Error fetching portfolios:', error.response?.data || error.message);
    });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsSignedIn(false);
    window.location.href = '/login';
  };

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(currentCode);
      alert('Code copied to clipboard!');
    } catch {
      alert('Failed to copy code.');
    }
  };

  if (!isSignedIn) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="bg-white p-10 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-indigo-700">You have been signed out</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 flex flex-col bg-gradient-to-br from-blue-50 to-blue-100">
      <DashboardNavbar />
      <div className="flex flex-1 min-h-0">
        {/* Sidebar */}
        <aside className="w-72 bg-white shadow-lg p-8 flex flex-col justify-between h-full">
          <div>
            <h2 className="text-3xl font-extrabold mb-10 text-indigo-700 tracking-tight">User Panel</h2>
            <ul className="space-y-5">
              <li>
                <Link href="/" className="text-gray-700 hover:text-indigo-600 font-medium transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-700 hover:text-indigo-600 font-medium transition">
                  My Portfolios
                </Link>
              </li>
              <li>
                <Link href="/user/builder" className="text-gray-700 hover:text-indigo-600 font-medium transition">
                  Upload File
                </Link>
              </li>
              <li>
                <Link href="/FeedbackForm" className="text-gray-700 hover:text-indigo-600 font-medium transition">
                  Submit Feedback
                </Link>
              </li>
            </ul>
          </div>
          <button
            onClick={handleLogout}
            className="mt-10 w-full py-2 rounded-md font-semibold transition bg-red-500 text-white hover:bg-red-600"
          >
            Logout
          </button>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-10 overflow-y-auto h-full bg-transparent">
          <header className="mb-10 text-center">
            <h1 className="text-4xl font-extrabold text-gray-800 mb-2">User Dashboard</h1>
            <p className="text-gray-600 text-lg">Manage your portfolios and account here.</p>
          </header>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-blue-700">Your Portfolios</h2>
            {portfolios.length === 0 ? (
              <p className="text-gray-600">No portfolios found.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolios.map((portfolio, idx) => (
                  <section key={portfolio._id || idx} className="bg-white/90 p-6 rounded-xl shadow-lg border border-indigo-100">
                    <p><strong>Resume File:</strong> {portfolio.resumeFile}</p>
                    <p><strong>Website Code:</strong> {portfolio.websiteCode ? 'Available' : 'Not generated'}</p>
                    <p><strong>Published:</strong> {portfolio.isPublished ? 'Yes' : 'No'}</p>
                    <p><strong>Created At:</strong> {portfolio.createdAt ? new Date(portfolio.createdAt).toLocaleString() : 'N/A'}</p>
                    <div className="flex gap-2 mt-4">
                      <button
                        onClick={() => {
                          if (portfolio.websiteCode) {
                            setCurrentCode(portfolio.websiteCode);
                            setShowCodeModal(true);
                          } else {
                            window.alert('No code generated for this portfolio.');
                          }
                        }}
                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                      >
                        View Code
                      </button>
                      <button
                        onClick={async () => {
                          const token = localStorage.getItem('user');
                          try {
                            await axios.put(
                              `http://localhost:5500/api/portfolio/update-portfolio/${portfolio._id}`,
                              { isPublished: !portfolio.isPublished },
                              { headers: { 'x-auth-token': token }
                            });
                            // Refresh portfolios after update
                            const res = await axios.get('http://localhost:5500/api/portfolio/user-portfolios', {
                              headers: { 'x-auth-token': token }
                            });
                            setPortfolios(res.data);
                          } catch (err) {
                            window.alert('Failed to update publish status.');
                          }
                        }}
                        className={`py-2 px-4 rounded-md text-white ${portfolio.isPublished ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-green-500 hover:bg-green-600'}`}
                      >
                        {portfolio.isPublished ? 'Unpublish' : 'Publish'}
                      </button>
                    </div>
                  </section>
                ))}
              </div>
            )}
          </div>

          {/* Modal for Viewing Code */}
          {showCodeModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
              <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-6 relative">
                <h3 className="text-lg font-bold mb-4 text-indigo-700">Portfolio HTML & CSS Code</h3>
                <pre className="bg-gray-100 p-4 rounded overflow-x-auto max-h-96 text-xs">
                  {currentCode}
                </pre>
                <div className="flex justify-end gap-2 mt-4">
                  <button
                    onClick={handleCopyCode}
                    className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                  >
                    Copy to Clipboard
                  </button>
                  <button
                    onClick={() => setShowCodeModal(false)}
                    className="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-500"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
