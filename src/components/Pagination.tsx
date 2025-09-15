"use client";

import React from "react";
import { Button } from "./ui/button"; // Assuming you have a custom Button component

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  // Logic for pagination numbers
  const maxVisiblePages = 5; // You can adjust this to control how many page numbers are visible at once

  const getPageNumbers = () => {
    if (totalPages <= maxVisiblePages) {
      // If there are fewer pages than maxVisiblePages, display all
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 3) {
      // If we are in the first pages, show the first few pages
      return [1, 2, 3, "...", totalPages];
    }

    if (currentPage >= totalPages - 2) {
      // If we are on the last pages, show the last few pages
      return [1, "...", totalPages - 2, totalPages - 1, totalPages];
    }

    // Otherwise, display the current page with some surrounding pages
    return [
      1,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      totalPages,
    ];
  };

  // Handle page change when a page number is clicked
  const handlePageNumberClick = (page: number) => {
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  return (
    <main className="flex justify-between items-center w-full">
      <section className="flex gap-1 text-sm text-gray-600">
        <h1>Showing</h1>
        <span>{startItem}</span> - <span>{endItem}</span> of{" "}
        <span>{totalItems}</span> subscriptions
      </section>

      <section className="flex items-center gap-4">
        <Button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300 disabled:text-black/90 disabled:border-[#D1D5DB] border-[1px] border-[#D1D5DB]"
        >
          Previous
        </Button>

        <div className="flex gap-2">
          {getPageNumbers().map((page, index) => {
            if (page === "...") {
              return (
                <span key={index} className="text-sm text-gray-500 border-[1px] border-[#D1D5DB]">
                  ...
                </span>
              );
            }
            return (
              <Button
                key={index}
                onClick={() => handlePageNumberClick(page as number)}
                className={`px-3 py-2 rounded-md text-sm border-[1px] border-[#D1D5DB] ${
                  currentPage === page
                    ? "bg-blue-500 text-white"
                    : "bg-white text-blue-500"
                }`}
              >
                {page}
              </Button>
            );
          })}
        </div>

        <Button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300 border-[1px] border-[#D1D5DB]"
        >
          Next
        </Button>
      </section>
    </main>
  );
};

export default Pagination;
