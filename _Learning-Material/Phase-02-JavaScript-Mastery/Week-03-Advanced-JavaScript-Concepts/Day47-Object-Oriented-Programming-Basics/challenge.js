// =======================================
// 🧩 Challenge - Orchis Portfolio Analyzer
// =======================================

class Wallet {
  constructor(owner, address, balance = 0) {
    this.owner = owner;
    this.address = address;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  }
}

class MultiChainWallet extends Wallet {
  constructor(owner, address, balance, chain) {
    super(owner, address, balance);
    this.chain = chain;
  }

  switchChain(newChain) {
    console.log(`Switching from ${this.chain} to ${newChain}`);
    this.chain = newChain;
  }

  showDetails() {
    console.log(
      `[${this.chain}] ${this.owner}'s Wallet: ${this.address} | Balance: $${this.balance} ORC`
    );
  }
}

// Example usage
const myWallet = new MultiChainWallet('Roy', '0xAAA', 500, 'Polygon')
myWallet.deposit(200)
myWallet.switchChain('Ethereum')
myWallet.showDetails()
