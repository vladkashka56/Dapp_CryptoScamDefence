import { Configuration, TokenInfo } from "./config";
import { CsdStat, LockedToken } from "./types";
// import { GraphQLClient, gql } from 'graphql-request';
import { BigNumber, Contract, ethers /*, EventFilter*/ } from "ethers";
import moment from "moment";
import { Promise } from "bluebird";
// import Web3 from "web3";
import { getDefaultProvider } from "../utils/provider";
import { TransactionResponse } from "@ethersproject/providers";
/**
 * An API module of CryptoScamDefence Finance contracts.
 * All contract-interacting domain logic should be defined in here.
 */
export class CryptoScamDefenceFinance {
  myAccount: string;
  provider: ethers.providers.Web3Provider;
  signer?: ethers.Signer;
  config: Configuration;
  contracts: { [name: string]: Contract };
  externalTokens: { [name: string]: TokenInfo };

  constructor(cfg: Configuration) {
    const { deployments, externalTokens } = cfg;
    const provider = getDefaultProvider();

    // loads contracts from deployments
    this.contracts = {};
    for (const [name, deployment] of Object.entries(deployments)) {
      this.contracts[name] = new Contract(
        deployment.address,
        deployment.abi,
        provider
      );
    }
    this.externalTokens = {};
    for (const [symbol, [address, decimal]] of Object.entries(externalTokens)) {
      this.externalTokens[symbol] = { address, decimal };
    }
    this.config = cfg;
    this.provider = provider;
  }

  /**
   * @param provider From an unlocked wallet. (e.g. Metamask)
   * @param account An address of unlocked wallet account.
   */
  unlockWallet(provider: any, account: string) {
    const { CSDCrowdsale } = this.contracts;
    this.signer = provider.getSigner(0);
    this.myAccount = account;
    for (const [name, contract] of Object.entries(this.contracts)) {
      this.contracts[name] = contract.connect(this.signer);
    }
    console.log(`🔓 Wallet is unlocked. Welcome, ${account}!`);
  }

  get isUnlocked(): boolean {
    return !!this.myAccount;
  }

  async getRate(): Promise<number> {
    const { CSDCrowdsale } = this.contracts;
    try {
      const rate = await CSDCrowdsale.rate();
      return Number(rate);
    } catch (err) {
      console.log(err);
      return 0;
    }
  }

  async buyCSD(amount: number): Promise<TransactionResponse> {
    if (this.myAccount === undefined) return;
    const { CSDCrowdsale } = this.contracts;
    const rate = await this.getRate();
    // const currentNonce = await this.signer.getTransactionCount();
    let overrides = {
      from: this.myAccount,
      value: ((amount * 1e18) / rate).toFixed(),
      // nonce: currentNonce + 1,
    };
    return await CSDCrowdsale.buyTokens(this.myAccount, overrides);
  }

  async getCsdPrice(): Promise<string> {
    const { EACAggregatorProxy } = this.contracts;
    try {
      const roundData = await EACAggregatorProxy.latestRoundData();
      const rate = await this.getRate();
      const ethPrice = BigNumber.from(roundData[1]);
      const price = Number(ethPrice) / (rate * 10 ** 8);
      return Number(price).toFixed(9);
    } catch (err) {
      console.log(err);
      return "";
    }
  }

  async getCsdStat(): Promise<CsdStat> {
    const { CSDCrowdsale } = this.contracts;
    console.log("CSDCrowdsale", CSDCrowdsale);
    const sellAmount = await CSDCrowdsale.sellAmount();
    const maxAmountToBuyPerTransaction =
      await CSDCrowdsale.maxAmountToBuyPerTransaction();
    const maxAmountToSell = await CSDCrowdsale.maxAmountToSell();
    const totalAmount = await CSDCrowdsale.totalAmount();
    const sellPercent = ((100 * sellAmount) / totalAmount).toFixed(2);
    return {
      sellAmount: Number(sellAmount) / 1e18,
      maxAmountToBuyPerTransaction: Number(maxAmountToBuyPerTransaction) / 1e18,
      maxAmountToSell: Number(maxAmountToSell) / 1e18,
      totalAmount: Number(totalAmount) / 1e18,
      sellPercent: sellPercent,
    };
  }

  async getAllowance(account: string): Promise<boolean> {
    const { CSD, CSDTokenLocker } = this.contracts;
    try {
      const BigAllowance = await CSD.allowance(account, CSDTokenLocker.address);
      console.log("allowance", BigAllowance);
      if (
        BigAllowance.div(BigNumber.from(1e9).mul(BigNumber.from(1e9))).gt(
          BigNumber.from(0)
        )
      ) {
        console.log("allowance > 0", BigAllowance);
        return true;
      } else {
        return false;
      }
    } catch (e) {
      console.log("allowance error:", e);
      return false;
    }
  }

