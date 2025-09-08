"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function Profile() {
  const [open, setOpen] = useState(false);

  return (
    <main className="relative ">
      <section
        className="cursor-pointer flex"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <Image src="" alt="" height={20} width={20} />
        <h1 className="">Admin</h1>
        <Image src="" alt="" height={20} width={20} />
      </section>
      {open && (
        <ul className="absolute">
          <li className="">Update Password</li>
          <li className="">Logout</li>
        </ul>
      )}
    </main>
  );
}
