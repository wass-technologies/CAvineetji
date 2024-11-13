import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <section id="contact">
      <div className="__title">
        <div className="__left">
          <h2>get in touch</h2>
          <h1>Contact Us</h1>
        </div>

        <div className="__right">
          <p>
            We respect your query <br />
            and opinion
          </p>
        </div>
      </div>

      <div className="__form">
        <div className="__left">
          <div className="__contact-details">
            <h1>Contact Information</h1>
            <p>
              We love to hear from you. Our friendly team is always here to
              contact with you.
            </p>

            <div className="links">
              <i className="bx bxl-whatsapp"></i>

              <div className="_name">
                <h3>Phone:</h3>
                <h4>+91 9830699363</h4>
              </div>
            </div>

            <div className="links">
              <i className="bx bx-envelope"></i>

              <div className="_name">
                <h3>Email:</h3>
                <h4>vineet@svcassociates.in</h4>
              </div>
            </div>

            <div className="links">
              <i className="bx bxl-linkedin"></i>

              <div className="_name">
                <h3>Linkedin:</h3>
                <h4>SVC Associates</h4>
              </div>
            </div>

            <div className="links">
              <i className="bx bxl-instagram"></i>

              <div className="_name">
                <h3>Instagram:</h3>
                <h4>SVC Associates</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="__right">
          <h3>We listen to my clients and well-wishers..</h3>

          <div className="__input">
            <span>Email</span>
            <input type="email" placeholder="example@gmail.com" />
          </div>

          <div className="__input">
            <span>Your Massage</span>
            <textarea
              placeholder="Message"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>

          <button type="button">Submit &#x2192;</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
