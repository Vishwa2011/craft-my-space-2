import React, { useState } from "react";
import Navbar from "./Navbar";
import Footers from "./Footer";


const categories = [
  { id: "all", name: "All" },
  { id: "cat-1", name: "Hinged Wardrobes" },
  { id: "cat-2", name: "Sliding Wardrobes" },
  { id: "cat-3", name: "Fitted Bedrooms" },
  { id: "cat-4", name: "Walk in Wardrobes" },
  { id: "cat-5", name: "Childrens Bedrooms" },
];


const items = [
  {
    id: 1,
    category: "cat-1",
    title: "Bifold Wardrobes",
    p: "We customize hinged folding wardrobe doors in various finishes, including wood, mirror, matte, laminate, and routed shutters. For a modern touch, choose metal-framed shutters with glass panels.",
    image: "/assets/pic/v2.png",
  },
  {
    id: 2,
    category: "cat-2",
    title: "Built In Sliding Wardrobes",
    p: "Perfect Interior offers the ideal storage solution for your dream home. When it comes to bedroom storage, choose between sliding and hinged wardrobes.",
    image: "/assets/pic/custom.png",
  },
  {
    id: 3,
    category: "cat-3",
    title: "DreamNest",
    p: "Maximize your space with custom-fitted bedroom furniture that blends style, storage, and comfort seamlessly.",
    image: "/assets/pic/image.png",
  },
  {
    id: 4,
    category: "cat-4",
    title: "LuxeCloset",
    p: "Experience luxury and organization with a stylish walk-in wardrobe designed for maximum storage and elegance.",
    image: "/assets/pic/walk-in-closet 1.png",
  },
  {
    id: 5,
    category: "cat-5",
    title: "KiddieNest",
    p: "Create a fun, cozy, and organized space with playful and functional bedroom furniture for your little one.",
    image: "/assets/pic/kids-bedroom.png",
  },
  {
    id: 6,
    category: "cat-1",
    title: "Hinged Wardrobes",
    p: "Our fitted hinged wardrobe system offers modularity with bespoke finishes, seamlessly matching living rooms, bedrooms, and bed units.",
    image: "/assets/pic/v9.png",
  },
  {
    id: 7,
    category: "cat-3",
    title: "SleepHaven",
    p: "Create a cozy and organized retreat with sleek, space-saving bedroom furniture designed for modern living.",
    image: "/assets/pic/panelplumangle.png",
  },
  {
    id: 8,
    category: "cat-4",
    title: "StyleHaven",
    p: "Upgrade your space with a sleek, functional walk-in wardrobe that keeps your clothing and accessories perfectly organized.",
    image: "/assets/pic/GM-BREA-02-1-large 1.png",
  },
  {
    id: 9,
    category: "cat-2",
    title: "Wooden Sliding Wardrobes",
    p: "Sliding doors are the most popular wardrobe choice in the UK, offering veneer finishes and customizable internal storage.",
    image: "/assets/pic/Sliding-Wardrobe-1 1.png",
  },
  {
    id: 10,
    category: "cat-1",
    title: "Glass Wardrobes",
    p: "We offer Soft-close German Hinges for durable hinged glass wardrobe doors. Our made-to-measure system is versatile, with high-quality accessories built to last.",
    image: "/assets/pic/pvc.png",
  },
  {
    id: 11,
    category: "cat-5",
    title: "DreamHaven",
    p: "Design a magical and comfortable children’s bedroom with smart storage and stylish, kid-friendly furniture.",
    image: "/assets/pic/child2.png",
  },
  {
    id: 12,
    category: "cat-2",
    title: "Glass Sliding Wardrobes",
    p: "Mirrored sliding wardrobes at Inspired Elements blend glass elegance with sleek sliders, offering custom-built options that maximize space and enhance style.",
    image: "/assets/pic/stylform.png",
  },
  {
    id: 13,
    category: "cat-3",
    title: "ComfortCove",
    p: "Transform your bedroom with fitted furniture that offers smart storage solutions and a luxurious aesthetic.",
    image: "/assets/pic/Jodie.png",
  },
  {
    id: 14,
    category: "cat-4",
    title: "WardrobeNest",
    p: "Create a personalized dressing area with a walk-in wardrobe that blends sophistication, space efficiency, and convenience.",
    image: "/assets/pic/wardrobe2 1.png",
  },
  {
    id: 15,
    category: "cat-5",
    title: "TinyRetreat",
    p: "Transform your child’s room with space-saving, vibrant, and durable furniture that grows with them.",
    image: "/assets/pic/childrens-bedroom.png",
  },
];

