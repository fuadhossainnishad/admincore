"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Profile() {
  const [open, setOpen] = useState(false);

  // State to track if it's client-side
  const [isClient, setIsClient] = useState(false);

  // Only run this on the client-side
  useEffect(() => {
    setIsClient(true); // This will run only on the client-side
  }, []);

  // Handle logout
  const handleLogout = () => {
    if (isClient) {
      // Clear sessionStorage and localStorage only on the client-side
      sessionStorage.clear(); // Clears everything in sessionStorage
      localStorage.clear(); // Clears everything in localStorage

      // Optionally, clear cookies if you're using them (e.g., token stored in cookies)
      document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/"; // Clear cookie named 'token'

      // Redirect to login page after logout
      window.location.href = "/login"; // Redirect to login page (could also use Link for client-side navigation)
    }
  };

  return (
    <main className="relative bg-[#F3F4F6] border-[1px] border-[#E5E7EB] rounded-lg p-3 px-5">
      <section
        className="cursor-pointer flex gap-2 items-center"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <Image src="/icons/profile.svg" alt="" height={32} width={32} />
        <h1 className="">Admin</h1>
        <Image src="/icons/downArrow2.svg" alt="" height={12} width={12} />
      </section>
      {open && (
        <div className="absolute mt-1 min-w-max bg-black/10 backdrop-blur-sm rounded-lg px-4 py-3 flex flex-col gap-3 left-0 top-full">
          <Link href="/profile" className="flex gap-2 items-center">
            <Image
              src="/icons/updatePassword2.svg"
              alt=""
              height={20}
              width={20}
            />
            Update Password
          </Link>
          <Link
            href="/login"
            onClick={handleLogout} // Trigger logout when clicked
            className="flex gap-2 items-center cursor-pointer"
          >
            <Image src="/icons/logout.svg" alt="" height={20} width={20} />
            Logout
          </Link>
        </div>
      )}
    </main>
  );
}
