import Link from "next/link";
import React from "react";
import Image from "next/image";
import Profile from "./Profile";

const HeadbarData = {
  Dashboard: {
    path: "/dashboard",
  },
  User: {
    path: "/user",
  },
  Content: {
    path: "/content",
  },
  Report: {
    path: "/report",
  },
  Settings: {
    path: "/settings",
  },
};

export default function Headbar() {
  return (
    <main className="flex justify-between">
      <section className="flex">
        <section className="flex">
          <Image src="" alt="" width={20} height={20} />
          <h1 className="">MagicTales AI</h1>
        </section>
        <section className="">
          {Object.entries(HeadbarData).map(([key, value], ind) => (
            <Link href={value.path} key={ind} className="">
              {key}
            </Link>
          ))}
        </section>
      </section>
      <Profile />
    </main>
  );
}
