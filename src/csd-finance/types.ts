export type CsdStat = {
  sellAmount: number;
  maxAmountToBuyPerTransaction: number;
  maxAmountToSell: number;
  totalAmount: number;
  sellPercent: string;
};

export interface LockedToken {
  owner: string;
  tokenAmount: number;
  rewardAmount: number;
  lockTime: number;
  unlockTime: number;
  lockId: number;
  withdraw: boolean;
}
