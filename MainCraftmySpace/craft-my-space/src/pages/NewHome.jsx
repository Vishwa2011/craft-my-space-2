import React, { useState, useEffect } from "react";
import { FiMenu, FiSearch } from "react-icons/fi";

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
          <FiSearch className="icon" />
        </div>
      </div>

      {/* Right Side Image */}
      <div className="right-content">
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
        <div>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
        </div>
      </div>
    </div>
  );
};

export default NewHome;
