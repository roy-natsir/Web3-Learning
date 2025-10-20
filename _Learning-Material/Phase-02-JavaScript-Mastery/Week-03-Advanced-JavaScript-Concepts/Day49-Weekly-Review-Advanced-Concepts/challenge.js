import { MultiChainWallet } from './models/multichainwallet.js';

class Portfolio {
  constructor(name, wallets = []) {
    this.name = name;
    this.wallets = wallets;
  }

  addWallet(wallet) {
    this.wallets.push(wallet);
  }

  totalValue() {
    return this.wallets.reduce((sum, w) => sum + w.totalValue(), 0);
  }

  summary() {
    return `Portfolio "${this.name}" has ${this.wallets.length} wallets | Total Value: ${this.totalValue()}`
  }
}

const w1 = new MultiChainWallet('0xAAA', 0, 'Polygon', { MATIC: 1000 });
const w2 = new MultiChainWallet('0xBBB', 0, 'Ethereum', { BETH: 5 });
const w3 = new MultiChainWallet('0xCCC', 0, 'Binance Smart Chain', { BNB: 20, USDT: 400 });

const portfolio = new Portfolio('Orchis Defi Fund')
portfolio.addWallet(w1)
portfolio.addWallet(w2)
portfolio.addWallet(w3)

console.log(portfolio.summary());
