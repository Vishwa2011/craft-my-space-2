import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navbar from "./Navbar";
import Footers from "./Footer";

const services = [
  {
    title: "Fitted Bedrooms",
    description:
      "Maximize your space with elegantly designed fitted bedrooms, tailored to blend functionality and style seamlessly.",
    image: "/assets/pic/Bedroomfit (1).webp",
    link: "/fitted-bedroom",
    features: [],
    showReadMore: true
  },
  {
    title: "Fitted Wardrobes",
    description:
      "Enhance your storage with bespoke fitted wardrobes, designed to optimize space while adding a touch of elegance to your interiors.",
    image: "/assets/pic/wardrobesfit (1).jpg",
    link: "/FittedWardrobes",
    features: [
      { name: "Hinged Door Wardrobes", link: "/HingedDoorWardrobes" },
      { name: "Sliding Wardrobes Doors By CMS", link: "/SlidingWardrobedDoorsByCMS" },
      { name: "Sliding Wardrobes", link: "/Slidingwardrobed" },
      { name: "Walk-in Wardrobes", link: "/Walkinwardrobed" },
      { name: "Children's Fitted Bedrooms", link: "/ChildrenFittedBadrooms" }
    ],
    showReadMore: false
  },
  {
    title: "Fitted Living",
    description:
      "Create a seamless and stylish living space with bespoke fitted living solutions, designed for comfort, functionality, and elegance.",
    image: "/assets/pic/livingfit2.jpg",
    link: "/FittedLiving",
    features: [
      { name: "Home Office", link: "/HomeOffice" },
      { name: "Kitchen", link: "/Kitchens" },
      { name: "Media Room", link: "/MediaRoom" }
    ],
    showReadMore: false
  },
  {
    title: "Awkward Spaces",
    description:
      "Maximize every inch of your home with custom solutions for awkward spaces, turning challenging areas into functional and stylish features.",
    image: "/assets/pic/awkwarfit (1).jpg",
    link: "/AwkwardSpaces",
    features: [
      { name: "Alcoves", link: "/Alcoves" },
      { name: "Bay Windows", link: "/BayWindows" },
      { name: "Landing & Hallways", link: "/LandingHallways" },
      { name: "Sloping Ceiling", link: "/SlopingCeilings" },
      { name: "Under Stairs", link: "/UnderStairs" }
    ],
    showReadMore: false
  }
];

const ServiceSection = ({ service, index }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      key={index}
      initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="row"
      style={{
        justifyContent: "space-between",
        flexDirection: index % 2 === 0 ? "row-reverse" : "row",
        marginBottom: "120px",background:'#000'
      }}
    >
      <div className="col-xl-5 col-lg-6 col-md-12">
        <div className="wt-thum-bx">
          <img src={service.image} alt="Service" />
        </div>
      </div>
      <div className="col-xl-6 col-lg-6 col-md-12">
        <div className="home-2-about-left-outer">
          <div className="home-2-about-left">
            <div
              className="home-2-about-left-content p-a50 text-white"
              style={{ background: "#272727" }}
            >
              <h2 className="m-t0 wt-title">{service.title}</h2>
              <p>{service.description}</p>
              {service.features.length > 0 && (
                <>
                  <h3 style={{color:'#B19777'}}>We Deal With :</h3>
                  <ul style={{ listStyle: "disc", marginLeft: "20px" }}>
                    {service.features.map((feature, i) => (
                      <li key={i} style={{marginBottom:'5px'}}>
                         <a 
                          href={feature.link} 
                          style={{ color: "#fff", textDecoration: "none", transition: "all 0.3s ease-in-out"}}
                          onMouseEnter={(e) => {
                            e.target.style.color = "#B19777";
                            e.target.style.textDecoration = "underline";
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.color = "#fff";
                            e.target.style.textDecoration = "none";
                          }}
                        >
                          {feature.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {service.showReadMore && (
                <a
                  href={service.link}
                  className="site-button-link"
                  style={{
                    background: "#B19777",
                    color: "white",
                    padding: "18px",
                    textDecoration: "none",
                    border: "2px solid #B19777",
                    transition: "all 0.3s ease-in-out",
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
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Service = () => {
  return (
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
          style={{ backgroundImage: "url(assets/pic/cms.jpg)" }}
        >
          <div className="overlay-main bg-black opacity-07"></div>
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name">
                  <h2 className="text-white">Services</h2>
                </div>
              </div>
              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>Services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="section-full p-t80 p-b80 bg-black overflow-hide home-2-about-outer">
          <div className="container">
            <div className="section-content">
              {services.map((service, index) => (
                <ServiceSection key={index} service={service} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footers />
    </motion.div>
  );
};

export default Service;