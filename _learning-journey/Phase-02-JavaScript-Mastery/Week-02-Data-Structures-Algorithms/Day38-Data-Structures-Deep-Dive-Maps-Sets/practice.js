// Day 37 - Objects, Properties, and Methods
console.log('--- Day 37: Objects, Properties & Methods ---');

/* =======================================================
1. Objects - Base Wallet Example
====================================================== */
const wallet = {
  address: '0x1234567890abcdef', // property: wallet address
  network: 'Ethereum', // property: network name
  balance: 5.0, // property: balance in ETH
  // method: deposit ETH to wallet
  deposit(amount) {
    this.balance += amount;
    return this.balance;
  },
  // method: withdraw ETH from wallet
  withdraw(amount) {
    if (amount > this.balance) {
      return 'Insufficient funds';
    }
    this.balance -= amount;
    return this.balance;
  },
};

console.log('Wallet Address:', wallet.address);
console.log('Network:', wallet.network);
console.log('Initial Balance:', wallet.balance);
console.log('After deposit:', wallet.deposit(3));
console.log('After withdrawal:', wallet.withdraw(2));

/* =======================================================
2. Frontend Example - NFT card
====================================================== */
const nft = {
  id: 1,
  name: 'Orchis Genesis',
  image: '/images/nft1.png',
  // method returns HTML snippet
  renderCard() {
    return `<div class="nft-card"><img src="${this.image}" alt="${this.name}"/><h2>${this.name}</h2></div>`;
  },
};
console.log('Frontend NFT card simulation:', nft.renderCard());

/* =======================================================
3. Backend Example - User Transactions
====================================================== */
const user = {
  id: 'user-01',
  transactions: [100, 50, 70],
  // method aggregates total transaction amount
  getTotal() {
    return this.transactions.reduce((acc, v) => acc + v, 0);
  },
};
console.log('Backend User total transactions simulation:', user.getTotal());

/* =======================================================
4. Smart Contract Example - ORC Token
====================================================== */
const contract = {
  name: 'ORC Token',
  symbol: 'ORC',
  totalSupply: 1000000,
  // method mints new tokens
  mint(amount) {
    this.totalSupply += amount;
    return `${amount} ${this.symbol} minted. Total Supply: ${this.totalSupply}`;
  },
};
console.log(contract.mint(5000));

/* =======================================================
5. Security / Audit Example
====================================================== */
const security = {
  blacklist: ['0xabc', '0xdef'],
  // method checks if address is blocked
  isBlocked(addr) {
    return this.blacklist.includes(addr);
  },
};
console.log('Is 0xabc blocked?', security.isBlocked('0xabc'));
console.log('Is 0x123 blocked?', security.isBlocked('0x123'));

/* =======================================================
6. Challenge - MultiChain Wallet
====================================================== */
const multiChainWallet = {
  address: '0xmulti1234567890',
  balances: {
    1: 2.0, // Ethereum
    56: 10.0, // BSC
    137: 15.0, // Polygon
  },
  // method deposit to chain
  deposit(chainId, amount) {
    this.balances[chainId] = (this.balances[chainId] || 0) + amount;
    return this.balances[chainId];
  },
  // method withdraw from chain
  withdraw(chainId, amount) {
    if (amount > (this.balances[chainId] || 0)) return 'Insufficient funds';
    this.balances[chainId] -= amount;
    return this.balances[chainId];
  },
  // method get balance of chain
  getBalance(chainId) {
    return this.balances[chainId] || 0;
  },
};

console.log('Polygon balance before:', multiChainWallet.getBalance(137));
console.log('After deposit Polygon:', multiChainWallet.deposit(137, 5));
console.log('After withdraw Polygon:', multiChainWallet.withdraw(137, 1));
console.log('Final Polygon balance:', multiChainWallet.getBalance(137));

console.log('--- End of Day 37 ---');
