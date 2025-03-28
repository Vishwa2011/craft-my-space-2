import { useState } from "react";
// import { Box, TextField, InputAdornment } from "@mui/material";
import Navbar from "./Navbar";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Footers from "./Footer";
import "@mui/material/FilledInput";
import "@mui/material/InputBase";
import Swal from "sweetalert2";

const GetaQuote = () => {
      const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        subject: "",
        email: "",
        message: "",
      });
    
      const [errors, setErrors] = useState({});
    
      const validateField = (name, value) => {
        let error = "";
    
        if (!value) {
          error = `${name} is required`;
        } else {
          if (name === "name" && !/^[A-Za-z\s]+$/.test(value)) {
            error = "Name should contain only letters";
          }
          if (name === "mobile" && !/^\d{10}$/.test(value)) {
            error = "Enter a valid 10-digit mobile number";
          }
          if (name === "email" && !/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(value)) {
            error = "Enter a valid Gmail address";
          }
        }
    
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: error,
        }));
      };
    
      const handleBlur = (e) => {
        validateField(e.target.name, e.target.value);
      };
    
      const handleChange = (e) => {
        const { name, value } = e.target;
    
        // Prevent invalid input
        if (name === "name" && /[^A-Za-z\s]/.test(value)) return;
        if (name === "mobile" && /[^0-9]/.test(value)) return;
    
        setFormData((prev) => ({ ...prev, [name]: value }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
      
        // Validate all fields
        const newErrors = {};
        Object.keys(formData).forEach((key) => {
          validateField(key, formData[key]);
          if (!formData[key]) {
            newErrors[key] = `${key} is required`;
          }
        });
      
        if (Object.values(newErrors).some((error) => error)) {
          setErrors(newErrors);
          return;
        }
      
        // Show data in console
        console.log("Form Data Submitted:", formData);
      
        // Show SweetAlert confirmation
        Swal.fire({
          title: "Success!",
          text: "Your message has been sent successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });
      
        // Reset form fields
        setFormData({
          name: "",
          mobile: "",
          subject: "",
          email: "",
          message: "",
        });
      
        // Clear errors
        setErrors({});
      };
  return (
    <>
       <div className="page-wrapper">
        <Navbar />
        <div className="page-content">
          <div
            className="wt-bnr-inr overlay-wraper bg-parallax bg-top-center"
            data-stellar-background-ratio="0.5"
            style={{ backgroundImage: "url(assets/pic/getaquote.jpg)" }}
          >
            <div className="overlay-main bg-black opacity-07"></div>
            <div className="container">
              <div className="wt-bnr-inr-entry">
                <div className="banner-title-outer">
                  <div className="banner-title-name">
                    <h2 className="text-white">Get A Quote </h2>
                  </div>
                </div>

                <div>
                  <ul className="wt-breadcrumb breadcrumb-style-2">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>Get A Quote</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="section-full p-t30">
            <div className="container">
              <div
                className="row"
                style={{ display: "flex", flexWrap: "wrap" }}  >
                
                <div className="contact-form p-a30 col-md-6 col-12">
                  <form className="cons-contact-form" onSubmit={handleSubmit}>
                    <div className="contact-one">
                      <h4 className="m-b6">Contact Us</h4>
                      <h3>Do You Need Any Help? Send Message</h3>
                      <Box sx={{ width: "100%" }}>
                        <TextField
                          fullWidth
                          label="Your Name"
                          name="name"
                          variant="standard"
                          margin="normal"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={formData.name}
                          error={!!errors.name}
                          helperText={errors.name}
                        />
                        <TextField
                          fullWidth
                          label="Mobile"
                          name="mobile"
                          variant="standard"
                          margin="normal"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={formData.mobile}
                          error={!!errors.mobile}
                          helperText={errors.mobile}
                          inputProps={{ maxLength: 10 }}
                        />
                        <TextField
                          fullWidth
                          label="Subject"
                          name="subject"
                          variant="standard"
                          margin="normal"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={formData.subject}
                          error={!!errors.subject}
                          helperText={errors.subject}
                        />
                        <TextField
                          fullWidth
                          label="Email"
                          name="email"
                          variant="standard"
                          margin="normal"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={formData.email}
                          error={!!errors.email}
                          helperText={errors.email}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                @gmail.com
                              </InputAdornment>
                            ),
                          }}
                        />
                        <TextField
                          fullWidth
                          label="Message"
                          name="message"
                          multiline
                          rows={4}
                          variant="standard"
                          margin="normal"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={formData.message}
                          error={!!errors.message}
                          helperText={errors.message}
                        />
                      </Box>
                      <button
                        type="submit"
                        className="site-button"
                        style={{
                          background: "#000",
                          color: "#fff",
                          padding: "10px 20px",
                          marginTop: "20px",
                        }}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>

                <div className="col-md-6 col-12">
                   <img src="/assets/pic/contact (1).jpg"/>
                </div>

                {/* <div
                  className="contact-info col-md-6 col-12 text-center bg-gray p-4"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <h4 style={{ marginBottom: "30px" }}>CraftMySpace</h4>
                    <div style={{ textAlign: "justify" }}>
                      <div>
                        <div className="icon-content">
                          <p style={{display:'flex'}}>
                            <i
                              className="sl-icon-phone"
                              style={{
                                border: "1px solid #000",
                                borderRadius: "100%",
                                background: "#000",
                                color: "#fff",
                                padding: "5px",
                                marginRight: "10px",
                              }}
                            ></i>
                            +01753530216
                          </p>
                        </div>
                      </div>
                      <div>
                        <div className="icon-content">
                          <p style={{display:'flex'}}>
                            {" "}
                            <i
                              className="sl-icon-envolope"
                              style={{
                                border: "1px solid #000",
                                borderRadius: "100%",
                                background: "#000",
                                color: "#fff",
                                padding: "5px",
                                marginRight: "10px",
                              }}
                            ></i>
                          info@craftmyspace.uk
                          </p>
                        </div>
                      </div>
                      <div>
                        <div className="icon-content">
                          <p style={{display:'flex'}}>
                            {" "}
                            <i
                              className="sl-icon-envolope"
                              style={{
                                border: "1px solid #000",
                                borderRadius: "100%",
                                background: "#000",
                                color: "#fff",
                                padding: "5px",
                                marginRight: "10px",
                              }}
                            ></i>
                           salil@craftmyspace.uk
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
              <div className="row" style={{padding:'50px 0px'}}>
              

                <div className="col-md-6 col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345086164!2d144.95592831590437!3d-37.8172097420216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1fcd5bb%3A0x2e3f35dd18f56b1d!2sMelbourne%2C%20Victoria%2C%20Australia!5e0!3m2!1sen!2sin!4v1632983659483!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          <div
                  className="contact-info col-md-6 col-12 text-center  p-4"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <h4 style={{ marginBottom: "30px" }}>CraftMySpace</h4>
                    <div style={{ textAlign: "justify" }}>
                      <div>
                        <div className="icon-content">
                          <p style={{display:'flex'}}>
                            <i
                              className="sl-icon-phone"
                              style={{
                                border: "1px solid #000",
                                borderRadius: "100%",
                                background: "#000",
                                color: "#fff",
                                padding: "5px",
                                marginRight: "10px",
                              }}
                            ></i>
                            <a href="tel:(0044)07365 566 666">

                            (0044)07365 566 666
                            </a>
                          </p>
                        </div>
                      </div>
                      <div>
                        <div className="icon-content">
                          <p style={{display:'flex'}}>
                            {" "}
                            <i
                              className="sl-icon-envolope"
                              style={{
                                border: "1px solid #000",
                                borderRadius: "100%",
                                background: "#000",
                                color: "#fff",
                                padding: "5px",
                                marginRight: "10px",
                              }}
                            ></i>
                            <a href="mailto:Info@craftmyspace.co.uk">

                            Info@craftmyspace.co.uk
                            </a>
                          </p>
                        </div>
                      </div>
                      {/* <div>
                        <div className="icon-content">
                          <p style={{display:'flex'}}>
                            {" "}
                            <i
                              className="sl-icon-envolope"
                              style={{
                                border: "1px solid #000",
                                borderRadius: "100%",
                                background: "#000",
                                color: "#fff",
                                padding: "5px",
                                marginRight: "10px",
                              }}
                            ></i>
                            <a href="mailto:salil@craftmyspace.uk">

                           salil@craftmyspace.uk
                            </a>
                          </p>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div> 
              </div>
            </div>
          </div>


          <Footers />
          <button className="scroltop">
            <span className="fa fa-angle-up  relative" id="btn-vibrate"></span>
          </button>
        </div>
      </div>
    </>
  )
}

export default GetaQuote
