import React, { useEffect, useState } from "react";
import "./Home.scss";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { servicesData } from "../../constant";

import Pepols from "../../assets/Images/shape/peaple.png";
import homeBanner from "../../assets/Images/banners/Group 2 (1) (1) 1.png";
import ladySmile from "../../assets/Images/banners/Group 1.png";
import aboutUs from "../../assets/Images/banners/image 3.png";
import faqIcon from "../../assets/Images/Home/faq.png";
import Services from "../../components/Services/Services";
import avtar_icon from "../../assets/Images/Home/avatar.png";
import googleIcon from "../../assets/Images/icons/google (1).webp";
import audit_manager from "../../assets/Images/icons/audit-manager-compliance-.png";
import customer_satisfaction from "../../assets/Images/icons/customer-satisfaction.png";
import Google from "../../assets/Images/icons/Google.webp";
import reasonable from "../../assets/Images/icons/reasonable.webp";
import service from "../../assets/Images/icons/service.webp";
import turn_around from "../../assets/Images/icons/turn-around-clock.png";
import userImage from "../../assets/Images/Home/user.jpg";
import googleImage from "../../assets/Images/icons/Google.webp";
import whatsAppIcon from "../../assets/Images/icons/whatsapp-logo.png";

const Home = () => {
  const [customerCount, setCustomerCount] = useState(0);
  const targetCount = 164739;
  const data = servicesData[0].data;

  useEffect(() => {
    const incrementTime = 50;
    const step = Math.ceil(targetCount / 100);
    const counter = setInterval(() => {
      setCustomerCount((prevCount) => {
        if (prevCount + step >= targetCount) {
          clearInterval(counter);
          return targetCount;
        }
        return prevCount + step;
      });
    }, incrementTime);
  }, []);

  const handleLink = (id) => {
    const filteredData = data.filter((x) => x.id === id);
    localStorage.setItem("serviceData", JSON.stringify(filteredData[0]));
    window.location.href = `/service/${id}`;
  };

  const testimonials = [
    {
      name: "FM Office Dream Residency",
      companyLogo: googleImage,
      authorImage:
        "https://lh3.googleusercontent.com/a-/ALV-UjX_9nrKIhas8n_X0wfNtnTR9vYjXQj2rVP0PtyOKvz_UI2_Betx=s40-c-rp-mo-br100",
      text: "I had an excellent experience with this CA firm. Their team is professional, knowledgeable, and always goes the extra mile to ensure client satisfaction. They handled my financial matters with utmost care and provided clear, actionable advice. Highly recommend!",
      stars: 5,
    },
    {
      name: "Indranil Mondal",
      companyLogo: googleImage,
      authorImage:
        "https://lh3.googleusercontent.com/a-/ALV-UjXiecM4jwzwIBc5FZljScKrSzwm20DFhZJOotPgzXlVonBgFXiJ=s40-c-rp-mo-br100",
      text: "Great experience working with Vineet Ji and Shubhankar. They always maintains deadlines and clears all our doubts.",
      stars: 5,
    },
    {
      name: "K Kedia",
      companyLogo: googleImage,
      authorImage:
        "https://lh3.googleusercontent.com/a/ACg8ocKU3JjhWSnso9rXR-g5cLR7rJw_mP510DDruIDKERh2W0EQCw=s40-c-rp-mo-br100",
      text: "SVC & ASSOCIATES delivers an unparalleled level of service that defines excellence. From the initial engagement to the final result, their commitment to customer satisfaction is unwavering. With meticulous attention to detail, prompt responses, and a genuine passion for exceeding expectations, Vineet Ji has set a new standard for exceptional service. I enthusiastically recommend their services to anyone in search of a truly remarkable experience :)",
      stars: 5,
    },
    {
      name: "Ashis Choudhury",
      companyLogo: googleImage,
      authorImage:
        "https://lh3.googleusercontent.com/a-/ALV-UjXPSgRDWECjwdYMfFp5eR_nHIaC_yTijifvsjTO5zvTPpOohA2F=s40-c-rp-mo-br100",
      text: "Accurate and quick service. Very much professional. 2 years back, I approached other firm, they didn't do it and keep saying it will be done, no worries. Finally I reached out to vineet ji,  I had only 2 days left for filing, and he did it effortlessly.",
      stars: 4,
    },
    {
      name: "Moinak Dey",
      companyLogo: googleImage,
      authorImage:
        "https://lh3.googleusercontent.com/a-/ALV-UjVa24JrkDcWEWab4OldmWwhBcFOt_llWrC5ABI7vAqRKfWch0Fh=s40-c-rp-mo-ba2-br100",
      text: "Excellent services. On stop solution for all queries.",
      stars: 5,
    },
    {
      name: "Arijit Roy",
      companyLogo: googleImage,
      authorImage:
        "https://lh3.googleusercontent.com/a/ACg8ocI_1YT6rpAmxmiPWE2U4lSwpt0R2BAFjoA8raK3XJ_CwMlzqjM=s40-c-rp-mo-br100",
      text: "Satisfied with services provided by SVC & ASSOCIATES.",
      stars: 5,
    },
    {
      name: "Sudip Chandra",
      companyLogo: googleImage,
      authorImage:
        "https://lh3.googleusercontent.com/a-/ALV-UjW2pSklIUvCIAYDO_Oh1g0x25XlQ7jX7fqDu34J1zwBp-IMO4b7=s40-c-rp-mo-br100",
      text: "Be tension free about your financial matter with the association of SVC & ASSOCIATES",
      stars: 5,
    },
    {
      name: "Nitesh Saraf",
      companyLogo: googleImage,
      authorImage:
        "https://lh3.googleusercontent.com/a-/ALV-UjXKLvAJFauJ2T8c9DBL0AqdJL8Ta2rE97x3-3JhhNdSW6_vURK1=s40-c-rp-mo-br100",
      text: "Excellent services at reasonable cost.",
      stars: 5,
    },
    {
      name: "MANASHI ACHARYA",
      companyLogo: googleImage,
      authorImage:
        "https://lh3.googleusercontent.com/a-/ALV-UjXYk8EpBzmX7FQ_3yNmPahHXEIn1NcOAJ0lJeclxhdJK4nh7kGJ=s40-c-rp-mo-br100",
      text: "As previous year, this time also SVC&ASSOCIATES taken prompt action and cooperation for submitting the IT return.",
      stars: 5,
    },
    {
      name: "Ashok Sharma",
      companyLogo: googleImage,
      authorImage:
        "https://lh3.googleusercontent.com/a/ACg8ocJ-0h0MN2JGeXgMdkwtQjj9OVCD3CrasRxx7yzkVnnK9uN-ay7l=s40-c-rp-mo-br100",
      text: "It was an excellent experience since the beginning till filing of my ITR today I shall highly recommend this company specially the owner of the company Sri Vineet Kumar.All the best for him.",
      stars: 5,
    },
    {
      name: "Kabita kumari Shaw",
      companyLogo: googleImage,
      authorImage:
        "https://lh3.googleusercontent.com/a-/ALV-UjUNQSnQb-ltlm9kPS_1AJQMDdzxSdxzq5cmM_vKFx33Y5JTsfbq=s40-c-rp-mo-br100",
      text: "It's good for Learning from this firm one can gain alot of knowledge regarding Accounts. Our principle is very best and environment is also good.",
      stars: 5,
    },
    {
      name: "Ravindra Chowdhary",
      companyLogo: googleImage,
      authorImage:
        "https://lh3.googleusercontent.com/a/ACg8ocIxkkQsJSLFgrwLPLUUzlvYgPGR0ibe8n22lff6ksM8pCAHyA=s40-c-rp-mo-br100",
      text: "Overwhelmed after meeting Sir, cleared all doubt. I will recommend you all people to avail service from him you will be as happy as me.",
      stars: 5,
    },
    {
      name: "Buddha Nandy",
      companyLogo: googleImage,
      authorImage:
        "https://lh3.googleusercontent.com/a/ACg8ocLGL9bmo0c-duFSXG9S696azuQeokPukYc6emF51tqSQlLTgA=s40-c-rp-mo-br100",
      text: "I got maximum and instant help from SVC and Associates for filing my I Tax filing. The whole team was very  helpful and transparent to solve the problems.",
      stars: 5,
    },
    {
      name: "Shyamsundar Ghosh",
      companyLogo: googleImage,
      authorImage:
        "https://lh3.googleusercontent.com/a/ACg8ocKHeoMFQbyBX4EFAe9hFEqnden0degQDQa0xjNxkYqoetfTvg=s40-c-rp-mo-br100",
      text: "Quick support and very helpful",
      stars: 5,
    },
    {
      name: "Subhadeep Adhikary",
      companyLogo: googleImage,
      authorImage:
        "https://lh3.googleusercontent.com/a-/ALV-UjWKcb_lyK_dfx1N9crKUafsfOoQsI7h1DjGgE5r8q6dn3nOxQ=s40-c-rp-mo-br100",
      text: "Very effective and instant problem solution. Consultant fees and ITR filing charges are very less. Very helpful also staff are also helpful.",
      stars: 5,
    },
    {
      name: "Subhankar Biswas",
      companyLogo: googleImage,
      authorImage:
        "https://lh3.googleusercontent.com/a-/ALV-UjUqVk8C9OWSqA_50Nuyd52QmeNDIm1hkgRtDTKEZ-NxWlLzQKc0=s40-c-rp-mo-br100",
      text: "Awesome Professional Services Excellent behaviour Reasonable prices Within time deliverable output",
      stars: 5,
    },
    {
      name: "Sk Siraj",
      companyLogo: googleImage,
      authorImage:
        "https://lh3.googleusercontent.com/a-/ALV-UjVKpMZMvPxMW1vDUKTYIgbuC3IhneUqTn2jE3csc13expHQPI-8=s40-c-rp-mo-br100",
      text: "I visited  SVC & ASSOCIATES first time but my experience is more than I actually expected.I wish this firm a grand success with the pace of time.",
      stars: 5,
    },
    {
      name: "Sandipan Bhaumik",
      companyLogo: googleImage,
      authorImage:
        "https://lh3.googleusercontent.com/a-/ALV-UjWVjENlV3RdiBI-rthV9XRTnM74sD3k0QrntmRUwmJLg5PYkOo=s40-c-rp-mo-br100",
      text: "Very much satisfied with his services. highly recomended",
      stars: 5,
    },
    {
      name: "Piya Das",
      companyLogo: googleImage,
      authorImage: userImage,
      text: "Happy with the ITR filling service. Quick and fast process. Thanks alot",
      stars: 5,
    },

    {
      name: "Ratna Banerjee",
      companyLogo: googleImage,
      authorImage:
        "https://lh3.googleusercontent.com/a/ACg8ocKfwlRGU5MoU50aff1OyuY6VXTAnqStTWA5wuy1-LORAQVgEg=s40-c-rp-mo-br100",
      text: "Director and all staffs are very cooperative. I am fully satisfied.",
      stars: 5,
    },
  ];

  return (
    <div id="__home_page">
      <div className="__banner">
        <div className="__left">
          <h1>
            Simple and Fast <span>Business Incorporation Services</span> in
            India.
          </h1>
          <p>
            Start your entrepreneurial journey with us! From crafting a solid
            business plan to registering your company, we offer the guidance and
            resources you need to transform your ideas into a successful,
            thriving business. Let’s turn your vision into reality—step by step,
            with expert support at every stage.
          </p>

          <div className="__contact-button">
            <div className="__profile">
              <a
                href="https://api.whatsapp.com/send?phone=919088639363&text=Hi%2C%20SVC%20%26%20ASSOCIATES"
                target="_blank"
              >
                <button className="btn2" type="button">
                  <i className="bx bxl-whatsapp"></i> Contact
                </button>
              </a>
              <a href="tel:+91 9088639363">
                <button className="btn1" type="button">
                  <span className="btn-outer-bg"></span>
                  +91 9088639363 <i className="bx bx-phone"></i>
                </button>
              </a>
            </div>
          </div>

          <div className="__rating">
            <img src={Pepols} alt="avtar_icon" />

            <div className="__happy">
              <h2>{customerCount.toLocaleString()}</h2>
              <p>Our Valued Clients</p>
            </div>
            <img src={googleIcon} alt="googleIcon" />
          </div>
        </div>
        <div className="__right">
          <img src={homeBanner} alt="banner" />
        </div>
      </div>

      <div className="__why">
        <div className="__heading">
          <span>Why Our Company</span>
          <h1>
            Why use Our Company? <br />
            It works like crazy.
          </h1>
        </div>

        <div className="__choose-box">
          <div className="__left">
            <div className="__box">
              <img src={service} alt="image" />
              <h3>300+ Services</h3>
              <p>Relax at home, we take care of Tax/Compliance</p>
            </div>

            <div className="__box">
              <img src={reasonable} alt="image" />
              <h3>Reasonable</h3>
              <p>Low price with professional service delivery</p>
            </div>

            <div className="__box">
              <img src={customer_satisfaction} alt="image" />
              <h3>Customer Satisfaction</h3>
              <p>
                Prioritize client satisfaction and expectations at every step
              </p>
            </div>
          </div>

          <div className="__middle">
            <img src={ladySmile} alt="ladySmile" />
          </div>

          <div className="__left">
            <div className="__box">
              <img src={Google} alt="image" />
              <h3>Google Reviews</h3>
              <p>99% of Customers rated us 5* in Google.</p>
            </div>

            <div className="__box">
              <img src={turn_around} alt="image" />
              <h3>Turn Around Time</h3>
              <p>99% of services will be delivered on within timeline</p>
            </div>

            <div className="__box">
              <img src={audit_manager} alt="image" />
              <h3>Compliance</h3>
              <p>We manage 99.9% of compliance within due date</p>
            </div>
          </div>
        </div>
      </div>

      <Services />

      <section id="pricing">
        <span>Choose the Right Plan</span>
        <h1>Our Flexible Pricing Plans</h1>
        <div className="cards">
          <div
            onClick={() => handleLink("Pvt_Ltd_Company_Registration")}
            className="card card--purple active"
          >
            <div className="card__outer">
              <div className="card__inner">
                <p className="title">Pvt Ltd Company Registration</p>
                <ul>
                  <li>Quick and easy registration process</li>
                  <li>Complete legal support</li>
                  <li>Online submission and processing</li>
                  <li>Affordable pricing with no hidden fees</li>
                  <li>Dedicated customer support</li>
                  <li>Comprehensive post-registration services</li>
                </ul>
              </div>
              <a href="">
                Get Started Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div
            onClick={() => handleLink("Annual_Filing_for_LLP")}
            className="card card--black active"
          >
            <div className="card__outer">
              <div className="card__inner">
                <p className="title">LLP Registration Online</p>
                <ul>
                  <li>Simple and quick registration process</li>
                  <li>Limited liability protection for partners</li>
                  <li>Online filing and processing</li>
                  <li>Cost-effective solution for businesses</li>
                  <li>Legal support and compliance guidance</li>
                  <li>Minimal documentation required</li>
                </ul>
              </div>
              <a href="">
                Get Started Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div
            onClick={() => handleLink("OPC_Registration_Online")}
            className="card card--green active"
          >
            <div className="card__outer">
              <div className="card__inner">
                <p className="title">OPC Registration Online</p>
                <ul>
                  <li>Single-person ownership model</li>
                  <li>Low cost and minimal documentation</li>
                  <li>Simple tax filing and compliance</li>
                  <li>Fast and affordable registration</li>
                  <li>Online submission and support</li>
                  <li>Complete legal guidance</li>
                </ul>
              </div>
              <a href="">
                Get Started Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div
            onClick={() =>
              handleLink("Conversion_of_Sole_Proprietorship_to_Pvt_Ltd")
            }
            className="card card--red active"
          >
            <div className="card__outer">
              <div className="card__inner">
                <p className="title">Sole Proprietorship Registration</p>
                <ul>
                  <li>Fast and secure registration process</li>
                  <li>100% legally recognized online</li>
                  <li>Ideal for small businesses and individuals</li>
                  <li>Simple documentation requirements</li>
                  <li>Quick processing and issuance</li>
                  <li>Cost-effective solution for solo entrepreneurs</li>
                </ul>
              </div>
              <a href="">
                Get Started Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="__about">
        <div className="__left">
          <div className="_title">About Our Company</div>
          <h1>About Our Company</h1>
          <p>
            Our Company is a modern platform dedicated to empowering individuals
            and businesses with intuitive solutions for their registration,
            compliance, and digital needs. Whether you're starting a business,
            need legal assistance, or are looking to protect your intellectual
            property, we streamline complex processes with ease. Our goal is to
            provide you with the tools, resources, and support to navigate the
            business landscape with confidence.
          </p>

          <h2>Our Mission and Values</h2>

          <ul>
            <li>
              <i className="bx bx-check"></i> Simplifying the process of
              business registration for entrepreneurs and startups.
            </li>
            <li>
              <i className="bx bx-check"></i> Offering reliable legal and
              compliance solutions to ensure your business stays on the right
              track.
            </li>
            <li>
              <i className="bx bx-check"></i> Providing a seamless, secure
              experience for digital signatures, trademark registration, and
              more.
            </li>
            <li>
              <i className="bx bx-check"></i> Delivering fast processing times
              and personalized customer support to guide you every step of the
              way.
            </li>
          </ul>

          <Link to="/about">
            <button type="button">Know More</button>
          </Link>
        </div>

        <div className="__right">
          <img src={aboutUs} alt="About Our Company Image" />
        </div>
      </div>

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
        </div>

        <div className="button">
          <Link to="/faq">
            <button type="button">
              View All <i className="bx bx-arrow-back"></i>
            </button>
          </Link>
        </div>
      </div>

      <div className="__testomonial">
        <div className="__heading">
          <span className="page_title">Our Testimonial</span>
          <h1>Loved by the world's best teams</h1>
        </div>

        <div className="__testomonial-box">
          <Marquee direction="left">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cards">
                <div className="__logo">
                  <img src={testimonial.companyLogo} alt="Company Logo" />
                  <div className="__text">
                    <p>"{testimonial.text}"</p>
                  </div>
                  <div className="__top">
                    <div className="__left">
                      <img
                        src={testimonial.authorImage}
                        alt={testimonial.name}
                      />
                      <div className="__text">
                        <h3>{testimonial.name}</h3>
                        <div className="__star">
                          {[...Array(testimonial.stars)].map((_, i) => (
                            <i key={i} className="bx bxs-star"></i>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>

      <div className="__blogs">
        <span className="page_title">Our Blogs</span>

        <h1>
          Read Our Blog Our <br /> Latest Articles.
        </h1>

        <div className="__blog-container">
          <Swiper
            spaceBetween={30}
            speed={1200}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide className="slide">
              <div className="blogs">
                <div className="__img">
                  <img
                    src="https://kanakkupillai.com/storage/254/Step-by-Step-Guide-to-Start-Mineral-Water-Plant-in-India.jpg"
                    alt=""
                  />
                </div>

                <h3>How-to</h3>

                <h2>What Happens if you Fail to Renew Your Trademark?</h2>

                <p>
                  Chowdeck has been accepte Combinator’s Summer Batch 2022,
                  joining a league of extraordinary companies that are dis...
                </p>

                <div className="btn">
                  <button type="button">Read</button>
                  <span>
                    <i className="bx bx-arrow-back"></i>
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide">
              <div className="blogs">
                <div className="__img">
                  <img
                    src="https://kanakkupillai.com/storage/254/Step-by-Step-Guide-to-Start-Mineral-Water-Plant-in-India.jpg"
                    alt=""
                  />
                </div>

                <h3>How-to</h3>

                <h2>What Happens if you Fail to Renew Your Trademark?</h2>

                <p>
                  Chowdeck has been accepte Combinator’s Summer Batch 2022,
                  joining a league of extraordinary companies that are dis...
                </p>

                <div className="btn">
                  <button type="button">Read</button>
                  <span>
                    <i className="bx bx-arrow-back"></i>
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide">
              <div className="blogs">
                <div className="__img">
                  <img
                    src="https://kanakkupillai.com/storage/254/Step-by-Step-Guide-to-Start-Mineral-Water-Plant-in-India.jpg"
                    alt=""
                  />
                </div>

                <h3>How-to</h3>

                <h2>What Happens if you Fail to Renew Your Trademark?</h2>

                <p>
                  Chowdeck has been accepte Combinator’s Summer Batch 2022,
                  joining a league of extraordinary companies that are dis...
                </p>

                <div className="btn">
                  <button type="button">Read</button>
                  <span>
                    <i className="bx bx-arrow-back"></i>
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide">
              <div className="blogs">
                <div className="__img">
                  <img
                    src="https://kanakkupillai.com/storage/254/Step-by-Step-Guide-to-Start-Mineral-Water-Plant-in-India.jpg"
                    alt=""
                  />
                </div>

                <h3>How-to</h3>

                <h2>What Happens if you Fail to Renew Your Trademark?</h2>

                <p>
                  Chowdeck has been accepte Combinator’s Summer Batch 2022,
                  joining a league of extraordinary companies that are dis...
                </p>

                <div className="btn">
                  <button type="button">Read</button>
                  <span>
                    <i className="bx bx-arrow-back"></i>
                  </span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div id="help-box">
        <a
          href="https://api.whatsapp.com/send?phone=919088639363&text=Hi%2C%20SVC%20%26%20ASSOCIATES"
          target="_blank"
          className="box"
        >
          <div className="w-icon">
            <img src={whatsAppIcon} alt="img" />
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
