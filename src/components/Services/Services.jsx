import React from "react";
import "./Services.scss";
import { Link } from "react-router-dom";
import { servicesData } from "../../constant";

const Services = () => {
  const data = servicesData[0].data;

  const handleLink = (id) => {
    const filteredData = data.filter((x) => x.id === id);
    localStorage.setItem("serviceData", JSON.stringify(filteredData[0]));
    window.location.href = `/service/${id}`;
  };

  return (
    <div className="__our-categories">
      <span className="page_title">Our Services</span>
      <h1>
        We Provide India's <br /> Best Quality Services
      </h1>

      <div className="__categorie-card">
        <div
          onClick={() => handleLink("Pvt_Ltd_Company_Registration")}
          className="__card"
        >
          <img
            src="https://kanakkupillai.com/storage/256/office-building.png"
            alt="Pvt Ltd Registration"
          />
          <h3>Pvt Ltd Company Registration</h3>
          <p>
            Register your Private Limited company with ease and get your
            business started the right way.
          </p>
          <button type="button">
            Know More <span>&#x2192;</span>
          </button>
        </div>

        <div
          onClick={() => handleLink("GST_Registration_Online")}
          className="__card"
        >
          <img
            src="https://kanakkupillai.com/storage/268/gst.png"
            alt="GST Registration"
          />
          <h3>GST Registration Online</h3>
          <p>
            Get your GST registration done quickly and seamlessly to stay
            compliant with Indian tax laws.
          </p>
          <button type="button">
            Know More <span>&#x2192;</span>
          </button>
        </div>

        <div
          onClick={() => handleLink("LLP_Registration_Online")}
          className="__card"
        >
          <img
            src="https://kanakkupillai.com/storage/267/business-insurance.png"
            alt="LLP Registration"
          />
          <h3>LLP Registration Online</h3>
          <p>
            Form your Limited Liability Partnership (LLP) with a smooth online
            registration process.
          </p>
          <button type="button">
            Know More <span>&#x2192;</span>
          </button>
        </div>

        <div
          onClick={() => handleLink("OPC_Registration_Online")}
          className="__card"
        >
          <img
            src="https://kanakkupillai.com/storage/266/working.png"
            alt="OPC Registration"
          />
          <h3>OPC Registration Online</h3>
          <p>
            Register your One Person Company (OPC) with simple, hassle-free
            online services.
          </p>
          <button type="button">
            Know More <span>&#x2192;</span>
          </button>
        </div>

        <div
          onClick={() => handleLink("MSME_Registration")}
          className="__card"
        >
          <img
            src="https://kanakkupillai.com/storage/256/office-building.png"
            alt="MSME Registration"
          />
          <h3>MSME Registration</h3>
          <p>
            Get your MSME registration to unlock numerous benefits under
            government schemes.
          </p>
          <button type="button">
            Know More <span>&#x2192;</span>
          </button>
        </div>

        <div
          onClick={() => handleLink("IEC_Registration")}
          className="__card"
        >
          <img
            src="https://kanakkupillai.com/storage/267/business-insurance.png"
            alt="IEC Registration"
          />
          <h3>IEC Registration</h3>
          <p>
            Register for an Import Export Code (IEC) to start your global
            business journey.
          </p>
          <button type="button">
            Know More <span>&#x2192;</span>
          </button>
        </div>

        <div
          onClick={() => handleLink("FSSAI_Registration")}
          className="__card"
        >
          <img
            src="https://kanakkupillai.com/storage/268/gst.png"
            alt="FSSAI Registration"
          />
          <h3>FSSAI Registration</h3>
          <p>
            Ensure your food business is compliant with FSSAI regulations for
            smooth operations.
          </p>
          <button type="button">
            Know More <span>&#x2192;</span>
          </button>
        </div>

        <div
          onClick={() => handleLink("Trademark_Registration")}
          className="__card"
        >
          <img
            src="https://kanakkupillai.com/storage/266/working.png"
            alt="Trademark Registration"
          />
          <h3>Trademark Registration</h3>
          <p>
            Protect your brand with trademark registration for exclusive
            ownership rights.
          </p>
          <button type="button">
            Know More <span>&#x2192;</span>
          </button>
        </div>

        
      </div>
    </div>
  );
};

export default Services;
