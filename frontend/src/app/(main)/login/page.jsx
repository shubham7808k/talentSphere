'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import toast from 'react-hot-toast';

import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaLock } from 'react-icons/fa';

const Login = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [shake, setShake] = useState(false); // 👈 Add shake state for error

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/authenticate`, values)
        .then((result) => {
          localStorage.setItem('user', result.data.token);
          toast.success('Login successful');
          router.push('/user/builder');
        })
        .catch(() => {
          setShake(true); // trigger shake on error
          setTimeout(() => setShake(false), 500);
          setShowModal(true); // show modal
        })
        .finally(() => setSubmitting(false));
    },
  });

  const handleRedirect = (hasAccount) => {
    setShowModal(false);
    if (!hasAccount) router.push('/signup');
  };

  useEffect(() => {
    document.body.style.overflow = showModal ? 'hidden' : 'auto';
    return () => (document.body.style.overflow = 'auto');
  }, [showModal]);

  return (
    <div
  className="min-h-screen w-full bg-gradient-to-br from-slate-100 to-blue-200 flex flex-col items-center justify-center overflow-hidden"
  style={{ backgroundImage: 'url("https://img.freepik.com/free-photo/abstract-minimal-concept-plant-shadows_23-2148835269.jpg?t=st=1742147754~exp=1742151354~hmac=5a3cfa9f5d79e011acc9f50075a5bba8b82d27668916380ebb235d2364375745&w=826")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
     }}
>

      {/* Page Heading */}
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Login</h1>

      {/* Login Form Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`bg-white/50 backdrop-blur-lg p-10 rounded-xl shadow-2xl w-full max-w-md ${
          shake ? 'animate-shake' : ''
        }`}
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Welcome Back 👋</h2>
        <form onSubmit={formik.handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <div className="relative">
              <FaEnvelope className="absolute top-3 left-3 text-gray-500" />
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className={`pl-10 mt-1 w-full rounded-md bg-white/70 px-4 py-2 text-sm text-gray-800 border ${
                  formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-slate-500`}
              />
            </div>
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
              <FaLock className="absolute top-3 left-3 text-gray-500" />
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Your password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className={`pl-10 mt-1 w-full rounded-md bg-white/70 px-4 py-2 text-sm text-gray-800 border ${
                  formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-slate-500`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2 text-sm text-gray-600 hover:text-gray-900"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-xs mt-1">{formik.errors.password}</p>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={formik.isSubmitting}
            className={`w-full py-2 px-4 rounded-md text-white font-semibold transition ${
              formik.isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-slate-600 hover:bg-slate-700'
            }`}
          >
            {formik.isSubmitting ? 'Signing in...' : 'Sign In'}
          </motion.button>
        </form>
      </motion.div>

      {/* 💬 Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-6 rounded-lg shadow-xl text-center max-w-sm w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Account Not Found</h3>
              <p className="mb-4 text-gray-600">Do you already have an account?</p>
              <div className="flex justify-center gap-4">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleRedirect(false)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  No, Sign Up
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleRedirect(true)}
                  className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
                >
                  Yes, Try Again
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* TailwindCSS custom animation */}
      <style jsx>{`
        .animate-shake {
          animation: shake 0.4s linear;
        }
        @keyframes shake {
          0% { transform: translateX(0); }
          25% { transform: translateX(-8px); }
          50% { transform: translateX(8px); }
          75% { transform: translateX(-8px); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default Login;
