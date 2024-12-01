import Navbar from "@/components/layout/navbar";
import Sidebar from "@/components/layout/sidebar";
import Deploy from "./deploy";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#13111c]">
      <Navbar />
      <Sidebar />

      <main className="pl-24 pr-8 pt-20 font-lexend">
        <div className="max-w-[2000px]">
            <Deploy/>
        </div>
      </main>
    </div>
  );
}
