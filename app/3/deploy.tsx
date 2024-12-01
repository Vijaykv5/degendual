import Image from "next/image";
import { FiUpload } from "react-icons/fi";

export default function Deploy() {
  return (
    <div className="w-full max-w-xl mx-auto px-6 py-12 text-gray-300">
      <div className="text-center mb-12">
        <h1
          className="text-[2.75rem] font-medium mb-4"
          style={{
            background: "linear-gradient(to top, #999999, #FFFFFF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Build Your Agent
        </h1>
        <p className="text-gray-400 text-sm font-mono">
          The wealth of knowledge, the tight-knit community, and the invaluable
          support I received have propelled me to new heights.
        </p>
      </div>

      <div className="space-y-8 font-lexend">
        <div>
          <label className="text-sm mb-2 block">Token Image</label>
          <div className="w-[80px] h-[80px] rounded-full bg-[#2a2a2a] border-2 border-dashed border-gray-500 flex items-center justify-center cursor-pointer hover:bg-[#2f2f2f] transition-colors">
            <FiUpload className="text-gray-400 text-xl" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm mb-2 block">Token Name</label>
            <input
              type="text"
              placeholder="Name of Contest"
              className="w-full bg-[#1c1c1c] border border-gray-800 rounded-md px-3 h-12 text-gray-300 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
          </div>
          <div>
            <label className="text-sm mb-2 block">Token Ticker</label>
            <input
              type="text"
              placeholder="$SAMPLE"
              className="w-full bg-[#1c1c1c] border border-gray-800 rounded-md px-3 h-12 text-gray-300 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label className="text-sm mb-2 block">
            How many tokens would you like to buy?
          </label>
          <input
            type="number"
            placeholder="00"
            className="w-full bg-[#1c1c1c] border border-gray-800 rounded-md px-3 h-12 text-gray-300 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          />
        </div>

        <div>
          <label className="text-sm mb-2 block">
            Build Your Agent's Personality
          </label>
          <textarea
            placeholder="00"
            className="w-full bg-[#1c1c1c] border border-gray-800 rounded-md px-3 py-2 text-gray-300 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent min-h-[120px] resize-none"
          />
        </div>

        <button className="w-full bg-[#5F4DFF] hover:bg-[#6d28d9] text-white h-14 text-lg rounded-xl font-medium transition-colors">
          Deploy
        </button>
      </div>
    </div>
  );
}
