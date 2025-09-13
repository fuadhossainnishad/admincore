import React from "react";
import DashboardCard from "./_components/DashboardCard";
import RecentSignup from "./_components/RecentSignup";
import RecentStories from "./_components/RecentStories";

export default function DashboardPage() {
  return (
    <main className="space-y-10">
      <section className="text-[#111827] space-y-2">
        <h1 className=" font-bold text-3xl leading-9">Dashboard</h1>
        <p className="font-normal text-base leading-6">
          Welcome back! Here&apos;s what&apos;s happening with MagicTales AI
          today.
        </p>
      </section>
      <DashboardCard />
      <section className="flex gap-14">
        <RecentSignup />
        <RecentStories />
      </section>
    </main>
  );
}
