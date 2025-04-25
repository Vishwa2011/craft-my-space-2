import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footers from "./Footer";
import { motion } from "framer-motion";

const GDPRPolicy = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <motion.div
      className="page-wraper "
      style={{ background: "#000" }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isLoaded ? 1 : 0, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Navbar />
      <div className="page-content">
        <div
          className="wt-bnr-inr overlay-wraper bg-parallax bg-top-center"
          data-stellar-background-ratio="0.5"
          style={{ backgroundImage: "url(assets/pic/654e512334186412CF_2023_UK_NOV_HPCAT_STORAGE.webp)" }}
        >
          <div className="overlay-main bg-black opacity-07"></div>
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name">
                  <h2 className="text-white">GDPR Policy</h2>
                </div>
              </div>
              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>GDPR Policy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <motion.div 
          className="section-full p-t30"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="container">
            <h2 style={{color:'#B19777'}}>GDPR Privacy Policy for CraftMySpace</h2>
            <div style={{marginBottom:"50px"}}>
                <ul style={{ lineHeight: "30px", listStyle: "none" }}>
                    <li>Effective Date: [Insert Date]</li>
                    <li>At <b>CraftMySpace</b>, we are committed to protecting your personal information and respecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your data in compliance with the UK General Data Protection Regulation (UK GDPR) and other applicable UK data protection laws.</li>
                </ul>
                <h4 style={{color:'#B19777'}}>1. Who We Are</h4>
                <ul style={{ lineHeight: "30px", listStyle: "none" }}>
                  <li style={{textAlign:'justify'}}>
                  <b>CraftMySpace</b> is a UK-based company specialising in custom-made furniture. Our website is operated by CraftMySpace and is intended for customers located in the United Kingdom.{" "}
                  </li>
                  <li style={{textAlign:'justify'}}>
                    {" "}
                    📍 Business Address:
                    <br />
                    Unit 1, Grange Farm, Grange Way
                    Iver, Near London, UK
                    <br />
                    📞 Phone: (0044) 07365 566 666
                    <br />
                    📧 Email: info@craftmyspace.co.uk
                  </li>
                </ul>
              </div>
              <div style={{marginBottom:"50px"}}>
                <h4 style={{color:'#B19777'}}>2. What Personal Data We Collect</h4>
                <p style={{marginBottom:'5px'}}>We may collect and process the following personal information:</p>
                <ul style={{ lineHeight: "30px",listStyle:'none'}}>
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Billing and shipping address</li>
                  <li>Payment information (handled securely via third-party providers)</li>
                  <li>Login credentials (if applicable)</li>
                  <li>Order and communication history</li>
                  <li>IP address, browser type, and device data</li>
                  <li>Cookies and usage data (see our Cookie Policy)</li>
                </ul>
              </div>
              <div style={{marginBottom:"50px"}}>
                <h4 style={{color:'#B19777'}}>
                3. How We Use Your Personal Data
                </h4>
                <p style={{marginBottom:'5px'}}>We use your data to:</p>
                <ul style={{ lineHeight: "30px",listStyle:'none' }}>
                    <li>Process and fulfill your orders</li>
                    <li>Communicate with you about your purchases</li>
                    <li>Provide customer support</li>
                    <li>Send updates, invoices, and delivery information</li>
                    <li>Improve our services and website</li>
                    <li>Send marketing emails (only with your consent)</li>
                    <li>Comply with legal obligations</li>
                </ul>
              </div>
              <div style={{marginBottom:"50px"}}>
                <h4 style={{color:'#B19777'}}>4. Legal Bases for Processing</h4>
                <p style={{marginBottom:'5px'}}>We process your personal data on the following legal bases:</p>
                <ul style={{ lineHeight: "30px" ,listStyle:'none'}}>
                  <li><b>Consent</b> – for marketing and cookies</li>
                  <li><b>Contract</b> – to fulfill product purchases</li>
                  <li><b>Legal obligation</b> – for tax, accounting, and regulatory compliance</li>
                  <li><b>Legitimate interest</b> – to improve services and prevent fraud</li>
                </ul>
              </div>
              <div style={{marginBottom:"50px"}}>
                <h4 style={{color:'#B19777'}}>5. Sharing of Personal Data</h4>
                <p style={{marginBottom:'5px'}}>
                Your data may be shared with trusted third parties, such as:
                </p>
                <ul style={{ lineHeight: "30px",listStyle:'none' }}>
                    <li>Payment gateways (e.g. Stripe, PayPal)</li>
                    <li>Shipping and delivery services</li>
                    <li>Web hosting and IT service providers</li>
                    <li>Legal authorities (where required by law)</li>
                </ul>
                <p>We will never sell or rent your personal information.</p>
              </div>
              <div>
                <h4 style={{color:'#B19777'}}>6. Data Retention</h4>
                <p style={{marginBottom:'5px'}}>
                We retain personal data only as long as necessary:
                </p>
                <ul style={{ lineHeight: "30px",listStyle:'none' }}>
                    <li>To complete the services requested</li>
                    <li>To comply with legal and tax requirements</li>
                    <li>For internal analysis and record-keeping</li>
                </ul>
              </div>
              <div style={{marginBottom:"50px"}}>
                <h4 style={{color:'#B19777'}}>7. Your Rights Under UK GDPR</h4>
                <p style={{marginBottom:'5px'}}>
                You have the right to:
                </p>
                <ul style={{ lineHeight: "30px" ,listStyle:'none'}}>
                    <li>Access your data</li>
                    <li>Correct inaccurate information</li>
                    <li>Erase your data (right to be forgotten)</li>
                    <li>Restrict or object to processing</li>
                    <li>Withdraw consent at any time</li>
                    <li>Request data portability</li>
                </ul>
                <p>To exercise any of these rights, email us at info@craftmyspace.co.uk</p>
              </div>
              <div>
                <h4 style={{color:'#B19777'}}>8. Data Security</h4>
                <p>
                We use secure servers, encryption technologies, and strict access controls to protect your data from unauthorized access, disclosure, or loss.
                </p>
              </div>
              <div>
                <h4 style={{color:'#B19777'}}>9. Cookies</h4>
                <p>
                We use cookies to enhance user experience and analyze website traffic. Please refer to our Cookie Policy for full details.
                </p>
              </div>
              <div>
                <h4 style={{color:'#B19777'}}>10. Changes to This Policy</h4>
                <p>
                We may update this policy occasionally. Any changes will be posted on this page with an updated effective date.
                </p>
              </div>
              <p><b >Thank you for trusting CraftMySpace. Your privacy matters to us.</b></p>
          </div>
        </motion.div>
      </div>
      <Footers />
      <button className="scroltop">
        <span className="fa fa-angle-up relative" id="btn-vibrate"></span>
      </button>
    </motion.div>
  );
};

export default GDPRPolicy;
