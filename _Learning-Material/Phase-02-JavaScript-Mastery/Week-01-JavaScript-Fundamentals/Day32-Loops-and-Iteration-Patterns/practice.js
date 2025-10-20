// Day 32 - Loops and Iteration Patterns
console.log("--- Day 32: Loops & Iteration Patterns ---\n");

// === Sample Data ===
const balances = [0.5, 2.1, 3, 0.9, 5.5];
const user = { name: "Roy", age: 35, role: "developer" };

// 1. Basic for loop
console.log("1. Basic for loop");
for (let i = 0; i < balances.length; i++) {
  console.log(`Index ${i}: ${balances[i]} ETH`);
}

// 2. while loop
console.log("\n2. while loop");
let i = 0;
while (i < balances.length && balances[i] < 3) {
  console.log(`Balance < 3 ETH: ${balances[i]} ETH`);
  i++;
}

// 3. do...while loop
console.log("\n3. do...while loop");
let j = 0;
do {
  console.log(`Checked index ${j}`);
  j++;
} while (j < 2);

// 4. for...of loop
console.log("\n4. for...of loop");
for (const bal of balances) {
  console.log(`Balance (for...of): ${bal} ETH`);
}

// 5. for...in loop (iterate over object properties)
console.log("\n5. for...in loop");
for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}

// 6. Array.forEach (functional style loop)
console.log("\n6. Array.forEach");
balances.forEach((bal, index) => {
  console.log(`Index ${index} has balance ${bal} ETH`);
});

// 7. break and continue demonstration
console.log("\n7. break and continue");
for (const bal of balances) {
  if (bal < 1) {
    console.log(`Balance processed: ${bal} ETH`);
    continue; // skip rest, go to next iteration
  }
  if (bal > 5) {
    console.log(`Found balance >5 ETH, stop loop`);
    break; // exit loop completely
  }
  console.log(`Balance processed: ${bal} ETH`);
}

// === CHALLENGES ===

// Challenge 1: Calculate total balance
console.log("\nChallenge 1: Calculate total balance");
let total = 0;
for (const bal of balances) {
  total += bal;
}
console.log(`Total balance = ${total} ETH`);

// Challenge 2: Filter balances >=1 ETH into new array
console.log("\nChallenge 2: Filter balances >=1 ETH");
const bigBalances = [];
balances.forEach((bal) => {
  if (bal >= 1) bigBalances.push(bal);
});
console.log("Balances >=1 ETH:", bigBalances);

// Challenge 3: Loop array of transactions
console.log("\nChallenge 3: Loop array of transactions");
const transactions = [
  { hash: "0xaaa", value: 1 },
  { hash: "0xbbb", value: 2 },
  { hash: "0xccc", value: 0.5 },
];
for (const tx of transactions) {
  console.log(`Tx hash: ${tx.hash}, value: ${tx.value} ETH`);
}

console.log("\n--- End of Day 32 practice ---");
