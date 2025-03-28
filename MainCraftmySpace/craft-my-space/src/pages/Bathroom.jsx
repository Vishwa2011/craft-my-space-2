import React from 'react'
import Footers from './Footer'
import Navbar from './Navbar'

const Bathroom = () => {
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
            backgroundImage: "url(assets/pic/bathroomheader.jpg)",
          }}
        >
          <div className="overlay-main bg-black opacity-07"></div>
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name">
                  <h2 className="text-white">
                  Bathroom
                  </h2>
                </div>
              </div>
              {/* <!-- BREADCRUMB ROW -->  */}

              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>Fitted Living</li>
                  <li>Bathroom</li>
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
                  <h3>Bathroom Bespoke Furniture</h3>
                  <p>Enhance your bathroom with <b>bespoke furniture</b>, offering stylish, space-saving, and moisture-resistant storage solutions.</p>
                  <p>
                  Transform your bathroom into a functional and elegant space with bespoke bathroom furniture designed to maximize storage without compromising on style. Whether you need sleek vanity units, wall-mounted cabinets, or custom shelving, tailored furniture solutions ensure that every item has its place while maintaining a clean and modern aesthetic.
                  </p>
                  <p>Crafted to fit seamlessly into your bathroom layout, custom-made bathroom storage provides durability and moisture-resistant finishes, making them perfect for everyday use. With a variety of materials, colors, and designs to choose from, you can create a luxurious yet practical space that enhances both comfort and organization. Upgrade your bathroom with beautifully crafted bespoke furniture that perfectly balances functionality and elegance.</p>

                 
                </div>

              </div>
            </div>
          </div>
          {/* text end  */}

           {/* STEP INSPIRED SOLUTION start  */}
        <div className="section-full p-t20 p-b50 bg-white">
          <div className="container">
           
            <div
              className="section-content  "
              style={{ textAlign: "center", verticalAlign: "moddle" }}
            >
              <div className="col-12">
                <div className="row justify-content-center">
                  <div className="col-12 col-sm-12 col-md-4 p-3">
                    <a
                      href=""
                      className="wt-img-effect client-logo-media shadow"
                    >
                      <div>
                        <p style={{fontSize:'20px'}}>Guaranteed quality</p>
                      </div>
                      <div>
                       <p>We’re so confident in the quality of our fitted wardrobes, furniture and personalised storage solutions, we’ll give you a full 10-year product and installation guarantee.</p>
                      </div>
                      
                    </a>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 p-3">
                    <a
                      href=""
                      className="wt-img-effect client-logo-media shadow"
                    >
                       <div>
                        <p style={{fontSize:'20px'}}>Professional installation</p>
                      </div>
                      <div>
                        <p>Years of craftsmanship, experience and professional expertise are behind us. Our amazing team of the most skilled craftsmen, fitters and carpenters in the industry separate us from the rest.</p>
                      </div>
                     
                    </a>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 p-3">
                    <a
                      href=""
                      className="wt-img-effect client-logo-media shadow"
                    >
                       <div>
                        <p style={{fontSize:'20px'}}>Convenience of choice</p>
                      </div>
                      <div>
                        <p>Yes, we can make any products you want, and yes, they will be the best in the UK. We offer such a large selection so that our customers have the convenience of choice.</p>
                      </div>
                     
                    </a>
                  </div>
                 
                </div>
                
              </div>
            </div>
          </div>
        </div>
        {/* STEP INSPIRED SOLUTION end  */}

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

export default Bathroom
