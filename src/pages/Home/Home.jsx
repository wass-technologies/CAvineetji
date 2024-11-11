import React from "react";
import "./Home.scss";
import Marquee from "react-fast-marquee";

import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

import whyImage from "../../assets/Images/Home/why.png";
import faqIcon from "../../assets/Images/Home/faq.png";
import Services from "../../components/Services/Services";
import { Link } from "react-router-dom";
import { servicesData } from "../../constant";

const Home = () => {
  const data = servicesData[0].data;

  // 9088639363

  const handleLink = (id) => {
    const filteredData = data.filter((x) => x.id === id);
    localStorage.setItem("serviceData", JSON.stringify(filteredData[0]));
    window.location.href = `/service/${id}`;
  };

  return (
    <div id="__home_page">
      <div className="__banner">
        <div className="__left">
          <h1>Simple and Fast Business Incorporation Services in India.</h1>
          <p>
            Start your entrepreneurial journey with us! From crafting a solid
            business plan to registering your company, we offer the guidance and
            resources you need to transform your ideas into a successful,
            thriving business. Let’s turn your vision into reality—step by step,
            with expert support at every stage.
          </p>

          <div className="__contact-button">
            <div className="__profile">
              <button type="button">Company</button>
              <button type="button">
                <span className="btn-outer-bg"></span>
                Schedule a call <i className="bx bx-phone"></i>
              </button>
            </div>
          </div>

          <div className="__rating">
            <img
              src="https://netrosystems.com/_next/image?url=%2Fimages%2Fclutch.webp&w=1920&q=75"
              alt=""
            />
            <img
              src="https://netrosystems.com/_next/image?url=%2Fimages%2Ftrustpilot.webp&w=1920&q=75"
              alt=""
            />
            <img
              src="https://netrosystems.com/_next/image?url=%2Fimages%2Fgoogle.webp&w=1920&q=75"
              alt=""
            />
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

        <div className="__why-box">
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
        </div>

        <div className="__colab-images">
          <Marquee>
            <img
              src="https://www.nijaworks.com/_next/image?url=%2Fbrand%2Fvidico.png&w=1920&q=75"
              alt="icon"
            />
            <img
              src="https://www.nijaworks.com/_next/image?url=%2Fbrand%2Fmultidaya.png&w=1920&q=75"
              alt="icon"
            />
            <img
              src="https://www.nijaworks.com/_next/image?url=%2Fbrand%2Fventeny.png&w=1920&q=75"
              alt="icon"
            />
            <img
              src="https://www.nijaworks.com/_next/image?url=%2Fbrand%2Fmultidaya.png&w=1920&q=75"
              alt="icon"
            />
            <img
              src="https://www.nijaworks.com/_next/image?url=%2Fbrand%2Fwappin.png&w=1920&q=75"
              alt="icon"
            />
            <img
              src="https://www.nijaworks.com/_next/image?url=%2Fbrand%2Fcurana.png&w=1920&q=75"
              alt="icon"
            />
            <img
              src="https://www.nijaworks.com/_next/image?url=%2Fbrand%2Fventeny.png&w=1920&q=75"
              alt="icon"
            />
          </Marquee>
        </div>
      </div>

      <Services />

      <section id="pricing">
        <span>Choose the Right Plan</span>
        <h1>Our Flexible Pricing Plans</h1>
        <div className="cards">
          {/* Pvt Ltd Company Registration */}
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
                  <li>Get Started Now</li>
                  <li>Comprehensive post-registration services</li>{" "}
                  {/* New point */}
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
            onClick={() => handleLink("Trademark_Registration")}
            className="card card--black active"
          >
            <div className="card__outer">
              <div className="card__inner">
                <p className="title">LLP Registration Online</p>
                <ul>
                  <li>Protect your brand with a legal trademark</li>
                  <li>Exclusive rights to your business name or logo</li>
                  <li>Nationwide protection against infringement</li>
                  <li>Fast processing with expert assistance</li>
                  <li>Get recognized as the rightful owner</li>
                  <li>Pre-registration trademark search</li>
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
            onClick={() => handleLink("ITR-4_Form_Filing")}
            className="card card--green active"
          >
            <div className="card__outer">
              <div className="card__inner">
                <p className="title">OPC Registration Online</p>
                <ul>
                  <li>Fast, simple, and affordable registration</li>
                  <li>Single-person ownership model</li>
                  <li>Low cost and minimal documentation</li>
                  <li>Simple tax filing and compliance</li>
                  <li>Get your business up and running in no time</li>
                  <li>Get Started Now</li>
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
            onClick={() => handleLink("Income_Tax_Return_Filing")}
            className="card card--red active"
          >
            <div className="card__outer">
              <div className="card__inner">
                <p className="title">Sole Proprietorship Registration</p>
                <ul>
                  <li>100% legally recognized online</li>
                  <li>Fast and secure processing</li>
                  <li>Used for e-filing and digital documentation</li>
                  <li>Ideal for businesses and individuals</li>
                  <li>Issued by certified authorities</li>
                  <li>Multiple certificate types available</li>{" "}
                  {/* New point */}
                  <li>Long validity period options</li> {/* New point */}
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
            {/* First Testimonial */}
            <div className="cards">
              <div className="__logo">
                <img
                  src="https://s.yimg.com/fz/api/res/1.2/Qpybtr24YAUp2UGFYg1M5A--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MjQw/https://s.yimg.com/zb/imgv1/fe90b2b3-0ac3-3c81-8238-d3724bf23104/t_500x300"
                  alt="Company Logo"
                />

                <div className="__text">
                  <p>
                    "We’ve been using this service for over a year, and we
                    couldn't be more satisfied. Their customer support is
                    top-notch, and the results are impressive."
                  </p>
                </div>

                <div className="__top">
                  <div className="__left">
                    <img
                      src="https://kanakkupillai.com/storage/161/image6.png"
                      alt="Testimonial Author"
                    />
                    <div className="__text">
                      <h3>Sarah Lee</h3>
                      <div className="__star">
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Testimonial */}
            <div className="cards">
              <div className="__logo">
                <img
                  src="https://s.yimg.com/fz/api/res/1.2/Qpybtr24YAUp2UGFYg1M5A--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MjQw/https://s.yimg.com/zb/imgv1/fe90b2b3-0ac3-3c81-8238-d3724bf23104/t_500x300"
                  alt="Company Logo"
                />

                <div className="__text">
                  <p>
                    "This tool has revolutionized our workflow! It’s intuitive
                    and has saved us countless hours of manual work."
                  </p>
                </div>

                <div className="__top">
                  <div className="__left">
                    <img
                      src="https://kanakkupillai.com/storage/161/image6.png"
                      alt="Testimonial Author"
                    />
                    <div className="__text">
                      <h3>John Smith</h3>
                      <div className="__star">
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Testimonial */}
            <div className="cards">
              <div className="__logo">
                <img
                  src="https://s.yimg.com/fz/api/res/1.2/Qpybtr24YAUp2UGFYg1M5A--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MjQw/https://s.yimg.com/zb/imgv1/fe90b2b3-0ac3-3c81-8238-d3724bf23104/t_500x300"
                  alt="Company Logo"
                />

                <div className="__text">
                  <p>
                    "I was impressed by the speed and ease with which they were
                    able to help us with our project. The team is very
                    professional."
                  </p>
                </div>

                <div className="__top">
                  <div className="__left">
                    <img
                      src="https://kanakkupillai.com/storage/161/image6.png"
                      alt="Testimonial Author"
                    />
                    <div className="__text">
                      <h3>Jessica Brown</h3>
                      <div className="__star">
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fourth Testimonial */}
            <div className="cards">
              <div className="__logo">
                <img
                  src="https://s.yimg.com/fz/api/res/1.2/Qpybtr24YAUp2UGFYg1M5A--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MjQw/https://s.yimg.com/zb/imgv1/fe90b2b3-0ac3-3c81-8238-d3724bf23104/t_500x300"
                  alt="Company Logo"
                />

                <div className="__text">
                  <p>
                    "An excellent experience overall. Their team took care of
                    everything, and the results were outstanding. Highly
                    recommended!"
                  </p>
                </div>

                <div className="__top">
                  <div className="__left">
                    <img
                      src="https://kanakkupillai.com/storage/161/image6.png"
                      alt="Testimonial Author"
                    />
                    <div className="__text">
                      <h3>Michael Johnson</h3>
                      <div className="__star">
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fifth Testimonial */}
            <div className="cards">
              <div className="__logo">
                <img
                  src="https://s.yimg.com/fz/api/res/1.2/Qpybtr24YAUp2UGFYg1M5A--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MjQw/https://s.yimg.com/zb/imgv1/fe90b2b3-0ac3-3c81-8238-d3724bf23104/t_500x300"
                  alt="Company Logo"
                />

                <div className="__text">
                  <p>
                    "Amazing customer service and a very user-friendly platform.
                    We’ve been using this for several months now, and it's been
                    a game-changer."
                  </p>
                </div>

                <div className="__top">
                  <div className="__left">
                    <img
                      src="https://kanakkupillai.com/storage/161/image6.png"
                      alt="Testimonial Author"
                    />
                    <div className="__text">
                      <h3>Emily White</h3>
                      <div className="__star">
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
    </div>
  );
};

export default Home;
