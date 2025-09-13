import Image from "next/image";
import React from "react";

export enum TPlan {
  PREMIUM = "premium",
  FREE = "free",
}

export interface IRecentSignup {
  id: string;
  name: {
    photo: string;
    name: string;
  };
  email: string;
  date: Date;
  plan: TPlan;
}

const recentSignups: IRecentSignup[] = [
  {
    id: "1",
    name: { photo: "/icons/profile.svg", name: "John Doe" },
    email: "john@example.com",
    date: new Date("Jan 15, 2025"),
    plan: TPlan.PREMIUM,
  },
  {
    id: "2",
    name: { photo: "/icons/profile.svg", name: "Jane Smith" },
    email: "jane@example.com",
    date: new Date("2023-09-02"),
    plan: TPlan.FREE,
  },
  {
    id: "3",
    name: { photo: "/icons/profile.svg", name: "Alice Johnson" },
    email: "alice@example.com",
    date: new Date("2023-09-03"),
    plan: TPlan.PREMIUM,
  },
];

export default function RecentSignup() {
  return (
    <main className="border-[1px] border-[#E5E7EB] rounded-xl grow">
      <h2 className="text-lg font-semibold leading-7 bg-white p-5 rounded-xl w-full">
        Recent Signups
      </h2>
      <table className="w-full table-fixed text-left text-sm border-[#E5E7EB] ">
        <thead>
          <tr className="bg-[#E5E7EB] text-[#6B7280]">
            {Object.entries(recentSignups[0])
              .filter(([key]) => key !== "id")
              .map(([key], ind) => (
                <th className="px-5 py-3" key={ind}>
                  {key}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {recentSignups.map((signup) => (
            <tr
              key={signup.id}
              className="hover:bg-[#F3F4F6] border-b border-b-[#E5E7EB]"
            >
              <td className="flex items-center px-5 py-4">
                <Image
                  src={signup.name.photo}
                  alt={signup.name.name}
                  width={36}
                  height={36}
                  className="rounded-full mr-3"
                />
                <h1 className="text-[#111827] font-normal text-sm leading-5">
                  {signup.name.name}
                </h1>
              </td>
              <td className="px-5 py-3">{signup.email}</td>
              <td className="px-5 py-3">Jan 15, 2025</td>
              <td className="px-5 py-3">
                {signup.plan === TPlan.PREMIUM ? (
                  <div className="text-[#166534] font-medium text-xs rounded-2xl bg-[#DCFCE7] w-fit p-2 px-3">
                    Premium
                  </div>
                ) : (
                  <div className="text-[#1E40AF] font-medium text-xs rounded-2xl bg-[#DBEAFE] w-fit p-2 px-3">
                    Free
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
