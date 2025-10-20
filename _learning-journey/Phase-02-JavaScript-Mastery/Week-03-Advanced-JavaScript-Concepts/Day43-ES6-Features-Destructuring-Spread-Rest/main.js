// ======================================
// 🌐 Day 43 - ES6 Destructuring, Spread, Rest
// ======================================

// 1️⃣ Destructuring Example
const wallet = {
  address: '0xROY123',
  network: 'Polygon',
  tokens: { MATIC: 1200, ORC: 700 },
}

const { address, network, tokens: { MATIC, ORC } } = wallet
console.log(`Wallet ${address} holds MATIC: ${MATIC}, ORC: ${ORC} on ${network}`)

// 2️⃣ Spread Operator Example
const eth = { ETH: 1.2 }
const matic = { MATIC: 1200 }
const combinedTokens = { ...eth, ...matic }
console.log('Combined Tokens:', combinedTokens)

// 3️⃣ Rest Parameter Example
function mergeTokens(...wallets) {
  return wallets.reduce((acc, wallet) => ({ ...acc, ...wallet }), {})
}
const merged = mergeTokens(eth, matic, { ORC: 500 })
console.log("Merged Wallets:", merged)
