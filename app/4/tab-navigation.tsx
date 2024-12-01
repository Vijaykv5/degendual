export function TabNavigation() {
  return (
    <div className="flex gap-2 mt-4">
      <button className="px-4 py-2 text-sm rounded-lg bg-[#1c1d29] text-white">
        Positions
      </button>
      <button className="px-4 py-2 text-sm rounded-lg text-gray-400 hover:bg-[#1c1d29] transition-colors">
        Trade History
      </button>
    </div>
  );
}
