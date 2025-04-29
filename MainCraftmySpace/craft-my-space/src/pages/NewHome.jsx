import React, { useState, useEffect } from "react";
import { FiMenu, FiSearch } from "react-icons/fi";
import Footers from "./Footer";
import { AiOutlineClose } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
const NewHome = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  // Handle search field open/close
  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };

  // Handle search field close
  const handleCloseClick = () => {
    setShowSearch(false);
  };

  // List of valid paths (your routes)
  const validPages = [
    'Home', 'fitted-bedroom', 'FittedWardrobes', 'FittedLiving', 'AwkwardSpaces', 'Joinery',
    'Blog', 'Recentwork', 'ContactUs', 'Orderafreebrochure', 'PrivacyPolicy', 'Footer',
    'HingedDoorWardrobes', 'SlidingWardrobedDoorsByCMS', 'Slidingwardrobed', 'ChildrensBedroomSlidingDoorWardrobes',
    'WhyCraftMySpace', 'Walkinwardrobed', 'ChildrenFittedBadrooms', 'SlidingHallwayWardrobes',
    'SlidingHomeOfficeWardrobes', 'SlidingLivingAreaWardrobes', 'SlidingBedroomWardrobes', 'Bathroom',
    'DiningRoom', 'HomeOffice', 'Kitchens', '/MediaRoom', 'Alcoves', 'BayWindows', 'LandingHallways',
    'SlopingCeilings', 'UnderStairs', 'Termandcondition', 'Blogdetail', 'Mission', 'Vision', 'MeetDesignerForm',
    'Thankyou', 'Service', 'Kitchen-Service', 'Ourfactorytour', 'BespokeFurniture', 'GetFreeDesignConsultation',
    'Startdesigning', 'GDPRPolicy', 'Warrantyandguaranty'
  ];
  const [noDataFound, setNoDataFound] = useState(false); // add this state
  // Handle search on submit
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const matchedPage = validPages.find(page => page.toLowerCase() === searchTerm.toLowerCase());

    if (matchedPage) {
      navigate(matchedPage); // Redirect to matched page
    } else {
      setNoDataFound(true);  // Redirect to Not Found page
    }
  };
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
            <form onSubmit={handleSearchSubmit}>
              <input 
                type="text" 
                className="search-field" 
                placeholder="Search..." 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
              />
        {noDataFound && <p style={{ color: 'red', marginTop: '5px' }}>Not Data Available</p>}
            </form>
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
                       <a href="/Kitchens"> <img src="/assets/pic/Premiumline-kitchen.webp" alt="" /></a>
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
                       <a href="/HomeOffice"> <img src="/assets/pic/graphite-shaker-office-new.jpg" alt="" /></a>
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
                        <a href="/Fitted-Bedroom"><img src="/assets/pic/Feature-image.webp" alt="" /></a>
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
                        <a href="/MediaRoom"><img src="/assets/pic/fineline-profile.jpg" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="newHomeservice">
            <div className="container">
                <div className="row">
                    <div className="col-2">
                       <b>WARDROBED  / 004</b>
                    </div>
                    <div className="col-10">
                        <a href="/Slidingwardrobed"><img src="/assets/pic/bedroom-design.jpg" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
        {/* service end */}


        {/* Parallax img start  */}
        <div>
        <div className="parallax-container">
      <div className="parallax-text">
        <h1>Visit CraftMySpace Experience Centers</h1>
        <p>Discover the perfect blend of style, comfort, and craftsmanship at our CraftMySpace showrooms. Explore a curated selection of premium furniture, décor, and interior solutions designed to elevate every corner of your home. From modern living room sets to elegant wardrobes and bespoke kitchens, immerse yourself in our latest designs and materials. We'd be delighted to welcome you for a personalized tour—and a cup of coffee!</p>
      </div>
    </div>
    </div>
        {/* Parallax img end */}

        {/* card start  */}
        <div className="newhomecard">
  <main className="container">
    <ul id="cards">
      
      <li className="card" id="card-1">
        <div className="card-content">
          <div>
            <h2>Custom Furniture Design</h2>
            <p>At CraftMySpace, we specialize in creating tailor-made furniture pieces that perfectly match your vision and lifestyle. Whether it's a stunning modular kitchen, a luxurious sofa set, or a functional wardrobe, our expert craftsmen bring your ideas to life with precision and care. Choose from a wide variety of designs, finishes, and materials to create furniture that’s as unique as your home.

</p>
          </div>
          <figure>
            <img src="/assets/pic/newcard1.jpg" alt="Custom Furniture" />
          </figure>
        </div>
      </li>

      <li className="card" id="card-2">
        <div className="card-content">
          <div>
            <h2>Interior Styling Consultation</h2>
            <p>Transform your living spaces with the help of our professional interior stylists. From choosing the right furniture layouts to selecting complementary colors, textures, and decor pieces, we offer end-to-end styling services. Our team ensures that every corner of your home reflects your personal taste while maintaining comfort, functionality, and aesthetic appeal.</p>
          </div>
          <figure>
            <img src="/assets/pic/istockphoto.jpg" alt="Interior Styling" />
          </figure>
        </div>
      </li>

      <li className="card" id="card-3">
        <div className="card-content">
          <div>
            <h2>Customer Reviews</h2>
            <p>Our happy customers are at the heart of CraftMySpace. We take pride in delivering high-quality furniture and exceptional service that exceeds expectations. Read inspiring stories and feedback from homeowners who have trusted us to elevate their spaces. Their experiences speak volumes about our commitment to craftsmanship, reliability, and customer satisfaction.</p>
          </div>
          <figure>
            <img src="/assets/pic/newreview.jpeg" alt="Customer Reviews" />
          </figure>
        </div>
      </li>

      <li className="card" id="card-4">
        <div className="card-content">
          <div>
            <h2>After-Sales Support</h2>
            <p>Our relationship with you doesn’t end with a purchase. At CraftMySpace, we offer dedicated after-sales support to ensure your complete satisfaction. Whether you need maintenance advice, warranty services, or minor touch-ups, our responsive team is just a call away. We believe in building lasting relationships by standing by the quality of every product we deliver.</p>
          </div>
          <figure>
            <img src="/assets/pic/Dark-Blue-Shaker.webp" alt="After Sales Support" />
          </figure>
        </div>
      </li>

    </ul>
  </main>
</div>

{/* card end  */}

        <Footers />
      </div>
      <button className="scroltop">
          <span className="fa fa-angle-up  relative" id="btn-vibrate"></span>
        </button>
    </div>
  );
};

export default NewHome;
