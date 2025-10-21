// ============================
// 🧠 Day 51 - Dynamic DOM Manipulation (No Events)
// ============================

// Static wallet data (simulating fetched blockchain data)
const wallets = [
  { name: 'Ethereum', balance: '2.5 ETH' },
  { name: 'Polygon', balance: '530 MATIC' },
  { name: 'Base', balance: '120 USDC' },
]

// 1. Select parent element
const walletList = document.getElementById('wallet-list')

// 2. Create and append wallet items
wallets.forEach(wallet => {
  const li = document.createElement('li')
  li.className = 'wallet'
  li.textContent = `${wallet.name} - ${wallet.balance}`
  walletList.appendChild(li)
})

// 3. Insert a new wallet before the first one
const newWallet = document.createElement('li')
newWallet.className = 'wallet'
newWallet.textContent = 'Arbitrum: 750 ARB'
walletList.insertBefore(newWallet, walletList.firstChild)

// 4. Replace the second wallet with a new one
const replacement = document.createElement('li')
replacement.className = 'wallet replaced'
replacement.textContent = 'Optimism: 300 OP'
walletList.replaceChild(replacement, walletList.children[1])

// 5. Remove the last wallet
walletList.removeChild(walletList.lastChild)

// 6. Add a summary paragraph
const summary = document.createElement('p')
summary.textContent = `Total Wallets Rendered: ${walletList.children.length}`
document.getElementById('dashboard').appendChild(summary)
