import Image from "next/image";
import React from "react";

const dashboardCardData = {
  "Total Users": {
    value: 12121,
    icon: "",
    title: "12% Increase from last month",
  },
  "Active Subscription": {
    value: 12121,
    icon: "",
    title: "12% Increase from last month",
  },
  "Stories Created": {
    value: 12121,
    icon: "",
    title: "12% Increase from last month",
  },
  "Reported Content": {
    value: 12121,
    icon: "",
    title: "12% Increase from last month",
  },
};

export default function DashboardCard() {
  return (
    <main className="flex justify-between">
      {Object.entries(dashboardCardData).map(([key, data], ind) => (
        <section key={ind} className="">
          <section className="">
            <h1 className="">{key}</h1>
            <p className="">{data.value}</p>
            <p className="">{data.title}</p>
          </section>
          <Image src={data.icon} alt={key} height={20} width={20} />
        </section>
      ))}
    </main>
  );
}
