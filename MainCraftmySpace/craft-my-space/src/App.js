import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
import FittedBedroom from "./pages/FittedBedroom";
import FittedWardrobes from "./pages/FittedWardrobes";
import FittedLiving from "./pages/FittedLiving";
import AwkwardSpaces from "./pages/AwkwardSpaces";
import Joinery from "./pages/Joinery";
import Blog from "./pages/Blog";
import Recentwork from "./pages/Recentwork";
import Orderafreebrochure from "./pages/Orderafreebrochure";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Footer from "./pages/Footer";
import HingedDoorWardrobes from "./pages/HingedDoorWardrobes";
import SlidingWardrobedDoorsByCMS from "./pages/SlidingWardrobedDoorsByCMS";
import Slidingwardrobed from "./pages/Slidingwardrobed";
import ChildrensBedroomSlidingDoorWardrobes from "./pages/ChildrensBedroomSlidingDoorWardrobes";
import WhyCraftMySpace from "./pages/WhyCraftMySpace";
import Walkinwardrobed from "./pages/Walkinwardrobed";
import ChildrenFittedBadrooms from "./pages/ChildrenFittedBadrooms";
import SlidingHallwayWardrobes from "./pages/SlidingHallwayWardrobes";
import SlidingHomeOfficeWardrobes from "./pages/SlidingHomeOfficeWardrobes";
import SlidingLivingAreaWardrobes from "./pages/SlidingLivingAreaWardrobes";
import SlidingBedroomWardrobes from "./pages/SlidingBedroomWardrobes";
import Bathroom from "./pages/Bathroom";
import DiningRoom from "./pages/DiningRoom";
import HomeOffice from "./pages/HomeOffice";
import Kitchens from "./pages/Kitchens";
import MediaRoom from "./pages/MediaRoom";
import Alcoves from "./pages/Alcoves";
import BayWindows from "./pages/BayWindows";
import LandingHallways from "./pages/LandingHallways";
import SlopingCeilings from "./pages/SlopingCeilings";
import UnderStairs from "./pages/UnderStairs";
import Termandcondition from "./pages/Termandcondition";
import Blogdetail from "./pages/Blogdetail";
import Mission from "./pages/Mission";
import Vision from "./pages/Vision";
// import Navbar from "./pages/Navbar";
import { BiPhoneCall } from "react-icons/bi";
import MeetDesignerForm from "./pages/MeetDesignerForm";
import Thankyou from "./pages/Thankyou";
import ContactUs from "./pages/ContactUs";
import Service from "./pages/Service";
import KitchenService from "./pages/Kitchen-Service";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Ourfactorytour from "./pages/Ourfactorytour";




import BespokeFurniture from "./pages/BespokeFurniture";
import GetFreeDesignConsultation from "./pages/GetFreeDesignConsultation";
import Startdesigning from "./pages/Startdesigning";
import Exitpopup from "./pages/Exitpopup";
import { useState } from "react";



import GDPRPolicy from "./pages/GDPRPolicy";

import Warrantyandguaranty from "./pages/Warrantyandguaranty";
import NewHome from "./pages/NewHome";


