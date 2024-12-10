import React from 'react';
import Sidebar from '@/components/Sidebar';

export default function SkillTestsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <main className="ml-64 pt-24 min-h-screen">
        {children}
      </main>
    </div>
  );
} 