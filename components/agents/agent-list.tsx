import AgentListItem from "./agent-list-item";

const agents = [
  { marketCap: 2456655, date: "12-12-24" },
  { marketCap: 546567, date: "12-12-24" },
  { marketCap: 45768, date: "12-12-24" },
  { marketCap: 0.01, date: "12-12-24" },
  { marketCap: 0.01, date: "12-12-24" },
  { marketCap: 0.01, date: "12-12-24" },
  { marketCap: 0.01, date: "12-12-24" },
  { marketCap: 0.01, date: "12-12-24" },
  { marketCap: 0.01, date: "12-12-24" },
  { marketCap: 0.01, date: "12-12-24" },
];

export default function AgentList() {
  return (
    <div className="px-8">
      <div className="flex items-center text-xs text-gray-400 mb-4 px-4">
        <div className="flex-1">In Pool</div>
        <div className="w-32 text-right mr-9">Market Cap</div>
        <div className="w-32 text-right">Agent Creation Date</div>
      </div>

      <div className="space-y-1">
        {agents.map((agent, index) => (
          <AgentListItem
            key={index}
            marketCap={agent.marketCap}
            date={agent.date}
          />
        ))}
      </div>
    </div>
  );
}
