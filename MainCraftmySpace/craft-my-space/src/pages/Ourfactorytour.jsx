import React from 'react'
import { motion } from "framer-motion";
import Navbar from './Navbar';
import Footers from './Footer';

const Ourfactorytour = () => {
  return (
    <>
    <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="page-wraper"
          style={{ background: "#000" }}
        >
      <Navbar />
      <div className="page-content">
      <div
          className="wt-bnr-inr overlay-wraper bg-parallax bg-top-center"
          data-stellar-background-ratio="0.5"
          style={{
            backgroundImage:
              "url(assets/pic/kitchen-units-black.jpg)",
          }}
        >
          <div className="overlay-main bg-black opacity-07"></div>
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name">
                  <h2 className="text-white" >Our Factory Tour</h2>
                </div>
              </div>
              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>Our Factory Tour</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
               {/* STEP INSPIRED SOLUTION start  */}
        <div
          className="section-full p-t80 p-b50 "
          style={{ background: "#000", borderBottom: "2px solid #B19777" }}
        >
          <div className="container">
            <div>
              <h2 style={{ display: "flex", justifyContent: "center" }}>
                OUR 4-STEP INSPIRED SOLUTION
              </h2>
            </div>
            <div
              className="section-content  "
              style={{ textAlign: "center", verticalAlign: "moddle" }}
            >
              <div className="col-12">
                <div className="row justify-content-center">
                  <div className="col-12 col-sm-12 col-md-3 p-3">
                    <a
                      href=""
                      className="wt-img-effect client-logo-media shadow"
                    >
                      <div>
                        <img src="/assets/pic/conversation (2).png" alt="" />
                      </div>
                      <div>
                        <p className="mt-3">DISCUSS & PLAN</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-12 col-sm-12 col-md-3 p-3">
                    <a
                      href=""
                      className="wt-img-effect client-logo-media shadow"
                    >
                      <div>
                        <img src="/assets/pic/staircase.png" alt="" />
                      </div>
                      <div>
                        <p className="mt-3">DESIGN & INNOVATE</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-12 col-sm-12 col-md-3 p-3">
                    <a
                      href=""
                      className="wt-img-effect client-logo-media shadow"
                    >
                      <div>
                        <img src="/assets/pic/industrial-park.png" alt="" />
                      </div>
                      <div>
                        <p className="mt-3">MANUFACTURE & DELIVER</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-12 col-sm-12 col-md-3 p-3">
                    <a
                      href=""
                      className="wt-img-effect client-logo-media shadow"
                    >
                      <div>
                        <img src="/assets/pic/puzzle.png" alt="" />
                      </div>
                      <div>
                        <p className="mt-3">FINAL FITTING</p>
                      </div>
                    </a>
                  </div>
                  <div>                
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* STEP INSPIRED SOLUTION end  */}
             {/* content start */}
                <div
          style={{
            padding: "70px 0px",
            background: "#000",
            borderBottom: "2px solid #B19777",
            position: "relative",  // Ensures that we can position the background image separately
          }}
        >
          <div className="container">
            <div className="col-12">
              <div className="row">
                <div
                  className="col-lg-6 col-md-12 col-sm-12"
                  style={{
                    position: "relative", // This will keep the text above the background image
                    // height: "450px",
                    zIndex:999,
                    overflow: "hidden", // Hide anything outside the bounds
                  }}
                >
                  {/* Background Image with Opacity and Rotation */}
                  <div className="responsive-background"

                  ></div>
        
               
                  <h2 style={{color:'#B19777'}}>Our Production</h2>
                  <p>
                  At [CraftMySpace], we take pride in crafting high-quality furniture that blends style, durability, and functionality. Our production process is driven by expert craftsmanship, premium materials, and innovative designs to ensure each piece meets the highest standards. From selecting the finest wood and metals to applying precision finishing touches, every step reflects our commitment to excellence. Whether it’s modern, classic, or custom-made furniture, we create pieces that enhance comfort and aesthetics, making every space truly exceptional.We believe that furniture is more than just a functional necessity—it’s an expression of style and comfort. That’s why we pay meticulous attention to design, structure, and finishing, ensuring that our products enhance both residential and commercial spaces. Our team continuously innovates, keeping up with the latest trends while maintaining timeless craftsmanship that stands the test of time.
                  </p>
                 
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <img
                    src="/assets/pic/production.jpg"
                    style={{ height: "450px", width: "100%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
                {/* content end */}


                <div className="section-full p-t80 p-b50" style={{ borderBottom: "2px solid #B19777",}}>
                          <div className="container">
                            <div>
                              <div className="news-listing">
                                <div className="col-12">
                                <div style={{ textAlign: "center" }}>
            <h5 style={{ color: "#B19777" }}>[ Our Production]</h5>
            <h3>Our New Production</h3>
          </div>
                                  <div className="row g4">
                                    
                                    <div className="col-lg-4 col-md-6 mb-3">
                                      <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, ease: "easeOut" }}
                                        className="blog-post blog-md date-style-1 clearfix bg-gray"
                                        style={{
                                          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                                          transition: "box-shadow 0.3s ease-in-out",
                                        }}
                                        onMouseEnter={(e) =>
                                          (e.currentTarget.style.boxShadow =
                                            "0px 6px 15px rgba(0, 0, 0, 0.2)")
                                        }
                                        onMouseLeave={(e) =>
                                          (e.currentTarget.style.boxShadow =
                                            "0px 4px 10px rgba(0, 0, 0, 0.1)")
                                        }
                                      >
                                        <div className="wt-post-media wt-img-effect zoom-slow relative">
                                          <a className="block relative">
                                            <img src="/assets/pic/INSPIRATION1.webp" alt="" />
                                           
                                          </a>
                                        </div>
                                      
                                      </motion.div>
                                    </div>
                                     {/* COLUMN 2 */}
                 <div className="col-lg-4 col-md-6 mb-3">
                 <motion.div
                   className="blog-post blog-md date-style-1 clearfix bg-gray"
                   style={{
                     boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                     transition: "box-shadow 0.3s ease-in-out",
                   }}
                   onMouseEnter={(e) =>
                     (e.currentTarget.style.boxShadow =
                       "0px 6px 15px rgba(0, 0, 0, 0.2)")
                   }
                   onMouseLeave={(e) =>
                     (e.currentTarget.style.boxShadow =
                       "0px 4px 10px rgba(0, 0, 0, 0.1)")
                   }
                 >
                 
                
                
                   
                   <div className="wt-post-media wt-img-effect zoom-slow relative">
                <a  className="block relative">
                <img src="/assets/pic/bloggg2.jpg" alt="" />
               
                </a>
                </div>
                   
                 </motion.div>
                </div>
                
                {/* COLUMN 3 */}
                <div className="col-lg-4 col-md-6 mb-3">
                 <motion.div
                   className="blog-post blog-md date-style-1 clearfix bg-gray"
                   style={{
                     boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                     transition: "box-shadow 0.3s ease-in-out",
                   }}
                   onMouseEnter={(e) =>
                     (e.currentTarget.style.boxShadow =
                       "0px 6px 15px rgba(0, 0, 0, 0.2)")
                   }
                   onMouseLeave={(e) =>
                     (e.currentTarget.style.boxShadow =
                       "0px 4px 10px rgba(0, 0, 0, 0.1)")
                   }
                 >
                
                
                
                   <div className="wt-post-media wt-img-effect zoom-slow relative">
                <a  className="block relative">
                <img src="/assets/pic/blogg3.jpg" alt="" />
               
                </a>
                </div>
                  
                 </motion.div>
                </div>
                {/* COLUMN 4 */}
                <div className="col-lg-4 col-md-6 mb-3">
                 <motion.div
                   className="blog-post blog-md date-style-1 clearfix bg-gray"
                   style={{
                     boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                     transition: "box-shadow 0.3s ease-in-out",
                   }}
                   onMouseEnter={(e) =>
                     (e.currentTarget.style.boxShadow =
                       "0px 6px 15px rgba(0, 0, 0, 0.2)")
                   }
                   onMouseLeave={(e) =>
                     (e.currentTarget.style.boxShadow =
                       "0px 4px 10px rgba(0, 0, 0, 0.1)")
                   }
                 >
                 
                
                
                
                   <div className="wt-post-media wt-img-effect zoom-slow relative">
                <a  className="block relative">
                <img src="/assets/pic/blogg4.jpg" alt="" />
               
                </a>
                </div>
                
                 </motion.div>
                </div>
                
                {/* COLUMN 5 */}
                <div className="col-lg-4 col-md-6 mb-3">
                 <motion.div
                   className="blog-post blog-md date-style-1 clearfix bg-gray"
                   style={{
                     boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                     transition: "box-shadow 0.3s ease-in-out",
                   }}
                   onMouseEnter={(e) =>
                     (e.currentTarget.style.boxShadow =
                       "0px 6px 15px rgba(0, 0, 0, 0.2)")
                   }
                   onMouseLeave={(e) =>
                     (e.currentTarget.style.boxShadow =
                       "0px 4px 10px rgba(0, 0, 0, 0.1)")
                   }
                 >
                
                
                
                
                   <div className="wt-post-media wt-img-effect zoom-slow relative">
                <a  className="block relative">
                <img src="/assets/pic/blogg5.jpg" alt="" />
               
                </a>
                </div>
                   
                 </motion.div>
                </div>
                
                {/* COLUMN 6 */}
                <div className="col-lg-4 col-md-6 mb-3">
                 <motion.div
                   className="blog-post blog-md date-style-1 clearfix bg-gray"
                   style={{
                     boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                     transition: "box-shadow 0.3s ease-in-out",
                   }}
                   onMouseEnter={(e) =>
                     (e.currentTarget.style.boxShadow =
                       "0px 6px 15px rgba(0, 0, 0, 0.2)")
                   }
                   onMouseLeave={(e) =>
                     (e.currentTarget.style.boxShadow =
                       "0px 4px 10px rgba(0, 0, 0, 0.1)")
                   }
                 >
                
                
                
                   <div className="wt-post-media wt-img-effect zoom-slow relative">
                <a  className="block relative">
                <img src="/assets/pic/blogg6.jpg" alt="" />
                </a>
                </div>
                 
                 </motion.div>
                </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                              {/* <!-- VIDEO SECTION START --> */}
                            <motion.div className=" overflow-hide v-title-outer">
                          <div className="section-content">
                            <div className="custom-block-outer clearfix bg-cover">
                              <div
                                className="custom-right-part"
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  width: "100%",
                                }}
                              >
                                <div className="custom-right-part-content p-t80 p-b80">
                                  <div className="video-section-outer" style={{width:'100%'}}>
                                    <div className="video-section">
                                      {/* <img src="assets/images/video-img.jpg" alt="" /> */}
                                      <img
                                        src="/assets/pic/videoimg.jpg"
                                        alt=""
                                        style={{
                                          width: "100%",    // Adjust this as needed
                                          height: "auto",   // Or use a specific height value (e.g., '400px')
                                        }}
                                      />
                                      <a
                                        href="https://player.vimeo.com/video/34741214?color=ffffff&amp;title=0&amp;byline=0&amp;portrait=0"
                                        className="mfp-video play-now"
                                      >
                                        <i className="icon fa fa-play"></i>
                                        <span className="ripple"></span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                        
                                {/* {/* <!-- VIDEO  SECTION END --> */}
        </div>
      </div>
      <Footers />    
      <button className="scroltop">
      <span className="fa fa-angle-up  relative" id="btn-vibrate"></span>
    </button>      
</motion.div>
    </>
  )
}

export default Ourfactorytour
