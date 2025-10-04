"use client";

import { signOut } from "next-auth/react";
import Image from "next/image";

export default function LogoutButton() {
  return (
    <button onClick={() => signOut()}  className="flex items-center  text-lg bg-gray-200 hover:bg-gray-300 p-2 rounded cursor-pointer " >
          <Image src="/google.png" alt="icon" width={20} height={20} />
          
          <a href="/#" className="text-gray-800 hover:text-white transition pl-2 pr-2  hover:bg-blue-600 rounded"> 
            Sign In
          </a>
    </button>
  );
}
 
