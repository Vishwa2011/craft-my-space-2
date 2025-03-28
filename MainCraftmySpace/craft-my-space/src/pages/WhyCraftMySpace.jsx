import { Formik, Form, Field } from "formik";
import Navbar from "./Navbar";
import Footers from "./Footer";
import { useState } from "react";
import Swal from "sweetalert2";
import { BiPhoneCall } from "react-icons/bi";
const WhyCraftMySpace = () => {
  const [errors, setErrors] = useState({});
  return (
    <div className="page-wraper">
      <Navbar />
      <div className="page-content">
        {/* <!-- CONTENT START --> */}

        {/* <!-- INNER PAGE BANNER --> */}
        <div
          className="wt-bnr-inr overlay-wraper bg-parallax bg-top-center"
          data-stellar-background-ratio="0.5"
          style={{
            // backgroundImage: "url(assets/images/banner/2.jpg)",
            backgroundImage: "url(assets/pic/cms.jpg)",
          }}
        >
          <div className="overlay-main bg-black opacity-07"></div>
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name">
                  <h2 className="text-white">Why CraftMySpace?</h2>
                </div>
              </div>
              {/* <!-- BREADCRUMB ROW -->                             */}

              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>Why CraftMySpace?</li>
                </ul>
              </div>

              {/* <!-- BREADCRUMB ROW END -->                         */}
            </div>
          </div>
        </div>
        {/* <!-- INNER PAGE BANNER END --> */}

        {/* text start  */}
        <div className="container mt-5 mb-5">
          <div className="project-detail-outer">
            <div className="project-detail-containt">
              <div className="bg-white text-black">
                <h3>Crafting Bespoke Furniture Solutions Since 2009</h3>
                <p>
                  Bespoke fitted wardrobes, bedrooms, furniture, and kitchens
                  designed and installed by CraftMySpace.
                </p>
                <p>
                  We design, manufacture, and install premium-quality fitted
                  bedroom furniture across London and the UK. Our expertise lies
                  in creating tailor-made hinged door and sliding door
                  wardrobes, offering functional and stylish storage solutions.
                  CraftMySpace specializes in designing, producing, and
                  installing beautifully crafted built-in wardrobes, fitted
                  bedrooms, and innovative storage systems that cater to
                  individual needs and preferences. We are also among the
                  leading manufacturers of bespoke sliding wardrobe doors and
                  aluminum profile systems for Trade, Private, and B2B sectors.
                </p>
                <p>
                  Whether you're looking for a Sliding Glass Door Wardrobe, Full
                  Mirror Door Wardrobe, Hinged Door Wardrobe, Walk-in Wardrobe,
                  or a Custom Living or Bedroom Wardrobe, CraftMySpace is your
                  perfect choice. Our bespoke furniture and built-in wardrobes
                  are entirely made-to-measure, ensuring a perfect fit for your
                  home. We offer high-quality, affordable products and storage
                  solutions across London and the Home Counties.
                </p>
                <p>
                  Book your free, no-obligation wardrobe design consultation,
                  and our expert designers will visit your home, take precise
                  measurements, and understand your space requirements. Our
                  specialists will work with you to create a detailed 3D design
                  tailored to your space and preferences. Whether you need
                  closet doors, fitted bedrooms, custom sliding wardrobe doors,
                  or fully bespoke furniture, our team will help bring your
                  vision to life.
                  <p>
                    Designed to your exact specifications, our fitted furniture
                    experts ensure that each piece complements your interior
                    while maximizing storage space for your clothing,
                    accessories, and belongings. Every detail, from drawings to
                    technical specifications, is shared with you before
                    proceeding with production. Once approved, we move to the
                    next stage—bringing your dream furniture to life.
                  </p>
                  <p>
                    "Everything will fit perfectly!" – Since 2009, CraftMySpace
                    has been delivering high-quality fitted furniture and
                    wardrobes, ensuring every design meets your unique needs.
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* text end  */}

        {/* image start  */}
        <div className="section-full p-tb90">
          <div className="container-fluid project-detail-pic">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 m-b30">
                <div className="project-detail-pic ">
                  <div className="wt-media">
                    {/* <img src="assets/images/gallery/pic3.jpg" alt="" /> */}
                    <img src="/assets/pic/cms1.1.jpg" alt="" />
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 m-b30">
                <div className="project-detail-pic">
                  <div className="wt-media">
                    {/* <img src="assets/images/gallery/pic3.jpg" alt="" /> */}
                    <img src="/assets/pic/cms2.1.jpg" alt="" />
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-12 m-b30">
                <div className="project-detail-pic">
                  <div className="wt-media">
                    {/* <img src="assets/images/gallery/pic3.jpg" alt="" /> */}
                    <img src="/assets/pic/cms3.webp" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 m-b30">
                <div className="project-detail-pic ">
                  <div className="wt-media">
                    {/* <img src="assets/images/gallery/pic1.jpg" alt="" /> */}
                    <img src="/assets/pic/cms4.png" alt="" />
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 m-b30">
                <div className="project-detail-pic">
                  <div className="wt-media">
                    {/* <img src="assets/images/gallery/pic2.jpg" alt="" /> */}
                    <img src="/assets/pic/cms5.webp" alt="" />
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-12 m-b30">
                <div className="project-detail-pic">
                  <div className="wt-media">
                    {/* <img src="assets/images/gallery/pic3.jpg" alt="" /> */}
                    <img src="/assets/pic/cms6.webp" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* image end  */}

        {/* text start  */}
        <div className="container  mb-5">
          <div className="project-detail-outer">
            <div className="project-detail-containt">
              <div className="bg-white text-black">
                <p>
                  At <b>CraftMySpace</b>, we take immense pride in our
                  exceptional team!
                </p>
                <p>
                  Each of our specialists is deeply committed to delivering
                  outstanding craftsmanship and personalized service. We believe
                  that when clients return to collaborate with us on multiple
                  projects, it’s the highest compliment we can receive. Building
                  lasting relationships and earning customer trust is at the
                  heart of everything we do.
                </p>
                <p>
                  We create bespoke solutions tailored to your unique project
                  requirements, ensuring quality, reliability, and safety you
                  can always count on.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* text end  */}

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
        </div>
        {/* customer end  */}

        {/* slider start */}
