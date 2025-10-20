//File: Introduction to JavaScript and ES6/intro.js

// Import module
import { formatAddress, multiply } from "./utils.js";

console.log("--- Day 29 Learning Start ---");

// let & const
const wallet = "0xABC123456789";
let balance = 0.5;
console.log("Wallet:", wallet, "| Balance:", balance);

// Template literals
console.log(`User ${formatAddress(wallet)} has ${balance} ETH`);

// Arrow function
const add = (a, b) => a + b;
console.log("Sum:", add(2, 3));

// Destructuring
const tx = { hash: "0xTX123", value: 1.2, status: "success" };
const { hash, value } = tx;
console.log(`Transaction ${hash} => ${value} ETH`);

// Spread & Rest
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log("Spread:", arr2);

const sumAll = (...nums) => nums.reduce((a, b) => a + b, 0);
console.log("Sum with Rest:", sumAll(1, 2, 3, 4));

// Default params
console.log("Multiply with default param:", multiply(5));

// Async/Await
const getData = async () => {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Blockchain Data Loaded"), 1000)
  );
};
(async () => {
  const result = await getData();
  console.log(result);
})();
