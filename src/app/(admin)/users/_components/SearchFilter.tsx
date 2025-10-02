"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function SearchFilter({
  handleSearch,
  selectedPlan,
  setSelectedPlan,
  selectedStatus,
  setSelectedStatus,
}: {
  handleSearch: (searchQuery: string) => void;
  selectedPlan: string;
  setSelectedPlan: React.Dispatch<React.SetStateAction<string>>;
  selectedStatus: string;
  setSelectedStatus: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [showPlanList, setShowPlanList] = useState<boolean>(false);
  const [showStatusList, setShowStatusList] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const plansWithAll = ["All Plans", "Trial Period", "Trial Period1", "Trial Period2"];
  const statusList = ["All Status", "trialing", "active", "canceled"];

  const handleSelect = (plan: string) => {
    setSelectedPlan(plan);
    setShowPlanList(false);
  };

  const handleSelectStatus = (status: string) => {
    setSelectedStatus(status);
    setShowStatusList(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <main className="flex gap-10 border-[1px] border-[#E5E7EB] rounded-xl w-full p-8">
      <section className="flex gap-3 border-[1px] border-[#E5E7EB] rounded-xl grow p-4">
        <Image src="/icons/search.svg" alt="search" height={16} width={16} />
        <input
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Search subscribers..."
          className="text-[#ADAEBC] text-base leading-6 font-normal border-none outline-none focus:outline-none focus:ring-0 grow"
        />
      </section>

      <section className="relative border-[1px] border-[#E5E7EB] rounded-xl p-4">
        <div className="flex gap-6 cursor-pointer" onClick={() => setShowPlanList(!showPlanList)}>
          <div className="text-[#000000] text-base leading-6 font-normal grow">{selectedPlan}</div>
          <Image src="/icons/downArrow3.svg" alt="downArrow" height={16} width={16} />
        </div>
        {showPlanList && plansWithAll.length > 0 && (
          <ul className="absolute z-10 w-full mt-1 overflow-y-auto  bg-white border border-gray-200 rounded-lg shadow-md">
            {plansWithAll.map((plan, index) => (
              <li
                key={index}
                onClick={() => handleSelect(plan)}
                className={`${selectedPlan === plan ? "bg-[#E5E7EB]" : ""} px-4 py-2 hover:bg-gray-100 cursor-pointer`}
              >
                {plan}
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="relative border-[1px] border-[#E5E7EB] rounded-xl p-4">
        <div className="flex gap-6 cursor-pointer" onClick={() => setShowStatusList(!showStatusList)}>
          <div className="text-[#ADAEBC] text-base leading-6 font-normal grow">{selectedStatus}</div>
          <Image src="/icons/downArrow3.svg" alt="search" height={16} width={16} />
        </div>
        {showStatusList && statusList.length > 0 && (
          <ul className="absolute z-10 w-full mt-1 max-h-48 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-md">
            {statusList.map((status, index) => (
              <li
                key={index}
                onClick={() => handleSelectStatus(status)}
                className={`${selectedStatus === status ? "bg-[#E5E7EB]" : ""} px-4 py-2 hover:bg-gray-100 cursor-pointer`}
              >
                {status}
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
