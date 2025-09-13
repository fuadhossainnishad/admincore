import React from "react";

export enum TStatus {
  PUBLISHED = "Published",
  PENDING = "Pending",
}

export interface IRecentStories {
  id: string;
  title: string;
  creator: string;
  date: Date;
  status: TStatus;
}

// Sample data to display in the table
const recentStories: IRecentStories[] = [
  {
    id: "1",
    title: "New Story on React",
    creator: "John Doe",
    date: new Date("2023-09-01"),
    status: TStatus.PUBLISHED,
  },
  {
    id: "2",
    title: "JavaScript for Beginners",
    creator: "John Doe",
    date: new Date("2023-09-02"),
    status: TStatus.PENDING,
  },
  {
    id: "3",
    title: "Understanding TypeScript",
    creator: "John Doe",
    date: new Date("2023-09-03"),
    status: TStatus.PUBLISHED,
  },
];

export default function RecentStories() {
  return (
    <main className="border-[1px] border-[#E5E7EB] rounded-xl grow">
      <h2 className="text-lg font-semibold leading-7 bg-white p-5 rounded-xl w-full">
        Recent Stories
      </h2>
      <table className="w-full table-fixed text-left text-sm border-[#E5E7EB] ">
        <thead>
          <tr className="bg-[#E5E7EB] text-[#6B7280]">
            {Object.entries(recentStories[0])
              .filter(([key]) => key !== "id")
              .map(([key], ind) => (
                <th className="px-5 py-3" key={ind}>
                  {key}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {recentStories.map((stories) => (
            <tr
              key={stories.id}
              className="hover:bg-[#F3F4F6] border-b border-b-[#E5E7EB]"
            >
              <td className="flex items-center px-5 py-4">
                <h1 className="text-[#111827] font-medium text-sm leading-5">
                  {stories.title}
                </h1>
              </td>
              <td className="px-5 py-3">{stories.creator}</td>
              <td className="px-5 py-3">Jan 15, 2025</td>
              <td className="px-5 py-3">
                {stories.status === TStatus.PUBLISHED ? (
                  <div className="text-[#166534] font-medium text-xs rounded-2xl bg-[#DCFCE7] w-fit p-2 px-3">
                    Published
                  </div>
                ) : (
                  <div className="text-[#854D0E] font-medium text-xs rounded-2xl bg-[#FEF9C3] w-fit p-2 px-3">
                    Pending
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
