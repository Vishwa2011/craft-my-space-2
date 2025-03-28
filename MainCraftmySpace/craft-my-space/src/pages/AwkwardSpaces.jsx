import React, { useState } from 'react'
import Footers from './Footer';
import Navbar from './Navbar';

const categories = [
  { id: "all", name: "All" },
  { id: "cat-1", name: "Sloping Ceilings" },
  { id: "cat-2", name: "Alcoves" },
  { id: "cat-3", name: "Under Stairs" },
  { id: "cat-4", name: "Bay Windows" },
  { id: "cat-5", name: "Landing & Hallways" },
];
const items = [
  {
    id: 1,
    category: "cat-1",
    title: "  SlantSpace Design ",
    p: "Optimize your room with custom furniture that fits perfectly under sloping ceilings, maximizing space and style.",
    image: "/assets/pic/csm_Bild.png",
  },
  {
    id: 2,
    category: "cat-2",
    title: "NookNest",
    p: "Utilize alcove spaces with custom furniture that adds style, storage, and functionality to your home.",
    image: "/assets/pic/Fitted-media.png",
  },
  {
    id: 3,
    category: "cat-3",
    title: "UnderStair Haven",
    p: "Maximize under-stair space with smart storage solutions and stylish, space-saving furniture.",
    image: "/assets/pic/under-stairs-fitted-storage.png",
  },
  {
    id: 4,
    category: "cat-4",
    title: "BayNest Retreat",
    p: "Create a cozy and stylish seating area with custom furniture designed for your bay window space. ",
    image: "/assets/pic/bay1.png",
  },
  {
    id: 5,
    category: "cat-5",
    title: "PassageNest",
    p: "Optimize your landing and hallways with stylish, space-saving furniture that adds function and charm.",
    image: "/assets/pic/lh1.png",
  },
  {
    id: 6,
    category: "cat-1",
    title: "LoftStyle Haven",
    p: "Transform awkward ceiling angles into functional and elegant living areas with smart storage and stylish designs.",
    image: "/assets/pic/avon.png",
  },
  {
    id: 7,
    category: "cat-3",
    title: "Stepwise Storage",
    p: "Transform unused stair space into functional storage, a cozy nook, or a stylish display area.",
    image: "/assets/pic/NJ_Under-Stairs-Storage.png",
  },
  {
    id: 8,
    category: "cat-4",
    title: " Panorama Cove",
    p: "Transform your bay window into a functional and elegant nook for relaxation or storage.",
    image: "/assets/pic/bay2.png",
  },
  {
    id: 9,
    category: "cat-2",
    title: "CoveCraft",
    p: "Transform unused alcoves into elegant and practical storage or display areas with smart design solutions.",
    image: "/assets/pic/Fitted-media2.png",
  },
  {
    id: 10,
    category: "cat-1",
    title: "AngleFit Interiors",
    p: "Make the most of sloped ceilings with tailored furniture solutions that blend practicality with modern aesthetics.",
    image: "/assets/pic/sloped-ceilings9.png",
  },
  {
    id: 11,
    category: "cat-5",
    title: " Corridor Haven",
    p: "Transform empty hallways into elegant, practical spaces with smart storage and décor solutions.",
    image: "/assets/pic/lh2.png",
  },
  {
    id: 12,
    category: "cat-2",
    title: "SnugSpace",
    p: "Make the most of alcoves with tailored furniture that enhances both aesthetics and efficiency in any room.",
    image: "/assets/pic/alcove-shelving 1.png",
  },
  {
    id: 13,
    category: "cat-3",
    title: "TuckedAway Space",
    p: "Make every inch count with customized under-stair furniture designed for efficiency and elegance.",
    image: "/assets/pic/under-stairs-fitted-storage-4 2.png",
  },
  {
    id: 14,
    category: "cat-4",
    title: "Vista Alcove",
    p: "Maximize your bay window area with tailored furniture that blends comfort and sophistication.",
    image: "/assets/pic/bay3.png",
  },
  {
    id: 15,
    category: "cat-5",
    title: "Walkway Charm",
    p: "Make every step count with beautifully designed furniture that enhances your landing and hallway areas.",
    image: "/assets/pic/lh3.png",
  },
];
const AwkwardSpaces = () => {
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
            style={{ backgroundImage: "url(assets/pic/Burke-12.webp)" }}
          >
            <div className="overlay-main bg-black opacity-07"></div>
            <div className="container">
              <div className="wt-bnr-inr-entry">
                <div className="banner-title-outer">
                  <div className="banner-title-name">
                    <h2 className="text-white">Awkward Spaces</h2>
                  </div>
                </div>
                {/* <!-- BREADCRUMB ROW -->    */}

                <div>
                  <ul className="wt-breadcrumb breadcrumb-style-2">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>Fitted Furniture</li>
                    <li>Awkward Spaces</li>
                  </ul>
                </div>

                {/* <!-- BREADCRUMB ROW END -->  */}
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
                  <h3>Awkward Spaces</h3>
                  
                  <p>
                  Awkwardly shaped rooms with slopes and angles are no challenge for CraftMySpace fitted furniture. Our bespoke designs make the most of every inch, turning tricky spaces into functional and stylish areas.
                  </p>
                  
                  <p>
                  Whether you're converting an attic into a cozy bedroom or looking to add smart storage to a small room, our custom wardrobes are the perfect solution. No matter the size, shape, or layout, we create tailored storage solutions that fit seamlessly into your home. No corner is too tight, and no ceiling too sloped for our expert design team.
                 
                  </p>
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
  )
}

export default AwkwardSpaces
