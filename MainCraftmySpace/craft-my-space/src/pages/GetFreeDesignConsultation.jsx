import React from 'react'
import Navbar from './Navbar'
import Footers from './Footer'
export default function GetFreeDesignConsultation() {
    return (
        <>
        <div className="page-wraper" style={{ background: '#000' }}>
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
    <div style={{marginTop:'60px'}}>
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
                            fontSize: "18px",
                            paddingTop: "10px",
                            textAlign: "center",
                            textTransform:'uppercase'
                          }}
                        >
                          Please fill in the form below and a member of our friendly team will be in touch to arrange a suitable time for a Free, no obligation, Design Visit.
                        </p>
                      </div>
                    </div>
                    
                    {/*  */}
                    <div style={{ padding: '24px', display: 'flex', flexDirection: 'row', gap: '32px',justifyContent:'center' }}>
      {/* Form Section */}
      <form style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <select style={{ width: '100%', border: '1px solid #ccc', padding: '8px', borderRadius: '4px' }}>
          <option value="">Title</option>
          <option>Mr</option>
          <option>Mrs</option>
          <option>Miss</option>
          <option>Ms</option>
        </select>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <input type="text" placeholder="First name" style={{ border: '1px solid #ccc', padding: '8px', borderRadius: '4px', width: '100%' }} />
          <input type="text" placeholder="Last name" style={{ border: '1px solid #ccc', padding: '8px', borderRadius: '4px', width: '100%' }} />
        </div>

        <input type="text" placeholder="Telephone" style={{ border: '1px solid #ccc', padding: '8px', borderRadius: '4px', width: '100%' }} />
        <input type="email" placeholder="Email address" style={{ border: '1px solid #ccc', padding: '8px', borderRadius: '4px', width: '100%' }} />

        <label style={{ fontSize: '14px' }}>Quick address lookup:</label>
        <input type="text" placeholder="Postcode" style={{ border: '1px solid #ccc', padding: '8px', borderRadius: '4px', width: '100%' }} />

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button type="button" style={{ backgroundColor: '#333', color: 'white', padding: '8px 16px', borderRadius: '4px' }}>Find Address</button>
          <a href="#" style={{ color: '#1e40af', fontSize: '14px' }}>Enter address manually</a>
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '4px' }}>I'm looking to create a beautiful...</label>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <button type="button" style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '8px 12px' }}>🛏 Bedroom</button>
            <button type="button" style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '8px 12px' }}>🖥 Home Office</button>
            <button type="button" style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '8px 12px' }}>🛋 Living Space</button>
          </div>
          <p style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>Please select all that apply.</p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
          <input type="checkbox" id="signup" style={{ marginRight: '8px' }} />
          <label htmlFor="signup">Sign up for exclusive offers, inspiration, rewards and news.</label>
        </div>

        <button style={{ backgroundColor: '#facc15', color: 'black', padding: '8px 16px', borderRadius: '4px', marginTop: '8px' }}>
          Submit booking request →
        </button>

        <p style={{ fontSize: '12px', color: '#666' }}>
          By submitting this form you agree we will hold, store and use your information in line with GDPR
          regulations. For more information see our <a href="#" style={{ textDecoration: 'underline' }}>Privacy Policy</a>.
        </p>
      </form>

      {/* Info Section */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', backgroundColor: '#f3f4f6', padding: '16px', borderRadius: '8px' }}>
          {['15-year GUARANTEE', 'Bespoke DESIGN & FIT', 'Made in the UNITED KINGDOM', 'Sustainably SOURCED'].map((text, index) => (
            <div key={index} style={{ textAlign: 'center', width: '50%', marginBottom: '16px' }}>
              <div style={{ fontSize: '18px', fontWeight: '600' }}>{text}</div>
            </div>
          ))}
        </div>

        <div>
          <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>WHAT HAPPENS DURING YOUR DESIGN VISIT?</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontWeight: '600', fontStyle: 'italic' }}>View samples</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>
                Your designer will listen to your requirements, show you samples and assess your needs.
              </p>
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontWeight: '600', fontStyle: 'italic' }}>Design your space</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>
                They will measure your space and create a detailed 3D illustration free of charge.
              </p>
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontWeight: '600', fontStyle: 'italic' }}>Receive a quote</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>
                Your designer will give you a no-obligation quote with a range of payment options.
              </p>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '16px' }}>
          <img src="/designer-meeting.jpg" alt="Designer visit meeting" style={{ borderRadius: '8px', boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)' }} />
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
  )
}
