import React, { useState } from 'react'
import Footers from './Footer'
import Navbar from './Navbar'
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";


const faqs = [
  {
    question: "What is the lead time for production? ",
    answer:
      "Our production lead time is typically two to three months. This timeframe ensures that we meticulously follow all necessary technological stages in the manufacturing process. These stages include material preparation, drying, and resting periods, which help eliminate internal stress within the wood",
  },
  {
    question: "What does the cost depend on? ",
    answer:
      "The cost is determined by several key factors, including the size and quantity of the wooden products, the materials used (such as solid wood, MDF, or veneers), the type of fittings selected, and the complexity of the finishing process..",  
  },

];

const Joinery = () => {

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
       <div className="page-wraper">
        <Navbar />
        <div className="page-content">
        <div
            className="wt-bnr-inr overlay-wraper bg-parallax bg-top-center"
            data-stellar-background-ratio="0.5"
            style={{ backgroundImage: "url(assets/pic/bespokeheder.jpg)" }}
          >
            <div className="overlay-main bg-black opacity-07"></div>
            <div className="container">
              <div className="wt-bnr-inr-entry">
                <div className="banner-title-outer">
                  <div className="banner-title-name">
                    <h2 className="text-white">Bespoke Joinery</h2>
                  </div>
                </div>

                <div>
                  <ul className="wt-breadcrumb breadcrumb-style-2">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>Bespoke Joinery</li>
                  </ul>
                </div>
              </div>
            </div>
            
          </div>

          {/* joinery start */}
          <div class="container py-5">
    <div class="row align-items-center">
        {/* <!-- Text Section --> */}
        <div class="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <h3>What is joinery?</h3>
            <p>Joinery refers to the craft of constructing wooden structures, fittings, and furniture by precisely joining pieces of wood together without the use of nails or screws in traditional methods. It involves skilled techniques such as mortise and tenon, dovetail, and tongue-and-groove joints to create durable and aesthetically pleasing woodwork.</p>
            <p>Joinery is the art and craft of working with wood to create structures, furniture, and decorative elements through precise joining techniques. It involves cutting, shaping, and assembling wood pieces to produce durable and aesthetically appealing products. Unlike carpentry, which focuses on broader construction tasks, joinery specializes in intricate details such as doors, windows, staircases, and cabinetry.</p>
        </div>
        
        {/* <!-- Image Section --> */}
        <div class="col-lg-6 col-md-12 text-center">
            <img src="/assets/pic/joinery.jpeg" class="img-fluid rounded" alt="Joinery Image"   />
        </div>
    </div>
    
    {/* <!-- Features Section --> */}
    <div class="row text-center mt-5">
        <div class="col-6 col-md-3 mb-4">
            <img src="https://bravolondon.co.uk/wp-content/uploads/2022/10/h1.png" alt="Warranty" class="img-fluid mb-2" />
            <h4>10 Years Warranty</h4>
        </div>
        <div class="col-6 col-md-3 mb-4">
            <img src="https://bravolondon.co.uk/wp-content/uploads/2022/10/h2.png" alt="Materials" class="img-fluid mb-2" />
            <h4>The Best Materials</h4>
        </div>
        <div class="col-6 col-md-3 mb-4">
            <img src="https://bravolondon.co.uk/wp-content/uploads/2022/10/h4.png" alt="Production" class="img-fluid mb-2" />
            <h4>Fast Production</h4>
        </div>
        <div class="col-6 col-md-3 mb-4">
            <img src="https://bravolondon.co.uk/wp-content/uploads/2022/10/h3.png" alt="Installation" class="img-fluid mb-2" /> 
            <h4>Professional Installation</h4>
        </div>
    </div>
</div>

          {/* joinery end */}
              {/* card start  */}
        <div className="container mt-5">
          <div className="portfolio-wrap mfp-gallery work-grid row clearfix">
            <div class="col-lg-6 col-md-12 mb-4 mb-lg-0">
              <h3>Joinery Production</h3>
              <p>Combining advanced technology with artisanal expertise, our joinery production delivers precision-crafted woodwork tailored to your needs. Our skilled craftsmen, trained in leading European techniques, transform premium-quality wood into elegant furniture, custom doors, decorative wall and ceiling panels, arches, columns, beams, and staircases. Whether for residential or commercial spaces, we ensure every piece reflects exceptional craftsmanship, durability, and timeless aesthetics, elevating interiors with bespoke joinery solutions</p>
            </div>
            <div className="masonry-item cat-1 col-lg-4 col-md-6 col-sm-12 m-b30">
              <div className="project-img-effect-1">
                <img
                  src="/assets/pic/joinery1.jpg"
                  alt=""
                />
                <div className="wt-info">
                  <h4 className="wt-tilte text-white  m-b10 m-t0">
                  Wooden Ceilings
                  </h4>
                
                </div>
              </div>
            </div>
            <div className="masonry-item cat-2 col-lg-4 col-md-6 col-sm-12 m-b30">
              <div className="project-img-effect-1">
                <img
                  src="/assets/pic/joinery2.jpg"
                  alt=""
                />
                <div className="wt-info">
                  <h4 className="wt-tilte text-white  m-b10 m-t0">
                  Bespoke Kitchens
                  </h4>
                 
                </div>
              </div>
            </div>
            <div className="masonry-item cat-3 col-lg-4 col-md-6 col-sm-12 m-b30">
              <div className="project-img-effect-1">
                <img
                  src="/assets/pic/joinery3.jpg"
                  alt=""
                />
                <div className="wt-info">
                  <h4 className="wt-tilte text-white  m-b10 m-t0">
                  Wooden Furniture
                  </h4>
                 
                </div>
              </div>
            </div>

            <div className="masonry-item cat-4 col-lg-4 col-md-6 col-sm-12 m-b30">
              <div className="project-img-effect-1">
                <img
                  src="/assets/pic/joinery4.jpg"
                  alt=""
                />
                <div className="wt-info">
                  <h4 className="wt-tilte text-white  m-b10 m-t0">
                  Walk in Wardrobes
                  </h4>
                  
                </div>
              </div>
            </div>
            <div className="masonry-item cat-5 col-lg-4 col-md-6 col-sm-12 m-b30">
              <div className="project-img-effect-1">
                <img
                  src="/assets/pic/joinery5.jpg"
                  alt=""
                />
                <div className="wt-info">
                  <h4 className="wt-tilte text-white  m-b10 m-t0">
                  Wooden Windows
                  </h4>
                
                </div>
              </div>
            </div>
            <div className="masonry-item cat-6 col-lg-4 col-md-6 col-sm-12 m-b30">
              <div className="project-img-effect-1">
                <img
                  src="/assets/pic/joinery6.jpg"
                  alt=""
                />
                <div className="wt-info">
                  <h4 className="wt-tilte text-white  m-b10 m-t0">
                  Wall Panels
                  </h4>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* card end  */}
        {/* <!-- OUR STORY SECTION START --> */}
            <div class="bg-white" >
                    
                <div class="section-content">                    
             		<div class="row awards-win-section">    
                  <div className='col-lg-6 col-md-12  mt-4'>
                    <div className='awards-win pb-0'>
                    <h3>Joinery and Furniture Production</h3>
                    <p>Our joinery and furniture production combines traditional craftsmanship with modern technology to create bespoke woodwork of the highest quality. From custom doors, windows, and staircases to elegant furniture and architectural wood elements, we manufacture pieces that seamlessly blend functionality and aesthetics.</p>
                        <div class="  awards-win-section-left bg-cover bg-no-repeat bg-center bg-gray  "  >
                         <img src='/assets/pic/bench (1).jpg'/>
                        	{/* <div class="awards-win-left-content">
                            </div> */}
                        </div>
                        </div>
                  </div>                                     	
                        
                        <div class="col-lg-6 col-md-12 awards-win-section-right bg-gray  mt-4">
                        	<div class="awards-win-right-content">
                                <div class="awards-win">
                               
                                <div>
                                       <h3>Benefits of Custom Joinery</h3>
                                       <p>Our in-house joinery production is structured into three key areas: precision-crafted windows, expertly designed doors, and the creation of bespoke furniture, staircases, and other interior and exterior wood elements. By maintaining full control over production, we ensure exceptional quality, seamless customization, and the perfect blend of aesthetics and durability.</p>
                                  </div>
                                    <ul>
                                                                            
                                        {/* <!-- COLUMNS 2 --> */}
                                        <li>
                                            <h2 class="title-year"><img src="https://bravolondon.co.uk/wp-content/uploads/2022/10/h1.png" alt="" /></h2>
                                            <h4 class=" m-b10">Superior Craftsmanship & Precision</h4>
                                            <p>Utilizing state-of-the-art Italian woodworking equipment, a team of over 100 skilled carpenters, and advanced automation, we ensure unmatched precision in every joinery product. </p>
                                        </li>                                   
                                        {/* <!-- COLUMNS 3 --> */}
                                        <li>
                                            <h2 class="title-year"><img src="https://bravolondon.co.uk/wp-content/uploads/2022/10/h1.png" alt="" /></h2>
                                            <h4 class=" m-b10">Uncompromising Quality & Finish</h4>
                                            <p>Our premium craftsmanship is achieved through meticulous material selection, precise preparation, and expert finishing techniques.</p>
                                        </li>                                    
                                        {/* <!-- COLUMNS 4 --> */}
                                        <li>
                                           <h2 class="title-year"><img src="https://bravolondon.co.uk/wp-content/uploads/2022/10/h1.png" alt="" /></h2>
                                           <h4 class=" m-b10">End-to-End Joinery Solutions</h4>
                                           <p>Our team guarantees careful delivery and professional, mess-free installation, bringing your project to life with perfection and ease.</p>
                                       </li>                                    
                                                                          
                                    </ul>
                                
                                </div>
                            </div>
                        </div>                                        
                    </div>
                </div>
            </div>       
            {/* <!-- OUR STORY SECTION END -->    */}

            {/* customer start  */}
          <div className="bg-gray overflow-hide v-title-outer">
            <div className="section-content">
              <div className="custom-block-outer clearfix bg-cover">
                {/* <div className="custom-right-part "> */}
                <div className="custom-right-part-content ">
                  {/* <div className="video-section-outer"> */}
                  <div className="our-ability m-t50">
                    <div className="row">
                      <div className="col-md-4 col-sm-4">
                        <div className="m-b30 text-black wt-icon-box-wraper center">
                          <h1 className="counter font-weight-800 m-b5 site-text-primary">
                          1856  
                          </h1>
                          <h4 className="wt-tilte m-b0">Completed Projects</h4>
                        </div>
                      </div>

                      <div className="col-md-4 col-sm-4">
                        <div className="m-b30 text-black wt-icon-box-wraper center">
                          <h1 className="counter font-weight-800 m-b5 site-text-primary">
                          1498 
                          </h1>
                          <h4 className="wt-tilte m-b0">Satisfied Clients</h4>
                        </div>
                      </div>

                      <div className="col-md-4 col-sm-4">
                        <div className="m-b30 text-black wt-icon-box-wraper center">
                          <h1 className="counter font-weight-800 m-b5 site-text-primary">
                            12
                          </h1>
                          <h4 className="wt-tilte m-b0">Years in Business</h4>
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

        {/* faq start */}
        <section className="faqs section-padding position-re" style={{ padding: "140px 0px" }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-6 text-center mb-4 mb-md-0">
            <img src="/assets/pic/faq.webp" alt="FAQ" className="img-fluid" />
          </div>
          <div className="col-lg-7 col-md-6">
            <div className="sec-head md-mb80">
              <h6 className="sub-title main-color mb-15">FAQS</h6>
              <h2 className="fontmanage">Frequently Asked Questions</h2>
            </div>
            <div className="accordion">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`item mb-15 ${openIndex === index ? "active" : ""}`}
                  onClick={() => toggleFAQ(index)}
                  style={{
                    border: "1px solid #ddd",
                    borderRadius: "10px",
                    padding: "15px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    background: openIndex === index ? "#f7f7f7" : "#fff",
                    boxShadow: openIndex === index ? "0px 4px 10px rgba(0,0,0,0.1)" : "none",
                    marginBottom: "15px",
                  }}
                >
                  <div className="title d-flex justify-content-between align-items-center">
                    <h6 style={{ margin: 0, fontSize: "16px" }}>{faq.question}</h6>
                    {openIndex === index ? (
                      <FaMinus style={{ color: "#ff6600" }} />
                    ) : (
                      <FaPlus style={{ color: "#333" }} />
                    )}
                  </div>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        className="accordion-info"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: "hidden", paddingTop: "10px" }}
                      >
                        <p className="mb-0" style={{ color: "#555" }}>{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
        {/* faq end */}

          {/* <!-- WELCOME SECTION START --> */}
          <div className="section-full p-t80 p-b80 bg-gray overflow-hide home-2-about-outer">
                <div className="container">
                    <div className="section-content">
                    	<div className="row">
                   
                    		<div className="col-xl-5  col-lg-6 col-md-12" >
                            	<div className="home-2-about-left-outer">
                                    <div className="section-head clearfix">
                                        <div className="wt-tilte-main">
                                            <small className="wt-small-title">Our Company</small>
                                            <h2 className="m-b5">About Detail</h2>
                                        </div>
                                    </div>
                                    <div className="home-2-about-left">
                                        <div className="home-2-about-left-content  bg-secondry p-a50 text-white">
                                            <h2 className="m-t0 wt-title">Exploring the Quality Ways through Design.</h2>
                                            <p>We are uncompetitor in architectural solutions Friendly neighbour there that power.Keep away Architecture who try to Ambitions people do that really </p>
                                            <a href="" className="site-button-link white">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        	<div className="col-xl-7 col-lg-6 col-md-12">
                          <div className="blog-post date-style-1 blog-detail text-black">
              <div className="wt-post-media">
                <div className="owl-carousel owl-fade-slider-one owl-btn-vertical-center owl-dots-bottom-right m-b30">
                  <div className="item">
                    <div className="wt-thum-bx">
                      <img src="/assets/pic/Kitchen-Furniture (1).jpg" alt="" />
                    </div>
                  </div>

                  <div className="item">
                    <div className="wt-thum-bx">
                      <img src="/assets/pic/jupiter (1).jpg" alt="" />
                    </div>
                  </div>

                  <div className="item">
                    <div className="wt-thum-bx">
                      <img src="/assets/pic/bathroom-design (2).jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>

            </div> 
                            </div> 
                                                            
                        </div>
                    </div>
                </div>
            </div>   
            {/* <!-- WELCOME  SECTION END --> */}
        </div>
        <Footers />
        <button className="scroltop">
          <span className="fa fa-angle-up  relative" id="btn-vibrate"></span>
        </button>
        </div>
    </>
  )
}

export default Joinery
