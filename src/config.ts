import { Configuration } from "./csd-finance/config";

const configurations: { [env: string]: Configuration } = {
  // development: {
  //   chainId: 3,
  //   networkName: "Ethereum Testnet",
  //   etherscanUrl: "https://ropsten.etherscan.io",
  //   defaultProvider:
  //     "https://ropsten.infura.io/v3/9bbe3db4091e4df8a7a01d24c8724c60",
  //   deployments: require("./csd-finance/deployments/deployments.testnet.json"),
  //   externalTokens: {},
  //   refreshInterval: 10000,
  // },
  development: {
    chainId: 1,
    networkName: "Ethereum Mainnet",
    etherscanUrl: "https://etherscan.io",
    defaultProvider:
      "https://mainnet.infura.io/v3/d1713ebd37aa4a2492ccd72fe0f3d056",
    deployments: require("./csd-finance/deployments/deployments.mainnet.json"),
    externalTokens: {},
    refreshInterval: 10000,
  },
  production: {
    chainId: 1,
    networkName: "Ethereum Mainnet",
    etherscanUrl: "https://etherscan.io",
    defaultProvider:
      "https://mainnet.infura.io/v3/d1713ebd37aa4a2492ccd72fe0f3d056",
    deployments: require("./csd-finance/deployments/deployments.mainnet.json"),
    externalTokens: {},
    refreshInterval: 10000,
  },
};

export default configurations[process.env.NODE_ENV || "development"];
