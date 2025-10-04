"use client"
import React from 'react'
import { useSession } from "next-auth/react";
import Image from 'next/image';
    



function Page() {
 
  const { data: session, status } = useSession();
  if (status === "loading") {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p className="text-xl text-gray-500 animate-pulse">Checking session...</p>
      </div>
    );
  }
  return (
    <div className="w-full h-screen flex items-center justify-center">
     {
        session ? (
          <div className='flex flex-col items-center justify-center gap-4'>
            <Image src={session.user?.image ?? "/user.png"}  alt="profile pic" className="w-20 h-20 rounded"/>
            <h1 className="text-3xl font-bold">Welcome, {session.user?.name}!</h1>
            </div>
        ) : (
            <h1 className="text-3xl font-bold">Please sign in to access the dashboard.</h1>
        )
     }

    </div>
  )
}

export default Page