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
    </main>
  );
}
