import { Deployments } from "./deployments";

export type Configuration = {
  chainId: number;
  networkName: string;
  etherscanUrl: string;
  defaultProvider: string;
  deployments: Deployments;
  externalTokens: { [contractName: string]: [string, number] };
  config?: EthereumConfig;
  refreshInterval: number;
};

export type EthereumConfig = {
  testing: boolean;
  autoGasMultiplier: number;
  defaultConfirmations: number;
  defaultGas: string;
  defaultGasPrice: string;
  bscNodeTimeout: number;
};

export type TokenInfo = {
  address: string;
  decimal: number;
};

export const defaultEthereumConfig = {
  testing: false,
  autoGasMultiplier: 1.5,
  defaultConfirmations: 1,
  defaultGas: "6000000",
  defaultGasPrice: "1000000000000",
  bscNodeTimeout: 10000,
};
