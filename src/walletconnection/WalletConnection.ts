import * as React from "react";
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
import { convertUtf8ToHex } from "@walletconnect/utils";
import { IInternalEvent } from "@walletconnect/types";
import {
  apiGetAccountAssets,
  apiGetGasPrices,
  apiGetAccountNonce,
} from "../helpers/api";

import {
  sanitizeHex,
  verifySignature,
  hashTypedDataMessage,
  hashMessage,
} from "../helpers/utilities";

import {
  convertAmountToRawNumber,
  convertStringToHex,
} from "../helpers/bignumber";
import { eip712 } from "../helpers/eip712";

import { IAppState } from "./types";

const INITIAL_STATE: IAppState = {
  connector: null,
  fetching: false,
  connected: false,
  chainId: 1,
  showModal: false,
  pendingRequest: false,
  uri: "",
  accounts: [],
  address: "",
  result: null,
  assets: [],
};

export class WalletConnection {
  state: IAppState;

  constructor() {
    this.state = INITIAL_STATE;
    // bridge url
    const bridge = "https://bridge.walletconnect.org";

    // create new connector
    const connector = new WalletConnect({ bridge, qrcodeModal: QRCodeModal });
    this.state.connector = connector;
    if (connector.connected) {
      // subscribe to events
      this.subscribeToEvents();
    }
  }

  connect = async () => {
    // bridge url
    const bridge = "https://bridge.walletconnect.org";

    // create new connector
    const connector = new WalletConnect({ bridge, qrcodeModal: QRCodeModal });

    this.state.connector = connector; // await setState({ connector });

    // check if already connected
    if (!connector.connected) {
      // create new session
      console.log("connector.createSession()");
      await connector.createSession();
    }

    // subscribe to events
    await this.subscribeToEvents();
  };

  subscribeToEvents = async () => {
    const { connector } = this.state;

    console.log("subscribeToEvent connector:", connector);
    if (!connector) {
      return;
    }

    connector.on("session_update", async (error, payload) => {
      console.log(`connector.on("session_update")`);

      if (error) {
        throw error;
      }

      const { chainId, accounts } = payload.params[0];
      this.onSessionUpdate(accounts, chainId);
    });

    connector.on("connect", (error, payload) => {
      console.log(`connector.on("connect")`);

      if (error) {
        throw error;
      }

      this.onConnect(payload);
    });

    connector.on("disconnect", (error, payload) => {
      console.log(`connector.on("disconnect")`);

      if (error) {
        throw error;
      }

      this.onDisconnect();
    });

    if (connector.connected) {
      const { chainId, accounts } = connector;
      const address = accounts[0];
      this.state.connected = true;
      this.state.chainId = chainId;
      this.state.accounts = accounts;
      this.state.address = address;
      await this.onSessionUpdate(accounts, chainId);
    }

    this.state.connector = connector;
  };

  killSession = () => {
    const { connector } = this.state;
    if (connector) {
      connector.killSession();
    }
    this.resetApp();
  };

  resetApp = () => {
    this.state = INITIAL_STATE;
  };

  onConnect = async (payload: IInternalEvent) => {
    const { chainId, accounts } = payload.params[0];
    const address = accounts[0];
    this.state.connected = true;
    this.state.chainId = chainId;
    this.state.accounts = accounts;
    this.state.address = address;
    await this.getAccountAssets();
    console.log("onConnect state:", this.state);
  };

  onDisconnect = () => {
    this.resetApp();
  };

  onSessionUpdate = async (accounts: string[], chainId: number) => {
    const address = accounts[0];
    this.state.chainId = chainId;
    this.state.accounts = accounts;
    this.state.address = address;
    console.log("onSessionUpdate state:", this.state);
    await this.getAccountAssets();
  };

