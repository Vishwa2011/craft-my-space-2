// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const MeetDesignerForm = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [isFadingIn, setIsFadingIn] = useState(false);
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     contactNumber: "",
//     location: "",
//     preferences: "",
//   });

//   const [errors, setErrors] = useState({});

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVisible(true);
//       setTimeout(() => setIsFadingIn(true), 50); // Delay for smooth fade-in
//     }, 5000); // Show after 5 seconds

//     return () => clearTimeout(timer); // Cleanup on unmount
//   }, []);

//   const handleClose = () => {
//     setIsFadingIn(false);
//     setTimeout(() => setIsVisible(false), 500); // Delay for fade-out effect
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       [name]: "",
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newErrors = {};

//     if (formData.contactNumber.length !== 10) {
//       newErrors.contactNumber = "Contact Number must be exactly 10 digits";
//     }

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//     } else {
//       navigate("/Thankyou");

//       setFormData({
//         fullName: "",
//         email: "",
//         contactNumber: "",
//         location: "",
//         preferences: "",
//       });
//     }
//   };

  
//   return (
//     <>
//       {isVisible && isFadingIn && (
//         <div
//           style={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             background: "rgba(0, 0, 0, 0.7)",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             zIndex: 1000,
//             opacity: isFadingIn ? 1 : 0,
//             transform: isFadingIn ? "scale(1)" : "scale(0.8)",
//             transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
//           }}
//         >
//           <div
//             style={{
//               background: "#B19777",
//               padding: "20px",
//               borderRadius: "8px",
//               width: "800px",
//               boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
//               position: "relative",
//             }}
//           >
//             <button
//               onClick={handleClose}
//               style={{
//                 position: "absolute",
//                 top: "-5px",
//                 right: "4px",
//                 background: "none",
//                 border: "none",
//                 fontSize: "30px",
//                 cursor: "pointer",
//                 color:'#fff'
//               }}
//             >
//               ×
//             </button>

