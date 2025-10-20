import { MultiChainWallet } from "./models/multichainwallet.js";
import { filterHighValue, summarizeWallets } from "./utils/analyzer.js";

// Sample Data
const wallets = [
  new MultiChainWallet('0xABC', 0, 'Polygon', { MATIC: 1200, ORC: 800}),
  new MultiChainWallet('0xDEF', 0, 'Ethereum', { ETH: 2.5 }),
  new MultiChainWallet('0xGHI', 0, 'BSC', { BNB: 15, USDT: 400 }),
]

// Use Utilities
console.log('🔍 All Wallets Summaries:')
console.table(summarizeWallets(wallets));

console.log(`\n💰 High Value Wallets (>= 100):`)
console.table(summarizeWallets(filterHighValue(wallets, 100)));
