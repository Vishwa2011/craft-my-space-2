// import React, { useEffect, useState } from "react";
// import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
// import Info from "./Info";
// import FacebookIcon from "@mui/icons-material/Facebook";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 40 || window.innerWidth <= 1024) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     window.addEventListener("resize", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("resize", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden"; // Disable scrolling
//     } else {
//       document.body.style.overflow = "auto"; // Enable scrolling
//     }
//   }, [isOpen]);

//   return (
//     <>
//       <div className="infonone">
//         <Info />
//       </div>
//       <header
//         className={`site-header ${
//           isScrolled ? "scrolled" : ""
//         } header-style-1 header-fixed nav-wide `}
//       >
//         <div className="main-bar-wraper">
//           <div className="main-bar p-t5">
//             <div className="container flex justify-between items-center">
//               {!isOpen && (
//                 <div className="logo-header">
//                   <a href="/">
//                     <img
//                       src="/assets/pic/headercms.png"
//                       style={{ height: "100px", width: "170px" }}
//                     />
//                   </a>
//                 </div>
//               )}

//               <button
//                 id="mobile-side-drawer"
//                 onClick={() => setIsOpen(!isOpen)}
//               >
//                 <span className="icon-bar bar-one"></span>
//                 <span className="icon-bar bar-two"></span>
//                 <span className="icon-bar bar-three"></span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>

//       {isOpen && (
//       <div
//       className="bg-black text-white menu-container"
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: "100vw",
//         height: "100vh",
//         zIndex: 9999,
//         // display: "flex",
//         alignItems: "center",
//         flexDirection: "column",
//         padding: "16px 0px 210px 0px",
//         overflowY: "auto", // Enables scrolling
//         maxHeight: "100vh", // Prevents overflow beyond screen height
//         justifyContent: window.innerWidth > 320 ? "center" : "flex-start", // Conditional justifyContent
//       }}
//     >
//         <button
//       id="mobile-side-drawer"
//       onClick={() => setIsOpen(false)}
//       style={{
//         position: "absolute",
//         top: "30px",
//         right: "30px",
//         background: "#B19777",
//         fontSize: "23px",
//         width: "44px",
//         height: "44px",
//         textAlign: "center",
//         borderRadius: "100%",
//         padding: "3px",
//         cursor: "pointer",
//         zIndex: 10000, // Ensure it's above the menu
//       }}
//     >
//       ✕
//     </button>
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               marginBottom: "30px",
//             }}
//           >
//             <img src="/assets/pic/cmslogo.jpeg" style={{ height: "160px" }} />
//           </div>
//           <div
//             style={{
//               justifyContent: "center",
//               display: "flex",
//               flexDirection: window.innerWidth <= 768 ? "column" : "row",
//             }}
//           >
//             <div
//               className="w-1/4 bg-black p-8 flex flex-col justify-between"
//               style={{
//                 textAlign: window.innerWidth <= 768 ? "center" : "left",
//               }}
//             >
//               <ul
//                 className="space-y-4 text-lg text-gray-400"
//                 style={{ fontSize: "30px", listStyle: "none" }}
//               >
//                 <li
//                   className="text-3xl font-bold mb-6"
//                   style={{ marginBottom: "10px" }}
//                 >
//                   <a
//                     href="/"
//                     style={{ color: "#B19777", transition: "color 0.3s" }}
//                     onMouseEnter={(e) => (e.target.style.color = "white")}
//                     onMouseLeave={(e) => (e.target.style.color = "#B19777")}
//                   >
//                     Home
//                   </a>
//                 </li>

//                 <li
//                   className="text-3xl font-bold mb-6"
//                   style={{ marginBottom: "10px" }}
//                 >
//                   <a
//                     href="/WhyCraftMySpace"
//                     style={{ color: "#B19777", transition: "color 0.3s" }}
//                     onMouseEnter={(e) => (e.target.style.color = "white")}
//                     onMouseLeave={(e) => (e.target.style.color = "#B19777")}
//                   >
//                     Why Craftmyspace?
//                   </a>
//                 </li>

