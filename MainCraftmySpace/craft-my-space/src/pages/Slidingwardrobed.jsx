import React from "react";
import Footers from "./Footer";
import Navbar from "./Navbar";


const services = [
  {
    title: "Childrens Bedroom Sliding Door Wardrobes",
    description:
      "Children's Bedroom Sliding Door Wardrobes – Space-saving and stylish, offering easy access, smart storage solutions, and a fun, modern design for kids' rooms.",
    image: "/assets/pic/1 (1).webp",
      link: "/ChildrensBedroomSlidingDoorWardrobes",
  },
  {
    title: "Sliding Hallway Wardrobes",
    description:
      " Enhance your storage with bespoke, space-saving designs that offer seamless access, smart organization, and a sleek, modern aesthetic.",
    image: "/assets/pic/2 (1).jpg",
    link:"/SlidingHallwayWardrobes"
  },
  {
    title: "Sliding Home Office Wardrobes",
    description:
      " Optimize your workspace with sleek, space-saving wardrobes, offering organized storage and a modern, professional look.",
    image: "/assets/pic/33 (1).jpg",
      link:"/SlidingHomeOfficeWardrobes"
  },
  {
    title: "Sliding Living Area Wardrobes",
    description:
      " Stylish and functional, these space-saving wardrobes offer seamless storage solutions while enhancing your living space's aesthetic.",
    image: "/assets/pic/4 (1).webp",
      link:"/SlidingLivingAreaWardrobes"
  },
  {
    title: "Sliding Bedroom Wardrobes ",
    description:
      "Stylish and functional, these space-saving wardrobes offer seamless storage solutions while enhancing your living space's aesthetic.",
    image: "/assets/pic/5 (1).jpg",
      link:"/SlidingBedroomWardrobes"
  }
];
const Slidingwardrobed = () => {
  return (
    <div className="page-wraper" style={{background:'#000'}}>
      <Navbar />
      <div className="page-content">
        {/* <!-- INNER PAGE BANNER --> */}
        <div
          className="wt-bnr-inr overlay-wraper bg-parallax bg-top-center"
          data-stellar-background-ratio="0.5"
          style={{
            backgroundImage: "url(assets/pic/dlife.jpg)",
          }}
        >
          <div className="overlay-main bg-black opacity-07"></div>
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name">
                  <h2 className="text-white">Sliding Wardrobes</h2>
                </div>
              </div>
              {/* <!-- BREADCRUMB ROW -->                             */}

              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>Fitted Wardrobes</li>
                  <li>Sliding Wardrobes </li>
                </ul>
              </div>

              {/* <!-- BREADCRUMB ROW END -->                         */}
            </div>
          </div>
        </div>
        {/* <!-- INNER PAGE BANNER END --> */}

        {/* <!--Bedroom  SECTION START --> */}
        {/* <div className="section-full p-t80 p-b80  overflow-hide" style={{background:'#000',borderBottom:'2px solid #B19777'}}>
          <div className="container">
            <div className="section-content">
              <div className="row">
                
                <div className="col-lg-6 col-md-12">
                  <div className="arc-home-about-left">
                    <div className="arc-home-left-content  " style={{background:'#000'}}>
                      <h3 className="m-t0 wt-tilte-light">
                      Bedroom Sliding Wardrobes
                      </h3>
                      <p>
                      Upgrade your bedroom with stylish sliding wardrobes that combine elegance and functionality. Designed to maximize space, these wardrobes offer seamless storage solutions while enhancing your room’s aesthetic appeal.
                      </p>
                      <a 
  href="/Bathroom" 
  className="site-button-link" 
  style={{
    background: '#B19777',
    color: 'white',
    padding: '18px',
    border: '2px solid #B19777',
    textDecoration: 'none',
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
 READ MORE
</a>

                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12" >
                  <div className="arc-home-about-right portfolio-wrap" >
                    <div className="row">
                        <div className="col-md-6 col-sm-6 masonry-item">
                        <div className="wt-media m-b20  img-reflection">
                          <img src="/assets/pic/bedroomsliding1.png" alt="" />
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-6 masonry-item">
                        <div className="wt-media m-b20  img-reflection">
                          <img src="/assets/pic/bedroomsliding2.png" alt="" />
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-6 masonry-item">
                        <div className="wt-media m-b20  img-reflection">
                          <img src="/assets/pic/bedroomsliding3.png" alt="" />
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6 masonry-item">
                        <div className="wt-media m-b20  img-reflection">
                          <img src="/assets/pic/bedroomsliding4.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              
            </div>
          </div>
        </div> */}
        {/* <!-- Bedroom  SECTION END -->   */}

        
        {/* <!--Home Office  SECTION START --> */}
        {/* <div className="section-full p-t80 p-b80 bg-gray overflow-hide" style={{background:'#000',borderBottom:'2px solid #B19777'}}>
          <div className="container">
            <div className="section-content">
              <div className="row">
                
             

                <div className="col-lg-6 col-md-12">
                  <div className="arc-home-about-right portfolio-wrap">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 masonry-item">
                        <div className="wt-media m-b20  img-reflection">
                          <img src="/assets/pic/homesliding1.png" alt="" />
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-6 masonry-item">
                        <div className="wt-media m-b20  img-reflection">
                          <img src="/assets/pic/homesliding2.png" alt="" />
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-6 masonry-item">
                        <div className="wt-media m-b20  img-reflection">
                          <img src="/assets/pic/homesliding3.png" alt="" />
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6 masonry-item">
                        <div className="wt-media m-b20  img-reflection">
                          <img src="/assets/pic/homesliding4.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="arc-home-about-left">
                    <div className="arc-home-left-content  " style={{background:'#000'}}>
                      <h3 className="m-t0 wt-tilte-light">
                      Home Office Sliding Wardrobes
                      </h3>
                      <p>
                      Optimize your workspace with home office sliding wardrobes, designed for both style and efficiency. These sleek wardrobes provide ample storage while maintaining a clean and organized environment.
                      </p>
                      <a href="/HomeOffice"
   style={{
     display: 'inline-block',
     padding: '18px',
     background: '#B19777',
     color: 'white',
     fontWeight:600,
     textDecoration: 'none',
     position: 'relative',
     border: '2px solid #B19777',
     overflow: 'hidden',
     transition: 'color 0.3s ease-in-out',
   }}
   onMouseEnter={(e) => {
     e.target.style.color = '#B19777';
     e.target.style.background = 'white';
   }}
   onMouseLeave={(e) => {
     e.target.style.color = 'white';
     e.target.style.background = '#B19777';
   }}
>
  READ MORE
</a>

                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div> */}
        {/* <!-- Home Office  SECTION END -->   */}

         {/* <!--Living  SECTION START --> */}
         {/* <div className="section-full p-t80 p-b80 bg-gray overflow-hide" style={{background:'#000',borderBottom:'2px solid #B19777'}}>
          <div className="container">
            <div className="section-content">
              <div className="row">
                
                <div className="col-lg-6 col-md-12">
                  <div className="arc-home-about-left">
                    <div className="arc-home-left-content  " style={{background:'#000'}}>
                      <h3 className="m-t0 wt-tilte-light">
                      Living Room Sliding Wardrobes
                      </h3>
                      <p>
                      Maximize space and style with our elegant living room sliding wardrobes, designed for seamless storage and a modern aesthetic. These wardrobes blend effortlessly with your décor while keeping your essentials neatly organized.
                      </p>
                      <a 
  href="/FittedLiving" 
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
                </div>

                <div className="col-lg-6 col-md-12">
                  <div className="arc-home-about-right portfolio-wrap">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 masonry-item">
                        <div className="wt-media m-b20  img-reflection">
                          <img src="/assets/pic/livingsliding1.png" alt="" />
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-6 masonry-item">
                        <div className="wt-media m-b20  img-reflection">
                          <img src="/assets/pic/livingsliding2.png" alt="" />
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-6 masonry-item">
                        <div className="wt-media m-b20  img-reflection">
                          <img src="/assets/pic/livingsliding3.png" alt="" />
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6 masonry-item">
                        <div className="wt-media m-b20  img-reflection">
                          <img src="/assets/pic/livingsliding4.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              
            </div>
          </div>
        </div> */}
        {/* <!-- Living  SECTION END -->   */}

         {/* <!--Childrens   SECTION START --> */}
         {/* <div className="section-full p-t80 p-b80 bg-gray overflow-hide" style={{background:'#000',borderBottom:'2px solid #B19777'}}>
          <div className="container">
            <div className="section-content">
              <div className="row">
                
             

                <div className="col-lg-6 col-md-12">
                  <div className="arc-home-about-right portfolio-wrap">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 masonry-item">
                        <div className="wt-media m-b20  img-reflection">
                          <img src="/assets/pic/childslider1.png" alt="" />
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-6 masonry-item">
                        <div className="wt-media m-b20  img-reflection">
                          <img src="/assets/pic/childslider2.png" alt="" />
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-6 masonry-item">
                        <div className="wt-media m-b20  img-reflection">
                          <img src="/assets/pic/childslide3.png" alt="" />
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6 masonry-item">
                        <div className="wt-media m-b20  img-reflection">
                          <img src="/assets/pic//childslider4.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="arc-home-about-left">
                    <div className="arc-home-left-content  " style={{background:'#000'}}>
                      <h3 className="m-t0 wt-tilte-light">
                      Childrens Bedroom Sliding Wardrobes
                      </h3>
                      <p>
                      Create a fun and organized space for your little ones with our children's sliding bedroom wardrobes. Designed for easy access and maximum storage, these wardrobes keep clothes, toys, and essentials neatly arranged.
                      </p>
                      
                      <a 
  href="/ChildrenFittedBadrooms" 
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
                </div>
              </div>
              
            </div>
          </div>
        </div> */}
        {/* <!-- Childrens   SECTION END -->   */}
        {/* WELCOME SECTION START */}
        <div className="section-full p-t80 p-b80 bg-black overflow-hide home-2-about-outer">
            <div className="container">
              <div className="section-content">
                {services.map((service, index) => (
                  <div className="row" key={index} style={{ justifyContent: 'space-between', flexDirection: index % 2 === 0 ? 'row-reverse' : 'row', marginBottom: '120px', }}>
                    <div className="col-xl-5 col-lg-6 col-md-12" >
                      <div className="wt-thum-bx">
                        <img src={service.image} alt="Service" />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12">
                      <div className="home-2-about-left-outer">
                        <div className="home-2-about-left">
                          <div className="home-2-about-left-content  p-a50 text-white" style={{background:'#272727'}}>                                                        
                            <h2 className="m-t0 wt-title">{service.title}</h2>
                            <p>{service.description}</p>
                            <a 
                              href={service.link}                                                                 
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
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* WELCOME SECTION END */}
      </div>
      <Footers />
       {/* <!-- BUTTON TOP START --> */}
       <button className="scroltop">
          <span className="fa fa-angle-up  relative" id="btn-vibrate"></span>
        </button>
    </div>
  );
};

export default Slidingwardrobed;
