import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FittedBedroom from "./pages/FittedBedroom";
import FittedWardrobes from "./pages/FittedWardrobes";
import FittedLiving from "./pages/FittedLiving";
import AwkwardSpaces from "./pages/AwkwardSpaces";
import Joinery from "./pages/Joinery";
import Inspiration from "./pages/Inspiration";
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
import GetaQuote from "./pages/GetaQuote";
// import Getaquote from "./pages/GetQuote";
function App() {
  return (
    <>
      {/* <Navbar />  */}
       <div class="phone-widget">
              <a href="tel:+01753530216">
                <div class="phone-number">
                  +01753530216
                </div>
                <div class="phone-icon">
                  <BiPhoneCall className="icon" />
                </div></a>
              </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fitted-bedroom" element={<FittedBedroom />} />
        <Route path="/FittedWardrobes" element={<FittedWardrobes />} />
        <Route path="/FittedLiving" element={<FittedLiving />} />
        <Route path="/AwkwardSpaces" element={<AwkwardSpaces />} />
        <Route path="/Joinery" element={<Joinery />} />
        <Route path="/Inspiration" element={<Inspiration />} />
        <Route path="/Recentwork" element={<Recentwork />} />
        {/* <Route path="/GetQuote" element={<Getaquote />} /> */}
        <Route path="/GetaQuote" element={<GetaQuote/>}/>
        <Route path="/Orderafreebrochure" element={<Orderafreebrochure/>} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>} />
        <Route path="/Footer" element={<Footer/>} />
        <Route path="/HingedDoorWardrobes" element={<HingedDoorWardrobes/>} />
        <Route path="/SlidingWardrobedDoorsByCMS" element={<SlidingWardrobedDoorsByCMS/>} />
        <Route path="/Slidingwardrobed" element={<Slidingwardrobed/>} />
        <Route path="/ChildrensBedroomSlidingDoorWardrobes" element={<ChildrensBedroomSlidingDoorWardrobes/>} />
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



        












      </Routes>
    </>
  );
}

export default App;
