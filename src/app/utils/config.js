export const SUPPORT_CHAINS = [
  {
    networkAbbr:"bkc",
    chainIdNumber: 96,
    chainId: '0x' + (96).toString(16),
    chainName: "Bitkub Chain Mainnet",
    rpcUrls: ["https://rpc.bitkubchain.io/"],
    nativeCurrency: {
      name: "KUB COIN",
      symbol: "KUB",
      decimals: 18,
    },
    wssUrls:["wss://wss.bitkubchain.io"],
    blockExplorerUrls: ["https://bkcscan.com/"],
  },
  {
    networkAbbr:"bkctestnet",
    chainIdNumber: 25925,
    chainId: '0x' + (25925).toString(16),
    chainName: "Bitkub Chain Testnet",
    rpcUrls: ["https://rpc-testnet.bitkubchain.io"],
    nativeCurrency: {
      name: "KUB COIN",
      symbol: "tKUB",
      decimals: 18,
    },
    wssUrls:["wss://wss-testnet.bitkubchain.io"],
    blockExplorerUrls: ["https://testnet.bkcscan.com/"],
  }
]
