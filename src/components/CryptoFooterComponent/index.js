import React from "react";

export default () => {
  return (
    <footer
      className="footer static-bottom footer-dark footer-custom-class"
      data-midnight="white"
    >
      <div className="container">
        <div className="footer-wrapper">
          <div className="row">
            <div className="col-md-4">
              <div className="about">
                <div
                  className="title animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.2s"
                >
                  <img
                    src="theme-assets/images/header-logo-csd.png"
                    style={{ maxHeight: "35px" }}
                    alt="CSD Logo"
                  />
                  <span className="logo-text" style={{ fontSize: "1rem" }}>
                    <span className="font-weight-bold">Crypto</span> Scam
                    Defence
                  </span>
                </div>
                <div
                  className="about-text animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.3s"
                >
                  <p className="grey-accent2">
                    Next stage of DeFi’s evolution with minimized risk of being
                    scammed and one step closer to money revolution.
                  </p>
                </div>
                <ul className="social-buttons list-unstyled mb-5">
                  <li
                    className="animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.4s"
                  >
                    <a
                      href="https://t.me/CryptoScamDefenceEN"
                      title="Telegram"
                      className="btn font-medium"
                    >
                      <i className="fa fa-telegram"></i>
                    </a>
                  </li>
                  <li
                    className="animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.4s"
                  >
                    <a
                      href="https://www.youtube.com/channel/UC9410N83vIbp9Z5IUBIHjlA"
                      title="Youtube"
                      className="btn font-medium"
                    >
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                  <li
                    className="animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.4s"
                  >
                    <a
                      href="https://twitter.com/DefenceScam"
                      title="Youtube"
                      className="btn font-medium"
                    >
                      {" "}
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li
                    className="animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.4s"
                  >
                    <a
                      href="https://www.facebook.com/csdfb"
                      title="Facebook"
                      className="btn font-medium"
                    >
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="links">
                <h5
                  className="title animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.5s"
                >
                  Useful pages
                </h5>
                <ul className="useful-links">
                  <li
                    className="animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="1.0s"
                  >
                    <a href="/team">Our Team</a>
                  </li>
                  <li
                    className="animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="1.0s"
                  >
                    <a href="/news">Read our News</a>
                  </li>
                  <li
                    className="animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="1.0s"
                  >
                    <a href="/faq">Frequently asked questions</a>
                  </li>
                  <li
                    className="animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="1.0s"
                  >
                    <a href="/contact">Contact us</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-4">
              <div className="feed">
                <h5
                  className="title animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.8s"
                >
                  Our Domains
                </h5>
                <ul className="useful-links float-left mr-5">
                  <li
                    className="animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.6s"
                  >
                    <a href="#">cryptoscamdefence.com .net .org</a>
                  </li>
                  <li
                    className="animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.7s"
                  >
                    <a href="#">cryptoscamdefense.org .net .org</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="copy-right mx-auto text-center">
            <span className="copyright">
              Copyright &copy; 2021, Crypto Scam Defence
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
