import React from "react";
import "./Blog.scss";

// import earthIcon from "../../assets/Images/Blog/earthv.png";

const BlogDetails = () => {
  return (
    <>
      <div id="blog-details">
        <div className="banner">
          <div className="__container">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/002/292/582/small/elegant-black-and-gold-banner-background-free-vector.jpg"
              alt=""
            />
            <div className="left">
              <h4>India's most comprehensive</h4>
              <h1>Partner Program for Referral and beyond.</h1>
              <p>
                One Partnership for all your client’s financial needs. Accept
                payments. Disburse payments. Manage payroll.
              </p>
              <div className="btn">Become a Partner</div>
            </div>
          </div>
        </div>

        <div className="__container">
          <div className="title">
            <div className="hh1">
              {/* <img src={earthIcon} alt="earthIcon" /> */}
              <h1>Indusrty we searve </h1>
            </div>
            <h1>the best way to deal with win win</h1>
            <br />
            <p>
              Cashfree's UPI AutoPay automates recurring payments to offer your
              customers a seamless subscription experience. Highest success
              rates and ease of integration combined with the
            </p>
          </div>

          <div className="blog-details-content">
            <div className="heading">
              <p></p>
            </div>

            <div className="question">
              <h3>
                Create production-quality visual assets for your projects with
                unprecedented quality, speed, and style-consistency.
              </h3>
              <p className="ans">
                Create production-quality visual assets for your projects with
                unprecedented quality, speed, and style-consistency.
              </p>
            </div>

            <div className="question">
              <h3>
                Create production-quality visual assets for your projects with
                unprecedented quality, speed, and style-consistency.
              </h3>
              <p className="ans">
                Create production-quality visual assets for your projects with
                unprecedented quality, speed, and style-consistency.
              </p>
            </div>

            <div className="three-images">
              <img
                src="https://graphicsfamily.com/wp-content/uploads/2020/08/Roll-Up-Banner-Design-For-Business-scaled.jpg"
                alt="blog--image"
              />
              <img
                src="https://graphicsfamily.com/wp-content/uploads/2020/08/Roll-Up-Banner-Design-For-Business-scaled.jpg"
                alt="blog--image"
              />
              <img
                src="https://graphicsfamily.com/wp-content/uploads/2020/08/Roll-Up-Banner-Design-For-Business-scaled.jpg"
                alt="blog--image"
              />
            </div>

            <div className="question">
              <h3>Create production-quality visual assets fo</h3>
              <p className="ans">
                Create production-quality visual assets for your projects with
                unprecedented quality, speed, and style-consistency.
              </p>
              <p className="ans">
                Create production-quality visual assets for your projects with
                unprecedented quality, speed, and style-consistency.
              </p>
            </div>
          </div>

          <div className="for-creators">
            <div className="arrow-box">
              <span>&#x2192;</span>
              <h4>For Creators</h4>
              <p>
                Create production-quality visual assets for your projects with
                unprecedented quality, speed, and style-consistency.
              </p>
            </div>
            <div className="arrow-box">
              <span>&#x2192;</span>
              <h4>For Creators</h4>
              <p>
                Create production-quality visual assets for your projects with
                unprecedented quality, speed, and style-consistency.
              </p>
            </div>
            <div className="arrow-box">
              <span>&#x2192;</span>
              <h4>For Creators</h4>
              <p>
                Create production-quality visual assets for your projects with
                unprecedented quality, speed, and style-consistency.
              </p>
            </div>
          </div>

          <div className="title">
            <div className="hh1">
              <h1>Indusrty we searve the best way to deal with win win</h1>
            </div>
            <br />
            <p>
              Cashfree's UPI AutoPay automates recurring payments to offer your
              customers a seamless subscription experience. Highest success
              rates and ease of integration combined with the
            </p>
          </div>

          <div className="blogs-3cards"></div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
