import Image from "next/image";
import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex w-full justify-center items-center min-h-screen gap-[5%]">
      <Image src="/icons/logo.svg" alt="logo" height={600} width={600} />
      <section className="w-1/4"> {children}</section>
    </main>
  );
}
