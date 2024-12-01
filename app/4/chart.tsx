"use client";

import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { ArrowRight, Copy } from "lucide-react";
import { TabNavigation } from "./tab-navigation";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Sample data - in a real app this would come from an API
const generateChartData = () => {
  const data = [];
  let value = 55400;
  for (let i = 0; i < 100; i++) {
    value += Math.random() * 100 - 50;
    data.push({
      time: i,
      value: value.toFixed(2),
    });
  }
  return data;
};

const timeIntervals = ["15s", "30s", "1m", "5m", "15m", "1h", "4h", "6h"];

export default function CryptoChart() {
  const chartData = generateChartData();

  const data = {
    labels: chartData.map((item) => item.time),
    datasets: [
      {
        data: chartData.map((item) => item.value),
        borderColor: "#0ea5e9",
        backgroundColor: "rgba(14, 165, 233, 0.1)",
        borderWidth: 2,
        pointRadius: 0,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: "index",
        intersect: false,
        backgroundColor: "#1c1d29",
        titleColor: "#fff",
        bodyColor: "#fff",
        borderColor: "#374151",
        borderWidth: 1,
        displayColors: false,
        callbacks: {
          label: function (context: { parsed: { y: number; }; }) {
            return `$${context.parsed.y.toFixed(2)}`;
          },
        },
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: true,
        position: "right",
        grid: {
          color: "#1c1d29",
        },
        ticks: {
          color: "#666",
          callback: function (value: number) {
            return value.toFixed(2);
          },
        },
      },
    },
    interaction: {
      mode: "index",
      intersect: false,
    },
  };

  return (
    <div className="min-h-screen bg text-white p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 bg-purple-600 rounded-full flex items-center justify-center">
            <span className="text-lg font-bold">$</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold">$SPECTRE</h1>
              <span className="text-gray-400">Spectre</span>
              <div className="flex items-center gap-1 text-gray-400 text-sm">
                <span>0x20.....4567</span>
                <Copy className="h-4 w-4 cursor-pointer hover:text-white" />
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Real-time feed of tokens launched in the past 24h
            </p>
          </div>
        </div>
        <div className="flex gap-8">
          <div>
            <h3 className="text-2xl font-mono">$234.00</h3>
            <p className="text-gray-400 text-sm">Unrealized PnL</p>
          </div>
          <div>
            <h3 className="text-2xl font-mono">$36.00</h3>
            <p className="text-gray-400 text-sm">Total Balance</p>
          </div>
          <div>
            <h3 className="text-2xl font-mono">--</h3>
            <p className="text-gray-400 text-sm">Trading Volume</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-[2fr,1fr] gap-6  h-fit max-w-[1400px] mx-auto">
        {/* Chart Section */}
        <div className="bg-[#14151f] rounded-lg p-6 w-full">
          <div className="flex gap-4 mb-6">
            <div className="flex gap-2 bg-[#1c1d29] p-1 rounded-lg">
              <button className="bg-[#2b2d3a] p-1 rounded">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 3v18h18" />
                  <path d="M3 15l6-6 4 4 8-8" />
                </svg>
              </button>
              <button className="p-1 rounded hover:bg-[#2b2d3a]">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M8 3v18M16 3v18" />
                </svg>
              </button>
              <button className="p-1 rounded hover:bg-[#2b2d3a]">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 3h18v18H3z" />
                </svg>
              </button>
            </div>
            <div className="flex gap-2">
              {timeIntervals.map((interval) => (
                <button
                  key={interval}
                  className={`px-2 py-1 text-sm rounded ${
                    interval === "15s"
                      ? "text-[#4fff4f]"
                      : "text-gray-400 hover:bg-[#1c1d29]"
                  }`}
                >
                  {interval}
                </button>
              ))}
            </div>
          </div>

          <div className="h-[400px]">
            <Line data={data} options={options} />
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6 w-full max-w-[400px] justify-self-end">
          <div className="bg-[#14151f] rounded-lg p-6">
            <div className="flex items-center justify-center mb-6 relative">
              <div className="absolute inset-x-0 top-1/2 h-[1px] bg-[#FFFFFF1A] opacity-20" />
              <h2 className="text-lg px-4 bg-[#14151f] relative z-10 text-white">
                Governance <span className="text-gray-400">• 21 Holders</span>
              </h2>
            </div>

            {/* Combined Chat Messages */}
            <div className="space-y-4">
              {/* First Message */}
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 bg-rose-900/30 rounded-full flex items-center justify-center overflow-hidden">
                  <img
                    src="/placeholder.svg?height=32&width=32"
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 bg-[#1c1d29] rounded-lg p-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#00C278]">metabodivan</span>
                    <span className="text-[#00C278] text-sm font-mono">
                      03:27 PM
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 mt-1">
                    A token that embodies the cosmic and ethereal aesthetic of
                    Spectra
                  </p>
                </div>
              </div>

              {/* Second Message */}
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 bg-gray-800 rounded-full flex items-center justify-center overflow-hidden">
                  <img
                    src="/placeholder.svg?height=32&width=32"
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 bg-[#1c1d29] rounded-lg p-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#00C278]">0xc...34ds</span>
                    <span className="text-[#00C278] text-sm font-mono">
                      12:34 PM
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 mt-1">YUP!</p>
                </div>
              </div>
              <div className="mt-20">
                <div className="relative mt-48">
                  <input
                    type="text"
                    className="w-full bg-[#1c1d29] hover:bg-[#252632] text-gray-400 py-4 pl-6 pr-16 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-[#7455FF]"
                    placeholder="Must Hold $SPECTRE"
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#7455FF] p-2 rounded-lg hover:bg-[#5e45e0]">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <TabNavigation />
      </div>
    </div>
  );
}
