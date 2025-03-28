import React from 'react'
import Footers from './Footer'
import Navbar from './Navbar'

const LandingHallways = () => {
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
            backgroundImage: "url(assets/pic/landingheader.jpg)",
          }}
        >
          <div className="overlay-main bg-black opacity-07"></div>
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name">
                  <h2 className="text-white">Landing & Hallways</h2>
                </div>
              </div>
              {/* <!-- BREADCRUMB ROW -->  */}

              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>Awkward Spaces</li>
                  <li>Landing & Hallways</li>
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
                Bespoke furniture for Landing & Hallway
                </h3>
                <p>
                Landings and hallways are <b>ideal locations</b> for <b>custom-built shoe and coat storage</b>. Whether you’re utilizing the <b>space beneath the stairs</b> for a fitted cloakroom or installing a <b>floor-to-ceiling coat cupboard</b>, these clever solutions help keep your entryway <b>organized and clutter-free</b>.
                </p>
                <p>
                A well-designed <b>fitted cupboard</b> not only enhances the aesthetics of your hallway but also provides <b>valuable extra storage</b> without taking up space in high-use areas like bedrooms and living rooms. With custom-built solutions, you can make the most of every <b>nook and cranny</b>, ensuring your home remains <b>spacious, stylish, and functional</b>.
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
                <img src="/assets/pic/landinghall1.jpg" alt="" />
              </div>
              <div className="project-img-effect-1 mt-4">
                <img src="/assets/pic/landinghall7.jpg" alt="" />
              </div>
            </div>
            {/* <!-- COLUMNS 2 --> */}
            <div className="masonry-item col-xl-3 col-lg-4  col-md-6 col-sm-6 m-b30">
              <div className="project-img-effect-1">
                <img src="/assets/pic/landinghall5.jpg" alt="" />
              </div>
              <div className="project-img-effect-1 mt-4">
                <img src="/assets/pic/landinghall3.jpg" alt="" />
              </div>
            </div>
            {/* <!-- COLUMNS 3 --> */}
            <div className="masonry-item col-xl-3 col-lg-4  col-md-6 col-sm-6 m-b30">
              <div className="project-img-effect-1">
                <img src="/assets/pic/landinghall2.jpg" alt="" />
              </div>
              <div className="project-img-effect-1 mt-4">
                <img src="/assets/pic/landinghall8.jpg" alt="" />
              </div>
            </div>
            {/* <!-- COLUMNS 4 --> */}
            <div className="masonry-item col-xl-3 col-lg-4  col-md-6 col-sm-6 m-b30">
              <div className="project-img-effect-1">
                <img src="/assets/pic/Hallways.webp" alt="" />
              </div>
              <div className="project-img-effect-1 mt-4">
                <img src="/assets/pic/landinghall4.jpg" alt="" />
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

export default LandingHallways
