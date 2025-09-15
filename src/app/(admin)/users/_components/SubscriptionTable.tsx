"use client";
import Pagination from "@/components/Pagination";
import Image from "next/image";
import React, { useState } from "react";

export enum TPlan {
  PREMIUM = "Premium Monthly",
  FAMILY = "Family Annual",
  FREE = "Free Trial",
}
export enum TStatus {
  ACTIVE = "Active",
  TRIAL = "Trial",
  CANCELED = "Canceled",
}

const planStatus = {
  [TPlan.PREMIUM]: (
    <div className="text-[#6B21A8] font-medium text-xs rounded-lg bg-[#F3E8FF] w-fit p-2 px-4">
      Premium Monthly
    </div>
  ),
  [TPlan.FAMILY]: (
    <div className="text-[#6B21A8] font-medium text-xs rounded-lg bg-[#F3E8FF] w-fit p-2 px-4">
      Family Annual
    </div>
  ),
  [TPlan.FREE]: (
    <div className="text-[#9A3412] font-medium text-xs rounded-lg bg-[#FFEDD5] w-fit p-2 px-4">
      Free Trial
    </div>
  ),
};

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

const subscriptions: ISubscription[] = [
  {
    id: "1",
    "User Name": {
      photo: "/icons/profile.svg",
      name: "John Doe",
      email: "email@gmail.com",
    },
    "Current Plan": TPlan.PREMIUM,
    "Renewal Date": "Jan 15, 2025",
    "Payment Method": {
      cardType: "/icons/card/visa.svg",
      transactionId: "**** 1234",
    },
    status: TStatus.ACTIVE,
  },
  {
    id: "2",
    "User Name": {
      photo: "/icons/profile.svg",
      name: "Jane Smith",
      email: "email@gmail.com",
    },
    "Current Plan": TPlan.FREE,
    "Renewal Date": "Jan 15, 2025",
    "Payment Method": {
      cardType: "/icons/card/mastercard.svg",
      transactionId: "**** 1234",
    },
    status: TStatus.TRIAL,
  },
  {
    id: "3",
    "User Name": {
      photo: "/icons/profile.svg",
      name: "Michael Johnson",
      email: "email@gmail.com",
    },
    "Current Plan": TPlan.FAMILY,
    "Renewal Date": "Jan 15, 2025",
    "Payment Method": {
      cardType: "/icons/card/visa.svg",
      transactionId: "**** 5678",
    },
    status: TStatus.CANCELED,
  },
  {
    id: "4",
    "User Name": {
      photo: "/icons/profile.svg",
      name: "Sarah Williams",
      email: "email@gmail.com",
    },
    "Current Plan": TPlan.PREMIUM,
    "Renewal Date": "Jan 15, 2025",
    "Payment Method": {
      cardType: "/icons/card/visa.svg",
      transactionId: "**** 2345",
    },
    status: TStatus.ACTIVE,
  },
  {
    id: "4",
    "User Name": {
      photo: "/icons/profile.svg",
      name: "Sarah Williams",
      email: "email@gmail.com",
    },
    "Current Plan": TPlan.PREMIUM,
    "Renewal Date": "Jan 15, 2025",
    "Payment Method": {
      cardType: "/icons/card/visa.svg",
      transactionId: "**** 2345",
    },
    status: TStatus.ACTIVE,
  },
  {
    id: "4",
    "User Name": {
      photo: "/icons/profile.svg",
      name: "Sarah Williams",
      email: "email@gmail.com",
    },
    "Current Plan": TPlan.PREMIUM,
    "Renewal Date": "Jan 15, 2025",
    "Payment Method": {
      cardType: "/icons/card/visa.svg",
      transactionId: "**** 2345",
    },
    status: TStatus.ACTIVE,
  },
  {
    id: "4",
    "User Name": {
      photo: "/icons/profile.svg",
      name: "Sarah Williams",
      email: "email@gmail.com",
    },
    "Current Plan": TPlan.PREMIUM,
    "Renewal Date": "Jan 15, 2025",
    "Payment Method": {
      cardType: "/icons/card/visa.svg",
      transactionId: "**** 2345",
    },
    status: TStatus.ACTIVE,
  },
  {
    id: "4",
    "User Name": {
      photo: "/icons/profile.svg",
      name: "Sarah Williams",
      email: "email@gmail.com",
    },
    "Current Plan": TPlan.PREMIUM,
    "Renewal Date": "Jan 15, 2025",
    "Payment Method": {
      cardType: "/icons/card/visa.svg",
      transactionId: "**** 2345",
    },
    status: TStatus.ACTIVE,
  },
  {
    id: "4",
    "User Name": {
      photo: "/icons/profile.svg",
      name: "Sarah Williams",
      email: "email@gmail.com",
    },
    "Current Plan": TPlan.PREMIUM,
    "Renewal Date": "Jan 15, 2025",
    "Payment Method": {
      cardType: "/icons/card/visa.svg",
      transactionId: "**** 2345",
    },
    status: TStatus.ACTIVE,
  },
  {
    id: "4",
    "User Name": {
      photo: "/icons/profile.svg",
      name: "Sarah Williams",
      email: "email@gmail.com",
    },
    "Current Plan": TPlan.PREMIUM,
    "Renewal Date": "Jan 15, 2025",
    "Payment Method": {
      cardType: "/icons/card/visa.svg",
      transactionId: "**** 2345",
    },
    status: TStatus.ACTIVE,
  },
  // Add more subscription data as needed for testing pagination
];

export default function SubscriptionTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2; // Number of items per page

  // Pagination logic: Get the data for the current page
  const currentSubscriptions = subscriptions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

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
          {currentSubscriptions.map((subs) => (
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
                <div className="">
                  <h1 className="text-[#111827] font-semibold text-base leading-5">
                    {subs["User Name"].name}
                  </h1>
                  <h1 className="text-[#6B7280] font-normal text-sm leading-5">
                    {subs["User Name"].email}
                  </h1>
                </div>
              </td>
              <td className="px-8 py-4">{planStatus[subs["Current Plan"]]}</td>
              <td className="px-8 py-4">{subs["Renewal Date"]}</td>
              {subs.status !== TStatus.TRIAL ? (
                <td className="flex px-8 py-4">
                  <Image
                    src={subs["Payment Method"].cardType}
                    alt={subs["User Name"].name}
                    width={24}
                    height={24}
                    className=""
                  />
                  <div className="">
                    <h1 className="text-[#111827] font-semibold text-base leading-5">
                      {subs["Payment Method"].transactionId}
                    </h1>
                  </div>
                </td>
              ) : (
                <td className="flex px-8 py-4">
                  <h1 className="text-[#6B7280] font-medium text-base leading-5">
                    No payment method
                  </h1>
                </td>
              )}
              <td className="px-8 py-4">
                <div className="text-[#166534] font-medium text-xs rounded-lg bg-[#DCFCE7] w-fit p-2 px-4">
                  {subs.status}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <section className="w-full px-8 py-4 ">
        <Pagination
          currentPage={currentPage}
          totalItems={subscriptions.length}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />
      </section>
    </main>
  );
}
