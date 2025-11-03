import { WeightTrendDemo } from "@/components/WeightTrendDemo";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Home() {
  return (
    <main className="">
      <div className="flex justify-end px-3 md:px-0 mb-4">
        <ConnectButton />
      </div>
      <div className="flex flex-col gap-8 items-center sm:items-start w-full px-3 md:px-0">
        <WeightTrendDemo />
      </div>
    </main>
  );
}

