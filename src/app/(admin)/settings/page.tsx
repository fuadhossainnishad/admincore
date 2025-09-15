import React from "react";
import AdminSettingsCard from "./_components/_components/_components/_components/AdminSettingsCard";
import Image from "next/image";

export default function SettingsPage() {
  return (
    <main className="flex flex-col justify-between h-full">
      <section className="space-y-10">
        <section className="text-[#111827] space-y-2">
          <h1 className=" font-bold text-3xl leading-9">Admin Settings</h1>
          <p className="font-normal text-base leading-6">
            Configure application settings and preferences
          </p>
        </section>
        <AdminSettingsCard />
      </section>

      <section className="flex w-full justify-center items-center gap-4">
        <button
          type="reset"
          className="cursor-pointer px-5 py-3 rounded-lg text-black border border-[#D1D5DB]"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="cursor-pointer bg-[#9333EA] px-5 py-3 rounded-lg text-white flex items-center gap-1"
        >
          <Image src="/icons/save.svg" alt="settings" height={14} width={14} />
          Save Settings
        </button>
        <div className="flex"></div>
      </section>
    </main>
  );
}
