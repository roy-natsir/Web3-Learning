// filters.js - Higher-Order Functions
export function createFilter(callback) {
  return function (transactions) {
    return transactions.filter(callback);
  };
}

// Example callback
export const successTx = tx => tx.status === 'success';
export const highValueTx = tx => tx.value > 1;
