'use client'
import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { LineSpinner } from 'ldrs/react'
import 'ldrs/react/LineSpinner.css'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast' 
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa'

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .required('Required')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-z]/, 'Lowercase is required')
    .matches(/[A-Z]/, 'Uppercase is required')
    .matches(/[0-9]/, 'Number is required')
    .matches(/[\W]/, 'Special character is required'),
  confirmPassword: Yup.string()
    .required('Required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

const Signup = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [shake, setShake] = useState(false);

  const signupForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: SignupSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/add`, values);
        toast.success('User Registered Successfully');
        resetForm();
        router.push('/login');
      } catch (error) {
        setSubmitting(false);
        setShake(true);
        setTimeout(() => setShake(false), 500);
        setShowModal(true);
        toast.error('User Registration Failed');
      }
    }
  });

  const handleRedirect = (hasAccount) => {
    setShowModal(false);
    if (hasAccount) router.push('/login');
  };

  return (
    <div
      className="min-h-screen w-full bg-gradient-to-br from-slate-100 to-blue-200 flex flex-col items-center justify-center overflow-hidden"
      style={{
<<<<<<< HEAD
        //backgroundImage: 'url("https://img.freepik.com/free-photo/abstract-minimal-concept-plant-shadows_23-2148835269.jpg?t=st=1742147754~exp=1742151354~hmac=5a3cfa9f5d79e011acc9f50075a5bba8b82d27668916380ebb235d2364375745&w=826")',
=======
        backgroundImage: 'url("https://img.freepik.com/free-photo/blue-toned-pack-paper-sheets-with-copy-space_23-2148320442.jpg?semt=ais_hybrid&w=740")',
>>>>>>> 880495a51962db0c960acb1c9acfb4bbd6070a79
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}
    >
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Sign Up</h1>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`bg-white/50 backdrop-blur-lg p-10 rounded-xl shadow-2xl w-full max-w-md ${shake ? 'animate-shake' : ''}`}
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Create Your Account 🚀</h2>
        <form onSubmit={signupForm.handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <div className="relative">
              <FaUser className="absolute top-3 left-3 text-gray-500" />
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                onChange={signupForm.handleChange}
                onBlur={signupForm.handleBlur}
                value={signupForm.values.name}
                className={`pl-10 mt-1 w-full rounded-md bg-white/70 px-4 py-2 text-sm text-gray-800 border ${
                  signupForm.touched.name && signupForm.errors.name ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-slate-500`}
              />
            </div>
            {signupForm.touched.name && signupForm.errors.name && (
              <p className="text-red-500 text-xs mt-1">{signupForm.errors.name}</p>
            )}
          </div>
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
                onChange={signupForm.handleChange}
                onBlur={signupForm.handleBlur}
                value={signupForm.values.email}
                className={`pl-10 mt-1 w-full rounded-md bg-white/70 px-4 py-2 text-sm text-gray-800 border ${
                  signupForm.touched.email && signupForm.errors.email ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-slate-500`}
              />
            </div>
            {signupForm.touched.email && signupForm.errors.email && (
              <p className="text-red-500 text-xs mt-1">{signupForm.errors.email}</p>
            )}
          </div>
          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
              <FaLock className="absolute top-3 left-3 text-gray-500" />
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Your password"
                onChange={signupForm.handleChange}
                onBlur={signupForm.handleBlur}
                value={signupForm.values.password}
                className={`pl-10 mt-1 w-full rounded-md bg-white/70 px-4 py-2 text-sm text-gray-800 border ${
                  signupForm.touched.password && signupForm.errors.password ? 'border-red-500' : 'border-gray-300'
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
            {signupForm.touched.password && signupForm.errors.password && (
              <p className="text-red-500 text-xs mt-1">{signupForm.errors.password}</p>
            )}
          </div>
          {/* Confirm Password */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <div className="relative">
              <FaLock className="absolute top-3 left-3 text-gray-500" />
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showPassword ? 'text' : 'password'}
                placeholder="Confirm password"
                onChange={signupForm.handleChange}
                onBlur={signupForm.handleBlur}
                value={signupForm.values.confirmPassword}
                className={`pl-10 mt-1 w-full rounded-md bg-white/70 px-4 py-2 text-sm text-gray-800 border ${
                  signupForm.touched.confirmPassword && signupForm.errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
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
            {signupForm.touched.confirmPassword && signupForm.errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">{signupForm.errors.confirmPassword}</p>
            )}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={signupForm.isSubmitting}
            className={`w-full py-2 px-4 rounded-md text-white font-semibold transition ${
              signupForm.isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-slate-600 hover:bg-slate-700'
            } flex items-center justify-center`}
          >
            {signupForm.isSubmitting ? <LineSpinner size="30" stroke="3" speed="1" color="white" /> : 'Sign Up'}
          </motion.button>
        </form>
        <p className="mt-6 text-xs text-gray-600 text-center">
          By signing up, you agree to TalentSphere's&nbsp;
          <a href="#" className="border-b border-gray-500 border-dotted">Terms of Service</a>
          &nbsp;and&nbsp;
          <a href="#" className="border-b border-gray-500 border-dotted">Privacy Policy</a>.
        </p>
        <p className="mt-4 text-sm text-center text-gray-500">
          Already have an account?{' '}
          <Link href="/login" className="text-indigo-600 hover:underline font-medium">Login</Link>
        </p>
      </motion.div>

      {/* Modal for error */}
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
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Registration Failed</h3>
              <p className="mb-4 text-gray-600">Already have an account?</p>
              <div className="flex justify-center gap-4">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleRedirect(true)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Go to Login
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowModal(false)}
                  className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
                >
                  Try Again
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
  )
}

export default Signup;