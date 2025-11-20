"use client";

import { useFhevm } from "@/fhevm/useFhevm";
import { useInMemoryStorage } from "@/hooks/useInMemoryStorage";
import { useEthersSigner, useEthersProvider } from "@/hooks/useEthersSigner";
import { useWeightTrend } from "@/hooks/useWeightTrend";
import { errorNotDeployed } from "./ErrorNotDeployed";
import { useAccount, useChainId, usePublicClient } from "wagmi";
import { useRef, useState, useMemo, useEffect } from "react";
import { getFriendlyErrorMessage } from "@/utils/errorHandler";
import './WeightTrendDemo.css';

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

  // Show consistent structure during SSR to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="weight-trend-app">
        <div className="weight-trend-main">
          <div className="weight-trend-card">
            <h2 className="card-title">⚖️ Encrypted Weight Trend System</h2>
            <p style={{ color: '#94a3b8' }}>Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!isConnected) {
    return (
      <div className="weight-trend-app">
        <div className="weight-trend-main">
          <div className="connect-message">
            <h2>🔗 Connect Your Wallet</h2>
            <p>Please connect your wallet to start tracking your weight</p>
            <p style={{ fontSize: '0.875rem', marginTop: '1rem' }}>
              Use the Connect button in the header
            </p>
          </div>
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
    <div className="weight-trend-app">
      <div className="weight-trend-main">
        {/* Chain & Contract Info Card */}
        <div className="weight-trend-card info-card">
          <h2 className="card-title">📊 Chain Information</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-label">Chain ID</div>
              <div className="stat-value info">{chainId}</div>
            </div>
            <div className="stat-item">
              <div className="stat-label">Account</div>
              <div className="stat-value info" style={{ fontSize: '0.875rem', fontFamily: 'monospace' }}>
                {address?.slice(0, 6)}...{address?.slice(-4)}
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-label">Contract</div>
              <div className="stat-value info" style={{ fontSize: '0.875rem', fontFamily: 'monospace' }}>
                {weightTrend.contractAddress?.slice(0, 6)}...{weightTrend.contractAddress?.slice(-4)}
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-label">Status</div>
              <div className={`status-indicator ${weightTrend.isDeployed ? 'status-success' : 'status-error'}`}>
                {weightTrend.isDeployed ? '✅ Deployed' : '❌ Not Deployed'}
              </div>
            </div>
          </div>
        </div>

        {/* Submit Weight Card */}
        <div className="weight-trend-card action-card">
          <h2 className="card-title">⚖️ Submit Weight</h2>
          <p style={{ color: '#cbd5e1', marginBottom: '1.5rem' }}>
            Enter your weight in kilograms. The value will be encrypted before being stored on-chain.
          </p>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <input
              type="number"
              value={weightInput}
              onChange={(e) => setWeightInput(e.target.value)}
              placeholder="Enter weight in kg (e.g., 70.5)"
              className="weight-input"
              min="0"
              max="1000"
              step="0.1"
            />
            <button
              className={`weight-trend-button button-primary ${!weightTrend.canSubmitWeight || !weightInput ? 'button-disabled' : ''}`}
              disabled={!weightTrend.canSubmitWeight || !weightInput}
              onClick={handleSubmitWeight}
            >
              {weightTrend.isSubmitting
                ? "⏳ Submitting..."
                : weightTrend.canSubmitWeight
                  ? "📤 Submit Weight"
                  : "❌ Cannot Submit"}
            </button>
          </div>
        </div>

        {/* Today's Weight Card */}
        <div className="weight-trend-card action-card">
          <h2 className="card-title">📅 Today's Weight</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-label">Encrypted Handle</div>
              <div className="stat-value encrypted">
                {typeof weightTrend.todayWeightHandle === 'string' 
                  ? weightTrend.todayWeightHandle.slice(0, 20) + '...'
                  : weightTrend.todayWeightHandle 
                    ? String(weightTrend.todayWeightHandle).slice(0, 20) + '...'
                    : '🔒 Not Set'}
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-label">Decrypted Value</div>
              <div className={`stat-value ${weightTrend.isTodayWeightDecrypted ? 'success' : 'encrypted'}`}>
                {weightTrend.isTodayWeightDecrypted
                  ? `✅ ${Number(weightTrend.clearTodayWeight) / 10} kg`
                  : '🔒 Encrypted'}
              </div>
            </div>
          </div>
          <div className="button-group">
            <button
              className={`weight-trend-button button-secondary ${!weightTrend.canGetTodayWeight ? 'button-disabled' : ''}`}
              disabled={!weightTrend.canGetTodayWeight}
              onClick={weightTrend.refreshTodayWeight}
            >
              {weightTrend.canGetTodayWeight
                ? "🔄 Refresh Today's Weight"
                : "❌ Cannot Refresh"}
            </button>
            <button
              className={`weight-trend-button button-success ${!weightTrend.canDecryptTodayWeight ? 'button-disabled' : ''}`}
              disabled={!weightTrend.canDecryptTodayWeight}
              onClick={weightTrend.decryptTodayWeight}
            >
              {weightTrend.canDecryptTodayWeight
                ? "🔓 Decrypt Today's Weight"
                : weightTrend.isTodayWeightDecrypted
                  ? "✅ Already Decrypted"
                  : weightTrend.isDecrypting
                    ? "⏳ Decrypting..."
                    : "❌ Nothing to Decrypt"}
            </button>
          </div>
        </div>

        {/* Weight Trend Comparison Card */}
        <div className="weight-trend-card action-card">
          <h2 className="card-title">📈 Weight Trend Comparison</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-label">Trend Handle</div>
              <div className="stat-value encrypted">
                {typeof weightTrend.trendHandle === 'string' 
                  ? weightTrend.trendHandle.slice(0, 20) + '...'
                  : weightTrend.trendHandle 
                    ? String(weightTrend.trendHandle).slice(0, 20) + '...'
                    : '🔒 Not Compared'}
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-label">Trend Result</div>
              <div className={`stat-value ${weightTrend.isTrendDecrypted 
                ? (weightTrend.clearTrend ? 'success' : 'error')
                : 'encrypted'}`}>
                {weightTrend.isTrendDecrypted
                  ? weightTrend.clearTrend
                    ? "📉 Weight Decreased!"
                    : "📈 Weight Increased or Same"
                  : '🔒 Encrypted'}
              </div>
            </div>
          </div>
          <div className="button-group">
            <button
              className={`weight-trend-button button-primary ${!weightTrend.canCompareTrend ? 'button-disabled' : ''}`}
              disabled={!weightTrend.canCompareTrend}
              onClick={weightTrend.compareTrend}
            >
              {weightTrend.canCompareTrend
                ? "⚖️ Compare Trend"
                : weightTrend.isComparing
                  ? "⏳ Comparing..."
                  : "❌ Cannot Compare"}
            </button>
            <button
              className={`weight-trend-button button-success ${!weightTrend.canDecryptTrend ? 'button-disabled' : ''}`}
              disabled={!weightTrend.canDecryptTrend}
              onClick={weightTrend.decryptTrend}
            >
              {weightTrend.canDecryptTrend
                ? "🔓 Decrypt Trend"
                : weightTrend.isTrendDecrypted
                  ? "✅ Already Decrypted"
                  : weightTrend.isDecrypting
                    ? "⏳ Decrypting..."
                    : "❌ Nothing to Decrypt"}
            </button>
          </div>
        </div>

        {/* Message Card */}
        <div className="weight-trend-card">
          <h2 className="card-title">💬 Status Message</h2>
          <div className="message-display">
            {typeof weightTrend.message === 'string' 
              ? weightTrend.message 
              : weightTrend.message 
                ? String(weightTrend.message) 
                : "✅ Ready"}
          </div>
        </div>
      </div>
    </div>
  );
};
