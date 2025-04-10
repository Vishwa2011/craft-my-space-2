import React from 'react'
import Footers from './Footer'
import Navbar from './Navbar'
import { motion } from 'framer-motion';
const UnderStairs = () => {
  return (
    <motion.div className="page-wraper" style={{background:'#000'}}  initial={{ opacity: 0, y: 50 }}
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
            backgroundImage: "url(assets/pic/understairs-banner-03.jpg)",
          }}
        >
          <div className="overlay-main bg-black opacity-07"></div>
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name">
                  <h2 className="text-white">Under Stairs</h2>
                </div>
              </div>
              {/* <!-- BREADCRUMB ROW -->  */}

              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>Awkward Spaces</li>
                  <li>Under Stairs</li>
                </ul>
              </div>

              {/* <!-- BREADCRUMB ROW END --> */}
            </div>
          </div>
        </div>
        {/* <!-- INNER PAGE BANNER END --> */}

        {/* text start  */}
        <div style={{borderBottom:'2px solid #B19777'}}>
        <div className="container mt-5 mb-5">
          <div className="project-detail-outer">
            <div className="project-detail-containt">
              <div className=" text-black">
                <h3 style={{color:'#B19777'}}>
                Under Stairs Fitted Furniture
                </h3>
                <p style={{color:'#fff'}}>
                We understand how important it is to make the most of every corner of your home, especially when it comes to <b style={{color:'#B19777'}}>under-stairs storage</b>. This often-overlooked area can be transformed into a <b style={{color:'#B19777'}}>functional and stylish</b> space that enhances the flow of your home.
                </p>
                <p style={{color:'#fff'}}>
                Whether it's a <b style={{color:'#B19777'}}>hallway storage unit, a sleek reception feature</b>, or a <b style={{color:'#B19777'}}>practical living space addition</b>, a well-designed under-stairs solution can bring <b style={{color:'#B19777'}}>both elegance and efficiency</b> to your home. Our expert designers consider your <b style={{color:'#B19777'}}>room dimensions, layout, and storage needs</b> to create a customized design that maximizes your available space while maintaining a seamless and sophisticated look.
                </p>
               
              </div>
            </div>
          </div>
        </div>
        </div>
        {/* text end  */}

        {/* customer start  */}
        <div
          className="overflow-hide v-title-outer"
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
                <img src="/assets/pic/under-stairs (1).webp" alt="" />
              </div>
              <div className="project-img-effect-1 mt-4">
                <img src="/assets/pic/under-stairs5 (1).jpg" alt="" />
              </div>
            </div>
            {/* <!-- COLUMNS 2 --> */}
            <div className="masonry-item col-xl-3 col-lg-4  col-md-6 col-sm-6 m-b30">
              <div className="project-img-effect-1">
                <img src="/assets/pic/under-stairs2 (1).jpg" alt="" />
              </div>
              <div className="project-img-effect-1 mt-4">
                <img src="/assets/pic/under-stairs6 (1).jpg" alt="" />
              </div>
            </div>
            {/* <!-- COLUMNS 3 --> */}
            <div className="masonry-item col-xl-3 col-lg-4  col-md-6 col-sm-6 m-b30">
              <div className="project-img-effect-1">
                <img src="/assets/pic/under-stairs3 (1).jpg" alt="" />
              </div>
              <div className="project-img-effect-1 mt-4">
                <img src="/assets/pic/under-stairs7 (1).jpg" alt="" />
              </div>
            </div>
            {/* <!-- COLUMNS 4 --> */}
            <div className="masonry-item col-xl-3 col-lg-4  col-md-6 col-sm-6 m-b30">
              <div className="project-img-effect-1">
                <img src="/assets/pic/under-stairs4 (1).jpg" alt="" />
              </div>
              <div className="project-img-effect-1 mt-4">
                <img src="/assets/pic/under-stairs8 (1).webp" alt="" />
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
  )
}

export default UnderStairs
