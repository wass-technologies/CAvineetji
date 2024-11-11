import React, { useEffect, useState } from "react";
import "./Header.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { servicesData } from "../../constant";

import CA_Logo from "../../assets/Images/Logo/Logo.jpeg";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const data = servicesData[0].data;

  const handleLink = (id) => {
    const filteredData = data.filter((x) => x.id === id);
    localStorage.setItem("serviceData", JSON.stringify(filteredData[0]));
    window.location.href = `/service/${id}`;
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
    <div id="header">
      <div className="__bottom-header">
        <div className="__left">
          <div className="__logo">
            

            <div className="__rgt">
              <NavLink to="/">
                <img src={CA_Logo} alt="Logo" />
              </NavLink>

              <div className="text-animation">
              <span>SVC & Associates</span>
              <span>Chartered Accountant</span>
            </div>
            </div>


          </div>

          <div className="__list">
            <div className="lists">
              <p className="__hov-name">
                GST <i className="bx bx-chevron-down"></i>
              </p>

              <div className="__dropdown-menu">
                <div className="__container">
                  <div className="__menu">
                    <div className="__non-flex">
                      <p onClick={() => handleLink("GST_Registration_Online")}>
                        GST Registration Online
                      </p>

                      <p onClick={() => handleLink("GST_Lut_Filing")}>
                        GST LUT Filing
                      </p>

                      <p
                        onClick={() =>
                          handleLink("GST_Registration_Cancellation")
                        }
                      >
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
                  </div>
                </div>
              </div>
            </div>

            <div className="lists">
              <p>
                Income Tax <i className="bx bx-chevron-down"></i>
              </p>

              <div className="__dropdown-menu">
                <div className="__container">
                  <div className="__menu">
                    <div className="__flex">
                      <div className="__left-menu">
                        <h3>Taxation</h3>

                        <p
                          onClick={() => handleLink("Income_Tax_Return_Filing")}
                        >
                          Income Tax Return Filing
                        </p>

                        <p onClick={() => handleLink("TDS_Return_Filing")}>
                          TDS Return Filing
                        </p>

                        <p onClick={() => handleLink("PF_Return_Filing")}>
                          PF Return Filing
                        </p>
                      </div>
                      <div className="__right-menu">
                        <h3>Tax Filing</h3>

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
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lists">
              <p>
                Tax & Compliance <i className="bx bx-chevron-down"></i>
              </p>

              <div className="__dropdown-menu">
                <div className="__container">
                  <div className="__menu">
                    <div className="__3flex">
                      <div className="__enu">
                        <h3>Secretarial Compliances</h3>
                        <p
                          onClick={() =>
                            handleLink("Annual_Compliance_for_pvt_ltd")
                          }
                        >
                          Annual Compliance for Pvt Ltd
                        </p>
                        <p
                          onClick={() => handleLink("DIR-3_KYC_Filing_Online")}
                        >
                          DIR-3 KYC Filing Online
                        </p>
                        <p onClick={() => handleLink("Annual_Filing_for_LLP")}>
                          Annual Filing for LLP
                        </p>
                        <p
                          onClick={() =>
                            handleLink("Section_8_Company_Compliance")
                          }
                        >
                          Section 8 Company Compliance
                        </p>

                        <p
                          onClick={() =>
                            handleLink(
                              "Conversion_of_Sole_Proprietorship_to_Pvt_Ltd"
                            )
                          }
                        >
                          Conversion of Sole Proprietorship to Pvt Ltd
                        </p>
                      </div>

                      <div className="__enu">
                        <h3>Event-Based Compliances</h3>
                        <p
                          onClick={() =>
                            handleLink("Event-Based_Compliances_for_Companies")
                          }
                        >
                          Event-Based Compliances for Companies
                        </p>
                        <p
                          onClick={() =>
                            handleLink(
                              "Annual_Compliance_for+One_Person_Company"
                            )
                          }
                        >
                          Annual Compliance for One Person Company
                        </p>
                        <p
                          onClick={() =>
                            handleLink(
                              "Appointment_and_Resignation_of_Director"
                            )
                          }
                        >
                          Appointment and Resignation of Director
                        </p>
                        <p
                          onClick={() => handleLink("NGO_Registration_Online")}
                        >
                          Change in Name Clause
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lists">
              <p>
                NGO <i className="bx bx-chevron-down"></i>
              </p>

              <div className="__dropdown-menu">
                <div className="__container">
                  <div className="__menu">
                    <div className="__non-flex">
                      <p onClick={() => handleLink("NGO_Registration_Online")}>
                        NGO Registration Online
                      </p>
                      <p onClick={() => handleLink("Trust_Registration")}>
                        Trust Registration
                      </p>
                      <p
                        onClick={() =>
                          handleLink("Section_8_Company_Registration")
                        }
                      >
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="__right">
          <div className="__list">
            <NavLink to="/about">
              <p>About</p>
            </NavLink>
          </div>

          <div className="__list">
            <NavLink to="/blogs">
              <p>Blog</p>
            </NavLink>
          </div>

          <div className="__list">
            <NavLink to="/contact">
              <p>Contact</p>
            </NavLink>
          </div>

          <div className="__list">
            <NavLink to="/faq">
              <p>Faq</p>
            </NavLink>
          </div>

          <div className="__button">
           <a target="_blank" href="https://api.whatsapp.com/send?phone=919088639363&text=Hi%2C%20SVC%20%26%20ASSOCIATES"> <button type="button">
              Quick Inquiry <span>&#x2192;</span>
            </button>
            </a>
          </div>
        </div>
      </div>

      <div className="__mobile-header">
        <div className="__logo">
          <NavLink to="/">
            <img
              src="https://www.kanakkupillai.com/storage/uploads/settings/app_logo_QtRG2zLXNvz6gebF8Wf0KtdipdUrzr7gC5KlXkSzHyhzto281Ku5ZzyEochcSReO.png"
              alt="Logo"
            />
          </NavLink>
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
              <p>GST</p>
              <div className="__submenu">
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
            </li>

            <li>
              <p>Income Tax</p>

              <div className="__submenu">
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
            </li>

            <li>
              <p>Tax & Compliance</p>

              <div className="__submenu">
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
            </li>

            <li>
              <p>NGO</p>

              <div className="__submenu">
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
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
