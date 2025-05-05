'use client';
import axios from 'axios';
import React, { useEffect } from 'react';
import toast from 'react-hot-toast';

const ManageUser = () => {
  const [userData, setUserData] = React.useState([]);

  const fetchUserData = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/getall`);
      console.table(res.data);
      setUserData(res.data);
    } catch (error) {
      toast.error('Failed to fetch user data');
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const deleteUser = async (id) => {
    try {
      const res = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/user/delete/${id}`);
      if (res.status === 200) {
        toast.success('User Deleted Successfully');
        fetchUserData();
      } else {
        toast.error('Failed to delete user');
      }
    } catch (error) {
      toast.error('Failed to connect');
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Manage Users</h1>

        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="p-4 border border-gray-300">ID</th>
                <th className="p-4 border border-gray-300">Name</th>
                <th className="p-4 border border-gray-300">Email</th>
                <th className="p-4 border border-gray-300">City</th>
                <th className="p-4 border border-gray-300">Created At</th>
                <th className="p-4 border border-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user) => (
                <tr key={user._id} className="text-center bg-gray-50 hover:bg-gray-100">
                  <td className="p-4 border border-gray-300">{user._id}</td>
                  <td className="p-4 border border-gray-300">{user.name}</td>
                  <td className="p-4 border border-gray-300">{user.email}</td>
                  <td className="p-4 border border-gray-300">{user.city}</td>
                  <td className="p-4 border border-gray-300">
                    {new Date(user.createdAt).toLocaleDateString()}
                  </td>
                  <td className="p-4 border border-gray-300">
                    <button
                      onClick={() => deleteUser(user._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUser;