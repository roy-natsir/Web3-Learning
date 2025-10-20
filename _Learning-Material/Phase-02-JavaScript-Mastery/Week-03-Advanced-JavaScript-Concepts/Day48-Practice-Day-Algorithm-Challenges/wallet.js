// ===============================
// 💼 Wallet Class Module
// ===============================
// Represents a basic crypto wallet with transaction tracking logic.

export class Wallet {
    constructor(owner) {
        this.owner = owner;
        this.transactions = [];
    }

    addTransaction(tx) {
        this.transactions.push(tx);
    }

    getBalance() {
      const deposits = this.transactions.filter(t => t.type === 'deposit');
      const withdrawals = this.transactions.filter(t => t.type === 'withdraw');
      const totalDeposits = deposits.reduce((a, t) => a + t.value, 0);
      const totalWithdrawals = withdrawals.reduce((a, t) => a + t.value, 0);
      return totalDeposits - totalWithdrawals;
    }

    summary() {
      console.log(`\n📘 Wallet Summary for ${this.owner}`);
      console.table(this.transactions);
      console.log(`💰 Balance: ${this.getBalance()} ETH\n`);
    }
    }
