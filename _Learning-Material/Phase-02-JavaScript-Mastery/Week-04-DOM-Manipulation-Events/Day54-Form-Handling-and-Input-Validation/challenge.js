// ============================
// 🧩 Challenge: Real-Time Validation & UX Feedback
// ============================

// Select inputs
const nameInput = document.getElementById('wallet-name')
const balanceInput = document.getElementById('wallet-balance')
const errorMsg = document.getElementById('error-message')

// Function to show error dynamically
function showError(message) {
  errorMsg.textContent = message
  errorMsg.classList.remove('hidden')
}

// Function to clear error
function clearError() {
  errorMsg.textContent = ''
  errorMsg.classList.add('hidden')
}

// Real-time validation
nameInput.addEventListener('input', () => {
  if (nameInput.value.trim().length < 3) {
    showError('Wallet name must be at least 3 characters.')
  } else {
    clearError()
  }
})

balanceInput.addEventListener('input', () => {
  if (balanceInput.value <= 0) {
    showError('Balance must be greater than zero.')
  } else {
    clearError()
  }
})
