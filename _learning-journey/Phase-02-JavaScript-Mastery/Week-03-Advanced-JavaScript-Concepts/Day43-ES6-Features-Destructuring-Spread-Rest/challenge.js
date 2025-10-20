function mergeAllWallets(...wallets) {
  return wallets.reduce((acc, { tokens }) => {
    for (const [symbol, amount] of Object.entries(tokens)) {
      acc[symbol] = (acc[symbol] || 0) + amount;
    }
    return acc;
}, {})
}

const wallets = [
  { address: "0x1", tokens: { MATIC: 200, ORC: 50 } },
  { address: "0x2", tokens: { ETH: 1.2, MATIC: 300 } },
]

console.log('Total Tokens:', mergeAllWallets(...wallets))
