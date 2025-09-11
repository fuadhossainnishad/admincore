import React from "react";
import LoginForm from "./_components/loginForm";
import Image from "next/image";

export default function LoginPage() {
  return (
    <main className="flex  items-center justify-center min-h-screen  text-[#FF6F61]">
      <Image src="/images/logo.svg" alt="logo" height={200} width={200} />

      <section className="">
        <h1 className="text-2xl font-bold text-[#103F73] font-urbanist leading-[108px]">
          Login to Account
        </h1>
        <h1 className="text-sm font-normal text-[#5C5C5C] font-urbanist leading-[36px]">
          Please enter your email and password to continue
        </h1>
        <LoginForm />
      </section>
    </main>
  );
}
