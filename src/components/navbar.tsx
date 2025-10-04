"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import LoginButton from './loginbutton'
import { signIn, signOut, useSession } from "next-auth/react";
import Link from 'next/link';

function Navbar() {
    
 const { data: session } = useSession();
const [isOpen, setIsOpen] = useState(false);

  return (
     <nav className="w-full fixed top-0 left-0 z-50 bg-black/30 backdrop-blur-md border border-white/10 flex items-center justify-between px-6 md:pl-40 md:pr-40 md:py-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center">
            <span className="text-xs font-bold">C</span>
          </div>
          <span className="font-medium text-lg text-white">Confidentails</span>
        </div>

       
<div>
    <Link href="/dashboard" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">DASHBOARD</Link>
</div>

        {/* Links */}


    
              {session ? (
              <div className="w-auto flex items-center gap-2">
                <img src={session.user?.image || ""} alt="profile pic" className="w-8 h-8 rounded-2xl"/>
                <p>{session.user?.name}</p>
                <button onClick={() => signOut()} className="border p-1 rounded bg-red-600">Logout</button>
              </div>
            ) : (
              <LoginButton/>
            )}
      </nav>
  )
}

export default Navbar