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
      name: "Rajesh Kumar",
      companyLogo: googleImage,
      authorImage: userImage,
      text: "We’ve been using this service for over a year, and we couldn't be more satisfied. Their customer support is top-notch, and the results are impressive.",
      stars: 4,
    },
    {
      name: "Sana Gupta",
      companyLogo: googleImage,
      authorImage: userImage,
      text: "This tool has revolutionized our workflow! It’s intuitive and has saved us countless hours of manual work.",
      stars: 4,
    },
    {
      name: "Anil Sharma",
      companyLogo: googleImage,
      authorImage: userImage,
      text: "I was impressed by the speed and ease with which they were able to help us with our project. The team is very professional.",
      stars: 5,
    },
    {
      name: "Priya Mehta",
      companyLogo: googleImage,
      authorImage: userImage,
      text: "An excellent experience overall. Their team took care of everything, and the results were outstanding. Highly recommended!",
      stars: 4,
    },
    {
      name: "Vikram Patel",
      companyLogo: googleImage,
      authorImage: userImage,
      text: "Amazing customer service and a very user-friendly platform. We’ve been using this for several months now, and it's been a game-changer.",
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
            <img src={avtar_icon} alt="avtar_icon" />

            <div className="__happy">
              <h2>{customerCount.toLocaleString()}</h2>
              <p>Our Valued Clients</p>
            </div>
            <img src={googleIcon} alt="googleIcon" />
          </div>
        </div>
        <div className="__right">
          <img
            src="https://kanakkupillai.com/storage/340/breadcrumb_img_1.png"
            alt="banner"
          />
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

        {/* <div className="__why-box">
          <div className="__left">
            <h1>28X</h1>
            <p>Higher response rate than email & digital</p>
          </div>

          <div className="__center">
            <img src={whyImage} alt="" />
          </div>

          <div className="__left">
            <h1>17 Days</h1>
            <p>Lifespan of a postcard. seconds for email or SMS</p>
          </div>
        </div> */}

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
            <img
              src="https://www.kanakkupillai.com/site/assets/images/about_img.png"
              alt=""
            />
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

        {/* <div className="__ratng">
          <div className="__cards">
            <img src={resonable} alt="resonable" />
            <div className="__text">
              <h4>Reasonable</h4>
              <p>
                Low price with professional service delivery, ensuring value for
                money.
              </p>
            </div>
          </div>

          <div className="__cards">
            <img src={support} alt="expert support" />
            <div className="__text">
              <h4>Expert Support</h4>
              <p>
                Guidance from industry experts to ensure smooth processes and
                compliance.
              </p>
            </div>
          </div>

          <div className="__cards">
            <img src={fast} alt="fast processing" />
            <div className="__text">
              <h4>Fast Processing</h4>
              <p>
                Quick turnaround time for document submissions and approvals.
              </p>
            </div>
          </div>
        </div> */}
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
        <span className="page_title">About Our Company</span>

        <div className="__left">
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
            <li>
              <i className="bx bx-check"></i> Our platform is backed by a team
              of experts who prioritize transparency and trust in every
              interaction.
            </li>
          </ul>

          <button type="button">Know More</button>
        </div>

        <div className="__right">
          <img
            src="https://framerusercontent.com/images/G70rSEY6AfoZPvecv1IrsJ8g.png?lossless=1"
            alt="About Our Company Image"
          />
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