<div style={{padding:'100px 0px'}}>
        <div className="wt-post-media">
                        
                            <div className="owl-carousel owl-fade-slider-one owl-btn-vertical-center owl-dots-bottom-right m-b30">
                            
                                <div className="item">
                                    <div className="wt-thum-bx">
                                        <img src="/assets/pic/slider1.webp" alt="" />
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
                        </div>
        {/* slider end */}


        {/* text start  */}
        <div className="container mt-5">
          <div className="project-detail-outer">
            <div className="project-detail-containt">
              <div className="bg-white text-black">
                <h3>Sliding Wardrobe Doors Manufacturer</h3>
                <p>
                  <b>CraftMySpace</b> is more than just a wardrobe specialist—we
                  are one of the leading sliding door manufacturers in the UK.
                  We design and produce high-quality sliding doors for other
                  wardrobe manufacturers and trade customers, allowing us to
                  offer the best prices without compromising on quality.
                </p>

                <p>
                  If you’re looking for a reliable supplier of sliding doors or
                  wardrobes for your business, we provide an extensive range of
                  stunning designs, top-tier craftsmanship, and fast lead times.
                  Our team is dedicated to offering expert guidance, and we
                  provide a free consultation to ensure you receive the perfect
                  solution.
                </p>
                <p>
                  Visit our{" "}
                  <b>sliding wardrobe door factory website — CraftMySpace</b>
                </p>
                <p>
                  We build every project to your exact specifications, ensuring
                  safety and durability you can trust.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* text end  */}

        {/* <!-- VIDEO SECTION START --> */}
        <div className="bg-gray overflow-hide v-title-outer">
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
                      {/* <img src="assets/images/video-img.jpg" alt="" /> */}
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
        </div>
        {/* <!-- VIDEO  SECTION END -->           */}
        {/* <!-- SECTION CONTENTG START --> */}
        <div className="section-full ">
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
    <a href="tel:(0044)07365 566 666" style={{ textDecoration: 'none', color: 'inherit' }}>
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
      style={{ textDecoration: 'none', color: 'inherit' }}
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
                       Unit 1, Grange Farm, Grange Way. Iver. Buckinghamshire - SL0 9NT
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
        <div className="section-full p-t80 p-b80" style={{ backgroundImage: `url('/assets/pic/modular-kitchen-cabinets.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container">
        <div className="section-content">
          <div className="contact-wrapper">
            {/* Left Side Content */}
            <div className="contact-info mt-4">
              <h2 style={{color:'white'}}>Book free design visit</h2>
              <p>
                            Enter your details and we will contact you shortly
                            to discuss booking your design visit.
                          </p>
                          <div className="contact-details">
  <p>
    <BiPhoneCall />
    <a 
      href="tel:(0044)07365 566 666" 
      style={{ textDecoration: 'none', color: 'inherit', marginLeft: '5px' }}
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
                    errors.number = "Phone number must be exactly 10 digits";
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
    </div>


        {/* book end  */}

        {/* <!-- CONTENT END --> */}
      </div>
      <Footers />
      <button className="scroltop">
        <span className="fa fa-angle-up  relative" id="btn-vibrate"></span>
      </button>
    </div>
  );
};

export default WhyCraftMySpace;
