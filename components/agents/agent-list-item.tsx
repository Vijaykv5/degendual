interface AgentListItemProps {
  marketCap: number;
  date: string;
}

export default function AgentListItem({ marketCap, date }: AgentListItemProps) {
  return (
    <div className="flex items-center bg-[#1c1a27] rounded-lg p-4 hover:bg-[#242230] transition-colors">
      <div className="flex items-center gap-3 flex-1">
        <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
          <span className="text-purple-400 text-lg font-bold">B</span>
        </div>
        <div>
          <div className="text-white text-sm font-akshar">$SPECTRE</div>
          <div className="text-gray-500 text-xs">Spectre</div>
        </div>
      </div>
      <div className="w-32 text-right text-white font-akshar text-sm mr-9">
        $
        {marketCap.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </div>
      <div className="w-32 text-right text-gray-400 text-sm font-mono">{date}</div>
    </div>
  );
}
