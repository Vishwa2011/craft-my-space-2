import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footers from "./Footer";
export default function GetFreeDesignConsultation() {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [showManualAddress, setShowManualAddress] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const validateEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handleEmailBlur = () => {
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric
    if (value.length <= 10) {
      setPhone(value);
      setPhoneError("");
    }
  };

  const handlePhoneBlur = () => {
    if (phone.length !== 10) {
      setPhoneError("Phone number must be exactly 10 digits");
    }
  };
  const toggleRoomSelection = (room) => {
    setSelectedRooms((prev) =>
      prev.includes(room) ? prev.filter((r) => r !== room) : [...prev, room]
    );
  };
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isSelected = (room) => selectedRooms.includes(room);

  const [postcode, setPostcode] = useState("");
  const [postcodeError, setPostcodeError] = useState("");
  // const [showManualAddress, setShowManualAddress] = useState(false);
  const [address, setAddress] = useState({
    line1: "",
    line2: "",
    city: "",
    county: "",
    postcode: "",
  });

  const validatePostcode = (code) => {
    const postcodeRegex = /^([A-Z]{1,2}\d[A-Z\d]? ?\d[ABD-HJLNP-UW-Z]{2})$/i;
    return postcodeRegex.test(code.trim());
  };

  const handleFindAddress = async () => {
    if (!validatePostcode(postcode)) {
      setPostcodeError("Please enter a valid UK postcode.");
      setShowManualAddress(false);
      return;
    }

    try {
      const response = await fetch(
        `https://api.postcodes.io/postcodes/${postcode}`
      );
      const data = await response.json();

      if (data.status === 200) {
        setPostcodeError("");
        const result = data.result;

        setAddress({
          line1: "", // Can be filled by user if needed
          line2: "",
          city: result.admin_district || "",
          county: result.admin_county || result.region || "",
          postcode: result.postcode || "",
        });

        setShowManualAddress(true);
      } else {
        setPostcodeError("Postcode not found.");
      }
    } catch (error) {
      setPostcodeError("Error fetching address. Try again.");
    }
  };
  const inputStyle = {
    background: "#000",
    color: "#fff",
    border: "1px solid #ccc",
    padding: "8px",
    borderRadius: "4px",
    width: "100%",
    marginTop: "8px",
  };

  const buttonStyle = {
    backgroundColor: "#B19777",
    color: "white",
    padding: "8px 16px",
    borderRadius: "4px",
    border: "2px solid #B19777",
  };

  const manualLinkStyle = {
    color: "#fff",
    fontSize: "12px",
    textDecoration: "underline",
  };
  return (
    <>
      <div className="page-wraper" style={{ background: "#000" }}>
        <Navbar />
        <div className="page-content">
          <div
            className="wt-bnr-inr overlay-wraper bg-parallax bg-top-center"
            data-stellar-background-ratio="0.5"
            style={{
              backgroundImage: "url(assets/pic/dining.jpg)",
            }}
          >
            <div className="overlay-main bg-black opacity-07"></div>
            <div className="container">
              <div className="wt-bnr-inr-entry">
                <div className="banner-title-outer">
                  <div className="banner-title-name">
                    <h2 className="text-white">Get Free Design Consultation</h2>
                  </div>
                </div>
                {/* <!-- BREADCRUMB ROW -->  */}

                <div>
                  <ul className="wt-breadcrumb breadcrumb-style-2">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>Get Free Design Consultation</li>
                  </ul>
                </div>

                {/* <!-- BREADCRUMB ROW END --> */}
              </div>
            </div>
          </div>

          {/*  */}
          <div style={{ marginTop: "60px" }}>
            <div className="container">
              <div className="section-head clearfix">
                <div className="wt-tilte-main" style={{ display: "contents" }}>
                  <small
                    className="wt-small-title"
                    style={{
                      justifyContent: "center",
                      display: "flex",
                      color: "#B19777",
                      textAlign: "center",
                    }}
                  >
                    [ Book a Free Design Visit ]
                  </small>
                  <p
                    className="m-b5"
                    style={{
                      justifyContent: "center",
                      display: "flex",
                      fontSize: "14px",
                      paddingTop: "10px",
                      textAlign: "center",
                      textTransform: "uppercase",
                    }}
                  >
                    Please fill in the form below and a member of our friendly
                    team will be in touch to arrange a suitable time for a Free,
                    no obligation, Design Visit.
                  </p>
                </div>
              </div>

              {/*  */}
              <div
                style={{
                  padding: "24px",
                  display: "flex",
                  flexDirection: isMobile ? "column" : "row",
                  gap: "32px",
                  justifyContent: "center",
                }}
              >
                {/* Form Section */}
                <form
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  <select
                    style={{
                      background: "#000",
                      color: "#fff",
                      width: "50%",
                      border: "1px solid #ccc",
                      padding: "8px",
                      borderRadius: "4px",
                    }}
                  >
                    <option value="">Title</option>
                    <option>Mr</option>
                    <option>Mrs</option>
                    <option>Miss</option>
                    <option>Ms</option>
                  </select>

                  <div
                    style={{
                      display: "flex",
                      //   flexDirection: "column",
                      gap: "16px",
                    }}
                  >
                    <input
                      type="text"
                      required
                      placeholder="First name"
                      onKeyPress={(e) => {
                        const charCode = e.which || e.keyCode;
                        const char = String.fromCharCode(charCode);
                        if (!/^[a-zA-Z\s]*$/.test(char)) {
                          e.preventDefault(); // Prevent if not a letter or space
                        }
                      }}
                      style={{
                        background: "#000",
                        color: "#fff",
                        border: "1px solid #ccc",
                        padding: "8px",
                        borderRadius: "4px",
                        width: "50%",
                      }}
                    />
                    <input
                      type="text"
                      placeholder="Last name"
                      required
                      onKeyPress={(e) => {
                        const charCode = e.which || e.keyCode;
                        const char = String.fromCharCode(charCode);
                        if (!/^[a-zA-Z\s]*$/.test(char)) {
                          e.preventDefault(); // Prevent if not a letter or space
                        }
                      }}
                      style={{
                        background: "#000",
                        color: "#fff",
                        border: "1px solid #ccc",
                        padding: "8px",
                        borderRadius: "4px",
                        width: "50%",
                      }}
                    />
                  </div>

                  <input
                    type="text"
                    required
                    placeholder="Telephone"
                    value={phone}
                    onChange={handlePhoneChange}
                    onBlur={handlePhoneBlur}
                    maxLength={10}
                    style={{
                      background: "#000",
                      color: "#fff",
                      border: "1px solid #ccc",
                      padding: "8px",
                      borderRadius: "4px",
                      width: "100%",
                    }}
                  />
                  {phoneError && (
                    <div style={{ color: "red", marginTop: "4px" }}>
                      {phoneError}
                    </div>
                  )}
                  <input
                    type="email"
                    required
                    placeholder="Email address"
                    value={email}
                    onChange={handleEmailChange}
                    onBlur={handleEmailBlur}
                    style={{
                      background: "#000",
                      color: "#fff",
                      border: "1px solid #ccc",
                      padding: "8px",
                      borderRadius: "4px",
                      width: "100%",
                      marginBottom: "6px",
                    }}
                  />
                  {emailError && (
                    <div style={{ color: "red", marginBottom: "10px" }}>
                      {emailError}
                    </div>
                  )}

                  <label style={{ fontSize: "14px", marginBottom: "0px" }}>
                    Quick address lookup:
                  </label>
                  <input
                    type="text"
                    placeholder="Postcode"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                    style={inputStyle}
                  />
                  {postcodeError && (
                    <span style={{ color: "red", fontSize: "12px" }}>
                      {postcodeError}
                    </span>
                  )}

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <button
                      type="button"
                      onClick={handleFindAddress}
                      style={buttonStyle}
                    >
                      Find Address
                    </button>
                    {!showManualAddress && (
                      <a
                        href="#"
                        style={manualLinkStyle}
                        onClick={(e) => {
                          e.preventDefault();
                          setShowManualAddress(true);
                        }}
                      >
                        Enter address manually
                      </a>
                    )}
                  </div>

                  {showManualAddress && (
                    <>
                      <input
                        type="text"
                        placeholder="Address line 1"
                        value={address.line1}
                        onChange={(e) =>
                          setAddress({ ...address, line1: e.target.value })
                        }
                        style={inputStyle}
                      />
                      <input
                        type="text"
                        placeholder="Address line 2"
                        value={address.line2}
                        onChange={(e) =>
                          setAddress({ ...address, line2: e.target.value })
                        }
                        style={inputStyle}
                      />
                      <input
                        type="text"
                        placeholder="Town or city"
                        value={address.city}
                        onChange={(e) =>
                          setAddress({ ...address, city: e.target.value })
                        }
                        style={inputStyle}
                      />
                      <input
                        type="text"
                        placeholder="County"
                        value={address.county}
                        onChange={(e) =>
                          setAddress({ ...address, county: e.target.value })
                        }
                        style={inputStyle}
                      />
                      <input
                        type="text"
                        placeholder="Postcode"
                        value={address.postcode}
                        readOnly
                        style={{ ...inputStyle, backgroundColor: "#222" }}
                      />
                    </>
                  )}
                  <div style={{ background: "#141414", padding: "12px" }}>
                    <label style={{ display: "block", marginBottom: "4px" }}>
                      I'm looking to create a beautiful...
                    </label>
                    <div
                      style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}
                    >
                      {["Bedroom", "Home Office", "Living Space"].map(
                        (room) => (
                          <button
                            key={room}
                            type="button"
                            onClick={() => toggleRoomSelection(room)}
                            style={{
                              border: "1px solid #B19777",
                              borderRadius: "4px",
                              padding: "8px 12px",
                              backgroundColor: isSelected(room)
                                ? "#B19777"
                                : "#000",
                              cursor: "pointer",
                              color: isSelected(room) ? "#fff" : "#fff",
                            }}
                          >
                            {room === "Bedroom" && "🛏 "}
                            {room === "Home Office" && "🖥 "}
                            {room === "Living Space" && "🛋 "}
                            {room}
                          </button>
                        )
                      )}
                    </div>
                    <p
                      style={{
                        fontSize: "12px",
                        color: "#fff",
                        marginTop: "4px",
                        marginBottom: "0px",
                      }}
                    >
                      Please select all that apply.
                    </p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "8px",
                    }}
                  >
                    <input
                      type="checkbox"
                      id="signup"
                      style={{ marginRight: "8px" }}
                    />
                    <label htmlFor="signup">
                      Sign up for exclusive offers, inspiration, rewards and
                      news.
                    </label>
                  </div>

                  <button
                    style={{
                      backgroundColor: "#B19777",
                      color: "white",
                      padding: "8px 16px",
                      borderRadius: "4px",
                      marginTop: "8px",
                      border: "2px solid #B19777",
                    }}
                  >
                    Submit booking request →
                  </button>

                  <p style={{ fontSize: "12px", color: "#666" }}>
                    By submitting this form you agree we will hold, store and
                    use your information in line with GDPR regulations. For more
                    information see our{" "}
                    <a
                      href="/PrivacyPolicy"
                      style={{ textDecoration: "underline" }}
                    >
                      Privacy Policy
                    </a>
                    .
                  </p>
                </form>

                {/* Info Section */}
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: "24px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: isMobile ? "column" : "row",
                      justifyContent: isMobile ? "center" : "space-between",
                      backgroundColor: "#141414",
                      padding: "16px",
                      borderRadius: "8px",
                      gap: isMobile ? "16px" : "0",
                    }}
                  >
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        style={{
                          textAlign: "center",
                          width: isMobile ? "100%" : "25%",
                        }}
                      >
                        <img
                          src={
                            i === 0
                              ? "/assets/pic/guarantee15 (1).svg"
                              : i === 1
                              ? "/assets/pic/design.svg"
                              : i === 2
                              ? "/assets/pic/bespoke121.svg"
                              : "/assets/pic/sustainable.svg"
                          }
                          alt=""
                          width={"60px"}
                        />
                        <h4
                          style={{
                            fontSize: "16px",
                            fontWeight: "500",
                            margin: 0,
                          }}
                        >
                          {i === 0
                            ? "15-year"
                            : i === 1
                            ? "Bespoke"
                            : i === 2
                            ? "Made in the"
                            : "Sustainably"}
                        </h4>
                        <p
                          style={{
                            fontSize: "12px",
                            textAlign: "center",
                            fontWeight: "bold",
                            margin: 0,
                          }}
                        >
                          {i === 0
                            ? "GUARANTEE"
                            : i === 1
                            ? "DESIGN & FIT"
                            : i === 2
                            ? "UNITED KINGDOM"
                            : "SOURCED"}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div
                    style={{
                      background: "#141414",
                      padding: "20px",
                      borderRadius: "8px",
                    }}
                  >
                    <h2
                      style={{
                        fontSize: "18px",
                        fontWeight: "600",
                        marginBottom: "16px",
                        textAlign: "center",
                        textDecoration: "underline",
                      }}
                    >
                      WHAT HAPPENS DURING YOUR DESIGN VISIT?
                    </h2>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: isMobile ? "column" : "row",
                        gap: "16px",
                      }}
                    >
                      {[
                        {
                          title: "View samples",
                          text: "Your designer will listen to your requirements, show you samples and assess your needs.",
                        },
                        {
                          title: "Design your space",
                          text: "They will measure your space and create a detailed 3D illustration free of charge.",
                        },
                        {
                          title: "Receive a quote",
                          text: "Your designer will give you a no-obligation quote with a range of payment options.",
                        },
                      ].map((item, index) => (
                        <div key={index} style={{ flex: 1 }}>
                          <h3
                            style={{
                              fontSize: "18px",
                              textAlign: "center",
                              color: "#B19777",
                              marginBottom: "0px",
                            }}
                          >
                            {item.title}
                          </h3>
                          <p
                            style={{
                              fontSize: "12px",
                              color: "white",
                              textAlign: "center",
                              padding: "10px",
                            }}
                          >
                            {item.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ marginTop: "16px" }}>
                    <img
                      src="/assets/pic/book-design-visit.webp"
                      alt="Designer visit meeting"
                      style={{
                        borderRadius: "8px",
                        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                      }}
                    />
                  </div>
                </div>
              </div>
              {/*  */}
            </div>
          </div>
        </div>
        <Footers />
        <button className="scroltop">
          <span className="fa fa-angle-up relative" id="btn-vibrate"></span>
        </button>
      </div>
    </>
  );
}
