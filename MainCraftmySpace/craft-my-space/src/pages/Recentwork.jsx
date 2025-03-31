// import React, { useState } from "react";
// import Navbar from "./Navbar";
// import Footers from "./Footer";

// const Recentwork = () => {
//   const images = [
//     {
//       src: "/assets/pic/galary1.webp",
//       title: "Fitted Hinged Doors Wardrobes",
//     },
//     {
//       src: "/assets/pic/modern-kitchen.jpg",
//       title: "Maximising Space and Functionality",
//     },
//     {
//       src: "/assets/pic/hisher.jpg",
//       title: "His and Hers Fitted Wardrobes",
//     },
//     {
//       src: "/assets/pic/online.webp",
//       title: "Fitted Wardrobes Delivered Ready To Paint",
//     },
//     {
//       src: "/assets/pic/royal.webp",
//       title: "Fitted Wardrobes and Cabinets in the Loft",
//     },
//     {
//       src: "/assets/pic/lfs-buy.webp",
//       title: "Fitted Wardrobe and Chest of Drawers in White",
//     },
   
//   ];

//   const [visibleImages, setVisibleImages] = useState(3);

//   const loadMore = () => {
//     setVisibleImages((prev) => prev + 3);
//   };
//   return (
//     <div className="page-wraper" style={{background:'#000'}}>
//       <Navbar />

//       <div className="page-content">
//         {/* top conatin start  */}
//         <div
//           className="wt-bnr-inr overlay-wraper bg-parallax bg-top-center"
//           data-stellar-background-ratio="0.5"
//           style={{ backgroundImage: "url(assets/pic/resent.jpg)" }}
//         >
//           <div className="overlay-main bg-black opacity-07"></div>
//           <div className="container">
//             <div className="wt-bnr-inr-entry">
//               <div className="banner-title-outer">
//                 <div className="banner-title-name">
//                   <h2 className="text-white">Recent Works</h2>
//                 </div>
//               </div>

//               <div>
//                 <ul className="wt-breadcrumb breadcrumb-style-2">
//                   <li>
//                     <a href="/">Home</a>
//                   </li>
//                   <li>Recent Works</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* top conatin end  */}
//         {/* card start  */}
//         <div className="container mt-5">
//           <div style={{ textAlign: "center" }}>
//             <h5 style={{color:'#B19777'}}>[ Recent Works ]</h5>
//             <h3>A Sample of Recent Works</h3>
//           </div>
//           <div className="portfolio-wrap mfp-gallery work-grid row clearfix">
//             {images.slice(0, visibleImages).map((image, index) => (
//               <div
//                 key={index}
//                 className="masonry-item col-lg-4 col-md-6 col-sm-12 m-b30"
//               >
//                 <div className="project-img-effect-1">
//                   <img src={image.src} alt="" />
//                   <div className="wt-info">
//                     <h4 className="wt-tilte text-white m-b10 m-t0">
//                       {image.title}
//                     </h4>
//                     <p style={{textAlign:'center'}}>[ Recent Works ]</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//             {visibleImages < images.length && (
//               <div className="col-12 text-center">
//                 <button
//                   className=" "
//                   onClick={loadMore}
//                   style={{
//                     background: '#B19777',
//                     color: 'white',
//                     padding: '18px',
//                     marginBottom:"20px",
//                     textDecoration: 'none',
//                     border: '2px solid #B19777',
//                     transition: 'all 0.3s ease-in-out'
//                   }}
//                   onMouseEnter={(e) => {
//                     e.target.style.background = 'white';
//                     e.target.style.color = '#B19777';
//                   }}
//                   onMouseLeave={(e) => {
//                     e.target.style.background = '#B19777';
//                     e.target.style.color = 'white';
//                   }}
//                 >
//                   Load More
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//         {/* card end  */}
       
//         <Footers />
//       </div>

//       <button className="scroltop">
//         <span className="fa fa-angle-up  relative" id="btn-vibrate"></span>
//       </button>
//     </div>
//   );
// };

// export default Recentwork;


import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footers from "./Footer";

const Recentwork = () => {
  const images = [
    { src: "/assets/pic/galary1.webp", title: "Fitted Hinged Doors Wardrobes" },
    { src: "/assets/pic/modern-kitchen.jpg", title: "Maximising Space and Functionality" },
    { src: "/assets/pic/hisher.jpg", title: "His and Hers Fitted Wardrobes" },
    { src: "/assets/pic/online.webp", title: "Fitted Wardrobes Delivered Ready To Paint" },
    { src: "/assets/pic/royal.webp", title: "Fitted Wardrobes and Cabinets in the Loft" },
    { src: "/assets/pic/lfs-buy.webp", title: "Fitted Wardrobe and Chest of Drawers in White" },
  ];

  const [visibleImages, setVisibleImages] = useState(3);
  const loadMore = () => setVisibleImages((prev) => prev + 3);

  return (
    <motion.div
      className="page-wraper"
      style={{ background: "#000" }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Navbar />

      <div className="page-content">
        {/* top conatin start */}
        <div
          className="wt-bnr-inr overlay-wraper bg-parallax bg-top-center"
          data-stellar-background-ratio="0.5"
          style={{ backgroundImage: "url(assets/pic/resent.jpg)" }}
        >
          <div className="overlay-main bg-black opacity-07"></div>
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <motion.div
                className="banner-title-outer"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="banner-title-name">
                  <h2 className="text-white">Recent Works</h2>
                </div>
              </motion.div>

              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li><a href="/">Home</a></li>
                  <li>Recent Works</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* top conatin end */}

        {/* card start */}
        <div className="container mt-5">
          <div style={{ textAlign: "center" }}>
            <h5 style={{ color: "#B19777" }}>[ Recent Works ]</h5>
            <h3>A Sample of Recent Works</h3>
          </div>

          <motion.div
            className="portfolio-wrap mfp-gallery work-grid row clearfix"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {images.slice(0, visibleImages).map((image, index) => (
              <motion.div
                key={index}
                className="masonry-item col-lg-4 col-md-6 col-sm-12 m-b30"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="project-img-effect-1">
                  <img src={image.src} alt="" />
                  <div className="wt-info">
                    <h4 className="wt-tilte text-white m-b10 m-t0">{image.title}</h4>
                    <p style={{ textAlign: "center" }}>[ Recent Works ]</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {visibleImages < images.length && (
            <motion.div
              className="col-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <button
                onClick={loadMore}
                style={{
                  background: "#B19777",
                  color: "white",
                  padding: "18px",
                  marginBottom: "20px",
                  border: "2px solid #B19777",
                  transition: "all 0.3s ease-in-out",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "white";
                  e.target.style.color = "#B19777";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "#B19777";
                  e.target.style.color = "white";
                }}
              >
                Load More
              </button>
            </motion.div>
          )}
        </div>
        {/* card end */}

        <Footers />
      </div>

      <button className="scroltop">
        <span className="fa fa-angle-up relative" id="btn-vibrate"></span>
      </button>
    </motion.div>
  );
};

export default Recentwork;
