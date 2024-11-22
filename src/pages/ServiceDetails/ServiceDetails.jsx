import React from "react";
import "./ServiceDetails.scss";

import faqIcon from "../../assets/Images/Home/faq.png";
import Services from "../../components/Services/Services";
import { Link } from "react-router-dom";

const ServiceDetails = () => {
  const storedData = JSON.parse(localStorage.getItem("serviceData"));

  if (!storedData) {
    return <div>Error: Service data not found.</div>;
  }

  return (
    <div id="sales_details_page">
      <div className="__container-box">
        <div className="___banner-box">
          <div className="__container-box">
            <div className="__box">
              <div className="__left">
                <div className="__banner">
                  <img
                    src={storedData.banner.image}
                    alt="thumbnail"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="__right">
                <div className="__top">
                  <h1>{storedData.banner.title}</h1>
                  <div className="__points">
                    {storedData.banner.lists.map((x, i) => {
                      return (
                        <div key={i} className="__list">
                          <div className="_icon">
                            <i className="bx bx-check"></i>
                          </div>

                          <p>{x}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="__outcomes">
          <div className="__left">
            {storedData.overview.map((x, i) => {
              return (
                <div key={i} className="__top">
                  <h1>{x.title}</h1>

                  {x.description.map((y, i) => {
                    return <p key={i}>{y}</p>;
                  })}
                </div>
              );
            })}
          </div>

          <div className="__right">
            <div className="__box">
              <div className="__heading">
                <h1>Get Free Consultation Now</h1>
              </div>

              <div className="__form">
                <div className="__input">
                  <span>Your Name</span>
                  <input type="text" placeholder="Your Name" />
                </div>

                <div className="__input">
                  <span>Your Email</span>
                  <input type="email" placeholder="Your Email Address" />
                </div>

                <div className="__input">
                  <span>Your Phone</span>
                  <input type="number" placeholder="Your Phone Number" />
                </div>

                <div className="__input">
                  <span>Name</span>
                  <input type="text" placeholder="Your Name" />
                </div>

                <div className="__button">
                  <button type="button">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Services />

        <div className="__faq-container">
          <div className="__heading">
            <span className="page_title">FAQ</span>
            <h1>Any Questions? Look Here</h1>
          </div>

          <div className="__faq">
            {/* First FAQ Item */}
            <div className="__faqs">
              <div className="__icon">
                <img src={faqIcon} alt="FAQ Icon" />
              </div>

              <div className="__question">
                <h3>How long does it take to register a Pvt Ltd Company?</h3>
                <p>
                  The registration process for a Pvt Ltd Company typically takes
                  10-15 business days. This includes document submission,
                  verification, and the issuance of your Certificate of
                  Incorporation.
                </p>
              </div>
            </div>

            {/* Second FAQ Item */}
            <div className="__faqs">
              <div className="__icon">
                <img src={faqIcon} alt="FAQ Icon" />
              </div>

              <div className="__question">
                <h3>What is a Digital Signature Certificate?</h3>
                <p>
                  A Digital Signature Certificate (DSC) is an electronic version
                  of a physical signature. It's used to sign documents
                  digitally, ensuring security and authenticity for electronic
                  records.
                </p>
              </div>
            </div>

            {/* Third FAQ Item */}
            <div className="__faqs">
              <div className="__icon">
                <img src={faqIcon} alt="FAQ Icon" />
              </div>

              <div className="__question">
                <h3>Can I register a trademark for my business name?</h3>
                <p>
                  Yes, registering a trademark for your business name or logo
                  provides legal protection and exclusive rights to your brand
                  within your jurisdiction.
                </p>
              </div>
            </div>

            {/* Fourth FAQ Item */}
            <div className="__faqs">
              <div className="__icon">
                <img src={faqIcon} alt="FAQ Icon" />
              </div>

              <div className="__question">
                <h3>How do I apply for a Sole Proprietor registration?</h3>
                <p>
                  Applying for a Sole Proprietor registration is simple and
                  requires minimal documentation. You’ll need proof of identity,
                  address, and your business name, after which we can guide you
                  through the entire process.
                </p>
              </div>
            </div>
          </div>

          <div className="button">
            <Link to="/faq">
              <button type="button">
                View All <i className="bx bx-arrow-back"></i>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
