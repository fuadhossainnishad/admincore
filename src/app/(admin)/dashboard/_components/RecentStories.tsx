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
    <main className="recent-stories">
      <h2>Recent Stories</h2>
      <table className="story-table">
        <thead>
          <tr>
            {Object.entries(recentStories[0])
              .filter(([key]) => key !== "id")
              .map(([key], ind) => (
                <th key={ind}>{key}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {recentStories.map((story) => (
            <tr key={story.id}>
              <td>{story.title}</td>
              <td>{story.creator}</td>
              <td>{story.date.toLocaleDateString()}</td>
              <td>{story.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <style jsx>{`
        .story-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
        }
        .story-table th,
        .story-table td {
          padding: 10px;
          text-align: left;
          border-bottom: 1px solid #ddd;
        }
        .story-table th {
          background-color: #f4f4f4;
        }
        .story-table tr:hover {
          background-color: #f1f1f1;
        }
      `}</style> */}
    </main>
  );
}
