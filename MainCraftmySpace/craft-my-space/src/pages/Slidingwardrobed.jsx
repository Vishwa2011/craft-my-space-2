
import React from "react";
import { motion } from "framer-motion";
import Footers from "./Footer";
import Navbar from "./Navbar";

const services = [
  {
    title: "Childrens Bedroom Sliding Door Wardrobes",
    description:
      "Children's Bedroom Sliding Door Wardrobes – Space-saving and stylish, offering easy access, smart storage solutions, and a fun, modern design for kids' rooms.",
    image: "/assets/pic/1 (1).webp",
    link: "/ChildrensBedroomSlidingDoorWardrobes",
  },
  {
    title: "Sliding Hallway Wardrobes",
    description:
      "Enhance your storage with bespoke, space-saving designs that offer seamless access, smart organization, and a sleek, modern aesthetic.",
    image: "/assets/pic/2 (1).jpg",
    link: "/SlidingHallwayWardrobes",
  },
  {
    title: "Sliding Home Office Wardrobes",
    description:
      "Optimize your workspace with sleek, space-saving wardrobes, offering organized storage and a modern, professional look.",
    image: "/assets/pic/33 (1).jpg",
    link: "/SlidingHomeOfficeWardrobes",
  },
  {
    title: "Sliding Living Area Wardrobes",
    description:
      "Stylish and functional, these space-saving wardrobes offer seamless storage solutions while enhancing your living space's aesthetic.",
    image: "/assets/pic/4 (1).webp",
    link: "/SlidingLivingAreaWardrobes",
  },
  {
    title: "Sliding Bedroom Wardrobes ",
    description:
      "Maximize space and style with our sleek sliding bedroom wardrobes, designed for effortless organization and modern elegance.",
    image: "/assets/pic/bedroom1.jpg",
    link: "/SlidingBedroomWardrobes",
  }
];

const Slidingwardrobed = () => {
  return (
    <motion.div className="page-wraper" style={{ background: "#000" }} initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}>
      <Navbar />
      <motion.div className="page-content" initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}>
        <div className="wt-bnr-inr overlay-wraper bg-parallax bg-top-center"
          data-stellar-background-ratio="0.5"
          style={{ backgroundImage: "url(assets/pic/dlife.jpg)" }}>
          <div className="overlay-main bg-black opacity-07"></div>
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name">
                  <h2 className="text-white">Sliding Wardrobes</h2>
                </div>
              </div>
              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li><a href="/">Home</a></li>
                  <li>Fitted Wardrobes</li>
                  <li>Sliding Wardrobes </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="section-full p-t80 p-b80 bg-black overflow-hide home-2-about-outer">
          <div className="container">
            <div className="section-content">
              {services.map((service, index) => (
                <motion.div
                  className="row"
                  key={index}
                  style={{
                    justifyContent: "space-between",
                    flexDirection: index % 2 === 0 ? "row-reverse" : "row",
                    marginBottom: "120px",
                  }}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="col-xl-5 col-lg-6 col-md-12">
                    <motion.div className="wt-thum-bx img-reflection" 
                      initial={{ scale: 0.9 }} 
                      whileInView={{ scale: 1 }} 
                      transition={{ duration: 0.5 }}>
                      <img src={service.image} alt="Service" />
                    </motion.div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-12">
                    <motion.div className="home-2-about-left-outer"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.8 }}>
                      <div className="home-2-about-left">
                        <div className="home-2-about-left-content p-a50 text-white" style={{ background: "#141414" }}>
                          <h2 className="m-t0 wt-title" style={{color:'#B19777'}}>{service.title}</h2>
                          <p>{service.description}</p>
                          <a 
                            href={service.link}                                                                 
                            className="site-button-link" 
                            style={{
                              background: "#B19777",
                              color: "white",
                              padding: "18px",
                              textDecoration: "none",
                              border: "2px solid #B19777",
                              transition: "all 0.3s ease-in-out"
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.background = "white";
                              e.target.style.color = "#B19777";
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.background = "#B19777";
                              e.target.style.color = "white";
                            }}
                          > 
                            Read More
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
      <Footers />
      <button className="scroltop">
        <span className="fa fa-angle-up  relative" id="btn-vibrate"></span>
      </button>
    </motion.div>
  );
};

export default Slidingwardrobed;