  getAccountAssets = async () => {
    const { address, chainId } = this.state;
    this.state.fetching = true;
    try {
      // get account balances
      const assets = await apiGetAccountAssets(address, chainId);

      this.state.fetching = false;
      this.state.address = address;
      this.state.assets = assets;
      console.log("getAccountAssets state:", this.state);
    } catch (error) {
      console.error(error);
      this.state.fetching = false;
    }
  };

  toggleModal = () => {
    this.state.showModal = !this.state.showModal;
  };

  testSendTransaction = async () => {
    const { connector, address, chainId } = this.state;

    if (!connector) {
      return;
    }

    // from
    const from = address;

    // to
    const to = address;

    // nonce
    const _nonce = await apiGetAccountNonce(address, chainId);
    const nonce = sanitizeHex(convertStringToHex(_nonce));

    // gasPrice
    const gasPrices = await apiGetGasPrices();
    const _gasPrice = gasPrices.slow.price;
    const gasPrice = sanitizeHex(
      convertStringToHex(convertAmountToRawNumber(_gasPrice, 9))
    );

    // gasLimit
    const _gasLimit = 21000;
    const gasLimit = sanitizeHex(convertStringToHex(_gasLimit));

    // value
    const _value = 0;
    const value = sanitizeHex(convertStringToHex(_value));

    // data
    const data = "0x";

    // test transaction
    const tx = {
      from,
      to,
      nonce,
      gasPrice,
      gasLimit,
      value,
      data,
    };

    try {
      // open modal
      this.toggleModal();

      // toggle pending request indicator
      this.state.pendingRequest = true;

      // send transaction
      const result = await connector.sendTransaction(tx);

      // format displayed result
      const formattedResult = {
        method: "eth_sendTransaction",
        txHash: result,
        from: address,
        to: address,
        value: "0 ETH",
      };

      // display result
      this.state.connector = connector;
      this.state.pendingRequest = false;
      this.state.result = formattedResult || null;
    } catch (error) {
      console.error(error);
      this.state.connector = connector;
      this.state.pendingRequest = false;
      this.state.result = null;
    }
  };

  testSignMessage = async () => {
    const { connector, address, chainId } = this.state;

    if (!connector) {
      return;
    }

    // test message
    const message = `My email is john@doe.com - ${new Date().toUTCString()}`;

    // encode message (hex)
    const hexMsg = convertUtf8ToHex(message);

    // eth_sign params
    const msgParams = [address, hexMsg];

    try {
      // open modal
      this.toggleModal();

      // toggle pending request indicator
      this.state.pendingRequest = true;

      // send message
      const result = await connector.signMessage(msgParams);

      // verify signature
      const hash = hashMessage(message);
      const valid = await verifySignature(address, result, hash, chainId);

      // format displayed result
      const formattedResult = {
        method: "eth_sign",
        address,
        valid,
        result,
      };

      // display result
      this.state.connector = connector;
      this.state.pendingRequest = false;
      this.state.result = formattedResult || null;
    } catch (error) {
      console.error(error);
      this.state.connector = connector;
      this.state.pendingRequest = false;
      this.state.result = null;
    }
  };

  testSignTypedData = async () => {
    const { connector, address, chainId } = this.state;

    if (!connector) {
      return;
    }

    const message = JSON.stringify(eip712.example);

    // eth_signTypedData params
    const msgParams = [address, message];

    try {
      // open modal
      this.toggleModal();

      // toggle pending request indicator
      this.state.pendingRequest = true;

      // sign typed data
      const result = await connector.signTypedData(msgParams);

      // verify signature
      const hash = hashTypedDataMessage(message);
      const valid = await verifySignature(address, result, hash, chainId);

      // format displayed result
      const formattedResult = {
        method: "eth_signTypedData",
        address,
        valid,
        result,
      };

      // display result
      this.state.connector = connector;
      this.state.pendingRequest = false;
      this.state.result = formattedResult || null;
    } catch (error) {
      console.error(error);
      this.state.connector = connector;
      this.state.pendingRequest = false;
      this.state.result = null;
    }
  };
}
