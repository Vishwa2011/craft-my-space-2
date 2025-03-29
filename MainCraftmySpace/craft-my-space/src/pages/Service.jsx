import React from 'react';
import Navbar from './Navbar';
import Footers from './Footer';

const services = [
  {
    title: "Fitted Bedrooms",
    description:
      "Maximize your space with elegantly designed fitted bedrooms, tailored to blend functionality and style seamlessly.",
    image: "/assets/pic/Kitchen-Furniture (1).jpg",
  },
  {
    title: "Fitted Wardrobes",
    description:
      "Enhance your storage with bespoke fitted wardrobes, designed to optimize space while adding a touch of elegance to your interiors.",
    image: "/assets/pic/Kitchen-Furniture (1).jpg",
  },
  {
    title: "Fitted Living",
    description:
      "Create a seamless and stylish living space with bespoke fitted living solutions, designed for comfort, functionality, and elegance.",
    image: "/assets/pic/Kitchen-Furniture (1).jpg",
  },
  {
    title: "Awkward Spaces",
    description:
      "Maximize every inch of your home with custom solutions for awkward spaces, turning challenging areas into functional and stylish features.",
    image: "/assets/pic/Kitchen-Furniture (1).jpg",
  }
];

const Service = () => {
  return (
    <>
      <div className="page-wraper" style={{ background: '#000' }}>
        <Navbar />
        <div className="page-content">
          {/* INNER PAGE BANNER */}
          <div
            className="wt-bnr-inr overlay-wraper bg-parallax bg-top-center"
            data-stellar-background-ratio="0.5"
            style={{ backgroundImage: "url(assets/pic/cms.jpg)" }}
          >
            <div className="overlay-main bg-black opacity-07"></div>
            <div className="container">
              <div className="wt-bnr-inr-entry">
                <div className="banner-title-outer">
                  <div className="banner-title-name">
                    <h2 className="text-white">Services</h2>
                  </div>
                </div>
                <div>
                  <ul className="wt-breadcrumb breadcrumb-style-2">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>Services</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* INNER PAGE BANNER END */}

          {/* WELCOME SECTION START */}
          <div className="section-full p-t80 p-b80 bg-black overflow-hide home-2-about-outer">
            <div className="container">
              <div className="section-content">
                {services.map((service, index) => (
                  <div className="row" key={index} style={{ justifyContent: 'space-between', flexDirection: index % 2 === 0 ? 'row-reverse' : 'row', marginBottom: '50px', }}>
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
      </div>
    </>
  );
};

export default Service;
