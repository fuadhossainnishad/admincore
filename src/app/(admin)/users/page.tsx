import React from "react";
import SubscriptionCard from "./_components/SubscriptionCard";
import SubscriptionTable from "./_components/SubscriptionTable";
import SearchFilter from "./_components/SearchFilter";

export default function UsersPage() {
  return (
    <main className="space-y-10">
      <section className="text-[#111827] space-y-2">
        <h1 className=" font-bold text-3xl leading-9">
          Subscription Management
        </h1>
        <p className="font-normal text-base leading-6">
          Monitor and manage user subscriptions
        </p>
      </section>
      <SubscriptionCard />
      <SearchFilter />
      <SubscriptionTable />
    </main>
  );
}
