'use client';
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { IconUser, IconMail, IconStar, IconMessageCircle } from '@tabler/icons-react';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Feedback submitted!');
    setFormData({ name: '', email: '', rating: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-2xl w-full bg-white p-8 shadow-lg rounded-xl">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          We Value Your Feedback
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Your feedback helps us improve. Please take a moment to share your thoughts.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div className="relative">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <div className="flex items-center">
              <IconUser className="absolute left-3 text-gray-400" size={20} />
              <Input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="pl-10 w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
          </div>

          {/* Email Input */}
          <div className="relative">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Your Email
            </label>
            <div className="flex items-center">
              <IconMail className="absolute left-3 text-gray-400" size={20} />
              <Input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="pl-10 w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
          </div>

          {/* Rating Input */}
          <div className="relative">
            <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-1">
              Rating (1-5)
            </label>
            <div className="flex items-center">
              <IconStar className="absolute left-3 text-gray-400" size={20} />
              <Input
                type="number"
                name="rating"
                id="rating"
                value={formData.rating}
                onChange={handleChange}
                placeholder="Rate us (1-5)"
                min="1"
                max="5"
                className="pl-10 w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
          </div>

          {/* Message Textarea */}
          <div className="relative">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Your Feedback
            </label>
            <div className="flex items-start">
              <IconMessageCircle className="absolute left-3 text-gray-400 mt-3" size={20} />
              <Textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your feedback here"
                className="pl-10 w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-md transition duration-300 flex items-center justify-center"
          >
            <IconMessageCircle className="mr-2" size={20} />
            Submit Feedback
          </Button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
