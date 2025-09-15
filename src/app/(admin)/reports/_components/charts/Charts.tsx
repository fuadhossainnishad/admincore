"use client";
import React, { useRef } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";

// Register components
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

interface UserGrowthData {
  month: string;
  year: string;
  users: number;
}

const userGrowthData: UserGrowthData[] = [
  { month: "Jan", year: "2025", users: 32 },
  { month: "Feb", year: "2025", users: 22 },
  { month: "Mar", year: "2025", users: 38 },
  { month: "Apr", year: "2025", users: 28 },
  { month: "May", year: "2025", users: 25 },
  { month: "Jun", year: "2025", users: 32 },
  { month: "Jul", year: "2025", users: 35 },
  { month: "Aug", year: "2025", users: 35 },
  { month: "Sep", year: "2025", users: 35 },
  { month: "Oct", year: "2025", users: 35 },
  { month: "Nov", year: "2025", users: 35 },
  { month: "Dec", year: "2025", users: 35 },
];

// Filter by year
const filterDataByYear = (data: UserGrowthData[], year: string) =>
  data.filter((item) => item.year === year);

const UserGrowthChart = ({ selectedYear }: { selectedYear: string }) => {
  const chartRef = useRef(null);
  const filteredData = filterDataByYear(userGrowthData, selectedYear);

  // Gradient background for bars
  const createGradient = (ctx: CanvasRenderingContext2D) => {
    const gradient = ctx.createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, "#60a5fa");
    gradient.addColorStop(1, "#1e3a8a");
    return gradient;
  };

  const data: ChartData<"bar"> = {
    labels: filteredData.map((d) => d.month),
    datasets: [
      {
        data: filteredData.map((d) => d.users),
        backgroundColor: (ctx) => {
          const chart = ctx.chart;
          const { ctx: canvas } = chart;
          return createGradient(canvas);
        },
        borderRadius: 6,
        borderSkipped: false,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { stepSize: 10 },
        grid: { display: true },
        border: { display: true },
      },
      x: {
        grid: { display: false },
        border: { display: false },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className=" w-full h-[300px]">
      <Bar ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default UserGrowthChart;
