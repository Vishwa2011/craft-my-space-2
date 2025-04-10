import React from 'react'
import Navbar from './Navbar';
import Footers from './Footer';
import { motion } from "framer-motion";

const Walkinwardrobed = () => {
  return (
    <motion.div     className="page-wraper"
    style={{ background: "#000" }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}>
      <Navbar />
      <div className="page-content">
        {/* <!-- INNER PAGE BANNER --> */}
        <div
          className="wt-bnr-inr overlay-wraper bg-parallax bg-top-center"
          data-stellar-background-ratio="0.5"
          style={{
            backgroundImage: "url(assets/pic/walkheader.jpg)",
          }}
        >
          <div className="overlay-main bg-black opacity-07"></div>
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name">
                  <h2 className="text-white">Walk in Wardrobes</h2>
                </div>
              </div>
              {/* <!-- BREADCRUMB ROW -->  */}

              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>Fitted Wardrobes</li>
                  <li>Walk in Wardrobes </li>
                </ul>
              </div>

              {/* <!-- BREADCRUMB ROW END -->   */}
            </div>
          </div>
        </div>
        {/* <!-- INNER PAGE BANNER END --> */}

        {/* <!--  SECTION START --> */}
        <div className="section-full p-t80 p-b80  overflow-hide" style={{background:'#000',borderBottom:'2px solid #B19777'}}>
          <div className="container">
            <div className="section-content">
              <div className="row">
                
                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1 }}
                 className="col-lg-6 col-md-12"
                
                >
                  <div className="arc-home-about-left">
                    <div className="arc-home-left-content  " style={{background:'#000'}}>
                      <h3 className="m-t0 wt-tilte-light" style={{color:'#B19777'}}>
                      Walk in Wardrobes
                      </h3>
                      <p>
                      Transform your space with luxurious walk-in wardrobes, offering a perfect blend of style and functionality. Designed for seamless organization, these wardrobes provide ample storage for clothing, accessories, and more.
                      </p>
                     
                      <a 
  href="" 
  className="site-button-link" 
  style={{
    background: '#B19777',
    color: 'white',
    padding: '18px',
    textDecoration: 'none',
    border: '2px solid #B19777',
    transition: 'all 0.3s ease-in-out'
  }}
  onMouseEnter={(e) => {
    e.target.style.background = 'white';
    e.target.style.color = '#B19777';
  }}
  onMouseLeave={(e) => {
    e.target.style.background = '#B19777';
    e.target.style.color = 'white';
  }}
> 
  Read More
</a>
                    </div>
                  </div>
                </motion.div>

                <motion.div className="col-lg-6 col-md-12"
                   initial={{ opacity: 0, x: 50 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ duration: 1 }}>
                  <div className="arc-home-about-right portfolio-wrap">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 masonry-item">
                        <div className="wt-media m-b20  img-reflection">
                          <img src="/assets/pic/walk6.png" alt="" />
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-6 masonry-item">
                        <div className="wt-media m-b20  img-reflection">
                          <img src="/assets/pic/walk7.png" alt="" />
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-6 masonry-item">
                        <div className="wt-media m-b20  img-reflection">
                          <img src="/assets/pic/walk4.png" alt="" />
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6 masonry-item">
                        <div className="wt-media m-b20  img-reflection">
                          <img src="/assets/pic/walk5.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

              </div>
              
            </div>
          </div>
        </div>
        {/* <!--   SECTION END -->   */}

         {/* text start  */}
         <div className="container mt-5 mb-5">
            <div className="project-detail-outer">
              <div className="project-detail-containt">
                <div className=" text-black">
                  <h3 style={{color:'#B19777'}}>Why Walk In Wardrobes?</h3>
                  <h2 style={{color:'#B19777'}}>Benefits of a custom walk-in-wardrobe</h2>
                  <p style={{color:'#fff'}}>
                  Everyone has their own reasons for choosing a custom walk-in wardrobe. Beyond just a stylish addition, it offers practical benefits that enhance organization and maximize space. A well-designed walk-in wardrobe ensures that everything is easily accessible while complementing your interior aesthetics.
                  </p>
                  <p style={{color:'#fff'}}>
                 <ul>
                  <li className='mb-2'><b style={{color:'#B19777'}}>Optimal Organization :</b> Every item has its designated place, making it easy to find and store belongings.</li>
                 
                  <li className='mb-2'><b style={{color:'#B19777'}}>Personalized Layout :</b> Tailor your wardrobe to suit your needs, from shelving and hanging sections to drawer placements.</li>
                  <li className='mb-2'><b style={{color:'#B19777'}}> Maximized Space Efficiency :</b> Utilize the entire height of the room, from floor to ceiling, for storage.</li>
                  <li className='mb-2'><b style={{color:'#B19777'}}>Customized Storage Solutions :</b> Create a system that perfectly fits your lifestyle and storage needs.</li>
                 </ul>
                  </p>
                  <p style={{color:'#fff'}}>In addition to clothing and accessories, a walk-in wardrobe can also house built-in appliances, helping to free up space in other areas of your home. Some people even opt for multi-functional designs, such as integrating a laundry area or creating a stylish dressing space with ample mirrors. No matter the vision, <b style={{color:'#B19777'}}>CraftMySpace</b> can help bring your ideal walk-in wardrobe to life.</p>
                 
                 
                </div>
                <div className=" text-black">
                  <h3 style={{color:'#B19777'}}>Dressing room to order “CraftMySpace” – a dream that becomes a reality</h3>
                  
                  <p style={{color:'#fff'}}>
                  A well-designed dressing room is more than just a storage space—it’s a personal retreat that combines luxury, organization, and convenience. With CraftMySpace, you can create a bespoke dressing room tailored to your style and needs. From elegant shelving and spacious wardrobes to stylish lighting and mirrors, every element is thoughtfully designed to enhance your daily routine.
                  </p>
                 <p style={{color:'#fff'}}>Whether you dream of a chic boutique-style dressing area or a minimalistic, space-saving design, our custom solutions bring functionality and elegance together. With high-quality materials, smart storage options, and a flawless finish, CraftMySpace transforms your vision into reality, making your dressing room a perfect blend of beauty and practicality.</p>
                 
                </div>
              </div>
            </div>
          </div>
          {/* text end  */}
        </div>
      
      <Footers />
       {/* <!-- BUTTON TOP START --> */}
       <button className="scroltop">
          <span className="fa fa-angle-up  relative" id="btn-vibrate"></span>
        </button>
    </motion.div>
  );
}

export default Walkinwardrobed
