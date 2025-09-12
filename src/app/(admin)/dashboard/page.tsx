import React from "react";
import DashboardCard from "./_components/DashboardCard";
import RecentSignup from "./_components/RecentSignup";
import RecentStories from "./_components/RecentStories";

export default function DashboardPage() {
  return (
    <main className="p-[5%] h-screen flex flex-col justify-between">
      <section className="text-[#111827]">
        <h1 className=" font-bold text-3xl leading-9">Dashboard</h1>
        <p className="font-normal text-base leading-6">
          Welcome back! Here&apos;s what&apos;s happening with MagicTales AI
          today.
        </p>
      </section>
      <DashboardCard />
      <section className="flex justify-between">
        <RecentSignup />
        <RecentStories />
      </section>
    </main>
  );
}
