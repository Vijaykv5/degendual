import Navbar from "@/components/layout/navbar";
import Sidebar from "@/components/layout/sidebar";
import AgentList from "@/components/agents/agent-list";

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
                Your Created Agents
              </h1>
              <p className="text-gray-400 font-akshar text-xs">
                Real-time feed of tokens launched in the past 24h
              </p>
            </div>

            <button className="flex items-center justify-center bg-[#2A2856] border border-[#6e67f4] text-white px-6 py-3 rounded-lg hover:bg-[#372799] transition-colors font-lexend text-sm">
              + Create New Agent
            </button>
          </div>

          <AgentList />
        </div>
      </main>
    </div>
  );
}
