import React from "react";

export interface IStory {
  id: string;
  Title: {
    title: string;
    genre: string;
    readingTime: string;
  };
  Reads: number;
  Likes: number;
  Share: number;
}

const recentStories: IStory[] = [
  {
    id: "1",
    Title: {
      title: "The Great Adventure",
      genre: "Adventure",
      readingTime: "10 min",
    },
    Reads: 150,
    Likes: 80,
    Share: 50,
  },
  {
    id: "2",
    Title: {
      title: "The Science of Space",
      genre: "Science",
      readingTime: "15 min",
    },
    Reads: 200,
    Likes: 120,
    Share: 30,
  },
  {
    id: "3",
    Title: {
      title: "Romantic Tales",
      genre: "Romance",
      readingTime: "12 min",
    },
    Reads: 180,
    Likes: 100,
    Share: 70,
  },
];

export default function StoriesTable() {
  return (
    <main className="border-[1px] border-[#E5E7EB] rounded-xl grow">
      <h2 className="text-lg font-semibold leading-7 bg-white p-5 rounded-xl w-full">
        Top Performing Stories
      </h2>
      <table className="w-full table-fixed text-left text-sm border-[#E5E7EB] ">
        <thead>
          <tr className="bg-[#E5E7EB] text-[#6B7280]">
            {Object.entries(recentStories[0])
              .filter(([key]) => key !== "id")
              .map(([key], ind) => (
                <th
                  className={`px-5 py-3 ${key === "Title" ? "w-1/2" : ""}`}
                  key={ind}
                >
                  {key}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {recentStories.map((story) => (
            <tr
              key={story.id}
              className="hover:bg-[#F3F4F6] border-b border-b-[#E5E7EB]"
            >
              <td className="px-5 py-4 w-1/2">
                <h1 className="text-[#111827] font-normal text-base leading-5">
                  {story.Title.title}
                </h1>
                <ul className="flex gap-1 text-[#6B7280]">
                  <li className=" font-normal text-sm leading-5">
                    {story.Title.genre}
                  </li>
                  <li className=" font-normal text-sm leading-5 flex items-center">
                    <span className="w-1 h-1 bg-[#6B7280] rounded-full mr-1"></span>
                    {story.Title.readingTime}
                  </li>
                </ul>
              </td>
              <td className="px-5 py-3">{story.Reads}</td>
              <td className="px-5 py-3">{story.Likes}</td>
              <td className="px-5 py-3">{story.Share}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
