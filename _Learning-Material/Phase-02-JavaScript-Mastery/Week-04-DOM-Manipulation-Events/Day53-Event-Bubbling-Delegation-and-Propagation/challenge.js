// ============================
// 🧩 Challenge: Event Delegation in Dynamic List
// ============================

const wallets = ['Ethereum', 'Polygon', 'Base']

function renderWallets() {
  const walletList = document.getElementById('wallet-list')
  walletList.innerHTML = ''
  wallets.forEach(chain => {
    const li = document.createElement('li')
    li.classList.add('wallet')
    li.textContent = chain
    walletList.appendChild(li)
  })
}

function addWallet(name) {
  if (name && name.trim()) {
    wallets.push(name.trim())
    renderWallets()
  }
}

// Delegation listener
document.getElementById('wallet-list').addEventListener('click', e => {
  if (e.target.classList.contains('wallet')) {
    e.target.classList.toggle('highlight')
    console.log(`Selected: ${e.target.textContent}`)
  }
})

// Button add new wallet
document.getElementById('addWalletBtn').addEventListener('click', e => {
  e.stopPropagation()
  const newWallet = prompt('Enter new wallet name:')
  addWallet(newWallet)
})

renderWallets()
