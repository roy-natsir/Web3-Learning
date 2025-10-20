export class Wallet {
  constructor(address, balance, chain) {
    this.address = address;
    this.balance = balance;
    this.chain = chain;
  }

  info() {
    return `Wallet ${this.address} on ${this.chain} holds ${this.balance} tokens`
}
}

