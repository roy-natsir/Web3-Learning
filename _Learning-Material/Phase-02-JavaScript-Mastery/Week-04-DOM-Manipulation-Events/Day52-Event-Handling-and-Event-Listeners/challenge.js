// ============================
// 🧠 Day 52 – Event Handling and Event Listeners
// ============================

// Sample wallet data
const wallets = ['Ethereum', 'Polygon', 'Base']

// 🧩 Render function: display all wallets
function renderWallets() {
  const list = document.getElementById('wallet-list')
  list.innerHTML = '' // Clear previous list

  wallets.forEach(chain => {
    const li = document.createElement('li')
    li.textContent = `${chain} Wallet`
    li.classList.add('wallet')
    list.appendChild(li)
  })
}

// ⚡ Add wallet handler
function handleAddWallet() {
  const newWallet = prompt('Enter new wallet name:')
  if (newWallet && newWallet.trim() !== '') {
    wallets.push(newWallet.trim())
    renderWallets()
  } else {
    alert('Invalid wallet name.')
  }
}

// 💡 Highlight wallet handler
function highlightWalletByName(chain) {
  const walletItems = document.querySelectorAll('.wallet')
  let found = false

  walletItems.forEach(wallet => {
    wallet.classList.remove('highlight') // Reset highlight
    if (wallet.textContent.toLowerCase().includes(chain.toLowerCase())) {
      wallet.classList.add('highlight')
      found = true
    }
  })

  if (!found) {
    alert(`Wallet "${chain}" not found!`)
  }
}

// 🎯 Highlight button click handler
function handleHighlightClick() {
  const name = prompt('Enter wallet name to highlight:')
  if (name) highlightWalletByName(name)
}

// ============================
// 🚀 Initialize Events
// ============================

// Render wallet list once DOM is ready
window.addEventListener('DOMContentLoaded', renderWallets)

// Add event listeners to buttons
document.addEventListener('DOMContentLoaded', () => {
  const addBtn = document.getElementById('addWalletBtn')
  const highlightBtn = document.getElementById('highlightBtn')

  addBtn.addEventListener('click', handleAddWallet)
  highlightBtn.addEventListener('click', handleHighlightClick)
})
