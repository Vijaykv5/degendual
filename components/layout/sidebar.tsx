import Link from "next/link";
import { Home, Users, Trophy, Twitter, AtSign, Send } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-[72px] bg-[#0D0D12] h-screen fixed left-0 top-14 flex flex-col py-6 border-r border-[#2F2F3A]">
      {/* Main Navigation */}
      <div className="flex flex-col items-center gap-4">
        <Link
          href="/"
          className="w-12 h-12 flex items-center justify-center text-[#665EE5] bg-[#2A2856] hover:bg-[#1B1B27] rounded-xl transition-all ring-2 ring-[#6C5DD3] shadow-[0_0_8px_rgba(108,93,211,0.5)]"
        >
          <Home size={20} />
        </Link>
        <Link
          href="/"
          className="w-12 h-12 flex items-center justify-center text-gray-400 bg-[#15151F] hover:bg-[#1B1B27] rounded-xl transition-all relative shadow-[0_0_0_1px_rgba(47,47,58,0.1)] hover:shadow-[0_0_0_1px_rgba(47,47,58,0.2)]"
        >
          <Users size={20} />
          <span className="absolute -top-1 -right-1 bg-[#6C5DD3] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            4
          </span>
        </Link>
        <Link
          href="/"
          className="w-12 h-12 flex items-center justify-center text-gray-400 bg-[#15151F] hover:bg-[#1B1B27] rounded-xl transition-all shadow-[0_0_0_1px_rgba(47,47,58,0.1)] hover:shadow-[0_0_0_1px_rgba(47,47,58,0.2)]"
        >
          <Trophy size={20} />
        </Link>
      </div>

      {/* Social Links */}
      <div className="mt-auto flex flex-col items-center gap-4">
        <Link
          href="#"
          className="w-12 h-12 flex items-center justify-center text-gray-400 bg-[#15151F] hover:bg-[#1B1B27] rounded-xl transition-all shadow-[0_0_0_1px_rgba(47,47,58,0.1)] hover:shadow-[0_0_0_1px_rgba(47,47,58,0.2)]"
        >
          <Twitter size={20} />
        </Link>
        <Link
          href="#"
          className="w-12 h-12 flex items-center justify-center text-gray-400 bg-[#15151F] hover:bg-[#1B1B27] rounded-xl transition-all shadow-[0_0_0_1px_rgba(47,47,58,0.1)] hover:shadow-[0_0_0_1px_rgba(47,47,58,0.2)]"
        >
          <AtSign size={20} />
        </Link>
        <Link
          href="#"
          className="w-12 h-12 flex items-center justify-center text-gray-400 bg-[#15151F] hover:bg-[#1B1B27] rounded-xl transition-all shadow-[0_0_0_1px_rgba(47,47,58,0.1)] hover:shadow-[0_0_0_1px_rgba(47,47,58,0.2)]"
        >
          <Send size={20} className="rotate-45" />
        </Link>
      </div>
    </div>
  );
}
