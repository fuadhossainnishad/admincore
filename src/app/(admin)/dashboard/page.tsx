import React from "react";
import DashboardCard from "./_components/DashboardCard";
import RecentSignup from "./_components/RecentSignup";
import RecentStories from "./_components/RecentStories";

export default function DashboardPage() {
  return (
    <main className="">
      <section className="">
        <h1 className="">Dashboard</h1>
        <p className="">
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
