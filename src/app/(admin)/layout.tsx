import Headbar from "@/components/Headbar";
import React from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="">
      <Headbar />
      <section className="">{children}</section>
      <section className="w-full flex bg-[#E5E7EB] justify-center">
        © 2025 MagicTales AI. All rights reserved.
      </section>
    </main>
  );
}