  async handleApprove(): Promise<boolean> {
    if (this.myAccount === undefined) return false;
    const { CSD, CSDTokenLocker } = this.contracts;
    try {
      const res = await CSD.approve(
        CSDTokenLocker.address,
        ethers.constants.MaxUint256
      );
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  async handleLock(amount: number, lockDays: number): Promise<boolean> {
    if (this.myAccount === undefined) return false;
    const { CSDTokenLocker } = this.contracts;
    try {
      const BigNewLockAmount = BigNumber.from(Math.ceil(amount * 1e6));
      const res = await CSDTokenLocker.lockTokens(
        BigNewLockAmount.mul(BigNumber.from(1e3)).mul(BigNumber.from(1e9)),
        lockDays
      );
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  async handleWithdraw(lockId: number): Promise<boolean> {
    if (this.myAccount === undefined) return;
    const { CSDTokenLocker } = this.contracts;
    try {
      await CSDTokenLocker.withdraw(lockId);
      return true;
    } catch (error) {
      console.log("handleWithdraw:", error);
      return false;
    }
  }

  async getLockTokenLength(): Promise<number> {
    if (this.myAccount === undefined) return 0;
    const { CSDTokenLocker } = this.contracts;
    let length = 0;
    try {
      length = await CSDTokenLocker.userLocksLength(this.myAccount);
    } catch (e) {
      console.error(e);
    }
    return Number(length);
  }

  async handleLockToken(account: string): Promise<LockedToken[]> {
    const { CSD, CSDTokenLocker } = this.contracts;
    const length = await this.getLockTokenLength();
    const percent = await CSDTokenLocker.plusPercent();
    const tokenLocksResults: LockedToken[] = [];
    for (let index = 0; index < length; index++) {
      tokenLocksResults.push({
        owner: "",
        tokenAmount: 0,
        rewardAmount: 0,
        lockTime: 0,
        unlockTime: 0,
        lockId: 0,
        withdraw: false,
      });
    }
    await Promise.map(tokenLocksResults, async (tokenLocksResult, i) => {
      const id = await CSDTokenLocker.userLockAt(account, i);
      const individualTokenInfo = await CSDTokenLocker.tokenLocks(Number(id));
      const bigDecimal = await CSD.decimals();
      tokenLocksResults[i].owner = individualTokenInfo[1];
      tokenLocksResults[i].tokenAmount = BigNumber.from(individualTokenInfo[2])
        .div(BigNumber.from(1e6).mul(BigNumber.from(10 ** (bigDecimal - 6))))
        .toNumber();
      tokenLocksResults[i].rewardAmount =
        (tokenLocksResults[i].tokenAmount / Number(percent)) *
        Math.floor(
          (Number(moment().format("X")) - Number(individualTokenInfo[3])) /
            86400
        );
      tokenLocksResults[i].lockTime = Number(individualTokenInfo[3]);
      tokenLocksResults[i].unlockTime = Number(individualTokenInfo[4]);
      tokenLocksResults[i].lockId = Number(id);
      if (Number(moment().format("X")) < Number(individualTokenInfo[4])) {
        tokenLocksResults[i].withdraw = false;
      } else {
        tokenLocksResults[i].withdraw = true;
      }
    });
    console.log("tokenLocksResults--", tokenLocksResults);
    return tokenLocksResults;
  }

  async getTotalLockInfo(): Promise<LockedToken[]> {
    const { CSD, CSDTokenLocker } = this.contracts;
    const lockNonce = await CSDTokenLocker.lockNonce();
    const percent = await CSDTokenLocker.plusPercent();
    console.log("lockNonce", lockNonce);
    const tokenLocksResults: LockedToken[] = [];
    const realTokenLocksResults: LockedToken[] = [];
    for (let index = 0; index < lockNonce; index++) {
      tokenLocksResults.push({
        owner: "",
        tokenAmount: 0,
        rewardAmount: 0,
        lockTime: 0,
        unlockTime: 0,
        lockId: 0,
        withdraw: false,
      });
    }
    await Promise.map(tokenLocksResults, async (tokenLocksResult, i) => {
      const individualTokenInfo = await CSDTokenLocker.tokenLocks(i);
      const bigDecimal = await CSD.decimals();
      tokenLocksResults[i].owner = individualTokenInfo[1];
      tokenLocksResults[i].tokenAmount = BigNumber.from(individualTokenInfo[2])
        .div(BigNumber.from(1e6).mul(BigNumber.from(10 ** (bigDecimal - 6))))
        .toNumber();
      tokenLocksResults[i].rewardAmount =
        (tokenLocksResults[i].tokenAmount / percent) *
        Math.floor(
          (Number(moment().format("X")) - Number(individualTokenInfo[3])) /
            86400
        );
      tokenLocksResults[i].lockTime = Number(individualTokenInfo[3]);
      tokenLocksResults[i].unlockTime = Number(individualTokenInfo[4]);
      tokenLocksResults[i].lockId = Number(i);
      if (Number(moment().format("X")) < Number(individualTokenInfo[4])) {
        tokenLocksResults[i].withdraw = false;
      } else {
        tokenLocksResults[i].withdraw = true;
      }
    });
    for (let i = 0; i < lockNonce; i++) {
      if (Number(tokenLocksResults[i].tokenAmount) != 0) {
        realTokenLocksResults.push({
          owner: tokenLocksResults[i].owner,
          tokenAmount: tokenLocksResults[i].tokenAmount,
          rewardAmount: tokenLocksResults[i].rewardAmount,
          lockTime: tokenLocksResults[i].lockTime,
          unlockTime: tokenLocksResults[i].unlockTime,
          lockId: tokenLocksResults[i].lockId,
          withdraw: tokenLocksResults[i].withdraw,
        });
      }
    }
    return realTokenLocksResults;
  }

  async getTotalLockAmount(): Promise<number> {
    const { CSD, CSDTokenLocker } = this.contracts;
    const bigDecimal = await CSD.decimals();
    const withrawbleAmount: BigNumber =
      await CSDTokenLocker.getWithdrawbleAmount();
    const balanceAmount: BigNumber = await CSD.balanceOf(
      CSDTokenLocker.address
    );
    const bigTotalLockAmount: BigNumber = balanceAmount.sub(withrawbleAmount);
    console.log("bigTotalLockAmount:", bigTotalLockAmount);
    const totalLockAmount = bigTotalLockAmount
      .div(BigNumber.from(1e6).mul(BigNumber.from(10 ** (bigDecimal - 6))))
      .toNumber();
    return totalLockAmount;
  }
}
