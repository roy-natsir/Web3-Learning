// File: utils.js
// Purpose: A module containing reusable utility functions.

// Utility functions (module)
export const formatAddress = (address) => {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

export const multiply = (a, b = 1) => a * b;
