import Image from "next/image";
import React from "react";

const dashboardCardData = {
  "Total Users": {
    value: "12,121",
    icon: "/icons/users.svg",
    title: "+12% from last month",
    status: "up",
  },
  "Active Subscription": {
    value: "12,121",
    icon: "/icons/subscription.svg",
    title: "-12% from last month",
    status: "down",
  },
  "Stories Created": {
    value: "12,121",
    icon: "/icons/stories.svg",
    title: "+12% from last month",
    status: "up",
  },
  "Reported Content": {
    value: "12,121",
    icon: "/icons/content.svg",
    title: "-12% from last month",
    status: "down",
  },
};

const icons = {
  down: "/icons/downArrow.svg",
  up: "/icons/upArrow.svg",
};

export default function DashboardCard() {
  return (
    <main className="flex justify-between">
      {Object.entries(dashboardCardData).map(([key, data], ind) => (
        <section
          key={ind}
          className="rounded-xl border-[1px] border-[#E5E7EB] bg-white p-8 flex justify-between gap-12"
        >
          <section className="space-y-3">
            <h1 className="ext-base font-normal text-[#4B5563]">{key}</h1>
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
          <Image src={data.icon} alt={key} height={52} width={52} />
        </section>
      ))}
    </main>
  );
}
