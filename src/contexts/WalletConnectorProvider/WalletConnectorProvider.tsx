import React, { createContext, useEffect, useState } from "react";
import WalletConnector from "../../walletconnector";

export interface WalletConnectorContext {
  walletConnector?: WalletConnector;
}

export const Context = createContext<WalletConnectorContext>({
  walletConnector: null,
});

export const WalletConnectorProvider: React.FC = ({ children }) => {
  const [walletConnector, setWalletConnector] = useState<WalletConnector>();

  useEffect(() => {
    if (!walletConnector) {
      const walletConnector = new WalletConnector();
      setWalletConnector(walletConnector);
    } else {
    }
  }, [walletConnector]);

  return (
    <Context.Provider value={{ walletConnector }}>{children}</Context.Provider>
  );
};
