import { useEffect } from "react";
// import { connectorLocalStorageKey, ConnectorNames } from '@pancakeswap/uikit'
import { useEthers } from "@usedapp/core";

const useEagerConnect = () => {
  // const { login } = useAuth()
  const { account, connect, connector } = useEthers();

  if (account && window.localStorage.getItem("connectorId") === "") {
    window.localStorage.setItem("connectorId", connector);
  }

  useEffect(() => {
    const connectorId = window.localStorage.getItem("connectorId");
    if (connectorId && !account) {
      connect(connectorId);
    }
  }, [connect, account]);
};

export default useEagerConnect;
