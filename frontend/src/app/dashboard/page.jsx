'use client';
import React from 'react';
import Link from 'next/link';

const Dashboard = () => {
  // Example of users data, this should come from your API or state management
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', city: 'New York', createdAt: '2025-04-01' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', city: 'Los Angeles', createdAt: '2025-04-03' },
    // Add more user objects as necessary
  ];

  const handleEdit = (id) => {
    // Handle the edit button click (redirect, modal, etc.)
    alert(`Edit user with ID: ${id}`);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-4">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>
        <ul className="space-y-4">
          <li><Link href="/dashboard" className="text-blue-600">Home</Link></li>
          <li><Link href="/Manage-user" className="text-blue-600">Manage Users</Link></li>
          <li><Link href="/user/builder" className="text-blue-600">Upload Files</Link></li>
          <li><Link href="/portfolio" className="text-blue-600">Portfolios</Link></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6">
        <h1 className="text-2xl font-semibold mb-4">Welcome to Your Dashboard</h1>
        
        {/* User Management Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold">Manage Users</h2>
          
          {/* Users Table */}
          <div className="overflow-x-auto mt-4">
            <table className="min-w-full table-auto border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2 border">ID</th>
                  <th className="px-4 py-2 border">Name</th>
                  <th className="px-4 py-2 border">Email</th>
                  <th className="px-4 py-2 border">City</th>
                  <th className="px-4 py-2 border">Created At</th>
                  <th className="px-4 py-2 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* Loop through users */}
                {users.map(user => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="px-4 py-2 border">{user.id}</td>
                    <td className="px-4 py-2 border">{user.name}</td>
                    <td className="px-4 py-2 border">{user.email}</td>
                    <td className="px-4 py-2 border">{user.city}</td>
                    <td className="px-4 py-2 border">{user.createdAt}</td>
                    <td className="px-4 py-2 border">
                      {/* Edit Button */}
                      <button
                        className="text-blue-500 hover:bg-blue-100 px-3 py-1 rounded transition duration-200 ease-in-out"
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
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow rounded-lg p-4">
            <h3 className="text-lg font-bold">Users</h3>
            <p className="text-2xl">12</p>
          </div>
          <div className="bg-white shadow rounded-lg p-4">
            <h3 className="text-lg font-bold">Files Uploaded</h3>
            <p className="text-2xl">8</p>
          </div>
          <div className="bg-white shadow rounded-lg p-4">
            <h3 className="text-lg font-bold">Active Portfolios</h3>
            <p className="text-2xl">5</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
