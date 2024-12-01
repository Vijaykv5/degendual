import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="relative max-w-xl w-full">
      <input
        type="text"
        placeholder="Search"
        className="w-full bg-[#4f3ed2] text-white placeholder-gray-400 px-4 py-2 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
      />
      <Search
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        size={18}
      />
    </div>
  );
}
