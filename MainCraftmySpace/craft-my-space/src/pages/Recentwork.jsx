import React, { useState } from "react";
import Navbar from "./Navbar";
import Footers from "./Footer";

const Recentwork = () => {
  const images = [
    {
      src: "/assets/pic/galary1.webp",
      title: "Fitted Hinged Doors Wardrobes",
    },
    {
      src: "/assets/pic/modern-kitchen.jpg",
      title: "Maximising Space and Functionality",
    },
    {
      src: "/assets/pic/hisher.jpg",
      title: "His and Hers Fitted Wardrobes",
    },
    {
      src: "/assets/pic/online.webp",
      title: "Fitted Wardrobes Delivered Ready To Paint",
    },
    {
      src: "/assets/pic/royal.webp",
      title: "Fitted Wardrobes and Cabinets in the Loft",
    },
    {
      src: "/assets/pic/lfs-buy.webp",
      title: "Fitted Wardrobe and Chest of Drawers in White",
    },
    // {
    //   src: "assets/images/gallery/pic1.jpg",
    //   title: "Bedroom Sliding Door Wardrobe",
    // },
    // {
    //    src: "assets/images/gallery/pic2.jpg",
    //    title: "Hallway Wardrobe"
    //    },
    // {
    //   src: "assets/images/gallery/pic3.jpg",
    //   title: "Walk-in Wardrobe in XyloCleaf",
    // },
    // { src: "assets/images/gallery/pic3.jpg", title: "Walk-in Wardrobe" },
    // {
    //   src: "assets/images/gallery/pic3.jpg",
    //   title: "Under Sink Storage Solution",
    // },
    // { src: "assets/images/gallery/pic3.jpg", title: "Six-door wardrobe" },
    // { src: "assets/images/gallery/pic3.jpg", title: "12-Drawer Sideboard" },
    // {
    //   src: "assets/images/gallery/pic3.jpg",
    //   title: "Boardroom Fitted Furniture",
    // },
    // {
    //   src: "assets/images/gallery/pic3.jpg",
    //   title: "Latest Walk-in Dressing Room",
    // },
    // {
    //   src: "assets/images/gallery/pic3.jpg",
    //   title: "Maximising Storage in Challenging Spaces",
    // },
    // {
    //   src: "assets/images/gallery/pic3.jpg",
    //   title: "Fitted Wardrobe with Built-in Led Lighting",
    // },
    // {
    //   src: "assets/images/gallery/pic3.jpg",
    //   title: "Loft Conversion with Bespoke Furniture: A Perfect Blend of Style",
    // },
    // {
    //   src: "assets/images/gallery/pic3.jpg",
    //   title: "Sliding doors for West Hampstead!",
    // },
    // {
    //   src: "assets/images/gallery/pic3.jpg",
    //   title: "Statement style sliding wardrobe doors!",
    // },
    // {
    //   src: "assets/images/gallery/pic3.jpg",
    //   title: "Verona Style Sliding Doors!",
    // },
    // {
    //   src: "assets/images/gallery/pic3.jpg",
    //   title: "Bronzed Mirror Sliding Door wardrobe!",
    // },
    // {
    //   src: "assets/images/gallery/pic3.jpg",
    //   title: "Luxurious Sliding Doors for Edgware – CraftMySpace Style!",
    // },
    // {
    //   src: "assets/images/gallery/pic3.jpg",
    //   title: "White Glass Corner Wardrobe – CraftMySpace Style",
    // },
    // {
    //   src: "assets/images/gallery/pic3.jpg",
    //   title: "Sliding Doors – London Style",
    // },
    // {
    //   src: "assets/images/gallery/pic3.jpg",
    //   title: "Premium Quality Bespoke Furniture",
    // },
    // {
    //   src: "assets/images/gallery/pic3.jpg",
    //   title: "Sliding doors – Wood Green Style!",
    // },
    // {
    //   src: "assets/images/gallery/pic3.jpg",
    //   title: "Stunning sliding door Champagne Two-Piece",
    // },
    // {
    //   src: "assets/images/gallery/pic3.jpg",
    //   title: "Stunning Sliding Doors for Ealing – CraftMySpace Style!",
    // },
    // {
    //   src: "assets/images/gallery/pic3.jpg",
    //   title: "Sliding doors for Walthamstow – CraftMySpace style!",
    // },
    // {
    //   src: "assets/images/gallery/pic3.jpg",
    //   title: "Sliding doors for Kingston – Stunning!",
    // },
  ];

  const [visibleImages, setVisibleImages] = useState(3);

  const loadMore = () => {
    setVisibleImages((prev) => prev + 3);
  };
  return (
    <div className="page-wraper">
      <Navbar />

      <div className="page-content">
        {/* top conatin start  */}
        <div
          className="wt-bnr-inr overlay-wraper bg-parallax bg-top-center"
          data-stellar-background-ratio="0.5"
          style={{ backgroundImage: "url(assets/pic/resent.jpg)" }}
        >
          <div className="overlay-main bg-black opacity-07"></div>
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name">
                  <h2 className="text-white">Recent Works</h2>
                </div>
              </div>

              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>Recent Works</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* top conatin end  */}
        {/* card start  */}
        <div className="container mt-5">
          <div style={{ textAlign: "center" }}>
            <h5>[ Recent Works ]</h5>
            <h3>A Sample of Recent Works</h3>
          </div>
          <div className="portfolio-wrap mfp-gallery work-grid row clearfix">
            {images.slice(0, visibleImages).map((image, index) => (
              <div
                key={index}
                className="masonry-item col-lg-4 col-md-6 col-sm-12 m-b30"
              >
                <div className="project-img-effect-1">
                  <img src={image.src} alt="" />
                  <div className="wt-info">
                    <h4 className="wt-tilte text-white m-b10 m-t0">
                      {image.title}
                    </h4>
                    <p style={{textAlign:'center'}}>[ Recent Works ]</p>
                  </div>
                </div>
              </div>
            ))}
            {visibleImages < images.length && (
              <div className="col-12 text-center">
                <button
                  className=" "
                  onClick={loadMore}
                  style={{
                    color: "white",
                    background: "#141b1f",
                    padding: "15px",
                    border: "0px",
                    marginBottom: "20px",
                  }}
                >
                  Load More
                </button>
              </div>
            )}
          </div>
        </div>
        {/* card end  */}

        <Footers />
      </div>

      <button className="scroltop">
        <span className="fa fa-angle-up  relative" id="btn-vibrate"></span>
      </button>
    </div>
  );
};

export default Recentwork;
