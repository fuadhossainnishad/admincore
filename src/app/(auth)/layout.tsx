import Image from "next/image";
import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex w-full justify-center items-center min-h-screen gap-[5%]">
      <Image src="/images/logo.png" alt="logo" height={300} width={300} />
      <section className="w-1/4"> {children}</section>
    </main>
  );
}
