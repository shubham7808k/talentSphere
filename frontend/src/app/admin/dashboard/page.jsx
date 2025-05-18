'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import Navbar from '../Navbar';

const Dashboard = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [stats, setStats] = useState({
    totalUsers: 0,
    filesUploaded: 0,
    activePortfolios: 0,
  });
  const [users, setUsers] = useState([]);
  const [showFeedbackSection, setShowFeedbackSection] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5500/api/feedback')
      .then(res => setFeedbacks(res.data))
      .catch(() => setFeedbacks([]));
    setIsSignedIn(!!localStorage.getItem('user'));

    axios.get('http://localhost:5500/api/admin/stats')
      .then(res => setStats(res.data))
      .catch(() => setStats({ totalUsers: 0, filesUploaded: 0, activePortfolios: 0 }));

    axios.get('http://localhost:5500/api/admin/users')
      .then(res => setUsers(res.data))
      .catch(() => setUsers([]));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsSignedIn(false);
    window.location.href = '/admin-login';
  };

  const statsArray = [
    { label: 'Total Users', value: stats.totalUsers, color: 'text-blue-600' },
    { label: 'Files Uploaded', value: stats.filesUploaded, color: 'text-green-600' },
    { label: 'Active Portfolios', value: stats.activePortfolios, color: 'text-purple-600' },
    { label: 'Total Feedbacks', value: feedbacks.length, color: 'text-yellow-600' },
  ];

  const handleEdit = (id) => {
    alert(`Edit user with ID: ${id}`);
  };

  return (
    <div className="fixed inset-0 flex flex-col bg-gradient-to-br from-blue-50 to-blue-100">
      <Navbar onFeedbackClick={() => setShowFeedbackSection(true)} />
      <div className="flex flex-1 min-h-0">
        {/* Sidebar */}
        <aside className="w-72 bg-white shadow-lg p-8 flex flex-col justify-between h-full">
          <div>
            <h2 className="text-3xl font-extrabold mb-10 text-indigo-700 tracking-tight">Admin Panel</h2>
            <ul className="space-y-5">
              <li>
                <Link href="/" className="text-gray-700 hover:text-indigo-600 font-medium transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/admin/manage-user" className="text-gray-700 hover:text-indigo-600 font-medium transition">
                  Manage Users
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-700 hover:text-indigo-600 font-medium transition">
                  Portfolios
                </Link>
              </li>
              <li>
                <button
                  className="text-gray-700 hover:text-indigo-600 font-medium transition w-full text-left"
                  onClick={() => setShowFeedbackSection(true)}
                >
                  User Feedback
                </button>
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
          {/* Header */}
          <header className="mb-10 text-center">
            <h1 className="text-4xl font-extrabold text-gray-800 mb-2">Admin Dashboard</h1>
            <p className="text-gray-600 text-lg">Here's what's going on in your platform right now.</p>
          </header>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {statsArray.map((stat, index) => (
              <div key={index} className="bg-white shadow rounded-xl p-8 flex flex-col items-center">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">{stat.label}</h3>
                <p className={`text-4xl font-extrabold ${stat.color}`}>{stat.value}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mb-12">
            <button
              onClick={() => {
                axios.get('http://localhost:5500/api/admin/stats')
                  .then(res => setStats(res.data));
                axios.get('http://localhost:5500/api/admin/users')
                  .then(res => setUsers(res.data));
              }}
              className="px-6 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 font-semibold transition"
            >
              Refresh Stats
            </button>
          </div>

          {/* Feedback Section */}
          {showFeedbackSection && (
            <section className="mb-12">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-indigo-700">User Feedbacks</h2>
                <button
                  className="text-sm text-gray-500 hover:text-gray-800"
                  onClick={() => setShowFeedbackSection(false)}
                >
                  Close
                </button>
              </div>
              <p className="mb-4 text-lg text-gray-700">
                Total Feedbacks: <span className="font-bold text-indigo-700">{feedbacks.length}</span>
              </p>
              {feedbacks.length === 0 ? (
                <p className="text-gray-500">No feedbacks yet.</p>
              ) : (
                <div className="space-y-6">
                  {feedbacks.map((fb, idx) => (
                    <div key={fb._id || idx} className="border-b pb-4">
                      <div className="flex items-center gap-4 mb-2">
                        <span className="font-semibold text-indigo-600">{fb.name}</span>
                        <span className="text-gray-400 text-sm">{fb.email}</span>
                        <span className="ml-auto text-yellow-500 font-bold">Rating: {fb.rating}</span>
                      </div>
                      <div className="text-gray-700 mb-1">{fb.message}</div>
                      <div className="text-xs text-gray-400">{new Date(fb.createdAt).toLocaleString()}</div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          )}

          {/* User Management Section */}
          {!showFeedbackSection && (
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Latest Users</h2>
              <div className="overflow-x-auto bg-white shadow rounded-lg">
                <table className="min-w-full table-auto border-collapse">
                  <thead>
                    <tr className="bg-gray-100 text-gray-700">
                      <th className="px-6 py-3 text-left text-sm font-medium">ID</th>
                      <th className="px-6 py-3 text-left text-sm font-medium">Name</th>
                      <th className="px-6 py-3 text-left text-sm font-medium">Email</th>
                      <th className="px-6 py-3 text-left text-sm font-medium">City</th>
                      <th className="px-6 py-3 text-left text-sm font-medium">Created At</th>
                      <th className="px-6 py-3 text-left text-sm font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user._id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm text-gray-700">{user._id}</td>
                        <td className="px-6 py-4 text-sm text-gray-700">{user.name}</td>
                        <td className="px-6 py-4 text-sm text-gray-700">{user.email}</td>
                        <td className="px-6 py-4 text-sm text-gray-700">{user.city || '-'}</td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          {user.createdAt ? new Date(user.createdAt).toLocaleString() : '-'}
                        </td>
                        <td className="px-6 py-4 text-sm">
                          <button
                            className="text-indigo-600 hover:text-indigo-800"
                            onClick={() => handleEdit(user._id)}
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
