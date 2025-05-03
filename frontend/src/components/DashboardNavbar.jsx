// src/components/DashboardNavbar.jsx

'use client';
import Link from 'next/link';

export default function DashboardNavbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="flex justify-between">
        <div className="font-bold text-lg">Dashboard Panel</div>
        <div className="space-x-4">
          <Link href="/dashboard" className="hover:underline">Home</Link>
          <Link href="/Manage-user" className="hover:underline">Manage Users</Link>
          <Link href="/upload-file" className="hover:underline">Upload</Link>
          <Link href="/portfolio" className="hover:underline">Portfolios</Link>
        </div>
      </div>
    </nav>
  );
}
