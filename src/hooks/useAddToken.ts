import { useState, useCallback } from "react";
const useAddToken = () => {
  const [tokenAdd, setTokenAdd] = useState(false);
  const { ethereum } = window as any;

  /**
   * For more read https://github.com/NoahZinsmeister/web3-react/blob/6737868693adb7e1e28ae80499e19901e9aae45a/example/hooks.ts#L33
   * And https://docs.metamask.io/guide/ethereum-provider.html
   * @param provider ethereum provider in this case is the window.ethereum available due to metamask being installed
   * @returns
   */
  const addCSDToken = async (provider: any) => {
    await provider.request({
      method: "wallet_watchAsset",
      params: {
        type: "ERC20",
        options: {
          address: "0xba2f318b98218fb7727261defa99017c265bdaef",
          symbol: "CSD",
          decimals: 18,
          image:
            "https://cryptoscamdefense.net/theme-assets/images/csd-preload-logo.png",
        },
      },
    });
  };

  const handleAddToken = useCallback(async () => {
    if (!tokenAdd) {
      if (ethereum && ethereum.networkVersion === "1") {
        await addCSDToken(ethereum);
        setTokenAdd(true);
      }
    }
  }, [tokenAdd, ethereum]);

  return { onHandleAddToken: handleAddToken };
};

export default useAddToken;
