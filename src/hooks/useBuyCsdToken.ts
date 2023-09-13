import { useCallback } from "react";
import useCryptoScamDefenceFinance from "./useCsdFinance";
import useHandleTransactionReceipt from "./useHandleTransactionReceipt";

const useBuyCsdToken = () => {
  const cryptoScamDefenceFinance = useCryptoScamDefenceFinance();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleBuyCsdToken = useCallback(
    (amount) => {
      let buyAmount = amount;
      if (buyAmount < 1000) {
        buyAmount = 1000;
      }
      handleTransactionReceipt(
        cryptoScamDefenceFinance.buyCSD(buyAmount),
        `buying ${amount} CSD`
      );
    },
    [cryptoScamDefenceFinance, handleTransactionReceipt]
  );
  return { onBuyCsd: handleBuyCsdToken };
};

export default useBuyCsdToken;
