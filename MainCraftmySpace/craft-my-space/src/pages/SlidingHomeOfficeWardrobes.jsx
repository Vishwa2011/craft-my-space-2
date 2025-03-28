import React from 'react'
import Footers from './Footer'
import Navbar from './Navbar'

const SlidingHomeOfficeWardrobes = () => {
  return (
    <div className="page-wraper">
    <Navbar />
    <div className="page-content" style={{marginTop:'30px'}}>
      {/* <!-- CONTENT START --> */}
      <div className="page-content">
        {/* <!-- INNER PAGE BANNER --> */}
        <div
          className="wt-bnr-inr overlay-wraper bg-parallax bg-top-center"
          data-stellar-background-ratio="0.5"
          style={{
            backgroundImage: "url(assets/pic/closetoffice-header.jpg)",
          }}
        >
          <div className="overlay-main bg-black opacity-07"></div>
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name">
                  <h2 className="text-white" >
                  Sliding Home Office Wardrobes
                  </h2>
                </div>
              </div>
              {/* <!-- BREADCRUMB ROW -->  */}

              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>fitted wardrobes</li>
                  <li>Sliding Wardrobes</li>
                  <li>Sliding Home Office Wardrobes</li>
                </ul>
              </div>

              {/* <!-- BREADCRUMB ROW END --> */}
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
                      Sliding Door Office Wardrobes / Home Office
                      </h3>
                      <p>
                      A well-organized workspace is essential for productivity, and a sliding door office wardrobe is the perfect solution to keep your home office clutter-free. Designed to store documents, office supplies, and personal belongings efficiently, these wardrobes offer a sleek and modern look while maximizing space. With smooth sliding doors, they provide easy access to your essentials without occupying extra room, making them ideal for compact home offices.
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
                          <img src="/assets/pic/homeofc (1).jpg" alt="" />
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-6 masonry-item">
                        <div className="wt-media m-b20  img-reflection">
                          <img src="/assets/pic/homeofc2 (1).jpg" alt="" />
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-6 masonry-item">
                        <div className="wt-media m-b20  img-reflection">
                          <img src="/assets/pic/homeofc3 (1).webp" alt="" />
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6 masonry-item">
                        <div className="wt-media m-b20  img-reflection">
                          <img src="/assets/pic/homeofc4 (1).jpg" alt="" />
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

export default SlidingHomeOfficeWardrobes
