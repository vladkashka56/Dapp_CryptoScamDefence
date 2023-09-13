import * as React from "react";
import WalletConnectProvider from "@walletconnect/web3-provider";

export class WalletConnector {
  provider: any;
  accounts: string[];
  chainId: number;
  disconnect: boolean;

  constructor() {
    this.provider = new WalletConnectProvider({
      infuraId: "27e484dcd9e3efcfd25a83a78777cdf1",
      bridge: "https://bridge.walletconnect.org",
      qrcode: true,
      chainId: 1,
    });
    this.accounts = [];
    this.chainId = 1;
    this.disconnect = true;
  }

  connect = async () => {
    try {
      await this.provider.enable();
      this.disconnect = false;
    } catch (error) {
      console.log(error);
      return;
    }
    this.subscribeToEvents();
  };

  subscribeToEvents = async () => {
    const { provider } = this.provider;
    // Subscribe to accounts change
    provider.on("accountsChanged", (accounts: string[]) => {
      console.log(accounts);
      this.accounts = accounts;
    });

    // Subscribe to chainId change
    provider.on("chainChanged", (chainId: number) => {
      console.log(chainId);
      this.chainId = chainId;
    });

    // Subscribe to session disconnection
    provider.on("disconnect", (code: number, reason: string) => {
      console.log(code, reason);
      this.disconnect = true;
    });
  };
}
