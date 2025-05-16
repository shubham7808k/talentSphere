'use client';
import axios from 'axios';
import React, { useEffect } from 'react';
import toast from 'react-hot-toast';

const ManageUser = () => {
  const [userData, setUserData] = React.useState([]);

  const fetchUserData = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/getall`);
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col">
      <div className="w-full py-12 px-4 flex-1">
        <h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-10 drop-shadow">
          Manage Users
        </h1>
        <div className="overflow-x-auto bg-white/80 shadow-2xl rounded-2xl border border-gray-200">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-indigo-100 text-indigo-700">
                <th className="p-4 font-semibold">ID</th>
                <th className="p-4 font-semibold">Name</th>
                <th className="p-4 font-semibold">Email</th>
                <th className="p-4 font-semibold">City</th>
                <th className="p-4 font-semibold">Created At</th>
                <th className="p-4 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {userData.length === 0 ? (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-gray-500">
                    No users found.
                  </td>
                </tr>
              ) : (
                userData.map((user) => (
                  <tr
                    key={user._id}
                    className="text-center bg-white even:bg-blue-50 hover:bg-blue-100 transition"
                  >
                    <td className="p-4">{user._id}</td>
                    <td className="p-4 font-medium text-gray-800">{user.name}</td>
                    <td className="p-4 text-blue-700">{user.email}</td>
                    <td className="p-4">{user.city || '-'}</td>
                    <td className="p-4">
                      {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : '-'}
                    </td>
                    <td className="p-4">
                      <button
                        onClick={() => deleteUser(user._id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold shadow transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUser;