'use client'

import { useRouter } from 'next/navigation';
import { useAuth } from '@clerk/nextjs';
import AuthButtons from '@/components/AuthButtons';
import { useEffect } from 'react';

export default function Home() {
  const { isLoaded, isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Redirect to /skill-tests if signed in
    if (isLoaded && isSignedIn) {
      router.replace('/skill-tests');
    }
  }, [isLoaded, isSignedIn, router]);

  // If not loaded or is signed in, show a loading state
  if (!isLoaded || isSignedIn) {
    return <div>Loading...</div>;
  }

  // Render homepage content for signed-out users
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Welcome to My App</h1>
      <AuthButtons />
    </main>
  );
}