import React from "react";

export default () => {
  return (
    <main>
      <section id="faq" className="faq section-padding">
        <div className="container">
          <div className="heading text-center">
            <div
              className="animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.3s"
            >
              <h6 className="sub-title">question</h6>
              <h2 className="title">FAQ</h2>
            </div>
            <p
              className="content-desc animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.4s"
            >
              Find the answer you are looking for..
              <br className="d-none d-xl-block" />
              here is a compilation of questions and answers for Crypto Scam
              Defence.
            </p>
          </div>
          <div className="row">
            <div className="col">
              <nav>
                <div
                  className="nav nav-pills nav-underline mb-5 animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.5s"
                  id="myTab"
                  role="tablist"
                >
                  <a
                    href="#general"
                    className="nav-item nav-link active"
                    id="general-tab"
                    data-toggle="tab"
                    aria-controls="general"
                    aria-selected="true"
                    role="tab"
                  >
                    General
                  </a>
                  <a
                    href="#ico"
                    className="nav-item nav-link"
                    id="ico-tab"
                    data-toggle="tab"
                    aria-controls="ico"
                    aria-selected="false"
                    role="tab"
                  >
                    ITO
                  </a>
                  <a
                    href="#token"
                    className="nav-item nav-link"
                    id="token-tab"
                    data-toggle="tab"
                    aria-controls="token"
                    aria-selected="false"
                    role="tab"
                  >
                    Tokens
                  </a>
                  <a
                    href="#client"
                    className="nav-item nav-link"
                    id="client-tab"
                    data-toggle="tab"
                    aria-controls="client"
                    aria-selected="false"
                    role="tab"
                  >
                    Utility
                  </a>

                </div>
              </nav>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="general"
                  role="tabpanel"
                  aria-labelledby="general-tab"
                >
                  <div
                    id="general-accordion"
                    className="collapse-icon accordion-icon-rotate"
                  >
                    <div
                      className="card animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="0.1s"
                    >
                      <div className="card-header" id="headingOne">
                        <h5 className="mb-0">
                          <a
                            className="btn-link"
                            data-toggle="collapse"
                            data-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            <span className="icon"></span>
                            General questions will be answered here as soon as we start collecting data and feedback
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapseOne"
                        className="collapse show"
                        aria-labelledby="headingOne"
                        data-parent="#general-accordion"
                      >
                        <div className="card-body">

                        </div>
                      </div>
                    </div>
                    <div
                      className="card animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="0.2s"
                    >
                      <div className="card-header" id="headingTwo">
                        <h5 className="mb-0">
                          <a
                            className="btn-link collapsed"
                            data-toggle="collapse"
                            data-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            <span className="icon"></span>
                            When will CSD be listed on exchanges?
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapseTwo"
                        className="collapse"
                        aria-labelledby="headingTwo"
                        data-parent="#general-accordion"
                      >
                        <div className="card-body">
                          We're planning to get CSD listed on our first exchanges in October-November 2021 depending on how our ITO goes Dex-Trade, AlterDice and Coinsbit would be our first partners. <br/>
                          Nevertheless, we'd still add the CSD contract within UniSwap and add some locked liquidity.
                        </div>
                      </div>
                    </div>
                    <div
                      className="card animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="0.3s"
                    >
                      <div className="card-header" id="headingThree">
                        <h5 className="mb-0">
                          <a
                            className="btn-link collapsed"
                            data-toggle="collapse"
                            data-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            <span className="icon"></span>
                            Does CSD use a deflationary Token model?
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapseThree"
                        className="collapse"
                        aria-labelledby="headingThree"
                        data-parent="#general-accordion"
                      >
                        <div className="card-body">
                          The answer is no. There will be no burns nor other token removals schemes for CSD as it is just a utility token with a circular flow of 200000000000 tokens.<br/>
                          To put it simply, when someone transfers CSD, someone else receives the respective tokens. The following person can use the token on our platform for our basic and premium service.<br/>
                          The user is still free to trade the digital asset or convert it to any other crypto in any case.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="ico"
                  role="tabpanel"
                  aria-labelledby="ico-tab"
                >
                  <div
                    id="ico-accordion"
                    className="collapse-icon accordion-icon-rotate"
                  >
                    <div className="card">
                      <div className="card-header" id="icoHeadingOne">
                        <h5 className="mb-0">
                          <a
                            className="btn-link"
                            data-toggle="collapse"
                            data-target="#icoCollapseOne"
                            aria-expanded="true"
                            aria-controls="icoCollapseOne"
                          >
                            <span className="icon"></span>
                            CSD ITO Public Offer
                          </a>
                        </h5>
                      </div>
                      <div
                        id="icoCollapseOne"
                        className="collapse show"
                        aria-labelledby="icoHeadingOne"
                        data-parent="#ico-accordion"
                      >
                        <div className="card-body">
                          20% (40 billions) of total amount of CSD
                          divided into blocks of 4 billions with 4% progressive increase of price after each
                          block sold <br/>
                          The fairly distribution formula includes the following restrictions:<br/>
                          - Max amount to buy per transaction 1 billion CSD Tokens<br/>
                          - Max amount of CSD Tokens per wallet address is 2 billions CSD Tokens
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="icoHeadingTwo">
                        <h5 className="mb-0">
                          <a
                            className="btn-link collapsed"
                            data-toggle="collapse"
                            data-target="#icoCollapseTwo"
                            aria-expanded="false"
                            aria-controls="icoCollapseTwo"
                          >
                            <span className="icon"></span>
                            When ITO starts?
                          </a>
                        </h5>
                      </div>
                      <div
                        id="icoCollapseTwo"
                        className="collapse"
                        aria-labelledby="icoHeadingTwo"
                        data-parent="#ico-accordion"
                      >
                        <div className="card-body">
                          After 20th July 2021
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="icoHeadingThree">
                        <h5 className="mb-0">
                          <a
                            className="btn-link collapsed"
                            data-toggle="collapse"
                            data-target="#icoCollapseThree"
                            aria-expanded="false"
                            aria-controls="icoCollapseThree"
                          >
                            <span className="icon"></span>
                            When CSD ITO ends?
                          </a>
                        </h5>
                      </div>
                      <div
                        id="icoCollapseThree"
                        className="collapse"
                        aria-labelledby="icoHeadingThree"
                        data-parent="#ico-accordion"
                      >
                        <div className="card-body">
                          Ideally as soon as the reserved amount has been filled up. Our public offer can be terminated suspended due to the following factors: <br/>
                          Any code cycle execution problems to third parties. <br/>
                          Any agreement with exchanges for listing. <br/>
                          Unsold CSD Tokens will be added to exchanges.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="token"
                  role="tabpanel"
                  aria-labelledby="token-tab"
                >
                  <div
                    id="token-accordion"
                    className="collapse-icon accordion-icon-rotate"
                  >
                    <div className="card">
                      <div className="card-header" id="tokenHeadingOne">
                        <h5 className="mb-0">
                          <a
                            className="btn-link"
                            data-toggle="collapse"
                            data-target="#tokenCollapseOne"
                            aria-expanded="true"
                            aria-controls="tokenCollapseOne"
                          >
                            <span className="icon"></span>
                            CSD Tokens
                          </a>
                        </h5>
                      </div>
                      <div
                        id="tokenCollapseOne"
                        className="collapse show"
                        aria-labelledby="tokenHeadingOne"
                        data-parent="#token-accordion"
                      >
                        <div className="card-body">
                          We deployed already two smart contracts in Ethereum
                          blockchain and Binance Blockchain with the mention that we aim to deploy on
                          more blockchains with the time.<br/>
                          0xba2f318b98218fb7727261defa99017c265bdaef ETH<br/>
                          0x67349b4017d55a22b1b666ed696d34fd2edf0c00 BNB<br/>
                          With a total supply of 200 billions on each blockchain with bridge for swap. <br/>
                          In simple terms, CSD token is a
                          blockchain-based asset that people buy for gaining access to
                          cryptoscamdefence.com users dashboard to use features that helps them get
                          instant reports and analytics for other cryptos.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="tokenHeadingTwo">
                        <h5 className="mb-0">
                          <a
                            className="btn-link collapsed"
                            data-toggle="collapse"
                            data-target="#tokenCollapseTwo"
                            aria-expanded="false"
                            aria-controls="tokenCollapseTwo"
                          >
                            <span className="icon"></span>
                            How much tokens do i need to access dashboard features?
                          </a>
                        </h5>
                      </div>
                      <div
                        id="tokenCollapseTwo"
                        className="collapse"
                        aria-labelledby="tokenHeadingTwo"
                        data-parent="#token-accordion"
                      >
                        <div className="card-body">
                          Since we are in the process of building a community, at this point we cannot predict the value.<br/>
                          CSD Economics has a fair distribution and circular flow which assures everyone to get them.<br/>
                          Most of our services will be accessible to everyone just by holding a specific amount of CSD
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="tokenHeadingThree">
                        <h5 className="mb-0">
                          <a
                            className="btn-link collapsed"
                            data-toggle="collapse"
                            data-target="#tokenCollapseThree"
                            aria-expanded="false"
                            aria-controls="tokenCollapseThree"
                          >
                            <span className="icon"></span>
                            Can i use CSD for premium features?
                          </a>
                        </h5>
                      </div>
                      <div
                        id="tokenCollapseThree"
                        className="collapse"
                        aria-labelledby="tokenHeadingThree"
                        data-parent="#token-accordion"
                      >
                        <div className="card-body">
                          Yes there will be also premium features with operational costs like custom monitoring tasks with instant notifications.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="client"
                  role="tabpanel"
                  aria-labelledby="client-tab"
                >
                  <div
                    id="client-accordion"
                    className="collapse-icon accordion-icon-rotate"
                  >
                    <div className="card">
                      <div className="card-header" id="clientHeadingOne">
                        <h5 className="mb-0">
                          <a
                            className="btn-link"
                            data-toggle="collapse"
                            data-target="#clientCollapseOne"
                            aria-expanded="true"
                            aria-controls="clientCollapseOne"
                          >
                            <span className="icon"></span>
                            CSD utility use Cases
                          </a>
                        </h5>
                      </div>
                      <div
                        id="clientCollapseOne"
                        className="collapse show"
                        aria-labelledby="clientHeadingOne"
                        data-parent="#client-accordion"
                      >
                        <div className="card-body">
                          Simplified trading<br/>
                          Automatic scoring mechanism<br/>
                          Rug pull and scam detection<br/>
                          Smart contracts monitoring<br/>
                          Address monitor<br/>
                          Transactions trackdown<br/>
                          Blockchain shift detection<br/>
                          Behaviour comparison<br/>
                          User defined instant notifications<br/>
                          Smart contracts whitelisting/blacklisting<br/>
                          More features to come
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="clientHeadingTwo">
                        <h5 className="mb-0">
                          <a
                            className="btn-link collapsed"
                            data-toggle="collapse"
                            data-target="#clientCollapseTwo"
                            aria-expanded="false"
                            aria-controls="clientCollapseTwo"
                          >
                            <span className="icon"></span>
                            Operational and development costs
                          </a>
                        </h5>
                      </div>
                      <div
                        id="clientCollapseTwo"
                        className="collapse"
                        aria-labelledby="clientHeadingTwo"
                        data-parent="#client-accordion"
                      >
                        <div className="card-body">
                          Covered incrementally by founder budget
                          and investors capital.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="clientHeadingThree">
                        <h5 className="mb-0">
                          <a
                            className="btn-link collapsed"
                            data-toggle="collapse"
                            data-target="#clientCollapseThree"
                            aria-expanded="false"
                            aria-controls="clientCollapseThree"
                          >
                            <span className="icon"></span>
                            Is CSD sustainable and stable ecosystem?
                          </a>
                        </h5>
                      </div>
                      <div
                        id="clientCollapseThree"
                        className="collapse"
                        aria-labelledby="clientHeadingThree"
                        data-parent="#client-accordion"
                      >
                        <div className="card-body">
                          Fair distribution brings a new model
                          of economics with restricted amounts per transactions in CSD Initial public offering
                          maximizing distribution for the community with business modeling and development
                          prior to capital oriented strategies.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="legal"
                  role="tabpanel"
                  aria-labelledby="legal-tab"
                >
                  <div
                    id="legal-accordion"
                    className="collapse-icon accordion-icon-rotate"
                  >



                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
