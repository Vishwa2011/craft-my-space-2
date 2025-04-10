import React from "react";
import Navbar from "./Navbar";
import Footers from "./Footer";
import { motion } from "framer-motion";
const ChildrensBedroomSlidingDoorWardrobes = () => {
  const pageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  return (
    <motion.div className="page-wraper" variants={pageVariants}  style={{background:'#000'}} initial={{ opacity: 0, y: 50 }}
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
              backgroundImage: "url(assets/pic/kids-header.jpg)",
            }}
          >
            <div className="overlay-main bg-black opacity-07"></div>
            <div className="container">
              <div className="wt-bnr-inr-entry">
                <div className="banner-title-outer">
                  <div className="banner-title-name">
                    <h2 className="text-white " >
                      Children’s Bedroom Sliding Door Wardrobes
                    </h2>
                  </div>
                </div>
                {/* <!-- BREADCRUMB ROW -->                             */}

                <div>
                  <ul className="wt-breadcrumb breadcrumb-style-2">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>fitted wardrobes</li>
                    <li>Sliding Wardrobes</li>
                    <li>Children’s Bedroom Sliding Door Wardrobes</li>
                  </ul>
                </div>

                {/* <!-- BREADCRUMB ROW END -->                         */}
              </div>
            </div>
          </div>
          {/* <!-- INNER PAGE BANNER END --> */}

          {/* <!--  SECTION START --> */}
          <motion.div className="section-full p-t80 p-b80 b overflow-hide"  style={{background:'#000',borderBottom:'2px solid #B19777'}} initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}>
            <div className="container">
              <div className="section-content">
                <div className="row">
                  <motion.div className="col-lg-6 col-md-12" initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
                    <div className="arc-home-about-left">
                      <div className="arc-home-left-content  "  style={{background:'#000'}}>
                        <h3 className="m-t0 wt-tilte-light" style={{color:'#B19777'}}>
                          Making Your Child’s Life More Practical
                        </h3>
                        <p>
                        Keeping a child’s room tidy can be a challenge, but the right storage solutions make organization effortless. Our children’s fitted wardrobes are designed to grow with your child, featuring adjustable shelves and customizable compartments that adapt to their changing needs. With ample storage space, these wardrobes help keep clothes, toys, and books neatly arranged, making daily routines smoother and more efficient.
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
                            <img src="/assets/pic/bed-web (1).jpg" alt="" />
                          </div>
                        </div>

                        <div className="col-md-6 col-sm-6 masonry-item">
                          <div className="wt-media m-b20  img-reflection">
                            <img src="/assets/pic/huffpost (1).webp" alt="" />
                          </div>
                        </div>

                        <div className="col-md-6 col-sm-6 masonry-item">
                          <div className="wt-media m-b20  img-reflection">
                            <img src="/assets/pic/white-shaker (1).jpg" alt="" />
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-6 masonry-item">
                          <div className="wt-media m-b20  img-reflection">
                            <img src="/assets/pic/childbath (1).jpg" alt="" />
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
           {/* text start  */}
         <div className="container mt-5 mb-5">
            <div className="project-detail-outer">
              <div className="project-detail-containt">
                <div className=" text-black">
                  
                  <p>
                  Available in a variety of colors, styles, and finishes, our sliding wardrobes not only maximize space but also add a stylish touch to any room. Whether you choose a built-in or freestanding design, these wardrobes make organizing fun for kids while ensuring a clutter-free and functional living space. CraftMySpace offers the perfect blend of practicality and creativity to enhance your child’s room.
                  </p>
                 
                <h3 style={{color:'#B19777'}}>Simplifying Your Child’s Daily Routine with Practical Storage</h3>
                <p>A well-organized space plays a crucial role in a child’s daily routine, making it easier for them to find their clothes, toys, and school essentials. Our custom-fitted wardrobes are designed with smart storage solutions like adjustable shelves and spacious compartments, ensuring that everything has its place. As your child grows, the wardrobe adapts, eliminating the need for frequent replacements.</p>
                <p>With a wide range of colors, finishes, and styles to choose from, these wardrobes seamlessly blend with any bedroom décor. More than just storage, they encourage independence by helping children develop good organizational habits. <b>CraftMySpace</b> creates wardrobes that make life simpler, tidier, and more enjoyable for both parents and kids.</p>
                 
                 
                </div>
                
              </div>
            </div>
          </div>
          {/* text end  */}
        </div>
        {/* <!-- CONTENT END --> */}
      </motion.div>
      <Footers />
      {/* <!-- BUTTON TOP START --> */}
      <button className="scroltop">
        <span className="fa fa-angle-up  relative" id="btn-vibrate"></span>
      </button>
      
    </motion.div>
  );
};

export default ChildrensBedroomSlidingDoorWardrobes;
