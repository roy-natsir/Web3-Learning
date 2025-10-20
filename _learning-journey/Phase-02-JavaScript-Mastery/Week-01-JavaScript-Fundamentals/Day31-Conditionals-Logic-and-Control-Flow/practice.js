// File: practice.js
// Topic: Day 31 - Conditionals, Logic & Control Flow

console.log("--- Day 31: Conditionals, Logic & Control Flow ---");

// 1️⃣ Declare all variables first
const isWalletConnected = true;
const ethBalance = 10;
const isOwner = false;
const role = "admin";
const gasPrice = 10;
const ComplexCondition = 10;

// 2️⃣ Challenge 1: Basic if/else
console.log("\nChallenge 1: Basic if/else");
if (isWalletConnected && ethBalance >= 10) {
  console.log("Access Granted");
} else {
  console.log("Access Denied");
}

// 3️⃣ Challenge 2: switch case
console.log("\nChallenge 2: switch case");
switch (role) {
  case "admin":
    console.log("Welcome Admin");
    break;
  case "user":
    console.log("Welcome User");
    break;
  default:
    console.log("Unknown Role");
}

// 4️⃣ Challenge 3: Ternary operator
console.log("\nChallenge 3: Ternary operator");
const gasMsg =
  gasPrice <= 10 ? "Proceed with transaction" : "Wait for lower gas prices";
console.log(gasMsg);

// 5️⃣ Challenge 4: Complex condition (&& and ||)
console.log("\nChallenge 4: Complex condition");
if ((isWalletConnected && isOwner) || ethBalance >= 10) {
  console.log("VIP Access");
} else {
  console.log("Normal Access");
}

console.log("\n--- Day 31 Practice Completed ---");
