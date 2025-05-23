import React from 'react'
import Footers from './Footer'
import Navbar from './Navbar'
import { motion } from "framer-motion";
const SlidingLivingAreaWardrobes = () => {
  return (
    <motion.div className="page-wraper" initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }} style={{ background: '#000' }}>
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
            backgroundImage: "url(assets/pic/style.webp)",
          }}
        >
          <div className="overlay-main bg-black opacity-07"></div>
          <div className="container"> 
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name">
                  <h2 className="text-white" >
                  Sliding Living Area Wardrobes
                  </h2>
                </div>
              </div>
              {/* <!-- BREADCRUMB ROW -->  */}

              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>fitted wardrobes</li>
                  <li>Sliding Wardrobes</li>
                  <li>Sliding Living Area Wardrobes</li>
                </ul>
              </div>

              {/* <!-- BREADCRUMB ROW END --> */}
            </div>
          </div>
        </div>
        {/* <!-- INNER PAGE BANNER END --> */}

        {/* <!--  SECTION START --> */}
        <motion.div className="section-full p-t80 p-b80  overflow-hide" style={{background:'#000',borderBottom:'2px solid #B19777'}} initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}>
          <div className="container">
            <div className="section-content">
              <div className="row">
                <motion.div className="col-lg-6 col-md-12" initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
                  <div className="arc-home-about-left">
                    <div className="arc-home-left-content  " style={{background:'#000'}}>
                      <h3 className="m-t0 wt-tilte-light" style={{color:'#B19777'}}>
                      Fitted Wardrobes in Your Living Areas
                      </h3>
                      <p>
                      Designed to complement your home décor, living room fitted wardrobes can be tailored to suit your preferences, from modern minimalist styles to classic wood finishes. They provide smart storage solutions for everything from media units to seasonal decorations, ensuring that your space remains tidy and welcoming. Elevate your home with a bespoke wardrobe that perfectly balances elegance and functionality.
                      </p> 
                     
                      <a 
  href="" 
  className="site-button-link" 
  style={{
    background: '#B19777',
    color: 'white',
    padding: '18px',
    textDecoration: 'none',
    border: '2px solid #B19777',
    transition: 'all 0.3s ease-in-out'
  }}
  onMouseEnter={(e) => {
    e.target.style.background = 'white';
    e.target.style.color = '#B19777';
  }}
  onMouseLeave={(e) => {
    e.target.style.background = '#B19777';
    e.target.style.color = 'white';
  }}
> 
  Read More
</a>
                    </div>
                  </div>
                </motion.div>

                <motion.div className="col-lg-6 col-md-12" initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
                  <div className="arc-home-about-right portfolio-wrap">
                    <div className="row">
                      <div className="col-md-6 col-sm-6 masonry-item">
                        <div className="wt-media m-b20  img-reflection">
                          <img src="/assets/pic/Bespoke-dressing-room (1).jpg" alt="" />
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-6 masonry-item">
                        <div className="wt-media m-b20  img-reflection">
                          <img src="/assets/pic/living_configurations (1).jpg" alt="" />
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-6 masonry-item">
                        <div className="wt-media m-b20  img-reflection">
                          <img src="/assets/pic/hill (1).jpg" alt="" />
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6 masonry-item">
                        <div className="wt-media m-b20  img-reflection">
                          <img src="/assets/pic/Fitted-Folding (1).jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
        {/* <!--   SECTION END -->   */}

         {/* <!--  SECTION START --> */}
         <motion.div className="section-full p-t80 p-b80  overflow-hide" style={{background:'#000',borderBottom:'2px solid #B19777'}} initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}>
          <div className="container">
            <div className="section-content">
              <div className="row">
               

                <motion.div className="col-lg-6 col-md-12" initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
                  <div className="arc-home-about-right portfolio-wrap">
                    <div className="row">
                      <div className="col-md-6 col-sm-6 masonry-item">
                        <div className="wt-media m-b20  img-reflection">
                          <img src="/assets/pic/holl (1).jpg" alt="" />
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-6 masonry-item">
                        <div className="wt-media m-b20  img-reflection">
                          <img src="/assets/pic/holl1 (1).webp" alt="" />
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-6 masonry-item">
                        <div className="wt-media m-b20  img-reflection">
                          <img src="/assets/pic/holl2 (1).webp" alt="" />
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6 masonry-item">
                        <div className="wt-media m-b20  img-reflection">
                          <img src="/assets/pic/holl4 (1).jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div className="col-lg-6 col-md-12" initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 } }>
                  <div className="arc-home-about-left">
                    <div className="arc-home-left-content  " style={{background:'#000'}}>
                      <h3 className="m-t0 wt-tilte-light" style={{color:'#B19777'}}>
                      Modernise Your Living Room
                      </h3>
                      <p>
                      A modern living room is all about clean lines, smart storage, and a clutter-free environment. With fitted sliding wardrobes, you can effortlessly enhance your space while keeping everyday essentials neatly organized. Whether you need a sleek media unit, hidden storage for books and accessories, or a stylish display cabinet, customized wardrobes offer a perfect blend of functionality and elegance.
                      </p> 
                     
                      <a 
  href="" 
  className="site-button-link" 
  style={{
    background: '#B19777',
    color: 'white',
    padding: '18px',
    textDecoration: 'none',
    border: '2px solid #B19777',
    transition: 'all 0.3s ease-in-out'
  }}
  onMouseEnter={(e) => {
    e.target.style.background = 'white';
    e.target.style.color = '#B19777';
  }}
  onMouseLeave={(e) => {
    e.target.style.background = '#B19777';
    e.target.style.color = 'white';
  }}
> 
  Read More
</a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
        {/* <!--   SECTION END -->   */}
       
      </div>
      {/* <!-- CONTENT END --> */}
    </motion.div>
    <Footers />
    {/* <!-- BUTTON TOP START --> */}
    <button className="scroltop">
      <span className="fa fa-angle-up  relative" id="btn-vibrate"></span>
    </button>
  </motion.div>
  )
}

export default SlidingLivingAreaWardrobes
