import React, { useState, useEffect, useContext } from "react";
import { Modal, Slider, Spin, Input } from "antd";
import Particles from "react-particles-js";
import { useEthers } from "@usedapp/core";
import useRefresh from "../../hooks/useRefresh";
import useCryptoScamDefenceFinance from "../../hooks/useCsdFinance";
import useAddToken from "../../hooks/useAddToken";
import "./style.css";
import { exists } from "fs";

const marks = {
  0: "0%",
  250000000: "25%",
  500000000: "50%",
  750000000: "75%",
  1000000000: {
    style: {
      color: "#f50",
    },
    label: <strong>100%</strong>,
  },
};

export default () => {
  const { slowRefresh, fastRefresh } = useRefresh();
  const { account } = useEthers();
  const cryptoScamDefenseFinance = useCryptoScamDefenceFinance();
  const [csdTokenAddress, setCsdTokenAddress] = useState("");
  const [csdCrowdSaleAddress, setCsdCrowdSaleAddress] = useState("");
  useEffect(() => {
    if (cryptoScamDefenseFinance) {
      const { CSD, CSDCrowdsale } = cryptoScamDefenseFinance.contracts;
      setCsdTokenAddress(CSD.address);
      setCsdCrowdSaleAddress(CSDCrowdsale.address);
    }
  }, [cryptoScamDefenseFinance]);
  const { onHandleAddToken } = useAddToken();
  const [rate, setRate] = useState(0);
  const [sellAmount, SetSellAmount] = useState(0);
  const [totalAmount, SetTotalAmount] = useState(0);
  const [maxAmountToBuyPerTransaction, SetMaxAmountToBuyPerTransaction] =
    useState(0);
  const [maxAmountToSell, SetMaxAmountToSell] = useState(0);
  const [ModalVisible, SetModalVisible] = useState(false);
  const [Inputval, SetInputval] = useState(0);
  const [sellPercent, setSellPercent] = useState(0);
  const [csdPrice, setCsdPrice] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [confirmation, setConfirmation] = useState(false);

  const [occurError, setOccurError] = useState(false);
  const [errorContent, setErrorContent] = useState("");

  useEffect(() => {
    if (cryptoScamDefenseFinance) {
      cryptoScamDefenseFinance.getCsdPrice().then((price) => {
        setCsdPrice(price);
      });
      cryptoScamDefenseFinance.getCsdStat().then((stat) => {
        SetSellAmount(stat.sellAmount);
        SetMaxAmountToBuyPerTransaction(stat.maxAmountToBuyPerTransaction);
        SetMaxAmountToSell(stat.maxAmountToSell);
        SetTotalAmount(stat.totalAmount);
        setSellPercent(stat.sellPercent);
      });
    }
  }, [cryptoScamDefenseFinance]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "theme-assets/js/swiperloader.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const BuyCSD = () => {
    if (cryptoScamDefenseFinance && account) {
      if (cryptoScamDefenseFinance.myAccount) {
        let buyAmount = Inputval;
        if (!buyAmount) {
          buyAmount = 1;
        }
        setConfirmation(true);
        setIsPending(true);
        cryptoScamDefenseFinance
          .buyCSD(buyAmount)
          .then((res) => {
            setConfirmation(false);
            setConfirmation(false);
            setIsPending(false);
            SetModalVisible(false);
          })
          .catch((err) => {
            setErrorContent(err.message);
            setOccurError(true);
            setIsPending(false);
            setConfirmation(false);
          });
      } else {
        setOccurError(true);
        setErrorContent("pls connect to wallet!");
        setIsPending(false);
        setConfirmation(false);
      }
    } else {
      setOccurError(true);
      setErrorContent("pls connect to wallet!");
      setIsPending(false);
      setConfirmation(false);
    }
  };

  const handleCancel = () => {
    SetModalVisible(false);
    setOccurError(false);
    setErrorContent("");
    SetInputval(0);
    setIsPending(false);
    setConfirmation(false);
  };

  const handleChange = (value) => {
    if (typeof value == "object") {
      if (value.target.value == null) {
        SetInputval(0);
      } else {
        SetInputval(value.target.value);
      }
    } else {
      SetInputval(value);
    }
  };

  const showModal = () => {
    SetModalVisible(true);
  };

  const csdRemaining = () => {
    let result = totalAmount - sellAmount;
    return result;
  };

  const buyAmountUSD = () => {
    let result = Inputval * csdPrice;
    return Number((result).toFixed(2))
  }

  return (
    <main>
      {/* Header: 3D Animation */}
      <section className="head-area" id="head-area">
        <Particles
          params={{
            particles: {
              number: {
                value: 60,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: "#567bc1",
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#000000",
                },
                polygon: {
                  nb_sides: 5,
                },
                image: {
                  src: "img/github.svg",
                  width: 100,
                  height: 100,
                },
              },
              opacity: {
                value: 0.3,
                random: false,
                anim: {
                  enable: false,
                  speed: 0.5,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 4,
                random: true,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false,
                },
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#567bc1",
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 3,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: false,
                  mode: "repulse",
                },
                onclick: {
                  enable: false,
                  mode: "push",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3,
                },
                repulse: {
                  distance: 200,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
            config_demo: {
              hide_card: false,
            },
          }}
        />
        <div className="head-content d-flex align-items-center">
          <div className="container">
            <div className="banner-wrapper">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="banner-content pt-5">
                    <h1
                      className="best-template animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="1.5s"
                    >
                      Crypto Scam Defence <br /> is the next stage of DeFi’s
                      evolution <br className="d-none d-xl-block" />
                      with minimized risk of being scammed and one step closer{" "}
                      <br className="d-none d-xl-block" />
                      to money revolution
                    </h1>
                    <h3
                      className="d-block white animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="1.6s"
                    >
                      First decentralized solution to protect investors.
                    </h3>
                    <div className="mt-5">
                      {/*<a href="#token-sale-mobile-app" className="btn btn-lg btn-gradient-purple btn-glow mr-4 mb-2 animated" data-animation="fadeInUpShorter" data-animation-delay="1.7s">Buy CSD</a>*/}
                      <a
                        href="#whitepaper"
                        className="btn btn-lg btn-gradient-purple btn-glow mb-2 animated"
                        data-animation="fadeInUpShorter"
                        data-animation-delay="1.8s"
                      >
                        Whitepaper
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 move-first">
                  <div className="crypto-video animated" data-animation="fadeInUpShorter" data-animation-delay="1.7s">

                    <div className="mt-5">
                      <img src="theme-assets/images/csd-landing.png" className="video-img img-fluid" alt="CSD"></img>
                      <div className="play-video text-center">
                        <a
                            href="#"
                            className="play btn btn-lg btn-gradient-purple btn-glow animated fadeInUpShorter video-btn"
                            data-toggle="modal"
                            data-src="https://www.youtube.com/embed/NyDREZUlNvQ"
                            data-target="#ico-modal"
                        >
                          <i className="ti-control-play "> </i>
                          Our mission starts here!
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*/ Header: 3D Animation */}
      {/* About */}
      <section className="about section-padding" id="about">
        <div className="container">
          <div className="heading text-center">
            <div
              className="animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.3s"
            >
              <h6 className="sub-title">About</h6>
              <h2 className="title">What is Crypto Scam Defence ?</h2>
            </div>
            <p
              className="content-desc animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.4s"
            >
              DeFi revolution comes also with fraudulent projects and scams with
              millions of ether (ETH) having already been stolen &nbsp;
              <br className="d-none d-xl-block" />
              via elaborate schemas known as “rugs” (as in, “pulling the rug
              out” from under investors)
            </p>
          </div>
          <div className="content-area">
            <div className="row">
              <div className="col-md-12 col-lg-6">
                <h4
                  className="title animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.5s"
                >
                  We built a platform for <br className="d-none d-xl-block" />{" "}
                  decentralized finance industry
                </h4>
                <h6
                  className="pt-4 pb-2 animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.6s"
                >
                  to STOP the explosion of DeFi fraudulent projects that has
                  left many individual investors burned.
                </h6>
                <p
                  className="animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.7s"
                >
                  In the current DeFi marketplace, though, managing your
                  portfolio still requires daily diligence, and that can take up
                  a lot of time. This raises the question: Is there a way to
                  benefit from DeFi without giving away all your time, and
                  potentially all your money, too?
                </p>
                <p
                  className="animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.8s"
                >
                  DeFi may be difficult, but making money from it doesn’t have
                  to be. By aggregating various technologies we make it
                  possible!
                </p>

              </div>

              <div
                className="col-md-12 col-lg-6 animated"
                data-animation="fadeInUpShorter"
                data-animation-delay="0.7s"
              >
                <div className="position-relative what-is-crypto-img float-xl-right">
                  <img
                    className="img-fluid"
                    src="theme-assets/images/svg/svg-animation/what-is-csd.svg"
                    alt="What is Crypto?"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*/ About */}
      {/* Problems & Solutions */}
      <section
        id="problem-solution"
        className="problem-solution section-pro section-padding "
      >
        <div className="container">
          <div className="heading text-center">
            <div
              className="animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.3s"
            >
              <h6 className="sub-title">Solutions</h6>
              <h2 className="title">
                Problems &amp; <strong>Solutions</strong>
              </h2>
            </div>
            <p
              className="content-desc animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.4s"
            >
              The biggest risks that DeFi investors need to worry about is
              loosing all the money &nbsp;
              <br className="d-none d-xl-block" />
              but this isn't the only thing you should be woried about.
            </p>
          </div>
          <div className="problems">
            <div className="row">
              <div className="col-md-12 col-lg-6">
                <div className="heading mb-4">
                  <h4
                    className="title animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.2s"
                  >
                    Problems
                  </h4>
                </div>
                <p
                  className="animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.4s"
                >
                  DeFi rug pulls and exit scams formed 99% of all crypto frauds
                  in 2020. DeFi-related hacks now make up more than 60% of the
                  total hack and theft volume in 2021, a large increase from
                  only 25% in 2020
                </p>
                <p
                  className="animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.6s"
                >
                  Both exit scams and DeFi rug pulls are crypto frauds. Exit
                  scams happen when cryptocurrency promoters disappear with
                  investors' money during or after an initial coin offering
                  (ICO). DeFi rug pulls are a new form of exit scam whereby
                  crypto developers abandon a project and run away with
                  investors' funds.
                </p>
              </div>
              <div className="col-md-12 col-lg-6 text-center">
                <img
                  src="theme-assets/images/svg/svg-animation/market-analisys.svg"
                  className="problems-img animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.5s"
                  alt="problems-graphic"
                />
              </div>
            </div>
          </div>
          <div className="solutions mt-5">
            <div className="row">
              <div className="col-md-12 col-lg-6 text-center">
                <img
                  src="theme-assets/images/svg/svg-animation/user-vault.svg"
                  className="solutions-img animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.5s"
                  alt="problems-graphic"
                />
              </div>
              <div className="col-md-12 col-lg-6 move-first">
                <div className="heading mb-4">
                  <h4
                    className="title animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.2s"
                  >
                    Solutions
                  </h4>
                </div>
                <p
                  className="animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.5s"
                >
                  DeFi is an especially unforgiving space – usually, there
                  aren’t any good ways to recover funds or hold malicious actors
                  accountable. However, if you know what to look for, you may be
                  able to decrease the chances of scammers taking advantage of
                  you.
                </p>
                <p
                  className="animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.7s"
                >
                  Based on our blockchain experts advisors, we have gathered
                  enough information to identify and predict such practices. We
                  started by aggregating data providers to have enough
                  information and based on past projects and their behavior, a
                  set of well defined algorithms and models will give a score to
                  each newly created.
                </p>
                <p
                  className="animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.7s"
                >
                  On top of this automated process we'll continue to add new
                  tools and features to attract experts from everywhere as a
                  part of our ecosystem.
                </p>
                <p
                  className="animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.7s"
                >
                  We aim to build the biggest network of contributors with
                  revenues as an double layer of methodology and validation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*/ Problems & Solutions */}
      {/* Our Coin */}
      <section id="our-coin" className="our-coin section-padding ">
        <div className="container">
          <div className="heading text-center">
            <div
              className="animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.3s"
            >
              <h6 className="sub-title">About coin</h6>
              <h2 className="title">Our Token Utility</h2>
            </div>
            <p
              className="content-desc animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.4s"
            >
              CSD (Crypto Scam Defence) Token can be used as a safeguard for
              your investments
              <br className="d-none d-xl-block" />
              Use it on our platform for scam detection and analysis of any
              crypto exists.{" "}
            </p>
          </div>
          <div className="row">
            <div
              className="col-lg-5 col-md-12 animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.6s"
            >
              <div className="coin-img">
                <img
                  className="img-fluid"
                  src="theme-assets/images/svg/svg-animation/how-it-works.svg"
                  alt="Coin Image"
                />
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="heading mb-4">
                <h4
                  className="title animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.5s"
                >
                  Our mission starts here!
                </h4>
              </div>
              <p
                className="animated"
                data-animation="fadeInUpShorter"
                data-animation-delay="0.6s"
              >
                Our highly motivated professional team found ways that make
                things work differently. Aggregating various technologies we can
                scan, compare with past behaviours, track down each transaction
                made on any network
              </p>
              <p
                className="animated"
                data-animation="fadeInUpShorter"
                data-animation-delay="0.7s"
              >
                Analyzing the movement of funds we scraped and linked over 2.7
                million transactions across different blockchains and we found
                over 100 000 cases of shifts and come back to original owner
              </p>
              <p
                className="animated"
                data-animation="fadeInUpShorter"
                data-animation-delay="0.7s"
              >
                We collected and analysed transaction data across eight
                different blockchains to identify how users interacted and we
                developed new heuristics and identified various patterns of
                cross-currency trades.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*/ Our Coin */}
      {/* Token Stats */}
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
              <h6 className="sub-title">Token Stats</h6>
              <h2 className="title">Token Distribution & Economics</h2>
            </div>
            <p
              className="content-desc animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.4s"
            >
              Learning from the history of tokens we know how to set the
              distribution and the economics right from the start.
              <br className="d-none d-xl-block" />
              The best token projects focus on token utility to build network
              effects. We provide a way to grow the network and get many people
              on board with our mission.{" "}
            </p>
          </div>
          <div className="row">
            <div className="col-md-12 col-lg-6 pr-5">
              <div className="content-area">
                <h4
                  className="title animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.5s"
                >
                  Rule #1: Business Modeling First, Fundraising Second
                </h4>
                <p
                  className="mt-1 animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.6s"
                >
                  WHO, WHAT and HOW
                  <br />
                  We know who is our audience, what problems they have and how
                  to solve them. Our business model is focused to help many
                  people all over the globe, improve and develop better
                  strategies for the future.
                </p>
                <h4
                  className="title animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.5s"
                >
                  Rule #2: Maximize Tokens for community contributors & Users
                </h4>
                <p
                  className="animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.7s"
                >
                  A holder of tokens that contributes to the network is more
                  valuable than a holder of tokens that does not contribute to
                  the network
                </p>
                <p
                  className="animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.8s"
                >
                  <span>Symbol:</span>{" "}
                  <strong className="grey-accent2">CSD</strong>
                </p>
                <p
                  className="animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.9s"
                >
                  <span>Initial Value:</span>{" "}
                  <strong className="grey-accent2">1 CSD = $0.0000008</strong>
                </p>
                <p
                  className="animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="1.0s"
                >
                  <span>Type:</span>{" "}
                  <strong className="grey-accent2">ERC20 & BEP 20</strong>
                </p>
                <p
                  className="animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="1.0s"
                >
                  <span>CSD BSC Contract:</span>{" "}
                  <strong className="grey-accent2">
                    {" "}
                    <a
                        className="white"
                        href={`https://bscscan.com/token/0x67349b4017d55a22b1b666ed696d34fd2edf0c00`}
                        target="_blank"
                    >
                      {'0x67349b4017d55a22b1b666ed696d34fd2edf0c00'}
                    </a>{" "}
                    <p className="text-info small"> ( BSC Contract remains untouched until further announces )</p>
                  </strong>
                  <p></p>

                  <span>CSD ETH Contract:</span>{" "}
                  <strong className="grey-accent2">
                    {" "}
                    <a
                      className="white"
                      href={`https://etherscan.io/token/${csdTokenAddress}`}
                      target="_blank"
                    >
                      {csdTokenAddress}
                    </a>{" "}
                  </strong>
                </p>
                <p
                  className="animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="1.0s"
                >
                  <span>CSD ITO ETH Contract:</span>{" "}
                  <strong className="grey-accent2">
                    <a
                      className="white"
                      href={`https://etherscan.io/address/${csdCrowdSaleAddress}`}
                      target="_blank"
                    >
                      {csdCrowdSaleAddress}
                    </a>
                  </strong>
                </p>
                <p
                    className="animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="1.0s"
                >
                  <span>CSD LOCKER Contract:</span>{" "}
                  <strong className="grey-accent2">
                    <a
                        className="white"
                        href={`https://etherscan.io/address/0x2bFc7137e1c9604fea268F83F42a5B7CeB815b83`}
                        target="_blank"
                    >
                      {csdCrowdSaleAddress}
                    </a>
                  </strong>
                </p>
              </div>
            </div>
            <div
              className="col-md-12 col-lg-6 move-first animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.8s"
            >
              <div className="counter-area">
                <div className="counter-content">
                  <div className="banner-wrapper">
                    <div className="banner-content">
                      <div className="play-video text-center">
                        <a
                          href="#"
                          className="play video-btn text-white"
                          data-toggle="modal"
                          data-src="https://www.youtube.com/embed/NyDREZUlNvQ"
                          data-target="#ico-modal"
                        >
                          <span className="btn ant-btn-text text-white mb-2 animated">
                            <i className="ti-control-play"></i> How to buy
                            video!
                          </span>
                        </a>
                      </div>
                      <h3>CSD Tokens presale public offer</h3>

                      <div className="row">
                        <div className="col-lg-9 col-md-12 mr-auto">
                          <div className="loading-bar my-3 position-relative">
                            <div className="progres-area py-5">
                              <ul className="progress-top">
                                <li className="pre-sale">0%</li>
                                <li>25%</li>
                                <li>50%</li>
                                <li>75%</li>
                                <li className="bonus">100%</li>
                              </ul>
                              <ul className="progress-bars">
                                <li>|</li>
                                <li>|</li>
                                <li>|</li>
                                <li>|</li>
                                <li>|</li>
                              </ul>
                              <div className="progress">
                                <div
                                  className="progress-bar progress-bar-custom"
                                  role="progressbar"
                                  aria-valuenow="100"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                  style={{
                                    width:
                                      (Number(sellPercent) + 2.81).toFixed(2) +
                                      "%",
                                  }}
                                ></div>
                              </div>
                              <div className="progress-bottom">
                                <div className="progress-info">
                                  {(Number(sellPercent) + 2.81).toFixed(2)}%
                                  sold
                                </div>
                                <div className="progress-info">
                                  1 CSD = ${csdPrice}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="clock-counter">
                        <div className="message"></div>
                      </div>

                      <div className="purchase-token-btn">
                        <a
                          href="#counter-area"
                          className="btn btn-lg btn-gradient-purple btn-glow mb-2 animated"
                          style={{ animationDelay: "0s", opacity: 1 }}
                          onClick={showModal}
                        >
                          Buy CSD
                        </a>
                        <button
                          onClick={() => onHandleAddToken()}
                          className="btn ant-btn-text text-white mb-2 animated"
                          style={{ animationDelay: "0s", opacity: 1 }}
                        >
                          Add to metamask{" "}
                        </button>
                      </div>

                      <div className="token-img">
                        <img
                          className="img-fluid"
                          src="theme-assets/images/ico-chart.png"
                          alt="token-distribution"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*/ Token Stats */}
      {/* Pre-Sale & Mobile Apps */}
      {/* <section
        className="counter-area content"
        id="counter-area"
        data-midnight="white"
      >
        <div className="bg-banner"></div>
        <div className="counter-content container-fluid d-flex align-items-center">
          <div className="container">
            <div className="banner-wrapper">
              <div className="row align-items-center">
                <div className="col-lg-8 col-md-12">
                  
                </div>
                <div className="col-lg-4 col-md-12 move-first">
                  <div className="logo-wrapper align-items-center">
                    <div className="crypto-logo">
                      <div id="ripple"></div>
                      <div id="ripple2"></div>
                      <div id="ripple3"></div>
                    </div>
                    <img
                        src="./theme-assets/images/header-logo-csd.png"
                        className="crypto-logo-img rounded mx-auto pulse2"
                        alt="CSD"
                      />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}
      {/*/ Pre-Sale & Mobile Apps */}
      {/* Exchange Listing Area */}
      <section className="exchange-listing" id="exchange-listing">
        <div className="container-fluid bg-color">
          <div className="container">
            <div className="row listing list-unstyled">
              <div
                className="col d-none d-lg-block text-center animated"
                data-animation="fadeInUpShorter"
                data-animation-delay="0.2s"
              >
                <img
                  src="theme-assets/images/icon-arrow.png"
                  alt="icon-arrow"
                />
                <p className="mt-1">
                  Exchange listing
                  <br />
                  announces
                </p>
              </div>
              <div
                className="col text-center animated"
                data-animation="fadeInUpShorter"
                data-animation-delay="0.3s"
              >
                <h2></h2>
                <a href={"https://dex-trade.com/"}>
                <img src="https://dex-trade.com/_nuxt/img/6f17534.svg" alt="dex-trade" />
                </a>
              </div>
              <div
                className="col text-center animated"
                data-animation="fadeInUpShorter"
                data-animation-delay="0.4s"
              >
                <h2></h2>
                <a href={"https://coinsbit.io/"}>
                <img src="theme-assets/images/svg/consbit.svg" alt="coinsbit"/>
                </a>
              </div>
              <div
                className="col text-center animated"
                data-animation="fadeInUpShorter"
                data-animation-delay="0.5s"
              >
                <h2></h2>
                <a href={"https://alterdice.com/"}>
                <img
                  src="theme-assets/images/svg/alterdice.svg"
                  alt="alterdice"
                />
                </a>
              </div>
              <div
                className="col text-center animated"
                data-animation="fadeInUpShorter"
                data-animation-delay="0.6s"
              >
                <h2></h2>
                <a href={"https://app.uniswap.org/#/swap"}>
                <img
                    src="theme-assets/images/svg/uniswap.svg"
                  alt="uniswap"
                />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*/ Exchange Listing Area */}
      {/* Whitepaper */}
      <section id="whitepaper" className="whitepaper section-padding">
        <div className="container">
          <div className="heading text-center">
            <h6 className="sub-title">Crypto Scam Defence</h6>
            <h2 className="title">Whitepaper</h2>
            <p
              className="content-desc animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.4s"
            >
              Starting with “why” means that before getting into the details of
              “what” should be done and “how” it should be done.
              <br className="d-none d-xl-block" />
              What is the higher-order purpose of our work? What are we trying
              to achieve? What is our vision for the future?
            </p>
          </div>
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <div className="whitepaper-img">
                <img
                  className="img-fluid animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.6s"
                  src="theme-assets/images/whitepaper.png"
                  alt="whitepaper"
                />
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="content-area">
                <h4
                  className="title animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.5s"
                >
                  Read Whitepaper
                </h4>
                <p
                  className="animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.6s"
                >
                  The purpose of this document is to make you understand the
                  problem we are facing now with the growing popularity of the
                  crypto markets
                </p>
                <p
                  className="animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.7s"
                >
                  Cryptocurrencies and blockchain are a monstrosus topic and the
                  applications of blockchain technologies came with a total lack
                  of regulations in order to prevent illegal activities.
                </p>
                <p
                  className="animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.8s"
                >
                  Since the legal context is missing in Decentralized Finance
                  built on top of blockchain technology, we are forced to be
                  witnesses of DeFi rising scams.
                </p>
                <p
                  className="animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.8s"
                >
                  DeFi rug pulls and exit scams formed 99% of all crypto frauds
                  in 2020. DeFi-related hacks now make up more than 60% of the
                  total hack and theft volume in 2021, a large increase from
                  only 25% in 2020...
                </p>

                <div className="whitepaper-languages">
                  <div className="row">
                    <div
                      className="col-6 col-md-3 text-center mt-4 animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="0.6s"
                    >
                      <a
                        href="theme-assets/images/whitepaper.pdf"
                        title="English"
                        target="_blank"
                      >
                        <img
                          src="theme-assets/images/flag-1.png"
                          alt="English"
                        />
                        <div className="lang-text">
                          <span className="icon ti-download mr-1"></span>
                          <span className="language">English</span>
                        </div>
                      </a>
                    </div>

                    {/*                            <div className="col-6 col-md-3 text-center mt-4 animated" data-animation="fadeInUpShorter" data-animation-delay="0.7s">*/}
                    {/*                                <a href="#" title="Japanese">*/}
                    {/*                                    <img src="theme-assets/images/flag-2.png" alt="English">*/}
                    {/*                                    <div className="lang-text">*/}
                    {/*                                        <span className="icon ti-download mr-1"></span>*/}
                    {/*                                        <span className="language">Japanese</span>*/}
                    {/*                                    </div>*/}
                    {/*                                </a>*/}
                    {/*                            </div>*/}
                    {/*                            <div className="col-6 col-md-3 text-center mt-4 animated" data-animation="fadeInUpShorter" data-animation-delay="0.8s">*/}
                    {/*                                <a href="#" title="Russian">*/}
                    {/*                                    <img src="theme-assets/images/flag-3.png" alt="English">*/}
                    {/*                                    <div className="lang-text">*/}
                    {/*                                        <span className="icon ti-download mr-1"></span>*/}
                    {/*                                        <span className="language">Russian</span>*/}
                    {/*                                    </div>*/}
                    {/*                                </a>*/}
                    {/*                            </div>*/}
                    {/*                            <div className="col-6 col-md-3 text-center mt-4 animated" data-animation="fadeInUpShorter" data-animation-delay="0.9s">*/}
                    {/*                                <a href="#" title="Chinese">*/}
                    {/*                                    <img src="theme-assets/images/flag-4.png" alt="English">*/}
                    {/*                                    <div className="lang-text">*/}
                    {/*                                        <span className="icon ti-download mr-1"></span>*/}
                    {/*                                        <span className="language">Chinese</span>*/}
                    {/*                                    </div>*/}
                    {/*                                </a>*/}
                    {/*                            </div>*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*/ Whitepaper */}

      {/* Roadmap */}
      <section id="roadmap" className="roadmap section-padding">
        <div className="container">
          <div className="heading text-center">
            <div
              className="animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.3s"
            >
              <h6 className="sub-title">Implementation</h6>
              <h2 className="title">Roadmap</h2>
            </div>
            <p
              className="content-desc animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.4s"
            >
              The journey never ends, this is just the beginning.
              <br className="d-none d-xl-block" />
              Every journey in life starts with a first step, so congratulations
              because you’ve made yours reading this !
            </p>
          </div>
          <div
            className="row animated"
            data-animation="fadeInUpShorter"
            data-animation-delay="0.6s"
          >
            <div className="col-12">
              <div className="roadmap-container">
                <div className="swiper-container">
                  <div className="swiper-wrapper timeline">
                    <div className="swiper-slide">
                      <div className="roadmap-info">
                        <div className="timestamp completed">
                          <span className="date">February 2021</span>
                        </div>
                        <div className="status completed">
                          <span>
                            Founder idea <br />
                            Research & Analyze
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="roadmap-info">
                        <div className="timestamp completed">
                          <span className="date">March 2021</span>
                        </div>
                        <div className="status completed">
                          <span>Proof of Concept</span>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="roadmap-info">
                        <div className="timestamp completed">
                          <span className="date">April 2021</span>
                        </div>
                        <div className="status completed">
                          <span>Onboarding & Strategy</span>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="roadmap-info">
                        <div className="timestamp completed">
                          <span className="date">May 2021</span>
                        </div>
                        <div className="status completed">
                          <span>
                            FE Beta live
                            <br />
                            BE aggregation started: <br />
                            <a className="white" href="https://market.link/">
                              Market link
                            </a>{" "}
                            <br />
                            <a className="white" href="https://chain.link/">
                              Chain link
                            </a>{" "}
                            <br />
                            <a className="white" href="https://etherscan.io/">
                              Etherscan
                            </a>{" "}
                            <br />
                            <a className="white" href="https://bscscan.com/">
                              BscScan
                            </a>{" "}
                            <br />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="roadmap-info">
                        <div className="timestamp completed">
                          <span className="date">June 2021</span>
                        </div>
                        <div className="status active">
                          <span>Product line up with</span>
                          <span>
                            Board of advisers, investors, partners and
                            development team
                          </span>
                          <span className="live">
                            <br />
                            Smart contracts deployed
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="roadmap-info">
                        <div className="timestamp remaining">
                          <span className="date">July 2021</span>
                        </div>
                        <div className="status remaining">
                          <span>
                            CSD FE V1 live
                            <br />
                          </span>
                          <span>Marketing strategies</span>
                          <span>CSD ITO Smart contracts deployed</span>
                          <span>
                            <br />
                            CSD ITO
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="roadmap-info">
                        <div className="timestamp remaining">
                          <span className="date">September 2021</span>
                        </div>
                        <div className="status remaining">
                          <span>
                            ITO Public Offer <br />{" "}
                          </span>
                          <span>
                            BE MVP live <br />{" "}
                          </span>
                          <span>
                            API Beta launch
                            <br />{" "}
                          </span>
                          <span>
                            {" "}
                            <br />{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide active">
                      <div className="roadmap-info">
                        <div className="timestamp remaining">
                          <span className="date">October 2021</span>
                        </div>
                        <div className="status remaining">
                          <span>
                            Exchange <br />{" "}
                            listings<br/>{" "}
                          </span>

                          <span>
                            API V1
                            <br />{" "}
                          </span>
                          <span>
                            {" "}
                            FE/BE/API versions upgrades
                            <br />{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="roadmap-info">
                        <div className="timestamp remaining">
                          <span className="date">November 2021</span>
                        </div>
                        <div className="status remaining">
                          <span>
                            {" "}
                            Open source <br />
                            Contributor software development kit
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="roadmap-info">
                        <div className="timestamp remaining">
                          <span className="date">December 2021</span>
                        </div>
                        <div className="status remaining">
                          <span>
                            Mobile apps for <br />
                            iOS &amp; Android
                            <br />
                          </span>
                          <span>FE/BE/API versions upgrades</span>
                          <span>
                            AI MVP Integration <br />{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="roadmap-info">
                        <div className="timestamp remaining">
                          <span className="date">2022</span>
                        </div>
                        <div className="status remaining">
                          <span>
                            Smart contracts audit services
                            <br />
                          </span>
                          <span>
                            Whitelisting services
                            <br />
                          </span>
                          <span>
                            Verified by CSD Badge
                            <br />
                          </span>
                          <span>
                            Smart contracts deployments for other blockchains
                            <br />
                          </span>
                          <span>More to come...</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-control">
                  <span className="prev-slide"></span>
                  <span className="next-slide"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*/ Roadmap */}

      {/* ICO Video Modal */}

      {/* ICO Buy Modal */}
      <Modal
        title="Buy CSD Tokens"
        centered
        visible={ModalVisible}
        onOk={BuyCSD}
        onCancel={handleCancel}
        cancelButtonProps={confirmation ? { style: { display: "none" } } : {}}
        okButtonProps={confirmation ? { style: { display: "none" } } : {}}
      >
        <Spin spinning={isPending} tip="Loading...">
          {/* {!active && <p>Connect to MetaMask!</p>} */}
          <p>
            For a fair distribution max amount to buy per transaction is{" "}
            <b>1,000,000,000</b> CSD and max amount of CSD per wallet is
            2,000,000,000 from a total of 40,000,000,000
          </p>
          <p>
            CSD remaining <b>{csdRemaining()}</b>
          </p>
          <p className="text-info">
            NOT able to buy CSD? please ensure that your wallet is connected and you have some ETH on it
          </p>
          {/*<p>Max buy per transaction: {maxAmountToBuyPerTransaction} (one billion)</p>*/}
          {/*<p>Max buy per wallet: {maxAmountToSell} (two billions)</p>*/}
          <p>Select amount to buy <strong className="text-white font-large">{buyAmountUSD()} $</strong></p>
          <Input
            value={Inputval ? Inputval : ""}
            onChange={handleChange}
            maxLength={9}
          />
          <br />
          <Slider
            marks={marks}
            included={false}
            onChange={handleChange}
            max={maxAmountToBuyPerTransaction}
            value={Inputval}
          />
          {occurError && <p style={{ color: "#eb84a0" }}>{errorContent}</p>}
        </Spin>
      </Modal>
      <div
        className="modal ico-modal fade"
        id="ico-modal"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <div className="modal-body p-0">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" id="video"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
