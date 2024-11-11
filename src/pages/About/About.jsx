import React from "react";
import "./About.scss";

import veenit from "../../assets/Images/Team/vineet.jpeg";
import veenita from "../../assets/Images/Team/veenita.jpeg";
import banner from "../../assets/Images/bg/About.jpg";

const About = () => {
  return (
    <div id="about-page">
      <div className="___banner-box">
        <div className="__container-box">
          <div className="__box">
            <div className="__left">
              <div className="__banner">
                <img src={banner} alt="About SVC & Associates Banner" loading="lazy" />
              </div>
            </div>

            <div className="__right">
              <div className="__top">
                <h1>Welcome to SVC & ASSOCIATES</h1>
                <div className="__points">
                  <div className="__list">
                    <p>
                      SVC & ASSOCIATES is a leading accounting and advisory firm located
                      in Kolkata and Bangalore, delivering specialized financial services
                      in areas such as taxation, auditing, financial consulting, and startup
                      advisory. With a seasoned team of Chartered Accountants and financial
                      experts, we are dedicated to providing customized, growth-oriented financial
                      solutions that adhere to the highest standards of compliance and ethics.
                    </p>
                  </div>

                  <div className="__list">
                    <p>
                      Over the years, we have built a robust legacy of trust and excellence
                      in the industry. Our mission is to simplify financial complexities for
                      individuals and businesses, ensuring they navigate the regulatory landscape
                      with confidence and strategic insight.
                    </p>
                  </div>

                  <button>Book a Consultation <i className="bx bx-phone"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* -------------------------------------------- Section 1 -------------------------------------------------------- */}
      <div className="section1_container">
        <div className="container">
          <div className="section1">
            <div className="left_section1">
              <h2>Our Expertise</h2>
              <p>
                At SVC & ASSOCIATES, we provide tailored financial solutions with a deep
                understanding of taxation, regulatory compliance, and financial strategy.
                We work with clients across various industries, offering specialized guidance
                in areas like GST, corporate restructuring, and risk management. Our team
                is well-equipped to handle complex financial landscapes, ensuring compliance
                while maximizing value.
              </p>
              <p>
                We pride ourselves on a client-focused approach, combining technical expertise
                with practical insights to help businesses and individuals thrive. From startups
                to large enterprises, our mission is to be a trusted advisor and a strategic partner
                in each client’s financial journey.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* -------------------------------------------- Section 2 -------------------------------------------------------- */}
      <div className="section2_container">
        <div className="container">
          <div className="section2">
            <div className="right_section2">
              <h2>Our Mission</h2>
              <p>
                Our mission is to empower our clients—individuals, startups, and established
                enterprises—through expert financial solutions that support compliance, reduce risk,
                and promote sustainable growth. At SVC & ASSOCIATES, we believe in delivering the
                highest standards of professionalism, integrity, and dedication to foster our clients'
                long-term success.
              </p>
              <p>
                By offering strategic advice in areas such as tax compliance, GST regulations,
                audits, and financial planning, we enable clients to make informed, sound financial
                decisions. Our goal is to simplify the complexities of finance, helping clients focus
                on their core objectives while ensuring regulatory peace of mind.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* -------------------------------------------- Section 3 -------------------------------------------------------- */}
      <div className="section3_container">
        <div className="container">
          <div className="section3">
            <div className="left_section3">
              <h2>Our Journey</h2>
              <p>
                Founded by CA Vineet Chirania and CA Sonam Chirania, SVC & ASSOCIATES
                began as a vision to bring high-quality, client-centered accounting and financial
                consulting to Kolkata and Bangalore. With combined expertise in tax, GST, audit,
                business advisory, and startup consulting, our founders have cultivated a firm
                grounded in ethics, integrity, and a commitment to client success.
              </p>
              <p>
                Over the years, we have grown our team, expanded our service offerings, and
                broadened our client base to serve businesses of all sizes across multiple industries.
                Our clients range from emerging startups to well-established enterprises, and
                we are proud to provide solutions that drive their financial success. Today,
                SVC & ASSOCIATES stands as a trusted name, renowned for our dedication and
                personalized approach.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* -------------------------------------------- Section 4 -------------------------------------------------------- */}
      <div className="section4_container">
        <div className="container">
          <div className="section4">
            <div className="__heading">
              <h2>Meet Our Leaders</h2>
              <p>
                Our leadership team brings together decades of experience across domains
                like auditing, taxation, finance, and business consulting. With over 100 years
                of combined industry knowledge, our leaders are dedicated to providing
                insightful, high-quality service that aligns with our clients' strategic goals.
              </p>
            </div>

            <div className="section4_boxes">
              {/* CA Vineet Chirania */}
              <div className="team-member">
                <img src={veenit} alt="CA Vineet Chirania - Managing Partner" />
                <div className="member-details">
                  <h3>CA Vineet Chirania</h3>
                  <h4>Managing Partner</h4>
                  <p>
                    With over 15 years in the field, CA Vineet Chirania specializes in taxation,
                    financial consulting, and audit. His expertise lies in helping businesses
                    navigate complex tax and regulatory environments with tailored, strategic insights.
                  </p>
                  <p>
                    Email:{" "}
                    <a href="mailto:vineet@svcassociates.in">vineet@svcassociates.in</a>
                  </p>
                </div>
              </div>

              {/* CA Sonam Chirania */}
              <div className="team-member">
                <img src={veenita} alt="CA Sonam Chirania - Managing Partner" />
                <div className="member-details">
                  <h3>CA Sonam Chirania</h3>
                  <h4>Managing Partner</h4>
                  <p>
                    CA Sonam Chirania brings expertise in GST, startup advisory, and
                    business process optimization. She is known for her client-first approach
                    and has a track record of empowering clients to achieve regulatory compliance
                    and operational efficiency.
                  </p>
                  <p>
                    Email:{" "}
                    <a href="mailto:sonam@svcassociates.in">sonam@svcassociates.in</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
