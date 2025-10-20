// Day 33 - Functions, Parameters & Return Values
console.log("--- Day 33: Functions Practice ---");

// 1. Function Declaration
function greetUser(name) {
  // returns a greeting string
  return `Hello, ${name}! Welcome to Web3.`;
}
console.log(greetUser("Roy"));

// 2. Arrow Function with Default Parameters
const calculateGasFee = (gasPrice = 20, gasLimit = 21000) => {
  // multiply price x limit
  return gasPrice * gasLimit;
};
console.log(`Gas Fee (default): ${calculateGasFee()} Gwei`);
console.log(`Gas Fee (custom): ${calculateGasFee(50, 30000)} Gwei`);

// 3. Function Returning Object
const createUserProfile = (name, role = "developer") => {
  return {
    name,
    role,
    joined: 2025
  };
};
const profile = createUserProfile("Roy");
console.log(profile);

// 4. Function Returning Boolean
const isEligibleForVIP = (balance) => {
  return balance >= 10; // true if balance >= 10 ETH
};
console.log(`VIP Status (balance 5): ${isEligibleForVIP(5)}`);
console.log(`VIP Status (balance 15): ${isEligibleForVIP(15)}`);

// 5. Utility Function + Combining Functions
const formatAddress = (address) => {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

const userSummary = (name, address, balance) => {
  return `User ${name} with address ${formatAddress(address)} has ${balance} ETH`;
};
console.log(userSummary("Roy", "0x742d35Cc6634C0532925a3b844Bc454e4438f44e", 3));

// 6. Challenge: Create a function to calculate staking rewards
const calculateStakingReward = (balance, rate = 0.05) => {
  // returns reward amount
  return balance * rate;
};
console.log(`Staking reward for 100 ETH: ${calculateStakingReward(100)} ETH`);

// 7. Challenge: Function that returns another function (higher-order)
const multiplier = (factor) => {
  return (number) => number * factor;
};
const double = multiplier(2);
console.log(`Double of 5: ${double(5)}`);

console.log("--- End of Day 33 Practice ---");
