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
                  <li style={{textAlign:'justify',marginBottom:'20px',}}>
                  Metro Wardrobes Limited (‘we’ or ‘us’ or ‘our’) gather and process your personal information in accordance with this privacy notice and in compliance with the relevant data protection Regulation and law. This notice provides you with the necessary information regarding your rights and obligations, and explains how, why and when we collect and process your personal data.
                  </li>
                  <li style={{textAlign:'justify'}}>

                    
Our registered office is at Unit 1, Grange Farm, Grange Way.  Iver Buckinghamshire. SL0 9NT and we are a company registered in England and Wales under company registration number 15963804 . We can be contacted at (0044)07365 566 666. 

                   
                  </li>
                </ul>
              </div>
              <div style={{marginBottom:"50px"}}>
                <h4 style={{color:'#B19777'}}>2.Information That We Collect</h4>
           <li style={{textAlign:'justify',marginBottom:'20px',listStyle:'none' }}>
           Our website at <a href="https://www.craftmyspace.co.uk" target="_blank" rel="noopener noreferrer" style={{color:'#B19777'}}>www.craftmyspace.co.uk</a> uses cookies, which is a string of information a website stores on to a visitor`s computer. These cookies log the visitor`s browser every time they return. Visitors to the website who do not wish to have cookies placed on their computers should set their browsers to refuse cookies before using the website.
           </li>
           <li style={{textAlign:'justify',listStyle:'none' }}>
           We process your personal information to meet our legal, statutory and contractual obligations, to provide you with our products and services and, where you have provided your consent, to provide you with details of our products, offers, services and competitions. We will never collect any unnecessary personal data from you and do not process your information in any way, other than already specified in this notice.
           </li>
              </div>
              <div style={{marginBottom:"50px"}}>
                <h4 style={{color:'#B19777'}}>
                3.The personal data that we collect from you is: –
                </h4>
             
                <ul style={{ lineHeight: "30px",listStyle:'none' }}>
                    <li>Name</li>
                    <li>Address</li>
                    <li>Email</li>
                    <li>Contact Number</li>
                    <li>We collect the information about you from your completion of a brochure request form, a design visit form or an order form, from any other forms and surveys you complete and from records of correspondence, phone calls and site visits to you.</li>
                   
                </ul>
              </div>
              <div style={{marginBottom:"50px"}}>
                <h4 style={{color:'#B19777'}}>4. How We Use Your Personal Data (Legal Basis for Processing)</h4>
               
                <ul style={{ lineHeight: "40px" ,listStyle:'none'}}>
                  <li>We take your privacy very seriously and will never disclosure, share or sell your data without your consent, unless required to do so by law. We only retain your data for as long as is necessary and for the purposes specified in this notice. Where you have consented to us providing you with promotional offers and marketing, you are free to withdraw consent at any time. </li>
                  <li>We collect your information in order to perform our contract with you.</li>
                  <li>Where you have consented to us providing you with promotional offers and marketing, we collect your information for marketing purposes as a legitimate business interest.</li>
                  <li>Where you have entered a competition, we collect the information based on your consent.</li>
                </ul>
              </div>
              <div style={{marginBottom:"50px"}}>
                <h4 style={{color:'#B19777'}}>5. Your Rights</h4>
                <p style={{marginBottom:'5px'}}>
                You have the right to access any personal information that we process about you and to request information about: –
                </p>
                <ul style={{ lineHeight: "30px",listStyle:'none' }}>
                    <li>What personal data we hold about you</li>
                   <li>The purposes of the processing</li>
                   <li>The categories of personal data concerned</li>
                   <li>The recipients to whom the personal data has/will be disclosed</li>
                   <li>How long we intend to store your personal data for</li>
                   <li>If we did not collect the data directly from you, information about the source</li>

                </ul>
                <p>If you believe that we hold any incomplete or inaccurate data about you, you have the right to ask us to correct and/or complete the information and we will strive to update/correct it as quickly as possible; unless there is a valid reason for not doing so, at which point you will be notified.</p>
                <p>
                You also have the right to request erasure of your personal data or to restrict processing in accordance with data protection laws, as well as to object to any direct marketing from us and to be informed about any automated decision-making that we use.
                </p>
                <p>If we receive a request from you to exercise any of the above rights, we may ask you to verify your identity before acting on the relevant request; this is to ensure that your data is protected and kept secure.</p>
              </div>
              <div  style={{marginBottom:"50px"}}>
                <h4 style={{color:'#B19777'}}>6. Sharing and Disclosing Your Personal Information</h4>
                <p style={{marginBottom:'5px'}}>
                We do not share or disclosure any of your personal information without your consent, other than for the purposes specified in this notice or where there is a legal requirement. We use third-parties such as designers, surveyors and fitters in the performance of our contract with you and, where you have provided your consent to receiving marketing information communications from us, we may share your information with our marketing agencies. However all processors acting on our behalf only process your data in accordance with instructions from us and comply fully with this privacy notice, the data protection laws and any other appropriate confidentiality and security measures.
                </p>
               
              </div>
              <div style={{marginBottom:"50px"}}>
                <h4 style={{color:'#B19777'}}>7.Safeguarding Measures</h4>
                <p style={{marginBottom:'5px'}}>
                We take your privacy seriously and we take every reasonable measure and precaution to protect and secure your personal data. We work hard to protect you and your information from unauthorised access, alteration, disclosure or destruction and have several layers of security measures in place.
                </p>
               
              </div>
              <div style={{marginBottom:"50px"}}>
                <h4 style={{color:'#B19777'}}>8. Consequences of Not Providing Your Data</h4>
                <p>
                You are not obligated to provide your personal information to us, however, as this information is required for us to perform the contract with you, we will not be able to perform the contract without it.
                </p>
              </div>
              <div style={{marginBottom:"70px"}}>
                <h4 style={{color:'#B19777'}}>9. How Long We Keep Your Data</h4>
                <p>
                We only ever retain personal information for as long as is necessary and we have strict review and retention policies in place to meet these obligations. We will retain your personal information for 10 years where you have the benefit of our 10-year guarantee. Where you have consented to us using your details for direct marketing, we will keep such data until you notify us otherwise and/or withdraw your consent. Where you have entered a competition (and not consented to us using your details for direct marketing), we will delete your personal information within one month of the result of the competition.
                </p>
              </div>
        
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
