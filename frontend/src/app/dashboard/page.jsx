'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Dashboard = () => {
  // Example data for stats and users
  const stats = [
    { label: 'Total Users', value: 12, color: 'text-blue-600' },
    { label: 'Files Uploaded', value: 8, color: 'text-green-600' },
    { label: 'Active Portfolios', value: 5, color: 'text-purple-600' },
  ];

  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', city: 'New York', createdAt: '2025-04-01' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', city: 'Los Angeles', createdAt: '2025-04-03' },
  ]);

  const handleEdit = (id) => {
    alert(`Edit user with ID: ${id}`);
    // Add your edit logic here (e.g., open a modal or navigate to an edit page)
  };

  const handleDelete = (id) => {
    const confirmDelete = confirm(`Are you sure you want to delete user with ID: ${id}?`);
    if (confirmDelete) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6">
        <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
        <ul className="space-y-4">
          <li><Link href="/dashboard" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link></li>
          <li><Link href="/Manage-user" className="text-gray-700 hover:text-blue-600 font-medium">Manage Users</Link></li>
          <li><Link href="/user/builder" className="text-gray-700 hover:text-blue-600 font-medium">Upload Files</Link></li>
          <li><Link href="/portfolio" className="text-gray-700 hover:text-blue-600 font-medium">Portfolios</Link></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Ecommerce Dashboard</h1>
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

        {/* User Management Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Manage Users</h2>
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
                    <td className="px-6 py-4 text-sm flex gap-2">
                      <button
                        className="text-blue-500 hover:text-blue-700"
                        onClick={() => handleEdit(user.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => handleDelete(user.id)}
                      >
                        Delete
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
