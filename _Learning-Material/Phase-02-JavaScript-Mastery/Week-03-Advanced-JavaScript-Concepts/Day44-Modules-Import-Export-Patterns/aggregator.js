import { transactions } from './transactions.js'

export function aggregateByToken() {
  return transactions.reduce((acc, tx) => {
    const { token, amount } = tx
    acc[token] = (acc[token] || 0) + amount
    return acc
  }, {})
}

export function printSummary() {
  const summary = aggregateByToken()
  console.table(Object.entries(summary).map(([token, amount]) => ({ token, amount })))
}
