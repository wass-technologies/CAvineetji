import React from "react";
import "./Footer.scss";

import envImage from "../../assets/Images/Logo/CA India Logo.png";
import logo from '../../assets/Images/Logo/WhatsApp Image 2024-11-11 at 18.34.47.jpeg'

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id="footer">
      <div className="__footer-box">
        <div className="__list">
          <div className="__logo">
            <img src={envImage} alt="Logo" />
          </div>

          <div className="__description">
            <p>
              we specialize in helping students transition from high school or
              ege to pursue their educational aspirations abroad. With a
              dedicated team of.
            </p>
          </div>
        </div>

        <div className="__list list-center">
          <div className="__v">
            <div className="__box">
              <h3>Menu</h3>
              <ul>
                <li>
                  <span>Home</span>
                </li>
                <li>
                  <span>About</span>
                </li>
                <li>
                  <span>Services</span>
                </li>
                <li>
                  <span>Contact</span>
                </li>

                <li>
                  <Link to="/privicy-policy">
                    <span>Privicy Policy</span>
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
                <Link to="https://incometaxindia.gov.in/Pages/default.aspx">
                  <span>Income Tax Dept.</span>
                </Link>
              </li>

              <li>
                <Link to="https://www.gst.gov.in/">
                  <span>Goods & Services Tax (GST) </span>
                </Link>
              </li>

              <li>
                <Link to="https://onlineservices.tin.egov-nsdl.com/etaxnew/tdsnontds.jsp">
                  <span>E-Tax Information Network</span>
                </Link>
              </li>

              <li>
                <Link to="https://www.mca.gov.in/content/mca/global/en/home.html">
                  <span>Ministry of Corporate Affairs</span>
                </Link>
              </li>

              <li>
                <Link to="/https://www.epfindia.gov.in/site_en/index.php">
                  <span>Employees Provident Fund</span>
                </Link>
              </li>

              <li>
                <a target="_blank" href="https://www.icai.org/">
                  <span>ICAI</span>
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
                Astra Tower, ASO-303, Newtown , Action Area, II Kolkata-700161
              </li>
              <li>033-35911573 / +91 9830699363 </li>
              <li>
                <a href="">
                  <i className="bx bxl-facebook"></i>
                </a>
                <a href="">
                  <i className="bx bxl-youtube"></i>
                </a>
                <a href="">
                  <i className="bx bxl-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="__copyright">
        <div className="__left">
          <div className="__logo">
            <img
              src={logo}
              alt="Logo"
            />
          </div>

          <p>@copyright 2024 Lancashire, All rights reserved.</p>
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
