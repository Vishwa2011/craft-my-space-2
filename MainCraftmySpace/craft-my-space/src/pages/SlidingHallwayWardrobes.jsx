import React from 'react'
import Navbar from './Navbar'
import Footers from './Footer'

const SlidingHallwayWardrobes = () => {
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
              backgroundImage: "url(assets/pic/sliding-wardrobe-header.jpg)",
            }}
          >
            <div className="overlay-main bg-black opacity-07"></div>
            <div className="container">
              <div className="wt-bnr-inr-entry">
                <div className="banner-title-outer">
                  <div className="banner-title-name">
                    <h2 className="text-white">
                    Sliding Hallway Wardrobes
                    </h2>
                  </div>
                </div>
                {/* <!-- BREADCRUMB ROW -->                             */}

                <div>
                  <ul className="wt-breadcrumb breadcrumb-style-2">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>fitted wardrobes</li>
                    <li>Sliding Wardrobes</li>
                    <li>Sliding Hallway Wardrobes</li>
                  </ul>
                </div>

                {/* <!-- BREADCRUMB ROW END -->                         */}
              </div>
            </div>
          </div>
          {/* <!-- INNER PAGE BANNER END --> */}

          {/* <!--  SECTION START --> */}
          <div className="section-full p-t80 p-b80 bg-gray overflow-hide">
            <div className="container">
              <div className="section-content">
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <div className="arc-home-about-left">
                      <div className="arc-home-left-content  bg-gray">
                        <h3 className="m-t0 wt-tilte-light">
                        Hallways and Under Staircase Fitted Sliding Wardrobes
                        </h3>
                        <p>
                        If you think your hallway lacks options for storage, think again. Our collection includes a variety of sizes, shapes, and finishes to complement your home’s interior. Designed to blend seamlessly with your décor, these fitted wardrobes make use of every available corner, transforming your hallway into an organized and stylish entryway.
                        </p> 
                       
                        <a
                          href=""
                          className="site-button-link"
                          style={{
                            background: "#141b1f",
                            color: "white",
                            padding: "18px",
                          }}
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-12">
                    <div className="arc-home-about-right portfolio-wrap">
                      <div className="row">
                        <div className="col-md-6 col-sm-6 masonry-item">
                          <div className="wt-media m-b20  img-reflection">
                            <img src="/assets/pic/panorama (1).jpg" alt="" />
                          </div>
                        </div>

                        <div className="col-md-6 col-sm-6 masonry-item">
                          <div className="wt-media m-b20  img-reflection">
                            <img src="/assets/pic/cabinet (1).webp" alt="" />
                          </div>
                        </div>

                        <div className="col-md-6 col-sm-6 masonry-item">
                          <div className="wt-media m-b20  img-reflection">
                            <img src="/assets/pic/productbed (1).jpg" alt="" />
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-6 masonry-item">
                          <div className="wt-media m-b20  img-reflection">
                            <img src="/assets/pic/blueidea (1).jpg" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--   SECTION END -->   */}
         
        </div>
        {/* <!-- CONTENT END --> */}
      </div>
      <Footers />
      {/* <!-- BUTTON TOP START --> */}
      <button className="scroltop">
        <span className="fa fa-angle-up  relative" id="btn-vibrate"></span>
      </button>
    </div>
  )
}

export default SlidingHallwayWardrobes
