import { LucideIcon } from "lucide-react";

interface TokenCardProps {
  icon: LucideIcon;
  iconColor: string;
  iconBgColor: string;
}

export default function TokenCard({
  icon: Icon,
  iconColor,
  iconBgColor,
}: TokenCardProps) {
  return (
    <div className="bg-[#1d1b27] rounded-lg p-4 pb-0 hover:bg-[#242230] transition-colors flex flex-col min-h-[140px] mt-4">
      <div className="flex items-start gap-2">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center ${iconBgColor}`}
        >
          <Icon className={`w-4 h-4 ${iconColor}`} />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-lexend text-white text-sm">Spectra</h3>
            <span className="text-gray-500 text-xs">$SPECTR</span>
          </div>
          <div className="text-[#94A3B8] font-akshar text-xs mt-0.5 font-semibold">
            $7,789,567.45
          </div>
        </div>
      </div>

    <p className="text-gray-500 font-roboto text-xs leading-relaxed mt-2 mb-2">
      A token that embodies the cosmic and ethereal aesthetic of Spectra
    </p>

      <div className=" text-xs text-[#94A3B8]  mt-auto bg-[#242230] -mx-4 -mb-4 p-3 rounded-b-lg flex justify-center">
        Created by <span className="ml-1 font-semibold"> @argyle</span>
      </div>
    </div>
  );
}
