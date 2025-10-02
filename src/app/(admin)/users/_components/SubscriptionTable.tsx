"use client";
import React from "react";
import Image from "next/image";
import { ISubscription, TStatus } from "../page";

// const planStatus = {
//   [TPlan.PREMIUM]: (
//     <div className="text-[#6B21A8] font-medium text-xs rounded-lg bg-[#F3E8FF] w-fit p-2 px-4">
//       Premium Monthly
//     </div>
//   ),
//   [TPlan.FAMILY]: (
//     <div className="text-[#6B21A8] font-medium text-xs rounded-lg bg-[#F3E8FF] w-fit p-2 px-4">
//       Family Annual
//     </div>
//   ),
//   [TPlan.FREE]: (
//     <div className="text-[#9A3412] font-medium text-xs rounded-lg bg-[#FFEDD5] w-fit p-2 px-4">
//       Free Trial
//     </div>
//   ),
// };

// const mapApiPlanToEnum = (plan: string): TPlan => {
//   switch (plan) {
//     case "Trial Period":
//       return TPlan.PREMIUM;
//     case "Trial Period2":
//       return TPlan.FAMILY;
//     case "Trial Period3":
//       return TPlan.FREE;
//     default:
//       return TPlan.PREMIUM; // Default plan in case of invalid value
//   }
// };

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
          {subscriptions.map((subs) => {
            // Map API plan value to TPlan enum
            // const mappedPlan = mapApiPlanToEnum(subs["Current Plan"]);
            // const planComponent = planStatus[mappedPlan] || (
            //   <div className="text-[#6B7280] font-medium text-xs rounded-lg bg-[#F3F4F6] w-fit p-2 px-4">
            //     Unknown Plan
            //   </div>
            // );

            return (
              <tr
                key={subs.id}
                className="hover:bg-[#F3F4F6] border-b border-b-[#E5E7EB] items-center"
              >
                <td className="flex items-center px-8 py-4">
                  <Image
                    src={subs["User Name"].photo}
                    alt={subs["User Name"].name}
                    width={40}
                    height={40}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h1 className="text-[#111827] font-semibold text-base leading-5">
                      {subs["User Name"].name}
                    </h1>
                    <h1 className="text-[#6B7280] font-normal text-sm leading-5">
                      {subs["User Name"].email}
                    </h1>
                  </div>
                </td>
                <td className="px-8 py-4">
                  <div className="text-[#6B21A8] font-medium text-xs rounded-lg bg-[#F3E8FF] w-fit p-2 px-4">
                    Premium Monthly
                  </div>
                </td>
                <td className="px-8 py-4">{subs["Renewal Date"]}</td>
                <td className="px-8 py-4">
                  {subs.status !== TStatus.TRIAL ? (
                    <div className="flex px-8 py-4">
                      <Image
                        src={subs["Payment Method"].cardType}
                        alt={subs["User Name"].name}
                        width={24}
                        height={24}
                      />
                      <div className="">
                        <h1 className="text-[#111827] font-semibold text-base leading-5">
                          {subs["Payment Method"].transactionId}
                        </h1>
                      </div>
                    </div>
                  ) : (
                    <h1 className="text-[#6B7280] font-medium text-base leading-5">
                      No payment method
                    </h1>
                  )}
                </td>
                <td className="px-8 py-4">
                  <div className="text-[#166534] font-medium text-xs rounded-lg bg-[#DCFCE7] w-fit p-2 px-4">
                    {subs.status}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}
