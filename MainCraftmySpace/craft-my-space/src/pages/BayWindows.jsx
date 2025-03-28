import React from 'react'
import Footers from './Footer'
import Navbar from './Navbar'

const BayWindows = () => {
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
            backgroundImage: "url(assets/pic/windowheader.png)",
          }}
        >
          <div className="overlay-main bg-black opacity-07"></div>
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name">
                  <h2 className="text-white">Bay Windows</h2>
                </div>
              </div>
              {/* <!-- BREADCRUMB ROW -->  */}

              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>Awkward Spaces</li>
                  <li>Bay Windows</li>
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
                <h3>Maximize Storage with Custom Bay Window Seating
                </h3>
                <p>
                Bay and bow windows often go <b>underutilized</b>, despite their potential for both functionality and style. Their unique angles make it challenging to find <b>ready-made storage solutions</b>, leading many homeowners to place an armchair there—wasting valuable space and blocking natural light.
                </p>
                <p>
                A <b>bespoke bay window seat</b> is the perfect solution, providing a <b>blend of comfort and practicality</b>. With built-in <b>hidden storage</b>, you can neatly store essentials while enjoying a cozy seating area. Upholstered in a fabric of your choice, these stylish <b>window bench seats</b> enhance your space, offering a <b>seamless, elegant, and clutter-free</b> living area.
                </p>
               
              </div>
            </div>
          </div>
        </div>
        {/* text end  */}

        {/* customer start  */}
        <div
          className="bg-gray overflow-hide v-title-outer"
          style={{ textAlign: "center" }}
        >
          <div className="section-content">
            <div className="custom-block-outer clearfix bg-cover">
              {/* <div className="custom-right-part "> */}
              <div className="custom-right-part-content ">
                {/* <div className="video-section-outer"> */}
                <div className="our-ability m-t50">
                  <div className="row">
                    <div className="col-md-3 col-sm-3">
                      <div className="m-b30 text-black  center">
                        <h1 className=" font-weight-800 m-b5 site-text-primary">
                          <img
                            src="https://bravolondon.co.uk/wp-content/uploads/2022/10/h1.png"
                            alt=""
                          />
                        </h1>
                        <h4 className="wt-tilte m-b0">10 years warranty</h4>
                      </div>
                    </div>

                    <div className="col-md-3 col-sm-3">
                      <div className="m-b30 text-black  center">
                        <h1 className=" font-weight-800 m-b5 site-text-primary">
                          <img
                            src="	https://bravolondon.co.uk/wp-content/uploads/2022/10/h2.png"
                            alt=""
                          />
                        </h1>
                        <h4 className="wt-tilte m-b0">
                          The best materials
                        </h4>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3">
                      <div className="m-b30 text-black  center">
                        <h1 className=" font-weight-800 m-b5 site-text-primary">
                          <img
                            src="	https://bravolondon.co.uk/wp-content/uploads/2022/10/h4.png"
                            alt=""
                          />
                        </h1>
                        <h4 className="wt-tilte m-b0">Fast production</h4>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3">
                      <div className="m-b30 text-black  center">
                        <h1 className=" font-weight-800 m-b5 site-text-primary">
                          <img
                            src="	https://bravolondon.co.uk/wp-content/uploads/2022/10/h3.png"
                            alt=""
                          />
                        </h1>
                        <h4 className="wt-tilte m-b0">
                        Professional installation
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                {/* </div> */}
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
        {/* customer end  */}
         {/* <!-- SECTION CONTENT START --> */}
      <div className="section-full p-t80 p-b50 bg-gray">
        
        <div className="container-fluid">
         
          <div className="portfolio-wrap mfp-gallery work-grid row clearfix" >
            {/* <!-- COLUMNS 1 --> */}
            <div className="masonry-item col-xl-3 col-lg-4  col-md-6 col-sm-6 m-b30">
              <div className="project-img-effect-1">
                <img src="/assets/pic/windo5.webp" alt="" />
              </div>
              <div className="project-img-effect-1 mt-4">
                <img src="/assets/pic/windo3.webp" alt="" />
              </div>
            </div>
            {/* <!-- COLUMNS 2 --> */}
            <div className="masonry-item col-xl-3 col-lg-4  col-md-6 col-sm-6 m-b30">
              <div className="project-img-effect-1">
                <img src="/assets/pic/windo1.jpg" alt="" />
              </div>
              <div className="project-img-effect-1 mt-4">
                <img src="/assets/pic/windo7.jpg" alt="" />
              </div>
            </div>
            {/* <!-- COLUMNS 3 --> */}
            <div className="masonry-item col-xl-3 col-lg-4  col-md-6 col-sm-6 m-b30">
              <div className="project-img-effect-1">
                <img src="/assets/pic/windo6.webp" alt="" />
              </div>
              <div className="project-img-effect-1 mt-4">
                <img src="/assets/pic/windo4.webp" alt="" />
              </div>
            </div>
            {/* <!-- COLUMNS 4 --> */}
            <div className="masonry-item col-xl-3 col-lg-4  col-md-6 col-sm-6 m-b30">
              <div className="project-img-effect-1">
                <img src="/assets/pic/window.jpg" alt="" />
              </div>
              <div className="project-img-effect-1 mt-4">
                <img src="/assets/pic/windo8.jpg" alt="" />
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
  )
}

export default BayWindows
