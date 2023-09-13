import React from "react";

export default () => {
  return (
    <main>
      <section className="blog-area" id="head-area">
        <div className="blog-head" data-midnight="white">
          <div className="blog-head-content">
            <img src="theme-assets/images/blockchain.png" alt="Blog 1" />
          </div>
        </div>
        <div className="container">
          {/* Blog detail page */}
          <div className="blog-container">
            <div className="row">
              {/* Blog Content area */}
              <div className="col-md-12 col-lg-8">
                {/* Breadcrumb */}
                <div className="breadcrumb">
                  <a href="/">Home</a> /<a href="/news">News</a> /
                  <a className="current">Detail Page</a>
                </div>
                {/*/ Breadcrumb */}
                {/* Blog post details */}
                <div className="card square">
                  <div className="card-body">
                    <div className="content-area">
                      <h2 className="card-title">What is blockchain ?</h2>
                      <h6 className="subtitle">
                        A digital ledger in which{" "}
                        <span className="blue">
                          transactions made in bitcoin
                        </span>{" "}
                        or another cryptocurrency are recorded chronologically
                        and publicly.
                      </h6>
                      <p className="card-text">
                        Blockchain formation. The main chain (black) consists of
                        the longest series of blocks from the genesis block
                        (green) to the current block. Orphan blocks (purple)
                        exist outside main chain.
                      </p>
                      <blockquote>
                        Bitcoin network data A blockchain, originally block
                        chain, is a continuously growing list of records, called
                        which are linked and secured using cryptography. Each
                        block typically contains.
                      </blockquote>
                      <p>
                        a blockchain is inherently resistant to modification of
                        the data. It is "an open, distributed ledger that can
                        record transactions between two parties efficiently and
                        in a verifiable & permanent way". For use as a
                        distributed ledger, a blockchain is typically managed by
                        a peer-to-peer network collectively adhering to a
                        protocol for inter-node communication and validating new
                        blocks. Once recorded, the data in any given block
                        cannot be altered retroactively without the alteration
                        of all subsequent blocks, which requires collusion of
                        the network majority.
                      </p>
                      <p>
                        Blockchains are secure by design and exemplify a
                        distributed computing system with Byzantine fault
                        tolerance.
                      </p>
                      <p className="text-uppercase mt-5">
                        POSTED <strong>26 FEB 2018</strong> | BY{" "}
                        <strong>ADMIN</strong> | IN{" "}
                        <strong>CRYPTOCURRENCY</strong>
                      </p>
                      {/* Blog post tags */}
                      <div className="tags">
                        <a href="#" className="tag-element">
                          Blockchain
                        </a>
                        <a href="#" className="tag-element">
                          Bitcoin
                        </a>
                      </div>
                      {/*/ Blog post tags */}
                      <hr />
                      {/* Post comments */}
                      <div className="comment-section">
                        <h5 className="commets-title">2 Comments</h5>
                        {/* User comments */}
                        <div className="comment-area">
                          <div className="media">
                            <img
                              className="mr-3"
                              src="theme-assets/images/user-1.png"
                              alt="user1"
                              style={{ width: "64px", height: "64px" }}
                            />
                            <div className="media-body">
                              <h6 className="user-name">Susan J. Newsom</h6>
                              <div className="date-time">
                                APR 21, 2018 AT 7:49 AM
                              </div>
                              <div className="reply">
                                <a href="#">
                                  <i className="ti-back-right"></i>Reply
                                </a>
                              </div>
                              <p className="comment-desc">
                                The words block & chain were used separately
                                Satoshi Nakamoto's original paper, but were
                                eventually popularized as single word,
                                blockchain, by 2016.
                              </p>
                              <div className="comment-reply">
                                <div className="media">
                                  <img
                                    className="mr-3"
                                    src="theme-assets/images/user-2.png"
                                    alt="user2"
                                    style={{ width: "64px", height: "64px" }}
                                  />
                                  <div className="media-body">
                                    <h6 className="user-name">
                                      Susan J. Newsom
                                    </h6>
                                    <div className="date-time">
                                      APR 21, 2018 AT 7:49 AM
                                    </div>
                                    <div className="reply">
                                      <a href="#">
                                        <i className="ti-back-right"></i>Reply
                                      </a>
                                    </div>
                                    <p className="comment-desc">
                                      The words block & chain were used
                                      separately Satoshi Nakamoto's original
                                      paper, but were eventually popularized as
                                      single word, blockchain, by 2016.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*/ User comments */}
                        {/* Comment Form */}
                        <div className="leave-comment">
                          <h5 className="commets-title">Leave A Comment</h5>
                          <form action="#" method="get" acceptCharset="utf-8">
                            <input
                              type="text"
                              className="form-control mb-4"
                              name="name"
                              placeholder="Your Name"
                            />
                            <input
                              type="text"
                              className="form-control"
                              name="mail"
                              placeholder="Your Mail"
                            />
                            <textarea
                              rows="4"
                              className="form-control"
                              name="message"
                              placeholder="Your Message"
                            ></textarea>
                            <button
                              type="submit"
                              className="btn btn-lg btn-glow btn-gradient-blue btn-round"
                            >
                              Send Message
                            </button>
                          </form>
                        </div>
                        {/*/ Comment Form */}
                      </div>
                      {/*/ Post comments */}
                    </div>
                  </div>
                </div>
                {/* Blog post details */}
              </div>
              {/*/ Blog Content area */}
              {/* Sidebar area */}
              <div className="col-md-12 col-lg-4">
                <div className="sidebar">
                  {/* Social Buttons*/}
                  <div className="card social-card">
                    <div className="card-body">
                      <ul className="social-buttons list-unstyled">
                        <li className="social-text">Share Post :</li>
                        <li>
                          <a
                            href="#"
                            title="Facebook"
                            className="btn btn-outline-facebook rounded-circle"
                          >
                            <i className="ti-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title="Twitter"
                            className="btn btn-outline-twitter rounded-circle"
                          >
                            <i className="ti-twitter-alt"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title="LinkedIn"
                            className="btn btn-outline-linkedin rounded-circle"
                          >
                            <i className="ti-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title="Pintrest"
                            className="btn btn-outline-pinterest rounded-circle"
                          >
                            <i className="ti-pinterest"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/*/ Social Buttons*/}
                  <div className="card square">
                    <div className="card-body">
                      {/* Search Box*/}
                      {/* <div className="search">
									<form action="#" method="post">
										<input type="text" className="search-control" name="name" placeholder="Search">
										<button type="submit" className="search-submit"><i className="ti-search"></i></button>
									</form>
								</div> */}
                      {/*/ Search Box*/}
                      {/* Categories */}
                      {/* <div className="categories">
									<h4 className="sidebar-title">Categories</h4>
									<ul>
										<li>
											<a href="template-blog.html" className="cat-name">Bitcoin</a>
											<a href="template-blog.html" className="cat-count">( 145 )</a>
										</li>
										<li>
											<a href="template-blog.html" className="cat-name">Cryptocurrency</a>
											<a href="template-blog.html" className="cat-count">( 320 )</a>
										</li>
										<li>
											<a href="template-blog.html" className="cat-name">ICO</a>
											<a href="template-blog.html" className="cat-count">( 30 )</a>
										</li>
										<li>
											<a href="template-blog.html" className="cat-name">Blockchain Technology</a>
											<a href="template-blog.html" className="cat-count">( 590 )</a>
										</li>
									</ul>
								</div> */}
                      {/*/ Categories */}
                      {/* <hr> */}
                      {/* About company */}
                      {/* <div className="about">
									<h4 className="sidebar-title">About our company</h4>
									<p>Blockchain formation. The main chain consists of longest series of blocks from the genesis.</p>
								</div> */}
                      {/*/ About company */}
                      {/* <hr> */}
                      {/* Latest Posts */}
                      <div className="latest-posts">
                        <h4 className="sidebar-title">Latest Posts</h4>
                        <ul>
                          <li>
                            <a href="#">
                              {/* <a href="template-blog-detail"> */}
                              <div className="media">
                                <img
                                  className="mr-3"
                                  src="theme-assets/images/post-1.png"
                                  alt="user2"
                                />
                                <div className="media-body">
                                  <h6 className="post-name">
                                    What is Bitcoin all about?
                                  </h6>
                                  <div className="post-date">
                                    May 23rd, 2018
                                  </div>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              {/* <a href="template-blog-detail"> */}
                              <div className="media">
                                <img
                                  className="mr-3"
                                  src="theme-assets/images/post-2.png"
                                  alt="user2"
                                />
                                <div className="media-body">
                                  <h6 className="post-name">
                                    What is cryptocurrency?
                                  </h6>
                                  <div className="post-date">
                                    May 26th, 2018
                                  </div>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              {/* <a href="template-blog-detail"> */}
                              <div className="media">
                                <img
                                  className="mr-3"
                                  src="theme-assets/images/post-3.png"
                                  alt="user3"
                                />
                                <div className="media-body">
                                  <h6 className="post-name">How to invest?</h6>
                                  <div className="post-date">
                                    June 3rd, 2018
                                  </div>
                                </div>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                      {/*/ Latest Posts */}
                      {/* <hr> */}
                      {/* Post tags */}
                      {/* <div className="tags">
									<h4 className="sidebar-title">Tags</h4>
									<div className="tag-list">
										<a href="template-blog.html" className="tag-element">Blockchain</a>
										<a href="template-blog.html" className="tag-element">Bitcoin</a>
										<a href="template-blog.html" className="tag-element">XRP</a>
										<a href="template-blog.html" className="tag-element">Latest ICO</a>
										<a href="template-blog.html" className="tag-element">Ethereum</a>
									</div>
								</div> */}
                      {/*/ Post tags */}
                      {/* Contact Us */}
                      {/* <div className="contact-us">
									<a href="#">
										<h5 className="contact-title">How can we help you?</h5>
										<div className="contact-text">Have questions?</div>
										<div className="contact-text">We're happy to help.</div>
										<a href="#" className="btn btn-gradient-orange btn-round">Contact Us</a>
									</a>
								</div> */}
                      {/*/ Contact Us */}
                    </div>
                  </div>
                </div>
              </div>
              {/*/ Sidebar area */}
            </div>
          </div>
          {/*/ Blog detail page */}
        </div>
      </section>
    </main>
  );
};
