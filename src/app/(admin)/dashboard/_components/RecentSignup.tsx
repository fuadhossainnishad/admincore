import Image from "next/image";
import React from "react";

export enum TPlan {
  PREMIUM = "premium",
  FREE = "free",
}

export interface IRecentSignup {
  id: string;
  Name: {
    photo: string;
    name: string;
  };
  Email: string;
  Date: Date;
  Plan: TPlan;
}

const recentSignups: IRecentSignup[] = [
  {
    id: "1",
    Name: { photo: "/icons/profile.svg", name: "John Doe" },
    Email: "john@example.com",
    Date: new Date("Jan 15, 2025"),
    Plan: TPlan.PREMIUM,
  },
  {
    id: "2",
    Name: { photo: "/icons/profile.svg", name: "Jane Smith" },
    Email: "jane@example.com",
    Date: new Date("2023-09-02"),
    Plan: TPlan.FREE,
  },
  {
    id: "3",
    Name: { photo: "/icons/profile.svg", name: "Alice Johnson" },
    Email: "alice@example.com",
    Date: new Date("2023-09-03"),
    Plan: TPlan.PREMIUM,
  },
];

export default function RecentSignup({ signup }: { signup: IRecentSignup[] }) {
  return (
    <main className="border-[1px] border-[#E5E7EB] rounded-xl grow">
      <h2 className="text-lg font-semibold leading-7 bg-white p-5 rounded-xl w-full">
        Recent Signups
      </h2>
      <table className="w-full table-fixed text-left text-sm border-[#E5E7EB] ">
        <thead>
          <tr className="bg-[#E5E7EB] text-[#6B7280]">
            {Object.entries(signup[0]!)
              .filter(([key]) => key !== "id")
              .map(([key], ind) => (
                <th className="px-5 py-3" key={ind}>
                  {key}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {signup.map((signup) => (
            <tr
              key={signup.id}
              className="hover:bg-[#F3F4F6] border-b border-b-[#E5E7EB]"
            >
              <td className="flex items-center px-5 py-4">
                <Image
                  src={signup.Name.photo}
                  alt={signup.Name.name}
                  width={36}
                  height={36}
                  className="rounded-full mr-3"
                />
                <h1 className="text-[#111827] font-semibold text-sm leading-5">
                  {signup.Name.name}
                </h1>
              </td>
              <td className="px-5 py-3">{signup.Email}</td>
              <td className="px-5 py-3">Jan 15, 2025</td>
              <td className="px-5 py-3">
                {signup.Plan === TPlan.PREMIUM ? (
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
