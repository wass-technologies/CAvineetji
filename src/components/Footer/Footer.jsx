import React from "react";
import "./Footer.scss";

import envImage from "../../assets/Images/Logo/CA India Logo.png";
import logo from "../../assets/Images/Logo/Logo.jpeg";

import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div id="footer">
      <div className="__footer-box">
        <div className="__list">
          <div className="__logo">
            <img src={envImage} alt="Logo" />
          </div>
          <br />

          <div className="__description">
            <p>
              SVC & ASSOCIATES is a trusted and dynamic accounting firm based in
              Kolkata and Bangalore, specializing in providing comprehensive
              financial solutions across various industries, including auditing,
              taxation, corporate advisory, and financial management services.
            </p>
          </div>
        </div>

        <div className="__list list-center">
          <div className="__v">
            <div className="__box">
              <h3>Menu</h3>
              <ul>
                <li>
                  <NavLink to="/">
                    <span>Home</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about">
                    <span>About</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/blogs">
                    <span>Blog</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact">
                    <span>Contact</span>
                  </NavLink>
                </li>

                <li>
                  <Link to="/privicy-policy">
                    <span>Privacy Policy</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="__list list-center">
          <div className="__box">
            <h3>Useful Links</h3>
            <ul>
              <li>
                <a target="_blank" href="https://www.icai.org/">
                  <span>ICAI (India)</span>
                </a>
              </li>

              <li>
                <a
                  target="_blank"
                  href="https://incometaxindia.gov.in/Pages/default.aspx"
                >
                  <span>Income Tax Dept.</span>
                </a>
              </li>

              <li>
                <a target="_blank" href="https://www.gst.gov.in/">
                  <span>Goods & Services Tax (GST) </span>
                </a>
              </li>

              <li>
                <a
                  target="_blank"
                  href="https://onlineservices.tin.egov-nsdl.com/etaxnew/tdsnontds.jsp"
                >
                  <span>E-Tax Information Network</span>
                </a>
              </li>

              <li>
                <a
                  target="_blank"
                  href="https://www.mca.gov.in/content/mca/global/en/home.html"
                >
                  <span>Ministry of Corporate Affairs</span>
                </a>
              </li>

              <li>
                <a
                  target="_blank"
                  href="https://www.epfindia.gov.in/site_en/index.php"
                >
                  <span>Employees Provident Fund</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="__list list-last">
          <div className="__box">
            <h3>Our Address</h3>
            <ul>
              <li>
                Kolkata Office : Astra Tower, Unit No. ASO-303, Newtown, Action
                Area II, Kolkata- 700161
              </li>

              <li>Anuj Complex, H-1/16 VIP Road, Baguihati, Kolkata-700059</li>

              <li>
                Bangalore Office : IndiQube Aura, IBIS Hotel, Bommanahalli,
                Bengaluru- 560068
              </li>
              <li>033-35911573 / +91 9830699363 </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.facebook.com/svcassociates"
                >
                  <i className="bx bxl-facebook"></i>
                </a>
                <a href="">
                  <i className="bx bxl-youtube"></i>
                </a>
                <a href="">
                  <i className="bx bxl-instagram"></i>
                </a>

                <a
                  href="https://www.linkedin.com/company/svc-associates/"
                  target="_blank"
                >
                  <i className="bx bxl-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="__copyright">
        <div className="__left">
          <div className="__logo">
            <img src={logo} alt="Logo" />
          </div>

          <p>©2024 SVC & ASSOCIATES, All rights reserved.</p>
        </div>

        <div className="__right">
          <button className="button-50" role="button">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
