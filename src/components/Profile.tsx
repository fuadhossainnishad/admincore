"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Profile() {
  const [open, setOpen] = useState(false);

  return (
    <main className="relative bg-[#F3F4F6] border-[1px] border-[#E5E7EB] rounded-lg p-3 px-5 ">
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
            <Image src="/icons/updatePassword2.svg" alt="" height={20} width={20} />
            Update Password
          </Link>
          <Link href="/login" className="flex gap-2 items-center">
            <Image src="/icons/logout.svg" alt="" height={20} width={20} />
            Logout
          </Link>
        </div>
      )}
    </main>
  );
}