//   <div className="col-12">
//     <div className="row">
//     <div className="col-12 col-md-6">
//       <h3>Design Your Own Wardrobe</h3>
//             <p>
//               Encourage visitors to start customizing their furniture as soon as they land on the website.
//             </p>
//             <form onSubmit={handleSubmit}>
//               <input
//                 type="text"
//                 name="fullName"
//                 required
//                 placeholder="Full Name"
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 onInput={(e) => {
//                   e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, ""); // Only letters allowed
//                 }}
//                 style={{
//                   width: "100%",
//                   marginBottom: "10px",
//                   padding: "10px",
//                   border: "1px solid #ddd",
//                   borderRadius: "4px",
//                 }}
//               />
//               {errors.fullName && (
//                 <p style={{ color: "red", fontSize: "14px" }}>
//                   {errors.fullName}
//                 </p>
//               )}

//               <input
//                 type="email"
//                 name="email"
//                 required
//                 placeholder="Email Address"
//                 value={formData.email}
//                 onChange={handleChange}
//                 style={{
//                   width: "100%",
//                   marginBottom: "10px",
//                   padding: "10px",
//                   border: "1px solid #ddd",
//                   borderRadius: "4px",
//                 }}
//               />
//               {errors.email && (
//                 <p style={{ color: "red", fontSize: "14px" }}>{errors.email}</p>
//               )}

//               <input
//                 type="text"
//                 required
//                 name="contactNumber"
//                 placeholder="Contact Number"
//                 value={formData.contactNumber}
//                 onChange={handleChange}
//                 onInput={(e) => {
//                   e.target.value = e.target.value.replace(/[^0-9]/g, ""); // Only numbers allowed
//                 }}
//                 maxLength={10} // Maximum 10 digits
//                 style={{
//                   width: "100%",
//                   marginBottom: "10px",
//                   padding: "10px",
//                   border: "1px solid #ddd",
//                   borderRadius: "4px",
//                 }}
//               />
//               {errors.contactNumber && (
//                 <p style={{ color: "red", fontSize: "14px" }}>
//                   {errors.contactNumber}
//                 </p>
//               )}

//               <input
//                 type="text"
//                 required
//                 name="location"
//                 placeholder="Your Location"
//                 value={formData.location}
//                 onChange={handleChange}
//                 style={{
//                   width: "100%",
//                   marginBottom: "10px",
//                   padding: "10px",
//                   border: "1px solid #ddd",
//                   borderRadius: "4px",
//                 }}
//               />
//               {errors.location && (
//                 <p style={{ color: "red", fontSize: "14px" }}>
//                   {errors.location}
//                 </p>
//               )}

//               <textarea
//                 name="preferences"
//                 placeholder="Share your preferences with us..."
//                 value={formData.preferences}
//                 onChange={handleChange}
//                 style={{
//                   width: "100%",
//                   marginBottom: "10px",
//                   padding: "10px",
//                   border: "1px solid #ddd",
//                   borderRadius: "4px",
//                 }}
//               ></textarea>

//               <button
//                 type="submit"
//                 style={{
//                   backgroundColor: "#000",
//                   color: "#fff",
//                   width: "100%",
//                   padding: "10px",
//                   border: "none",
//                   cursor: "pointer",
//                 }}
//               >
//                 SUBMIT
//               </button>
//             </form>
//       </div>
//       <div
//   className="col-6 d-none d-md-block"
//   style={{
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: '100%',          // Take full height of parent
//     minHeight: '100%',       // Ensure it stretches within modal
//     padding: '20px',
//     boxSizing: 'border-box',
//   }}
// >
//   <img
//     src="/assets/pic/havan (1).jpeg"
//     alt=""
//     style={{
//       maxWidth: '100%',
//       maxHeight: '90%',       // Slightly reduce height to center better
//       objectFit: 'contain',
//     }}
//   />
// </div>

//     </div>
//   </div>
         
          


//           </div>
//         </div>
//       )}
//     </>
//   );
// };



// export default MeetDesignerForm;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MeetDesignerForm = () => {
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

  // This effect will handle closing the popup if any other popup is opened
  useEffect(() => {
    const handleCloseAllPopups = () => {
      setIsFadingIn(false);
      setTimeout(() => setIsVisible(false), 500); // Delay for fade-out effect
    };

    // Listen for the 'closeAllPopups' event
    window.addEventListener("closeAllPopups", handleCloseAllPopups);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("closeAllPopups", handleCloseAllPopups);
    };
  }, []);

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
      navigate("/Thankyou");

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
      {isVisible && isFadingIn && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            opacity: isFadingIn ? 1 : 0,
            transform: isFadingIn ? "scale(1)" : "scale(0.8)",
            transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
          }}
        >
          <div
            style={{
              background: "#B19777",
              padding: "20px",
              borderRadius: "8px",
              width: "800px",
              boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
              position: "relative",
            }}
          >
            <button
              onClick={handleClose}
              style={{
                position: "absolute",
                top: "-5px",
                right: "4px",
                background: "none",
                border: "none",
                fontSize: "30px",
                cursor: "pointer",
                color: "#fff",
              }}
            >
              ×
            </button>

            <div className="col-12">
              <div className="row">
                <div className="col-12 col-md-6">
                  <h3 >Design Your Own Wardrobe</h3>
                  <p>
                    Encourage visitors to start customizing their furniture as
                    soon as they land on the website.
                  </p>
                  <form onSubmit={handleSubmit} >
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={handleChange}
                      onInput={(e) => {
                        e.target.value = e.target.value.replace(
                          /[^A-Za-z\s]/g,
                          ""
                        ); // Only letters allowed
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
                      <p style={{ color: "red", fontSize: "14px" }}>
                        {errors.email}
                      </p>
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
                    >
                      SUBMIT
                    </button>
                  </form>
                </div>
                <div
                  className="col-6 d-none d-md-block"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%", // Take full height of parent
                    minHeight: "100%", // Ensure it stretches within modal
                    padding: "20px",
                    boxSizing: "border-box",
                  }}
                >
                  <img
                    src="/assets/pic/havan (1).jpeg"
                    alt=""
                    style={{
                      maxWidth: "100%",
                      maxHeight: "90%", // Slightly reduce height to center better
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MeetDesignerForm;
