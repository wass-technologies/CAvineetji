import React from "react";
import "./About.scss";
import veenit from "../../assets/Images/Team/vineet.jpeg";
import veenita from "../../assets/Images/Team/veenita.jpeg";
import banner from "../../assets/Images/bg/About.jpg";

const TeamMember = ({ imgSrc, name, title, description, email }) => (
  <div className="team-member">
    <img src={imgSrc} alt={`${name} - ${title}`} />
    <div className="member-details">
      <h3>{name}</h3>
      <h4>{title}</h4>
      <p>{description}</p>
      <p>
        Email: <a href={`mailto:${email}`}>{email}</a>
      </p>
    </div>
  </div>
);

const MissionValuesExpertise = () => (
  <ul>
    <li>
      <i className="bx bx-check"></i> Delivering expert insights in taxation,
      GST, and financial compliance.
    </li>
    <li>
      <i className="bx bx-check"></i> Supporting businesses with tailored,
      strategic financial advice.
    </li>
    <li>
      <i className="bx bx-check"></i> Ensuring clients maximize value through
      compliance and risk management.
    </li>
    <li>
      <i className="bx bx-check"></i> Staying ahead of regulatory changes to
      keep clients informed.
    </li>
    <li>
      <i className="bx bx-check"></i> Focusing on sustainable financial growth
      for all clients.
    </li>
  </ul>
);

const MissionValuesMission = () => (
  <ul>
    <li>
      <i className="bx bx-check"></i> Simplifying business registration
      processes for new startups.
    </li>
    <li>
      <i className="bx bx-check"></i> Offering reliable legal and compliance
      solutions for client peace of mind.
    </li>
    <li>
      <i className="bx bx-check"></i> Providing a seamless experience for
      digital signatures, trademark registration, and more.
    </li>
    <li>
      <i className="bx bx-check"></i> Delivering fast processing times with
      personalized customer support.
    </li>
    <li>
      <i className="bx bx-check"></i> Building lasting relationships based on
      transparency and trust.
    </li>
  </ul>
);

const MissionValuesJourney = () => (
  <ul>
    <li>
      <i className="bx bx-check"></i> Building a legacy of trust, ethics, and
      dedication in financial services.
    </li>
    <li>
      <i className="bx bx-check"></i> Growing with a client-first philosophy to
      adapt to their evolving needs.
    </li>
    <li>
      <i className="bx bx-check"></i> Expanding services to empower businesses
      at every stage of growth.
    </li>
    <li>
      <i className="bx bx-check"></i> Staying committed to innovation in
      accounting and advisory solutions.
    </li>
    <li>
      <i className="bx bx-check"></i> Providing comprehensive solutions that
      align with clients’ strategic goals.
    </li>
  </ul>
);

