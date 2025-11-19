import { execSync } from "child_process";
import * as fs from "fs";
import * as path from "path";

const CONTRACT_NAME = "WeightTrend";

// <root>/packages/fhevm-hardhat-template
const rel = "..";

// <root>/packages/site/components
const outdir = path.resolve("./abi");

if (!fs.existsSync(outdir)) {
  fs.mkdirSync(outdir);
}

const dir = path.resolve(rel);
const dirname = path.basename(dir);

const line =
  "\n===================================================================\n";

// Try to find deployments directory
// First try ../deployments (local development)
// Then try ./deployments (Vercel build environment)
let deploymentsDir = null;
if (fs.existsSync(dir)) {
  const parentDeploymentsDir = path.join(dir, "deployments");
  if (fs.existsSync(parentDeploymentsDir)) {
    deploymentsDir = parentDeploymentsDir;
  }
}

// If not found in parent, try current directory (for Vercel builds)
if (!deploymentsDir) {
  const currentDeploymentsDir = path.resolve("./deployments");
  if (fs.existsSync(currentDeploymentsDir)) {
    deploymentsDir = currentDeploymentsDir;
  }
}

if (!fs.existsSync(outdir)) {
  console.error(`${line}Unable to locate ${outdir}.${line}`);
  process.exit(1);
}

function readDeployment(chainName, chainId, contractName, optional) {
  if (!deploymentsDir) {
    if (!optional) {
      console.error(
        `${line}Unable to locate deployments directory.${line}`
      );
      process.exit(1);
    }
    return undefined;
  }

  const chainDeploymentDir = path.join(deploymentsDir, chainName);

  if (!fs.existsSync(chainDeploymentDir)) {
    if (!optional) {
      console.error(
        `${line}Unable to locate '${chainDeploymentDir}' directory.\n\n1. Goto '${dirname}' directory\n2. Run 'npx hardhat deploy --network ${chainName}'.${line}`
      );
      process.exit(1);
    }
    return undefined;
  }

  const jsonString = fs.readFileSync(
    path.join(chainDeploymentDir, `${contractName}.json`),
    "utf-8"
  );

  const obj = JSON.parse(jsonString);
  obj.chainId = chainId;

  return obj;
}

// Try hardhat network first, then localhost, then sepolia
let deployLocalhost = readDeployment("hardhat", 31337, CONTRACT_NAME, true /* optional */);
if (!deployLocalhost) {
  deployLocalhost = readDeployment("localhost", 31337, CONTRACT_NAME, true /* optional */);
}

// Sepolia is optional
let deploySepolia = readDeployment("sepolia", 11155111, CONTRACT_NAME, true /* optional */);

// If no deployments found, check if ABI files already exist (for Vercel builds)
if (!deployLocalhost && !deploySepolia) {
  const existingABIFile = path.join(outdir, `${CONTRACT_NAME}ABI.ts`);
  const existingAddressesFile = path.join(outdir, `${CONTRACT_NAME}Addresses.ts`);
  
  if (fs.existsSync(existingABIFile) && fs.existsSync(existingAddressesFile)) {
    console.log("No deployments found, but ABI files already exist. Skipping generation.");
    process.exit(0);
  }
  
  console.error(`${line}No deployments found. Please deploy the contract first.${line}`);
  process.exit(1);
}

const deploy = deployLocalhost || deploySepolia;

if (!deploySepolia) {
  deploySepolia = { abi: deploy.abi, address: "0x0000000000000000000000000000000000000000" };
}

if (!deployLocalhost) {
  deployLocalhost = { abi: deploy.abi, address: "0x0000000000000000000000000000000000000000" };
}

if (
  JSON.stringify(deployLocalhost.abi) !== JSON.stringify(deploySepolia.abi)
) {
  console.error(
    `${line}Deployments on localhost and Sepolia differ. Cant use the same abi on both networks. Consider re-deploying the contracts on both networks.${line}`
  );
  process.exit(1);
}

const tsCode = `
/*
  This file is auto-generated.
  Command: 'npm run genabi'
*/
export const ${CONTRACT_NAME}ABI = ${JSON.stringify({ abi: deploy.abi }, null, 2)} as const;
\n`;
const tsAddresses = `
/*
  This file is auto-generated.
  Command: 'npm run genabi'
*/
export const ${CONTRACT_NAME}Addresses = { 
  "11155111": { address: "${deploySepolia.address}", chainId: 11155111, chainName: "sepolia" },
  "31337": { address: "${deployLocalhost.address}", chainId: 31337, chainName: "hardhat" },
};
`;

console.log(`Generated ${path.join(outdir, `${CONTRACT_NAME}ABI.ts`)}`);
console.log(`Generated ${path.join(outdir, `${CONTRACT_NAME}Addresses.ts`)}`);

fs.writeFileSync(path.join(outdir, `${CONTRACT_NAME}ABI.ts`), tsCode, "utf-8");
fs.writeFileSync(
  path.join(outdir, `${CONTRACT_NAME}Addresses.ts`),
  tsAddresses,
  "utf-8"
);

