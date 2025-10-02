"use client";
import React from "react";
import Image from "next/image";
import { ISubscription } from "../page";

export default function SubscriptionTable({
  subscriptions,
}: {
  subscriptions: ISubscription[];
}) {
  return (
    <main className="border-[1px] border-[#E5E7EB] rounded-xl grow">
      <table className="w-full table-fixed text-left text-sm border-[#E5E7EB]">
        <thead>
          <tr className="text-[#111827] font-semibold border-b border-b-[#E5E7EB]">
            <th className="px-8 py-4">User Name</th>
            <th className="px-8 py-4">Current Plan</th>
            <th className="px-8 py-4">Renewal Date</th>
            <th className="px-8 py-4">Payment Method</th>
            <th className="px-8 py-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {subscriptions.map((subs) => (
            <tr
              key={subs.id}
              className="hover:bg-[#F3F4F6] border-b border-b-[#E5E7EB] items-center"
            >
              <td className="flex items-center px-8 py-4">
                <Image
                  src={subs["User Name"].photo || "/icons/profile.svg"}
                  alt={subs["User Name"].name || "UserName"}
                  width={40}
                  height={40}
                  className="rounded-full mr-4"
                />
                <div>
                  <h1 className="text-[#111827] font-semibold text-base leading-5">
                    {subs["User Name"].name || "UserName"}
                  </h1>
                  <h1 className="text-[#6B7280] font-normal text-sm leading-5">
                    {subs["User Name"].email || "example@gmail.com"}
                  </h1>
                </div>
              </td>
              <td className="px-8 py-4">{subs["Current Plan"]}</td>
              <td className="px-8 py-4">{subs["Renewal Date"]}</td>
              <td className="px-8 py-4">
                {subs["Payment Method"]
                  ? subs["Payment Method"].transactionId
                  : "No payment method"}
              </td>
              <td className="px-8 py-4">{subs.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
