import { color } from "framer-motion";
import React, { useEffect, useState } from "react";

const Exitpopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [hasShownPopup, setHasShownPopup] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && !hasShownPopup) {
        setShowPopup(true);
        setHasShownPopup(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasShownPopup]);

  if (!showPopup) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        <button onClick={() => setShowPopup(false)} style={styles.closeBtn}>×</button>

        <h2 style={styles.heading} >MEET A DESIGNER</h2>
        <p style={styles.subheading}>
          Offer a Free Consultation Before They Leave To Increase Conversions.
        </p>

        <div style={styles.imagesRow}>
          <img src="/assets/pic/exit1.jpg" alt="preview1" style={styles.previewImg} className="hide-on-small"/>
          <img src="/assets/pic/exit2.jpg" alt="preview2" style={styles.previewImgCenter} />
          <img src="/assets/pic/exit3.jpg" alt="preview3" style={styles.previewImg} />
        </div>

        <form style={styles.form}>
          <div style={styles.row}>
            <input type="text" placeholder="Full Name" style={styles.input} />
           
          </div>
          <div style={styles.row}>
            <input type="email" placeholder="Email Address" style={styles.input} />
           
          </div>
          <div style={styles.row}>
          <input type="text" placeholder="Contact Number" style={styles.input} />

          </div>
          <div style={styles.row}>
            <input type="text" placeholder="Your Location" style={styles.input} />
           
          </div>
          <div>
            <input type="text" placeholder="Share Your Preferences With Us..." style={{ ...styles.input, width: "100%" }} />
          </div>

          

          <button type="submit"  style={styles.submitBtn}>Submit</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0, left: 0, width: "100vw", height: "100vh",
    background: "rgba(0,0,0,0.5)",
    zIndex: 9999,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  popup: {
    background: "#fff",
    borderRadius: "8px",
    maxWidth: "600px",
    width: "100%",
    padding: "30px",
    position: "relative",
    fontFamily: "'Segoe UI', sans-serif",
  },
  closeBtn: {
    position: "absolute",
    top: "10px", right: "15px",
    fontSize: "24px",
    border: "none",
    background: "transparent",
    cursor: "pointer",
  },
  heading: {
    textAlign: "center",
    fontSize: "30px",
    marginBottom: "10px",
    color:'#B19777'
  },
  subheading: {
    textAlign: "center",
    color: "#666",
    fontSize: "14px",
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
    padding: "10px 12px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "14px",
  },
 
  submitBtn: {
    backgroundColor: "#B19777",
    color: "#fff",
    padding: "12px 20px",
    border: "none",
    borderRadius: "4px",
    fontSize: "14px",
    cursor: "pointer",
    alignSelf: "center",
  },
};

export default Exitpopup;
