// ============================
// 🧠 Day 52 – Event Handling and Listeners
// ============================

// Sample wallet data
const wallets = ['Ethereum', 'Polygon', 'Base']

// Function to render wallet list
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

// Event listener: render on page load
window.addEventListener('DOMContentLoaded', renderWallets)

// Event listener: add new wallet
const addWalletBtn = document.getElementById('addWalletBtn')
addWalletBtn.addEventListener('click', () => {
  const newWallet = prompt('Enter new wallet name:')
  if (newWallet) {
    wallets.push(newWallet)
    renderWallets()
  }
})
