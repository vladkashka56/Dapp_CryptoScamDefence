import React, { createContext, useEffect, useState } from "react";
import { useEthers } from "@usedapp/core";
import CryptoScamDefenceFinance from "../../csd-finance";
import config from "../../config";

export interface CryptoScamDefenceFinanceContext {
  cryptoScamDefenceFinance?: CryptoScamDefenceFinance;
}

export const Context = createContext<CryptoScamDefenceFinanceContext>({
  cryptoScamDefenceFinance: null,
});

export const CryptoScamDefenceFinanceProvider: React.FC = ({ children }) => {
  const { account, chainId, library, active, activate, deactivate, error } =
    useEthers();
  const [cryptoScamDefenceFinance, setCryptoScamDefenceFinance] =
    useState<CryptoScamDefenceFinance>();

  useEffect(() => {
    if (!cryptoScamDefenceFinance) {
      const cryptoScamDefenceFinance = new CryptoScamDefenceFinance(config);
      if (account) {
        // wallet was unlocked at initialization
        cryptoScamDefenceFinance.unlockWallet(library, account);
      }
      setCryptoScamDefenceFinance(cryptoScamDefenceFinance);
    } else if (account) {
      cryptoScamDefenceFinance.unlockWallet(library, account);
    }
  }, [account, library, cryptoScamDefenceFinance]);

  return (
    <Context.Provider value={{ cryptoScamDefenceFinance }}>
      {children}
    </Context.Provider>
  );
};
