import React from 'react'
import Navbar from './Navbar'
import Footers from './Footer'
export default function BespokeFurniture() {
  return (
    <div className="page-wraper" style={{ background: '#000' }}>
    <Navbar />
    <div className="page-content">
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
                  <h2 className="text-white">Bespoke Furniture</h2>
                </div>
              </div>
              {/* <!-- BREADCRUMB ROW -->  */}

              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>Bespoke Furniture</li>
                
                </ul>
              </div>

              {/* <!-- BREADCRUMB ROW END --> */}
            </div>
          </div>
        </div>
        <div className="container">

        <div className="arc-home-about-right portfolio-wrap" style={{padding:'100px 0px'}}>
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-12 masonry-item">
                    <div className="wt-media m-b20 img-reflection">
                      <img src="/assets/pic/bpage1.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 masonry-item">
                    <div className="wt-media m-b20 img-reflection">
                      <img src="/assets/pic/bpage2.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 masonry-item">
                    <div className="wt-media m-b20 img-reflection">
                      <img src="/assets/pic/bpage3.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 masonry-item">
                    <div className="wt-media m-b20 img-reflection">
                      <img src="/assets/pic/bpage4.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 masonry-item">
                    <div className="wt-media m-b20 img-reflection">
                      <img src="/assets/pic/bpage5.webp" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 masonry-item">
                    <div className="wt-media m-b20 img-reflection">
                      <img src="/assets/pic/bpage6.png" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12  masonry-item">
                    <div className="wt-media m-b20 img-reflection">
                      <img src="/assets/pic/bpage7.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12  masonry-item">
                    <div className="wt-media m-b20 img-reflection">
                      <img src="/assets/pic/bpage8.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12  masonry-item">
                    <div className="wt-media m-b20 img-reflection">
                      <img src="/assets/pic/bpage9.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 masonry-item">
                    <div className="wt-media m-b20 img-reflection">
                      <img src="/assets/pic/bpage10.jpeg" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12  masonry-item">
                    <div className="wt-media m-b20 img-reflection">
                      <img src="/assets/pic/bpage11.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 masonry-item">
                    <div className="wt-media m-b20 img-reflection">
                      <img src="/assets/pic/bpage12.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
        </div>
    </div>
    <Footers />
    <button className="scroltop">
    <span className="fa fa-angle-up relative" id="btn-vibrate"></span>
  </button>
    </div>
  )
}