//                 <li
//                   className="text-3xl font-bold mb-6"
//                   style={{ marginBottom: "10px" }}
//                 >
//                   <a
//                     href="/Service"
//                     style={{ color: "#B19777", transition: "color 0.3s" }}
//                     onMouseEnter={(e) => (e.target.style.color = "white")}
//                     onMouseLeave={(e) => (e.target.style.color = "#B19777")}
//                   >
//                     Services
//                   </a>
//                 </li>
//                 <li
//                   className="text-3xl font-bold mb-6"
//                   style={{ marginBottom: "10px" }}
//                 >
//                   <a
//                     href="/Joinery"
//                     style={{ color: "#B19777", transition: "color 0.3s" }}
//                     onMouseEnter={(e) => (e.target.style.color = "white")}
//                     onMouseLeave={(e) => (e.target.style.color = "#B19777")}
//                   >
//                     Joinery
//                   </a>
//                 </li>
//                 <li
//                   className="text-3xl font-bold mb-6"
//                   style={{ marginBottom: "10px" }}
//                 >
//                   <a
//                     href="/Inspiration"
//                     style={{ color: "#B19777", transition: "color 0.3s" }}
//                     onMouseEnter={(e) => (e.target.style.color = "white")}
//                     onMouseLeave={(e) => (e.target.style.color = "#B19777")}
//                   >
//                     Inspiration
//                   </a>
//                 </li>
//                 <li
//                   className="text-3xl font-bold mb-6"
//                   style={{ marginBottom: "10px" }}
//                 >
//                   <a
//                     href="/Recentwork"
//                     style={{ color: "#B19777", transition: "color 0.3s" }}
//                     onMouseEnter={(e) => (e.target.style.color = "white")}
//                     onMouseLeave={(e) => (e.target.style.color = "#B19777")}
//                   >
//                     Gallary
//                   </a>
//                 </li>
//                 <li
//                   className="text-3xl font-bold mb-6"
//                   style={{ marginBottom: "10px" }}
//                 >
//                   <a
//                     href="/GetaQuote"
//                     style={{ color: "#B19777", transition: "color 0.3s" }}
//                     onMouseEnter={(e) => (e.target.style.color = "white")}
//                     onMouseLeave={(e) => (e.target.style.color = "#B19777")}
//                   >
//                     Get Quote
//                   </a>
//                 </li>
//               </ul>
//               <div
//                 className="flex space-x-4 text-gray-400 text-2xl"
//                 style={{ display: "flex",
//                   justifyContent: window.innerWidth <= 768 ? "center" : "start" ,
//                   marginBottom:'40px',
//                  }}
//               >
//                <div
//   style={{
//     background: "#B19777",
//     fontSize: "23px",
//     width: "44px",
//     height: "44px",
//     textAlign: "center",
//     borderRadius: "100%",
//     padding: "3px",
//     marginRight: "10px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   }}
// >
//   <a 
//     href="https://www.facebook.com" 
//     target="_blank" 
//     rel="noopener noreferrer"
//     style={{ color: "black", transition: "color 0.3s ease" }}
//     onMouseOver={(e) => (e.currentTarget.style.color = 'white')}
//     onMouseOut={(e) => (e.currentTarget.style.color = 'black')}
//   >
//     <FacebookIcon />
//   </a>
// </div>
// <div
//   style={{
//     background: "#B19777",
//     fontSize: "23px",
//     width: "44px",
//     height: "44px",
//     textAlign: "center",
//     borderRadius: "100%",
//     padding: "3px",
//     marginRight: "10px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   }}
// >
//   <a 
//     href="https://www.instagram.com" 
//     target="_blank" 
//     rel="noopener noreferrer"
//     style={{ color: "black", transition: "color 0.3s ease" }}
//     onMouseOver={(e) => (e.currentTarget.style.color = 'white')}
//     onMouseOut={(e) => (e.currentTarget.style.color = 'black')}
//   >
//     <FaInstagram />
//   </a>
// </div>
// <div
//   style={{
//     background: "#B19777",
//     fontSize: "23px",
//     width: "44px",
//     height: "44px",
//     textAlign: "center",
//     borderRadius: "100%",
//     padding: "3px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   }}
// >
//   <a 
//     href="https://www.youtube.com" 
//     target="_blank" 
//     rel="noopener noreferrer"
//     style={{ color: "black", transition: "color 0.3s ease" }}
//     onMouseOver={(e) => (e.currentTarget.style.color = 'white')}
//     onMouseOut={(e) => (e.currentTarget.style.color = 'black')}
//   >
//     <FaYoutube />
//   </a>
// </div>
//               </div>
//               {/*  */}
//             </div>
//             <div
//               className="w-3/4 flex items-center justify-center p-8"
//               style={{
//                 paddingLeft:
//                   window.innerWidth <= 768
//                     ? "0px"
//                     : window.innerWidth <= 1024
//                     ? "70px"
//                     : "230px",
//                 textAlign: window.innerWidth <= 768 ? "center" : "left",
//               }}
//             >
//               <div className="max-w-lg w-full p-6 bg-gray-900 rounded-lg shadow-lg border-l-2 border-gray-500">
//                 <h2
//                   className="text-xl font-semibold text-white "
//                   style={{ fontSize: "20px", margin: "0px" }}
//                 >
//                   Head Office:
//                 </h2>
//                 <p
//                   className="text-gray-400"
//                   style={{
//                     fontSize: "17px",
//                     marginBottom: "7px",
//                     color: "#B19777",
//                     textAlign: window.innerWidth <= 768 ? "center" : "left",
//                   }}
//                 >
//                   Unit 1, Grange Farm, Grange Way. Iver. Buckinghamshire - SL0
//                   9NT
//                 </p>
//                 <h2
//                   className="text-xl font-semibold text-white "
//                   style={{ fontSize: "20px", margin: "0px" }}
//                 >
//                   Phone No:
//                 </h2>
//                 <p
//                   className="text-gray-400"
//                   style={{
//                     fontSize: "17px",
//                     margin: "7px",
//                     color: "#B19777",
//                     textAlign: window.innerWidth <= 768 ? "center" : "left",
//                   }}
//                 >
//                   <a
//                     href="tel:(0044)07365 566 666"
//                     style={{ color: "#B19777" }}
//                   >
//                     (0044)07365 566 666
//                   </a>
//                 </p>
//                 {/* <h2 className="text-xl font-semibold text-white " style={{ fontSize: '20px',margin:'0px'  }}>Telephone No:</h2>
//                                 <p className="text-gray-400" style={{ fontSize: '17px',margin:'7px',color:"#B19777"   }}>(0044)07365 566 666</p> */}
//                 <h2
//                   className="text-xl font-semibold text-white "
//                   style={{ fontSize: "20px", margin: "0px" }}
//                 >
//                   Email Id:
//                 </h2>
//                 <p
//                   className="text-gray-400"
//                   style={{
//                     fontSize: "17px",
//                     margin: "0px",
//                     color: "#B19777",
//                     textAlign: window.innerWidth <= 768 ? "center" : "left",
//                   }}
//                 >
//                   <a
//                     href="mailto:Info@craftmyspace.co.uk"
//                     style={{ color: "#B19777" }}
//                   >
//                     Info@craftmyspace.co.uk
//                   </a>
//                 </p>

