import React from "react";
import Navbar from "./Navbar";
import Footers from "./Footer";

const SlidingWardrobedDoorsByCMS = () => {
  
  return (
    <div className="page-wraper">
      <Navbar />
      <div className="page-content">
        {/* <!-- INNER PAGE BANNER --> */}
        <div
            className="wt-bnr-inr overlay-wraper bg-parallax bg-top-center"
            data-stellar-background-ratio="0.5"
            style={{
              backgroundImage: "url(assets/pic/a.jpg)",
            }}
          >
            <div className="overlay-main bg-black opacity-07"></div>
            <div className="container">
              <div className="wt-bnr-inr-entry">
                <div className="banner-title-outer">
                  <div className="banner-title-name">
                    <h2 className="text-white">Sliding Wardrobe Doors </h2>
                  </div>
                </div>
                {/* <!-- BREADCRUMB ROW -->                             */}

                <div>
                  <ul className="wt-breadcrumb breadcrumb-style-2">
                    <li>
                      <a href="/">Home</a>
                    </li>
                  <li>Fitted Wardrobes</li>

                    <li>Sliding Wardrobe Doors </li>
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
                  <h3>Elegant Sliding Wardrobe Doors – Premium Wood & Glass Finishes</h3>
                  <p>
                  Transform your living space with our elegant sliding wardrobe doors, designed to blend style and functionality. Crafted with premium wood and sleek glass finishes, these doors add a modern touch to any room. Whether you prefer a classic wooden texture or a contemporary glass look, our collection offers a variety of designs to suit your taste. Experience smooth sliding mechanisms and durable materials that ensure long-lasting performance. Upgrade your home with a perfect combination of sophistication and convenience.
                  </p>
                  <p>
                  Redefine your interiors with our premium sliding wardrobe doors, crafted with high-quality wood and sleek glass finishes. Designed for smooth operation and lasting durability, these doors enhance both functionality and aesthetics. Whether you prefer a modern glass touch or a warm wooden texture, our collection offers a variety of elegant designs. Elevate your space with a sophisticated and space-saving solution.
                  </p>
                  <p>
                  Bring elegance and efficiency to your home with our exquisite sliding wardrobe doors, featuring a seamless blend of wood and glass finishes. These doors provide a stylish yet practical storage solution, enhancing the beauty of any room. Designed for smooth gliding and built with durable materials, they offer both convenience and sophistication. Choose from a range of contemporary and classic styles to complement your décor perfectly.
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
                    <img src="/assets/pic/swd1.png" alt="" />
                  </div>
                  <div className="project-img-effect-1 mt-4">
                    <img src="/assets/pic/swd6.png" alt="" />
                  </div>
                </div>
                {/* <!-- COLUMNS 2 --> */}
                <div className="masonry-item col-xl-3 col-lg-4  col-md-6 col-sm-6 m-b30">
                  <div className="project-img-effect-1">
                    <img src="/assets/pic/swd8.png" alt="" />
                  </div>
                  <div className="project-img-effect-1 mt-4">
                    <img src="/assets/pic/swd3.png" alt="" />
                  </div>
                </div>
                {/* <!-- COLUMNS 3 --> */}
                <div className="masonry-item col-xl-3 col-lg-4  col-md-6 col-sm-6 m-b30">
                  <div className="project-img-effect-1">
                    <img src="/assets/pic/swd2.png" alt="" />
                  </div>
                  <div className="project-img-effect-1 mt-4">
                    <img src="/assets/pic/swd5.png" alt="" />
                  </div>
                </div>
                {/* <!-- COLUMNS 4 --> */}
                <div className="masonry-item col-xl-3 col-lg-4  col-md-6 col-sm-6 m-b30">
                  <div className="project-img-effect-1">
                    <img src="/assets/pic/swd7.png" alt="" />
                  </div>
                  <div className="project-img-effect-1 mt-4">
                    <img src="/assets/pic/swd4.png" alt="" />
                  </div>
                </div>
               
              </div>
             
            </div>
            
          </div>
          {/* <!-- SECTION CONTENT END  --> */}

        
      </div>
      <Footers />
       {/* <!-- BUTTON TOP START --> */}
       <button className="scroltop">
          <span className="fa fa-angle-up  relative" id="btn-vibrate"></span>
        </button>
    </div>
  );
};

export default SlidingWardrobedDoorsByCMS;
