import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footers from "./Footer";

const Vision = () => {
  return (
    <motion.div
    style={{background:'#000'}}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="page-wraper"
    >
      <Navbar />
      <div className="page-content">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="wt-bnr-inr overlay-wraper bg-parallax bg-top-center"
          data-stellar-background-ratio="0.5"
          style={{ backgroundImage: "url(assets/pic/vission.jpg)" }}
        >
          <div className="overlay-main bg-black opacity-07"></div>
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name">
                  <h2 className="text-white">Our Vision</h2>
                </div>
              </div>
              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>Our Vision</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="section-full p-t80 p-b80 overflow-hide"
          style={{ background: "#000" }}
        >
          <div className="container">
            <div className="section-content">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="arc-home-about-left"
                  >
                    <div className="arc-home-left-content" style={{ background: "#000" }}>
                      <h4 style={{ color: "#B19777" }}>GET TO KNOW</h4>
                      <h3 className="m-t0">Our Vision</h3>
                      <p
                        style={{
                          color: "#7c7c7c",
                          fontSize: "14px",
                          lineHeight: "30px",
                        }}
                      >
                        Our vision is to be a leading name in kitchen and interior design, 
                        known for our innovation, quality, and customer-centric approach. 
                        We strive to transform kitchens into the heart of every home with 
                        customized designs, advanced technology, and superior craftsmanship. 
                        Beyond kitchens, we also aim to elevate living spaces with beautifully 
                        designed bespoke bedrooms, ensuring a seamless blend of aesthetics and 
                        functionality. By staying ahead of trends and embracing new innovations, 
                        we aspire to make every home more stylish, practical, and inspiring.
                      </p>
                    </div>
                  </motion.div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="arc-home-about-right portfolio-wrap"
                  >
                    <div className="row">
                      <div className="col-md-12 col-sm-12 masonry-item">
                        <div className="wt-media m-b20 img-reflection">
                          <img src="/assets/pic/vissionimage.jpeg" alt="" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <Footers />
      <button className="scroltop">
        <span className="fa fa-angle-up relative" id="btn-vibrate"></span>
      </button>
    </motion.div>
  );
};

export default Vision;
