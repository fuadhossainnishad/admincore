"use client";
import React, { useState, useEffect } from "react";
import StoriesTable from "./_components/StoriesTable";
import UserGrowthChart from "./_components/charts/Charts";
import { AxiosHeaders } from "axios";
import apiCall, { TMethods } from "@/services/apiMethodList";
import apiList from "@/services/apiList";
import { toast } from "sonner";

// Define the interface for the API response data
export interface ITopStory {
  theme: string;
  read_count: number;
  likes_count: number;
  shares_count: number;
  tags: string;
  reading_time: string;
}

export default function ReportsPage() {
  const [userGrowthOverTime, setUserGrowthOverTime] = useState<
    { month: string; count: number }[]
  >([]);
  const [storiesCreatedOverTime, setStoriesCreatedOverTime] = useState<
    { month: string; count: number }[]
  >([]);
  const [topPerformingStories, setTopPerformingStories] = useState<ITopStory[]>(
    []
  );

  const handleFetch = async () => {
    const token = sessionStorage.getItem("token");
    const headers = AxiosHeaders.from({
      Authorization: `Bearer ${token}`,
    });

    const res = await apiCall(TMethods.get, apiList.reports, {}, headers);

    if (res.success) {
      setUserGrowthOverTime(res.data.user_growth_over_time);
      setStoriesCreatedOverTime(res.data.stories_created_over_time); 
      setTopPerformingStories(res.data.top_performing_stories); 
      toast.success("Subscription data fetched successfully");
    } else {
      toast.error("Error fetching subscription data");
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <main className="space-y-10">
      <section className="text-[#111827] space-y-2">
        <h1 className="font-bold text-3xl leading-9">Analytics & Reports</h1>
        <p className="font-normal text-base leading-6">
          Monitor app performance and user engagement
        </p>
      </section>

      <section className="flex gap-10 w-full">
        <section className="flex-1 border-[1px] border-[#E5E7EB] bg-white p-5 rounded-lg shadow space-y-4">
          <div className="flex justify-between">
            <h1 className="text-[#111827] font-semibold text-lg">
              User Growth Over Time
            </h1>
          </div>
          <UserGrowthChart userGrowthData={userGrowthOverTime} />
        </section>

        <section className="flex-1 border-[1px] border-[#E5E7EB] bg-white p-5 rounded-lg shadow space-y-4">
          <div className="flex justify-between">
            <h1 className="text-[#111827] font-semibold text-lg">
              Stories Created Over Time
            </h1>
          </div>
          <UserGrowthChart userGrowthData={storiesCreatedOverTime} />
        </section>
      </section>

      <StoriesTable topPerformingStories={topPerformingStories} />
    </main>
  );
}
