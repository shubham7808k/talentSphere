// src/components/DashboardNavbar.jsx

'use client';
import Link from 'next/link';

export default function DashboardNavbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="flex justify-between">
        <div className="font-bold text-lg">Dashboard Panel</div>
        <div className="space-x-4">
          {/* Link the Home button to the landing page */}
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/portfolio" className="hover:underline">Portfolios</Link>
          <Link href="/user/builder" className="hover:underline">Upload</Link>
          <Link href="/FeedbackForm" className="hover:underline">Submit Feedback</Link>
        </div>
      </div>
    </nav>
  );
}
