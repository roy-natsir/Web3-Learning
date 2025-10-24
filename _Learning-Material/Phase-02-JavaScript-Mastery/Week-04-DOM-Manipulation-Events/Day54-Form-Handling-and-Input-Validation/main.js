// ============================
// 🧠 Day 54 - Form Handling & Input Validation
// ============================

// Select elements
const form = document.getElementById('wallet-form')
const walletNameInput = document.getElementById('wallet-name')
const walletBalanceInput = document.getElementById('wallet-balance')
const errorMsg = document.getElementById('error-message')
const walletList = document.getElementById('wallet-list')

// Local state
const wallets = []

// ✅ Function: Validate input
function validateInput(name, balance) {
  if (!name.trim()) return 'Wallet name cannot be empty.'
  if (isNaN(balance) || balance <= 0) return 'Balance must be a positive number.'
  return null
}

// ✅ Event: Handle form submit
form.addEventListener('submit', e => {
  // Prevent default browser behavior (page reload)
  e.preventDefault()

  const name = walletNameInput.value
  const balance = parseFloat(walletBalanceInput.value)
  const error = validateInput(name, balance)

  if (error) {
    errorMsg.textContent = error
    errorMsg.classList.remove('hidden')
    return
  }

  errorMsg.classList.add('hidden')

  // Create new wallet
  const wallet = { name, balance }
  wallets.push(wallet)

  // Render new wallet
  const li = document.createElement('li')
  li.textContent = `${wallet.name} - ${wallet.balance}`
  li.classList.add('wallet')
  walletList.appendChild(li)

  // Reset form
  form.reset()
})
