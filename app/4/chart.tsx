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
import { ArrowRight, Copy, LineChart, BarChart2, Square } from "lucide-react";
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
        borderColor: "#4fff4f",
        backgroundColor: "rgba(79, 255, 79, 0.1)",
        borderWidth: 2,
        pointRadius: 0,
        tension: 0.4,
        fill: true,
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
        mode: "index" as "index",
        intersect: false,
        backgroundColor: "#1c1d29",
        titleColor: "#fff",
        bodyColor: "#fff",
        borderColor: "#374151",
        borderWidth: 1,
        displayColors: false,
        callbacks: {
          label: function (context: { parsed: { y: number } }) {
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
        position: "right" as const,
        grid: {
          color: "#1c1d29",
        },
        ticks: {
          color: "#666",
          callback: function (tickValue: string | number) {
            return Number(tickValue).toFixed(2);
          },
        },
      },
    },
    interaction: {
      mode: "index" as const,
      intersect: false,
    },
  };

  return (
    <div className="min-h-screen bg-[#0c0d13] text-white p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 bg-[#7455FF] rounded-full flex items-center justify-center">
            <span className="text-lg font-bold">$</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold">$SPECTRE</h1>
              <span className="text-gray-400">Spectre</span>
              <div className="flex items-center gap-1 text-gray-400 text-sm">
                <span>0x20.....4567</span>
                <Copy className="h-4 w-4 cursor-pointer hover:text-white transition-colors" />
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
      <div className="flex flex-col gap-6 max-w-[1400px] mx-auto">
        {/* First Row */}
        <div className="grid grid-cols-[2fr,1fr] gap-6">
          {/* Chart Section */}
          <div className="bg-[#14151f] rounded-lg p-6">
            <div className="flex gap-4 mb-6">
              <div className="flex gap-2 bg-[#1c1d29] p-1 rounded-lg">
                <button className="bg-[#2b2d3a] p-1.5 rounded">
                  <LineChart className="w-4 h-4" />
                </button>
                <button className="p-1.5 rounded hover:bg-[#2b2d3a] transition-colors">
                  <BarChart2 className="w-4 h-4" />
                </button>
                <button className="p-1.5 rounded hover:bg-[#2b2d3a] transition-colors">
                  <Square className="w-4 h-4" />
                </button>
              </div>
              <div className="flex gap-2">
                {timeIntervals.map((interval) => (
                  <button
                    key={interval}
                    className={`px-2 py-1 text-sm rounded transition-colors ${
                      interval === "15s"
                        ? "text-[#48ef78] bg-[#4fff4f]/10"
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

          {/* Trading Panel */}
          <div className="w-full max-w-[600px] h-full justify-self-end">
            <div className="bg-[#14151f] rounded-lg p-6 h-full flex flex-col justify-between">
              <div className="flex justify-between mb-8">
                <button className="w-[48%] py-2 rounded-lg bg-[#0EC97F] text-white hover:bg-[#4fff4f]/20 transition-colors">
                  Buy
                </button>
                <button className="w-[48%] py-2 rounded-lg bg-[#1c1d29] text-white hover:bg-[#2b2d3a] transition-colors">
                  Sell
                </button>
              </div>

              <div className="space-y-8 text-sm flex-grow">
                <div className="bg-[#1c1d29]/50 rounded-lg p-4">
                  <div className="flex justify-between text-gray-400 mb-2">
                    <span>You Spend</span>
                    <span>$SOL</span>
                  </div>
                  <div className="text-3xl font-mono">0.23</div>
                </div>

                <div className="bg-[#1c1d29]/50 rounded-lg p-4">
                  <div className="flex justify-between text-gray-400 mb-2">
                    <span>You Buy</span>
                    <span></span>
                  </div>
                  <div className="text-3xl font-mono">100.23</div>
                </div>

                <div className="bg-[#1c1d29]/30 rounded-lg p-4 space-y-3">
                  <div className="flex justify-between text-gray-400">
                    <span>Rate</span>
                    <span>1 SOL = 0.0004271 Tokens</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Minimum Received</span>
                    <span>32456 Tokens</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Price Impact</span>
                    <span>{"<0.001%"}</span>
                  </div>
                </div>
              </div>

              <button className="w-full py-4 rounded-xl bg-[#7455FF] hover:bg-[#5e45e0] text-white transition-colors mt-8 text-lg font-medium">
                Place Order
              </button>
            </div>
          </div>
        </div>
        {/* Second Row */}
        <div className="grid grid-cols-2 gap-6">
          {/* Governance Section */}
          <div className="bg-[#14151f] rounded-lg p-6">
            <div className="flex items-center justify-center mb-6 relative">
              <div className="absolute inset-x-0 top-1/2 h-[1px] bg-gray-800" />
              <h2 className="text-lg px-4 bg-[#14151f] relative z-10">
                Governance <span className="text-gray-400">• 21 Holders</span>
              </h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 bg-rose-900/30 rounded-full flex items-center justify-center">
                  <span className="text-rose-500">M</span>
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

              <div className="flex items-start gap-3">
                <div className="h-8 w-8 bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-gray-400">0x</span>
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
            </div>

            {/* <div className="mt-6 space-y-4">
              <div className="bg-[#1c1d29] rounded-lg p-3">
                <div className="flex items-center gap-2 text-[#00C278] text-sm mb-2">
                  $SPECTRE [21-21-24, 12:04:21]
                </div>
                <p className="text-sm text-gray-400">
                  Hey folks! So, I've been keeping an eye on $APE, and it's
                  kinda hanging low right now with the market vibes. I'm
                  thinking that grabbing a small position could really pay off,
                  especially with the buzz around meme tokens that's about to
                  kick off! Let's ride this wave together and see where it takes
                  us!
                </p>
              </div>
            </div> */}

            <div className="mt-40">
              <div className="relative">
                <input
                  type="text"
                  className="w-full bg-[#1c1d29] hover:bg-[#252632] text-gray-100 py-4 pl-6 pr-16 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-[#7455FF]"
                  placeholder="Must Hold $SPECTRE"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#7455FF] p-2 rounded-lg hover:bg-[#5e45e0] transition-colors">
                  <ArrowRight className="h-4 w-4 text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Agent Brain Section */}
          <div className="bg-[#14151f] rounded-lg p-6">
            <h2 className="text-lg mb-6">Agent Brain</h2>
            <div className="space-y-4 mt-2">
              <div className="bg-[#1c1d29] rounded-lg p-3">
                <div className="flex items-center gap-2 text-sm mb-2">
                  <span className="bg-gradient-to-r from-[#28C893] to-[#2C90C2] bg-clip-text text-transparent">
                    $SPECTRE [21-21-24, 12:04:21]
                  </span>
                </div>
                <p className="text-sm text-gray-400">
                  Hey folks! So, I've been keeping an eye on $APE, and it's
                  kinda hanging low right now with the market vibes. I'm
                  thinking that grabbing a small position could really pay off,
                  especially with the buzz around meme tokens that's about to
                  kick off! Let's ride this wave together and see where it takes
                  us!
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-[#1c1d29] rounded-lg p-3">
                <div className="flex items-center gap-2 text-sm mb-2">
                  <span className="bg-gradient-to-r from-[#28C893] to-[#2C90C2] bg-clip-text text-transparent">
                    $SPECTRE [21-21-24, 12:04:21]
                  </span>
                </div>
                <p className="text-sm text-gray-400">
                  Hey folks! So, I've been keeping an eye on $APE, and it's
                  kinda hanging low right now with the market vibes. I'm
                  thinking that grabbing a small position could really pay off,
                  especially with the buzz around meme tokens that's about to
                  kick off! Let's ride this wave together and see where it takes
                  us!
                </p>
              </div>
            </div>
          </div>
        </div>
        <TabNavigation />
      </div>
    </div>
  );
}
