import { Wallet } from './wallet.js'
export class MultiChainWallet extends Wallet {
  constructor(address, balance, chain, tokens) {
    super(address, balance, chain)
    this.tokens = tokens
  }

  totalValue() {
    return Object.values(this.tokens).reduce((sum, val) => sum + val, 0)
  }

  summary() {
    return `${this.address} | Chains: ${this.chain} | Tokens: ${Object.keys(this.tokens).join(', ')} | Total: ${this.totalValue()}`
  }
}
