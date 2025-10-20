// ============================
// 🌐 Day 50 - DOM Selection & Tree Traversal
// ============================
// 1️⃣ Select elements using different DOM methods
const dashboard = document.getElementById("dashboard");
const walletList = document.querySelector("#wallet-list");
const wallets = document.querySelectorAll(".wallet");

// Log selected elements
console.log("Dashboard Element:", dashboard);
console.log("Wallet List:", walletList);
console.log("Wallet Items:", wallets);

// 2️⃣ Access parent and child nodes
console.log("Wallet List Parent:", walletList.parentNode);
console.log("First Child of Dashboard:", dashboard.firstElementChild.tagName);

// 3️⃣ Traverse DOM
wallets.forEach((wallet, index) => {
  console.log(`Wallet ${index + 1}:`, wallet.textContent);
});

// 4️⃣ Highlight specific wallet dynamically
function highlightWallet(chain) {
  wallets.forEach((wallet) => {
    wallet.classList.remove("highlight");
    if (wallet.textContent.toLowerCase().includes(chain.toLowerCase())) {
      wallet.classList.add("highlight");
    }
  });
}

// Example: Highlight “Polygon” wallet
highlightWallet("Polygon");
