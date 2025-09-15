import React from "react";
import Profile from "./_components/Profile";

export default function ProfilePage() {
  return (
    <main className="space-y-10">
      <section className="text-[#111827] space-y-2">
        <h1 className=" font-bold text-3xl leading-9">Profile Management</h1>
        <p className="font-normal text-base leading-6">
          Manage admin profile
        </p>
      </section>
      <Profile />
    </main>
  );
}
