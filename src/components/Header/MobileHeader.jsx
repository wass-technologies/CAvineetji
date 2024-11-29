import React, { useEffect, useState } from "react";
import "./Header.scss";
import { Link, NavLink } from "react-router-dom";
import { servicesData } from "../../constant";

import CA_Logo from "../../assets/Images/Logo/Logo.jpeg";

const MobileHeader = () => {
  const [menu, setMenu] = useState(false);
  const [headerMenu, setHeaderMenu] = useState("");

  const data = servicesData[0].data;

  const handleLink = (id) => {
    const filteredData = data.filter((x) => x.id === id);
    localStorage.setItem("serviceData", JSON.stringify(filteredData[0]));
    setTimeout(() => {
      window.location.href = `/service/${id}`;
    }, 200);
  };

  useEffect(() => {
    const texts = document.querySelector(".text-animation");

    if (texts) {
      const children = texts.children;
      const textLength = children.length;
      let index = 0;

      const animate = () => {
        for (let i = 0; i < textLength; i++) {
          children[i].classList.remove("text-in");
        }

        children[index].classList.add("text-in");

        index = (index + 1) % textLength;
      };

      animate();
      const intervalId = setInterval(animate, 2000);
      return () => {
        clearInterval(intervalId);
      };
    }
  }, []);

  return (
    <div className="__mobile-header">
      <div className="__logo">
        <NavLink to="/">
          <img src={CA_Logo} alt="Logo" />
        </NavLink>

        <div className="text-animation">
          <span>SVC & Associates</span>
          <span>Chartered Accountant</span>
        </div>
      </div>

      <div className="__menu">
        {menu === true ? (
          <i onClick={() => setMenu(!menu)} className="bx bx-x"></i>
        ) : (
          <i onClick={() => setMenu(!menu)} className="bx bx-menu"></i>
        )}
      </div>

      <div className={`__mobile-menu ${menu === true && "_active-menu"}`}>
        <ul>
          <li>
            <p onClick={() => setHeaderMenu("Startup")}>Startup</p>
            {headerMenu === "Startup" && (
              <div onClick={() => setMenu(false)} className="__submenu">
                <p onClick={() => handleLink("Pvt_Ltd_Company_Registration")}>
                  Pvt Ltd Company Registration
                </p>
                <p onClick={() => handleLink("LLP_Registration_Online")}>
                  LLP Registration Online
                </p>

                <p onClick={() => handleLink("OPC_Registration_Online")}>
                  OPC Registration Online
                </p>

                <p onClick={() => handleLink("FSSAI_Registration")}>
                  FSSAI Registration
                </p>
                <p onClick={() => handleLink("MSME_Registration")}>
                  MSME Registration
                </p>
              </div>
            )}
          </li>

          <li>
            <p onClick={() => setHeaderMenu("GST")}>GST</p>
            {headerMenu === "GST" && (
              <div onClick={() => setMenu(false)} className="__submenu">
                <p onClick={() => handleLink("GST_Registration_Online")}>
                  GST Registration Online
                </p>

                <p onClick={() => handleLink("GST_Lut_Filing")}>
                  GST LUT Filing
                </p>

                <p onClick={() => handleLink("GST_Registration_Cancellation")}>
                  GST Registration Cancellation
                </p>

                <p onClick={() => handleLink("GST_Advisory_Services")}>
                  GST Advisory Services
                </p>

                <p onClick={() => handleLink("GST_Return_Filing")}>
                  GST Return Filing
                </p>

                <p onClick={() => handleLink("GST_Annual_Return_Filing")}>
                  GST Annual Return Filing
                </p>
              </div>
            )}
          </li>

          <li>
            <p onClick={() => setHeaderMenu("Income_Tax")}>Income Tax</p>

            {headerMenu === "Income_Tax" && (
              <div onClick={() => setMenu(false)} className="__submenu">
                <p onClick={() => handleLink("Income_Tax_Return_Filing")}>
                  Income Tax Return Filing
                </p>

                <p onClick={() => handleLink("TDS_Return_Filing")}>
                  TDS Return Filing
                </p>

                <p onClick={() => handleLink("PF_Return_Filing")}>
                  PF Return Filing
                </p>

                <p onClick={() => handleLink("ITR-2_Form_Filing")}>
                  ITR-2 Form Filing
                </p>

                <p onClick={() => handleLink("ITR-3_Form_Filing")}>
                  ITR-3 Form Filing
                </p>

                <p onClick={() => handleLink("ITR-4_Form_Filing")}>
                  ITR-4 Form Filing
                </p>
              </div>
            )}
          </li>

          <li>
            <p onClick={() => setHeaderMenu("Tax_Compliance")}>
              Tax & Compliance
            </p>

            {headerMenu === "Tax_Compliance" && (
              <div onClick={() => setMenu(false)} className="__submenu">
                <p onClick={() => handleLink("Annual_Compliance_for_pvt_ltd")}>
                  Annual Compliance for Pvt Ltd
                </p>
                <p onClick={() => handleLink("DIR-3_KYC_Filing_Online")}>
                  DIR-3 KYC Filing Online
                </p>
                <p onClick={() => handleLink("Annual_Filing_for_LLP")}>
                  Annual Filing for LLP
                </p>
                <p onClick={() => handleLink("Section_8_Company_Compliance")}>
                  Section 8 Company Compliance
                </p>

                <p
                  onClick={() =>
                    handleLink("Conversion_of_Sole_Proprietorship_to_Pvt_Ltd")
                  }
                >
                  Conversion of Sole Proprietorship to Pvt Ltd
                </p>

                <p
                  onClick={() =>
                    handleLink("Event-Based_Compliances_for_Companies")
                  }
                >
                  Event-Based Compliances for Companies
                </p>
                <p
                  onClick={() =>
                    handleLink("Annual_Compliance_for+One_Person_Company")
                  }
                >
                  Annual Compliance for One Person Company
                </p>
                <p
                  onClick={() =>
                    handleLink("Appointment_and_Resignation_of_Director")
                  }
                >
                  Appointment and Resignation of Director
                </p>
                <p onClick={() => handleLink("NGO_Registration_Online")}>
                  Change in Name Clause
                </p>
              </div>
            )}
          </li>

          <li>
            <p onClick={() => setHeaderMenu("NGO")}>NGO</p>

            {headerMenu === "NGO" && (
              <div onClick={() => setMenu(false)} className="__submenu">
                <p onClick={() => handleLink("NGO_Registration_Online")}>
                  NGO Registration Online
                </p>
                <p onClick={() => handleLink("Trust_Registration")}>
                  Trust Registration
                </p>
                <p onClick={() => handleLink("Section_8_Company_Registration")}>
                  Section 8 Company Registration
                </p>
                <p onClick={() => handleLink("FCRA_Registration")}>
                  FCRA Registration
                </p>
                <p onClick={() => handleLink("80G_and_12A_Registration")}>
                  80G and 12A Registration
                </p>
                <p onClick={() => handleLink("12AA_Registration")}>
                  12AA Registration
                </p>
              </div>
            )}
          </li>

          <li onClick={() => setMenu(false)}>
            <NavLink to="/about">
              <p>About</p>
            </NavLink>
          </li>
          <li onClick={() => setMenu(false)}>
            <NavLink to="/blogs">
              <p>Blog</p>
            </NavLink>
          </li>
          <li onClick={() => setMenu(false)}>
            <NavLink to="/contact">
              <p>Contact</p>
            </NavLink>
          </li>

          <li onClick={() => setMenu(false)}>
            <Link to="/privicy-policy">
              <p>Privacy Policy</p>
            </Link>
          </li>

          <li onClick={() => setMenu(false)}>
            <a target="_blank" href="https://www.icai.org/">
              <p>ICAI (India)</p>
            </a>
          </li>

          <li onClick={() => setMenu(false)}>
            <a
              target="_blank"
              href="https://incometaxindia.gov.in/Pages/default.aspx"
            >
              <p>Income Tax Dept.</p>
            </a>
          </li>

          <li onClick={() => setMenu(false)}>
            <a target="_blank" href="https://www.gst.gov.in/">
              <p>Goods & Services Tax (GST) </p>
            </a>
          </li>

          <li onClick={() => setMenu(false)}>
            <a
              target="_blank"
              href="https://onlineservices.tin.egov-nsdl.com/etaxnew/tdsnontds.jsp"
            >
              <p>E-Tax Information Network</p>
            </a>
          </li>

          <li onClick={() => setMenu(false)}>
            <a
              target="_blank"
              href="https://www.mca.gov.in/content/mca/global/en/home.html"
            >
              <p>Ministry of Corporate Affairs</p>
            </a>
          </li>

          <li onClick={() => setMenu(false)}>
            <a
              target="_blank"
              href="https://www.epfindia.gov.in/site_en/index.php"
            >
              <p>Employees Provident Fund</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileHeader;
