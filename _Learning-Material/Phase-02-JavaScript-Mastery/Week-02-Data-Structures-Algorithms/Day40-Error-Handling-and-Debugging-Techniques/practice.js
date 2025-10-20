// Day 40 - Error Handling & Debugging (Challenge Solutions)
console.log('--- Day 40 Challenge Solutions ---');

/* ======================================================
   1. Frontend Challenge
   ------------------------------------------------------
   Function: renderNFTCard
   → Throws error if NFT image is missing.
====================================================== */
function renderNFTCard(nft) {
  try {
    if (!nft.image) {
      throw new Error('Missing NFT image');
    }
    return `<div class="nft-card">
              <img src="${nft.image}" alt="${nft.name}"/>
              <h2>${nft.name}</h2>
            </div>`;
  } catch (err) {
    console.error('Frontend Error:', err.message);
  }
}

console.log(
  'NFT with image:',
  renderNFTCard({ name: 'Orchis NFT', image: '/nft.png' })
);
console.log('NFT without image:', renderNFTCard({ name: 'Broken NFT' }));

/* ======================================================
   2. Backend Challenge
   ------------------------------------------------------
   Function: getUserBalance
   → Throws error if address not found in database.
====================================================== */
const dbUsers = [
  { address: '0xAAA', balance: 100 },
  { address: '0xBBB', balance: 200 },
];

function getUserBalance(address) {
  try {
    const user = dbUsers.find(u => u.address === address);
    if (!user) throw new Error('User not found');
    return user.balance;
  } catch (err) {
    console.error('Backend Error:', err.message);
  }
}

console.log('Balance 0xAAA:', getUserBalance('0xAAA'));
console.log('Balance 0xXYZ:', getUserBalance('0xXYZ'));

/* ======================================================
   3. Smart Contract Challenge
   ------------------------------------------------------
   Function: stakeToken
   → Throws error if amount > balance (revert simulation).
====================================================== */
function stakeToken(balance, amount) {
  try {
    if (amount > balance) {
      throw new Error('Revert: Not enough tokens to stake');
    }
    balance -= amount;
    return `Stake successful. Remaining balance: ${balance}`;
  } catch (err) {
    console.error('Smart Contract Error:', err.message);
  }
}

console.log(stakeToken(5, 10)); // insufficient
console.log(stakeToken(20, 5)); // valid

/* ======================================================
   4. Security Challenge
   ------------------------------------------------------
   Function: validateTx
   → Throws error if tx.amount <= 0 or tx.to in blacklist.
====================================================== */
const blacklist = ['0xBAD', '0xSCAM'];

function validateTx(tx) {
  try {
    if (tx.amount <= 0) throw new Error('Invalid transaction amount');
    if (blacklist.includes(tx.to)) throw new Error('Receiver is blacklisted');
    return 'Transaction validated successfully';
  } catch (err) {
    console.error('Security Error:', err.message);
  }
}

console.log(validateTx({ from: '0xAAA', to: '0xBAD', amount: 50 })); // blocked
console.log(validateTx({ from: '0xAAA', to: '0x123', amount: 0 })); // invalid
console.log(validateTx({ from: '0xAAA', to: '0x123', amount: 10 })); // valid

/* ======================================================
   5. DevOps Challenge
   ------------------------------------------------------
   Function: deployContract
   → Throws error if network not Ethereum/Polygon.
====================================================== */
function deployContract(network) {
  try {
    if (network !== 'Ethereum' && network !== 'Polygon') {
      throw new Error('Unsupported network');
    }
    return `Contract deployed successfully on ${network}`;
  } catch (err) {
    console.error('DevOps Error:', err.message);
  }
}

console.log(deployContract('BSC')); // unsupported
console.log(deployContract('Polygon')); // valid

/* ======================================================
   6. Testing Challenge
   ------------------------------------------------------
   Function: calculateFee + assert test
   → Throws error if output not expected.
====================================================== */
function calculateFee(amount, percent) {
  return (amount * percent) / 100;
}

function assertEqual(a, b) {
  try {
    if (a !== b) throw new Error(`Assertion Failed: ${a} !== ${b}`);
    console.log('Test Passed!');
  } catch (err) {
    console.error('Test Error:', err.message);
  }
}

// Tests
assertEqual(calculateFee(100, 10), 10); // pass
assertEqual(calculateFee(200, 5), 20); // pass
assertEqual(calculateFee(100, 10), 15); // fail

console.log('--- End of Day 40 Challenge Solutions ---');
