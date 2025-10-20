export const getWallet = (address) => {
  return { address, balance: Math.random() * 10, chain: 'Ethereum' };
}

