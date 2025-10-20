// Day 34 - Scope, Closures & Hoisting
console.log("--- Day 34 - Scope, Closures & Hoisting ---");

//1. Scope demonstration with wallet address
{
  const connectedWallet = "0x1234...abcd"; // Example wallet address
  console.log("Inside block:", connectedWallet);
}

function providerScopeTest() {
  var providerName = "Metamask (var is function scoped)";
  let network = "Ethereum (let is block scoped)";
  console.log(providerName);
  console.log(network);
}
providerScopeTest();
//console.log(providerName); // RefeenceError

//2. Closure demonstration: balance tracker
function createWallet(initialBalance = 0) {
  let balance = initialBalance; // private state
  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    withdraw(amount) {
      if (amount > balance) {
        return "Insufficient funds";
      }
      balance -= amount;
      return balance;
    },
    getBalance() {
      return balance;
    },
  };
}

const myWallet = createWallet(2);
console.log("Initial balance:", myWallet.getBalance());
console.log("After deposit:", myWallet.deposit(3));
console.log("After withdraw:", myWallet.withdraw(1));

//3. Hoisting demonstration with Web3 flavor
hoistedProvider(); // Works due to hoisting

function hoistedProvider() {
  console.log("Provider function hoisted: connecting to default provider...");
}

//var hoisted (declared later, initialized undefined)
console.log("Gas limit variable before init:", gasLimit);
var gasLimit = 21000;

// let/const TDZ (Temporal Dead Zone)
//console.log(networkName); // ReferenceError
let networkName = "Ethereum Mainnet";

//4. Challenge: private token tracker using closure
function createTokenTracker(tokenName, initialAmount = 0) {
  let amount = initialAmount;
  return {
    mint(qty) {
      amount += qty;
      return `${qty} ${tokenName} minted. Total: ${amount}`;
    },
    burn(qty) {
      if (qty > amount) return "not enough tokens to burn";
      amount -= qty;
      return `${qty} ${tokenName} burned. Remaining: ${amount}`;
    },
    getSupply() {
      return `${amount} ${tokenName} in supply.`;
    },
  };
}

const orcToken = createTokenTracker("ORC", 100);
console.log(orcToken.getSupply());
console.log(orcToken.mint(50));
console.log(orcToken.burn(30));
console.log(orcToken.getSupply());

console.log("--- End of Day 34 ---");
