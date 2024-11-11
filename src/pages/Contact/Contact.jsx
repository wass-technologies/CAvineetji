import React, { useState } from "react";
import "./Contact.scss";

 
const Contact = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    enquiry: "",
    description: "",
  });

  // State for form errors
  const [formErrors, setFormErrors] = useState({});

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    // If the input is the phone number, allow only digits
    if (name === "phone") {
      const isValidPhone = /^[0-9]*$/.test(value);
      if (!isValidPhone) return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
    setFormErrors({
      ...formErrors,
      [name]: "",
    });
  };

  // Form validation
  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = "Please fill the name";
    if (!formData.email) errors.email = "Please fill the email";
    if (!formData.phone) errors.phone = "Please fill the phone number";
    if (!formData.state) errors.state = "Please select a state";
    if (!formData.enquiry) errors.enquiry = "Please fill the enquiry field";
    if (!formData.description)
      errors.description = "Please fill the description";

    return errors;
  };

  // Handle form submission
  const handleSubmit = () => {
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      console.log("Form submitted successfully", formData);
    }
  };

  const IndiaStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Lakshadweep",
    "Delhi",
    "Puducherry",
  ];

  return (
    <div id="contact">
      <div className="__contact-heading">
        <h1>Contact Us now!</h1>

        <p>
          assisting Global Enterprises in bringing their vision to life using
          various technologies and strategies to increase business efficiency
          and competitiveness with incredible solutions. There is no
          "one-size-fits-all" solution. We are strong proponents of teamwork,
          and our all-inclusive digital solutions and consultancy help companies
          smoothly adapt into the modern digital environment.
        </p>
      </div>

      <div className="box">
        <div className="left">
          <a href="tel:+919763500291" className="left-items">
            <i className="bx bx-phone"></i>
            <p>033-35911573</p>
          </a>

          <a
            href="https://wa.link/9sbw44"
            target="_blank"
            className="left-items"
          >
            <i className="bx bxl-whatsapp"></i>
            <p>+91 9830699363</p>
          </a>

          <a
            href="mailto:svcassociates.in@gmail.com"
            target="_blank"
            className="left-items"
          >
            <i className="bx bx-envelope"></i>
            <p>svcassociates.in@gmail.com</p>
          </a>

          <a
            href="https://www.google.com/maps?rlz=1C1ONGR_en-GBIN1091IN1091&gs_lcrp=EgZjaHJvbWUqEggDEC4YJxivARjHARiABBiKBTIGCAAQRRg8MgYIARBFGDwyBggCEEUYOTISCAMQLhgnGK8BGMcBGIAEGIoFMgYIBBBFGDwyBggFEEUYPDIGCAYQRRhBMgYIBxBFGEHSAQgyMDE1ajFqN6gCALACAA&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KX84HIaEcQI6MSZuT2_F56jr&daddr=128,+Jodhpur+Gardens,+Lake+Gardens,+Kolkata,+West+Bengal+700045"
            className="left-items"
            target="_blank"
          >
            <i className="bx bx-location-plus"></i>
            <span>Astra Tower, ASO-303, Newtown , Action Area, II Kolkata-700161</span>
          </a>

          <div className="followus">
            <h4>FOLLOW US</h4>
            <div className="links">
              <a
                href="https://www.facebook.com/webappssoftwaresolutions"
                target="_blank"
              >
                <i className="bx bxl-facebook-circle"></i>
              </a>

              <a
                href="https://www.linkedin.com/company/webapps-softwares-solutions/mycompany/verification/"
                target="_blank"
              >
                <i className="bx bxl-instagram-alt"></i>
              </a>

              <a
                href="https://www.instagram.com/webappssoftware"
                target="_blank"
              >
                <i className="bx bxl-twitter"></i>
              </a>

              <a href="https://twitter.com/webappsoftwares" target="_blank">
                <i className="bx bxl-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="right">
          <h4>Quick Connect </h4>

          <div className="form">
            <div className="flex-row">
              <div className="input-item">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                {formErrors.name && <p className="err">{formErrors.name}</p>}
              </div>

              <div className="input-item">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {formErrors.email && <p className="err">{formErrors.email}</p>}
              </div>
            </div>

            <div className="flex-row">
              <div className="input-item">
                <input
                  type="text"
                  placeholder="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength="10"
                />
                {formErrors.phone && <p className="err">{formErrors.phone}</p>}
              </div>

              <div className="input-item">
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                >
                  <option value="">State</option>
                  {IndiaStates.map((x, i) => {
                    return (
                      <option key={i} value={x.name}>
                        {x}
                      </option>
                    );
                  })}
                </select>
                {formErrors.state && <p className="err">{formErrors.state}</p>}
              </div>
            </div>

            <div className="input-item">
              <input
                type="text"
                placeholder="Enquiry for"
                name="enquiry"
                value={formData.enquiry}
                onChange={handleChange}
              />
              {formErrors.enquiry && (
                <p className="err">{formErrors.enquiry}</p>
              )}
            </div>

            <div className="input-item">
              <textarea
                name="description"
                cols="30"
                rows="3"
                placeholder="Short Description"
                value={formData.description}
                onChange={handleChange}
              ></textarea>
              {formErrors.description && (
                <p className="err">{formErrors.description}</p>
              )}
            </div>

            <div className="btn">
              <div className="button" type="button" onClick={handleSubmit}>
                Submit
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
