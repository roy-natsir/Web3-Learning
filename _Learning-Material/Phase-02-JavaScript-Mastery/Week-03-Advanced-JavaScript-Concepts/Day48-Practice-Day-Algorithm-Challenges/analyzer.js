// ===============================
// 🔍 Transaction Analyzer Module
// ===============================
// Provides functions to filter and calculate transaction data.

export function getDeposits(data) {
  return data.filter(tx => tx.type === 'deposit');
}

export function getWithdrawals(data) {
  return data.filter(tx => tx.type === 'withdraw');
}

export function calculateTotal(data) {
  return data.reduce((acc, tx) => acc + tx.value, 0);
}
