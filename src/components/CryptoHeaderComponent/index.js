/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactGA from "react-ga";
import { useEthers } from "@usedapp/core";
import { Modal } from "antd";
import WalletProviderModal from "../WalletProviderModal";
import "./style.css";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import Web3 from "web3";
ReactGA.initialize("G-GS57DV480Q");
ReactGA.pageview(window.location.pathname + window.location.search);
const ContractABI = require("../../csd-finance/deployments/deployments.mainnet.json");
export default () => {
  const { account, deactivate } = useEthers();
  const [isWalletProviderOpen, setWalletProviderOpen] = useState(false);
  const [isDisconnectModalOpen, setDisconnectModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [token, setToken] = useState();
  const handleDisconnectModalOpen = () => {
    setDisconnectModalOpen(true);
  };
  //
  const handleDisconnectModalClose = () => {
    setDisconnectModalOpen(false);
  };

  const onDisconnectOk = () => {
    deactivate();
    handleDisconnectModalClose();
  };

  const onDisconnectCancel = () => {
    handleDisconnectModalClose();
  };

  const handleWalletProviderOpen = () => {
    setWalletProviderOpen(true);
  };

  const handleWalletProviderClose = () => {
    setWalletProviderOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    if (account) {
      window.web3 = new Web3(window.ethereum);
      const CSDContract = new window.web3.eth.Contract(
        ContractABI.CSD.abi,
        ContractABI.CSD.address
      );
      CSDContract.methods
        .balanceOf(account)
        .call()
        .then(async (balance) => {
          try {
            let response = await fetch(
              "https://api.cryptoscamdefence.com/login",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify([account, balance]), // body data type must match "Content-Type" header
              }
            );
            if (response) {
              let res = await response.json();
              if (res) {
                let tokenres = await fetch(res.login_url, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json", // 'Content-Type': 'application/x-www-form-urlencoded',
                  },
                  body: JSON.stringify([
                    account,
                    res.nonce,
                    balance,
                    res.token,
                  ]), // body data type must match "Content-Type" header
                });
                if (tokenres) {
                  let token = await tokenres.json();
                  setToken(token);
                }
              }
            }
          } catch (err) {
            console.log(err);
          }
        });
    }
  }, [account]);

  // const installMetaMask = () => {
  //   window.open("https://metamask.io/download", "_blank");
  // };

  return (
    <>
      <header className="page-header">
        {/* <!-- Horizontal Menu Start--> */}
        <nav className="main-menu static-top navbar-dark navbar navbar-expand-lg fixed-top mb-1">
          <div className="container">
            <Link
              className="navbar-brand animated"
              data-animation="fadeInDown"
              data-animation-delay="1s"
              to={"/"}
            >
              <img
                src="./theme-assets/images/header-logo-csd.png"
                style={{ maxHeight: "35px" }}
                alt="CSD Logo"
              />
              <span className="brand-text" style={{ fontSize: "16px" }}>
                <span className="font-weight-bold">Crypto</span> Scam Defence
              </span>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => toggleMobileMenu()}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={
                mobileMenuOpen
                  ? "collapse navbar-collapse show"
                  : "collapse navbar-collapse"
              }
              id="navbarCollapse"
            >
              <div
                id="navigation"
                className="navbar-nav ml-auto"
                style={{ paddingTop: "3px" }}
              >
                <ul className="navbar-nav mt-1">
                  <li
                    className="nav-item animated"
                    data-animation="fadeInDown"
                    data-animation-delay="1.1s"
                  >
                    <a
                      className="nav-link"
                      href="/#about"
                      onClick={() => toggleMobileMenu()}
                    >
                      What is CSD
                    </a>
                  </li>
                  <li
                    className="nav-item animated"
                    data-animation="fadeInDown"
                    data-animation-delay="1.2s"
                  >
                    <a
                      className="nav-link"
                      href="/#problem-solution"
                      onClick={() => toggleMobileMenu()}
                    >
                      Solutions
                    </a>
                  </li>
                  <li
                    className="nav-item animated"
                    data-animation="fadeInDown"
                    data-animation-delay="1.3s"
                  >
                    <a
                      className="nav-link"
                      href="/#whitepaper"
                      onClick={() => toggleMobileMenu()}
                    >
                      Whitepaper
                    </a>
                  </li>
                  <li
                    className="nav-item animated"
                    data-animation="fadeInDown"
                    data-animation-delay="1.4s"
                  >
                    <a
                      className="nav-link"
                      href="/#token-distribution"
                      onClick={() => toggleMobileMenu()}
                    >
                      Token Sale
                    </a>
                  </li>
                  <li
                    className="nav-item animated"
                    data-animation="fadeInDown"
                    data-animation-delay="1.5s"
                  >
                    <a
                      className="nav-link"
                      href="/#roadmap"
                      onClick={() => toggleMobileMenu()}
                    >
                      Roadmap
                    </a>
                  </li>
                  <li
                    className="dropdown show mr-2 px-2 animated"
                    data-animation="fadeInDown"
                    data-animation-delay="1.6s"
                  >
                    <Link
                      className="dropdown-toggle white"
                      to="/#"
                      role="button"
                      id="more"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      More
                    </Link>
                    <div className="dropdown-menu" aria-labelledby="more">
                      <Link
                        className="dropdown-item"
                        to="/lock"
                        onClick={() => toggleMobileMenu()}
                      >
                        CSD Lock
                      </Link>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={() => toggleMobileMenu()}
                      >
                        News (soon)
                      </Link>
                      <Link
                        className="dropdown-item"
                        to="/team"
                        onClick={() => toggleMobileMenu()}
                      >
                        Team
                      </Link>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={() => toggleMobileMenu()}
                      >
                        Community Voice (soon)
                      </Link>
                      <Link
                        className="dropdown-item"
                        to="/faq"
                        onClick={() => toggleMobileMenu()}
                      >
                        FAQ
                      </Link>
                      <Link
                        className="dropdown-item"
                        to="/contact"
                        onClick={() => toggleMobileMenu()}
                      >
                        Contact
                      </Link>
                    </div>
                  </li>
                </ul>
                <span id="slide-line"></span>
                <form className="form-inline mt-2 mt-md-0">
                  {account ? (
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Link
                        className="btn btn-sm btn-gradient-purple btn-glow my-2 my-sm-0 animated"
                        data-animation="fadeInDown"
                        to="/dashboard"
                      >
                        Dashboard
                      </Link>
                      <a
                        className="btn btn-sm btn-gradient-purple btn-glow my-2 my-sm-0 animated"
                        data-animation="fadeInDown"
                        data-animation-delay="1.8s"
                        onClick={handleDisconnectModalOpen}
                        target="_self"
                        style={{
                          marginLeft: "10px",
                          color: "white",
                          padding: "5px 8px  0px  8px",
                        }}
                      >
                        <PowerSettingsNewIcon />
                      </a>
                    </div>
                  ) : (
                    <a
                      className="btn btn-sm btn-gradient-purple btn-glow my-2 my-sm-0 animated"
                      data-animation="fadeInDown"
                      data-animation-delay="1.8s"
                      onClick={handleWalletProviderOpen}
                      target="_self"
                    >
                      Connect Wallet
                    </a>
                  )}
                </form>
              </div>
            </div>
          </div>
        </nav>
        {/* <!-- /Horizontal Menu End--> */}
      </header>
      <WalletProviderModal
        open={isWalletProviderOpen}
        handleClose={handleWalletProviderClose}
      />
      <Modal
        title="Disconnect"
        visible={isDisconnectModalOpen}
        onOk={onDisconnectOk}
        onCancel={onDisconnectCancel}
        okText="Yes"
        cancelText="No"
      >
        <p>Are you sure to disconnect?</p>
      </Modal>
    </>
  );
};
