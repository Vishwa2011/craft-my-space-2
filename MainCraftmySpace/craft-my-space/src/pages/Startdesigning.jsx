import React, { useEffect } from 'react'
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Footers from "./Footer";
import Swal from "sweetalert2";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const Startdesigning = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isFadingIn, setIsFadingIn] = useState(false);
    const navigate = useNavigate();
  
    const [formData, setFormData] = useState({
      fullName: "",
      email: "",
      contactNumber: "",
      location: "",
      preferences: "",
    });
  
    const [errors, setErrors] = useState({});
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(true);
        setTimeout(() => setIsFadingIn(true), 50); // Delay for smooth fade-in
      }, 5000); // Show after 5 seconds
  
      return () => clearTimeout(timer); // Cleanup on unmount
    }, []);
  
    const handleClose = () => {
      setIsFadingIn(false);
      setTimeout(() => setIsVisible(false), 500); // Delay for fade-out effect
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const newErrors = {};
  
      if (formData.contactNumber.length !== 10) {
        newErrors.contactNumber = "Contact Number must be exactly 10 digits";
      }
  
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
      } else {
        navigate("");
  
        setFormData({
          fullName: "",
          email: "",
          contactNumber: "",
          location: "",
          preferences: "",
        });
      }
    };
    
  return (
    <>
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
                  <h2 className="text-white">start designing</h2>
                </div>
              </div>
              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>Start   Designing</li>
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
                      [  Start Your Custom Design Journey   ]
                    </small>
                 
                  </div>
                </div>
        </div>


        <motion.div className="section-full p-t30" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }} style={{padding:'50px 0px '}}>
          <div className="container">
            <div className="row" style={{ display: "flex", flexWrap: "wrap" }}>
              <motion.div className="contact-form p-a30 col-md-6 col-12" initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 1.2 }}>
              <h3 style={{color:'#B19777',marginBottom:'30px',}}>START DESIGNING NOW</h3>
              <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="fullName"
                required
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, ""); // Only letters allowed
                }}
                style={{
                  width: "100%",
                  marginBottom: "10px",
                  padding: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                }}
              />
              {errors.fullName && (
                <p style={{ color: "red", fontSize: "14px" }}>
                  {errors.fullName}
                </p>
              )}

              <input
                type="email"
                name="email"
                required
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                style={{
                  width: "100%",
                  marginBottom: "10px",
                  padding: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                }}
              />
              {errors.email && (
                <p style={{ color: "red", fontSize: "14px" }}>{errors.email}</p>
              )}

              <input
                type="text"
                required
                name="contactNumber"
                placeholder="Contact Number"
                value={formData.contactNumber}
                onChange={handleChange}
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, ""); // Only numbers allowed
                }}
                maxLength={10} // Maximum 10 digits
                style={{
                  width: "100%",
                  marginBottom: "10px",
                  padding: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                }}
              />
              {errors.contactNumber && (
                <p style={{ color: "red", fontSize: "14px" }}>
                  {errors.contactNumber}
                </p>
              )}

              <input
                type="text"
                required
                name="location"
                placeholder="Your Location"
                value={formData.location}
                onChange={handleChange}
                style={{
                  width: "100%",
                  marginBottom: "10px",
                  padding: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                }}
              />
              {errors.location && (
                <p style={{ color: "red", fontSize: "14px" }}>
                  {errors.location}
                </p>
              )}

              <textarea
                name="preferences"
                placeholder="Share your preferences with us..."
                value={formData.preferences}
                onChange={handleChange}
                style={{
                  width: "100%",
                  marginBottom: "10px",
                  padding: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                }}
              ></textarea>

              <button
                type="submit"
                style={{
                  backgroundColor: "#000",
                  color: "#fff",
                  width: "100%",
                  padding: "10px",
                  border: "none",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                    e.target.style.background = "black";
                    e.target.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "#B19777";
                    e.target.style.color = "white";
                  }}
              >
                SUBMIT
              </button>
            </form>
              </motion.div>
              <motion.div className="col-md-6 col-12"
              initial={{ x: 100 }} animate={{ x: 0 }} transition={{ duration: 1.2 }}
              >
                   <img src="/assets/pic/desging.jpg" style={{borderRadius:'10px'}}/>
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
    </>
  )
}

export default Startdesigning
