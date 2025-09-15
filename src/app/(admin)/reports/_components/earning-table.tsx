"use client";

import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

type Subscription = {
  serial: string;
  name: string;
  Expiredate: string;
  subscriptionType: "Pro Plan" | "Premium Plan" | "Basic Plan";
  purchaseDate: string;
};

interface SubscriptionrTableProps {
  subscriptions: Subscription[];
}

export default function EarningTable({
  subscriptions,
}: SubscriptionrTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-[#08692C] text-white">
          <tr>
            <th className="px-6 py-2 text-left text-sm font-medium">Serial</th>
            <th className="px-6 py-2 text-left text-sm font-medium">
              User Name
            </th>
            <th className="px-6 py-2 text-left text-sm font-medium">
              Expire Data
            </th>
            <th className="px-6 py-2 text-left text-sm font-medium">
              <div className="flex items-center space-x-1">
                <span>Subscription Type</span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0 rounded-full hover:bg-transparent cursor-pointer"
                >
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </div>
            </th>
            <th className="px-6 py-4 text-left text-sm font-medium">
              Purchase Data
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {subscriptions.map((subs, index) => (
            <tr key={`${subs.serial}-${index}`} className={"bg-white"}>
              <td className="px-6 py-4 text-sm text-gray-900 font-bold">
                {subs.serial}
              </td>
              <td className="px-6 py-4 text-sm text-gray-900 font-bold">
                {subs.name}
              </td>
              <td className="px-6 py-4 text-sm  text-muted-foreground">
                {subs.Expiredate}
              </td>
              <td className="px-6 py-4 text-sm text-gray-900">
                {subs.subscriptionType}
              </td>
              <td className="px-6 py-4 text-sm text-muted-foreground">
                {subs.purchaseDate}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
