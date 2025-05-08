'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

const Login = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

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
        .catch((err) => {
          toast.error('Login failed. Please check your credentials.');
          router.push('/signup');
        })
        .finally(() => setSubmitting(false));
    },
  });

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage:
          'url("https://img.freepik.com/free-photo/abstract-minimal-concept-plant-shadows_23-2148835269.jpg?t=st=1742147754~exp=1742151354~hmac=5a3cfa9f5d79e011acc9f50075a5bba8b82d27668916380ebb235d2364375745&w=826")',
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white/30 backdrop-blur-md shadow-xl rounded-xl p-10 w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>
        <form onSubmit={formik.handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={`mt-1 w-full rounded-md bg-white/70 px-4 py-2 text-sm text-gray-800 border ${
                formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-slate-500`}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Your password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className={`mt-1 w-full rounded-md bg-white/70 px-4 py-2 text-sm text-gray-800 border ${
                formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-slate-500`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-8 text-sm text-gray-600 hover:text-gray-900"
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-xs mt-1">{formik.errors.password}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={formik.isSubmitting}
            className={`w-full py-2 px-4 rounded-md text-white font-semibold transition ${
              formik.isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-slate-600 hover:bg-slate-700'
            }`}
          >
            {formik.isSubmitting ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        {/* Terms */}
        <p className="text-xs text-center text-gray-700 mt-6">
          By signing in, you agree to our{' '}
          <a href="#" className="underline">Terms</a> and{' '}
          <a href="#" className="underline">Privacy Policy</a>.
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
