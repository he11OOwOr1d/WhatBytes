'use client';

import React from 'react';
import { UserButton, useUser } from "@clerk/nextjs";
import Image from 'next/image';
export default function Navbar() {
  const { user } = useUser();

  return (
    <nav className="flex fixed top-0 w-full items-center justify-between p-4 bg-white border-b ">
      <div className="flex items-center gap-4">

        <Image src="/logo.png" alt="logo" width={200} height={200} />
      </div>


      {user && (
        <div className="flex items-center gap-2">
          <span className="text-black">{user.firstName}</span>
          <UserButton />
        </div>
      )}
    </nav>
  );
} 