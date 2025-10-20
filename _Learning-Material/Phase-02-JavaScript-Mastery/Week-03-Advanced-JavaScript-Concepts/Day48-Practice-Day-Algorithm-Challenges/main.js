// ===============================
// 🚀 Orchis Algorithm Suite - Main Runner
// ===============================
// Integrates modules and executes wallet + transaction analysis.

import { transactions } from './data.js';
import { getDeposits, getWithdrawals, calculateTotal } from './analyzer.js';
import { Wallet } from './wallet.js';

console.log('=== Orchis Algorithm Suite - Main Runner ===');

// Initialize wallet instance
const myWallet = new Wallet('0xABC123...');

// Load transactions into wallet
transactions.forEach(tx => myWallet.addTransaction(tx));

// Show full wallet summary
myWallet.summary();

// Analyzer Functions
console.log('🔍 Deposit Transactions:');
console.table(getDeposits(transactions));

console.log('📉 Withdrawal Transactions:');
console.table(getWithdrawals(transactions));

console.log('💰 Total Processed Value:');
console.log(`${calculateTotal(transactions)} ETH`);
