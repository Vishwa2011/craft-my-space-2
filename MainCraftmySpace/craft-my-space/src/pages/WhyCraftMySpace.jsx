import { Formik, Form, Field } from "formik";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footers from "./Footer";
import { useState } from "react";
import Swal from "sweetalert2";
import { BiPhoneCall } from "react-icons/bi";

const WhyCraftMySpace = () => {
  return (
    <motion.div
      className="page-wraper"
      style={{ background: "#000" }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <Navbar />
      <div className="page-content">
        {/* Banner Section */}
        <motion.div
          className="wt-bnr-inr overlay-wraper bg-parallax bg-top-center"
          data-stellar-background-ratio="0.5"
          style={{ backgroundImage: "url(assets/pic/cms.jpg)" }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="overlay-main bg-black opacity-07"></div>
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name">
                  <h2 className="text-white">Why CraftMySpace?</h2>
                </div>
              </div>
              <ul className="wt-breadcrumb breadcrumb-style-2">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>Why CraftMySpace?</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          style={{ background: "#000" }}
          className="container mt-5 mb-5"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="project-detail-outer">
            <div className="project-detail-containt">
              <div className=" text-black">
                <h3 style={{color:'#B19777',fontSize:'37px'}}>Why Choose Us :-</h3>
               
                <ul style={{fontSize:'20px',color:'#fff',lineHeight:'50px',listStyle:'none'}}>
                  <li>	Team based project management.</li>
                  <li>	Reliable and experienced installers.</li>
                  <li>	A trained, qualified and fully equipped workforce.</li>
                  <li>	Skilled to undertake specialist installations.</li>
                  <li>	Pre-Start Meeting.</li>
                  <li>12 Months workmanship guarantee.</li>

                  <li>	10 Years product guarantee.</li>

                  

                </ul>
              
              </div>
            </div>
          </div>
        </motion.div>
        {/* image start  */}
        <motion.div className="section-full p-tb40">
          <div className="container-fluid project-detail-pic">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 m-b30">
                <div className="project-detail-pic ">
                  <div className="wt-media img-reflection">
                    {/* <img src="assets/images/gallery/pic3.jpg" alt="" /> */}
                    <img src="/assets/pic/cms1.1.jpg" alt="" />
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 m-b30">
                <div className="project-detail-pic">
                  <div className="wt-media img-reflection">
                    {/* <img src="assets/images/gallery/pic3.jpg" alt="" /> */}
                    <img src="/assets/pic/cms2.1.jpg" alt="" />
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-12 m-b30">
                <div className="project-detail-pic">
                  <div className="wt-media img-reflection">
                    {/* <img src="assets/images/gallery/pic3.jpg" alt="" /> */}
                    <img src="/assets/pic/cms3.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 m-b30">
                <div className="project-detail-pic ">
                  <div className="wt-media img-reflection">
                    {/* <img src="assets/images/gallery/pic1.jpg" alt="" /> */}
                    <img src="/assets/pic/cms4 (1).jpg" alt="" />
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 m-b30">
                <div className="project-detail-pic">
                  <div className="wt-media img-reflection">
                    {/* <img src="assets/images/gallery/pic2.jpg" alt="" /> */}
                    <img src="/assets/pic/cms5.webp" alt="" />
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-12 m-b30">
                <div className="project-detail-pic">
                  <div className="wt-media img-reflection">
                    {/* <img src="assets/images/gallery/pic3.jpg" alt="" /> */}
                    <img src="/assets/pic/cms6.webp" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        {/* image end  */}
        {/* mission-vision start  */}
       {/* <div style={{ borderBottom: "2px solid #B19777",paddingBottom:'40px' }}>
       <section
          className=" "
          style={{textAlign:'center' }}
        >
          <div className="">
            <h2 className="">
              What Drives Us
            </h2>
            <p className="" style={{textAlign:'center'}}>
              Our work isn’t just about designing beautiful interiors — it’s
              guided by a deep mission and a bold vision for the future of
              living spaces.
            </p>
            <div>
            <a
  href="/Mission"
  style={{
    background: '#B19777',
    padding: '15px',
    color: 'white',
    margin: '10px',
    fontWeight:500,
    textDecoration: 'none',
    border: '2px solid #B19777',
    transition: 'all 0.3s ease-in-out',
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
  Read Our Mission →
</a>

<a
  href="/Vision"
  style={{
    background: '#B19777',
    padding: '15px',
    color: 'white',
    margin: '10px',
    fontWeight:500,
    textDecoration: 'none',
    border: '2px solid #B19777',
    transition: 'all 0.3s ease-in-out',
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
  Read Our Vision →
</a>

            </div>
          </div>
        </section>
       </div> */}
 {/* mission-vision end  */}
        {/* text start  */}
        <motion.div className="mt-5" style={{ borderBottom: "2px solid #B19777" }}>
          <div className="container  mb-5">
            <div className="project-detail-outer">
              <div className="project-detail-containt">
                <div className=" text-black">
                 <h3 style={{color:'#B19777',fontSize:'37px'}}>About US :-</h3>
                  <p style={{color:'white'}}>
                  We have been making bespoke kitchens and bedrooms from more than 10 years, and in that time we’ve designed and crafted more than 100’s made to measure kitchens and Bedrooms. 
                  </p>
                  <p style={{color:'white'}}>
                  During the design process to create your perfect kitchen, we'll listen to your requirements and take on board your ideas, offer advice and guide you through the exciting process of crafting your dream, luxury bespoke kitchen.Our philosophy is to offer understated, premium-quality, combined with the best in thoughtful design and service, whilst always offering exceptional value for money. All of our kitchens/bedrooms are designed and made to order, unique to the needs of their owners. No matter what sort of look you choose for your home, our talented designers are on hand to make your dream space a reality. They will work closely with you to design a space that meets your brief and exceeds your expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        {/* text end  */}
        {/* customer start  */}
        <motion.div className=" overflow-hide v-title-outer">
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
                          320
                        </h1>
                        <h4 className="wt-tilte m-b0">Completed Projects</h4>
                      </div>
                    </div>

                    <div className="col-md-4 col-sm-4">
                      <div className="m-b30 text-black wt-icon-box-wraper center">
                        <h1 className="counter font-weight-800 m-b5 site-text-primary">
                          206
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
        </motion.div>
        {/* customer end  */}

        {/* slider start */}
        <motion.div
          style={{ padding: "100px 0px", borderBottom: "2px solid #B19777" }}
        >
          <div className="wt-post-media">
            <div className="owl-carousel owl-fade-slider-one owl-btn-vertical-center owl-dots-bottom-right m-b30">
              <div className="item">
                <div className="wt-thum-bx">
                  <img src="/assets/pic/corner-sofas.jpg" alt="" />
                </div>
              </div>

              <div className="item">
                <div className="wt-thum-bx">
                  <img src="/assets/pic/slider2.jpg" alt="" />
                </div>
              </div>

              <div className="item">
                <div className="wt-thum-bx">
                  <img src="/assets/pic/slider3.webp" alt="" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        {/* slider end */}
        {/* text start  */}
        <motion.div style={{ borderBottom: "2px solid #B19777" }}>
          <div className="container mt-5">
            <div className="project-detail-outer">
              <div className="project-detail-containt">
                <div className=" text-black">
                 
                  <p style={{color:'white'}}>
                  Please browse our website for inspiration for your project, more images and information about some of the bespoke kitchen / Bedroom designs we have completed for our clients and more information about the way in which we work. 
                  </p>

                  <p style={{color:'white'}}>
                  You can also find lots of useful kitchen planning information and projects we've been working on by visiting our Instagram, Pinterest and Facebook. pages.
                  </p>
                  
                  <p style={{color:'white'}}>
                  If you have any questions, don’t hesitate to call us on 07365 566 666. Or, if you prefer, use our showroom locator to find our showroom where one of our talented kitchen designers will be delighted to assist you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        {/* text end  */}
        {/* <!-- VIDEO SECTION START --> */}
        <motion.div className=" overflow-hide v-title-outer" style={{borderBottom:'2px solid #B19777'}}>
          <div className="section-content">
            <div className="custom-block-outer clearfix bg-cover">
              <div
                className="custom-right-part "
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <div className="custom-right-part-content p-t80 p-b80">
                  <div className="video-section-outer">
                    <div className="video-section">
                     
                      <img src="/assets/pic/videoimg.jpg" alt="" />
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
        
        {/* <!-- VIDEO  SECTION END -->           */}
        {/* <!-- SECTION CONTENTG START --> */}
        <motion.div className="section-full ">
          {/* <!-- LOCATION BLOCK--> */}
          <div className="container">
            {/* <!-- GOOGLE MAP & CONTACT FORM --> */}
            <div className="section-content">
              <div className="contact-info text-center m-t80 m-b50">
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-4">
                    <div className="wt-icon-box-wraper center m-b30">
                      <div className="icon-md m-b20">
                        <i className="sl-icon-phone"></i>
                      </div>
                      <div className="icon-content">
                        <h5 className="m-t0 font-weight-500">Phone number</h5>
                        <p>
                          <a
                            href="tel:(0044)07365 566 666"
                            style={{ textDecoration: "none", color: "inherit" }}
                          >
                            (0044)07365 566 666
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="wt-icon-box-wraper center m-b30">
                      <div className="icon-md m-b20">
                        <i className="sl-icon-envolope"></i>
                      </div>
                      <div className="icon-content">
                        <h5 className="m-t0 font-weight-500">Email address</h5>
                        <p>
                          <a
                            href="mailto:Info@craftmyspace.co.uk"
                            style={{ textDecoration: "none", color: "inherit" }}
                          >
                            Info@craftmyspace.co.uk
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="wt-icon-box-wraper center m-b30">
                      <div className="icon-md m-b20">
                        <i className="sl-icon-map"></i>
                      </div>
                      <div className="icon-content">
                        <h5 className="m-t0 font-weight-500">Address info</h5>
                        <p>
                          Unit 1, Grange Farm, Grange Way. Iver. Buckinghamshire
                          - SL0 9NT
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345086164!2d144.95592831590437!3d-37.8172097420216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1fcd5bb%3A0x2e3f35dd18f56b1d!2sMelbourne%2C%20Victoria%2C%20Australia!5e0!3m2!1sen!2sin!4v1632983659483!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: "0px" }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>

        {/* <!-- SECTION CONTENT END --> */}
        {/* book start  */}
        <motion.div
          className="section-full p-t80 p-b80"
          style={{
            backgroundImage: `url('/assets/pic/modular-kitchen-cabinets.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container">
            <div className="section-content">
              <div className="contact-wrapper">
                {/* Left Side Content */}
                <div className="contact-info mt-4">
                  <h2 style={{ color: "white" }}>Book free design visit</h2>
                  <p>
                    Enter your details and we will contact you shortly to
                    discuss booking your design visit.
                  </p>
                  <div className="contact-details">
                    <p>
                      <BiPhoneCall />
                      <a
                        href="tel:(0044)07365 566 666"
                        style={{
                          textDecoration: "none",
                          color: "inherit",
                          marginLeft: "5px",
                        }}
                      >
                        (0044)07365 566 666
                      </a>
                    </p>
                  </div>
                </div>

                {/* Right Side Form */}
                <div className="contact-form p-a30 bg-gray">
                  <Formik
                    initialValues={{
                      username: "",
                      email: "",
                      number: "",
                      address: "",
                      message: "",
                    }}
                    validate={(values) => {
                      let errors = {};

                      const emailRegex =
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                      if (!values.email.trim()) {
                        errors.email = "Email is required";
                      } else if (!emailRegex.test(values.email)) {
                        errors.email = "Please enter a valid email address";
                      }

                      const phoneRegex = /^[0-9]{10}$/;
                      if (!values.number.trim()) {
                        errors.number = "Phone number is required";
                      } else if (!phoneRegex.test(values.number)) {
                        errors.number =
                          "Phone number must be exactly 10 digits";
                      }

                      return errors;
                    }}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                      console.log("Form Submitted:", values);

                      Swal.fire({
                        title: "Success!",
                        text: "Form submitted successfully!",
                        icon: "success",
                        confirmButtonText: "OK",
                      });

                      resetForm();
                      setSubmitting(false);
                    }}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      handleBlur,
                      handleChange,
                    }) => (
                      <Form className="cons-contact-form">
                        {/* <h3 className="m-b5 text-uppercase">Get In Touch</h3> */}

                        <Field
                          name="username"
                          type="text"
                          className="form-control"
                          placeholder="Full Name"
                          onChange={(e) => {
                            const regex = /^[A-Za-z\s]*$/;
                            if (regex.test(e.target.value)) {
                              handleChange(e);
                            }
                          }}
                        />

                        <Field
                          name="email"
                          type="text"
                          className="form-control"
                          placeholder="Email Address"
                        />
                        {errors.email && touched.email && (
                          <p className="error-message">{errors.email}</p>
                        )}

                        <Field
                          name="number"
                          type="tel"
                          className="form-control"
                          placeholder="Phone Number"
                          value={values.number}
                          onChange={(e) => {
                            const value = e.target.value;
                            if (/^\d{0,10}$/.test(value)) {
                              handleChange(e);
                            }
                          }}
                        />
                        {errors.number && touched.number && (
                          <p className="error-message">{errors.number}</p>
                        )}

                        <Field
                          name="address"
                          type="text"
                          className="form-control"
                          placeholder="Location"
                        />

                        <Field
                          name="message"
                          as="textarea"
                          rows="4"
                          className="form-control"
                          placeholder="How can we help?"
                        />

                        <button
                          type="submit"
                          className="site-button radius-no text-uppercase"
                          disabled={Object.keys(errors).length > 0}
                        >
                          SEND
                        </button>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* book end  */}
        {/* Footer Section */}
      </div>
      <Footers />
      <button className="scroltop">
        <span className="fa fa-angle-up  relative" id="btn-vibrate"></span>
      </button>
    </motion.div>
  );
};

export default WhyCraftMySpace;
