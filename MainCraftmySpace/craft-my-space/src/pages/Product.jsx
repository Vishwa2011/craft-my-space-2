import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import Navbar from './Navbar';
import Footers from './Footer';

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

const Product = () => {
      const [isMounted, setIsMounted] = useState(false);
    
      useEffect(() => {
        setIsMounted(true);
      }, []);
  return (
    <>
       <motion.div
      className="page-wraper"
      style={{ background: "#000" }}
      initial="hidden"
      animate={isMounted ? "visible" : "hidden"}
      variants={fadeInUp}
    >
<Navbar />

   <motion.div className="page-content" initial="hidden" animate="visible" variants={fadeInUp}>
        <motion.div
          className="wt-bnr-inr overlay-wraper bg-parallax bg-top-center"
          data-stellar-background-ratio="0.5"
          style={{ backgroundImage: "url(assets/pic/bespokeheder.jpg)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="overlay-main bg-black opacity-07"></div>
          <div className="container">
            <motion.div className="wt-bnr-inr-entry" variants={fadeInUp}>
              <div className="banner-title-outer">
                <div className="banner-title-name">
                  <h2 className="text-white">Product</h2>
                </div>
              </div>
              <ul className="wt-breadcrumb breadcrumb-style-2">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>Product</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
                  className="section-full p-t80 p-b80 overflow-hide"
                  style={{ background: "#000" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                >
                  <div className="container">
                    <div className="section-content">
                      <div className="row">
                        <motion.div className="col-lg-6 col-md-12" initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
                          <div className="arc-home-about-left">
                            <div className="arc-home-left-content" style={{ background: "#000" }}>
                              <h4 style={{ color: "#B19777" }}>OUR PRODUCT</h4>
                              
                              <p
                                style={{
                                  color: "#7c7c7c",
                                  fontSize: "14px",
                                  lineHeight: "30px",
                                }}
                              >
                      Upgrade your personal space with our elegant range of bedroom furniture designed for comfort, style, and functionality. From luxurious beds and spacious wardrobes to sleek nightstands and ergonomic dressers, each piece is crafted to blend seamlessly with modern or classic interiors. Our collection not only enhances the beauty of your room but also maximizes storage and usability, giving you a clutter-free and peaceful retreat. Experience the perfect balance of form and function with furniture that reflects your lifestyle.
                              </p>
                              <div style={{marginTop:'40px ' , justifyContent:'center',display:'flex'}}>
        <a
          href="#"
          className="site-button-link"
          style={{
            background: "#B19777",
            color: "white",
            padding: "18px",
            textDecoration: "none",
            border: "2px solid #B19777",
            transition: "all 0.3s ease-in-out",
            cursor: "pointer",
          }}
         
          onMouseEnter={(e) => {
            e.target.style.background = "white";
            e.target.style.color = "#B19777";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "#B19777";
            e.target.style.color = "white";
          }}
        >
          Brochure download
        </a>
      </div>
                            </div>
                          </div>
                        </motion.div>
        
                        <motion.div className="col-lg-6 col-md-12" initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
                          <div className="arc-home-about-right portfolio-wrap">
                            <div className="row">
                              <div className="col-md-12 col-sm-12 masonry-item">
                                <div className="wt-media m-b20 img-reflection " style={{marginTop:'65px'}}>
                                  <img src="/assets/pic/Bedroomfit (1).webp" alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                          className="section-full p-t80 p-b80 overflow-hide"
                          style={{ background: "#000" }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 1.2 }}
                        >
                          <div className="container">
                            <div className="section-content">
                              <div className="row">
                               
                
                                <motion.div className="col-lg-6 col-md-12" initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
                                  <div className="arc-home-about-right portfolio-wrap">
                                    <div className="row">
                                      <div className="col-md-12 col-sm-12 masonry-item">
                                        <div className="wt-media m-b20 img-reflection" style={{marginTop:'65px'}}>
                                          <img src="/assets/pic/wardrobesfit (1).jpg" alt="" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </motion.div>
                                <motion.div className="col-lg-6 col-md-12" initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
                                  <div className="arc-home-about-left">
                                    <div className="arc-home-left-content" style={{ background: "#000" }}>
                                      <h4 style={{ color: "#B19777" }}>OUR PRODUCT</h4>
                                     
                                      <p
                                        style={{
                                          color: "#7c7c7c",
                                          fontSize: "14px",
                                          lineHeight: "30px",
                                        }}
                                      >
                                    Fitted wardrobes are the perfect solution for making the most of every inch in your bedroom. Custom-built to fit your room’s exact dimensions, they provide a seamless look while offering maximum storage. Whether you need space for clothes, accessories, or seasonal items, our fitted wardrobes combine smart design with elegant finishes to match any interior style. Say goodbye to clutter and hello to a sleek, organized space designed just for you.
                                      </p>
                                      <div style={{marginTop:'40px ' , justifyContent:'center',display:'flex'}}>
        <a
          href="#"
          className="site-button-link"
          style={{
            background: "#B19777",
            color: "white",
            padding: "18px",
            textDecoration: "none",
            border: "2px solid #B19777",
            transition: "all 0.3s ease-in-out",
            cursor: "pointer",
          }}
         
          onMouseEnter={(e) => {
            e.target.style.background = "white";
            e.target.style.color = "#B19777";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "#B19777";
            e.target.style.color = "white";
          }}
        >
          Brochure download
        </a>
      </div>
                                    </div>
                                  </div>
                                </motion.div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
        </motion.div>
<Footers />
    </motion.div>
    </>
  )
}

export default Product
