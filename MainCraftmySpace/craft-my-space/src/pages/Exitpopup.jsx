// import React, { useEffect, useState } from "react";

// const Exitpopup = () => {
//   const [showPopup, setShowPopup] = useState(false);
//   const [hasShownPopup, setHasShownPopup] = useState(false);
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [contact, setContact] = useState("");
//   const [contactError, setContactError] = useState("");
//   useEffect(() => {
//     const handleMouseLeave = (e) => {
//       if (e.clientY <= 0 && !hasShownPopup) {
//         setShowPopup(true);
//         setHasShownPopup(true);
//       }
//     };

//     document.addEventListener("mouseleave", handleMouseLeave);
//     return () => document.removeEventListener("mouseleave", handleMouseLeave);
//   }, [hasShownPopup]);

//   if (!showPopup) return null;

//   const handleNameChange = (e) => {
//     const value = e.target.value;
//     // Allow only letters and spaces
//     if (/^[a-zA-Z\s]*$/.test(value)) {
//       setFullName(value);
//     }
//   };

//   const handleEmailChange = (e) => {
//     const value = e.target.value;
//     setEmail(value);

//     // Basic email validation regex
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (value === "" || emailRegex.test(value)) {
//       setEmailError("");
//     } else {
//       setEmailError("Invalid email address");
//     }
//   };

//   const handleContactChange = (e) => {
//     const value = e.target.value;

//     // Allow only digits
//     if (/^\d*$/.test(value)) {
//       if (value.length <= 10) {
//         setContact(value);
//         if (value.length === 10) {
//           setContactError("");
//         } else {
//           setContactError("Contact number must be exactly 10 digits");
//         }
//       }
//     }
//   };
  
//   return (
//     <div style={styles.overlay}>
//       <div style={styles.popup}>
//         <button onClick={() => setShowPopup(false)} style={styles.closeBtn}>
//           ×
//         </button>

//         <h2 style={styles.heading}>MEET A DESIGNER</h2>
//         <p style={styles.subheading}>
//           Offer a Free Consultation Before They Leave To Increase Conversions.
//         </p>

//         <div style={styles.imagesRow}>
//           <img
//             src="/assets/pic/exit1.jpg"
//             alt="preview1"
//             style={styles.previewImg}
//             className="hide-on-small"
//           />
//           <img
//             src="/assets/pic/exit2.jpg"
//             alt="preview2"
//             style={styles.previewImgCenter}
//           />
//           <img
//             src="/assets/pic/exit3.jpg"
//             alt="preview3"
//             style={styles.previewImg}
//           />
//         </div>

//         <form style={styles.form}>
//           <div style={styles.row}>
//             <input
//               type="text"
//               placeholder="Full Name"
//               required
//               style={styles.input}
//               value={fullName}
//               onChange={handleNameChange}
//             />
//           </div>

//           <div style={styles.row}>
//             <input
//               type="email"
//               required
//               placeholder="Email Address"
//               value={email}
//               onChange={handleEmailChange}
//               style={styles.input}
//             />
//             {emailError && <div style={styles.error}>{emailError}</div>}
//           </div>
//           <div style={styles.row}>
//             <input
//               type="text"
//               placeholder="Contact Number"
//               value={contact}
//               onChange={handleContactChange}
//               style={styles.input}
//             />
//             {contactError && <div style={styles.error}>{contactError}</div>}
//           </div>
//           <div style={styles.row}>
//             <input
//               type="text"
//               placeholder="Your Location"
//               style={styles.input}
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               placeholder="Share Your Preferences With Us..."
//               style={{ ...styles.input, width: "100%" }}
//             />
//           </div>

//           <button type="submit" style={styles.submitBtn}>
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   overlay: {
//     position: "fixed",
//     top: 0,
//     left: 0,
//     width: "100vw",
//     height: "100vh",
//     background: "rgba(0,0,0,0.5)",
//     zIndex: 9999,
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     padding: "20px",
//   },
//   error: { color: "red", fontSize: 12 },
//   popup: {
//     background: "#fff",
//     borderRadius: "8px",
//     maxWidth: "600px",
//     width: "100%",
//     padding: "30px",
//     position: "relative",
//     fontFamily: "'Segoe UI', sans-serif",
//   },
//   closeBtn: {
//     position: "absolute",
//     top: "10px",
//     right: "15px",
//     fontSize: "24px",
//     border: "none",
//     background: "transparent",
//     cursor: "pointer",
//   },
//   heading: {
//     textAlign: "center",
//     fontSize: "30px",
//     marginBottom: "10px",
//     color: "#B19777",
//   },
//   subheading: {
//     textAlign: "center",
//     color: "#666",
//     fontSize: "12px",
//     marginBottom: "25px",
//   },
//   imagesRow: {
//     display: "flex",
//     justifyContent: "center",
//     gap: "15px",
//     marginBottom: "25px",
//   },
//   previewImg: {
//     width: "160px",
//     height: "110px",
//     borderRadius: "6px",
//     boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
//   },
//   previewImgCenter: {
//     width: "160px",
//     height: "110px",
//     borderRadius: "6px",
//     transform: "translateY(-10px)",
//     boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "15px",
//   },
//   row: {
//     display: "flex",
//     gap: "10px",
//   },
//   input: {
//     flex: 1,
//     padding: "5px 12px",
//     border: "1px solid #ccc",
//     borderRadius: "4px",
//     fontSize: "12px",
//   },

//   submitBtn: {
//     backgroundColor: "#B19777",
//     color: "#fff",
//     padding: "5px 20px",
//     border: "none",
//     borderRadius: "4px",
//     fontSize: "14px",
//     cursor: "pointer",
//     alignSelf: "center",
//   },
// };

// export default Exitpopup;
import React, { useEffect, useState } from "react";

const Exitpopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [hasShownPopup, setHasShownPopup] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [contact, setContact] = useState("");
  const [contactError, setContactError] = useState("");

  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && !hasShownPopup) {
        // 🔥 Dispatch event to close other popups before opening this one
        const closeEvent = new Event("closeAllPopups");
        window.dispatchEvent(closeEvent);

        // Show this popup
        setShowPopup(true);
        setHasShownPopup(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasShownPopup]);

  // OPTIONAL: Listen for closeAllPopups event (to close this popup if needed)
  useEffect(() => {
    const handleClose = () => setShowPopup(false);
    window.addEventListener("closeAllPopups", handleClose);
    return () => window.removeEventListener("closeAllPopups", handleClose);
  }, []);

  if (!showPopup) return null;

  const handleNameChange = (e) => {
    const value = e.target.value;
    if (/^[a-zA-Z\s]*$/.test(value)) {
      setFullName(value);
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value === "" || emailRegex.test(value)) {
      setEmailError("");
    } else {
      setEmailError("Invalid email address");
    }
  };

  const handleContactChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      if (value.length <= 10) {
        setContact(value);
        if (value.length === 10) {
          setContactError("");
        } else {
          setContactError("Contact number must be exactly 10 digits");
        }
      }
    }
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        <button onClick={() => setShowPopup(false)} style={styles.closeBtn}>
          ×
        </button>

        <h2 style={styles.heading}>MEET A DESIGNER</h2>
        <p style={styles.subheading}>
          Offer a Free Consultation Before They Leave To Increase Conversions.
        </p>

        <div style={styles.imagesRow}>
          <img
            src="/assets/pic/exit1.jpg"
            alt="preview1"
            style={styles.previewImg}
            className="hide-on-small"
          />
          <img
            src="/assets/pic/exit2.jpg"
            alt="preview2"
            style={styles.previewImgCenter}
          />
          <img
            src="/assets/pic/exit3.jpg"
            alt="preview3"
            style={styles.previewImg}
          />
        </div>

        <form style={styles.form}>
          <div style={styles.row}>
            <input
              type="text"
              placeholder="Full Name"
              required
              style={styles.input}
              value={fullName}
              onChange={handleNameChange}
            />
          </div>

          <div style={styles.row}>
            <input
              type="email"
              required
              placeholder="Email Address"
              value={email}
              onChange={handleEmailChange}
              style={styles.input}
            />
            {emailError && <div style={styles.error}>{emailError}</div>}
          </div>
          <div style={styles.row}>
            <input
              type="text"
              placeholder="Contact Number"
              value={contact}
              onChange={handleContactChange}
              style={styles.input}
            />
            {contactError && <div style={styles.error}>{contactError}</div>}
          </div>
          <div style={styles.row}>
            <input
              type="text"
              placeholder="Your Location"
              style={styles.input}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Share Your Preferences With Us..."
              style={{ ...styles.input, width: "100%" }}
            />
          </div>

          <button type="submit" style={styles.submitBtn}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "rgba(0,0,0,0.5)",
    zIndex: 9999,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  error: { color: "red", fontSize: 12 },
  popup: {
    background: "#fff",
    borderRadius: "8px",
    maxWidth: "540px",
    width: "100%",
    padding: "30px",
    position: "relative",
    fontFamily: "'Segoe UI', sans-serif",
  },
  closeBtn: {
    position: "absolute",
    top: "10px",
    right: "15px",
    fontSize: "24px",
    border: "none",
    background: "transparent",
    cursor: "pointer",
  },
  heading: {
    textAlign: "center",
    fontSize: "30px",
    marginBottom: "10px",
    color: "#B19777",
  },
  subheading: {
    textAlign: "center",
    color: "#666",
    fontSize: "12px",
    marginBottom: "25px",
  },
  imagesRow: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginBottom: "25px",
  },
  previewImg: {
    width: "160px",
    height: "110px",
    borderRadius: "6px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
  },
  previewImgCenter: {
    width: "160px",
    height: "110px",
    borderRadius: "6px",
    transform: "translateY(-10px)",
    boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  row: {
    display: "flex",
    gap: "10px",
  },
  input: {
    flex: 1,
    padding: "5px 12px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "12px",
  },
  submitBtn: {
    backgroundColor: "#B19777",
    color: "#fff",
    padding: "5px 20px",
    border: "none",
    borderRadius: "4px",
    fontSize: "14px",
    cursor: "pointer",
    alignSelf: "center",
  },
};

export default Exitpopup;
