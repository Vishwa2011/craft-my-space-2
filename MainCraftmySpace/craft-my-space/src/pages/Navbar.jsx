import React, { useEffect, useState } from "react";
import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import Info from "./Info";
import FacebookIcon from "@mui/icons-material/Facebook";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = "auto"; 
    }
  }, [isOpen]);

  return (
    <>
        <div className="infonone">
    <Info />
    </div>
      <header
        className={`site-header ${
          isScrolled ? "scrolled" : ""
        } header-style-1 header-fixed nav-wide mobile-sider-drawer-menu`}
      >
        <div className="main-bar-wraper">
          <div className="main-bar p-t5">
            <div className="container flex justify-between items-center">
              {!isOpen && (
                <div className="logo-header">
                  <a href="/">
                    <img
                      src="/assets/pic/craft.jpg"
                      style={{ height: "90px" }}
                    />
                  </a>
                </div>
              )}

              <button
                id="mobile-side-drawer"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className="icon-bar bar-one"></span>
                <span className="icon-bar bar-two"></span>
                <span className="icon-bar bar-three"></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {isOpen && (
        <div
          className="min-h-screen flex bg-black text-white"
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "16px 0px 210px 0px",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "30px",
            }}
          >
            <img src="/assets/pic/craft.jpg" style={{ height: "160px" }} />
          </div>
          <div style={{ justifyContent: "center", display: "flex" }}>
            <div className="w-1/4 bg-black p-8 flex flex-col justify-between">
              <ul
                className="space-y-4 text-lg text-gray-400"
                style={{ fontSize: "30px", listStyle: "none" }}
              >
                <li
                  className="text-3xl font-bold mb-6"
                  style={{ marginBottom: "10px" }}
                >
                  <a
                    href="/"
                    style={{ color: "#B19777", transition: "color 0.3s" }}
                    onMouseEnter={(e) => (e.target.style.color = "white")}
                    onMouseLeave={(e) => (e.target.style.color = "#B19777")}
                  >
                    Home
                  </a>
                </li>

                <li
                  className="text-3xl font-bold mb-6"
                  style={{ marginBottom: "10px" }}
                >
                  <a
                    href="/WhyCraftMySpace"
                    style={{ color: "#B19777", transition: "color 0.3s" }}
                    onMouseEnter={(e) => (e.target.style.color = "white")}
                    onMouseLeave={(e) => (e.target.style.color = "#B19777")}
                  >
                    Why Craftmyspace?
                  </a>
                </li>

                <li
                  className="text-3xl font-bold mb-6"
                  style={{ marginBottom: "10px" }}
                >
                  <a
                    href="/Service"
                    style={{ color: "#B19777", transition: "color 0.3s" }}
                    onMouseEnter={(e) => (e.target.style.color = "white")}
                    onMouseLeave={(e) => (e.target.style.color = "#B19777")}
                  >
                    Services
                  </a>
                </li>
                <li
                  className="text-3xl font-bold mb-6"
                  style={{ marginBottom: "10px" }}
                >
                  <a
                    href="/Joinery"
                    style={{ color: "#B19777", transition: "color 0.3s" }}
                    onMouseEnter={(e) => (e.target.style.color = "white")}
                    onMouseLeave={(e) => (e.target.style.color = "#B19777")}
                  >
                    Joinery
                  </a>
                </li>
                <li
                  className="text-3xl font-bold mb-6"
                  style={{ marginBottom: "10px" }}
                >
                  <a
                    href="/Inspiration"
                    style={{ color: "#B19777", transition: "color 0.3s" }}
                    onMouseEnter={(e) => (e.target.style.color = "white")}
                    onMouseLeave={(e) => (e.target.style.color = "#B19777")}
                  >
                    Inspiration
                  </a>
                </li>
                <li
                  className="text-3xl font-bold mb-6"
                  style={{ marginBottom: "10px" }}
                >
                  <a
                    href="/Recentwork"
                    style={{ color: "#B19777", transition: "color 0.3s" }}
                    onMouseEnter={(e) => (e.target.style.color = "white")}
                    onMouseLeave={(e) => (e.target.style.color = "#B19777")}
                  >
                    Gallary
                  </a>
                </li>
                <li
                  className="text-3xl font-bold mb-6"
                  style={{ marginBottom: "10px" }}
                >
                  <a
                    href="/GetaQuote"
                    style={{ color: "#B19777", transition: "color 0.3s" }}
                    onMouseEnter={(e) => (e.target.style.color = "white")}
                    onMouseLeave={(e) => (e.target.style.color = "#B19777")}
                  >
                    Get Quote
                  </a>
                </li>
              </ul>
              <div
                className="flex space-x-4 text-gray-400 text-2xl"
                style={{ display: "flex" }}
              >
                <div
                  style={{
                    background: "#B19777",
                    fontSize: "23px",
                    width: "44px",
                    height: "44px",
                    textAlign: "center",
                    borderRadius: "100%",
                    padding: "3px",
                    marginRight: "10px",
                  }}
                >
                  <FacebookIcon />
                </div>
                <div
                  style={{
                    background: "#B19777",
                    fontSize: "23px",
                    width: "44px",
                    height: "44px",
                    textAlign: "center",
                    borderRadius: "100%",
                    padding: "3px",
                    marginRight: "10px",
                  }}
                >
                  <FaInstagram className="hover:text-white cursor-pointer" />
                </div>
                <div
                  style={{
                    background: "#B19777",
                    fontSize: "23px",
                    width: "44px",
                    height: "44px",
                    textAlign: "center",
                    borderRadius: "100%",
                    padding: "3px",
                  }}
                >
                  <FaYoutube className="hover:text-white cursor-pointer" />
                </div>
              </div>
            </div>
            <div
              className="w-3/4 flex items-center justify-center p-8"
              style={{ paddingLeft: "230px" }}
            >
              <div className="max-w-lg w-full p-6 bg-gray-900 rounded-lg shadow-lg border-l-2 border-gray-500">
                <h2
                  className="text-xl font-semibold text-white "
                  style={{ fontSize: "20px", margin: "0px" }}
                >
                  Head Office:
                </h2>
                <p
                  className="text-gray-400"
                  style={{
                    fontSize: "17px",
                    marginBottom: "7px",
                    color: "#B19777",
                  }}
                >
                  Unit 1, Grange Farm, Grange Way. Iver. Buckinghamshire - SL0
                  9NT
                </p>
                <h2
                  className="text-xl font-semibold text-white "
                  style={{ fontSize: "20px", margin: "0px" }}
                >
                  Phone No:
                </h2>
                <p
                  className="text-gray-400"
                  style={{ fontSize: "17px", margin: "7px", color: "#B19777" }}
                >
                  (0044)07365 566{" "}
                </p>
                {/* <h2 className="text-xl font-semibold text-white " style={{ fontSize: '20px',margin:'0px'  }}>Telephone No:</h2>
                                <p className="text-gray-400" style={{ fontSize: '17px',margin:'7px',color:"#B19777"   }}>(0044)07365 566 666</p> */}
                <h2
                  className="text-xl font-semibold text-white "
                  style={{ fontSize: "20px", margin: "0px" }}
                >
                  Email Id:
                </h2>
                <p
                  className="text-gray-400"
                  style={{ fontSize: "17px", margin: "0px", color: "#B19777" }}
                >
                  Info@craftmyspace.co.uk
                </p>

                <h2
                  className="text-xl font-semibold text-white "
                  style={{ fontSize: "20px", margin: "0px" }}
                >
                  Time:
                </h2>
                <p
                  className="text-gray-400"
                  style={{ fontSize: "17px", margin: "7px", color: "#B19777" }}
                >
                  9:00AM - 6:00PM Mon - Sat
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;



