import { getWallet } from './wallet.js';

export function getPortfolio(addresses) {
  return addresses.map((addr) => getWallet(addr));
}
export function calculateTotal(portfolio) {
  return portfolio.reduce((sum, w) => sum + w.balance, 0);
}
