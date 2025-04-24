import React, { useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import { TextField, Button, Box } from "@mui/material";

const Footers = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setEmail(event.target.value);
    setError(""); // Clear error when user starts typing
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email) {
      setError("Enter Valid Email");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Invalid email format");
      return;
    }

    console.log("Submitted Email:", email);
    setEmail(""); // Clear input after submission
  };
  return (
    <>
      {/* <!-- FOOTER START --> */}
      <footer className="site-footer footer-large  footer-dark">
        <div className="footer-social-section bg-secondry">
          <div className="container">
            <div className="footer-social-content">
              <ul>
              <li>
                  <a
                    href="https://www.instagram.com/accounts/login/"
                    target="_blank"
                  >
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/login" target="_blank">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                {/* <li>
                  <a href="https://twitter.com/login" target="_blank">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li> */}
                <li>
                  <a href="https://www.pinterest.com/login/" target="_blank">
                    <i className="fa fa-pinterest-p"></i>
                  </a>
                </li>
               
                {/* <li>
                  <a href="https://vimeo.com/log_in" target="_blank">
                    <i className="fa fa-vimeo"></i>
                  </a>
                </li> */}
                {/* <li>
                  <a
                    href="https://accounts.google.com/signin/v2/identifier?service=youtube"
                    target="_blank"
                  >
                    <i className="fa fa-youtube"></i>
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-top overlay-wraper">
          <div className="overlay-main"></div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="widget recent-posts-entry">
                  <h4>
                    <a href="/">
                      <img style={{maxWidth:'40%'}}
                        src="/assets/pic/cmslogo.jpeg"
                        alt=""
                      />
                    </a>
                  </h4>
                  <p style={{color:'white'}}>
                    Bespoke fitted bedrooms, fitted wardrobes, fitted furniture
                    and kitchens designed and installed by <b style={{color:'white'}}>CraftMySpace</b>.
                  </p>
                </div>
              </div>

              <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="widget widget_address_outer m-b20">
              <h4 className="widget-title" style={{color:'#B19777'}}>Quick Links </h4>
                <ul >
                <li className="text-3xl font-bold mb-6" style={{ marginBottom: '10px' }}>
  <a 
   href='/'
    style={{ color: "#fff", transition: "color 0.3s" }} 
    onMouseEnter={(e) => e.target.style.color = "#B19777  "} 
    onMouseLeave={(e) => e.target.style.color = "#fff"}
  >
   Home
  </a>
</li>
{/* <li className="text-3xl font-bold mb-6" style={{ marginBottom: '10px' }}>
  <a 
  href='/WhyCraftMySpace'
    style={{ color: "#7e878c", transition: "color 0.3s" }} 
    onMouseEnter={(e) => e.target.style.color = "#B19777"} 
    onMouseLeave={(e) => e.target.style.color = "#7e878c"}
  >
     Why Craftmyspace?
  </a>
</li> */}

<li className="text-3xl font-bold mb-6" style={{ marginBottom: '10px' }}>
  <a 
  href='/Service'
    style={{ color: "#fff", transition: "color 0.3s" }} 
    onMouseEnter={(e) => e.target.style.color = "#B19777"} 
    onMouseLeave={(e) => e.target.style.color = "#fff"}
  >
    Services
  </a>
</li>
{/* <li className="text-3xl font-bold mb-6" style={{ marginBottom: '10px' }}>
  <a 
  href='/Joinery'
    style={{ color: "#7e878c", transition: "color 0.3s" }} 
    onMouseEnter={(e) => e.target.style.color = "#B19777"} 
    onMouseLeave={(e) => e.target.style.color = "#7e878c"}
  >
    Joinery
  </a>
</li> */}
<li className="text-3xl font-bold mb-6" style={{ marginBottom: '10px' }}>
  <a 
  href='/Recentwork'
    style={{ color: "#fff", transition: "color 0.3s" }} 
    onMouseEnter={(e) => e.target.style.color = "#B19777"} 
    onMouseLeave={(e) => e.target.style.color = "#fff"}
  >
    Gallary
  </a>
</li>
<li className="text-3xl font-bold mb-6" style={{ marginBottom: '10px' }}>
  <a 
  href='/Blog'
    style={{ color: "#fff", transition: "color 0.3s" }} 
    onMouseEnter={(e) => e.target.style.color = "#B19777"} 
    onMouseLeave={(e) => e.target.style.color = "#fff"}
  >
    Blog
  </a>
</li>
<li className="text-3xl font-bold mb-6" style={{ marginBottom: '10px' }}>
  <a 
  href='/ContactUs'
    style={{ color: "#fff", transition: "color 0.3s" }} 
    onMouseEnter={(e) => e.target.style.color = "#B19777"} 
    onMouseLeave={(e) => e.target.style.color = "#fff"}
  >
  Contact Us
  </a>
</li>
<li className="text-3xl font-bold mb-6" style={{ marginBottom: '10px' }}>
  <a 
  href='/Termandcondition'
    style={{ color: "#fff", transition: "color 0.3s" }} 
    onMouseEnter={(e) => e.target.style.color = "#B19777"} 
    onMouseLeave={(e) => e.target.style.color = "#fff"}
  >
  Terms & Conditions
  </a>
</li>
<li className="text-3xl font-bold mb-6" style={{ marginBottom: '10px' }}>
  <a 
  href='/PrivacyPolicy'
    style={{ color: "#fff", transition: "color 0.3s" }} 
    onMouseEnter={(e) => e.target.style.color = "#B19777"} 
    onMouseLeave={(e) => e.target.style.color = "#fff"}
  >
  Privacy Policy
  </a>
