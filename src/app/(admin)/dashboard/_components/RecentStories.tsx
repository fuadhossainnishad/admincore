import React from "react";
import { IRecentStory } from "../interface";

// Sample data to display in the table
// const recentStories: IRecentStory[] = [
//   {
//     id: "1",
//     title: "New Story on React",
//     creator: "John Doe",
//     date: "2023-09-01",
//     status: "Published",
//   },
//   {
//     id: "2",
//     title: "JavaScript for Beginners",
//     creator: "John Doe",
//     date: "2023-09-02",
//     status: "Published",
//   },
//   {
//     id: "3",
//     title: "Understanding TypeScript",
//     creator: "John Doe",
//     date: "2023-09-03",
//     status: "Published",
//   },
// ];

export default function RecentStories({
  stories,
}: {
  stories: IRecentStory[];
}) {
  return (
    <main className="border-[1px] border-[#E5E7EB] rounded-xl grow">
      <h2 className="text-lg font-semibold leading-7 bg-white p-5 rounded-xl w-full">
        Recent Stories
      </h2>
      <table className="w-full table-fixed text-left text-sm border-[#E5E7EB] ">
        <thead>
          <tr className="bg-[#E5E7EB] text-[#6B7280]">
            {["Title", "Creator", "Date", "Status"].map((key, ind) => (
              <th className="px-5 py-3" key={ind}>
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {stories.map((stories) => (
            <tr
              key={stories.id}
              className="hover:bg-[#F3F4F6] border-b border-b-[#E5E7EB]"
            >
              <td className="flex items-center px-5 py-4">
                <h1 className="text-[#111827] font-semibold text-sm leading-5">
                  {stories.title}
                </h1>
              </td>
              <td className="px-5 py-3">{stories.creator}</td>
              <td className="px-5 py-3">Jan 15, 2025</td>
              <td className="px-5 py-3">
                {stories.status === "Published" ? (
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
