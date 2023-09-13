import React, { useState, useEffect } from "react";
import { Input, Table, Select, Tag, Button } from "antd";
import useRefresh from "../../hooks/useRefresh";
import { useEthers } from "@usedapp/core";
import moment from "moment";
import useCryptoScamDefenceFinance from "../../hooks/useCsdFinance";
import "./style.css";

const { Search } = Input;
const { Column } = Table;
const { Option } = Select;

const TokenLockComponent = () => {
  const { slowRefresh } = useRefresh();
  const { account } = useEthers();
  const cryptoScamDefenseFinance = useCryptoScamDefenceFinance();
  const [allowanceStat, setAllowanceStat] = useState(false);
  const [userLockTokens, setUserLockTokens] = useState([]);
  const [tokenLocksResults, setTokenLocksResults] = useState([]);
  const [totalLockAmount, setTotalLockAmount] = useState(0);

  const itemRender = (current, type, originalElement) => {
    if (type === "prev") {
      return (
        <Button
          style={{
            backgroundColor: "#ffffff",
            color: "#000000",
            display: "flex",
            alignItems: "center",
          }}
        >
          &nbsp;Previous
        </Button>
      );
    }
    if (type === "next") {
      return (
        <Button
          style={{
            backgroundColor: "#ffffff",
            color: "#000000",
            display: "flex",
            alignItems: "center",
          }}
        >
          Next&nbsp;
        </Button>
      );
    }

    return originalElement;
  };

  const handleTotalLockAmount = async () => {
    try {
      const res = await cryptoScamDefenseFinance.getTotalLockAmount();
      setTotalLockAmount(res);
    } catch (e) {
      console.error(e);
      setTotalLockAmount(0);
    }
  };

  const lockToken = async () => {
    const inp = document.getElementsByTagName("input");
    if (!inp[0].value || !inp[1].value) {
      alert("Missing InputBox!");
    } else {
      if (inp[0] >= 90) {
        alert("Duration must be over 90!");
      } else {
        console.log(inp[1].value + " " + inp[0].value);
        const res = await cryptoScamDefenseFinance.handleLock(
          inp[1].value,
          inp[0].value
        );
      }
    }
  };

  const Approve = async () => {
    if (account) {
      try {
        const res = await cryptoScamDefenseFinance.handleApprove();
        if (res == true) {
          setAllowanceStat(true);
        }
      } catch (e) {
        console.error(e);
        setAllowanceStat(false);
      }
    } else {
      alert("Connect the wallet!");
    }
  };

  const handleAllowanceState = async () => {
    try {
      const res = await cryptoScamDefenseFinance.getAllowance(account);
      if (res != false) {
        setAllowanceStat(true);
      }
    } catch (e) {
      console.error(e);
      setAllowanceStat(false);
    }
  };

  const handleUserLockTokens = async () => {
    try {
      const res = await cryptoScamDefenseFinance.handleLockToken(account);
      console.log("handleUserLockTokens", res);
      setUserLockTokens(res);
    } catch (e) {
      console.error(e);
      setUserLockTokens([]);
    }
  };

  const handleTotalLockTokens = async () => {
    try {
      const res = await cryptoScamDefenseFinance.getTotalLockInfo();
      setTokenLocksResults(res);
    } catch (e) {
      console.error(e);
      setTokenLocksResults([]);
    }
  };

  useEffect(() => {
    handleTotalLockAmount();
    handleTotalLockTokens().then(
      console.log("tokenLocksResults", tokenLocksResults)
    );
    if (account) {
      handleAllowanceState().then(console.log("allowanceStat", allowanceStat));
      handleUserLockTokens().then(
        console.log("userLockTokens", userLockTokens)
      );
    }
  }, [account, allowanceStat, slowRefresh]);
  return (
    <main>
      <section
        id="token-distribution"
        className="token-distribution section-padding"
      >
        <div className="container">
          <div className="heading text-center">
            <div
              className="animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.3s"
            >
              <h6 className="sub-title">CSD Token Locker</h6>
              <h2 className="title">CSD Lock & Withdraw</h2>
            </div>
            <p
              className="content-desc animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.4s"
            >
              You can lock your CSD tokens for minimum 90 days with 0.01%/ day
              interest .{" "}
            </p>
          </div>
          <div className="row">
            <div className="col-md-12 col-lg-6 pr-5">
              <div className="content-area text-center">
                <h4
                  className="title animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.5s"
                >
                  Lock CSD and get interest
                </h4>
                <div acceptCharset="utf-8" className="text-center">
                  <input
                    type="text"
                    className="form-control animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.8s"
                    name="duration"
                    placeholder="Lock period (minimum 90 days)"
                  />
                  <input
                    type="text"
                    className="form-control animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.9s"
                    name="amount"
                    placeholder="Locking Amount"
                  />
                  {!allowanceStat ? (
                    <button
                      onClick={() => Approve()}
                      className="btn btn-lg btn-gradient-purple btn-glow animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="1.1s"
                      disabled={allowanceStat}
                      visible={allowanceStat}
                    >
                      Lock now
                    </button>
                  ) : (
                    <button
                      onClick={() => lockToken()}
                      className="btn btn-lg btn-gradient-purple btn-glow animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="1.1s"
                      style={{
                        marginLeft: "10px",
                      }}
                      disabled={!allowanceStat}
                      visible={!allowanceStat}
                    >
                      Lock
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div
              className="col-md-12 col-lg-6 move-first animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.8s"
            >
              <div className="counter-area text-center">
                <h4
                  className="title animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.5s"
                >
                  Your Locking Info
                </h4>
                <div className="your-info">
                  <Table
                    dataSource={userLockTokens}
                    pagination={{
                      showSizeChanger: false,
                      total: userLockTokens.length,
                      pageSize: 3,
                      position: ["bottomLeft"],
                      itemRender: itemRender,
                    }}
                  >
                    <Column
                      className="text-white bg-transparent"
                      key="tokenAmount"
                      title="Amount"
                      dataIndex="tokenAmount"
                    />
                    <Column
                      className="text-white bg-transparent"
                      key="rewardAmount"
                      title="Reward"
                      dataIndex="rewardAmount"
                    />
                    <Column
                      className="text-white bg-transparent"
                      key="lockTime"
                      title="Start"
                      dataIndex="lockTime"
                      render={(lockTime) => (
                        <>
                          <Tag color={"processing"}>
                            {moment(lockTime * 1000).format("MM/DD/YYYY HH:mm")}
                          </Tag>
                        </>
                      )}
                    />
                    <Column
                      className="text-white bg-transparent"
                      key="unlockTime"
                      title="End"
                      dataIndex="unlockTime"
                      render={(unlockTime) => (
                        <>
                          <Tag color={"processing"}>
                            {moment(unlockTime * 1000).format(
                              "MM/DD/YYYY HH:mm"
                            )}
                          </Tag>
                        </>
                      )}
                    />
                    <Column
                      className="text-white bg-transparent"
                      key="btn"
                      dataIndex="withdraw"
                      render={(withdraw) => (
                        <>
                          <Button
                            size="small"
                            className="btn btn-sm btn-gradient-purple btn-glow my-2 my-sm-0 animated"
                            data-animation="fadeInUpShorter"
                            data-animation-delay="1.1s"
                            disabled={!withdraw}
                          >
                            Withdraw
                          </Button>
                        </>
                      )}
                    />
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="lock" className="lock section-padding">
        <div className="container">
          <div className="heading text-center">
            <div
              className="animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.3s"
            >
              <h6 className="sub-title">CSD Lock Info</h6>
              <h2 className="title">Information</h2>
            </div>
            <p
              className="content-desc animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.4s"
            >
              The below is the total information of CSD Token Locker.
            </p>
            <p
              className="animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.8s"
            >
              Total CSD Locked is {totalLockAmount}.
            </p>
          </div>
          <div className="row">
            <div className="col-xl-12 col-md-12 mx-12">
              <div className="your-info">
                <Table
                  className="table-responsive bg-transparent"
                  dataSource={tokenLocksResults}
                  pagination={{
                    showSizeChanger: false,
                    total: tokenLocksResults.length,
                    pageSize: 10,
                    position: ["bottomLeft"],
                    itemRender: itemRender,
                  }}
                >
                  <Column
                    key="owner"
                    title="Owner"
                    dataIndex="owner"
                    className="bg-transparent text-white"
                  />
                  <Column
                    key="tokenAmount"
                    title="CSD locked"
                    dataIndex="tokenAmount"
                    className="bg-transparent text-white"
                  />
                  <Column
                    key="rewardAmount"
                    title="Interest to current day"
                    dataIndex="rewardAmount"
                    className="bg-transparent text-white"
                  />
                  <Column
                    key="lockTime"
                    title="Locked in date"
                    dataIndex="lockTime"
                    className="bg-transparent text-white"
                    render={(lockTime) => (
                      <>
                        <Tag color={"processing"}>
                          {moment(lockTime * 1000).format("MM/DD/YYYY HH:mm")}
                        </Tag>
                      </>
                    )}
                  />
                  <Column
                    key="unlockTime"
                    title="Unlock date"
                    dataIndex="unlockTime"
                    className="bg-transparent text-white"
                    render={(unlockTime) => (
                      <>
                        <Tag color={"processing"}>
                          {moment(unlockTime * 1000).format("MM/DD/YYYY HH:mm")}
                        </Tag>
                      </>
                    )}
                  />
                  <Column
                    key="withdraw"
                    title="Can Withdraw"
                    className="bg-transparent text-white"
                    render={(withdraw) => (
                      <>
                        <Tag color={"success"} visible={!withdraw}>
                          yes
                        </Tag>
                        <Tag color={"error"} visible={withdraw}>
                          no
                        </Tag>
                      </>
                    )}
                  />
                </Table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TokenLockComponent;
