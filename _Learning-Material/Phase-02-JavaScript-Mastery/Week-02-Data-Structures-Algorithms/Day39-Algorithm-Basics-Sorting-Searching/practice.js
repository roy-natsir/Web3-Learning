// Day 39 Algorithm Basic: Sorting & Searching

/*==============================
  1. Sorting Example (Front-end)
==============================*/
let tokenBalances = [
  { symbol: 'ETH', balance: 2 },
  { symbol: 'MATIC', balance: 10 },
  { symbol: 'ORC', balance: 5 },
];

//sort descending by balance
tokenBalances.sort((a, b) => b.balance - a.balance);
console.log('Sorted token (desc):', tokenBalances);

/*==============================
  2. Searching Example (Back-end)
==============================*/
const whiteList = [0xaaaa, 0xbbbb, 0xcccc, 0xdddd];

//Linear search
function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) return i;
  }
  return -1;
}

console.log('Linear search (0xcccc):', linearSearch(whiteList, 0xcccc));
console.log('Linear search (0xeeee):', linearSearch(whiteList, 0xeeee));

/*==============================
  3. Binary Search Example (Security Layer)
==============================*/
const blacklist = [0x1111, 0x2222, 0x3333, 0x4444, 0x5555, 0x6666, 0x7777];

function binarySearch(array, target) {
  let left = 0,
    right = array.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (array[mid] === target) return mid;
    if (array[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

console.log('Binary search (0x4444):', binarySearch(blacklist, 0x4444));
console.log('Binary search (0x8888):', binarySearch(blacklist, 0x8888));

/*==============================
  4. Sorting Contract Events (Smart Contract Layer)
==============================*/
let nftTransfers = [
  { tokenId: 15, from: '0xabc', to: '0xdef' },
  { tokenId: 3, from: '0xghi', to: '0xjkl' },
  { tokenId: 8, from: '0xmnop', to: '0xqrs' },
];

nftTransfers.sort((a, b) => a.tokenId - b.tokenId);
console.log('NFT Transfers sorted by tokenId:', nftTransfers);

/*==============================
  5. Orchis Project Simulation
==============================*/
let orchisHolders = [
  { address: '0xaaa', holdings: 100 },
  { address: '0xbbb', holdings: 250 },
  { address: '0xccc', holdings: 150 },
];

//Sort holders by holdings descending
orchisHolders.sort((a, b) => b.holdings - a.holdings);
console.log('Sorted Orchis holders:', orchisHolders);

//Search specific holder
let target = '0xbbb';
let found = orchisHolders.find(h => h.address === target);
console.log('Search result for holder:', found);
