import React from "react";
import Navbar from "./Navbar";
import Footers from "./Footer";

const DiningRoom = () => {
  return (
    <>
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
                backgroundImage: "url(assets/pic/dining.jpg)",
              }}
            >
              <div className="overlay-main bg-black opacity-07"></div>
              <div className="container">
                <div className="wt-bnr-inr-entry">
                  <div className="banner-title-outer">
                    <div className="banner-title-name">
                      <h2 className="text-white">Dining Room</h2>
                    </div>
                  </div>
                  {/* <!-- BREADCRUMB ROW -->  */}

                  <div>
                    <ul className="wt-breadcrumb breadcrumb-style-2">
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>Fitted Living</li>
                      <li>Dining Room</li>
                    </ul>
                  </div>

                  {/* <!-- BREADCRUMB ROW END --> */}
                </div>
              </div>
            </div>
            {/* <!-- INNER PAGE BANNER END --> */}

            {/* text start  */}
            <div className="container mt-5 mb-5">
              <div className="project-detail-outer">
                <div className="project-detail-containt">
                  <div className="bg-white text-black">
                    <h3>
                      Dining Room Furniture: Entertain family & friends in style
                    </h3>
                    <p>
                      Create the perfect setting for memorable gatherings with{" "}
                      <b>elegant dining room furniture</b> designed for both
                      comfort and sophistication. Whether it's a sleek dining
                      table, stylish chairs, or custom storage solutions,
                      bespoke furniture enhances your space while providing
                      functionality.
                    </p>
                    <p>
                      From modern minimalist designs to classic wooden finishes,{" "}
                      <b>tailor-made dining furniture</b> ensures a seamless
                      blend with your home décor. With thoughtfully crafted
                      pieces, you can host dinners, celebrations, and everyday
                      meals in a space that feels warm, inviting, and
                      effortlessly stylish.
                    </p>
                    <p>
                      Host unforgettable gatherings with{" "}
                      <b>bespoke dining room furniture</b>, blending style,
                      comfort, and functionality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* text end  */}

            {/* video start  */}
            <div className="container">
            <div className="blog-post date-style-1 blog-detail text-black">
              <div className="wt-post-media">
                <div className="owl-carousel owl-fade-slider-one owl-btn-vertical-center owl-dots-bottom-right m-b30">
                  <div className="item">
                    <div className="wt-thum-bx">
                      <img src="/assets/pic/tabe1.jpg" alt="" />
                    </div>
                  </div>

                  <div className="item">
                    <div className="wt-thum-bx">
                      <img src="/assets/pic/dt.webp" alt="" />
                    </div>
                  </div>

                  <div className="item">
                    <div className="wt-thum-bx">
                      <img src="/assets/pic/table3.webp" alt="" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
            </div>
            {/* video end  */}
             {/* text start  */}
             <div className="container mt-5 mb-5">
              <div className="project-detail-outer">
                <div className="project-detail-containt">
                  <div className="bg-white text-black">
                    
                    <p>
                    Custom dining room furniture offers limitless possibilities, from showcasing fine china to organizing everyday essentials. Thoughtfully designed fitted cabinets can transform your dining area into a stylish and functional space, serving as a beautiful focal point while maximizing storage.
                    </p>
                    <p>
                    Whether you have a dedicated dining room or an open-plan kitchen diner, made-to-measure furniture ensures a perfect fit for your space and needs. Unlike bulky freestanding pieces, built-in dining cabinets provide ample storage while maintaining a sleek and uncluttered look, allowing for easy movement and a more comfortable dining experience. At CraftMySpace, we craft bespoke dining solutions tailored to your home, blending elegance with practicality.
                    </p>
                    
                  </div>
                </div>
              </div>
            </div>
            {/* text end  */}
          </div>
          {/* <!-- CONTENT END --> */}
        </div>
        <Footers />
        {/* <!-- BUTTON TOP START --> */}
        <button className="scroltop">
          <span className="fa fa-angle-up  relative" id="btn-vibrate"></span>
        </button>
      </div>
    </>
  );
};

export default DiningRoom;
