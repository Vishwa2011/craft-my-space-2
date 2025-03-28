import React from "react";
import Navbar from "./Navbar";
import Footers from "./Footer";
export default function HingedDoorWardrobes() {
  return (
    <div className="page-wraper">
      <Navbar />
      <div className="page-content">
        {/* <!-- CONTENT START --> */}
        <div className="page-content">
          {/* <!-- INNER PAGE BANNER --> */}
          <div
            className="wt-bnr-inr overlay-wraper bg-parallax bg-top-center"
            data-stellar-background-ratio="0.5"
            style={{
              backgroundImage: "url(assets/pic/slider.jpeg)",
            }}
          >
            <div className="overlay-main bg-black opacity-07"></div>
            <div className="container">
              <div className="wt-bnr-inr-entry">
                <div className="banner-title-outer">
                  <div className="banner-title-name">
                    <h2 className="text-white">Hinged Door Wardrobes</h2>
                  </div>
                </div>
                {/* <!-- BREADCRUMB ROW -->                             */}

                <div>
                  <ul className="wt-breadcrumb breadcrumb-style-2">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>fitted wardrobes</li>
                    <li>Hinged Door Wardrobes</li>
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
                  <h3>Elegant Hinged Wardrobe Doors for Stylish Living</h3>
                  <p>
                    Custom Built-In Fitted Wardrobes Tailored to Your Space in
                    London and the Home Counties – From CraftMySpaceUpgrade
                    your space with our premium hinged wardrobe doors, designed
                    for both functionality and aesthetics. Crafted with
                    high-quality materials, these doors provide easy access to
                    your wardrobe while enhancing the overall decor of your
                    room. Available in a variety of finishes and styles, they
                    blend seamlessly with modern and classic interiors.
                    Experience durability, smooth operation, and timeless
                    elegance with our expertly designed hinged wardrobe doors.
                  </p>
                  <p>
                    Enhance your bedroom with our beautifully crafted hinged
                    wardrobe doors, designed for durability and elegance. These
                    doors offer a classic opening mechanism, providing full
                    access to your wardrobe while complementing any interior
                    style. With a range of finishes and designs to choose from,
                    our hinged wardrobe doors add a touch of sophistication and
                    functionality to your living space. Upgrade your home with
                    style and convenience today!
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* text end  */}


          {/* <!-- SECTION CONTENT START --> */}
          <div className="section-full p-t80 p-b50 bg-gray">
            
            <div className="container-fluid">
             
              <div className="portfolio-wrap mfp-gallery work-grid row clearfix" >
                {/* <!-- COLUMNS 1 --> */}
                <div className="masonry-item col-xl-3 col-lg-4  col-md-6 col-sm-6 m-b30">
                  <div className="project-img-effect-1">
                    <img src="assets/pic/hiding5.png" alt="" />
                  </div>
                  <div className="project-img-effect-1 mt-4">
                    <img src="assets/pic/hiding3.png" alt="" />
                  </div>
                </div>
                {/* <!-- COLUMNS 2 --> */}
                <div className="masonry-item col-xl-3 col-lg-4  col-md-6 col-sm-6 m-b30">
                  <div className="project-img-effect-1">
                    <img src="assets/pic/hiding1.png" alt="" />
                  </div>
                  <div className="project-img-effect-1 mt-4">
                    <img src="assets/pic/hiding7.png" alt="" />
                  </div>
                </div>
                {/* <!-- COLUMNS 3 --> */}
                <div className="masonry-item col-xl-3 col-lg-4  col-md-6 col-sm-6 m-b30">
                  <div className="project-img-effect-1">
                    <img src="assets/pic/hiding6.png" alt="" />
                  </div>
                  <div className="project-img-effect-1 mt-4">
                    <img src="assets/pic/hiding4.png" alt="" />
                  </div>
                </div>
                {/* <!-- COLUMNS 4 --> */}
                <div className="masonry-item col-xl-3 col-lg-4  col-md-6 col-sm-6 m-b30">
                  <div className="project-img-effect-1">
                    <img src="assets/pic/hiding2.png" alt="" />
                  </div>
                  <div className="project-img-effect-1 mt-4">
                    <img src="assets/pic/hiding8.png" alt="" />
                  </div>
                </div>
              
              </div>
             
            </div>
            
          </div>
          {/* <!-- SECTION CONTENT END  --> */}

          
        </div>
        {/* <!-- CONTENT END --> */}
      </div>
      <Footers />
       {/* <!-- BUTTON TOP START --> */}
       <button className="scroltop">
          <span className="fa fa-angle-up  relative" id="btn-vibrate"></span>
        </button>
    </div>
  );
}