</li>
<li className="text-3xl font-bold mb-6" style={{ marginBottom: '10px' }}>
  <a 
  href='/GDPRPolicy'
    style={{ color: "#fff", transition: "color 0.3s" }} 
    onMouseEnter={(e) => e.target.style.color = "#B19777"} 
    onMouseLeave={(e) => e.target.style.color = "#fff"}
  >
  GDPR Policy
  </a>
</li>
<li className="text-3xl font-bold mb-6" style={{ marginBottom: '10px' }}>
  <a 
  href='/ContactUs'
    style={{ color: "#fff", transition: "color 0.3s" }} 
    onMouseEnter={(e) => e.target.style.color = "#B19777"} 
    onMouseLeave={(e) => e.target.style.color = "#fff"}
  >
  Warranty and Guaranty
  </a>
</li>
{/* <li className="text-3xl font-bold mb-6" style={{ marginBottom: '10px' }}>
  <a 
  href='/Mission'
    style={{ color: "#7e878c", transition: "color 0.3s" }} 
    onMouseEnter={(e) => e.target.style.color = "#B19777"} 
    onMouseLeave={(e) => e.target.style.color = "#7e878c"}
  >
 Our Mission
  </a>
</li> */}
{/* <li className="text-3xl font-bold mb-6" style={{ marginBottom: '10px' }}>
  <a 
  href='/Vision'
    style={{ color: "#7e878c", transition: "color 0.3s" }} 
    onMouseEnter={(e) => e.target.style.color = "#B19777"} 
    onMouseLeave={(e) => e.target.style.color = "#7e878c"}
  >
  Our Vision
  </a>
</li> */}
{/* <li className="text-3xl font-bold mb-6" style={{ marginBottom: '10px' }}>
  <a 
  href='/PrivacyPolicy'
    style={{ color: "#7e878c", transition: "color 0.3s" }} 
    onMouseEnter={(e) => e.target.style.color = "#B19777"} 
    onMouseLeave={(e) => e.target.style.color = "#7e878c"}
  >
Privacy & Policy
  </a>
</li>
<li className="text-3xl font-bold mb-6" style={{ marginBottom: '10px' }}>
  <a 
  href='/Termandcondition'
    style={{ color: "#7e878c", transition: "color 0.3s" }} 
    onMouseEnter={(e) => e.target.style.color = "#B19777"} 
    onMouseLeave={(e) => e.target.style.color = "#7e878c"}
  >
  Terms & Condition
  </a>
</li> */}

       
                 
                </ul>
              </div>
              </div>

              <div className="col-xl-3 col-lg-6 col-md-6">
               
                <div className="widget widget_address_outer m-b20">
                  <h4 className="widget-title" style={{color:"#B19777"}}>Address & Contact</h4>
                  <ul className="widget_address">
                    <li>
                      <div style={{ display: "flex" }}>
                        <div>
                          <LocationOnIcon style={{ marginRight: "6px",color:"#fff" }} />
                        </div>
                        <div style={{color:"#fff"}}>
                        Unit 1, Grange Farm, Grange Way Iver,Near London,UK
                        </div>
                      </div>
                    </li>
                    <li>
  <CallIcon style={{ marginRight: "7px",color:"#fff" }} />
  <a href="tel:–(0044)07365 566 666" style={{ color: "inherit", textDecoration: "none",color:"#fff" }}>
 (0044)07365 566 666
  </a>
</li>
                    <li>
  <EmailIcon style={{ marginRight: "7px",color:"#fff" }} />
  <a href="mailto:– Info@craftmyspace.co.uk" style={{ color: "inherit", textDecoration: "none",color:"#fff" }}>
  Info@craftmyspace.co.uk
  </a>
</li>
{/* <li>
  <EmailIcon style={{ marginRight: "7px" }} />
  <a href="mailto:salil@craftmyspace.uk" style={{ color: "inherit", textDecoration: "none" }}>
    salil@craftmyspace.uk
  </a>
</li> */}


                  </ul>
                </div>
              </div>
            

              {/* <!-- TAGS --> */}
             
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className=" widget_address_outer mb-3">
                  <h4 className="widget-title mb-0" style={{color:"#B19777"}}>Booking</h4>
                </div>
                <div>
                <a href="/Orderafreebrochure">
                <div
    style={{
      border: "2px solid #B19777",
      background: "rgb(177, 151, 119)",
      padding: "10px",
      fontWeight:500,
      width: "65%",
      borderRadius: "3px",
      color: "white",
      transition: "background 0.3s, color 0.3s",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.background = "white";
      e.currentTarget.style.color = "rgb(177, 151, 119)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = "rgb(177, 151, 119)";
      e.currentTarget.style.color = "white";
    }}
  >
                    <span>
                      
                      Order A Free Brouchure
                     
                    </span>
                  </div>
                  </a>
                
                  
               

                </div>
                
              </div>
              {/* <!-- NEWSLETTER --> */}
            </div>
          </div>
        </div>
        {/* <!-- FOOTER COPYRIGHT --> */}
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6">
              <div
              className="footer-logo-bar"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
              }}
            >
              <span className="copyrights-text mt-2">
                Copyright By © CraftMySpace Interiors ltd. Registered in England
                and Wales No.
              </span>
              <span className="copyrights-text mt-2">
                11976914. Registered Office: Unit 1, Grange Farm, Grange Way Iver,Near London,UK.
              </span>
            </div>
              </div>
              <div className="col-12 col-md-6 mt-2" style={{display:'flex',justifyContent:'end'}}>
                <div className="copyrights-text">
                <span >Proudly Powered by : Success Innovative Technologies Pvt. Ltd.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/*<!-- FOOTER END -->*/}
    </>
  );
};

export default Footers;