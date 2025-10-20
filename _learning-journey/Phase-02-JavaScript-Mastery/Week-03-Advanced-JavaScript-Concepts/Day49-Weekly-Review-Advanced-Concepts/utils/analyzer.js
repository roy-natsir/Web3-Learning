export function filterHighValue(wallets, threshold) {
  return wallets.filter(w => w.totalValue() > threshold);
}

export function summarizeWallets(wallets) {
  return wallets.map(w => w.summary());
}
