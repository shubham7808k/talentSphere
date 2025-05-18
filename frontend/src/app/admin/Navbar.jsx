import React from 'react';
import Link from 'next/link';

const Navbar = ({ onFeedbackClick }) => { 
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 shadow">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="font-bold text-xl tracking-wide">Admin Dashboard</div>
        <div className="space-x-6 flex items-center">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/admin/manage-user" className="hover:underline">
            Manage Users
          </Link>
          <Link href="/portfolio" className="hover:underline">
            Portfolios
          </Link>
          <button
            className="hover:underline bg-transparent border-none outline-none cursor-pointer"
            style={{ padding: 0, background: 'none' }}
            onClick={onFeedbackClick}
          >
            User Feedback
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;