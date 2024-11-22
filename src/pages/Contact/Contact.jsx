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

              <a href="tel:+919088639363" className="_name">
                <h3>Phone:</h3>
                <h4>+91 9088639363</h4>
              </a>
            </div>

            <div className="links">
              <i className="bx bx-envelope"></i>

              <a href="mailto:info@svcassociate.in" className="_name">
                <h3>Email:</h3>
                <h4>info@svcassociate.in</h4>
              </a>
            </div>

            <div className="links">
              <i className="bx bxl-linkedin"></i>

              <a
                target="_blank"
                href="https://www.linkedin.com/company/svc-associates/"
                className="_name"
              >
                <h3>Linkedin:</h3>
                <h4>SVC Associates</h4>
              </a>
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
            <span>Your Message</span>
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

      <div className="__location">
        <div className="__title">
          <h3><i className='bx bx-current-location' ></i> Our Locations</h3>
        </div>

        <div className="__container">
          <div className="__cards">
            <h4> Kolkata Office :</h4>
            <p>
              Astra Tower, Unit No. ASO-303, Newtown, Action Area II, Kolkata-
              700161
            </p>
          </div>

          <div className="__cards">
            <h4>Kolkata Office :</h4>
            <p>Anuj Complex, H-1/16 VIP Road, Baguihati, Kolkata-700059</p>
          </div>

          <div className="__cards">
            <h4>Bangalore Office :</h4>
            <p>IndiQube Aura, IBIS Hotel, Bommanahalli, Bengaluru- 560068</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
