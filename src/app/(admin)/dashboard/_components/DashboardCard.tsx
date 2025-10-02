import React from "react";
import Image from "next/image";
import { IStats } from "../interface";

export default function DashboardCard({ stats }: { stats: IStats }) {
  const dashboardCardData = {
    "Total Users": {
      value: stats.total_users?.value || 0,
      title: `${stats.total_users?.change || 0}% from last month`,
      status: stats.total_users?.change > 0 ? "up" : "down",
      icons: "/icons/users.svg",
    },
    "Active Subscription": {
      value: stats.active_subscriptions?.value || 0,
      title: `${stats.active_subscriptions?.change || 0}% from last month`,
      status: stats.active_subscriptions?.change > 0 ? "up" : "down",
      icons: "/icons/subscription.svg",
    },
    "Stories Created": {
      value: stats.stories_created?.value || 0,
      title: `${stats.stories_created?.change || 0}% from last month`,
      status: stats.stories_created?.change > 0 ? "up" : "down",
      icons: "/icons/stories.svg",
    },
    "Reported Content": {
      value: stats.reported_content?.value || 0,
      title: `${stats.reported_content?.change || 0}% from last month`,
      status: stats.reported_content?.change > 0 ? "up" : "down",
      icons: "/icons/content.svg",
    },
  };

  const icons = {
    down: "/icons/downArrow.svg",
    up: "/icons/upArrow.svg",
  };

  return (
    <main className="flex justify-between">
      {Object.entries(dashboardCardData).map(([key, data], ind) => (
        <section
          key={ind}
          className="rounded-xl border-[1px] border-[#E5E7EB] bg-white p-8 flex justify-between gap-12"
        >
          <section className="space-y-3">
            <h1 className="text-base font-normal text-[#4B5563]">{key}</h1>
            <p className="text-4xl font-bold leading-9">{data.value}</p>
            <div className="flex">
              <Image
                src={icons[data.status as keyof typeof icons]}
                alt={data.status}
                height={12}
                width={12}
              />
              <p
                className={`${
                  data.status === "up" ? "text-[#16A34A]" : "text-[#DC2626]"
                } text-base font-normal leading-5`}
              >
                {data.title}
              </p>
            </div>
          </section>
          <Image
            src={data.icons}
            alt={key}
            height={52}
            width={52}
          />
        </section>
      ))}
    </main>
  );
}