//                 <h2
//                   className="text-xl font-semibold text-white "
//                   style={{ fontSize: "20px", margin: "0px" }}
//                 >
//                   Time:
//                 </h2>
//                 <p
//                   className="text-gray-400"
//                   style={{
//                     fontSize: "17px",
//                     margin: "7px",
//                     color: "#B19777",
//                     textAlign: window.innerWidth <= 768 ? "center" : "left",
//                   }}
//                 >
//                   9:00AM - 6:00PM Mon - Sat
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;



import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import AppsIcon from "@mui/icons-material/Apps";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import HomeIcon from "@mui/icons-material/Home";
import CloseIcon from "@mui/icons-material/Close";
import Info from "./Info";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [open, setOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40 || window.innerWidth <= 1024) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll); // For resizing effect
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  const list = (


     <Box
    sx={{ 
      width: { xs: 320, sm: 375, md: 400 }, 
      padding: 2, 
      backgroundColor: "#000", 
      color: "#fff" 
    }}
    >
       <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 2, marginTop: 2 }}>
        <img
           src="/assets/pic/headercms.png"
         alt="CraftMySpace"
          style={{ width: "184px" , height:'96px'}}
        />
        <IconButton onClick={() => setOpen(false)} sx={{ color: "#fff" }}>
          <CloseIcon />
        </IconButton>
      </Box>
      {/* <!-- OUR GALLERY  --> */}
      <div className=" widget_gallery mfp-gallery p-a30 ">
        <h4 className="widget-title " style={{color:'white'}}>Our Gallery</h4>
        <div className="row no-gutters justify-content-center">
          <div className="col-6 col-sm-4 p-1">
            {/* <div className="wt-post-thum m-1">
              <a href="/assets/pic/kl (2).jpg" className="mfp-link" > */}
                <img src="/assets/pic/kl (1).jpg" alt="" />
              {/* </a>
            </div> */}
          </div>

          <div className="col-6 col-sm-4 p-1">
            {/* <div className="wt-post-thum m-1">
              <a href="/assets/pic/kp (2).jpg" className="mfp-link"> */}
                <img src="/assets/pic/kp (1).jpg" alt="" />
              {/* </a>
            </div> */}
          </div>

          <div className="col-6 col-sm-4 p-1">
            {/* <div className="wt-post-thum  m-1">
              <a href="/assets/pic/kblog (4).webp" className="mfp-link"> */}
                <img src="/assets/pic/kblog (1).webp" alt="" />
              {/* </a>
            </div> */}
          </div>

          <div className="col-6 col-sm-4 p-1">
            {/* <div className="wt-post-thum m-1">
              <a href="/assets/pic/childrensblog (2).jpg" className="mfp-link"> */}
                <img src="/assets/pic/childrensblog (1).jpg" alt="" />
              {/* </a>
            </div> */}
          </div>

          <div className="col-6 col-sm-4 p-1">
            {/* <div className="wt-post-thum m-1">
              <a href="/assets/pic/underblog (2).webp" className="mfp-link"> */}
                <img src="/assets/pic/underblog (1).webp" alt="" />
              {/* </a>
            </div> */}
          </div>

          <div className="col-6 col-sm-4 p-1">
            {/* <div className="wt-post-thum m-1">
              <a href="/assets/pic/dainingblog (2).jpg" className="mfp-link"> */}
                <img src="/assets/pic/dainingblog (1).jpg" alt="" />
              {/* </a>
            </div> */}
          </div>
        </div>
      </div>
      <Divider sx={{ backgroundColor: "#444" }} />
      <Typography variant="h6" gutterBottom sx={{ marginTop: 2,color:"white" }}>
        Contact Info
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <LocationOnIcon sx={{ color: "#fff" }} />
          </ListItemIcon>
          <ListItemText primary="Unit 1, Grange Farm, Grange Way Iver,Near London,UK" />
        </ListItem>
        <ListItem>
  <ListItemIcon>
    <EmailIcon sx={{ color: "#fff" }} />
  </ListItemIcon>
  <ListItemText
    primary={
      <a
        href="mailto:Info@craftmyspace.co.uk"
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        Info@craftmyspace.co.uk
      </a>
    }
  />
