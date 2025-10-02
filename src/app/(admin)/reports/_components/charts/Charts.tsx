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

interface GrowthData {
  month: string;
  count: number;
}

const UserGrowthChart = ({
  userGrowthData,
}: {
  userGrowthData: GrowthData[];
}) => {
  const chartRef = useRef(null);

  // Gradient background for bars
  const createGradient = (ctx: CanvasRenderingContext2D) => {
    const gradient = ctx.createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, "#60a5fa");
    gradient.addColorStop(1, "#1e3a8a");
    return gradient;
  };

  const data: ChartData<"bar"> = {
    labels: userGrowthData.map((d) => d.month),
    datasets: [
      {
        data: userGrowthData.map((d) => d.count),
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
