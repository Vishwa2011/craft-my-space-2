import React, { useState, useEffect } from "react";
import { FiMenu, FiSearch } from "react-icons/fi";
import Footers from "./Footer";

const NewHome = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "/assets/pic/cashmere-kitchen-main.jpg",
    "/assets/pic/WentworthStudy.jpg",
    "/assets/pic/Bed_Barnsdale_Hanby_IndigoOak.jpg",
    "/assets/pic/graphite-offce.webp",
  ];

  // Function to show the slide by index
  const showSlide = (index) => {
    setCurrentSlide(index);
  };

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the paragraph is in view
    );

    const target = document.querySelector(".newhomep");
    observer.observe(target);

    return () => observer.disconnect();
  }, []);
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };
  const handleCloseClick = () => {
    setShowSearch(false);
  };
  return (
    <div className="main-container">
      {/* Left Side Slider */}
      <div className="left-navbar">
        {/* Top Logo */}
        <div className="logo">CraftMySpace</div>

        {/* Middle Menu Icon */}
        <div className="middle-icons">
          <a href="/Home">
            <FiMenu className="icon" />
          </a>
        </div>

        {/* Bottom Search Icon */}
        <div className="bottom-icons">
      <FiSearch className="icon" onClick={handleSearchClick} />
      
      {showSearch && (
        <div className="search-fullscreen">
          <button className="close-btn" onClick={handleCloseClick}>
            <AiOutlineClose className="close-icon" />
          </button>
          <div className="search-container">
         
            <input type="text" className="search-field" placeholder="Search..." />
          </div>
        </div>
      )}
    </div>
      </div>

      {/* Right Side Image */}
      <div className="right-content">
        {/* slider start  */}
        <div className="slider">
          {slides.map((image, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? "active" : ""}`}
            >
              <img src={image} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>
        {/* slider end  */}
        {/* text start  */}
        <div style={{ margin: "60px 0px" }}>
          <div className="container">
            <p className={`newhomep ${isVisible ? "show" : ""}`}>
              At CraftMySpace, we design furniture that combines elegance with
              functionality. Our pieces are crafted with precision and attention
              to detail, ensuring that each creation adds a touch of
              sophistication to your home. Whether it’s a modern kitchen,
              stylish living room, or custom storage solutions, we deliver
              furniture that meets your unique needs and enhances your living
              space, today and for years to come.
            </p>
          </div>
        </div>
        {/* text end  */}
        {/* service start  */}
        <div className="newHomeservice">
            <div className="container">
                <div className="row">
                    <div className="col-2">
                       <b>KITCHEN  / 001</b>
                    </div>
                    <div className="col-10">
                        <img src="/assets/pic/Premiumline-kitchen.webp" alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className="newHomeservice">
            <div className="container">
                <div className="row">
                    <div className="col-2">
                       <b>HOME OFFICE  / 002</b>
                    </div>
                    <div className="col-10">
                        <img src="/assets/pic/graphite-shaker-office-new.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className="newHomeservice">
            <div className="container">
                <div className="row">
                    <div className="col-2">
                       <b>BEDROOM  / 003</b>
                    </div>
                    <div className="col-10">
                        <img src="/assets/pic/Feature-image.webp" alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className="newHomeservice">
            <div className="container">
                <div className="row">
                    <div className="col-2">
                       <b>MEDIA ROOM  / 004</b>
                    </div>
                    <div className="col-10">
                        <img src="/assets/pic/fineline-profile.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
        {/* service end */}
        <Footers />
      </div>
      <button className="scroltop">
          <span className="fa fa-angle-up  relative" id="btn-vibrate"></span>
        </button>
    </div>
  );
};

export default NewHome;
