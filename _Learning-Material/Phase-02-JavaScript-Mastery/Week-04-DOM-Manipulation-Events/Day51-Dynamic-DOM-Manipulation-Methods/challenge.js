// ==========================================
// 🧠 Day 51 Challenge: Dynamic DOM Manipulation
// ==========================================

/**
 * *Render a list of wallet cards into a parent container.
 * @param {Array} walletArray - Array of wallet objects with {chain, balance, currency},
 * @param {HTMLElement} parentElement - The parent container where wallets will be rendered.
 */
function renderWallets(walletArray, parentElement) {
  //Validation check
  if (!Array.isArray(walletArray)) {
    console.error(`renderWallets: walletArray must be an array.`)
    return
  }
  if (!(parentElement instanceof HTMLElement)) {
    console.error(`renderWallets: parentElement must be a valid DOM element.`)
    return
  }

  //Clear existing elements
  parentElement.innerHTML = ''

  // Loop through each wallet and render dynamically
  walletArray.forEach(wallet => {
    const walletItem = document.createElement('li')
    walletItem.classList.add('wallet')
    walletItem.textContent = `${wallet.chain} - ${wallet.balance} ${wallet.currency}`
    parentElement.appendChild(walletItem)
  })

  // Append summary info at the bottom
  const summary = document.createElement('p')
  summary.textContent = `Total Wallets: ${walletArray.length}`
  parentElement.appendChild(summary)
}

// Example dataset
const wallets = [
  { chain: 'Ethereum', balance: '2.5 ETH', currency: 'ETH' },
  { chain: 'Polygon', balance: '530 MATIC', currency: 'MATIC' },
  { chain: 'Base', balance: '120 USDC', currency: 'USDC' },
]

// Select target DOM element
const walletList = document.getElementById('wallet-list')

// Execute rendering (No event listener wrapper)
renderWallets(wallets, walletList)
