# Weight Trend - Encrypted Weight Tracking System

A fully homomorphic encryption (FHE) enabled application for tracking daily weight changes with privacy-preserving comparisons.

## Features

- **Privacy Protection**: Advanced encryption for sensitive data
- **Real-time Analytics**: Live trend monitoring capabilities

- **Encrypted Weight Storage**: Submit daily weight data that remains encrypted on-chain
- **Trend Analysis**: Compare today's weight with yesterday's weight without revealing actual values
- **Privacy-First**: Uses Zama FHEVM for fully homomorphic encryption
- **Rainbow Wallet Integration**: Connect using Rainbow wallet for seamless Web3 experience

## Quick Start

### Prerequisites

- **Node.js**: Version 20 or higher
- **npm or yarn/pnpm**: Package manager
- **Rainbow Wallet**: Browser extension installed

### Installation

1. **Install dependencies**

   ```bash
   npm install
   cd frontend
   npm install
   ```

2. **Set up environment variables**

   ```bash
   npx hardhat vars set MNEMONIC

   # Set your Infura API key for network access
   npx hardhat vars set INFURA_API_KEY

   # Optional: Set Etherscan API key for contract verification
   npx hardhat vars set ETHERSCAN_API_KEY
   ```

3. **Compile and test**

   ```bash
   npm run compile
   npm run test
   ```

4. **Deploy to local network**

   ```bash
   # Start a local FHEVM-ready node
   npx hardhat node
   # Deploy to local network
   npx hardhat deploy --network localhost
   ```

5. **Deploy to Sepolia Testnet**

   ```bash
   # Deploy to Sepolia
   npx hardhat deploy --network sepolia
   # Verify contract on Etherscan
   npx hardhat verify --network sepolia <CONTRACT_ADDRESS>
   ```

6. **Run frontend**

   ```bash
   cd frontend
   npm run dev
   ```

## 📁 Project Structure

```
weight-trend-fhevm/
├── contracts/           # Smart contract source files
�?  └── WeightTrend.sol  # FHE weight tracking contract
├── deploy/              # Deployment scripts
├── tasks/               # Hardhat custom tasks
├── test/                # Test files
├── frontend/            # Next.js frontend application
├── hardhat.config.ts    # Hardhat configuration
└── package.json         # Dependencies and scripts
```

## 📜 Available Scripts

| Script             | Description              |
| ------------------ | ------------------------ |
| `npm run compile`  | Compile all contracts    |
| `npm run test`     | Run all tests            |
| `npm run coverage` | Generate coverage report |
| `npm run lint`     | Run linting checks       |
| `npm run clean`    | Clean build artifacts    |

## How It Works

1. **Submit Weight**: Users submit their daily weight in encrypted form
2. **Compare Trend**: The contract compares today's encrypted weight with yesterday's encrypted weight
3. **Decrypt Result**: Users can decrypt the comparison result to see if their weight decreased

The actual weight values are never revealed on-chain - only the comparison result can be decrypted by the user.

## 📚 Documentation

- [FHEVM Documentation](https://docs.zama.ai/fhevm)
- [FHEVM Hardhat Setup Guide](https://docs.zama.ai/protocol/solidity-guides/getting-started/setup)
- [FHEVM Testing Guide](https://docs.zama.ai/protocol/solidity-guides/development-guide/hardhat/write_test)

## 🔒 Security Considerations

- All weight data is encrypted using FHEVM
- Private keys are never exposed on-chain
- Smart contract follows best practices for secure development

## 📄 License

This project is licensed under the BSD-3-Clause-Clear License.

---

**Built with ❤️ using Zama FHEVM**


