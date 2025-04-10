import React from 'react'
import Footers from './Footer'
import Navbar from './Navbar'
import { motion } from 'framer-motion';
const Kitchens = () => {
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
                backgroundImage: "url(assets/pic/Kitchenheader.webp)",
              }}
            >
              <div className="overlay-main bg-black opacity-07"></div>
              <div className="container">
                <div className="wt-bnr-inr-entry">
                  <div className="banner-title-outer">
                    <div className="banner-title-name">
                      <h2 className="text-white">Kitchens</h2>
                    </div>
                  </div>
                  {/* <!-- BREADCRUMB ROW -->  */}

                  <div>
                    <ul className="wt-breadcrumb breadcrumb-style-2">
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>Fitted Living</li>
                      <li>Kitchens</li>
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
                    <h3 style={{color:'#B19777'}}>Fitted Kitchens</h3>
                    <p style={{color:'#fff'}}>
                    A <b style={{color:'#B19777'}}>fitted kitchen</b> offers a seamless and efficient cooking space, designed to match your lifestyle and aesthetic preferences. With custom-built cabinets, sleek countertops, and smart storage solutions, everything is crafted to maximize space and enhance convenience. Whether you prefer a modern minimalist look or a classic design, bespoke kitchens provide a perfect balance of beauty and practicality.
                    </p>
                    <p style={{color:'#fff'}}>
                    Tailored to fit your home perfectly, <b style={{color:'#B19777'}}>made-to-measure kitchen units</b> ensure optimal organization, eliminating wasted space while maintaining a clean and clutter-free environment. From integrated appliances to personalized storage options, a fitted kitchen transforms your cooking area into a stylish and functional hub for everyday living.
                    </p>
                  </div>
                </div>
              </div>
            </div>
           </div>
            {/* text end  */}

            {/* Kitchens Means start   */}
        <div className="section-full p-t80 p-b50 " style={{borderBottom:'2px solid #B19777'}}>
          <div className="container">
            <h3 style={{textAlign:'center'}}>Our Fitted Kitchens Means</h3>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <a href="/Contact">
                  <div className="wt-icon-box-wraper m-b30 p-lr30 p-tb25 data-title-large  v-icon-effect block-bg-hover bg-white1">
                    <div className="icon-content m-b30">
                      <h4 style={{color:'#B19777'}} className="wt-tilte-large m-t0" data-title="E">
                        Expert Craftsmanship
                      </h4>
                      <p style={{ color: "white" }}>
                        With over 15+ years of experience, CraftMySpace delivers
                        expert craftsmanship that combines timeless design with
                        lasting quality.
                      </p>
                    </div>
                    <div className="icon-xl inline-icon">
                      <span className="icon-cell">
                        <i
                          className="flaticon-mansion v-icon"
                          style={{ color: "#B19777" }}
                        ></i>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <a href="/Contact">
                  <div className="wt-icon-box-wraper m-b30 p-lr30 p-tb25 data-title-large  v-icon-effect block-bg-hover bg-white1">
                    <div className="icon-content m-b30">
                      <h4 style={{color:'#B19777'}} className="wt-tilte-large m-t0" data-title="P">
                        Premium Materials
                      </h4>
                      <p style={{ color: "white" }}>
                        CraftMySpace uses only premium materials, including
                        high-quality wood, glass, and flawless finishes, to
                        ensure every piece is both elegant.
                      </p>
                    </div>
                    <div className="icon-xl inline-icon">
                      <span className="icon-cell">
                        <i
                          className="flaticon-stair v-icon"
                          style={{ color: "#B19777" }}
                        ></i>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <a href="/Contact">
                  <div className="wt-icon-box-wraper m-b30 p-lr30 p-tb25 data-title-large  v-icon-effect block-bg-hover bg-white1">
                    <div className="icon-content m-b30">
                      <h4 style={{color:'#B19777'}} className="wt-tilte-large m-t0" data-title="t">
                        Tailored to your space
                      </h4>
                      <p style={{ color: "white" }}>
                        CraftMySpace offers 100% custom designs, thoughtfully
                        tailored to your space for a perfect blend of style,
                        comfort, and functionality.
                      </p>
                    </div>
                    <div className="icon-xl inline-icon">
                      <span className="icon-cell">
                        <i
                          className="flaticon-apartment v-icon"
                          style={{ color: "#B19777" }}
                        ></i>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <a href="/Contact">
                  <div className="wt-icon-box-wraper m-b30 p-lr30 p-tb25 data-title-large  v-icon-effect block-bg-hover bg-white1">
                    <div className="icon-content m-b30">
                      <h4 style={{color:'#B19777'}} className="wt-tilte-large m-t0" data-title="s">
                        Seamless installation
                      </h4>
                      <p style={{ color: "white" }}>
                        CraftMySpace ensures seamless installation with
                        hassle-free fitting and finishing, making your furniture
                        setup smooth and stress-free.
                      </p>
                    </div>
                    <div className="icon-xl inline-icon">
                      <span className="icon-cell">
                        <i
                          className="flaticon-photo v-icon"
                          style={{ color: "#B19777" }}
                        ></i>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <a href="/Contact">
                  <div className="wt-icon-box-wraper m-b30 p-lr30 p-tb25 data-title-large  v-icon-effect block-bg-hover bg-white1">
                    <div className="icon-content m-b30">
                      <h4 style={{color:'#B19777'}} className="wt-tilte-large m-t0" data-title="L">
                        Luxury look
                      </h4>
                      <p style={{ color: "white" }}>
                        CraftMySpace delivers a luxury look with sophisticated
                        designs and premium detailing that elevate every corner
                        of your home.
                      </p>
                    </div>
                    <div className="icon-xl inline-icon">
                      <span className="icon-cell">
                        <i
                          className="flaticon-sketch v-icon"
                          style={{ color: "#B19777" }}
                        ></i>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <a href="/Contact">
                  <div className="wt-icon-box-wraper m-b30 p-lr30 p-tb25 data-title-large  v-icon-effect block-bg-hover bg-white1 ">
                    <div className="icon-content m-b30">
                      <h4 style={{color:'#B19777'}} className="wt-tilte-large m-t0" data-title="A">
                        Affordable prices
                      </h4>
                      <p style={{ color: "white" }}>
                        CraftMySpace offers stylish, high-quality furniture at
                        affordable prices, making luxury living accessible for
                        every home.
                      </p>
                    </div>
                    <div className="icon-xl inline-icon">
                      <span className="icon-cell">
                        <i
                          className="flaticon-kitchen v-icon"
                          style={{ color: "#B19777" }}
                        ></i>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*Kitchens Means end   */}

        {/* text start  */}
        <div className="container mt-5 mb-5">
              <div className="project-detail-outer">
                <div className="project-detail-containt">
                  <div className=" text-black">
                    <h3 style={{ color: "#B19777" }}>Fitted Kitchens – Design & Installation</h3>
                    <p style={{ color: "#fff" }}>
                    Once you've selected from our wide range of door styles and over 60 premium finishes, including matte, gloss, and rich wood grains, we ensure a seamless and stress-free installation experience. Every detail is carefully considered to bring your vision to life with precision and elegance.
                    </p>
                    <p style={{ color: "#fff" }}>
                    Our expertly crafted built-in storage solutions are designed to maximize functionality and style, meeting even the most demanding requirements, regardless of space constraints. Schedule a free consultation with our experienced specialists today and take the first step toward designing your perfectly fitted kitchen—tailored to your needs, preferences, and lifestyle.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* text end  */}
               {/* video start  */}
            <div className="container ">
            <div className="blog-post date-style-1 blog-detail text-black">
              <div className="wt-post-media">
                <div className="owl-carousel owl-fade-slider-one owl-btn-vertical-center owl-dots-bottom-right " style={{marginBottom:'45px'}}>
                  <div className="item">
                    <div className="wt-thum-bx">
                      <img src="/assets/pic/kitchen1.jpg" alt="" />
                    </div>
                  </div>

                  <div className="item">
                    <div className="wt-thum-bx">
                      <img src="/assets/pic/kitchen2.jpg" alt="" />
                    </div>
                  </div>

                  <div className="item">
                    <div className="wt-thum-bx">
                      <img src="/assets/pic/kitchen3.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
            </div>
            {/* video end  */}
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
  )
}

export default Kitchens
