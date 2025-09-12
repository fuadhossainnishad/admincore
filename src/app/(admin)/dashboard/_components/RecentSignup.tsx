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
    name: { photo: "/path/to/photo1.jpg", name: "John Doe" },
    email: "john@example.com",
    date: new Date("2023-09-01"),
    plan: TPlan.PREMIUM,
  },
  {
    id: "2",
    name: { photo: "/path/to/photo2.jpg", name: "Jane Smith" },
    email: "jane@example.com",
    date: new Date("2023-09-02"),
    plan: TPlan.FREE,
  },
  {
    id: "3",
    name: { photo: "/path/to/photo3.jpg", name: "Alice Johnson" },
    email: "alice@example.com",
    date: new Date("2023-09-03"),
    plan: TPlan.PREMIUM,
  },
];

export default function RecentSignup() {
  return (
    <main className="recent-signups">
      <h2>Recent Signups</h2>
      <table className="signup-table">
        <thead>
          <tr>
            {Object.entries(recentSignups[0])
              .filter(([key]) => key !== "id")
              .map(([key], ind) => (
                <th key={ind}>{key}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {recentSignups.map((signup) => (
            <tr key={signup.id}>
              <td className="flex ">
                <Image
                  src={signup.name.photo}
                  alt={signup.name.name}
                  width={40}
                  height={40}
                />
                {signup.name.name}
              </td>
              <td>{signup.email}</td>
              <td>{signup.date.toLocaleDateString()}</td>
              <td>{signup.plan === TPlan.PREMIUM ? "Premium" : "Free"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <style jsx>{`
        .signup-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
        }
        .signup-table th,
        .signup-table td {
          padding: 10px;
          text-align: left;
          border-bottom: 1px solid #ddd;
        }
        .signup-table th {
          background-color: #f4f4f4;
        }
        .signup-table tr:hover {
          background-color: #f1f1f1;
        }
      `}</style> */}
    </main>
  );
}
