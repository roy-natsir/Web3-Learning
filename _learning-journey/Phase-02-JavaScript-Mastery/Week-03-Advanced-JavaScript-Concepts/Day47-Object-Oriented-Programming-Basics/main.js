// =============================================
// 🌐 Day 47 - OOP Basics
// =============================================

class Wallet {
  constructor(owner, address, balance = 0) {
    this.owner = owner;
    this.address = address;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount <= 0) return console.log('Invalid amount')
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount > this.balance) return console.log('Insufficient balance');
    this.balance -= amount;
  }

  getBalance() {
    return `${this.owner}'s balance: $${this.balance} ORC`;
  }
}

const royWallet = new Wallet('Roy', '0x1234abcd', 100);
royWallet.deposit(50);
royWallet.withdraw(30);
console.log(royWallet.getBalance());
