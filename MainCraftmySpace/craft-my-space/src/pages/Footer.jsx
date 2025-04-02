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
                <li>
                  <a
                    href="https://www.instagram.com/accounts/login/"
                    target="_blank"
                  >
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://vimeo.com/log_in" target="_blank">
                    <i className="fa fa-vimeo"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://accounts.google.com/signin/v2/identifier?service=youtube"
                    target="_blank"
                  >
                    <i className="fa fa-youtube"></i>
                  </a>
                </li>
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
                  <p>
                    Bespoke fitted bedrooms, fitted wardrobes, fitted furniture
                    and kitchens designed and installed by <b>CraftMySpace</b>.
                  </p>
                </div>
              </div>

              <div className="col-xl-3 col-lg-6 col-md-6">
               
                <div className="widget widget_address_outer m-b20">
                  <h4 className="widget-title">Contact Us</h4>
                  <ul className="widget_address">
                    <li>
                      <div style={{ display: "flex" }}>
                        <div>
                          <LocationOnIcon style={{ marginRight: "6px" }} />
                        </div>
                        <div>
                        Unit 1, Grange Farm, Grange Way. Iver. Buckinghamshire - SL0 9NT
                        </div>
                      </div>
                    </li>
                    <li>
  <EmailIcon style={{ marginRight: "7px" }} />
  <a href="mailto:– Info@craftmyspace.co.uk" style={{ color: "inherit", textDecoration: "none" }}>
  Info@craftmyspace.co.uk
  </a>
</li>
{/* <li>
  <EmailIcon style={{ marginRight: "7px" }} />
  <a href="mailto:salil@craftmyspace.uk" style={{ color: "inherit", textDecoration: "none" }}>
    salil@craftmyspace.uk
  </a>
</li> */}
<li>
  <CallIcon style={{ marginRight: "7px" }} />
  <a href="tel:–(0044)07365 566 666" style={{ color: "inherit", textDecoration: "none" }}>
 (0044)07365 566 666
  </a>
</li>

                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="widget widget_address_outer m-b20">
              <h4 className="widget-title">Explore </h4>
                <ul >
                <li className="text-3xl font-bold mb-6" style={{ marginBottom: '10px' }}>
  <a 
   href='/'
    style={{ color: "#7e878c", transition: "color 0.3s" }} 
    onMouseEnter={(e) => e.target.style.color = "#B19777  "} 
    onMouseLeave={(e) => e.target.style.color = "#7e878c"}
  >
   Home
  </a>
</li>
<li className="text-3xl font-bold mb-6" style={{ marginBottom: '10px' }}>
  <a 
  href='/WhyCraftMySpace'
    style={{ color: "#7e878c", transition: "color 0.3s" }} 
    onMouseEnter={(e) => e.target.style.color = "#B19777"} 
    onMouseLeave={(e) => e.target.style.color = "#7e878c"}
  >
     Why Craftmyspace?
  </a>
</li>

<li className="text-3xl font-bold mb-6" style={{ marginBottom: '10px' }}>
  <a 
  href='/Service'
    style={{ color: "#7e878c", transition: "color 0.3s" }} 
    onMouseEnter={(e) => e.target.style.color = "#B19777"} 
    onMouseLeave={(e) => e.target.style.color = "#7e878c"}
  >
    Services
  </a>
</li>
<li className="text-3xl font-bold mb-6" style={{ marginBottom: '10px' }}>
  <a 
  href='/Joinery'
    style={{ color: "#7e878c", transition: "color 0.3s" }} 
    onMouseEnter={(e) => e.target.style.color = "#B19777"} 
    onMouseLeave={(e) => e.target.style.color = "#7e878c"}
  >
    Joinery
  </a>
</li>
<li className="text-3xl font-bold mb-6" style={{ marginBottom: '10px' }}>
  <a 
  href='/Inspiration'
    style={{ color: "#7e878c", transition: "color 0.3s" }} 
    onMouseEnter={(e) => e.target.style.color = "#B19777"} 
    onMouseLeave={(e) => e.target.style.color = "#7e878c"}
  >
    Inspiration
  </a>
</li>
<li className="text-3xl font-bold mb-6" style={{ marginBottom: '10px' }}>
  <a 
  href='/Recentwork'
    style={{ color: "#7e878c", transition: "color 0.3s" }} 
    onMouseEnter={(e) => e.target.style.color = "#B19777"} 
    onMouseLeave={(e) => e.target.style.color = "#7e878c"}
  >
    Gallary
  </a>
</li>
<li className="text-3xl font-bold mb-6" style={{ marginBottom: '10px' }}>
  <a 
  href='/GetaQuote'
    style={{ color: "#7e878c", transition: "color 0.3s" }} 
    onMouseEnter={(e) => e.target.style.color = "#B19777"} 
    onMouseLeave={(e) => e.target.style.color = "#7e878c"}
  >
  Get Quote
  </a>
</li>
<li className="text-3xl font-bold mb-6" style={{ marginBottom: '10px' }}>
  <a 
  href='/Mission'
    style={{ color: "#7e878c", transition: "color 0.3s" }} 
    onMouseEnter={(e) => e.target.style.color = "#B19777"} 
    onMouseLeave={(e) => e.target.style.color = "#7e878c"}
  >
 Our Mission
  </a>
</li>
<li className="text-3xl font-bold mb-6" style={{ marginBottom: '10px' }}>
  <a 
  href='/Vision'
    style={{ color: "#7e878c", transition: "color 0.3s" }} 
    onMouseEnter={(e) => e.target.style.color = "#B19777"} 
    onMouseLeave={(e) => e.target.style.color = "#7e878c"}
  >
  Our Vision
  </a>
</li>
<li className="text-3xl font-bold mb-6" style={{ marginBottom: '10px' }}>
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
</li>

       
                 
                </ul>
              </div>
              </div>

              {/* <!-- TAGS --> */}
             
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className=" widget_address_outer mb-3">
                  <h4 className="widget-title mb-0">Booking & Brochure</h4>
                </div>
                <div>
                <a href="/GetaQuote">
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
                      
                      Book a Free Design Visit 
                     
                    </span>
                  </div>
                  </a>
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
                      marginTop:'20px',
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
                  Order a Free Brochure 
                    </span>
                  </div>
                  </a>
                  
                <div className="widget widget_address_outer m-b20" style={{marginTop:'10px'}}>
                  <h4 className="widget-title">Office Info</h4>
                  <form onSubmit={handleSubmit}>
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      maxWidth: 400,
      border: "1px solid #ccc",
      borderRadius: "4px",
      overflow: "hidden",
    }}
  >
    <Box
      sx={{
        display: "flex",
      }}
    >
      <TextField
        variant="filled"
        placeholder="Email Address"
        fullWidth
        className="foot_mail"
        value={email}
        onChange={handleChange}
        InputProps={{
          disableUnderline: true,
          sx: {
            backgroundColor: "#333",
            color: "#fff",
            paddingLeft: "10px",
          },
        }}
      />
      <Button
        type="submit"
        sx={{
          backgroundColor: "white",
          color: "black",
          fontWeight: "bold",
          ":hover": { backgroundColor: "white" },
        }}
      >
        Send
      </Button>
    </Box>
  </Box>
    {error && (
      <Box sx={{ color: "red", fontSize: "14px", mt: 1, textAlign: "left" }}>
        {error}
      </Box>
    )}
</form>

              </div>

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
                11976914. Registered Office: Unit 1, Grange Farm, Grange Way. Iver. Buckinghamshire - SL0 9NT.
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