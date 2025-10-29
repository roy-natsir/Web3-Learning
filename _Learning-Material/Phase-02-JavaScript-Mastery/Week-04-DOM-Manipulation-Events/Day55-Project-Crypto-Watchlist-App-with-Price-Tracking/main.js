// ======================================
// 💹 Crypto Watchlist App (Mock Edition)
// ======================================

// Cached elements
const form = document.getElementById('addForm');
const input = document.getElementById('cryptoInput');
const list = document.getElementById('watchlist');
const refreshBtn = document.getElementById('refreshBtn');

// Local State
let watchList = [];

// Mock database of base price (i'm sorry if this nt accurate)
const MOCK_PRICES = {
  bitcoin: 113102.97,
  ethereum: 4014.19,
  polygon: 1024,
  solana: 202,
  dogecoin: 0.2,
};

// Generate a mock price (simulate volatility)
function getMockPrice(coin) {
  const base = MOCK_PRICES[coin.toLowerCase()] || Math.random() * 500;
  const fluctuation = (Math.random() * 0.1 - 0.05) * base; // +/-5%
  return (base + fluctuation).toFixed(2);
}

// Render the list dynamically
function renderList() {
  list.innerHTML = '';
  watchList.forEach(crypto => {
    const li = document.createElement('li');
    li.innerHTML = `
    <span>${crypto.name.toUpperCase()}: $${crypto.price}</span>
    <button class="remove-btn" data-id="${crypto.name}">❌</button>
    `;
    list.appendChild(li);
  });
}

// Add new Crypto
form.addEventListener('submit', e => {
  e.preventDefault();
  const coin = input.value.trim().toLowerCase();
  if (!coin) return alert('Please enter a crypto name');
  if (watchList.find(c => c.name === coin))
    return alert('Crypto already in watchlist');

  const price = getMockPrice(coin);
  watchList.push({ name: coin, price });
  renderList();
  input.value = '';
});

// Refresh mock prices
refreshBtn.addEventListener('click', () => {
  watchList.forEach(crypto => {
    crypto.price = getMockPrice(crypto.name);
  });
  renderList();
});

// Event Delegation - remove crypto
list.addEventListener('click', e => {
  if (e.target.classList.contains('remove-btn')) {
    const coin = e.target.dataset.id;
    watchList = watchList.filter(c => c.name !== coin);
    renderList();
  }
});
