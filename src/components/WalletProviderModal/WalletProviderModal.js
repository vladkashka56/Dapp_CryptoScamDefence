import React, { useEffect } from "react";
import WalletCard from "./WalletCard";
import { Modal, List } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import metamaskLogo from "../../assets/img/metamask-fox.svg";
import walletConnectLogo from "../../assets/img/wallet-connect.svg";
import trustwalletLogo from "../../assets/img/trustwallet.svg";
import { useEthers } from "@usedapp/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import useRefresh from "../../hooks/useRefresh";

export const SupportedChainId = {
  MAINNET: 1,
  ROPSTEN: 3,
  RINKEBY: 4,
  GOERLI: 5,
  KOVAN: 42,

  ARBITRUM_ONE: 42161,
  ARBITRUM_RINKEBY: 421611,
  OPTIMISM: 10,
  OPTIMISTIC_KOVAN: 69,
};

export const ALL_SUPPORTED_CHAIN_IDS = [
  SupportedChainId.MAINNET,
  // SupportedChainId.ROPSTEN,
];

const NETWORK_URLS = {
  [SupportedChainId.MAINNET]: `https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161`,
  // [SupportedChainId.ROPSTEN]: "https://ropsten.infura.io/v3/d1713ebd37aa4a2492ccd72fe0f3d056",
};

export const injected = new InjectedConnector({
  supportedChainIds: ALL_SUPPORTED_CHAIN_IDS,
});

export const walletconnect = new WalletConnectConnector({
  supportedChainIds: ALL_SUPPORTED_CHAIN_IDS,
  rpc: NETWORK_URLS,
  qrcode: true,
});

export const SUPPORTED_WALLETS = {
  INJECTED: {
    connector: injected,
    name: "Injected",
    description: "Injected web3 provider.",
    primary: true,
  },
  METAMASK: {
    connector: injected,
    name: "MetaMask",
    description: "Easy-to-use browser extension.",
  },
  WALLET_CONNECT: {
    connector: walletconnect,
    name: "WalletConnect",
    description: "Connect to Trust Wallet, Rainbow Wallet and more...",
    mobile: true,
  },
  TRUST_WALLET: {
    connector: injected,
    name: "TrustWallet",
    description: "Connect to Trust Wallet",
    mobile: true,
  },
};

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "400px",
    maxWidth: "100%",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: "none",
  },
}));

const WalletProviderModal = ({ open, handleClose }) => {
  const classes = useStyles();
  const { account, activate, activateBrowserWallet } = useEthers();
  const { fastRefresh } = useRefresh();

  useEffect(() => {
    if (account) {
      handleClose();
    }
  });

  return (
    <Modal
      aria-labelledby="connect a wallet"
      aria-describedby="connect your crypto wallet"
      open={open}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClose={handleClose}
    >
      <div className={classes.paper}>
        <h2>Connect your wallet</h2>
        <p className="text-info small">You can safely connect your wallet to buy from our ITO public offer. <br/>Our (coming soon) password less authentication will bring you also new features. Once connected you will get access to users area..  </p>
        <List component="nav" aria-label="main mailbox folders">
          <WalletCard
            icon={
              <img
                src={metamaskLogo}
                alt="Metamask logo"
                style={{ height: 32 }}
              />
            }
            onConnect={() => {
              activateBrowserWallet();
            }}
            title="Metamask"
          />
          <WalletCard
            icon={
              <img
                src={walletConnectLogo}
                alt="Wallet Connect logo"
                style={{ height: 24 }}
              />
            }
            onConnect={() => {
              activate(walletconnect);
            }}
            title="WalletConnect"
          />
          <WalletCard
            icon={
              <img
                src={trustwalletLogo}
                alt="Trust Wallet logo"
                style={{ height: 33 }}
              />
            }
            onConnect={() => {
              activateBrowserWallet();
            }}
            title="TrustWallet"
          />
        </List>
      </div>
    </Modal>
  );
};

export default WalletProviderModal;
