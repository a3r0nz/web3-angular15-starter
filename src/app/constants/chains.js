export const CHAIN_IDS = {
  BITKUB_CHAIN: 96,
  BITKUB_CHAIN_TESTNET: 25925
}

export const SUPPORT_CHAINS = [
  {
    chainIdNumber: CHAIN_IDS.BITKUB_CHAIN,
    networkAbbr:"bkc",
    chainId: '0x' + (CHAIN_IDS.BITKUB_CHAIN).toString(16),
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
    chainIdNumber: CHAIN_IDS.BITKUB_CHAIN_TESTNET,
    chainId: '0x' + (CHAIN_IDS.BITKUB_CHAIN_TESTNET).toString(16),
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
