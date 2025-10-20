// challenge.js
const txs = [
  { type: 'stake', value: 1000, status: 'success' },
  { type: 'swap', value: 250, status: 'failed' },
  { type: 'transfer', value: 120, status: 'success' },
  { type: 'stake', value: 600, status: 'success' },
]

const successful = txs.filter(tx => tx.status === 'success')

const formatted = successful.map(tx => ({
  type: tx.type,
  value: tx.value,
  status: tx.status
}))

const totalValue = successful.reduce((acc, tx) => acc + tx.value, 0)

console.table(formatted)
console.log(`✅ Successful Transactions: ${successful.length}`)
console.log(`💰 Total Value: ${totalValue}`)
