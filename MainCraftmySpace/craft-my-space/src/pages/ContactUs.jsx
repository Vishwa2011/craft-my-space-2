import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Footers from "./Footer";
import Swal from "sweetalert2";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

const ContactUs = () => {
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
    if (name === "name" && /[^A-Za-z\s]/.test(value)) return;
    if (name === "mobile" && /[^0-9]/.test(value)) return;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
    console.log("Form Data Submitted:", formData);
    Swal.fire({
      title: "Success!",
      text: "Your message has been sent successfully.",
      icon: "success",
      confirmButtonText: "OK",
    });
    setFormData({
      name: "",
      mobile: "",
      subject: "",
      email: "",
      message: "",
    });
    setErrors({});
  };

  return (
    <motion.div
      className="page-wrapper"
      style={{ background: "#000" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Navbar />
      <div className="page-content">
        <motion.div
          className="wt-bnr-inr overlay-wraper bg-parallax "
          style={{ backgroundImage: "url(assets/pic/get.png)" }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="overlay-main bg-black opacity-07"></div>
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name">
                  <h2 className="text-white">Contact Us</h2>
                </div>
              </div>
              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>Contact Us</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        <div>
        <div className="section-head clearfix" style={{marginTop:'60px'}}>
                  <div style={{ textAlign: "center" }}>
                    <small
                      className="wt-small-title"
                      style={{ color: "#B19777",fontSize:'25px' }}
                    >
                      [   Let's  Build  Your  Dream  Furniture  Together!     ]
                    </small>
                 
                  </div>
                </div>
        </div>

        <motion.div className="section-full p-t30" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}>
          <div className="container">
            <div className="row" style={{ display: "flex", flexWrap: "wrap" }}>
              <motion.div className="contact-form p-a30 col-md-6 col-12" initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 1.2 }}>
              <form className="cons-contact-form" onSubmit={handleSubmit}>
                    <div className="contact-one">
                      <h4 className="m-b6" style={{color:"#B19777"}}>Contact Us</h4>
                      <h3 style={{color:'black'}}>Do You Need Any Help? Send Message</h3>
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
                          label="Email"
                          name="email"
                          variant="standard"
                          margin="normal"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={formData.email}
                          error={!!errors.email}
                          helperText={errors.email}
                        
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
                  <FormControl fullWidth variant="standard" margin="normal" error={!!errors.subject}>
  <InputLabel>Preferred Furniture Type</InputLabel>
  <Select
    name="subject"
    value={formData.subject}
    onChange={handleChange}
    onBlur={handleBlur}
    label="Subject"
  >
    <MenuItem value=""><em>None</em></MenuItem>
    <MenuItem value="Hinged Door Wardrobes">Hinged Door Wardrobes</MenuItem>
    <MenuItem value="Sliding Wardrobes Doors By CMS">Sliding Wardrobes Doors By CMS</MenuItem>
    <MenuItem value="Sliding Wardrobes">Sliding Wardrobes</MenuItem>
    <MenuItem value="Walk-in Wardrobes">Walk-in Wardrobes</MenuItem>
    <MenuItem value="Children's Fitted Bedrooms">Children's Fitted Bedrooms</MenuItem>
    <MenuItem value="Home Office">Home Office</MenuItem>
    <MenuItem value="Kitchen">Kitchen</MenuItem>
    <MenuItem value="Media Room">Media Room</MenuItem>
    <MenuItem value="Alcoves">Alcoves</MenuItem>
    <MenuItem value="Bay Windows">Bay Windows</MenuItem>
    <MenuItem value="Landing & Hallways">Landing & Hallways</MenuItem>
    <MenuItem value="Sloping Ceiling">Sloping Ceiling</MenuItem>
    <MenuItem value="Under Stairs">Under Stairs</MenuItem>
    <MenuItem value="Others">Others</MenuItem>
  </Select>
  {errors.subject && <p style={{ color: "red", fontSize: "0.75rem" }}>{errors.subject}</p>}
</FormControl>

                       
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
              </motion.div>
              <motion.div className="col-md-6 col-12"
              initial={{ x: 100 }} animate={{ x: 0 }} transition={{ duration: 1.2 }}
              >
                   <img src="/assets/pic/contact (1).jpg" style={{height:'650px'}}/>
                </motion.div>
            </div>
            <div className="row" style={{padding:'50px 0px'}}>
              

              <motion.div className="col-md-12 col-12"
              initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 1.2 }}
              >
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345086164!2d144.95592831590437!3d-37.8172097420216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1fcd5bb%3A0x2e3f35dd18f56b1d!2sMelbourne%2C%20Victoria%2C%20Australia!5e0!3m2!1sen!2sin!4v1632983659483!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
            ></iframe>
        </motion.div>
  
            </div>
          </div>
        </motion.div>
        <Footers />
    
      </div>
      <button className="scroltop">
      <span className="fa fa-angle-up  relative" id="btn-vibrate"></span>
    </button>
    </motion.div>
  );
};

export default ContactUs;
