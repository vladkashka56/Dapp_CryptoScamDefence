import React from "react";

const CryptoTeamComponent = () => {
  return (
    <main>
      {/* Team */}
      <section id="team" className="team section-padding ">
        <div className="container">
          <div className="heading text-center">
            <div
              className="animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.3s"
            >
              <h6 className="sub-title">Motivated</h6>
              <h2 className="title">CSD Team</h2>
            </div>
            <p
              className="content-desc animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.4s"
            />
            <h6 className="text-white">
              Here are some of our most valuable team members
            </h6>
          </div>
          <div className="row team-intro justify-content-center text-center">
            <div
              className="col-12 col-md-4 col-lg-2 team-width animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.5s"
            >
              <span>18+</span>
              <p>
                Creative and
                <br />
                Dedicated People
              </p>
            </div>
            <div
              className="col-12 col-md-4 col-lg-2 team-width animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.6s"
            >
              <span>125+</span>
              <p>Years of combined experience</p>
            </div>
            <div
              className="col-12 col-md-4 col-lg-2 team-width animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.7s"
            >
              <span>10</span>
              <p>Years of blockchain experience</p>
            </div>
          </div>
          <div className="team-profile mt-5">
            <div className="row mb-5">
              <div
                className="col-sm-12 col-md-6 col-lg-4 mb-5 animated"
                data-animation="jello"
                data-animation-delay="0.8s"
              >
                <div className="d-flex team-member">
                  <div
                    className="team-img float-left mr-3"
                    data-toggle="modal"
                    data-target="#teamUser9"
                  >
                    <img
                      src="theme-assets/images/dinu.jpg"
                      alt="team-profile-1"
                      className="rounded-circle"
                      width="128"
                    />
                  </div>
                  <div className="profile align-self-center">
                    <div className="name">Dinu B.</div>
                    <div className="role">CEO &amp; Founder</div>
                    <div className="social-profile mt-3">
                      <a
                        href="https://www.linkedin.com/in/dinu-brie-9624a5158/"
                        title="Linkedin"
                        className="font-medium grey-accent2 mr-2"
                      >
                        <i className="ti-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-sm-12 col-md-6 col-lg-4 mb-5 animated"
                data-animation="jello"
                data-animation-delay="0.9s"
              >
                <div className="d-flex team-member">
                  <div
                    className="team-img float-left mr-3"
                    data-toggle="modal"
                    data-target="#teamUser6"
                  >
                    <img
                      src="theme-assets/images/andrei-small.png"
                      alt="Andrei O"
                      className="rounded-circle"
                      width="128"
                    />
                  </div>
                  <div className="profile align-self-center">
                    <div className="name">Andrei O.</div>
                    <div className="role">CFO</div>
                    <div className="social-profile mt-3">
                      <a
                        href="#"
                        title="Linkedin"
                        className="font-medium grey-accent2 mr-2"
                      >
                        <i className="ti-instagram"></i>
                      </a>
                      {/*                                <a href="#" title="Twitter" className="font-medium grey-accent2 mr-2"><i className="ti-twitter-alt"></i></a>*/}
                      {/*                                <a href="#" title="Github" className="font-medium grey-accent2"><i className="ti-github"></i></a>*/}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-sm-12 col-md-6 col-lg-4 mb-5 animated"
                data-animation="jello"
                data-animation-delay="1.0s"
              >
                <div className="d-flex team-member">
                  <div
                    className="team-img float-left mr-3"
                    data-toggle="modal"
                    data-target="#teamUser2"
                  >
                    <img
                      src="theme-assets/images/fe-team.png"
                      alt="team-profile-1"
                      className="rounded-circle"
                      width="128"
                    />
                  </div>
                  <div className="profile align-self-center">
                    <div className="name">Frontend Team</div>
                    <div className="role">FE Developers</div>
                    <div className="social-profile mt-3">
                      <a
                        href="#"
                        title="Crypto Scam Defence"
                        className="font-medium grey-accent2 mr-2"
                      >
                        <img
                          src="./theme-assets/images/svg/svg-animation/csd-ico-white.svg"
                          alt="csd"
                        />{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-sm-12 col-md-6 col-lg-4 mb-5 animated"
                data-animation="jello"
                data-animation-delay="1.1s"
                data-toggle="modal"
                data-target="#teamUser10"
              >
                <div className="d-flex team-member">
                  <div className="team-img float-left mr-3">
                    <img
                      src="theme-assets/images/kirill.jpg"
                      alt="team-profile-1"
                      className="rounded-circle"
                      width="128"
                    />
                  </div>
                  <div className="profile align-self-center">
                    <div className="name">Kirill S.</div>
                    <div className="role">Blockchain Expert</div>
                    <div className="social-profile mt-3">
                      <a
                        href="#"
                        title="Linkedin"
                        className="font-medium grey-accent2 mr-2"
                      >
                        <i className="ti-linkedin"></i>
                      </a>
                      <a
                        href="#"
                        title="Github"
                        className="font-medium grey-accent2"
                      >
                        <i className="ti-github"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-sm-12 col-md-6 col-lg-4 mb-5 animated"
                data-animation="jello"
                data-animation-delay="1.2s"
                data-toggle="modal"
                data-target="#teamUser4"
              >
                <div className="d-flex team-member">
                  <div className="team-img float-left mr-3">
                    <img
                      src="theme-assets/images/zeynur-small.png"
                      alt="team-profile-1"
                      className="rounded-circle"
                      width="128"
                    />
                  </div>
                  <div className="profile align-self-center">
                    <div className="name">Zeynur K.</div>
                    <div className="role">VFX Motion Graphics</div>
                    <div className="social-profile mt-3">
                      <a
                        href="https://www.instagram.com/drev0_mak/"
                        title="Instagram"
                        className="font-medium grey-accent2 mr-2"
                      >
                        <i className="ti-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-sm-12 col-md-6 col-lg-4 mb-5 animated"
                data-animation="jello"
                data-animation-delay="1.3s"
                data-toggle="modal"
                data-target="#teamUser13"
              >
                <div className="d-flex team-member">
                  <div className="team-img float-left mr-3">
                    <img
                      src="theme-assets/images/backend-team-small.png"
                      alt="team-profile-1"
                      className="rounded-circle"
                      width="128"
                    />
                  </div>
                  <div className="profile align-self-center">
                    <div className="name">Backend Team</div>
                    <div className="role">BE Developers</div>
                    <div className="social-profile mt-3">
                      <a
                        href="#"
                        title="Crypto Scam Defence"
                        className="font-medium grey-accent2 mr-2"
                      >
                        <img
                          src="./theme-assets/images/svg/svg-animation/csd-ico-white.svg"
                          alt="csd"
                        />{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-sm-12 col-md-6 col-lg-4 mb-5 animated"
                data-animation="jello"
                data-animation-delay="1.3s"
                data-toggle="modal"
                data-target="#teamUser14"
              >
                <div className="d-flex team-member">
                  <div className="team-img float-left mr-3">
                    <img
                      src="theme-assets/images/sergiu-m-small.png"
                      alt="team-profile-1"
                      className="rounded-circle"
                      width="128"
                    />
                  </div>
                  <div className="profile align-self-center">
                    <div className="name">Sergiu M.</div>
                    <div className="role">CISO</div>
                    <div className="social-profile mt-3">
                      <a
                        href="https://www.linkedin.com/in/smesesan/"
                        title="Crypto Scam Defence"
                        className="font-medium grey-accent2 mr-2"
                      >
                        <i className="ti-linkedin"></i>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-sm-12 col-md-6 col-lg-4 mb-5 animated"
                data-animation="jello"
                data-animation-delay="1.3s"
                data-toggle="modal"
                data-target="#teamUser15"
              >
                <div className="d-flex team-member">
                  <div className="team-img float-left mr-3">
                    <img
                      src="theme-assets/images/adelin-small.png"
                      alt="team-profile-1"
                      className="rounded-circle"
                      width="128"
                    />
                  </div>
                  <div className="profile align-self-center">
                    <div className="name">Adelin M.</div>
                    <div className="role">Community Manager</div>
                    <div className="social-profile mt-3">
                      <a
                        href="https://www.linkedin.com/in/li%C8%9B%C4%83-adelin-gabriel-437920215/"
                        title="Adelin"
                        className="font-medium grey-accent2 mr-2"
                      >
                        <i className="ti-linkedin"></i>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <h6 className="text-center text-white">
                More to be announced soon...
              </h6>
            </div>
          </div>
        </div>
      </section>
      {/*/ Team */}
      {/* Advisors */}
      <section id="advisor" className="advisor team section-padding">
        <div className="container">
          <div className="heading text-center">
            <div
              className="animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.3s"
            >
              <h6 className="sub-title">helpful</h6>
              <h2 className="title">Board of Advisors & Investors</h2>
            </div>
            <p
              className="content-desc animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.4s"
            >
              Professional businesses owners who shared Crypto Scam Defence
              vision
              <br className="d-none d-xl-block" />
              first capital source for us and also blockchain enthusiasts.
            </p>
          </div>
          <div className="team-profile mt-5">
            <div className="row mb-5">
              <div
                className="col-sm-12 col-md-6 col-lg-4 mb-5 animated"
                data-animation="jello"
                data-animation-delay="0.5s"
              >
                <div className="d-flex">
                  <div
                    className="team-img float-left mr-3"
                    data-toggle="modal"
                    data-target="#teamUser1"
                  >
                    <img
                      src="theme-assets/images/alin-small.png"
                      alt="team-profile-1"
                      className="rounded-circle"
                      width="128"
                    />
                  </div>
                  <div className="team-icon">
                    <i className="ti-linkedin"></i>
                  </div>
                  <div className="profile align-self-center">
                    <div className="name">Alin P.</div>
                    <div className="role">Real Estate Entrepreneur</div>
                    <div className="crypto-profile"></div>
                  </div>
                </div>
              </div>
              <div
                className="col-sm-12 col-md-6 col-lg-4 mb-5 animated"
                data-animation="jello"
                data-animation-delay="0.6s"
              >
                <div className="d-flex">
                  <div
                    className="team-img float-left mr-3"
                    data-toggle="modal"
                    data-target="#teamUser8"
                  >
                    <img
                      src="theme-assets/images/benche-small.png"
                      alt="team-profile-1"
                      className="rounded-circle"
                      width="128"
                    />
                  </div>
                  <div className="team-icon">
                    <i className="ti-linkedin"></i>
                  </div>
                  <div className="profile align-self-center">
                    <div className="name">Ciprian B.</div>
                    <div className="role">
                      Fin-tech Entrepreneur and Investor
                    </div>
                    <div className="crypto-profile"></div>
                  </div>
                </div>
              </div>
              <div
                className="col-sm-12 col-md-6 col-lg-4 mb-5 animated"
                data-animation="jello"
                data-animation-delay="0.7s"
                data-toggle="modal"
                data-target="#teamUser3"
              >
                <div className="d-flex">
                  <div className="team-img float-left mr-3">
                    <img
                      src="theme-assets/images/chloe-small.png"
                      alt="team-profile-1"
                      className="rounded-circle"
                      width="128"
                    />
                  </div>
                  <div className="team-icon">
                    <i className="ti-linkedin"></i>
                  </div>
                  <div className="profile align-self-center">
                    <div className="name">Chloe T.</div>
                    <div className="role">Financial Operations</div>
                    <div className="crypto-profile"></div>
                  </div>
                </div>
              </div>
              <div
                className="col-sm-12 col-md-6 col-lg-4 mb-5 animated"
                data-animation="jello"
                data-animation-delay="0.8s"
                data-toggle="modal"
                data-target="#teamUser11"
              >
                <div className="d-flex">
                  <div className="team-img float-left mr-3">
                    <img
                      src="theme-assets/images/bogdan-small.png"
                      alt="team-profile-1"
                      className="rounded-circle"
                      width="128"
                    />
                  </div>
                  <div className="team-icon">
                    <i className="ti-linkedin"></i>
                  </div>
                  <div className="profile align-self-center">
                    <div className="name">Bogdan P.</div>
                    <div className="role">Automotive Engineering</div>
                    <div className="crypto-profile"></div>
                  </div>
                </div>
              </div>
              <div
                className="col-sm-12 col-md-6 col-lg-4 mb-5 animated"
                data-animation="jello"
                data-animation-delay="0.9s"
                data-toggle="modal"
                data-target="#teamUser7"
              >
                <div className="d-flex">
                  <div className="team-img float-left mr-3">
                    <img
                      src="theme-assets/images/placeholder.png"
                      alt="team-profile-1"
                      className="rounded-circle"
                      width="128"
                    />
                  </div>
                  <div className="team-icon">
                    <i className="ti-linkedin"></i>
                  </div>
                  <div className="profile align-self-center">
                    <div className="name">Kate & Michael</div>
                    <div className="role">Support Channel</div>
                    <div className="crypto-profile"></div>
                  </div>
                </div>
              </div>
              <div
                className="col-sm-12 col-md-6 col-lg-4 mb-5 animated"
                data-animation="jello"
                data-animation-delay="1.0s"
                data-toggle="modal"
                data-target="#teamUser12"
              >
                <div className="d-flex">
                  <div className="team-img float-left mr-3">
                    <img
                      src="theme-assets/images/dante.jpg"
                      alt="team-profile-1"
                      className="rounded-circle"
                      width="128"
                    />
                  </div>
                  <div className="team-icon">
                    <i className="ti-linkedin"></i>
                  </div>
                  <div className="profile align-self-center">
                    <div className="name">Dante A.</div>
                    <div className="role">Chief Financial Analyst</div>
                    <div className="crypto-profile"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*/ Advisors */}
      {/* ICO Video Modal */}
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
                <iframe
                  title="video title"
                  className="embed-responsive-item"
                  id="video"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Dev Team Modal Pop-ups */}
      {/* Team user popup - teamUser9 */}
      <div
        className="modal team-modal fade"
        id="teamUser9"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="teamUser9Title"
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
            <div className="modal-body">
              <div className="row p-4">
                <div className="col-12 col-md-5">
                  <img
                    className="img-fluid rounded"
                    src="theme-assets/images/dinu.jpg"
                    alt="Dinu B."
                  />
                </div>
                <div className="col-12 col-md-7 mt-sm-3">
                  <h5 id="teamUser9Title">Dinu B.</h5>
                  <small className="text-muted mb-0 ">CEO & Founder</small>
                  <div className="social-profile">
                    <a
                      href="#"
                      title="Linkedin"
                      className="font-medium grey-accent2 mr-2"
                    >
                      <i className="ti-linkedin"></i>
                    </a>
                  </div>
                  <div className="my-4">
                    <p>
                      Setting a vision for how technology will be used in the
                      company. Ensuring that the technological resources meet
                      the company's short and long-term needs. Outline the goals
                      for research and development. Making executive decisions
                      on behalf of the company's technological requirements.
                      Managing technology budgets and time frames.{" "}
                    </p>
                    <p>Senior developer with 17+ years of experience.</p>
                  </div>
                  <h6 className="mb-0">
                    <small className="text-uppercase">
                      Backend Technologies
                    </small>{" "}
                    <small className="float-right">90%</small>
                  </h6>
                  <div className="progress box-shadow-1 mb-4">
                    <div
                      className="progress-bar progress-orange"
                      role="progressbar"
                      style={{ width: "90%" }}
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <h6 className="mb-0">
                    <small className="text-uppercase">Devops engineering</small>{" "}
                    <small className="float-right">90%</small>
                  </h6>
                  <div className="progress box-shadow-1 mb-4">
                    <div
                      className="progress-bar progress-orange"
                      role="progressbar"
                      style={{ width: "90%" }}
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <h6 className="mb-0">
                    <small className="text-uppercase">
                      Software architechture
                    </small>{" "}
                    <small className="float-right">90%</small>
                  </h6>
                  <div className="progress box-shadow-1 mb-4">
                    <div
                      className="progress-bar progress-orange"
                      role="progressbar"
                      style={{ width: "90%" }}
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team user popup - teamUser6 */}
      <div
        className="modal team-modal fade"
        id="teamUser6"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="teamUser6Title"
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
            <div className="modal-body">
              <div className="row p-4">
                <div className="col-12 col-md-5">
                  <img
                    className="img-fluid rounded"
                    src="theme-assets/images/andrei3.jpeg"
                    alt="Andrei O."
                  />
                </div>
                <div className="col-12 col-md-7 mt-sm-3">
                  <h5 id="teamUser6Title">Andrei O.</h5>
                  <small className="text-muted mb-0 ">
                    Chief Financial Officer
                  </small>
                  <div className="social-profile">
                    <a
                      href="#"
                      title="Linkedin"
                      className="font-medium grey-accent2 mr-2"
                    >
                      <i className="ti-linkedin"></i>
                    </a>
                    <a
                      href="#"
                      title="Twitter"
                      className="font-medium grey-accent2 mr-2"
                    >
                      <i className="ti-twitter-alt"></i>
                    </a>
                    <a
                      href="#"
                      title="Github"
                      className="font-medium grey-accent2"
                    >
                      <i className="ti-github"></i>
                    </a>
                  </div>
                  <div className="my-4">
                    <p>
                      Experienced in optimize the financial performance of a
                      company, including its reporting, liquidity, and return on
                      investment.
                    </p>
                    <p>
                      I’m focusing on developing high quality business
                      strategies and plans ensuring their alignment with
                      short-term and long-term objectives.
                    </p>
                    <p>
                      Making high-quality investing decisions daily job to
                      advance the business and increase profits.
                    </p>
                  </div>
                  <h6 className="mb-0">
                    <small className="text-uppercase">Cash Management</small>{" "}
                    <small className="float-right">95%</small>
                  </h6>
                  <div className="progress box-shadow-1 mb-4">
                    <div
                      className="progress-bar progress-orange"
                      role="progressbar"
                      style={{ width: "95%" }}
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <h6 className="mb-0">
                    <small className="text-uppercase">
                      Financial Accounting
                    </small>{" "}
                    <small className="float-right">95%</small>
                  </h6>
                  <div className="progress box-shadow-1 mb-4">
                    <div
                      className="progress-bar progress-orange"
                      role="progressbar"
                      style={{ width: "95%" }}
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <h6 className="mb-0">
                    <small className="text-uppercase">Finance Competence</small>{" "}
                    <small className="float-right">85%</small>
                  </h6>
                  <div className="progress box-shadow-1 mb-4">
                    <div
                      className="progress-bar progress-orange"
                      role="progressbar"
                      style={{ width: "85%" }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team user popup - teamUser2 */}
      <div
        className="modal team-modal fade"
        id="teamUser2"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="teamUser2Title"
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
            <div className="modal-body">
              <div className="row p-4">
                <div className="col-12 col-md-5">
                  <img
                    className="img-fluid rounded"
                    src="theme-assets/images/fe-team-large.png"
                    alt="Frontend Team"
                  />
                </div>
                <div className="col-12 col-md-7 mt-sm-3">
                  <h5 id="teamUser2Title">Frontend Team</h5>
                  <small className="text-muted mb-0 ">
                    Crypto Scam Defence
                  </small>
                  <div className="social-profile"></div>
                  <div className="my-4">
                    <p>
                      Highly experienced team members with FE frameworks stack,
                      Ensuring user experience determines design choices.
                    </p>
                    <p>Highly experienced in delivering UI/UX interfaces</p>
                    <p className="small">
                      img source envato.com licenced to cryptoscamdefence.com
                    </p>
                  </div>
                  <h6 className="mb-0">
                    <small className="text-uppercase">React</small>{" "}
                    <small className="float-right">98%</small>
                  </h6>
                  <div className="progress box-shadow-1 mb-4">
                    <div
                      className="progress-bar progress-orange"
                      role="progressbar"
                      style={{ width: "98%" }}
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <h6 className="mb-0">
                    <small className="text-uppercase">Bootsrap</small>{" "}
                    <small className="float-right">90%</small>
                  </h6>
                  <div className="progress box-shadow-1 mb-4">
                    <div
                      className="progress-bar progress-orange"
                      role="progressbar"
                      style={{ width: "90%" }}
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <h6 className="mb-0">
                    <small className="text-uppercase">
                      Vue, Angular, Ionic
                    </small>{" "}
                    <small className="float-right">85%</small>
                  </h6>
                  <div className="progress box-shadow-1 mb-4">
                    <div
                      className="progress-bar progress-orange"
                      role="progressbar"
                      style={{ width: "85%" }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team user popup - teamUser10 */}
      <div
        className="modal team-modal fade"
        id="teamUser10"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="teamUser10Title"
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
            <div className="modal-body">
              <div className="row p-4">
                <div className="col-12 col-md-5">
                  <img
                    className="img-fluid rounded"
                    src="theme-assets/images/kirill.jpg"
                    alt="Kirill S."
                  />
                </div>
                <div className="col-12 col-md-7 mt-sm-3">
                  <h5 id="teamUser10Title">Kirill S.</h5>
                  <small className="text-muted mb-0 ">Blockchain Expert</small>
                  <div className="social-profile">
                    <a
                      href="#"
                      title="Linkedin"
                      className="font-medium grey-accent2 mr-2"
                    >
                      <i className="ti-linkedin"></i>
                    </a>
                    <a
                      href="#"
                      title="Github"
                      className="font-medium grey-accent2"
                    >
                      <i className="ti-github"></i>
                    </a>
                  </div>
                  <div className="my-4">
                    <p>
                      Experienced algorithmic crypto trader and a machine
                      learning evangelist.
                    </p>
                    <p>
                      I’m focusing on the logic behind the combination of
                      analysis tools, neural networks and genetic algorithms for
                      optimization. Always wanted to have a trading bot with
                      more features but never had the time to build a solution
                      beyond basic python technical analysis tracker.
                    </p>
                  </div>
                  <h6 className="mb-0">
                    <small className="text-uppercase">Blockchain</small>{" "}
                    <small className="float-right">100%</small>
                  </h6>
                  <div className="progress box-shadow-1 mb-4">
                    <div
                      className="progress-bar progress-orange"
                      role="progressbar"
                      style={{ width: "100%" }}
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <h6 className="mb-0">
                    <small className="text-uppercase">React</small>{" "}
                    <small className="float-right">90%</small>
                  </h6>
                  <div className="progress box-shadow-1 mb-4">
                    <div
                      className="progress-bar progress-orange"
                      role="progressbar"
                      style={{ width: "90%" }}
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <h6 className="mb-0">
                    <small className="text-uppercase">C++</small>{" "}
                    <small className="float-right">80%</small>
                  </h6>
                  <div className="progress box-shadow-1 mb-4">
                    <div
                      className="progress-bar progress-orange"
                      role="progressbar"
                      style={{ width: "80%" }}
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team user popup - teamUser4 */}
      <div
        className="modal team-modal fade"
        id="teamUser4"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="teamUser4Title"
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
            <div className="modal-body">
              <div className="row p-4">
                <div className="col-12 col-md-5">
                  <img
                    className="img-fluid rounded"
                    src="theme-assets/images/zeynur2.jpg"
                    alt="Cecelia T. Carter"
                  />
                </div>
                <div className="col-12 col-md-7 mt-sm-3">
                  <h5 id="teamUser4Title">Zeynur K.</h5>
                  <small className="text-muted mb-0 ">
                    VFX Motion Graphics
                  </small>
                  <div className="social-profile">
                    <a
                      href="https://www.instagram.com/drev0_mak/"
                      title="Linkedin"
                      className="font-medium grey-accent2 mr-2"
                    >
                      <i className="ti-instagram"></i>
                    </a>
                  </div>
                  <div className="my-4">
                    <p>Visual effects wizard, creative and detail oriented.</p>
                    <p>
                      Creative vision and non-standard thinking, perfect
                      implementation of all the ideas and requirements of the
                      project.
                    </p>
                  </div>
                  <h6 className="mb-0">
                    <small className="text-uppercase">After Effects</small>{" "}
                    <small className="float-right">95%</small>
                  </h6>
                  <div className="progress box-shadow-1 mb-4">
                    <div
                      className="progress-bar progress-orange"
                      role="progressbar"
                      style={{ width: "95%" }}
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <h6 className="mb-0">
                    <small className="text-uppercase">Premiere Pro</small>{" "}
                    <small className="float-right">90%</small>
                  </h6>
                  <div className="progress box-shadow-1 mb-4">
                    <div
                      className="progress-bar progress-orange"
                      role="progressbar"
                      style={{ width: "90%" }}
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <h6 className="mb-0">
                    <small className="text-uppercase">
                      Adobe Creative Cloud
                    </small>{" "}
                    <small className="float-right">85%</small>
                  </h6>
                  <div className="progress box-shadow-1 mb-4">
                    <div
                      className="progress-bar progress-orange"
                      role="progressbar"
                      style={{ width: "85%" }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team user popup - teamUser13 */}
      <div
        className="modal team-modal fade"
        id="teamUser13"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="teamUser13Title"
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
            <div className="modal-body">
              <div className="row p-4">
                <div className="col-12 col-md-5">
                  <img
                    className="img-fluid rounded"
                    src="theme-assets/images/backend-team.png"
                    alt="TBackend team"
                  />
                  <img
                    className="img-fluid rounded"
                    src="theme-assets/images/backend-team2.png"
                    alt="TBackend team"
                  />
                </div>
                <div className="col-12 col-md-7 mt-sm-3">
                  <h5 id="teamUser13Title">Backend Team</h5>
                  <small className="text-muted mb-0 ">
                    Crypto Scam Defence
                  </small>
                  <div className="social-profile">
                    <a
                      href="#"
                      title="Crypto Scam Defence"
                      className="font-medium grey-accent2 mr-2"
                    >
                      <img
                        src="./theme-assets/images/svg/svg-animation/csd-ico-white.svg"
                        alt="backend-team"
                      />{" "}
                    </a>
                  </div>
                  <div className="my-4">
                    <p>
                      Experienced dynamic with backend technologies stack and
                      excellent coding standards.
                    </p>
                    <p>
                      Highly experience in data manipulation via REST API third
                      parties integrations. Deep expertise in create
                      architectural solutions for complex data issues. Strong
                      communication and problem solving skills.
                    </p>
                    <p className="small">
                      img source envato.com licenced to cryptoscamdefence.com
                    </p>
                  </div>
                  <h6 className="mb-0">
                    <small className="text-uppercase">PHP Symphony</small>{" "}
                    <small className="float-right">98%</small>
                  </h6>
                  <div className="progress box-shadow-1 mb-4">
                    <div
                      className="progress-bar progress-orange"
                      role="progressbar"
                      style={{ width: "98%" }}
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <h6 className="mb-0">
                    <small className="text-uppercase">Node Js</small>{" "}
                    <small className="float-right">90%</small>
                  </h6>
                  <div className="progress box-shadow-1 mb-4">
                    <div
                      className="progress-bar progress-orange"
                      role="progressbar"
                      style={{ width: "90%" }}
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <h6 className="mb-0">
                    <small className="text-uppercase">Java</small>{" "}
                    <small className="float-right">75%</small>
                  </h6>
                  <div className="progress box-shadow-1 mb-4">
                    <div
                      className="progress-bar progress-orange"
                      role="progressbar"
                      style={{ width: "75%" }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Advisors Team Modal Pop-ups */}
      {/* Team user popup - teamUser1 */}
      <div
        className="modal team-modal fade"
        id="teamUser1"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="teamUser1Title"
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
            <div className="modal-body">
              <div className="row p-4">
                <div className="col-12 col-md-5">
                  <img
                    className="img-fluid rounded"
                    src="theme-assets/images/alin.png"
                    alt="Alin P"
                  />
                </div>
                <div className="col-12 col-md-7 mt-sm-3">
                  <h5 id="teamUser1Title">Alin P</h5>
                  <small className="text-muted mb-0 ">
                    Real Estate Entrepreneur
                  </small>
                  <div className="social-profile"></div>
                  <div className="my-4">
                    <p>Active real estate entrepreneur.</p>
                    <p>
                      Maintained and managed multiple investment properties.
                      Focused on asset management, proactive risk management on
                      all properties and identifying any & all ways to increase
                      equity and cash flow.
                    </p>
                  </div>
                  <h6 className="mb-0">
                    <small className="text-uppercase">Real Estate</small>{" "}
                    <small className="float-right">95%</small>
                  </h6>
                  <div className="progress box-shadow-1 mb-4">
                    <div
                      className="progress-bar progress-orange"
                      role="progressbar"
                      style={{ width: "95%" }}
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team user popup - teamUser8 */}
      <div
        className="modal team-modal fade"
        id="teamUser8"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="teamUser8Title"
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
            <div className="modal-body">
              <div className="row p-4">
                <div className="col-12 col-md-5">
                  <img
                    className="img-fluid rounded"
                    src="theme-assets/images/benche.png"
                    alt="Pavel Volek"
                  />
                </div>
                <div className="col-12 col-md-7 mt-sm-3">
                  <h5 id="teamUser8Title">Ciprian B.</h5>
                  <small className="text-muted mb-0 ">
                    Entrepreneur and Investor
                  </small>
                  <div className="my-4">
                    <p>
                      Focused on creativity, initiative, problem solving,
                      organizational skills, communication and independence.
                    </p>
                    <p>
                      Innovation and ability to be creative to generate new
                      ideas for a business venture are just few words to
                      describe Ciprian.
                    </p>
                  </div>
                  <h6 className="mb-0">
                    <small className="text-uppercase">
                      Blockchain investments
                    </small>{" "}
                    <small className="float-right">85%</small>
                  </h6>
                  <div className="progress box-shadow-1 mb-4">
                    <div
                      className="progress-bar progress-orange"
                      role="progressbar"
                      style={{ width: "85%" }}
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team user popup - teamUser3 */}
      <div
        className="modal team-modal fade"
        id="teamUser3"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="teamUser3Title"
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
            <div className="modal-body">
              <div className="row p-4">
                <div className="col-12 col-md-5">
                  <img
                    className="img-fluid rounded"
                    src="theme-assets/images/chloe.png"
                    alt="Alyona Blakytna"
                  />
                </div>
                <div className="col-12 col-md-7 mt-sm-3">
                  <h5 id="teamUser3Title">Chloe .T</h5>
                  <small className="text-muted mb-0 ">Financial Analyst</small>
                  <div className="my-4">
                    <p>
                      Highly experienced in performing financial forecasting,
                      reporting, and operational metrics tracking.
                    </p>
                    <p>
                      Provide analysis of trends and forecasts, recommends
                      actions for optimization. Strong analytical and data
                      gathering skills
                    </p>
                    <p className="small">
                      img source envato.com (missing consent to use employee
                      photo)
                    </p>
                  </div>
                  <h6 className="mb-0">
                    <small className="text-uppercase">Financial Analysis</small>{" "}
                    <small className="float-right">95%</small>
                  </h6>
                  <div className="progress box-shadow-1 mb-4">
                    <div
                      className="progress-bar progress-orange"
                      role="progressbar"
                      style={{ width: "95%" }}
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team user popup - teamUser11 */}
      <div
        className="modal team-modal fade"
        id="teamUser11"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="teamUser11Title"
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
            <div className="modal-body">
              <div className="row p-4">
                <div className="col-12 col-md-5">
                  <img
                    className="img-fluid rounded"
                    src="theme-assets/images/bogdan.png"
                    alt="bogdan"
                  />
                </div>
                <div className="col-12 col-md-7 mt-sm-3">
                  <h5 id="teamUser11Title">Bogdan P.</h5>
                  <small className="text-muted mb-0 ">
                    Automotive engineering
                  </small>

                  <div className="my-4">
                    <p>
                      Automotive engineer enthusiast and professional research
                      intensive committed .
                    </p>
                    <p>
                      I’m focusing on designing and testing various components
                      specialised in investigating product failures. Also
                      blockchain enthusiast and data aggregation systems.
                    </p>
                  </div>
                  <h6 className="mb-0">
                    <small className="text-uppercase">Engineering</small>{" "}
                    <small className="float-right">90%</small>
                  </h6>
                  <div className="progress box-shadow-1 mb-4">
                    <div
                      className="progress-bar progress-orange"
                      role="progressbar"
                      style={{ width: "90%" }}
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <h6 className="mb-0">
                    <small className="text-uppercase">Blockchain</small>{" "}
                    <small className="float-right">90%</small>
                  </h6>
                  <div className="progress box-shadow-1 mb-4">
                    <div
                      className="progress-bar progress-orange"
                      role="progressbar"
                      style={{ width: "90%" }}
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team user popup - teamUser14 */}
      <div
        className="modal team-modal fade"
        id="teamUser14"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="teamUser14Title"
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
            <div className="modal-body">
              <div className="row p-4">
                <div className="col-12 col-md-5">
                  <img
                    className="img-fluid rounded"
                    src="theme-assets/images/sergiu-m-full.png"
                    alt="sergiu"
                  />
                  <br />
                  <img
                    className="img-fluid rounded"
                    src="theme-assets/images/sergiu-m-full-2.jpg"
                    alt="sergiu"
                  />
                </div>
                <div className="col-12 col-md-7 mt-sm-3">
                  <h5 id="teamUser11Title">Sergiu M.</h5>
                  <small className="text-muted mb-0 ">
                    Chief Information Security Officer at Crypto Scam Defence
                  </small>

                  <div className="my-4">
                    <p>
                      10 years career in Information Security and co-founder of
                      Open Data Security, a leading CyberSecurity company.
                    </p>
                    <p>
                      Sergiu M. evaluates all risks involved in our software,
                      servers and networks. From his thorough analysis, he
                      informs the CSD staff on what actions to take and to avoid
                      in a cyber attack, which makes Sergiu one of the company's
                      most vital components when tackling a project. <br />
                      As Head of IT Security and a member of the analyst team,
                      Sergiu has more than 10 years of experience behind him,
                      and among his competencies are web auditing, and IT
                      security management
                    </p>
                    <p>
                      I have an interest in tech, CyberSecurity investment
                      opportunities and humanitarian relief operations. Also
                      blockchain enthusiast and data aggregation systems.
                    </p>
                  </div>
                  <h6 className="mb-0">
                    <small className="text-uppercase">CyberSecurity</small>{" "}
                    <small className="float-right">100%</small>
                  </h6>
                  <div className="progress box-shadow-1 mb-4">
                    <div
                      className="progress-bar progress-orange"
                      role="progressbar"
                      style={{ width: "100%" }}
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <h6 className="mb-0">
                    <small className="text-uppercase">Ethical Hacking</small>{" "}
                    <small className="float-right">95%</small>
                  </h6>
                  <div className="progress box-shadow-1 mb-4">
                    <div
                      className="progress-bar progress-orange"
                      role="progressbar"
                      style={{ width: "95%" }}
                      aria-valuenow="95"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <h6 className="mb-0">
                    <small className="text-uppercase">
                      Linux Systems Administration
                    </small>{" "}
                    <small className="float-right">95%</small>
                  </h6>
                  <div className="progress box-shadow-1 mb-4">
                    <div
                      className="progress-bar progress-orange"
                      role="progressbar"
                      style={{ width: "95%" }}
                      aria-valuenow="95"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team user popup - teamUser15 */}
      <div
        className="modal team-modal fade"
        id="teamUser15"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="teamUser15Title"
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
            <div className="modal-body">
              <div className="row p-4">
                <div className="col-12 col-md-5">
                  <img
                    className="img-fluid rounded"
                    src="theme-assets/images/adelin.png"
                    alt="sergiu"
                  />
                </div>
                <div className="col-12 col-md-7 mt-sm-3">
                  <h5 id="teamUser11Title">Adelin M.</h5>
                  <small className="text-muted mb-0 ">
                    Community Manager at Crypto Scam Defence
                  </small>

                  <div className="my-4">
                    <p>
                      As a Community Manager at Crypto Scam Defence, supports
                      organization online community by monitoring the engagement
                      on various social media platforms.
                    </p>
                    <p>
                      CryptoCurrency market plan provider and blockchain
                      enthusiast
                    </p>
                    <p>
                      Manage Social Media campaigns for various social media
                      platforms to align with marketing strategies
                      <br />
                      Publish content that meets the brand’s communication style
                      <br />
                      Implement social media strategies to increase engagement &
                      followers
                      <br />
                      Stay up-to-date with the latest industry and digital
                      trends
                      <br />
                      Responding to customer inquiries & comments on social
                      platforms in a timely manner
                      <br />
                      Build relationships with the online community
                      <br />
                      Monitor and provide feedback on engagement/conversation
                      via social media channels to leadership
                    </p>
                  </div>
                  <h6 className="mb-0">
                    <small className="text-uppercase">
                      Social Communication Channels
                    </small>{" "}
                    <small className="float-right">100%</small>
                  </h6>
                  <div className="progress box-shadow-1 mb-4">
                    <div
                      className="progress-bar progress-orange"
                      role="progressbar"
                      style={{ width: "100%" }}
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <h6 className="mb-0">
                    <small className="text-uppercase">CyptoCurrencies</small>{" "}
                    <small className="float-right">95%</small>
                  </h6>
                  <div className="progress box-shadow-1 mb-4">
                    <div
                      className="progress-bar progress-orange"
                      role="progressbar"
                      style={{ width: "95%" }}
                      aria-valuenow="95"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <h6 className="mb-0">
                    <small className="text-uppercase">Blockchain</small>{" "}
                    <small className="float-right">95%</small>
                  </h6>
                  <div className="progress box-shadow-1 mb-4">
                    <div
                      className="progress-bar progress-orange"
                      role="progressbar"
                      style={{ width: "95%" }}
                      aria-valuenow="95"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team user popup - teamUser7 */}
      <div
        className="modal team-modal fade"
        id="teamUser7"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="teamUser7Title"
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
            <div className="modal-body">
              <div className="row p-4">
                <div className="col-12 col-md-5">
                  <img
                    className="img-fluid rounded"
                    src="theme-assets/images/placeholder.png"
                    alt="Kate and Michael"
                  />
                </div>
                <div className="col-12 col-md-7 mt-sm-3">
                  <h5 id="teamUser7Title">Kate & Michael</h5>
                  <small className="text-muted mb-0 ">Support Channel</small>
                  <div className="social-profile"></div>
                  <div className="my-4">
                    <p>Trading specialists responsible for supporting users.</p>
                    <p>
                      They act as advisors for support on matter of UI/UX and
                      regulations.
                    </p>
                    <p className="small">
                      img not available (missing consent of using employee
                      photo)
                    </p>
                  </div>
                  <h6 className="mb-0">
                    <small className="text-uppercase">Blockchain</small>{" "}
                    <small className="float-right">85%</small>
                  </h6>
                  <div className="progress box-shadow-1 mb-4">
                    <div
                      className="progress-bar progress-orange"
                      role="progressbar"
                      style={{ width: "85%" }}
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <h6 className="mb-0">
                    <small className="text-uppercase">Cryptocurrencies</small>{" "}
                    <small className="float-right">90%</small>
                  </h6>
                  <div className="progress box-shadow-1 mb-4">
                    <div
                      className="progress-bar progress-orange"
                      role="progressbar"
                      style={{ width: "90%" }}
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <h6 className="mb-0">
                    <small className="text-uppercase">UX/UI</small>{" "}
                    <small className="float-right">85%</small>
                  </h6>
                  <div className="progress box-shadow-1 mb-4">
                    <div
                      className="progress-bar progress-orange"
                      role="progressbar"
                      style={{ width: "85%" }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team user popup - teamUser12 */}
      <div
        className="modal team-modal fade"
        id="teamUser12"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="teamUser12Title"
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
            <div className="modal-body">
              <div className="row p-4">
                <div className="col-12 col-md-5">
                  <img
                    className="img-fluid rounded"
                    src="theme-assets/images/dante.jpg"
                    alt="Dante A."
                  />
                </div>
                <div className="col-12 col-md-7 mt-sm-3">
                  <h5 id="teamUser12Title">Dante A.</h5>
                  <small className="text-muted mb-0 ">
                    Chief Financial Analyst
                  </small>
                  <div className="my-4">
                    <p>
                      Blockchain enthusiast especially for decentralized
                      applications with background in finance, accounting and
                      economics.
                    </p>
                    <p>
                      Research analyst and decision-maker primarily concerned
                      with compliance and reporting when managing CSD strategy.
                    </p>
                  </div>
                  <h6 className="mb-0">
                    <small className="text-uppercase">Blockchain</small>{" "}
                    <small className="float-right">85%</small>
                  </h6>
                  <div className="progress box-shadow-1 mb-4">
                    <div
                      className="progress-bar progress-orange"
                      role="progressbar"
                      style={{ width: "85%" }}
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <h6 className="mb-0">
                    <small className="text-uppercase">Economics</small>{" "}
                    <small className="float-right">95%</small>
                  </h6>
                  <div className="progress box-shadow-1 mb-4">
                    <div
                      className="progress-bar progress-orange"
                      role="progressbar"
                      style={{ width: "95%" }}
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <h6 className="mb-0">
                    <small className="text-uppercase">Accounting</small>{" "}
                    <small className="float-right">95%</small>
                  </h6>
                  <div className="progress box-shadow-1 mb-4">
                    <div
                      className="progress-bar progress-orange"
                      role="progressbar"
                      style={{ width: "95%" }}
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <h6 className="mb-0">
                    <small className="text-uppercase">Cryptocurrencies</small>{" "}
                    <small className="float-right">90%</small>
                  </h6>
                  <div className="progress box-shadow-1 mb-4">
                    <div
                      className="progress-bar progress-orange"
                      role="progressbar"
                      style={{ width: "90%" }}
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CryptoTeamComponent;
