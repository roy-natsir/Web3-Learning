document.addEventListener("DOMContentLoaded", () => {
  function highlightWallet(chain) {
    const wallets = document.querySelectorAll(".wallet");
    let found = false;

    wallets.forEach((wallet) => {
      wallet.classList.remove("highlight");
      if (wallet.textContent.toLowerCase().includes(chain.toLowerCase())) {
        wallet.classList.add("highlight");
        found = true;
      }
    });

    if (!found) alert("Wallet not found!");
  }

  // Test
  highlightWallet("Base");
});
