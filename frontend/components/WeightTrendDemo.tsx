"use client";

import { useFhevm } from "@/fhevm/useFhevm";
import { useInMemoryStorage } from "@/hooks/useInMemoryStorage";
import { useEthersSigner, useEthersProvider } from "@/hooks/useEthersSigner";
import { useWeightTrend } from "@/hooks/useWeightTrend";
import { errorNotDeployed } from "./ErrorNotDeployed";
import { useAccount, useChainId, usePublicClient } from "wagmi";
import { useRef, useState, useMemo, useEffect } from "react";
import { getFriendlyErrorMessage } from "@/utils/errorHandler";

export const WeightTrendDemo = () => {
  const { storage: fhevmDecryptionSignatureStorage } = useInMemoryStorage();
  const { address, isConnected } = useAccount();
  const chainId = useChainId();
  const ethersSigner = useEthersSigner({ chainId });
  const ethersReadonlyProvider = useEthersProvider({ chainId });

  const sameChainRef = useRef((c: number | undefined) => c === chainId);
  const sameSignerRef = useRef((s: any) => s?.address === address);

  const [weightInput, setWeightInput] = useState<string>("");
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // Get provider from wagmi
  const publicClient = usePublicClient({ chainId });
  const provider = useMemo(() => {
    if (typeof window === "undefined") return undefined;
    // Use window.ethereum if available, otherwise use wagmi's publicClient
    if ((window as any).ethereum) {
      return (window as any).ethereum;
    }
    return undefined;
  }, []);

  const {
    instance: fhevmInstance,
    status: fhevmStatus,
    error: fhevmError,
  } = useFhevm({
    provider: provider,
    chainId,
    initialMockChains: { 31337: "http://localhost:8545" },
    enabled: true,
  });

  const weightTrend = useWeightTrend({
    instance: fhevmInstance,
    fhevmDecryptionSignatureStorage,
    chainId,
    ethersSigner,
    ethersReadonlyProvider,
    sameChain: sameChainRef,
    sameSigner: sameSignerRef,
  });

  const buttonClass =
    "inline-flex items-center justify-center rounded-xl bg-black px-4 py-4 font-semibold text-white shadow-sm " +
    "transition-colors duration-200 hover:bg-blue-700 active:bg-blue-800 " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 " +
    "disabled:opacity-50 disabled:pointer-events-none";

  const titleClass = "font-semibold text-black text-lg mt-4";

  // Show consistent structure during SSR to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="grid w-full gap-4">
        <div className="col-span-full mx-20 bg-black text-white rounded-lg p-5">
          <p className="font-semibold text-3xl m-5">
            Encrypted Weight Trend System
          </p>
          <p className="text-gray-300 ml-5">
            Loading...
          </p>
        </div>
      </div>
    );
  }

  if (!isConnected) {
    return (
      <div className="grid w-full gap-4">
        <div className="col-span-full mx-20 bg-black text-white rounded-lg p-5">
          <p className="text-2xl text-white mb-4">Please connect your Rainbow wallet</p>
          <p className="text-white">Use the Connect button in the top right corner</p>
        </div>
      </div>
    );
  }

  if (weightTrend.isDeployed === false) {
    return errorNotDeployed(chainId);
  }

  const handleSubmitWeight = () => {
    const weight = parseFloat(weightInput);
    if (weight > 0 && weight <= 1000) {
      weightTrend.submitWeight(Math.round(weight * 10)); // Convert to integer (store as 0.1kg precision)
      setWeightInput("");
    }
  };

  return (
    <div className="grid w-full gap-4">
      <div className="col-span-full mx-20 bg-black text-white rounded-lg p-5">
        <p className="font-semibold text-3xl m-5">
          Encrypted Weight Trend System
        </p>
        <p className="text-gray-300 ml-5">
          Track your daily weight changes with fully homomorphic encryption
        </p>
      </div>

      <div className="col-span-full mx-20 mt-4 px-5 pb-4 rounded-lg bg-white border-2 border-black">
        <p className={titleClass}>Chain Info</p>
        <p className="text-black">
          ChainId: <span className="font-mono font-semibold">{chainId}</span>
        </p>
        <p className="text-black">
          Account: <span className="font-mono font-semibold">{address}</span>
        </p>
        <p className={titleClass}>Contract</p>
        <p className="text-black">
          WeightTrend: <span className="font-mono font-semibold">{weightTrend.contractAddress || "Not deployed"}</span>
        </p>
        <p className="text-black">
          isDeployed: <span className="font-mono font-semibold text-green-500">{String(weightTrend.isDeployed)}</span>
        </p>
      </div>

      <div className="col-span-full mx-20">
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-lg bg-white border-2 border-black pb-4 px-4">
            <p className={titleClass}>FHEVM Instance</p>
            <p className="text-black">
              Fhevm Instance: <span className="font-mono font-semibold">{fhevmInstance ? "OK" : "undefined"}</span>
            </p>
            <p className="text-black">
              Fhevm Status: <span className="font-mono font-semibold">{fhevmStatus}</span>
            </p>
            <p className="text-black">
              Fhevm Error: <span className={`font-mono font-semibold ${fhevmError ? "text-red-600" : "text-green-600"}`}>
                {fhevmError ? getFriendlyErrorMessage(fhevmError) : "No Error"}
              </span>
            </p>
            {fhevmError && fhevmStatus === "error" && (
              <div className="mt-2 p-2 bg-yellow-50 border border-yellow-200 rounded text-sm text-yellow-800">
                <p className="font-semibold">Tip:</p>
                <p>If this is a network connection error, please ensure:</p>
                <ul className="list-disc list-inside ml-2 mt-1">
                  <li>Hardhat node is running (run 'npx hardhat node')</li>
                  <li>Network connection is normal</li>
                  <li>Refresh the page and try again</li>
                </ul>
              </div>
            )}
          </div>
          <div className="rounded-lg bg-white border-2 border-black pb-4 px-4">
            <p className={titleClass}>Status</p>
            <p className="text-black">
              isRefreshing: <span className="font-mono font-semibold">{String(weightTrend.isRefreshing)}</span>
            </p>
            <p className="text-black">
              isDecrypting: <span className="font-mono font-semibold">{String(weightTrend.isDecrypting)}</span>
            </p>
            <p className="text-black">
              isSubmitting: <span className="font-mono font-semibold">{String(weightTrend.isSubmitting)}</span>
            </p>
            <p className="text-black">
              isComparing: <span className="font-mono font-semibold">{String(weightTrend.isComparing)}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="col-span-full mx-20 px-4 pb-4 rounded-lg bg-white border-2 border-black">
        <p className={titleClass}>Submit Weight</p>
        <div className="flex gap-4 mt-4">
          <input
            type="number"
            value={weightInput}
            onChange={(e) => setWeightInput(e.target.value)}
            placeholder="Enter weight in kg (e.g., 70.5)"
            className="flex-1 px-4 py-2 border-2 border-black rounded-lg"
            min="0"
            max="1000"
            step="0.1"
          />
          <button
            className={buttonClass}
            disabled={!weightTrend.canSubmitWeight || !weightInput}
            onClick={handleSubmitWeight}
          >
            {weightTrend.isSubmitting
              ? "Submitting..."
              : weightTrend.canSubmitWeight
                ? "Submit Weight"
                : "Cannot submit"}
          </button>
        </div>
      </div>

      <div className="col-span-full mx-20 px-4 pb-4 rounded-lg bg-white border-2 border-black">
        <p className={titleClass}>Today's Weight</p>
        <p className="text-black">
          Weight Handle: <span className="font-mono font-semibold text-gray-600">
            {typeof weightTrend.todayWeightHandle === 'string' 
              ? weightTrend.todayWeightHandle 
              : weightTrend.todayWeightHandle 
                ? String(weightTrend.todayWeightHandle) 
                : "Not set"}
          </span>
        </p>
        <p className="text-black">
          Clear Weight: <span className="font-mono font-semibold text-green-500">
            {weightTrend.isTodayWeightDecrypted
              ? `${Number(weightTrend.clearTodayWeight) / 10} kg`
              : "Not decrypted"}
          </span>
        </p>
        <div className="flex gap-4 mt-4">
          <button
            className={buttonClass}
            disabled={!weightTrend.canGetTodayWeight}
            onClick={weightTrend.refreshTodayWeight}
          >
            {weightTrend.canGetTodayWeight
              ? "Refresh Today's Weight"
              : "Cannot refresh"}
          </button>
          <button
            className={buttonClass}
            disabled={!weightTrend.canDecryptTodayWeight}
            onClick={weightTrend.decryptTodayWeight}
          >
            {weightTrend.canDecryptTodayWeight
              ? "Decrypt Today's Weight"
              : weightTrend.isTodayWeightDecrypted
                ? "Already Decrypted"
                : weightTrend.isDecrypting
                  ? "Decrypting..."
                  : "Nothing to decrypt"}
          </button>
        </div>
      </div>

      <div className="col-span-full mx-20 px-4 pb-4 rounded-lg bg-white border-2 border-black">
        <p className={titleClass}>Weight Trend Comparison</p>
        <p className="text-black">
          Trend Handle: <span className="font-mono font-semibold text-gray-600">
            {typeof weightTrend.trendHandle === 'string' 
              ? weightTrend.trendHandle 
              : weightTrend.trendHandle 
                ? String(weightTrend.trendHandle) 
                : "Not compared"}
          </span>
        </p>
        <p className="text-black">
          Trend Result: <span className="font-mono font-semibold text-green-500">
            {weightTrend.isTrendDecrypted
              ? weightTrend.clearTrend
                ? "📉 Weight Decreased!"
                : "📈 Weight Increased or Same"
              : "Not decrypted"}
          </span>
        </p>
        <div className="flex gap-4 mt-4">
          <button
            className={buttonClass}
            disabled={!weightTrend.canCompareTrend}
            onClick={weightTrend.compareTrend}
          >
            {weightTrend.canCompareTrend
              ? "Compare Trend"
              : weightTrend.isComparing
                ? "Comparing..."
                : "Cannot compare"}
          </button>
          <button
            className={buttonClass}
            disabled={!weightTrend.canDecryptTrend}
            onClick={weightTrend.decryptTrend}
          >
            {weightTrend.canDecryptTrend
              ? "Decrypt Trend"
              : weightTrend.isTrendDecrypted
                ? "Already Decrypted"
                : weightTrend.isDecrypting
                  ? "Decrypting..."
                  : "Nothing to decrypt"}
          </button>
        </div>
      </div>

      <div className="col-span-full mx-20 p-4 rounded-lg bg-white border-2 border-black">
        <p className={titleClass}>Message</p>
        <p className="text-black font-mono">
          {typeof weightTrend.message === 'string' 
            ? weightTrend.message 
            : weightTrend.message 
              ? String(weightTrend.message) 
              : "Ready"}
        </p>
      </div>
    </div>
  );
};

