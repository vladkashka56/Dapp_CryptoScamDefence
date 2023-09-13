import React from "react";
const ValidateEmail = (mail)  => {
  if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(mail))
    {
      return (true)
    }
      return (false)
}
const CryptoContactComponent = () => {
  const submitForm = async () => {
    const inp = document.getElementsByTagName('input')
    if(!inp[0].value || !inp[1].value || !inp[2].value) {
      alert('Missing InputBox!')
    } else {
      if(!ValidateEmail(inp[1].value)) {
        alert("You have entered an invalid email address!");
        inp[1].focus()
      } else {
        try {
            let response = await fetch('https://cryptoscamdefence.com/contact', {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json'// 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({'name':inp[0].value, 'mail':inp[1].value, 'message':inp[2].value})
          })
          if(response) {
            let res = response.json()
            console.log(res)
          }
          alert('Success!')
        } catch(err) {
          alert('Failed')
        }
      }
    }
  }

  return (
    <main>
      <section id="contact" className="contact section-padding">
        <div className="container">
          <div className="heading text-center">
            <div
              className="animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.3s"
            >
              <h6 className="sub-title">Crypto Scam Defence</h6>
              <h2 className="title">Contact</h2>
            </div>
            <p
              className="content-desc animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.4s"
            >
              Have questions? We’re happy to help.
            </p>
          </div>
          <div className="row">
            <div className="col-xl-8 col-md-12 mx-auto">
              <ul className="list-unstyled contact-info pb-5 mb-5">
                <li
                  className="animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.5s"
                >
                  <i className="fa fa-facebook"></i>
                  <span className="ml-1">Facebook</span>
                </li>
                <li
                  className="animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.6s"
                >
                  <i className="fa fa-twitter"></i>
                  <span className="ml-1">Twitter</span>
                </li>
                <li
                  className="animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.7s"
                >
                  <i className="fa fa-telegram"></i>
                  <span className="ml-1">Telegram</span>
                </li>
                <li
                  className="animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.7s"
                >
                  <i className="fa fa-commenting"></i>
                  <span className="ml-1">Discord</span>
                </li>
                <li
                  className="animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.7s"
                >
                  <i className="fa fa-youtube-play"></i>
                  <span className="ml-1">YouTube</span>
                </li>
              </ul>
              <div
                acceptCharset="utf-8"
                className="text-center"
              >
                <input
                  type="text"
                  className="form-control animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.8s"
                  name="name"
                  placeholder="Your Name"
                />
                <input
                  type="text"
                  className="form-control animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.9s"
                  name="mail"
                  placeholder="Your Mail"
                />
                <input
                  type="text"
                  className="form-control animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="1.0s"
                  name="message"
                  placeholder="Your Message"
                />
                <button
                  onClick={() => submitForm()}
                  className="btn btn-lg btn-gradient-purple btn-glow animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="1.1s"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CryptoContactComponent;
