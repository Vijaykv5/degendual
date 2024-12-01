import Link from "next/link";
import { Search } from "lucide-react";
import { MdAccountBalanceWallet } from "react-icons/md";
import { SiSolana } from "react-icons/si";

export default function Navbar() {
  return (
    <nav className="bg-gradient-navbar h-14 px-6 flex items-center justify-between fixed top-0 left-0 right-0 z-10">
      {/* Logo */}
      <Link href="/" className="text-white font-lexend text-lg">
        DEGENDUEL
      </Link>

      {/* Search Bar */}
      <div className="relative w-96 bg-[#00000033] rounded-xl">
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-[#FFFFFF0D] text-white placeholder-gray-400 px-6 py-2 pr-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
        />
        <Search
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
          size={16}
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <Link
          href="/how-it-works"
          className="text-white hover:text-gray-200 text-sm"
        >
          How it works?
        </Link>
        <div className="bg-[#192634] text-white px-4 py-2 flex items-center gap-2 text-sm rounded-2xl">
          {/* Wallet Icon */}
          <MdAccountBalanceWallet size={16} className="text-[#cccccc]" />

          {/* Solana SVG Icon */}
          <SiSolana size={16} className="text-[#cccccc]" />

          {/* Value */}
          <span className="text-lg">0.74</span>
        </div>
      </div>
    </nav>
  );
}
