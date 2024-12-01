import Navbar from "@/components/layout/navbar";
import Sidebar from "@/components/layout/sidebar";
import AgentList from "./agent-list";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#13111c]">
      <Navbar />
      <Sidebar />

      <main className="pl-24 pr-8 pt-20 font-lexend">
        <div className="max-w-[2000px]">
          <div className="flex justify-between items-center mb-6 px-8">
            <div>
              <h1 className="text-xl font-lexend text-white mt-20">
                Leaderboard
              </h1>
              <p className="text-gray-400 font-akshar text-xs">
                Real-time feed of tokens launched in the past 24h
              </p>
            </div>
          </div>

          <AgentList />
        </div>
      </main>
    </div>
  );
}
