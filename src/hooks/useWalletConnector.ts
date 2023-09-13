import { useContext } from "react";
import { Context } from "../contexts/WalletConnectorProvider";

const useWalletConnector = () => {
  const { walletConnector } = useContext(Context);
  return walletConnector;
};

export default useWalletConnector;
