// src/app/dashboard/layout.jsx

import DashboardNavbar from '@/components/DashboardNavbar';

export default function DashboardLayout({ children }) {
  return (
    <div>
      <DashboardNavbar />
      <main className="p-4">{children}</main>
    </div>
  );
}
