"use client";
import React, { useState } from "react";
import Image from "next/image";
import { TPlan, TStatus } from "../page";

export default function SearchFilter() {
  const [showPlanList, setShowPlanList] = useState<boolean>(false);
  const [showStatusList, setShowStatusList] = useState<boolean>(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>("All Plans");
  const [selectedStatus, setSelectedStatus] = useState<string | null>("All Status");

  const plansWithAll = ["All Plans", ...Object.values(TPlan)];
  const statusList = ["All Status", ...Object.values(TStatus)];

  const handleSelect = (plan: string) => {
    setSelectedPlan(plan);
    setShowPlanList(false);
  };

  const handleSelectStatus = (status: string) => {
    setSelectedStatus(status);
    setShowStatusList(false);
  };

  return (
    <main className="flex gap-10 border-[1px] border-[#E5E7EB] rounded-xl w-full p-8">
      <section className="flex gap-3 border-[1px] border-[#E5E7EB] rounded-xl grow p-4">
        <Image src="/icons/search.svg" alt="search" height={16} width={16} />
        <input
          placeholder="Search subscribers..."
          className="text-[#ADAEBC] text-base leading-6 font-normal border-none outline-none focus:outline-none focus:ring-0 grow"
        />
      </section>

      <section className="relative border-[1px] border-[#E5E7EB] rounded-xl p-4">
        <div
          className="flex cursor-pointer"
          onClick={() => setShowPlanList(!showPlanList)}
        >
          <div className="text-[#000000] text-base leading-6 font-normal grow">
            {selectedPlan}
          </div>
          <Image
            src="/icons/downArrow3.svg"
            alt="downArrow"
            height={16}
            width={16}
          />
        </div>
        {showPlanList && plansWithAll.length > 0 && (
          <ul className="absolute z-10 w-[90%] mt-1 max-h-48 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-md">
            {plansWithAll.map((plan, index) => (
              <li
                key={index}
                onClick={() => handleSelect(plan)}
                className={`${
                  selectedPlan === plan ? "bg-[#E5E7EB]" : ""
                } px-4 py-2 hover:bg-gray-100 cursor-pointer`}
              >
                {plan}
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="relative border-[1px] border-[#E5E7EB] rounded-xl p-4">
        <div
          className="flex cursor-pointer"
          onClick={() => setShowStatusList(!showStatusList)}
        >
          <div className="text-[#ADAEBC] text-base leading-6 font-normal grow">
            {selectedStatus}
          </div>
          <Image
            src="/icons/downArrow3.svg"
            alt="search"
            height={16}
            width={16}
          />
        </div>
        {showStatusList && statusList.length > 0 && (
          <ul className="absolute z-10 w-[90%] mt-1 max-h-48 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-md">
            {statusList.map((status, index) => (
              <li
                key={index}
                onClick={() => handleSelectStatus(status)}
                className={`${
                  selectedStatus === status ? "bg-[#E5E7EB]" : ""
                } px-4 py-2 hover:bg-gray-100 cursor-pointer`}
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
