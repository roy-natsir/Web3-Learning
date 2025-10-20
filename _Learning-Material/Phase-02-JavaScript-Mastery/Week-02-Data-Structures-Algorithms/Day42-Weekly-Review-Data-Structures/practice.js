// ==========================================================
// Day 42 - Orchis Project Simulation: Data Structures Deep Dive
// ==========================================================
console.log("--- Day 42 Challenge: Orchis Project Simulation ---");

/* ============================================================
   1. FRONTEND LAYER
   ------------------------------------------------------------
   → Simulating user wallet display in the Orchis dApp.
   → Uses Array & Object for rendering portfolio in UI.
============================================================ */
const userPortfolio = [
  { chain: "Ethereum", symbol: "ETH", balance: 1.25 },
  { chain: "Polygon", symbol: "MATIC", balance: 1800 },
  { chain: "BSC", symbol: "ORC", balance: 400 },
];

// Display each token card (React-like rendering)
userPortfolio.forEach(asset => {
  console.log(`UI Render → ${asset.chain}: ${asset.symbol} - ${asset.balance}`);
});

/* ============================================================
   2. BACKEND LAYER
   ------------------------------------------------------------
   → Handles wallet data storage and total balance calculation.
   → Uses Map for efficient address-based lookup.
============================================================ */
const walletDB = new Map();

// Simulate storing user data in database
walletDB.set("0xROY123", {
  name: "Roy Natisr",
  portfolio: userPortfolio,
  verified: true,
});

// Backend function to calculate total portfolio balance in USD
function calculateTotalUSD(address, prices) {
  const user = walletDB.get(address);
  if (!user) return "Wallet not found.";

  let total = 0;
  user.portfolio.forEach(asset => {
    const usdValue = asset.balance * (prices[asset.symbol] || 0);
    total += usdValue;
  });

  console.log(`Total USD Value for ${user.name}: $${total.toFixed(2)}`);
  return total;
}

// Simulated prices (could be fetched via API)
const tokenPrices = { ETH: 4500, MATIC: 1.2, ORC: 2.8 };
calculateTotalUSD("0xROY123", tokenPrices);

/* ============================================================
   3. SMART CONTRACT LAYER
   ------------------------------------------------------------
   → Simulates token balances using Map (on-chain mapping).
   → Transfer logic similar to ERC-20 for Orchis Token.
============================================================ */
const onChainBalances = new Map([
  ["0xROY123", 500],
  ["0xALICE456", 300],
]);

function transferOrchisToken(from, to, amount) {
  const senderBal = onChainBalances.get(from) || 0;
  if (senderBal < amount) {
    console.log("❌ Transaction failed: Insufficient balance.");
    return;
  }

  onChainBalances.set(from, senderBal - amount);
  onChainBalances.set(to, (onChainBalances.get(to) || 0) + amount);
  console.log(`✅ Transferred ${amount} ORC from ${from} → ${to}`);
}

transferOrchisToken("0xROY123", "0xALICE456", 100);
console.log("Updated On-Chain Balances:", Object.fromEntries(onChainBalances));

/* ============================================================
   4. SECURITY / AUDIT LAYER
   ------------------------------------------------------------
   → Ensures address authenticity using Set for uniqueness.
   → Prevents malicious or blacklisted wallets from interacting.
============================================================ */
const verifiedWallets = new Set(["0xROY123", "0xALICE456"]);
const blacklistedWallets = new Set(["0xBAD999"]);

function checkWalletSecurity(addr) {
  if (blacklistedWallets.has(addr)) {
    console.warn(`⚠️ SECURITY ALERT: ${addr} is blacklisted!`);
    return false;
  }
  if (!verifiedWallets.has(addr)) {
    console.warn(`⚠️ WARNING: ${addr} is not verified.`);
    return false;
  }
  console.log(`✅ ${addr} is verified and safe.`);
  return true;
}

checkWalletSecurity("0xROY123");
checkWalletSecurity("0xBAD999");

/* ============================================================
   5. INFRASTRUCTURE / DATA TRANSPORT LAYER
   ------------------------------------------------------------
   → Uses JSON for sending wallet data between systems.
   → Simulates data serialization (Frontend → Backend → Blockchain node).
============================================================ */
const orchisPayload = {
  user: "0xROY123",
  verified: verifiedWallets.has("0xROY123"),
  network: "Polygon",
  timestamp: new Date().toISOString(),
  portfolio: userPortfolio,
  totalUSD: calculateTotalUSD("0xROY123", tokenPrices),
};

const jsonPayload = JSON.stringify(orchisPayload);
console.log("\n🛰️ Sending Data to Node (JSON):", jsonPayload);

// Parse back into object for node processing
const parsedData = JSON.parse(jsonPayload);
console.log("📦 Parsed Payload Received by Node:", parsedData);

/* ============================================================
   6. DEVOPS / NODE MONITORING (Extra Layer)
   ------------------------------------------------------------
   → Simulates monitoring of system state using Map.
   → Each operation logged for validation.
============================================================ */
const operationLogs = new Map();
operationLogs.set("frontend_render", userPortfolio.length);
operationLogs.set("transactions_processed", 1);
operationLogs.set("wallets_verified", verifiedWallets.size);
operationLogs.set("timestamp", Date.now());

console.log("\n📊 System Operation Logs:", Object.fromEntries(operationLogs));

console.log("\n--- End of Day 42 Challenge: Orchis Project Simulation ---");
