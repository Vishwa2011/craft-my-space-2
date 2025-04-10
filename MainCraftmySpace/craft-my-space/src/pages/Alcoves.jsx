import React from 'react'
import Footers from './Footer'
import Navbar from './Navbar'
import { motion } from 'framer-motion';
const Alcoves = () => {
  return (
    <motion.div className="page-wraper"  style={{ background: '#000' }}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}>
    <Navbar />
    <div className="page-content">
      {/* <!-- CONTENT START --> */}
      <motion.div className="page-content"  initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}>
        {/* <!-- INNER PAGE BANNER --> */}
        <div
          className="wt-bnr-inr overlay-wraper bg-parallax bg-top-center"
          data-stellar-background-ratio="0.5"
          style={{
            backgroundImage: "url(assets/pic/alcovesheader.webp)",
          }}
        >
         
          <div className="overlay-main bg-black opacity-07"></div>
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name">
                  <h2 className="text-white">Alcoves</h2>
                </div>
              </div>
              {/* <!-- BREADCRUMB ROW -->  */}

              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>Awkward Spaces</li>
                  <li>Alcoves</li>
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
                <h3 style={{color:'#B19777'}}>Alcoves – awkward shapes storage solutions</h3>
                <p style={{color:'#fff'}}>
                Fireplaces add charm and character to any home, and the <b style={{color:'#B19777'}}>alcove space</b> beside them or along a <b style={{color:'#B19777'}}>chimney breast</b> offers a valuable storage opportunity. Instead of letting this space go unused, <b style={{color:'#B19777'}}>custom-built alcove storage</b> can transform these areas into stylish and practical solutions.
                </p>
                <p style={{color:'#fff'}}>
                Unlike <b style={{color:'#B19777'}}>freestanding wardrobes</b>, which often leave wasted space at the top, sides, and back, <b style={{color:'#B19777'}}>made-to-measure fitted wardrobes</b> maximize every inch. From <b style={{color:'#B19777'}}>extra hanging space and deeper shelves</b> to an integrated dressing table, a tailor-made design ensures seamless functionality while enhancing the aesthetic of your home.
                </p>
                <p style={{color:'#fff'}}>If you’re looking for <b style={{color:'#B19777'}}>built-in cupboards</b> for your living room, we have the perfect solution. Whether it’s a <b style={{color:'#B19777'}}>fitted bookcase, bespoke TV unit, or custom storage system</b>, our designs create an elegant and clutter-free space tailored to your exact needs.</p>
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
                <img src="/assets/pic/Alcoves1.jpg" alt="" />
              </div>
              <div className="project-img-effect-1 mt-4">
                <img src="/assets/pic/Alcoves7.webp" alt="" />
              </div>
            </div>
            {/* <!-- COLUMNS 2 --> */}
            <div className="masonry-item col-xl-3 col-lg-4  col-md-6 col-sm-6 m-b30">
              <div className="project-img-effect-1">
                <img src="/assets/pic/Alcoves5.jpg" alt="" />
              </div>
              <div className="project-img-effect-1 mt-4">
                <img src="/assets/pic/Alcoves3.jpg" alt="" />
              </div>
            </div>
            {/* <!-- COLUMNS 3 --> */}
            <div className="masonry-item col-xl-3 col-lg-4  col-md-6 col-sm-6 m-b30">
              <div className="project-img-effect-1">
                <img src="/assets/pic/Alcoves2.jpg" alt="" />
              </div>
              <div className="project-img-effect-1 mt-4">
                <img src="/assets/pic/Alcoves8.webp" alt="" />
              </div>
            </div>
            {/* <!-- COLUMNS 4 --> */}
            <div className="masonry-item col-xl-3 col-lg-4  col-md-6 col-sm-6 m-b30">
              <div className="project-img-effect-1">
                <img src="/assets/pic/newalocoves.webp" alt="" />
              </div>
              <div className="project-img-effect-1 mt-4">
                <img src="/assets/pic/Alcoves4.webp" alt="" />
              </div>
            </div>
        
          </div>
         
        </div>
        
      </div>
      {/* <!-- SECTION CONTENT END  --> */}

      </motion.div>
      {/* <!-- CONTENT END --> */}
    </div>
    <Footers />
    {/* <!-- BUTTON TOP START --> */}
    <button className="scroltop">
      <span className="fa fa-angle-up  relative" id="btn-vibrate"></span>
    </button>
  </motion.div>
  )
}

export default Alcoves
