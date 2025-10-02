"use client";
import React, { useEffect, useState } from "react";
import Pagination from "@/components/Pagination";
import SubscriptionCard from "./_components/SubscriptionCard";
import SubscriptionTable from "./_components/SubscriptionTable";
import SearchFilter from "./_components/SearchFilter";
import { AxiosHeaders } from "axios";
import apiCall, { TMethods } from "@/services/apiMethodList";
import apiList from "@/services/apiList";
import { toast } from "sonner";

export enum TPlan {
  PREMIUM = "Trial Period",
  FAMILY = "Trial Period1",
  FREE = "Trial Period2",
}

// Enum for subscription status
export enum TStatus {
  ACTIVE = "Active",
  TRIAL = "Trial",
  CANCELED = "Canceled",
}

// Interface for subscription statistics
export interface IStats {
  total_subscribers: {
    value: number;
    change: number;
  };
  trials_active: {
    value: number;
    expiring_this_week: number;
  };
  canceled_subscriptions: {
    value: number;
    change: number;
  };
}

// Interface for individual subscription details
export interface ISubscription {
  id: string;
  "User Name": {
    photo: string;
    name: string;
    email: string;
  };
  "Current Plan": TPlan;
  "Renewal Date": string;
  "Payment Method": {
    cardType: string;
    transactionId: string;
  };
  status: TStatus;
}

// Component for handling API call and displaying subscriptions
export default function UsersPage() {
  const [stat, setStat] = useState<IStats>({
    total_subscribers: { value: 0, change: 0 },
    trials_active: { value: 0, expiring_this_week: 0 },
    canceled_subscriptions: { value: 0, change: 0 },
  });
  
  const [subscriptions, setSubscriptions] = useState<ISubscription[]>([]); // Initialize as an empty array
  // const [currentPage, setCurrentPage] = useState(1);
  // const itemsPerPage = 5; // Set the number of items per page

  const handleFetch = async () => {
    const token = sessionStorage.getItem("token");
    const headers = AxiosHeaders.from({
      Authorization: `Bearer ${token}`,
    });

    const res = await apiCall(TMethods.get, apiList.reports, {}, headers);

    if (res.success) {
      setStat(res.data.stats); // Set stats data
      // Ensure 'results' is always an array
      setSubscriptions(res.data.results || []); // If data is missing, set an empty array
      toast.success("Subscription data fetched successfully");
    } else {
      toast.error("Error fetching subscription data");
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  // Guard clause: Ensure subscriptions is an array
  const currentSubscriptions = Array.isArray(subscriptions) ? subscriptions : [];

  return (
    <main className="space-y-10">
      <section className="text-[#111827] space-y-2">
        <h1 className="font-bold text-3xl leading-9">
          Subscription Management
        </h1>
        <p className="font-normal text-base leading-6">
          Monitor and manage user subscriptions
        </p>
      </section>

      {/* Subscription Card Component */}
      <SubscriptionCard stats={stat} />

      {/* Search Filter Component */}
      <SearchFilter />

      {/* Subscription Table Component */}
      <SubscriptionTable subscriptions={currentSubscriptions} />

      {/* Pagination Component */}
      {/* 
        <Pagination
          currentPage={currentPage}
          totalItems={subscriptions.length} // Make sure subscriptions is an array
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />
      */}
    </main>
  );
}
