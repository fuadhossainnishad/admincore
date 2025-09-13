import Headbar from "@/components/Headbar";
import React from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-screen flex flex-col">
      <Headbar />
      <section className="grow px-[10%] py-[2%] bg-[#F9FAFB]">{children}</section>
      <footer className="py-6 w-full flex bg-[#E5E7EB] text-[#6B7280] font-normal text-sm leading-5 justify-center border-1 border-[#E5E7EB]">
        © 2025 MagicTales AI. All rights reserved.
      </footer>
    </main>
  );
}