</ListItem>

<ListItem>
  <ListItemIcon>
    <PhoneIcon sx={{ color: "#fff" }} />
  </ListItemIcon>
  <ListItemText
    primary={
      <a
        href="tel:(0044)07365 566 666"
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        (0044)07365 566 666
      </a>
    }
  />
</ListItem>

      </List>
      <Box
        sx={{ display: "flex", justifyContent: "center", gap: 1, marginTop: 2 }}
      >
        <IconButton component="a" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" sx={{ color: "#fff" }}>
  <FacebookIcon />
</IconButton>

<IconButton component="a" href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" sx={{ color: "#fff" }}>
  <PinterestIcon />
</IconButton>

<IconButton component="a" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" sx={{ color: "#fff" }}>
  <InstagramIcon />
</IconButton>
        {/* <IconButton sx={{ color: "#fff" }}>
          <YouTubeIcon />
        </IconButton>
        <IconButton sx={{ color: "#fff" }}>
          <HomeIcon />
        </IconButton> */}
      </Box>
    </Box>
  
  );

  return (
    <div className="page-wraper">
   

    <div className="infonone">
    <Info />
    </div>
 
      {/* <header className="site-header header-style-1 header-fixed nav-wide" > */}
      <header className={` site-header ${isScrolled ? "scrolled" : "" }`}  >
        <div className="main-bar-wraper">
          <div className="main-bar p-t5" >
            <div className="">
              <div className="logo-header" style={{marginLeft:'10px'}}>
                <div className="logo-header-inner logo-header-one logo-header">
                  <a href="/">
                    <img  
                            src="/assets/pic/headercms.png"
                           style={{ height: "75px", width: "153px" }}
                    />
                  </a>
                </div>
              </div>
              {/* Toggle button for mobile */}
              <button
                className="mobile-menu-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
                style={{ color: "#fff", justifyContent: "flex-end" }}
              >
                ☰
              </button>
              {/* MAIN Nav */}
              <div className={`header-nav ${menuOpen ? "open" : ""}`}>
                <ul className="nav navbar-nav scroll" 
                //  style={{padding:'0px 30px'}}
                 style={{padding:'0px 3px'}}
                 >
                  <li>
                    <a href="/" >Home</a>
                  </li>
                  <li 
                  // style={{marginRight:'15px'}}
                  >
                    <a href="/WhyCraftMySpace">Why CMS?</a>
                    <ul className="sub-menu">
                      <li><a  href="/Mission">Our Mission</a></li>
                      <li><a  href="/Vision">Our Vision</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="/Fitted-Bedroom" >Bedroom</a>
                  </li>
                  <li>
                    <a href="/HomeOffice" >Home Office</a>
                  </li>
                  <li>
                    <a href="/FittedLiving" >Living Space</a>
                  </li>
                  <li>
                    <a href="/Service" >Services</a>
                    {/* <ul className="sub-menu">
                      <li>
                        <a href="/fitted-bedroom">Fitted Bedrooms</a>
                      </li>
                      <li>
                        <a href="/FittedWardrobes">Fitted Wardrobes</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="/HingedDoorWardrobes">
                              Hinged Door Wardrobes
                            </a>
                          </li>
                          <li>
                            <a href="/SlidingWardrobedDoorsByCMS">
                              Sliding Wardrobe Doors By CMS
                            </a>
                          </li>
                          <li>
                            <a href="/Slidingwardrobed">Sliding Wardrobes</a>
                            <ul className="sub-menu">
                              <li>
                                <a href="/ChildrensBedroomSlidingDoorWardrobes">
                                  Children’s Bedroom Sliding Door Wardrobes
                                </a>
                              </li>
                              <li>
                                <a href="/SlidingHallwayWardrobes">
                                  Sliding Hallway Wardrobes
                                </a>
                              </li>
                              <li>
                                <a href="/SlidingHomeOfficeWardrobes">
                                  Sliding Home Office Wardrobes
                                </a>
                              </li>
                              <li>
                                <a href="/SlidingLivingAreaWardrobes">
                                  Sliding Living Area Wardrobes
                                </a>
                              </li>
                              <li>
                                <a href="/SlidingBedroomWardrobes">
                                  Sliding Bedroom Wardrobes
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="/Walkinwardrobed">Walk-in Wardrobes</a>
                          </li>
                          <li>
                            <a href="/ChildrenFittedBadrooms">
                              Children's Fitted Bedrooms
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/FittedLiving">Fitted Living</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="/Bathroom">Bathroom</a>
                          </li>
                          <li>
                            <a href="/DiningRoom">Dining Room</a>
                          </li>
                          <li>
                            <a href="/HomeOffice">Home Office</a>
                          </li>
                          <li>
                            <a href="/Kitchens">Kitchens</a>
                          </li>
                          <li>
                            <a href="/MediaRoom">Media Room</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/AwkwardSpaces">Awkward Spaces</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="/Alcoves">Alcoves</a>
                          </li>
                          <li>
                            <a href="/BayWindows">Bay Windows</a>
                          </li>
                          <li>
                            <a href="/LandingHallways">Landing & Hallways</a>
                          </li>
                          <li>
                            <a href="/SlopingCeilings">Sloping Ceilings</a>
                          </li>
                          <li>
                            <a href="/UnderStairs">Under Stairs</a>
                          </li>
                        </ul>
                      </li>
                    </ul> */}
                  </li>
                  <li>
                    <a href="/Joinery" >Joinery</a>
                  </li>
                  {/* <li>
                    <a href="/Inspiration" >Blog</a>
                  </li> */}
                  <li 
                  // style={{marginRight:'20px'}}
                  >
                    <a href="" >Gallery</a>
                    <ul className="sub-menu">
                      <li >
                        <a href="/Recentwork">Recent Work</a>
                      </li>
                    </ul>
                  </li>
                  <li 
                  // style={{marginRight:'20px'}}
                  >
                    <a href="" >Contact</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="/ContactUs">Contact Us</a>
                      </li>
                      <li>
                        <a href="/Orderafreebrochure">Order A Free Brochure</a>
                      </li>
                      <li>
                        <a href="/PrivacyPolicy">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="/Termandcondition">Terms & Conditions</a>
                      </li>
                    </ul>
                  </li>
                  {/* <li styl  e={{marginRight:'22px'}}>
                  <div className="extra-nav" style={{height:'0px'}}>
                                <div className="extra-cell" style={{display:"block"}}>											
                                    <a href="#search" className=" text-white">
                                      <i className="fa fa-search" style={{fontSize:'20px'}}></i>
                                    </a>
                                </div>
                            </div>
                        
                            <div id="search"> 
                                <span className="close"></span>
                                <form role="search" id="searchform" action="/search" method="get" className="radius-xl">
                                    <div className="input-group">
                                        <input className="form-control" value="" name="q" type="search" placeholder="Type to search"/>
                                        <span className="input-group-append"><button type="button" className="search-btn"><i className="sl-icon-magnifier"></i></button></span>
                                    </div>   
                                </form>
                            </div> 
                  </li> */}
                  <li>
          
                            
                    <div>
                      <IconButton
                        onClick={() => setOpen(!open)}
                        className="icon_focus"
                        style={{ color: "#141b1f", padding: "0px" }}
                      >
                        <AppsIcon style={{color:'#fff'}}        />
                      </IconButton>
                      <Drawer
                        anchor="right"
                        open={open}
                        onClose={toggleDrawer(false)}
                      >
                        {list}
                      </Drawer>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

      <style>{`
          .css-1pkjbo {
        width: 325px;
    }
      .css-y7ab46-MuiPaper-root-MuiDrawer-paper{
      background: #000;
      }
        @media (max-width: 768px) {
          .mobile-menu-toggle {
            display: block;
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
            color: white;
            position: absolute;
            right: 20px;
            top: 22px;
          }
          .header-nav {
            display: none;
          }
          .header-nav.open {
            display: block;
            width: 250px; 
            height: 100vh;
            overflow: scroll;
          }
          .icon_focus{
            display:none;
          }
        }
        @media (min-width: 769px) {
          .mobile-menu-toggle {
            display: none;
          }
          .header-nav {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Navbar;