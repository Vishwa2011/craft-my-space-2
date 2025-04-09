import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footers from "./Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";


const images = [
  { src: "image1.jpg", title: "Image 1" },
  { src: "image2.jpg", title: "Image 2" },
  { src: "image3.jpg", title: "Image 3" },
  // Add more images as needed
];

const Recentwork = () => {
  const slides = [
    {
      id: 1,
      image: "/assets/pic/gallary.png",
      title: "Slide 1 Title",
    },
    {
      id: 2,
      image: "/assets/pic/slider3.webp",
     
      title: "Slide 2 Title",
    },
    {
      id: 3,
      image: "/assets/pic/gallary3.png",
      title: "Slide 3 Title",
    },
  ];
  const images = [
    { src: "/assets/pic/galary1.webp", title: "Fitted Hinged Doors Wardrobes" },
    { src: "/assets/pic/modern-kitchen.jpg", title: "Maximising Space and Functionality" },
    { src: "/assets/pic/hisher.jpg", title: "His and Hers Fitted Wardrobes" },
    { src: "/assets/pic/online.webp", title: "Fitted Wardrobes Delivered Ready To Paint" },
    { src: "/assets/pic/royal.webp", title: "Fitted Wardrobes and Cabinets in the Loft" },
    { src: "/assets/pic/lfs-buy.webp", title: "Fitted Wardrobe and Chest of Drawers in White" },
    { src:"/assets/pic/Alcoves2.jpg",title: "Alcoves" },
    { src:"/assets/pic/landinghall1.jpg",title: "Bay Windows" },
    { src:"/assets/pic/ceiling4 (1).jpg" ,title: "Sloping Ceiling"},
    { src:"/assets/pic/under-stairs8 (1).webp" , title: "Under Stairs"},
    { src:'/assets/pic/ho2.jpg', title: "Home Office"},
    { src:'/assets/pic/media1.jpg',title: "Media Room"},
  ];

  const [visibleImages, setVisibleImages] = useState(0); // Initially hidden

  const handleButtonClick = () => {
    setVisibleImages(images.length); // Show all images
  };

  return (
    <motion.div
      className="page-wraper"
      style={{ background: "#000" }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Navbar />

      <div className="page-content">
        {/* top conatin start */}
        <div
          className="wt-bnr-inr overlay-wraper bg-parallax bg-top-center"
          data-stellar-background-ratio="0.5"
          style={{ backgroundImage: "url(assets/pic/resent.jpg)" }}
        >
          <div className="overlay-main bg-black opacity-07"></div>
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <motion.div
                className="banner-title-outer"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="banner-title-name">
                  <h2 className="text-white">Recent Works</h2>
                </div>
              </motion.div>

              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li><a href="/">Home</a></li>
                  <li>Recent Works</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* top conatin end */}

        {/* card start */}
        <div className=" mt-5 ">
          <div style={{ textAlign: "center" }}>
            <h5 style={{ color: "#B19777",fontSize:'25px' }}>[ A Glimpse Of Our Craftsmanship  ]</h5>
            <h3 style={{fontSize:'18px'}}>See how we've transformed homes and businesses across london with custom furniture</h3>
          </div>

      <div style={{ width: "100%" }}>
  <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    spaceBetween={30}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    autoplay={{ delay: 3000 }}
    loop={true}
  >
    {slides.map((slide) => (
      <SwiperSlide key={slide.id}>
        <img
          src={slide.image}
          alt={slide.title}
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
        />
      </SwiperSlide>
    ))}
  </Swiper>
</div>


    <div style={{margin:'40px 0px' , justifyContent:'center',display:'flex'}}>
        <a
          href="#"
          className="site-button-link"
          style={{
            background: "#B19777",
            color: "white",
            padding: "18px",
            textDecoration: "none",
            border: "2px solid #B19777",
            transition: "all 0.3s ease-in-out",
            cursor: "pointer",
          }}
          onClick={(e) => {
            e.preventDefault();
            handleButtonClick();
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
          View Full Gallery
        </a>
      </div>

      {visibleImages > 0 && (
        <motion.div
          className="portfolio-wrap mfp-gallery work-grid row clearfix container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{ marginTop: "60px",margin:'auto' }}
        >
          {images.slice(0, visibleImages).map((image, index) => (
            <motion.div
              key={index}
              className="masonry-item col-lg-4 col-md-6 col-sm-12 m-b30"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="project-img-effect-1">
                <img src={image.src} alt="" />
                <div className="wt-info">
                  <h4 className="wt-tilte text-white m-b10 m-t0">{image.title}</h4>
                  <p style={{ textAlign: "center" }}>[ Recent Works ]</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

        
        </div>
        {/* card end */}

        <Footers />
      </div>

      <button className="scroltop">
        <span className="fa fa-angle-up relative" id="btn-vibrate"></span>
      </button>
    </motion.div>
  );
};

export default Recentwork;