const FittedWardrobes = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems =
    activeCategory === "all"
      ? items
      : items.filter((item) => item.category === activeCategory);
  return (
    <div className="page-wraper">
      <Navbar />

      <div className="page-content">
        {/* <!-- CONTENT START --> */}
        <div className="page-content">
          {/* <!-- INNER PAGE BANNER --> */}
          <div
            className="wt-bnr-inr overlay-wraper bg-parallax bg-top-center"
            data-stellar-background-ratio="0.5"
            // style={{ backgroundImage: "url(assets/images/banner/2.jpg)" }}
            style={{ backgroundImage: "url(assets/pic/Wardrobe.webp)" }}
          >
            <div className="overlay-main bg-black opacity-07"></div>
            <div className="container">
              <div className="wt-bnr-inr-entry">
                <div className="banner-title-outer">
                  <div className="banner-title-name">
                    <h2 className="text-white">fitted wardrobes</h2>
                  </div>
                </div>
                {/* <!-- BREADCRUMB ROW -->                             */}

                <div>
                  <ul className="wt-breadcrumb breadcrumb-style-2">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>Fitted Furniture</li>
                    <li>fitted wardrobes</li>
                  </ul>
                </div>

                {/* <!-- BREADCRUMB ROW END -->                         */}
              </div>
            </div>
          </div>
          {/* <!-- INNER PAGE BANNER END --> */}

          {/* <!-- SECTION CONTENT START --> */}
          <div className="section-full p-t80 p-b50 bg-gray">
            <div className="container">
              <div className="filter-wrap p-b30">
                <ul className="masonry-filter link-style text-uppercase masonry-filter1">
                  {categories.map((cat) => (
                    <li
                      key={cat.id}
                      className={activeCategory === cat.id ? "active" : ""}
                    >
                      <a onClick={() => setActiveCategory(cat.id)}>
                        {cat.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="portfolio-wrap mfp-gallery work-grid row clearfix">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className={`masonry-item ${item.category} col-lg-4 col-md-6 col-sm-12 m-b30`}
                  >
                    <div className="project-img-effect-1">
                      <img src={item.image} alt={item.title} />
                      <div className="wt-info">
                        <h4 className="wt-tilte text-white m-b10 m-t0">
                          {item.title}
                        </h4>
                        <p>{item.p}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* <!-- SECTION CONTENT END  --> */}

          {/* text start  */}
          <div className="container mt-5 mb-5">
            <div className="project-detail-outer">
              <div className="project-detail-containt">
                <div className="bg-white text-black">
                  <h3>Built In Fitted Wardrobes</h3>
                  <h3>
                    Custom Built-In Fitted Wardrobes Tailored to Your Space in
                    London and the Home Counties – From CraftMySpace
                  </h3>
                  <p>
                    A wardrobe is second only to the bed in room decor.
                    Available in 2-, 3-, and 4-door models, or as compartments
                    built into niches or walls, wardrobes help organize and
                    enhance your space. These custom wardrobes not only offer
                    functionality but also reflect the style and design of your
                    room. With CraftMySpace, you can order a tailored fitted
                    wardrobe for your bedroom, hallway, or living room.
                  </p>
                  <h3>Your Reliable Home Assistant</h3>
                  <p>
                    The hallmark of CraftMySpace is our innovative systems for
                    organizing storage. Our bespoke fitted wardrobes are
                    designed to be your reliable home assistant, combining
                    functionality with style. These wardrobes offer:
                 
                  <ul className="mt-3">
                    <li>Dependable, safe operation</li>
                    <li>User-friendly with numerous practical solutions</li>
                    <li>Seamless integration with your existing interior</li>
                    <li>
                      Time-saving organization, keeping everything within reach
                    </li>
                    <li>
                      Thoughtful design that ensures every detail is
                      meticulously considered.
                    </li>
                  </ul>
                  </p>
                </div>
                <div style={{display:'flex',justifyContent:'center'}}>
                  <a href="/GetaQuote"    style={{
                      background: "#141b1f",
                      color: "white",
                      padding: "20px",
                    }}>Contact Now</a>
                </div>
              </div>
            </div>

          </div>
          {/* text end  */}
        </div>
        {/* <!-- CONTENT END --> */}
      </div>

      <Footers />
      <button className="scroltop">
        <span className="fa fa-angle-up  relative" id="btn-vibrate"></span>
      </button>
    </div>
  );
};

export default FittedWardrobes;
