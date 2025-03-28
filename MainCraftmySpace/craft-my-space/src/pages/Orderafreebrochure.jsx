import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import Footers from "./Footer";
import Box from "@mui/material/Box";
import { filledInputClasses } from "@mui/material/FilledInput";
import { inputBaseClasses } from "@mui/material/InputBase";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Checkbox from "@mui/material/Checkbox";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Orderafreebrochure = () => {
  const canvasRef = useRef(null);
  const [captcha, setCaptcha] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");

  const generateCaptcha = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let newCaptcha = "";
    for (let i = 0; i < 6; i++) {
      newCaptcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(newCaptcha);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      ctx.font = "30px Arial";
      ctx.fillText(captcha, 40, 35);
    }
  }, [captcha]);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      address: "",
      interests: [],
      designVisit: false,
      captchaInput: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .matches(/^[A-Za-z ]+$/, "Only characters are allowed")
        .required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      mobile: Yup.string()
        .matches(/^[0-9]{10}$/, "Enter a valid 10-digit mobile number")
        .required("Mobile number is required"),
      address: Yup.string().required("Address is required"),
      captchaInput: Yup.string()
        .required("Captcha is required")
        .test(
          "captcha-match",
          "Captcha does not match",
          (value) => value === captcha
        ),
    }),
    onSubmit: (values, { resetForm }) => {
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Form submitted successfully!",
      });
      resetForm();
      generateCaptcha();
    },
  });
  return (
    <>
      <div className="page-wraper">
        <Navbar />
        <div className="page-content">
          <div
            className="wt-bnr-inr overlay-wraper bg-parallax bg-top-center"
            data-stellar-background-ratio="0.5"
            style={{ backgroundImage: "url(assets/pic/order.webp)" }}
          >
            <div className="overlay-main bg-black opacity-07"></div>
            <div className="container">
              <div className="wt-bnr-inr-entry">
                <div className="banner-title-outer">
                  <div className="banner-title-name">
                    <h2 className="text-white">Order a Free Brochure</h2>
                  </div>
                </div>

                <div>
                  <ul className="wt-breadcrumb breadcrumb-style-2">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>Order a Free Brochure</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="section-full p-t30">
            <div className="container">
              <div className="section-content">
                <div className="row">
                  {/* Left Side: Form start*/}
                  <div className="col-12 col-md-6 p-md-5 p-3">
                    <form
                      className="cons-contact-form"
                      onSubmit={formik.handleSubmit}
                    >
                      <div className="section-head text-left mb-4">
                        <h2>Order a Free Brochure</h2>
                      </div>

                      <div className="row">
                        <div className="col-12 mb-3">
                          <TextField
                            label="Your Name"
                            variant="standard"
                            fullWidth
                            {...formik.getFieldProps("name")}
                            error={
                              formik.touched.name && Boolean(formik.errors.name)
                            }
                            helperText={
                              formik.touched.name && formik.errors.name
                            }
                            inputProps={{
                              maxLength: 50,
                              onKeyDown: (e) =>
                                /[0-9]/.test(e.key) && e.preventDefault(),
                            }}
                          />
                        </div>
                        <div className="col-12 mb-3">
                          <TextField
                            label="Email"
                            variant="standard"
                            fullWidth
                            {...formik.getFieldProps("email")}
                            error={
                              formik.touched.email &&
                              Boolean(formik.errors.email)
                            }
                            helperText={
                              formik.touched.email && formik.errors.email
                            }
                          />
                        </div>
                        <div className="col-12 mb-3">
                          <TextField
                            label="Mobile Number*"
                            variant="standard"
                            fullWidth
                            {...formik.getFieldProps("mobile")}
                            error={
                              formik.touched.mobile &&
                              Boolean(formik.errors.mobile)
                            }
                            helperText={
                              formik.touched.mobile && formik.errors.mobile
                            }
                            inputProps={{
                              maxLength: 10,
                              onKeyDown: (e) =>
                                /[^0-9]/.test(e.key) && e.preventDefault(),
                            }}
                          />
                        </div>
                        <div className="col-12 mb-3">
                          <TextField
                            label="Address"
                            multiline
                            maxRows={4}
                            variant="standard"
                            fullWidth
                            {...formik.getFieldProps("address")}
                            error={
                              formik.touched.address &&
                              Boolean(formik.errors.address)
                            }
                            helperText={
                              formik.touched.address && formik.errors.address
                            }
                          />
                        </div>

                        <div className="col-12 mb-3">
                          <p>I’m looking to create a beautiful...</p>
                          <div className="d-flex flex-wrap">
                            {[
                              "Fitted Wardrobe",
                              "Living Space",
                              "Kitchen",
                              "Office",
                              "Other",
                            ].map((item, index) => (
                              <label
                                key={index}
                                className="d-flex align-items-center me-3"
                              >
                                <Checkbox
                                  checked={formik.values.interests.includes(
                                    item
                                  )}
                                  onChange={() => {
                                    const newInterests =
                                      formik.values.interests.includes(item)
                                        ? formik.values.interests.filter(
                                            (i) => i !== item
                                          )
                                        : [...formik.values.interests, item];
                                    formik.setFieldValue(
                                      "interests",
                                      newInterests
                                    );
                                  }}
                                />
                                {item}
                              </label>
                            ))}
                          </div>
                        </div>

                        <div className="col-12 mb-3">
                          <p>I’m also interested in having a design visit</p>
                          <label className="d-flex align-items-center">
                            <Checkbox
                              checked={formik.values.designVisit}
                              onChange={() =>
                                formik.setFieldValue(
                                  "designVisit",
                                  !formik.values.designVisit
                                )
                              }
                            />
                            Please phone me to arrange a time
                          </label>
                        </div>

                        <div className="col-12 mb-3">
                          <div className="d-flex align-items-center">
                            <h4 className="me-2">Code :</h4>
                            <canvas
                              id="captcha"
                              width="200"
                              height="50"
                              ref={canvasRef}
                              className="me-3"
                            ></canvas>
                            <button
                              type="button"
                              className="btn btn-secondary"
                              onClick={generateCaptcha}
                            >
                              <i className="fa fa-refresh"></i>
                            </button>
                          </div>
                          <TextField
                            label="Enter Captcha"
                            variant="standard"
                            fullWidth
                            {...formik.getFieldProps("captchaInput")}
                            error={
                              formik.touched.captchaInput &&
                              Boolean(formik.errors.captchaInput)
                            }
                            helperText={
                              formik.touched.captchaInput &&
                              formik.errors.captchaInput
                            }
                          />
                        </div>

                        <div className="col-12 mt-3">
                          <button
                            type="submit"
                            className="btn btn-dark text-uppercase w-100"
                          >
                            Order Now
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  {/* Left Side: Form end */}
                  {/* Right Side: Contact Info */}
                  <div
                    className="col-12 col-md-6 p-md-5 p-3 contact-info text-center m-t80 bg-gray  m-b50 col-6"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
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
        </div>
        <Footers />
        <button className="scroltop">
          <span className="fa fa-angle-up  relative" id="btn-vibrate"></span>
        </button>
      </div>
    </>
  );
};

export default Orderafreebrochure;