const About = () => {
  return (
    <div id="about-page">
      <div className="___banner-box">
        <div className="__container-box">
          <div className="__box">
            <div className="__left">
              <div className="__banner">
                <img
                  src={banner}
                  alt="About SVC & Associates Banner"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="__right">
              <div className="__top">
                <h1>Welcome to SVC & ASSOCIATES</h1>
                <p>
                  SVC & ASSOCIATES is a trusted and dynamic accounting firm
                  based in Kolkata and Bangalore, specializing in providing
                  comprehensive financial solutions across various domains,
                  including taxation, auditing, business consulting, and startup
                  advisory services. Led by a team of experienced Chartered
                  Accountants, we are committed to delivering personalized
                  services with a focus on compliance, efficiency, and business
                  growth.
                </p>

                <p>
                  With a rich history and a proven track record, we aim to
                  simplify complex financial matters for individuals and
                  businesses, ensuring that they remain compliant with the
                  ever-evolving regulatory landscape. Our expertise extends
                  across all facets of accounting and business advisory, making
                  us your go-to partners for financial success.
                </p>

                <a
                  target="_blank"
                  href="https://api.whatsapp.com/send?phone=919088639363&text=Hi%2C%20SVC%20%26%20ASSOCIATES"
                >
                  <button aria-label="Book a Consultation">
                    Book a Consultation <i className="bx bx-phone"></i>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="__about">
        <div className="__left">
          <h1>Our Mission</h1>
          <p>
            Our mission is to empower individuals, startups, and businesses with
            expert financial solutions and tailored services that ensure
            compliance, minimize risks, and promote sustainable growth. At SVC &
            ASSOCIATES, we believe in providing the highest quality of
            professional services with integrity and commitment to our clients'
            success.
          </p>

          <p>
            We aim to guide businesses through the complexities of tax
            compliance, GST regulations, audits, and other financial matters,
            offering strategic advice and helping them make informed decisions
            for their financial well-being.
          </p>
          <h2>Our Mission and Values</h2>
          <MissionValuesMission />

          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=919088639363&text=Hi%2C%20SVC%20%26%20ASSOCIATES"
          >
            <button type="button" aria-label="Learn More About Our Mission">
              Know More
            </button>
          </a>
        </div>
        <div className="__right">
          <img
            src="https://framerusercontent.com/images/G70rSEY6AfoZPvecv1IrsJ8g.png?lossless=1"
            alt="About Our Company Image"
          />
        </div>
      </section>

      <section className="__about">
        <div className="__right">
          <img
            src="https://framerusercontent.com/images/G70rSEY6AfoZPvecv1IrsJ8g.png?lossless=1"
            alt="About Our Company Image"
          />
        </div>

        <div className="__left">
          <h1>Our Journey</h1>
          <p>
            SVC & ASSOCIATES was founded by two dynamic professionals, CA Vineet
            Chirania and CA Sonam Chirania, who brought together their
            collective expertise in taxation, GST, audit, business consulting,
            and startup advisory. Over the years, our firm has expanded its
            reach to serve clients across diverse industries, providing them
            with end-to-end financial solutions.
          </p>
          <p>
            Starting with a vision to create a reliable and customer-focused
            accounting firm, SVC & ASSOCIATES now stands as a recognized name in
            Kolkata and Bangalore, offering personalized solutions and adding
            value to businesses of all sizes.
          </p>
          <h2>Our Mission and Values</h2>
          <MissionValuesJourney />
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=919088639363&text=Hi%2C%20SVC%20%26%20ASSOCIATES"
          >
            <button type="button" aria-label="Learn More About Our Journey">
              Know More
            </button>
          </a>
        </div>
      </section>

      <section className="__about">
        <div className="__left">
          <h1>Our Expertise</h1>
          <p>
            At SVC & ASSOCIATES, we are committed to delivering tailored
            financial solutions that address the unique needs of each client.
            Our team brings a deep understanding of financial, regulatory, and
            strategic complexities across various industries, enabling us to
            offer targeted expertise in areas such as taxation, auditing, and
            corporate restructuring. By combining technical insight with
            practical guidance, we help clients navigate challenging financial
            landscapes while ensuring compliance and maximizing value. Our
            approach is client-centric and outcome-driven, dedicated to
            supporting businesses at every stage of their growth journey.
          </p>

          <h2>Our Mission and Values</h2>
          <MissionValuesExpertise />
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=919088639363&text=Hi%2C%20SVC%20%26%20ASSOCIATES"
          >
            <button type="button" aria-label="Learn More About Our Expertise">
              Know More
            </button>
          </a>
        </div>
        <div className="__right">
          <img
            src="https://framerusercontent.com/images/G70rSEY6AfoZPvecv1IrsJ8g.png?lossless=1"
            alt="About Our Company Image"
          />
        </div>
      </section>

      <div className="__core-value">
        <div className="heading">
          <h1>Meet Our Leaders</h1>
          <p>
            Our leadership team brings together decades of experience in
            finance, taxation, and consulting. With over 100 years of combined
            knowledge, our leaders align with our clients' strategic goals.
          </p>
        </div>

        <div className="__core-value-item">
          <div className="__value-list">
            <div className="__left bg-blue">
              <div className="__icon">
                <img src={veenit} alt="featureOne" />
              </div>

              <div className="__title">
                <h3>CA Vineet Chirania</h3>
                <h4>Managing Partner</h4>
                <a
                  href="https://www.linkedin.com/in/vineet-chirania-b8859720/"
                  target="_blank"
                  className="__link"
                >
                  <i className="bx bxl-linkedin-square"></i>
                  <span>Linkedin</span>
                </a>
                <p>
                  Specializing in taxation and consulting with 15+ years of
                  experience, Vineet assists businesses in navigating complex
                  regulatory landscapes.
                </p>
              </div>
            </div>

            <div className="__right">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="326"
                height="143"
                viewBox="0 0 326 143"
                fill="none"
                className="-ml-32 xl:ml-0 mt-20 order-2 hidden lg:block "
              >
                <path
                  d="M0.333008 1.74536L300.33 3.17052C313.584 3.23349 324.278 14.0296 324.215 27.2843L323.667 142.767"
                  stroke="#D1D1D1"
                  stroke-width="2"
                  opacity="1"
                  pathLength="1"
                  stroke-dashoffset="0px"
                  stroke-dasharray="1px 1px"
                ></path>
              </svg>
            </div>
          </div>

          <div className="__value-list2">
            <div style={{ opacity: 0 }} className="__right">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="325"
                height="143"
                viewBox="0 0 325 143"
                fill="none"
                className="-mr-32 xl:ml-0 mt-20 order-1 hidden lg:block "
              >
                <path
                  d="M324.996 1L24.9995 2.42516C11.7448 2.48813 1.0508 13.2842 1.11377 26.5389L1.66238 142.022"
                  stroke="#D1D1D1"
                  stroke-width="2"
                  opacity="1"
                  pathLength="1"
                  stroke-dashoffset="0px"
                  stroke-dasharray="1px 1px"
                ></path>
              </svg>
            </div>

            <div className="__left bg-yellow">
              <div className="__icon">
                <img src={veenita} alt="featureOne" />
              </div>

              <div className="__title">
                <h3>CA Sonam Chirania</h3>
                <h4>Managing Partner</h4>
                <a
                  href="https://www.linkedin.com/in/sonam-chirania-b243791b4/"
                  target="_blank"
                  className="__link"
                >
                  <i className="bx bxl-linkedin-square"></i>
                  <span>Linkedin</span>
                </a>
                <p>
                  Expert in GST, startup advisory, and process optimization,
                  Sonam empowers clients with regulatory compliance and
                  efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
