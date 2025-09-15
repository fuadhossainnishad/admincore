"use client";
import React, { useState } from "react";
import StoriesTable from "./_components/StoriesTable";
import UserGrowthChart from "./_components/charts/Charts";
import YearPicker from "./_components/YearPicker"; // Import YearPicker component

export default function ReportsPage() {
  // Set the default selected year to the current year
  const [selectedYear, setSelectedYear] = useState<string>(
    new Date().getFullYear().toString()
  );

  // Handle year change
  const handleYearChange = (year: string) => {
    setSelectedYear(year);
  };

  return (
    <main className="space-y-10">
      <section className="text-[#111827] space-y-2">
        <h1 className="font-bold text-3xl leading-9">Analytics & Reports</h1>
        <p className="font-normal text-base leading-6">
          Monitor app performance and user engagement
        </p>
      </section>

      <section className="flex gap-10 w-full">
        <section className="flex-1 border-[1px] border-[#E5E7EB] bg-white p-5 rounded-lg shadow space-y-4">
          <div className="flex justify-between">
            <h1 className="text-[#111827] font-semibold text-lg">
              User Growth Over Time
            </h1>
            <YearPicker
              selectedYear={selectedYear}
              onYearChange={handleYearChange}
            />
          </div>

          <UserGrowthChart selectedYear={selectedYear} />
        </section>
        <section className="flex-1 border-[1px] border-[#E5E7EB] bg-white p-5 rounded-lg shadow space-y-4">
          <div className="flex justify-between">
            <h1 className="text-[#111827] font-semibold text-lg">
              Stories Created by Age Group
            </h1>
            <YearPicker
              selectedYear={selectedYear}
              onYearChange={handleYearChange}
            />
          </div>

          <UserGrowthChart selectedYear={selectedYear} />
        </section>
      </section>

      <StoriesTable />
    </main>
  );
}
