'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';

const stats = [
  { label: 'Total Users', value: 12, color: 'text-blue-600' },
  { label: 'Files Uploaded', value: 8, color: 'text-green-600' },
  { label: 'Active Portfolios', value: 5, color: 'text-purple-600' },
];

const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', city: 'New York', createdAt: '2025-04-01' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', city: 'Los Angeles', createdAt: '2025-04-03' },
];

const Dashboard = () => {
  const [feedbacks, setFeedbacks] = useState([]); // State to store feedbacks

  // Fetch feedbacks from the backend
  useEffect(() => {
    axios.get('http://localhost:5500/api/feedback')
      .then(res => setFeedbacks(res.data))
      .catch(() => setFeedbacks([]));
  }, []);

  const handleEdit = (id) => {
    alert(`Edit user with ID: ${id}`);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6">
        <h2 className="text-2xl font-bold mb-8 text-indigo-700">Dashboard</h2>
        <ul className="space-y-4">
          <li>
            <Link href="/" className="text-gray-700 hover:text-indigo-600 font-medium">
              Home
            </Link>
          </li>
          <li>
            <Link href="/Manage-user" className="text-gray-700 hover:text-indigo-600 font-medium">
              Manage Users
            </Link>
          </li>
          <li>
            <Link href="/user/builder" className="text-gray-700 hover:text-indigo-600 font-medium">
              Upload Files
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className="text-gray-700 hover:text-indigo-600 font-medium">
              Portfolios
            </Link>
          </li>
          <li>
            <Link href="/FeedbackForm" className="text-gray-700 hover:text-indigo-600 font-medium">
              Submit Feedback
            </Link>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Admin Dashboard</h1>
          <p className="text-gray-600">Here's what's going on in your platform right now.</p>
        </header>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-700">{stat.label}</h3>
              <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Feedback Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-indigo-700">User Feedbacks</h2>
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

        {/* User Management Section */}
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
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-700">{user.id}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{user.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{user.email}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{user.city}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{user.createdAt}</td>
                    <td className="px-6 py-4 text-sm">
                      <button
                        className="text-indigo-600 hover:text-indigo-800"
                        onClick={() => handleEdit(user.id)}
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
      </main>
    </div>
  );
};

export default Dashboard;
