import React, { useEffect, useState } from "react";
import "./Career.scss";

import heroImg from "../../assets/Images/Career/banenr-career.png";

import step1 from "../../assets/Images/Career/step1.png";
import step2 from "../../assets/Images/Career/step2.png";
import step3 from "../../assets/Images/Career/step3.png";
import step4 from "../../assets/Images/Career/step4.png";

const Career = () => {
  return (
    <div id="career-page">
      <div className="__hero">
        <div className="left">
          <h1>Earn 2 to 3 times your ent income and transform your life!</h1>
          <p>
            Don't just be an employee, become a partner. Join a thriving
            community of over 1,000 healthcare professionals Don't just be an
            employee, become a partner. Join a thriving community of over 1,000
            healthcare professionals
          </p>

          <button type="button">Learn</button>
        </div>

        <div className="__right">
          <img src={heroImg} alt="heroImg" />
        </div>
      </div>

      <div className="__open-position">
        <h2>Join us in following categories</h2>

        <div className="__open-job-container">
          <div className="__job-box">
            <div className="__jobname">Staff Nurse</div>

            <div className="__icon">
              <div className="left">
                <i className="bx bxs-briefcase"></i>
                <span>On-Site</span>
              </div>

              <div className="left">
                <i className="bx bxs-location-plus"></i>
                <span>Bengalore, KN</span>
              </div>
            </div>

            <div className="__action">
              <button type="button">Apply now</button>

              <div className="__no-vaction">
                <h1>2</h1>
                <p>No of vacancies</p>
              </div>
            </div>

            <div className="__date-posted">01 Jan, 2030</div>
          </div>

          <div className="__job-box">
            <div className="__jobname">
              Consultation Doctor(General physician)
            </div>

            <div className="__icon">
              <div className="left">
                <i className="bx bxs-briefcase"></i>
                <span>On-Site</span>
              </div>

              <div className="left">
                <i className="bx bxs-location-plus"></i>
                <span>Bengalore, KN</span>
              </div>
            </div>

            <div className="__action">
              <button type="button">Apply now</button>

              <div className="__no-vaction">
                <h1>2</h1>
                <p>No of vacancies</p>
              </div>
            </div>

            <div className="__date-posted">01 Jan, 2030</div>
          </div>

          <div className="__job-box">
            <div className="__jobname">Physiotherapist</div>

            <div className="__icon">
              <div className="left">
                <i className="bx bxs-briefcase"></i>
                <span>On-Site</span>
              </div>

              <div className="left">
                <i className="bx bxs-location-plus"></i>
                <span>Bengalore, KN</span>
              </div>
            </div>

            <div className="__action">
              <button type="button">Apply now</button>

              <div className="__no-vaction">
                <h1>2</h1>
                <p>No of vacancies</p>
              </div>
            </div>

            <div className="__date-posted">01 Jan, 2030</div>
          </div>

          <div className="__job-box">
            <div className="__jobname">Dietician -Nutritionist</div>

            <div className="__icon">
              <div className="left">
                <i className="bx bxs-briefcase"></i>
                <span>On-Site</span>
              </div>

              <div className="left">
                <i className="bx bxs-location-plus"></i>
                <span>Bengalore, KN</span>
              </div>
            </div>

            <div className="__action">
              <button type="button">Apply now</button>

              <div className="__no-vaction">
                <h1>2</h1>
                <p>No of vacancies</p>
              </div>
            </div>

            <div className="__date-posted">01 Jan, 2030</div>
          </div>
        </div>
      </div>

      <div className="__lear-recurtmwent">
        <div className="__left">
          <h1>How Company Works</h1>

          <p>
            The recruitment process begins with submission of CVs, followed by
            phone screening, assessment and a final interview. At Elejobly we
            believe in working together and working hard. The recruitment
            process begins with submission of CVs, followed by phone screening,
            assessment and a final interview. At Elejobly we believe in working
            together and working hard.
          </p>

          <p>
            With over 800,000 happy clients, we are looking for dynamic and
            creative individuals who are willing to dedicate themselves to The
            recruitment process begins with submission of CVs, followed by phone
            screening, assessment and a final interview. At Elejobly we believe
            in working together and working hard. .
          </p>

          <p>
            The recruitment process begins with submission of CVs, followed by
            phone screening, assessment and a final interview. At Elejobly we
            believe in working together and working hard.
          </p>

          <button type="button">Learn More</button>
        </div>

        <div className="__right">
          <div className="__step-container">
            <div className="__box">
              <img src={step1} alt="one" />
              <h4>Set your own schedule and</h4>
              <p>
                We offer our partners the opportunity to become entrepreneurs
                and work one.
              </p>
            </div>

            <div className="__box">
              <img src={step3} alt="one" />
              <h4>Use our company to tell us</h4>
              <p>
                We’ll line up jobs for you in your desired location and time
                slots
              </p>
            </div>
          </div>

          <div className="__step-container">
            <div className="__box">
              <img src={step2} alt="one" />
              <h4>Get paid weekly</h4>
              <p>We ensure your peace of mind with automated weekly payouts</p>
            </div>

            <div className="__box">
              <img src={step4} alt="one" />
              <h4>Final Interview</h4>
              <p>
                If you can pass all stages we will invite you for a final
                interview with our CEO and HR executive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
