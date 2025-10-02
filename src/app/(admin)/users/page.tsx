"use client";
import React, { useEffect, useState } from "react";
import SubscriptionCard from "./_components/SubscriptionCard";
import SubscriptionTable from "./_components/SubscriptionTable";
import SearchFilter from "./_components/SearchFilter";
import { AxiosHeaders } from "axios";
import apiCall, { TMethods } from "@/services/apiMethodList";
import apiList from "@/services/apiList";
import { toast } from "sonner";

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

export interface ISubscription {
  id: string;
  "User Name": {
    photo: string;
    name: string;
    email: string;
  };
  "Current Plan": string;
  "Renewal Date": string;
  "Payment Method": {
    cardType: string;
    transactionId: string;
  };
  status: string;
}

export default function UsersPage() {
  const [stat, setStat] = useState<IStats>({
    total_subscribers: { value: 0, change: 0 },
    trials_active: { value: 0, expiring_this_week: 0 },
    canceled_subscriptions: { value: 0, change: 0 },
  });
  const [subscriptions, setSubscriptions] = useState<ISubscription[]>([]);
  const [filteredSubscriptions, setFilteredSubscriptions] = useState<
    ISubscription[]
  >([]);

  const [selectedPlan, setSelectedPlan] = useState<string>("All Plans");
  const [selectedStatus, setSelectedStatus] = useState<string>("All Status");

  const handleFetch = async () => {
    const token = sessionStorage.getItem("token");
    const headers = AxiosHeaders.from({
      Authorization: `Bearer ${token}`,
    });

    const res = await apiCall(TMethods.get, apiList.user, {}, headers);

    console.log(res);
    

    if (res.success) {
      setStat(res.data.stats); 
      setSubscriptions(res.data.results || []);
      setFilteredSubscriptions(res.data.results || []);
      toast.success("Subscription data fetched successfully");
    } else {
      toast.error("Error fetching subscription data");
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  // Search filter handler
  const handleSearch = (searchQuery: string) => {
    const searchResults = subscriptions.filter((sub) =>
      sub["User Name"].name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredSubscriptions(searchResults);
  };

  // Filter subscriptions based on selected plan and status
  useEffect(() => {
    const handleFilterChange = () => {
      const filteredData = subscriptions.filter((sub) => {
        const matchesPlan =
          selectedPlan === "All Plans" || sub["Current Plan"] === selectedPlan;
        const matchesStatus =
          selectedStatus === "All Status" || sub.status === selectedStatus;
        return matchesPlan && matchesStatus;
      });
      setFilteredSubscriptions(filteredData);
    };
    handleFilterChange();
  }, [selectedPlan, selectedStatus, subscriptions]);

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

      <SubscriptionCard stats={stat} />
      <SearchFilter
        handleSearch={handleSearch}
        selectedPlan={selectedPlan}
        setSelectedPlan={setSelectedPlan}
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
      />
      <SubscriptionTable subscriptions={filteredSubscriptions} />
    </main>
  );
}
