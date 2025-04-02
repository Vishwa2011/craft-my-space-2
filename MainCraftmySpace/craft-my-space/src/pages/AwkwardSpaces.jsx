import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Footers from './Footer';
import Navbar from './Navbar';

const services = [
  {
    title: "Alcoves",
    description:
      "Maximize your space with elegantly designed fitted bedrooms, tailored to blend functionality and style seamlessly.",
    image: "/assets/pic/alcove-shelving 1.png",
    link: "/Alcoves",
  },
  {
    title: "Bay Windows",
    description:
      "Enhance your storage with bespoke fitted wardrobes, designed to optimize space while adding a touch of elegance to your interiors.",
    image: "/assets/pic/bay1.png",
    link: "/BayWindows"
  },
  {
    title: "Landing & Hallways",
    description:
      "Create a seamless and stylish living space with bespoke fitted living solutions, designed for comfort, functionality, and elegance.",
    image: "/assets/pic/lh1.png",
    link: "/LandingHallways"
  },
  {
    title: "Sloping Ceilings ",
    description:
      "Maximize every inch of your home with custom solutions for awkward spaces, turning challenging areas into functional and stylish features.",
    image: "/assets/pic/avon.png",
    link: "/SlopingCeilings"
  },
  {
    title: "UnderStairs",
    description:
      "Maximize every inch of your home with custom solutions for awkward spaces, turning challenging areas into functional and stylish features.",
    image: "/assets/pic/under-stairs-fitted-storage.png",
    link: "/UnderStairs"
  }
];

const AwkwardSpaces = () => {
  return (
    <div className="page-wraper" style={{ background: '#000' }}>
      <Navbar />
      <div className="page-content">
        <div className="wt-bnr-inr overlay-wraper bg-parallax bg-top-center"
          data-stellar-background-ratio="0.5"
          style={{ backgroundImage: "url(assets/pic/Burke-12.webp)" }}>
          <div className="overlay-main bg-black opacity-07"></div>
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name">
                  <h2 className="text-white">Awkward Spaces</h2>
                </div>
              </div>
              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li><a href="/">Home</a></li>
                  <li>Fitted Furniture</li>
                  <li>Awkward Spaces</li>
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
                  style={{ justifyContent: 'space-between', flexDirection: index % 2 === 0 ? 'row-reverse' : 'row', marginBottom: '120px' }}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  <div className="col-xl-5 col-lg-6 col-md-12">
                    <div className="wt-thum-bx">
                      <img src={service.image} alt="Service" />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-12">
                    <div className="home-2-about-left-outer">
                      <div className="home-2-about-left">
                        <div className="home-2-about-left-content p-a50 text-white" style={{ background: '#272727' }}>
                          <h2 className="m-t0 wt-title">{service.title}</h2>
                          <p>{service.description}</p>
                          <a 
                            href={service.link} 
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
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="container mt-5 mb-5"> 
          <div className="project-detail-outer">
            <div className="project-detail-containt">
              <div className=" text-black">
                <h3>Awkward Spaces</h3>
                <p>
                  Awkwardly shaped rooms with slopes and angles are no challenge for CraftMySpace fitted furniture. Our bespoke designs make the most of every inch, turning tricky spaces into functional and stylish areas.
                </p>
                <p>
                  Whether you're converting an attic into a cozy bedroom or looking to add smart storage to a small room, our custom wardrobes are the perfect solution. No matter the size, shape, or layout, we create tailored storage solutions that fit seamlessly into your home. No corner is too tight, and no ceiling too sloped for our expert design team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footers />
      <button className="scroltop">
        <span className="fa fa-angle-up relative" id="btn-vibrate"></span>
      </button>
    </div>
  );
};

export default AwkwardSpaces;
