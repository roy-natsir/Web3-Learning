// File: practice.js
// Day 30 - Variables, Data Types, and Operators (Complete Practice)

// ---------- Challenge 1: Declare variables ----------
const userName = "Roy Natsir";
const userAge = 35;
let ethBalance = 1.5; // ETH balance is mutable (will change)
console.log(
  `User Name: ${userName}, Age: ${userAge}, ETH Balance: ${ethBalance}`
);

// ---------- Challenge 2: Arithmetic operations ----------
ethBalance += 0.3; // deposit or received 0.3 ETH
console.log(`New ETH Balance: ${ethBalance} ETH`);

// ---------- Challenge 3: Comparison operators & helper function ----------
// Define a helper function that checks if a given balance meets the minimum requirement.
// This is the missing piece that caused ReferenceError previously.
function hasEnoughBalance(balance, minBalance) {
  // returns true if balance is greater than or equal to minBalance
  return balance >= minBalance;
}

const minBalance = 2.0;
console.log(
  `Is balance >= minBalance? ${hasEnoughBalance(ethBalance, minBalance)}`
);

// ---------- Challenge 4: Logical operators (combine conditions) ----------
const isKYCVerified = false; // example boolean, KYC not verified
const hasPromoPass = true; // promotional pass that allows proceed even if low balance

// Use logical operators to decide whether the user can proceed.
// canProceed is true if KYC verified AND has enough balance, OR they have a promo pass.
const canProceed =
  (isKYCVerified && hasEnoughBalance(ethBalance, minBalance)) || hasPromoPass;
console.log("User can proceed:", canProceed);

// ---------- Challenge 5: typeof operator ----------
console.log("Type of userName:", typeof userName); // "string"
console.log("Type of userAge:", typeof userAge); // "number"
console.log("Type of canProceed:", typeof canProceed); // "boolean"

// ---------- Challenge 6: Template literals (string interpolation) ----------
const welcomeMessage = `Welcome ${userName}! Your balance is ${ethBalance} ETH.`;
console.log(welcomeMessage);

// ---------- Challenge 7: Ternary operator ----------
const accessLevel = canProceed ? "Access Granted" : "Access Denied";
console.log(accessLevel);

// ---------- Challenge 8: Compound assignment operators ----------
let points = 0;
points += 10; // points = points + 10
points -= 3; // points = points - 3
points *= 2; // points = points * 2
console.log(`Total Points: ${points}`);

// ---------- Challenge 9: Increment / Decrement ----------
let txCount = 0;
txCount++; // increment by 1
txCount++; // increment again
txCount--; // decrement by 1
console.log("Transaction count:", txCount);

// ---------- Challenge 10: Parsing & Number operations ----------
const gasPriceString = "20.5"; // string received from an API or form
const gasPriceNumber = parseFloat(gasPriceString); // convert to number
const gasLimit = 21000;
const estimatedFee = gasPriceNumber * gasLimit;
console.log(`Estimated Gas Fee: ${estimatedFee} Gwei`);

// ---------- End ----------
console.log("--- Day 30 Practice Completed ---");
