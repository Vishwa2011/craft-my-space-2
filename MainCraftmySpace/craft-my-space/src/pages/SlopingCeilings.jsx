import React from 'react'
import Footers from './Footer'
import Navbar from './Navbar'
import { motion } from 'framer-motion';
const SlopingCeilings = () => {
  return (
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
            backgroundImage: "url(assets/pic/ceilingheader.webp)",
          }}
        >
          <div className="overlay-main bg-black opacity-07"></div>
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name">
                  <h2 className="text-white">Sloping Ceilings</h2>
                </div>
              </div>
              {/* <!-- BREADCRUMB ROW -->  */}

              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>Awkward Spaces</li>
                  <li>Sloping Ceilings</li>
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
                <h3 style={{color:'#B19777'}}>
                Sloping ceiling storage
                </h3>
                <p style={{color:'#fff'}}>
                Sloping ceilings can often make storage tricky, but <b style={{color:'#B19777'}}>custom-built fitted furniture</b> allows you to maximize every inch of available space. Whether it's a <b style={{color:'#B19777'}}> loft conversion</b>, an attic bedroom, or an area under the stairs, <b style={{color:'#B19777'}}>bespoke storage solutions</b> ensure that no space goes to waste.
                </p>
                <p style={{color:'#fff'}}>
                From <b style={{color:'#B19777'}}>tailor-made wardrobes</b> to <b style={{color:'#B19777'}}>built-in shelving and drawers</b>, sloping ceiling storage can be designed to <b style={{color:'#B19777'}}>blend seamlessly</b> into your home. These solutions not only provide <b style={{color:'#B19777'}}>ample storage</b> but also enhance the <b style={{color:'#B19777'}}>overall aesthetics</b> of your space, creating a <b style={{color:'#B19777'}}>practical and stylish</b> living environment.
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
          style={{ textAlign: "center" ,borderBottom:'2px solid #B19777'}}
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
                <img src="/assets/pic/ceiling1 (1).webp" alt="" />
              </div>
              <div className="project-img-effect-1 mt-4">
                <img src="/assets/pic/ceiling5 (1).jpg" alt="" />
              </div>
            </div>
            {/* <!-- COLUMNS 2 --> */}
            <div className="masonry-item col-xl-3 col-lg-4  col-md-6 col-sm-6 m-b30">
              <div className="project-img-effect-1">
                <img src="/assets/pic/celling2 (1).jpg" alt="" />
              </div>
              <div className="project-img-effect-1 mt-4">
                <img src="/assets/pic/ceiling6 (1).jpg" alt="" />
              </div>
            </div>
            {/* <!-- COLUMNS 3 --> */}
            <div className="masonry-item col-xl-3 col-lg-4  col-md-6 col-sm-6 m-b30">
              <div className="project-img-effect-1">
                <img src="/assets/pic/ceiling4 (1).jpg" alt="" />
              </div>
              <div className="project-img-effect-1 mt-4">
                <img src="/assets/pic/ceiling7.1 (1).jpg" alt="" />
              </div>
            </div>
            {/* <!-- COLUMNS 4 --> */}
            <div className="masonry-item col-xl-3 col-lg-4  col-md-6 col-sm-6 m-b30">
              <div className="project-img-effect-1">
                <img src="/assets/pic/ceiling3 (1).jpg" alt="" />
              </div>
              <div className="project-img-effect-1 mt-4">
                <img src="/assets/pic/ceiling8 (1).webp" alt="" />
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

export default SlopingCeilings
