'use client';

import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const AdminLogin = () => {
  const router = useRouter();

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'At least 6 characters').required('Required'),
  });

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/admin/authenticate`, values);
        localStorage.setItem('adminToken', res.data.token);
        toast.success('Admin login successful');
        router.push('/admin/dashboard');
      } catch (err) {
        toast.error('Invalid admin credentials');
      }
    },
  });

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form onSubmit={formik.handleSubmit} className="bg-white p-8 rounded-xl shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Admin Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Admin Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className={`w-full p-3 mb-3 rounded-lg border ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'}`}
        />
        {formik.touched.email && formik.errors.email && (
          <p className="text-red-500 text-sm mb-3">{formik.errors.email}</p>
        )}

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          className={`w-full p-3 mb-3 rounded-lg border ${formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-gray-300'}`}
        />
        {formik.touched.password && formik.errors.password && (
          <p className="text-red-500 text-sm mb-3">{formik.errors.password}</p>
        )}

        <button
          type="submit"
          className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition"
        >
          Login as Admin
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
