'use client';

import { useRouter } from 'next/navigation';
import { useAuth } from '@clerk/nextjs';

export default function AuthButtons() {
  const router = useRouter();
  const { userId } = useAuth();

  // Don't render buttons if user is authenticated
  if (userId) {
    return null;
  }

  return (
    <div className="flex gap-4">
      <button
        onClick={() => router.push('/signin')}
        className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
      >
        Sign In
      </button>
      
      <button
        onClick={() => router.push('/signup')}
        className="px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50"
      >
        Sign Up
      </button>
    </div>
  );
} 