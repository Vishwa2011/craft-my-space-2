import React from "react";
import Footers from "./Footer";
import Navbar from "./Navbar";
import { motion } from 'framer-motion';
const HomeOffice = () => {
  return (
    <>
      <motion.div className="page-wraper" style={{background:'#000'}} initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}>
        <Navbar />
        <motion.div className="page-content" initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}>
          {/* <!-- CONTENT START --> */}
          <div className="page-content">
            {/* <!-- INNER PAGE BANNER --> */}
            <div
              className="wt-bnr-inr overlay-wraper bg-parallax bg-top-center"
              data-stellar-background-ratio="0.5"
              style={{
                backgroundImage: "url(assets/pic/home-office.jpg)",
              }}
            >
              <div className="overlay-main bg-black opacity-07"></div>
              <div className="container">
                <div className="wt-bnr-inr-entry">
                  <div className="banner-title-outer">
                    <div className="banner-title-name">
                      <h2 className="text-white">Home Office</h2>
                    </div>
                  </div>
                  {/* <!-- BREADCRUMB ROW -->  */}

                  <div>
                    <ul className="wt-breadcrumb breadcrumb-style-2">
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>Fitted Living</li>
                      <li>Home Office</li>
                    </ul>
                  </div>

                  {/* <!-- BREADCRUMB ROW END --> */}
                </div>
              </div>
            </div>
            {/* <!-- INNER PAGE BANNER END --> */}

            {/* text start  */}
            <div style={{borderBottom:'2px solid #B19777'}}>
            <div className="container mt-5 mb-5" >
              <div className="project-detail-outer">
                <div className="project-detail-containt">
                  <div className=" text-black">
                    <h3 style={{color:'#B19777'}}>Fitted Home Office</h3>
                    <p style={{color:'white'}}>
                      A <b style={{color:'#B19777'}}>fitted home office</b> creates an organized,
                      efficient, and stylish workspace tailored to your needs.
                      Custom-built desks, shelving, and storage units ensure
                      that everything has its place, reducing clutter and
                      enhancing productivity. Whether you need a minimalist
                      workstation or a fully equipped study, bespoke designs
                      make the most of your available space.
                    </p>
                    <p style={{color:'white'}}>
                      With smart storage solutions and ergonomic designs, a{" "}
                      <b style={{color:'#B19777'}}>made-to-measure home office</b> seamlessly integrates
                      into your home’s aesthetic while offering a functional and
                      comfortable environment. From compact setups for small
                      spaces to expansive workstations for professionals, fitted
                      office furniture brings both style and efficiency to your
                      work-from-home experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </div>
            {/* text end  */}

            {/* customer start  */}
            <div
              className=" overflow-hide v-title-outer"
              style={{ textAlign: "center",borderBottom:'2px solid #B19777' }}
            >
              <div className="section-content">
                <div className="custom-block-outer clearfix bg-cover">
                  {/* <div className="custom-right-part "> */}
                  <div className="custom-right-part-content ">
                    {/* <div className="video-section-outer"> */}
                    <div className="our-ability m-t50">
                      <div className="row">
                        <div className="col-md-3 col-sm-3">
                          <div className="m-b30 text-black  center">
                            <h1 className=" font-weight-800 m-b5 site-text-primary">
                              <img
                                src="/assets/pic/craft1.png"
                                alt=""
                              />
                            </h1>
                            <h4 className="wt-tilte m-b0">10 years warranty</h4>
                          </div>
                        </div>

                        <div className="col-md-3 col-sm-3">
                          <div className="m-b30 text-black  center">
                            <h1 className=" font-weight-800 m-b5 site-text-primary">
                              <img
                                src="/assets/pic/craft2.png"
                                alt=""
                              />
                            </h1>
                            <h4 className="wt-tilte m-b0">
                              The best materials
                            </h4>
                          </div>
                        </div>
                        <div className="col-md-3 col-sm-3">
                          <div className="m-b30 text-black  center">
                            <h1 className=" font-weight-800 m-b5 site-text-primary">
                              <img
                                src="/assets/pic/craft3.png"
                                alt=""
                              />
                            </h1>
                            <h4 className="wt-tilte m-b0">Fast production</h4>
                          </div>
                        </div>
                        <div className="col-md-3 col-sm-3">
                          <div className="m-b30 text-black  center">
                            <h1 className=" font-weight-800 m-b5 site-text-primary">
                              <img
                                src="/assets/pic/craft4.png"
                                alt=""
                              />
                            </h1>
                            <h4 className="wt-tilte m-b0">
                            Professional installation
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* </div> */}
                  </div>
                  {/* </div> */}
                </div>
              </div>
            </div>
            {/* customer end  */}
             {/* <!-- SECTION CONTENT START --> */}
          <div className="section-full p-t80 p-b50 ">
            
            <div className="container-fluid">
             
              <div className="portfolio-wrap mfp-gallery work-grid row clearfix" >
                {/* <!-- COLUMNS 1 --> */}
                <div className="masonry-item col-xl-3 col-lg-4  col-md-6 col-sm-6 m-b30">
                  <div className="project-img-effect-1">
                    <img src="/assets/pic/ho1.jpg" alt="" />
                  </div>
                  <div className="project-img-effect-1 mt-4">
                    <img src="/assets/pic/ho7.jpg" alt="" />
                  </div>
                </div>
                {/* <!-- COLUMNS 2 --> */}
                <div className="masonry-item col-xl-3 col-lg-4  col-md-6 col-sm-6 m-b30">
                  <div className="project-img-effect-1">
                    <img src="/assets/pic/ho5.webp" alt="" />
                  </div>
                  <div className="project-img-effect-1 mt-4">
                    <img src="/assets/pic/ho3.webp" alt="" />
                  </div>
                </div>
                {/* <!-- COLUMNS 3 --> */}
                <div className="masonry-item col-xl-3 col-lg-4  col-md-6 col-sm-6 m-b30">
                  <div className="project-img-effect-1">
                    <img src="/assets/pic/ho2.jpg" alt="" />
                  </div>
                  <div className="project-img-effect-1 mt-4">
                    <img src="/assets/pic/ho8.jpeg" alt="" />
                  </div>
                </div>
                {/* <!-- COLUMNS 4 --> */}
                <div className="masonry-item col-xl-3 col-lg-4  col-md-6 col-sm-6 m-b30">
                  <div className="project-img-effect-1">
                    <img src="/assets/pic/ho6.webp" alt="" />
                  </div>
                  <div className="project-img-effect-1 mt-4">
                    <img src="/assets/pic/ho4.jpg" alt="" />
                  </div>
                </div>
               
              </div>
             
            </div>
            
          </div>
          {/* <!-- SECTION CONTENT END  --> */}

          </div>
          {/* <!-- CONTENT END --> */}
        </motion.div>
        <Footers />
        {/* <!-- BUTTON TOP START --> */}
        <button className="scroltop">
          <span className="fa fa-angle-up  relative" id="btn-vibrate"></span>
        </button>
      </motion.div>
    </>
  );
};

export default HomeOffice;
