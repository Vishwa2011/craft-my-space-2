import React from "react";
import Navbar from "./Navbar";
import Footers from "./Footer";

const Vision = () => {
  return (
    <>
      <div className="page-wraper">
        <Navbar />
        <div className="page-content">
          <div
            className="wt-bnr-inr overlay-wraper bg-parallax bg-top-center"
            data-stellar-background-ratio="0.5"
            style={{
              backgroundImage: "url(assets/pic/vission.jpg)",
            }}
          >
            <div className="overlay-main bg-black opacity-07"></div>
            <div className="container">
              <div className="wt-bnr-inr-entry">
                <div className="banner-title-outer">
                  <div className="banner-title-name">
                    <h2 className="text-white">Our Vision</h2>
                  </div>
                </div>
                {/* <!-- BREADCRUMB ROW -->  */}

                <div>
                  <ul className="wt-breadcrumb breadcrumb-style-2">
                    <li>
                      <a href="/">Home</a>
                    </li>

                    <li>Our Vision</li>
                  </ul>
                </div>

                {/* <!-- BREADCRUMB ROW END --> */}
              </div>
            </div>
          </div>
          {/* <!--  SECTION START --> */}
          <div className="section-full p-t80 p-b80 bg-gray overflow-hide">
            <div className="container">
              <div className="section-content">
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <div className="arc-home-about-left">
                      <div className="arc-home-left-content  bg-gray">
                        <h4>GET TO KNOW</h4>
                        <h3 className="m-t0 ">Our Vision</h3>
                        <p
                          style={{
                            color: "#434f5a",
                            fontSize: "14px",
                            lineHeight: "30px",
                          }}
                        >
                          Our vision is to be a leading name in kitchen and interior design, known for our innovation, quality, and customer-centric approach. We strive to transform kitchens into the heart of every home with customized designs, advanced technology, and superior craftsmanship. Beyond kitchens, we also aim to elevate living spaces with beautifully designed bespoke bedrooms, ensuring a seamless blend of aesthetics and functionality. By staying ahead of trends and embracing new innovations, we aspire to make every home more stylish, practical, and inspiring.

                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-12">
                    <div className="arc-home-about-right portfolio-wrap">
                      <div className="row">
                        <div className="col-md-12 col-sm-12 masonry-item">
                          <div className="wt-media m-b20  img-reflection">
                            <img src="/assets/pic/vissionimage.jpeg" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--   SECTION END -->   */}
        </div>
        <Footers />
            {/* <!-- BUTTON TOP START --> */}
            <button className="scroltop">
          <span className="fa fa-angle-up  relative" id="btn-vibrate"></span>
        </button>
      </div>
    </>
  );
};

export default Vision;
