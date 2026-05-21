import Image from "next/image";
import Terminal from "@/components/Terminal";

export default function Home() {
  return (
    <div className="w-[55vw] mx-auto items-stretch h-screen">
      {/* <div className="bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(120,120,120,0.1)_10px,rgba(120,120,120,0.1)_20px)] w-8 shrink-0 border-x border-zinc-500/10"></div> */}

      <div className="flex-1 flex flex-col p-8">
        <div className="flex w-full justify-between items-center selection:bg-white selection:text-black">
          <div className="w-[75px] h-[75px] rounded-2xl p-1 bg-gradient-to-br from-zinc-800 to-zinc-950 border-t border-white/20 border-b border-black/50 border-x border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_8px_16px_rgba(0,0,0,0.4)] flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
            <Image
              src="/ShipTrack.png"
              alt="ShipTrack Logo"
              width={65}
              height={65}
              className="rounded-xl"
            />
          </div>
          <div className="flex flex-col items-end">
            <h1 className="text-xl font-medium tracking-tighter">ShipTrack</h1>
            <p className="text-md text-zinc-500 font-medium leading-2">
              Track your deployments from your{" "}
              <span className="text-green-600/70">terminal</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center mt-10">
        <Terminal />
      </div>

      {/* <div className="bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(120,120,120,0.1)_10px,rgba(120,120,120,0.1)_20px)] w-8 shrink-0 border-x border-zinc-500/10"></div> */}
    </div>
  );
}
