// Day 41 - Cryptocurrency Price Calculator (CoinGecko API Final)
// Using Node.js native fetch (no need node-fetch)
console.log("--- Day 41: Cryptocurrency Price Calculator (API Version) ---");

/* ======================================================
   1. Fetch Prices from CoinGecko
====================================================== */
async function fetchPrices() {
  try {
    const url =
      "https://api.coingecko.com/api/v3/simple/price?ids=ethereum,polygon-pos&vs_currencies=usd";

    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

    const data = await response.json();
    console.log("Fetched Prices:", data);

    // Map CoinGecko IDs → project symbols
    return {
      ETH: data.ethereum?.usd ?? null,
      MATIC: data["polygon-pos"]?.usd ?? null,
      ORC: 2.5, // fallback for Orchis token (not listed)
    };
  } catch (err) {
    console.error("API Fetch Error:", err.message);
    return null;
  }
}

/* ======================================================
   2. Validator (Skip nulls instead of error)
====================================================== */
function validatePrices(data) {
  for (let [symbol, price] of Object.entries(data)) {
    if (price === null) {
      console.warn(`Price for ${symbol} not found. Using fallback if available.`);
      continue;
    }
    if (price <= 0 || typeof price !== "number") {
      console.error(`Invalid price for ${symbol}`);
      return false;
    }
  }
  return true;
}

/* ======================================================
   3. Portfolio Calculator
====================================================== */
async function calculateHoldings(wallet) {
  let prices = await fetchPrices();
  if (!prices) {
    console.warn("No API data, cannot calculate portfolio.");
    return;
  }

  if (!validatePrices(prices)) return;

  let totalUSD = 0;
  for (let [symbol, amount] of Object.entries(wallet)) {
    if (!prices[symbol]) {
      console.warn(`No price found for ${symbol}, skipping.`);
      continue;
    }
    const value = amount * prices[symbol];
    console.log(`${symbol}: ${amount} → $${value.toFixed(2)}`);
    totalUSD += value;
  }
  console.log(`Total Portfolio Value: $${totalUSD.toFixed(2)}`);
}

/* ======================================================
   4. Orchis Project Simulation
====================================================== */
const orchisWallet = {
  ETH: 1.2,
  MATIC: 1500,
  ORC: 300,
};

// Run calculator
calculateHoldings(orchisWallet);
