import { useContext } from "react";
import { Context } from "../contexts/CryptoScamDefenceFinanceProvider";

const useCryptoScamDefenceFinance = () => {
  const { cryptoScamDefenceFinance } = useContext(Context);
  return cryptoScamDefenceFinance;
};

export default useCryptoScamDefenceFinance;
