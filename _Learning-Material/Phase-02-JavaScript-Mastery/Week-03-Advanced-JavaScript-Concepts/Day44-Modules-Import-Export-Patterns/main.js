import * as portfolio from './portfolio.js';

const addresses = ['0xABS', '0xDEF', '0x123'];
const userPortfolio = portfolio.getPortfolio(addresses);

console.table(userPortfolio);
console.log('Total Balance:', portfolio.calculateTotal(userPortfolio).toFixed(2));
