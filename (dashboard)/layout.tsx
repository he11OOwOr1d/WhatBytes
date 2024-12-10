import React from 'react';


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="ml-64 pt-24 min-h-screen">
        {children}
      </main>
    </div>
  );
}