// main.js
import { transactions } from './transactions.js';
import { createFilter, successTx, highValueTx } from './filters.js';

// Create dynamic filters
const filterSuccess = createFilter(successTx);
const filterHighValue = createFilter(highValueTx);

console.log('✅ Successful Transactions:');
console.table(filterSuccess(transactions));

console.log('💰 High-Value Transactions:');
console.table(filterHighValue(transactions));
