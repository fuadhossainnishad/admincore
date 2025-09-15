"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import Profile from "./Profile";

const HeadbarData = {
  Dashboard: {
    path: "/dashboard",
  },
  User: {
    path: "/users",
  },
  Report: {
    path: "/reports",
  },
  Settings: {
    path: "/settings",
  },
};

export default function Headbar() {
  const [active, setActive] = useState("dashboard");
  return (
    <main className="px-[10%] py-2 flex justify-between items-center border-b-2 border-[#E5E7EB] shadow-sm">
      <section className="flex gap-20 items-center">
        <section className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="" width={32} height={32} />
          <h1 className="text-[#111827] font-bold text-lg leading-5">
            MagicTales AI
          </h1>
        </section>
        <section className="flex gap-5">
          {Object.entries(HeadbarData).map(([key, value], ind) => (
            <Link
              href={value.path}
              key={ind}
              onClick={() => setActive(key)}
              className={`cursor-pointer font-medium text-lg ${
                active === key ? "text-[#8B5FBF]" : "text-[#4B5563]"
              } hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-[#8B5FBF]`}
            >
              {key}
            </Link>
          ))}
        </section>
      </section>
      <Profile />
    </main>
  );
}
