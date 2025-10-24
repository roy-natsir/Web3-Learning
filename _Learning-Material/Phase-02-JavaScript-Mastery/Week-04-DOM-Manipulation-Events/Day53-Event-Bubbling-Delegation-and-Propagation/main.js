// ============================
// 🧠 Day 53 - Event Bubbling & Delegation (Main Lesson)
// ============================

// Step 1: Select DOM elements
const walletList = document.getElementById('wallet-list')
const addWalletBtn = document.getElementById('addWalletBtn')
const logBox = document.getElementById('log')

// Step 2: Demonstrate Event Bubbling
walletList.addEventListener('click', event => {
  if (event.target.classList.contains('wallet')) {
    logBox.textContent += `\n[Wallet clicked] ${event.target.textContent}\n`
  }
})

// Step 3: Demonstrate propagation control
addWalletBtn.addEventListener('click', event => {
  event.stopPropagation()
  logBox.textContent += '\n[Button Clicked] Add wallet button pressed (Propagation stopped)'
})

// Step 4: Optional - Show bubbling to document
document.body.addEventListener('click', () => {
  logBox.textContent += '\n[Body Click] Event bubbled to document body'
})

/*
🧩 Summary:
- Click on a wallet → bubbles to <ul>, then <body>.
- Click on button → propagation stopped manually.
*/
