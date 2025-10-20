// ======================================
// 🌐 Day 46 - Array Methods (map, filter, reduce)
// ======================================

const transactions = [
  { id: 1, type: 'swap', value: 150, status: 'success' },
  { id: 2, type: 'stake', value: 600, status: 'pending' },
  { id: 3, type: 'transfer', value: 75, status: 'success' },
  { id: 4, type: 'swap', value: 420, status: 'success' },
]

// 1️⃣ map() – transform transactions
const formatted = transactions.map(tx => ({
  label: `${tx.type.toUpperCase()} - ${tx.value} USD`,
  status: tx.status === 'success' ? '✅' : '⏳'
}))
console.table(formatted)

// 2️⃣ filter() – only successful txs
const successful = transactions.filter(tx => tx.status === 'success')
console.table(successful)

// 3️⃣ reduce() – total transaction value
const totalValue = transactions.reduce((acc, tx) => acc + tx.value, 0)
console.log('💰 Total Transaction Value:', totalValue)
