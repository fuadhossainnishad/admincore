"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function VerifyOtpPage() {
  const email = sessionStorage.getItem("email");
  return (
    <main className="flex flex-col items-center gap-8 text-[#5C5C5C]">
      <div className="space-y-5 text-center w-full flex flex-col items-center">
        <h1 className="text-2xl font-bold text-[#103F73]">Check your email</h1>
        <h2 className="text-sm font-normal w-[60%]">
          We’ve sent a reset password link to your email <span className="text-blue-500">{email}</span>.
          Please check your inbox and follow the instructions to reset your
          password.
        </h2>
      </div>

      {/* <VerifyOtpForm /> */}

      {/* <div className="flex gap-1 text-[14px] font-normal leading-5">
        <p className="">Didn’t receive the email?</p>
        <button className="cursor-pointer text-[#103F73]">
          Click to resend
        </button>
      </div> */}

      <Link
        href="/forgot-password"
        className="flex gap-2 leading-5 font-normal text-sm text-[#667085]"
      >
        <Image
          key="email"
          src="/icons/downArrow.svg"
          alt="email"
          width={12}
          height={12}
          className="rotate-90"
        />
        <div>Back to Forgot password</div>
      </Link>
    </main>
  );
}
