"use client";
import Image from "next/image";
import React, { useState } from "react";
import { TPlan, TStatus } from "./SubscriptionTable";

export default function SearchFilter() {
  const [showPlanList, setShowPlanList] = useState<boolean>(false);
  const [showStatusList, setShowStatusList] = useState<boolean>(false);

  // const [searchQuery, setSearchQuery] = useState("");
  const [selectedPlan, setSelectedPlan] = useState<string | null>("All Plans");
  const [selectedStatus, setSelectedStatus] = useState<string | null>(
    "All Status"
  );

  const plansWithAll = ["All Plans", ...Object.values(TPlan)];
  // const filteredPlans = plansWithAll.filter((plan) =>
  //   plan.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  const statusList = ["All Status", ...Object.values(TStatus)];

  const handleSelect = (plan: string) => {
    setSelectedPlan(plan);
    // setSearchQuery(plan);
    setShowPlanList(false);
  };
  const handleSelectStatus = (status: string) => {
    setSelectedStatus(status);
    // setSearchQuery(plan);
    setShowStatusList(false);
  };
  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   // setSearchQuery(e.target.value);
  //   setShowPlanList(true);
  // };

  const handleFocus = () => {
    setShowPlanList(true);
  };

  const handleBlur = () => {
    setTimeout(() => setShowPlanList(false), 200);
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
      <section className="relative border-[1px] border-[#E5E7EB] rounded-xl  p-4">
        <div
          className="flex cursor-pointer"
          onClick={() => setShowPlanList(!showPlanList)}
        >
          <input
            placeholder={selectedPlan!}
            value={selectedPlan!}
            // onChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="text-[#000000] text-base leading-6 font-normal border-none outline-none focus:outline-none focus:ring-0 grow"
          />
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
      <section className="relative border-[1px] border-[#E5E7EB] rounded-xl  p-4">
        <div
          className="flex cursor-pointer"
          onClick={() => setShowStatusList(!showStatusList)}
        >
          <input
            placeholder={selectedStatus!}
            value={selectedStatus!}
            // onChange={handleInputChange}
            onFocus={() => setShowStatusList(true)}
            onBlur={() => {
              setTimeout(() => setShowStatusList(false), 200);
            }}
            className="text-[#ADAEBC] text-base leading-6 font-normal border-none outline-none focus:outline-none focus:ring-0 grow"
          />
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