// import Getaquote from "./pages/GetQuote";
function App() {
  const [isHovered, setIsHovered] = useState(false);
  // const [showPopup, setShowPopup] = useState(false);

  // const openPopup = () => setShowPopup(true);
  // const closePopup = () => setShowPopup(false);
  const [showPopup, setShowPopup] = useState(false);

  // Open the popup
  const openPopup = () => {
    setShowPopup(true);
  };

  // Close the popup
  const closePopup = () => {
    setShowPopup(false);
  };
  return (
    <>
    <Exitpopup />
      {/* <Navbar />  */}
      <a href="tel:(0044)07365 566 666">
  <button class="btn-floating phone">
    <img src="https://i.imgur.com/FZuns9L.png" alt="Phone" />
    <span>(0044)07365 566 666</span>
  </button>
</a>

<a href="https://api.whatsapp.com/send?phone=4407365566666" target="_blank">
  <button class="btn-floating whatsapp">
    <img src="https://i.imgur.com/LBW2Lso.png" alt="WhatsApp" />
    <span>Chat With Experts &gt;&gt;</span>
  </button>
</a>
      <div class="phone-widget2" style={{
    transform: "rotate(1deg)"
}}>
        <a href="/ContactUs">
          <div class="phone-number">
          Book An Appointment
          </div>
        
          </a>
      </div>
    
     


  {/* cookie button */}
  <div className="cookie">
        <button
          onClick={openPopup}
          style={{
            color: '#000',
            padding: '5px 15px',
            backgroundColor: '#ddd',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          MANAGE CONSENT
        </button>
      </div>

      {/* Popup */}
      {showPopup && (
        <div
          style={{
            position: 'fixed',
            right: 0,
            bottom: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 999,
          }}
        >
          <div
            style={{
              backgroundColor: '#B19777',
              borderRadius: '10px',
              padding: '20px',
              width: '90%',
              maxWidth: '500px',
              boxShadow: '0px 5px 15px rgba(0,0,0,0.2)',
              fontFamily: 'sans-serif',
              border: '2px solid #B19777',
            }}
          >
            <div className="svg-container">
              <svg viewBox="0 0 50 50" className="centered-svg">
                <path d="M 25 4 C 13.414063 4 4 13.414063 4 25 C 4 36.585938 13.414063 46 25 46 C 36.585938 46 46 36.585938 46 25 C 46 24.378906 45.960938 23.78125 45.910156 23.203125 C 45.878906 22.855469 45.671875 22.546875 45.359375 22.390625 C 45.042969 22.234375 44.671875 22.253906 44.375 22.441406 C 43.824219 22.792969 43.191406 23 42.5 23 C 41.015625 23 39.769531 22.082031 39.253906 20.792969 C 39.148438 20.527344 38.933594 20.320313 38.667969 20.222656 C 38.398438 20.125 38.101563 20.144531 37.847656 20.28125 C 37.003906 20.738281 36.035156 21 35 21 C 31.675781 21 29 18.324219 29 15 C 29 13.964844 29.261719 12.996094 29.71875 12.152344 C 29.855469 11.898438 29.875 11.601563 29.777344 11.332031 C 29.679688 11.066406 29.472656 10.851563 29.207031 10.746094 C 27.917969 10.230469 27 8.984375 27 7.5 C 27 6.808594 27.207031 6.175781 27.558594 5.625 C 27.746094 5.328125 27.765625 4.957031 27.609375 4.640625 C 27.453125 4.328125 27.144531 4.121094 26.796875 4.089844 C 26.21875 4.039063 25.621094 4 25 4 Z M 38 4 C 36.894531 4 36 4.894531 36 6 C 36 7.105469 36.894531 8 38 8 C 39.105469 8 40 7.105469 40 6 C 40 4.894531 39.105469 4 38 4 Z M 25 6 C 25.144531 6 25.292969 6.015625 25.4375 6.023438 C 25.285156 6.519531 25 6.953125 25 7.5 C 25 9.4375 26.136719 10.984375 27.660156 11.960938 C 27.269531 12.90625 27 13.917969 27 15 C 27 19.40625 30.59375 23 35 23 C 36.082031 23 37.09375 22.730469 38.039063 22.339844 C 39.015625 23.863281 40.5625 25 42.5 25 C 43.046875 25 43.480469 24.714844 43.980469 24.5625 C 43.984375 24.707031 44 24.855469 44 25 C 44 35.503906 35.503906 44 25 44 C 14.496094 44 6 35.503906 6 25 C 6 14.496094 14.496094 6 25 6 Z M 36.5 12 C 35.671875 12 35 12.671875 35 13.5 C 35 14.328125 35.671875 15 36.5 15 C 37.328125 15 38 14.328125 38 13.5 C 38 12.671875 37.328125 12 36.5 12 Z M 21.5 15 C 20.671875 15 20 15.671875 20 16.5 C 20 17.328125 20.671875 18 21.5 18 C 22.328125 18 23 17.328125 23 16.5 C 23 15.671875 22.328125 15 21.5 15 Z M 45 15 C 44.449219 15 44 15.449219 44 16 C 44 16.550781 44.449219 17 45 17 C 45.550781 17 46 16.550781 46 16 C 46 15.449219 45.550781 15 45 15 Z M 15 20 C 13.34375 20 12 21.34375 12 23 C 12 24.65625 13.34375 26 15 26 C 16.65625 26 18 24.65625 18 23 C 18 21.34375 16.65625 20 15 20 Z M 24.5 24 C 23.671875 24 23 24.671875 23 25.5 C 23 26.328125 23.671875 27 24.5 27 C 25.328125 27 26 26.328125 26 25.5 C 26 24.671875 25.328125 24 24.5 24 Z M 17 31 C 15.894531 31 15 31.894531 15 33 C 15 34.105469 15.894531 35 17 35 C 18.105469 35 19 34.105469 19 33 C 19 31.894531 18.105469 31 17 31 Z M 30.5 32 C 29.121094 32 28 33.121094 28 34.5 C 28 35.878906 29.121094 37 30.5 37 C 31.878906 37 33 35.878906 33 34.5 C 33 33.121094 31.878906 32 30.5 32 Z" />
              </svg>
            </div>

            <p style={{ fontSize: '0.95rem', marginTop: '10px', color: '#fff' }}>
              To provide the best experiences, we use technologies like cookies to store
              and/or access device information. Consenting to these technologies will
              allow us to process data such as browsing behavior or unique IDs on this site.
              Not consenting or withdrawing consent may adversely affect certain features
              and functions.
            </p>

            <div
              style={{
                display: 'flex',
                gap: '10px',
                marginTop: '20px',
              }}
            >
              <button
                onClick={closePopup}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#000',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                Accept
              </button>
              
              <button
                onClick={closePopup}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#e0e0e0',
                  color: '#000',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                Deny
              </button>
            </div>
          </div>
        </div>
      )}



      {/* book */}
      {/* <div class="phone-widget" style={{
    transform: "rotate(270deg)"
}}>
        <a href="/GetaQuote">
          <div class="phone-number2">
          Book An Appointment
          </div>
        
          </a>
      </div> */}
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/fitted-bedroom" element={<FittedBedroom />} />
        <Route path="/FittedWardrobes" element={<FittedWardrobes />} />
        <Route path="/FittedLiving" element={<FittedLiving />} />
        <Route path="/AwkwardSpaces" element={<AwkwardSpaces />} />
        <Route path="/Joinery" element={<Joinery />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Recentwork" element={<Recentwork />} />
        {/* <Route path="/GetQuote" element={<Getaquote />} /> */}
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Orderafreebrochure" element={<Orderafreebrochure />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/HingedDoorWardrobes" element={<HingedDoorWardrobes />} />
        <Route path="/SlidingWardrobedDoorsByCMS" element={<SlidingWardrobedDoorsByCMS />} />
        <Route path="/Slidingwardrobed" element={<Slidingwardrobed />} />
        <Route path="/ChildrensBedroomSlidingDoorWardrobes" element={<ChildrensBedroomSlidingDoorWardrobes />} />
        <Route path="/WhyCraftMySpace" element={<WhyCraftMySpace />} />
        <Route path="/Walkinwardrobed" element={<Walkinwardrobed />} />
        <Route path="/ChildrenFittedBadrooms" element={<ChildrenFittedBadrooms />} />
        <Route path="/SlidingHallwayWardrobes" element={<SlidingHallwayWardrobes />} />
        <Route path="/SlidingHomeOfficeWardrobes" element={<SlidingHomeOfficeWardrobes />} />
        <Route path="/SlidingLivingAreaWardrobes" element={<SlidingLivingAreaWardrobes />} />
        <Route path="/SlidingBedroomWardrobes" element={<SlidingBedroomWardrobes />} />
        <Route path="/Bathroom" element={<Bathroom />} />
        <Route path="/DiningRoom" element={<DiningRoom />} />
        <Route path="/HomeOffice" element={<HomeOffice />} />
        <Route path="/Kitchens" element={<Kitchens />} />
        <Route path="/MediaRoom" element={<MediaRoom />} />
        <Route path="/Alcoves" element={<Alcoves />} />
        <Route path="/BayWindows" element={<BayWindows />} />
        <Route path="/LandingHallways" element={<LandingHallways />} />
        <Route path="/SlopingCeilings" element={<SlopingCeilings />} />
        <Route path="/UnderStairs" element={<UnderStairs />} />
        <Route path="/Termandcondition" element={<Termandcondition />} />
        <Route path="/Blogdetail" element={<Blogdetail />} />
        <Route path="/Mission" element={<Mission />} />
        <Route path="/Vision" element={<Vision />} />
        <Route path="/MeetDesignerForm" element={<MeetDesignerForm />} />
        <Route path="/Thankyou" element={<Thankyou />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Kitchen-Service" element={<KitchenService />} />
        <Route path="/Ourfactorytour" element={<Ourfactorytour />} />

        <Route path="/BespokeFurniture" element={<BespokeFurniture />} />
        <Route path="/GetFreeDesignConsultation" element={<GetFreeDesignConsultation />} />
        <Route path="/Startdesigning" element={<Startdesigning />}/>
        <Route path="/GDPRPolicy" element={<GDPRPolicy />}/>


        <Route path="/Warrantyandguaranty" element={<Warrantyandguaranty />}/>
        <Route path="/" element={<NewHome />}/>
      </Routes>
    </>
  );
}

export default App;
