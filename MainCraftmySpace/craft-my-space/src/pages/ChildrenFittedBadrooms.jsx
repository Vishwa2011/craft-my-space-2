import React from 'react'
import Navbar from './Navbar'
import Footers from './Footer'
import { motion } from "framer-motion";

const ChildrenFittedBadrooms = () => {
  return (
    <motion.div     className="page-wraper"
    style={{ background: "#000" }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}>
    <Navbar />
    <div className="page-content">
       {/* <!-- INNER PAGE BANNER --> */}
       <div
          className="wt-bnr-inr overlay-wraper bg-parallax bg-top-center"
          data-stellar-background-ratio="0.5"
          style={{
            backgroundImage: "url(assets/pic/child.webp)",
          }}
        >
          <div className="overlay-main bg-black opacity-07"></div>
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name">
                  <h2 className="text-white">Children’s Fitted Bedrooms</h2>
                </div>
              </div>
              {/* <!-- BREADCRUMB ROW -->                             */}

              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>Fitted Wardrobes</li>
                  <li>Children’s Fitted Bedrooms</li>
                </ul>
              </div>

              {/* <!-- BREADCRUMB ROW END -->                         */}
            </div>
          </div>
        </div>
        {/* <!-- INNER PAGE BANNER END --> */}
         {/* text start  */}
        <motion.div   style={{borderBottom:'2px solid #B19777'}}>
        <div className="container mt-5 mb-5" >
            <div className="project-detail-outer">
              <div className="project-detail-containt">
                <div className=" text-black">
                  <h3>Making Your Child’s Life More Practical with Smart Wardrobe Solutions</h3>
                  
                  <p>
                  As children grow, so do their storage needs. Our custom-fitted bedroom wardrobes are designed with adjustable shelves, allowing you to modify the layout as needed. This flexibility ensures that the wardrobe evolves with your child, offering ample space for clothes, toys, books, and more. With durable materials and smart storage options, these wardrobes are a long-term investment that saves you from frequent replacements.
                  </p>
                  <p>From playful colors and creative patterns to sleek modern designs, we offer a wide range of sliding wardrobes to match your child’s personality and room décor. Whether you prefer built-in or freestanding options, every wardrobe is crafted to fit seamlessly into your child’s space. More than just storage, these wardrobes encourage organization, making it easier for kids to keep their room tidy.</p>
                  <h3>Encouraging Organization with Fun & Functional Designs</h3>
                  <p>Keeping a child’s bedroom tidy can be a challenge, but the right storage solutions make all the difference. Instead of constantly reminding them to clean up, provide them with a well-designed sliding wardrobe that makes organization effortless. With dedicated spaces for their belongings, kids learn the habit of placing items back in their designated spots, creating a clutter-free and stress-free environment.</p>
                  <p>Our collection includes mirror sliding wardrobes, 2-door, 3-door, and 4-door options, as well as glossy and custom-themed designs. Whether your child’s room follows a fun theme or a minimalist style, <b>CraftMySpace</b> offers tailor-made sliding wardrobes that blend practicality with creativity—ensuring both you and your child love the space they live in.</p>
                 
                 
                </div>
                <div className=" text-black">
                  <h3>Children’s Fitted Wardrobes</h3>
                  
                  <p>
                  Give your child the perfect storage solution with our custom-fitted wardrobes, designed to adapt as they grow. With adjustable shelves and spacious compartments, these wardrobes provide ample space for clothes, toys, and essentials while keeping everything organized. Built for durability and functionality, they ensure a clutter-free and stylish bedroom for years to come.
                  </p>
                 <p>From vibrant colors and playful designs to sleek modern finishes, our fitted wardrobes seamlessly blend with any décor. Whether you prefer built-in or freestanding options, every wardrobe is crafted to maximize space while making organization fun and effortless for your child. <b>CraftMySpace</b> brings you the perfect balance of practicality and creativity in children's storage solutions.</p>
                 
                </div>
              </div>
            </div>
          </div>
        </motion.div  >
          {/* text end  */}
            {/* customer start  */}
            <motion.div   className=" overflow-hide v-title-outer" style={{textAlign:'center',borderBottom:'2px solid #B19777'}}>
            <div className="section-content">
              <div className="custom-block-outer clearfix bg-cover">
                {/* <div className="custom-right-part "> */}
                <div className="custom-right-part-content ">
                  {/* <div className="video-section-outer"> */}
                  <div className="our-ability m-t50">
                    <div className="row">
                      <div className="col-md-4 col-sm-4">
                        <div className="m-b30 text-black  center">
                          <h1 className=" font-weight-800 m-b5 site-text-primary">
                           <img src="/assets/pic/craft1.png" alt="" />
                          </h1>
                          <h4 className="wt-tilte m-b0">10 years warranty</h4>
                        </div>
                      </div>

                      <div className="col-md-4 col-sm-4">
                        <div className="m-b30 text-black  center">
                          <h1 className=" font-weight-800 m-b5 site-text-primary">
                            <img src="/assets/pic/craft2.png" alt="" />
                          </h1>
                          <h4 className="wt-tilte m-b0">The best materials</h4>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-4">
                        <div className="m-b30 text-black  center">
                          <h1 className=" font-weight-800 m-b5 site-text-primary">
                            <img src="/assets/pic/craft4.png" alt="" />
                          </h1>
                          <h4 className="wt-tilte m-b0">Fast production</h4>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  {/* </div> */}
                </div>
                {/* </div> */}
              </div>
            </div>
          </motion.div  >
          {/* customer end  */}
          {/* img start  */}
          <motion.div   className="blog-post date-style-1 blog-detail text-black" style={{background:'#000',}}>
                        
                        
                        <div className="wt-post-info p-a30 ">
                           
                            
                            <div className="wt-blog-post-media">
                                <div className="row m-t30">
                                    <div className="col-md-4  m-b30">
                                        <div className="wt-media">
                                            <img src="/assets/pic/walk1.png" alt="" />
                                        </div>	
                                    </div>
                                    
                                    <div className="col-md-4  m-b30">
                                        <div className="wt-media">
                                            <img src="/assets/pic/walk2.png" alt="" />
                                        </div>	
                                    </div>
                                    
                                    <div className="col-md-4 m-b30">
                                        <div className="wt-media">
                                            <img src="/assets/pic/walk3.png" alt="" />
                                        </div>	
                                    </div>                                                                                     
                                    
                                </div>
                            </div>
                            
                           
                                                                  
                        </div>
                        
                    </motion.div  >
          {/* img end */}

    </div>
      
      <Footers />
       {/* <!-- BUTTON TOP START --> */}
       <button className="scroltop">
          <span className="fa fa-angle-up  relative" id="btn-vibrate"></span>
        </button>
    </motion.div >
  )
}

export default ChildrenFittedBadrooms
