import TokenCard from "../ui/token-card";
import {
  Bitcoin,
  EclipseIcon as Ethereum,
  BitcoinIcon as Binance,
  DollarSign,
  Waves,
  Gem,
  Coins,
  Sparkles,
  Zap,
  Flame,
  Star,
  Circle,
} from "lucide-react";

export default function AgentsGrid() {
  const tokens = [
    { icon: Waves, iconColor: "text-blue-500", iconBgColor: "bg-blue-500/20" },
    {
      icon: Sparkles,
      iconColor: "text-indigo-400",
      iconBgColor: "bg-indigo-500/20",
    },
    {
      icon: Bitcoin,
      iconColor: "text-purple-400",
      iconBgColor: "bg-purple-500/20",
    },
    {
      icon: Ethereum,
      iconColor: "text-cyan-400",
      iconBgColor: "bg-cyan-500/20",
    },
    {
      icon: Binance,
      iconColor: "text-yellow-400",
      iconBgColor: "bg-yellow-500/20",
    },
    {
      icon: DollarSign,
      iconColor: "text-blue-400",
      iconBgColor: "bg-blue-500/20",
    },
    {
      icon: Coins,
      iconColor: "text-yellow-400",
      iconBgColor: "bg-yellow-500/20",
    },
    { icon: Gem, iconColor: "text-blue-500", iconBgColor: "bg-blue-500/20" },
    {
      icon: Zap,
      iconColor: "text-purple-500",
      iconBgColor: "bg-purple-500/20",
    },
    { icon: Flame, iconColor: "text-red-400", iconBgColor: "bg-red-500/20" },
    { icon: Star, iconColor: "text-blue-400", iconBgColor: "bg-blue-500/20" },
    {
      icon: Circle,
      iconColor: "text-green-400",
      iconBgColor: "bg-green-500/20",
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-4 px-8">
      {tokens.map((token, index) => (
        <TokenCard key={index} {...token} />
      ))}
    </div>
  );
}
