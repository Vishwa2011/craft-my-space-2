import { Formik, Form, Field } from "formik";
import Navbar from "./Navbar";
import Footers from "./Footer";
import { useState } from "react";
import Swal from "sweetalert2";
import { BiPhoneCall } from "react-icons/bi";
export default function Thankyou() {
  const [errors, setErrors] = useState({});
  return (
    <div className="page-wraper">
      <Navbar />
      <div className="page-content" style={{marginTop:'20px'}}>
        {/* <!-- CONTENT START --> */}

        {/* <!-- INNER PAGE BANNER --> */}
        <div
          className="wt-bnr-inr overlay-wraper bg-parallax bg-top-center"
          data-stellar-background-ratio="0.5"
          style={{
            // backgroundImage: "url(assets/images/banner/2.jpg)",
            backgroundImage: "url(assets/pic/cms.jpg)",
          }}
        >
          <div className="overlay-main bg-black opacity-07"></div>
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name">
                  <h2 className="text-white thankyou">
                    Thank you for filling out the form
                  </h2>
                </div>
              </div>
              {/* <!-- BREADCRUMB ROW -->   */}

              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>
                    <a>We’ll get back to you as soon as possible</a>
                  </li>
                </ul>
              </div>
              <div>
                <button
                  style={{
                    padding: "10px",
                    border: "0px",
                    fontWeight: 600,
                    marginTop: "20px",
                  }}
                >
                  <a href="/">GO TO HOME PAGE</a>
                </button>
              </div>
              {/* <!-- BREADCRUMB ROW END -->                         */}
            </div>
          </div>
        </div>
        {/* <!-- INNER PAGE BANNER END --> */}

        {/* book start  */}
        <div
          className="section-full p-t80 p-b80"
          style={{
            backgroundImage: `url('/assets/pic/modular-kitchen-cabinets.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container">
            <div className="section-content">
              <div className="contact-wrapper">
                {/* Left Side Content */}
                <div className="contact-info mt-4">
                  <p>
                    Our hallmark is design freedom. There are no strict rules or
                    boundaries. Each project uniquely reflects your style and
                    lifestyle.
                  </p>
                  <div className="contact-details">
  <p>
    <BiPhoneCall />
    <a 
      href="tel:+01753530216" 
      style={{ textDecoration: 'none', color: 'inherit', marginLeft: '5px' }}
    >
      +01753530216
    </a>
  </p>
</div>

                </div>

                {/* Right Side Form */}
                <div className="contact-form p-a30 bg-gray">
                  <Formik
                    initialValues={{
                      username: "",
                      email: "",
                      number: "",
                      address: "",
                      message: "",
                    }}
                    validate={(values) => {
                      let errors = {};

                      const emailRegex =
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                      if (!values.email.trim()) {
                        errors.email = "Email is required";
                      } else if (!emailRegex.test(values.email)) {
                        errors.email = "Please enter a valid email address";
                      }

                      const phoneRegex = /^[0-9]{10}$/;
                      if (!values.number.trim()) {
                        errors.number = "Phone number is required";
                      } else if (!phoneRegex.test(values.number)) {
                        errors.number =
                          "Phone number must be exactly 10 digits";
                      }

                      return errors;
                    }}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                      console.log("Form Submitted:", values);

                      Swal.fire({
                        title: "Success!",
                        text: "Form submitted successfully!",
                        icon: "success",
                        confirmButtonText: "OK",
                      });

                      resetForm();
                      setSubmitting(false);
                    }}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      handleBlur,
                      handleChange,
                    }) => (
                      <Form className="cons-contact-form">
                        <h3 className="m-b5 text-uppercase">Get In Touch</h3>

                        <Field
                          name="username"
                          type="text"
                          className="form-control"
                          placeholder="Full Name"
                          onChange={(e) => {
                            const regex = /^[A-Za-z\s]*$/;
                            if (regex.test(e.target.value)) {
                              handleChange(e);
                            }
                          }}
                        />

                        <Field
                          name="email"
                          type="text"
                          className="form-control"
                          placeholder="Email Address"
                        />
                        {errors.email && touched.email && (
                          <p className="error-message">{errors.email}</p>
                        )}

                        <Field
                          name="number"
                          type="tel"
                          className="form-control"
                          placeholder="Phone Number"
                          value={values.number}
                          onChange={(e) => {
                            const value = e.target.value;
                            if (/^\d{0,10}$/.test(value)) {
                              handleChange(e);
                            }
                          }}
                        />
                        {errors.number && touched.number && (
                          <p className="error-message">{errors.number}</p>
                        )}

                        <Field
                          name="address"
                          type="text"
                          className="form-control"
                          placeholder="Location"
                        />
                        <Field
                          as="select"
                          name="category"
                          className="form-control"
                        >
                          <option value="">CATEGORY</option>
                          <option value="BEDROOM AND DRESSING">
                            BEDROOM AND DRESSING
                          </option>
                          <option value="BOOKSHELF AND DISPLAYS">
                            BOOKSHELF AND DISPLAYS
                          </option>
                          <option value="FRETWORK DOORS WARDROBE">
                            FRETWORK DOORS WARDROBE
                          </option>
                          <option value="GLASS HINGE DOOR">
                            GLASS HINGE DOOR
                          </option>
                          <option value="LOFT WARDROBES">LOFT WARDROBES</option>
                          <option value="MEDIA CABINET">MEDIA CABINET</option>
                          <option value="OFFICES">OFFICES</option>
                          <option value="PLAIN HINGE DOORS">
                            PLAIN HINGE DOORS
                          </option>
                          <option value="SHAKER DOOR WARDROBES">
                            SHAKER DOOR WARDROBES
                          </option>
                          <option value="SLIDING DOOR WARDROBE">
                            SLIDING DOOR WARDROBE
                          </option>
                          <option value="UTILITY STORAGE ROOM">
                            UTILITY STORAGE ROOM
                          </option>
                          <option value="WALK-IN WARDROBE">
                            WALK-IN WARDROBE
                          </option>
                          <option value="OTHER">OTHER</option>
                        </Field>

                        <button
                          type="submit"
                          className="site-button radius-no text-uppercase"
                          disabled={Object.keys(errors).length > 0}
                        >
                          SEND
                        </button>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* book end  */}

        {/* <!-- CONTENT END --> */}
      </div>
      <Footers />
      <button className="scroltop">
        <span className="fa fa-angle-up  relative" id="btn-vibrate"></span>
      </button>
    </div>
  );
}
