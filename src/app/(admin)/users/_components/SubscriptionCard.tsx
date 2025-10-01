import React from "react";
import Image from "next/image";
import { IStats } from "../page";

const icons = {
  down: "/icons/downArrow.svg",
  up: "/icons/upArrow.svg",
  trial: "/icons/expire.svg",
};

export default function SubscriptionCard({ stats }: { stats: IStats }) {
  const cardData = [
    {
      title: "Total Subscribers",
      value: stats.total_subscribers.value,
      change: `${stats.total_subscribers.change}% from last month`,
      status: stats.total_subscribers.change > 0 ? "up" : "down",
      icon: "/icons/users.svg",
    },
    {
      title: "Active Trials",
      value: stats.trials_active.value,
      change: `${stats.trials_active.expiring_this_week} expiring this week`,
      status: "trial", // This could be customized depending on actual data
      icon: "/icons/trialSubscription.svg",
    },
    {
      title: "Canceled Subscriptions",
      value: stats.canceled_subscriptions.value,
      change: `${stats.canceled_subscriptions.change}% from last month`,
      status: stats.canceled_subscriptions.change > 0 ? "up" : "down",
      icon: "/icons/cancelSubscription.svg",
    },
  ];

  return (
    <main className="flex gap-10">
      {cardData.map((data, ind) => (
        <section
          key={ind}
          className="grow rounded-xl border-[1px] border-[#E5E7EB] bg-white p-8 flex justify-between gap-12"
        >
          <section className="space-y-3">
            <h1 className="text-base font-normal text-[#4B5563]">
              {data.title}
            </h1>
            <p className="text-4xl font-bold leading-9">{data.value}</p>
            <div className="flex gap-1">
              <Image
                src={icons[data.status as keyof typeof icons]}
                alt={data.status}
                height={12}
                width={14}
              />
              <p
                className={`${
                  data.status === "up"
                    ? "text-[#16A34A]"
                    : data.status === "trial"
                    ? "text-[#EA580C]"
                    : "text-[#DC2626]"
                }`}
              >
                {data.change}
              </p>
            </div>
          </section>
          <Image src={data.icon} alt={data.title} height={52} width={52} />
        </section>
      ))}
    </main>
  );
}
