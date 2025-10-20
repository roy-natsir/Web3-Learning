// Day 35 – Weekly Review: JS Fundamentals (Bootcamp Style)
console.log("=== Orchis Airdrop Dashboard ===");

// 1. Variables, Data Types & Operators
let walletAddress = "0x1234...abcd";
const chainId = 137; // Polygon network
let ethBalance = 5; // in ETH
let tokenBalances = { ORC: 100, MATIC: 250, ETH: ethBalance };

console.log(`Wallet ${walletAddress} on chain ${chainId}`);
console.log(`Balances:`, tokenBalances);

// 2. Conditionals & Control Flow
if (ethBalance >= 1 && chainId === 137) {
  console.log("✅ Eligible for Polygon airdrop");
} else {
  console.log("❌ Not eligible for airdrop");
}

// Switch statement to display network name
switch (chainId) {
  case 1:
    console.log("Network: Ethereum Mainnet");
    break;
  case 137:
    console.log("Network: Polygon");
    break;
  default:
    console.log("Network: Unknown");
}

// 3. Loops & Iteration Patterns
console.log("--- Token Portfolio ---");
const tokens = Object.keys(tokenBalances);
for (let token of tokens) {
  console.log(`Holding ${tokenBalances[token]} ${token}`);
}

// 4. Functions, Parameters & Return Values
function convertGweiToEth(gweiAmount) {
  return gweiAmount / 1_000_000_000; // returns Ether
}
const gasPriceGwei = 60_000_000_000; // 60 gwei
console.log(`Gas Price: ${convertGweiToEth(gasPriceGwei)} ETH`);

// 5. Scope & Closures – Private Wallet Tracker
function createWallet(initialBalance = 0) {
  let balance = initialBalance; // private state
  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    withdraw(amount) {
      if (amount > balance) return "Insufficient funds";
      balance -= amount;
      return balance;
    },
    getBalance() {
      return balance;
    },
  };
}

// Create wallet instance and simulate transactions
const myWallet = createWallet(10);
console.log("Initial Balance:", myWallet.getBalance());
console.log("After deposit:", myWallet.deposit(5));
console.log("After withdraw:", myWallet.withdraw(3));
console.log("Final Balance:", myWallet.getBalance());

// 6. Challenge – Combine All
function createAirdropTracker(walletAddr, chain, initialTokens = 0) {
  let claimedTokens = initialTokens;
  return {
    claim(amount) {
      claimedTokens += amount;
      return `Wallet ${walletAddr} claimed ${amount} tokens. Total: ${claimedTokens}`;
    },
    getTotalClaimed() {
      return `${claimedTokens} tokens claimed so far`;
    },
    getNetwork() {
      switch (chain) {
        case 1:
          return "Ethereum";
        case 137:
          return "Polygon";
        default:
          return "Unknown";
      }
    },
  };
}

const tracker = createAirdropTracker(walletAddress, chainId);
console.log(tracker.getNetwork());
console.log(tracker.claim(50));
console.log(tracker.claim(25));
console.log(tracker.getTotalClaimed());

console.log("=== End of Weekly Review ===");
