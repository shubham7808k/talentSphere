// src/components/DashboardNavbar.jsx

'use client';
import Link from 'next/link';

export default function DashboardNavbar() {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 shadow">
    <div className="flex justify-between items-center max-w-7xl mx-auto">
      <div className="font-bold text-xl tracking-wide">Talent Sphere</div>
      <div className="space-x-6 flex items-center">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/user/dashboard" className="hover:underline">
          Dashboard
        </Link>
        <Link href="/portfolio" className="hover:underline">
          My Portfolios
        </Link>
        <Link href="/user/builder" className="hover:underline">
          Upload File
        </Link>
        <Link href="/FeedbackForm" className="hover:underline">
          Submit Feedback
        </Link>
      </div>
    </div>
  </nav>
  );
}
