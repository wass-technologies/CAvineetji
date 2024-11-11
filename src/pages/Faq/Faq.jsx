import React from "react";
import "./Faq.scss";

import faqIcon from "../../assets/Images/Home/faq.png";
import { Link } from "react-router-dom";

const Faq = () => {
  return (
    <div id="faq-page">
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
                of a physical signature. It's used to sign documents digitally,
                ensuring security and authenticity for electronic records.
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

          {/* Fifth FAQ Item */}
          <div className="__faqs">
            <div className="__icon">
              <img src={faqIcon} alt="FAQ Icon" />
            </div>
            <div className="__question">
              <h3>What documents are needed for GST registration?</h3>
              <p>
                For GST registration, you’ll need identity proof, address proof,
                business registration documents, and bank account information.
                Our team can help ensure all documents are in order.
              </p>
            </div>
          </div>
          
          {/* Sixth FAQ Item */}
          <div className="__faqs">
            <div className="__icon">
              <img src={faqIcon} alt="FAQ Icon" />
            </div>
            <div className="__question">
              <h3>Do I need a separate PAN for my company?</h3>
              <p>
                Yes, a company requires its own PAN (Permanent Account Number)
                for tax purposes, separate from individual PANs of its owners.
                We assist in obtaining a PAN for your company.
              </p>
            </div>
          </div>

          {/* Seventh FAQ Item */}
          <div className="__faqs">
            <div className="__icon">
              <img src={faqIcon} alt="FAQ Icon" />
            </div>
            <div className="__question">
              <h3>Can a foreigner register a company in India?</h3>
              <p>
                Yes, foreign nationals can register a company in India. Certain
                regulatory requirements and documentation are necessary, and we
                can assist with the entire process.
              </p>
            </div>
          </div>

          {/* Eighth FAQ Item */}
          <div className="__faqs">
            <div className="__icon">
              <img src={faqIcon} alt="FAQ Icon" />
            </div>
            <div className="__question">
              <h3>How do I apply for an MSME registration?</h3>
              <p>
                MSME registration is available online with basic details
                about your business, including industry type and investment.
                Our team can help guide you through the application.
              </p>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Faq;
