"use client"; // This ensures the code is treated as a client-side component

import React, { useState, useEffect } from "react";
import DashboardCard from "./_components/DashboardCard";
import RecentSignup from "./_components/RecentSignup";
import RecentStories from "./_components/RecentStories";
import apiCall, { TMethods } from "@/services/apiMethodList";
import apiList from "@/services/apiList";
import { toast } from "sonner";
import { AxiosHeaders } from "axios"; // Import the interfaces
import { IRecentSignup, IRecentStory, IStats } from "./interface";

export default function DashboardPage() {
  const [stat, setStat] = useState<IStats>({
    total_users: { value: 0, change: 0 },
    active_subscriptions: { value: 0, change: 0 },
    stories_created: { value: 0, change: 0 },
    reported_content: { value: 0, change: 0 },
  });
  const [recentSignups, setRecentSignups] = useState<IRecentSignup[]>([]);
  const [recentStories, setRecentStories] = useState<IRecentStory[]>([]);
  const [isClient, setIsClient] = useState(false); // Track if the component is mounted on the client-side

  // Only access sessionStorage when the component is mounted on the client-side
  useEffect(() => {
    setIsClient(true); // Set isClient to true once the component is mounted on the client

    // Fetch the token from sessionStorage only on the client-side
    const token = sessionStorage.getItem("token");
    const headers = AxiosHeaders.from({
      Authorization: `Bearer ${token}`,
    });

    const handleFetch = async () => {
      const res = await apiCall(TMethods.get, apiList.stats, {}, headers);
      if (res.success) {
        setStat(res.data.stats || stat); // Use the existing stat if the data is missing
        setRecentSignups(res.data.recent_signups.results || []);
        setRecentStories(res.data.recent_stories.results || []);
        toast.success("Dashboard data fetched successfully");
      } else {
        toast.error("Error fetching dashboard data");
      }
    };

    handleFetch();
  }, [stat]); // Dependencies should include the stat to re-run the fetch if needed

  if (!isClient) return null; // Ensure that the page does not render on the server

  return (
    <main className="space-y-10">
      <section className="text-[#111827] space-y-2">
        <h1 className="font-bold text-3xl leading-9">Dashboard</h1>
        <p className="font-normal text-base leading-6">
          Welcome back! Here&apos;s what&apos;s happening with MagicTales AI
          today.
        </p>
      </section>

      <DashboardCard stats={stat} />

      <section className="flex gap-14">
        <RecentSignup sign={recentSignups} />
        <RecentStories stories={recentStories} />
      </section>
    </main>
  );
}
