"use client";
import React, { useEffect, useState } from "react";
import DashboardCard from "./_components/DashboardCard";
import RecentSignup from "./_components/RecentSignup";
import RecentStories from "./_components/RecentStories";
import apiCall, { TMethods } from "@/services/apiMethodList";
import apiList from "@/services/apiList";
import { toast } from "sonner";
import { AxiosHeaders } from "axios";

export default function DashboardPage() {
  const [stat, setStat] = useState({});

  const handleFecth = async () => {
    const token = sessionStorage.getItem("token");
    const headers = AxiosHeaders.from({
      Authorization: `Bearer ${token}`,
    });

    const res = await apiCall(TMethods.get, apiList.stats, {}, headers);
    if (!res.success) {
      toast.error("Error fetching dashboard data");
    }
    toast.success("Successfully fetch dashboard");
    setStat(res.data);
  };

  useEffect(() => {
    handleFecth();
  });

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
