import React from 'react'
import Footers from './Footer'
import Navbar from './Navbar'

const KitchenService = () => {
  return (
    <>
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
                      <h2 className="text-white">Kitchen Service</h2>
                    </div>
                  </div>
                  {/* <!-- BREADCRUMB ROW -->  */}

                  <div>
                    <ul className="wt-breadcrumb breadcrumb-style-2">
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>Kitchen Service</li>
                    
                    </ul>
                  </div>

                  {/* <!-- BREADCRUMB ROW END --> */}
                </div>
              </div>
            </div>
            <div className="container">

            <div className="arc-home-about-right portfolio-wrap" style={{padding:'100px 0px'}}>
                    <div className="row">
                      <div className="col-4 masonry-item">
                        <div className="wt-media m-b20 img-reflection">
                          <img src="/assets/pic/kitchenn1.png" alt="" />
                        </div>
                      </div>
                      <div className="col-4 masonry-item">
                        <div className="wt-media m-b20 img-reflection">
                          <img src="/assets/pic/kitchenn2.png" alt="" />
                        </div>
                      </div>
                      <div className="col-4 masonry-item">
                        <div className="wt-media m-b20 img-reflection">
                          <img src="/assets/pic/kitchenn3.webp" alt="" />
                        </div>
                      </div>
                      <div className="col-4 masonry-item">
                        <div className="wt-media m-b20 img-reflection">
                          <img src="/assets/pic/kitchenn4.webp" alt="" />
                        </div>
                      </div>
                      <div className="col-4 masonry-item">
                        <div className="wt-media m-b20 img-reflection">
                          <img src="/assets/pic/kitchenn5.jpg" alt="" />
                        </div>
                      </div>
                      <div className="col-4 masonry-item">
                        <div className="wt-media m-b20 img-reflection">
                          <img src="/assets/pic/kitchenn6.jpg" alt="" />
                        </div>
                      </div>
                      <div className="col-4 masonry-item">
                        <div className="wt-media m-b20 img-reflection">
                          <img src="/assets/pic/kitchenn7.webp" alt="" />
                        </div>
                      </div>
                      <div className="col-4 masonry-item">
                        <div className="wt-media m-b20 img-reflection">
                          <img src="/assets/pic/kitchen8.webp" alt="" />
                        </div>
                      </div>
                      <div className="col-4 masonry-item">
                        <div className="wt-media m-b20 img-reflection">
                          <img src="/assets/pic/kitchenn9.jpg" alt="" />
                        </div>
                      </div>
                      <div className="col-4 masonry-item">
                        <div className="wt-media m-b20 img-reflection">
                          <img src="/assets/pic/kitchenn10.jpg" alt="" />
                        </div>
                      </div>
                      <div className="col-4 masonry-item">
                        <div className="wt-media m-b20 img-reflection">
                          <img src="/assets/pic/kitchenn11.webp" alt="" />
                        </div>
                      </div>
                      <div className="col-4 masonry-item">
                        <div className="wt-media m-b20 img-reflection">
                          <img src="/assets/pic/kitchenn12.webp" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
        </div>
        <Footers />
        </div>
    </>
  )
}

export default KitchenService
