// Day 36 - Arrays, Methods & Manipulation
console.log('Day 36 - Arrays, Methods & Manipulation');

/* 1. Base Array Operations */
let tokens = ['ETH', 'MATIC', 'ORC'];
console.log('Initial tokens:', tokens);

//push & pop
tokens.push('USDC');
console.log('After push USDC:', tokens);
tokens.pop();
console.log('After pop:', tokens);

//unshift & shift
tokens.unshift('BTC');
console.log('After unshift BTC:', tokens);
tokens.shift();
console.log('After shift:', tokens);

// splice & slice
tokens.splice(1, 0, 'BNB');
console.log('After splice insert BNB:', tokens);
const firstTwo = tokens.slice(0, 2);
console.log('Sliced first 2 tokens:', firstTwo);

// Include & indexOf
console.log('Includes MATIC?', tokens.includes('MATIC'));
console.log('Index of ORC:', tokens.indexOf('ORC'));

// Map
const lowerTokens = tokens.map(token => token.toLowerCase());
console.log('Lowercase tokens:', lowerTokens);

//Filter
const filteredTokens = tokens.filter(token => token !== 'ETH');
console.log('Filtered (no ETH):', filteredTokens);

// reduce
const balances = [1.5, 2.0, 0.5];
const totalBalance = balances.reduce((acc, bal) => acc + bal, 0);
console.log('Total balance:', totalBalance);

/* 2. Frontend Array Methods */
const tokenCards = tokens.map(t => `<div class="token-card">${t}</div>`);
console.log('Frontend JSX simulation:', tokenCards);

/* 3. Backend Array Methods */
const userBalances = [10, 5, 8, 12];
const totalUserBalance = userBalances.reduce((acc, v) => acc + v, 0);
console.log('Backend total user balance:', totalUserBalance);

/* 4. Smart Contract Array Methods */
const tokenIdsFromContract = [1, 2, 3, 4, 5];
const eventTokenIds = tokenIdsFromContract.filter(id => id % 2 === 0);
console.log('Smart contract event token IDs:', eventTokenIds);

/* 5. Security / Auditing */
const blacklist = ['0x123...', '0x456...'];
const userAddr = '0x789...';
if (blacklist.includes(userAddr)) {
  console.log('Blocked address');
} else {
  console.log('Address is safe to proceed');
}

/* 6. Project example */
//Challenge 1
console.log('\n-- Challenge 1 Wallet addresses --');
let wallets = ['0xabc...', '0xdef...', '0xghi...'];
console.log('Initial wallets:', wallets);
wallets.push('0xjkl...');
console.log('After push new wallet:', wallets);
wallets.shift();
console.log('After shift (removed first):', wallets);

//Challenge 2
console.log('\n-- Challenge 2 Token Balances --');
let tokenBalances = [0.5, 1, 5];
const totalTokens = tokenBalances.reduce((acc, bal) => acc + bal, 0);
console.log('Total token balance:', totalTokens);
const aboveOne = tokenBalances.filter(bal => bal > 1);
console.log('Balances above 1:', aboveOne);

//Challenge 3
console.log('\n-- Challenge 3 Frontend Tokens --');
let nfts = [
  { name: 'Orchis 1', id: 1 },
  { name: 'orchis 2', id: 2 },
];
console.log('Initial NFTs:', nfts);
nfts = nfts.map(nft => ({ ...nft, name: nft.name.toUpperCase() }));
console.log('NFTs uppercased:', nfts);
nfts.splice(1, 0, { name: 'ORCHIS NFT', id: 99 });
console.log('NFTs after splice insert:', nfts);

console.log('\n-- End of Day 36 --');
