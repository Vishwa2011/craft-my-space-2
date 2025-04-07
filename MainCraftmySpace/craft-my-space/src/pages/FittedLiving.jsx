import React, { useState } from "react";
import Navbar from "./Navbar";
import Footers from "./Footer";
import { motion } from "framer-motion";


const services = [
  {
    title: "Home Office",
    description:
      "Create a productive and stylish workspace with smart storage solutions, ergonomic designs, and a seamless blend of functionality and aesthetics.",
    image: "/assets/pic/home1.png",
      link: "/HomeOffice",
  },
  {
    title: "Kitchen",
    description:
      "A perfect fusion of style and functionality, featuring smart storage solutions, modern aesthetics, and efficient layouts for a seamless cooking experience.",
    image: "/assets/pic/modular1.jpg",
    link:"/Kitchens"
  },
  {
    title: "Media Room",
    description:
      "Designed for ultimate comfort and functionality, offering stylish storage solutions, sleek designs, and optimized layouts for an immersive entertainment experience.",
    image: "/assets/pic/media1.png",
      link:"/MediaRoom"
  },
 
];

const items = [
  // {
  //   id: 1,
  //   category: "cat-1",
  //   title: " Smart Kitchen Designs",
  //   p: "Upgrade your kitchen with space-saving, stylish, and functional furniture that enhances convenience and aesthetics.",
  //   image: "/assets/pic/modular.png",
  // },
  // {
  //   id: 2,
  //   category: "cat-2",
  //   title: "WorkEase Hub",
  //   p: "Design a productive and stylish home office with ergonomic furniture that enhances comfort and efficiency.",
  //   image: "/assets/pic/home1.png",
  // },
  // {
  //   id: 3,
  //   category: "cat-3",
  //   title: "DineScape",
  //   p: "Enhance your dining experience with elegant, comfortable, and stylish furniture that brings warmth to every meal.",
  //   image: "/assets/pic/Capture-17 1.png",
  // },
  // {
  //   id: 4,
  //   category: "cat-4",
  //   title: "CineLounge",
  //   p: "Create a cinematic experience at home with cozy, stylish, and functional furniture designed for ultimate comfort and entertainment. ",
  //   image: "/assets/pic/media1.png",
  // },
  // {
  //   id: 5,
  //   category: "cat-5",
  //   title: "SpaNest",
  //   p: "Transform your bathroom into a relaxing retreat with elegant, space-saving furniture designed for comfort and style.",
  //   image: "/assets/pic/ambrosia.png",
  // },
  // {
  //   id: 6,
  //   category: "cat-1",
  //   title: "Modern Kitchen Setup",
  //   p: "Experience a seamless cooking space with durable, elegant, and well-crafted kitchen furniture designed for everyday use.",
  //   image: "/assets/pic/sky.png",
  // },
  // {
  //   id: 7,
  //   category: "cat-3",
  //   title: "FeastNest",
  //   p: "Create a cozy and inviting dining space with modern furniture designed for comfort, durability, and timeless appeal.",
  //   image: "/assets/pic/modern1.png",
  // },
  // {
  //   id: 8,
  //   category: "cat-4",
  //   title: "ScreenNest",
  //   p: "Upgrade your media room with sleek and modern furniture that enhances viewing pleasure while maintaining a stylish ambiance.",
  //   image: "/assets/pic/media2.png",
  // },
  // {
  //   id: 9,
  //   category: "cat-2",
  //   title: "FocusNest",
  //   p: "Create an inspiring and clutter-free workspace with modern, space-saving office furniture tailored for productivity.",
  //   image: "/assets/pic/home2.png",
  // },
  // {
  //   id: 10,
  //   category: "cat-1",
  //   title: "Elegant Kitchen Interiors",
  //   p: "Transform your kitchen with contemporary furniture that blends practicality with a sophisticated and timeless appeal.",
  //   image: "/assets/pic/modern-light.png",
  // },
  // {
  //   id: 11,
  //   category: "cat-5",
  //   title: "LuxeBath",
  //   p: "Upgrade your bathroom with modern, functional, and sleek furniture that enhances both aesthetics and organization.",
  //   image: "/assets/pic/unley.png",
  // },
  // {
  //   id: 12,
  //   category: "cat-2",
  //   title: "ErgoHive",
  //   p: "Upgrade your home office with sleek, functional furniture designed for long hours of comfortable and efficient work.",
  //   image: "/assets/pic/home3.png",
  // },
  // {
  //   id: 13,
  //   category: "cat-3",
  //   title: "GatherGlow",
  //   p: "Transform your dining room with sophisticated furniture that blends functionality, elegance, and a welcoming ambiance.",
  //   image: "/assets/pic/captur3.png",
  // },
  // {
  //   id: 14,
  //   category: "cat-4",
  //   title: "VistaDen",
  //   p: "Transform your entertainment space with premium furniture that blends luxury, functionality, and immersive comfort.",
  //   image: "/assets/pic/media3.png",
  // },
  // {
  //   id: 15,
  //   category: "cat-5",
  //   title: "AquaHaven",
  //   p: "Create a serene and stylish bathroom space with furniture that combines practicality, durability, and elegance.",
  //   image: "/assets/pic/unley2.png",
  // },
];
const FittedLiving = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems =
    activeCategory === "all"
      ? items
      : items.filter((item) => item.category === activeCategory);
  return (
    <div className="page-wraper" style={{background:'#000'}}>
      <Navbar />

      <div className="page-content">
        {/* <!-- CONTENT START --> */}
        <div className="page-content">
          {/* <!-- INNER PAGE BANNER --> */}
          <div
            className="wt-bnr-inr overlay-wraper bg-parallax bg-top-center"
            data-stellar-background-ratio="0.5"
            style={{ backgroundImage: "url(assets/pic/livingheader.jpeg)" }}
          >
            <div className="overlay-main bg-black opacity-07"></div>
            <div className="container">
              <div className="wt-bnr-inr-entry">
                <div className="banner-title-outer">
                  <div className="banner-title-name">
                    <h2 className="text-white">fitted living</h2>
                  </div>
                </div>
                {/* <!-- BREADCRUMB ROW -->                             */}

                <div>
                  <ul className="wt-breadcrumb breadcrumb-style-2">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>Fitted Furniture</li>
                    <li>Fitted Living</li>
                  </ul>
                </div>

                {/* <!-- BREADCRUMB ROW END -->                         */}
              </div>
            </div>
          </div>
          {/* <!-- INNER PAGE BANNER END --> */}

          {/* <!-- SECTION CONTENT START --> */}
          {/* <div className="section-full p-t80 p-b50 " style={{background:'#000'}}>
            <div className="container">
              <div className="filter-wrap p-b30">
                <ul className="masonry-filter link-style text-uppercase masonry-filter1">
                  {categories.map((cat) => (
                    <li
                      key={cat.id}
                      className={activeCategory === cat.id ? "active" : ""}
                    >
                      <a onClick={() => setActiveCategory(cat.id)}>
                        {cat.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="portfolio-wrap mfp-gallery work-grid row clearfix">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className={`masonry-item ${item.category} col-lg-4 col-md-6 col-sm-12 m-b30`}
                  >
                    <div className="project-img-effect-1">
                      <img src={item.image} alt={item.title} />
                      <div className="wt-info">
                        <h4 className="wt-tilte text-white m-b10 m-t0">
                          {item.title}
                        </h4>
                        <p>{item.p}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div> */}
          {/* <!-- SECTION CONTENT END  --> */}

{/* WELCOME SECTION START */}
<div className="section-full p-t80 p-b80 bg-black overflow-hide home-2-about-outer">
          <div className="container">
            <div className="section-content">
              {services.map((service, index) => (
                <motion.div
                  className="row"
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                  style={{
                    justifyContent: "space-between",
                    flexDirection: index % 2 === 0 ? "row-reverse" : "row",
                    marginBottom: "120px",
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
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
          {/* WELCOME SECTION END */}



          {/* text start  */}
          <div className="container mt-5 mb-5" style={{background:'#000'}}> 
            <div className="project-detail-outer">
              <div className="project-detail-containt">
                <div className=" text-black">
                  <h3>Custom Fitted Living Spaces</h3>
                  
                  <p>
                  At CraftMySpace, we specialize in creating personalized living spaces with our custom fitted storage solutions. Whether it's for your living room, bedroom, or hallway, our bespoke designs are tailored to maximize space and complement your unique style. Experience functional elegance with our expertly crafted living solutions, designed to make your home organized and stylish.
                  </p>
                  
                  <p>
                  we transform your living areas with custom-fitted storage solutions that blend functionality and style. Our tailored designs ensure that every space is optimized to meet your needs while enhancing the aesthetics of your home. From living rooms to bedrooms, each piece is crafted with attention to detail, creating organized, efficient, and visually appealing spaces that reflect your personal style.
                 
                  </p>
                </div>
               
              </div>
            </div>

          </div>
          {/* text end  */}
            {/* <!-- VIDEO SECTION START --> */}
            <div className=" overflow-hide v-title-outer">
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
                        <img src="/assets/pic/MAINAU.png" alt="" />
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
          {/* <!-- VIDEO  SECTION END -->   */}
        </div>
        {/* <!-- CONTENT END --> */}
      </div>

      <Footers />
      <button className="scroltop">
        <span className="fa fa-angle-up  relative" id="btn-vibrate"></span>
      </button>
    </div>
  );
}

export default FittedLiving
