import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navbar from "./Navbar";
import Footers from "./Footer";


const steps = [
  {
    number: "1",
    title: "FREE IN-HOME DESIGN VISIT",
    description:
      "Work with your designer in the comfort of your home, to transform your space and maximise your storage. They’ll show you samples to inspire you, create a 3D illustration, and provide you with a full quotation.",
    image: "/assets/pic/Bedroomfit (1).webp",
  },
  {
    number: "2",
    title: "SURVEY & BESPOKE UK MANUFACTURING",
    description:
      "Once you have placed your order, a technical surveyor will visit your home to double-check every detail. Your order will then be tailor-made from quality, sustainable materials at our state-of-the-art facility in the West Midlands.",
    image: "/assets/pic/Bedroomfit (1).webp",
  },
  {
    number: "3",
    title: "INSTALLATION & PEACE OF MIND",
    description:
      "After delivery, your professional installer will install your dream fitted furniture with a perfect, seamless fit. Sit back and enjoy your new stylish, organised space. Plus, it all comes with a 15-year guarantee.",
    image: "/assets/pic/Bedroomfit (1).webp",
  },
];
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
      <div>
    <div className="section-head clearfix ">
                  <div style={{ textAlign: "center" }}>
                    <small
                      className="wt-small-title"
                      style={{ color: "#B19777",fontSize:'25px' }}
                    >
                      [ DESIGN YOUR DREAM WARDROBE - IN REAL TIME! ]
                    </small>
                    <h2 className="m-b5" style={{fontSize:'18px'}}>CUSTOMIZE YOUR WARDROBE BY SELECTING SIZES, MATERIALA,COLORS,AND INTERNAL LAYOUTS.</h2>
                  </div>
                </div>
                <div className="bg-[#e7edef] py-16 text-center">
      <h2 className="text-3xl font-semibold mb-2">
        3 STEPS TO BECOME BEAUTIFULLY ORGANISED
      </h2>
      <p className="text-[#00547c] mb-10">
        Book a free In-Home Design Visit and receive a no-obligation quote with a range of payment options.
      </p>
<div className="col-12 container">
  <div className="row">
  <div className="col-4 "  >
        {steps.map((step) => (
          <div
            key={step.number}
            className=" rounded-md shadow-lg overflow-hidden flex flex-col transition-transform hover:scale-105"
          >
            <div className="relative w-full h-64">
              <img
                src={step.image}
                alt={`Step ${step.number}`}
                className="w-full h-full object-cover"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%)",
                }}
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="text-xl w-10 h-10 mx-auto mb-4 flex items-center justify-center rounded-full bg-gray-100 font-bold">
                {step.number}
              </div>
              <h3 className="text-md font-bold mb-2 uppercase">{step.title}</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
  </div>
</div>
      

      <div className="mt-10">
        <button className="bg-[#f0c14b] text-black px-6 py-3 rounded shadow hover:bg-yellow-400 transition">
          Book a Free Design Visit
        </button>
      </div>
    </div>
      </div>
      <Footers />
      <button className="scroltop">
      <span className="fa fa-angle-up  relative" id="btn-vibrate"></span>
    </button>
    
    </motion.div>
  );
};

export default Service;