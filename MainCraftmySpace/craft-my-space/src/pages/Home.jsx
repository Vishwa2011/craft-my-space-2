import React from "react";
import Navbar from "./Navbar";
import Footers from "./Footer";
import { Typography } from "@mui/material";
// import Info from "./Info";
import { Star } from "@mui/icons-material";
import MeetDesignerForm from "./MeetDesignerForm";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <div className="page-wraper" style={{ background: "#000" }}>
        {/* <Info /> */}
        <Navbar />

        {/* <!-- slider start --> */}
        <div className="page-content">
          <div className="slider-section">
            <div className="slider-section">
              <div
                id="welcome_wrapper"
                className="rev_slider_wrapper fullscreen-container"
                data-alias="goodnews-header"
                data-source="gallery"
                style={{ background: "#eeeeee", padding: "0px" }}
              >
                <div
                  id="welcome"
                  className="rev_slider fullscreenbanner"
                  style={{ display: "none" }}
                  data-version="5.4.3.1"
                >
                  <ul>
                    {/* <!-- SLIDE 1 --> */}
                    <li
                      data-index="rs-901"
                      data-transition="slidevertical"
                      data-slotamount="default"
                      data-hideafterloop="0"
                      data-hideslideonmobile="off"
                      data-easein="default"
                      data-easeout="default"
                      data-masterspeed="default"
                      data-thumb="images/main-slider/slider1/slide1.jpg"
                      data-rotate="0"
                      data-fsmasterspeed="300"
                      data-fsslotamount="7"
                      data-saveperformance="off"
                      data-title="Click"
                      data-param1=""
                      data-description=""
                    >
                      {/* <!-- MAIN IMAGE --> */}
                      <img
                        src="/assets/pic/header1.webp"
                        alt=""
                        data-lazyload="images/main-slider/slider1/slide1.jpg"
                        data-bgposition="center center"
                        data-bgfit="cover"
                        data-bgparallax="4"
                        className="rev-slidebg"
                        data-no-retina
                      />

                      {/* <!-- LAYER NR. 0 [ for overlay ] --> */}
                      <div
                        className="tp-caption tp-shape tp-shapewrapper "
                        id="slide-901-layer-0"
                        data-x="['center','center','center','center']"
                        data-hoffset="['0','0','0','0']"
                        data-y="['middle','middle','middle','middle']"
                        data-voffset="['0','0','0','0']"
                        data-width="full"
                        data-height="full"
                        data-whitespace="nowrap"
                        data-type="shape"
                        data-basealign="slide"
                        data-responsive_offset="off"
                        data-responsive="off"
                        data-frames='[
                                        {"from":"opacity:0;","speed":1000,"to":"o:1;","delay":0,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"opacity:0;","ease":"Power4.easeOut"}
                                        ]'
                        data-textAlign="['left','left','left','left']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{
                          zIndex: 1,
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          borderColor: "rgba(0, 0, 0, 0)",
                          borderWidth: "0px",
                        }}
                      ></div>

                      {/* <!-- LAYER NR. 2 [Number] --> */}
                      <div
                        className="tp-caption tp-resizeme"
                        id="slide-901-layer-2"
                        data-x="['left','left','left','left']"
                        data-hoffset="['30','30','30','40']"
                        data-y="['top','top','top','top']"
                        data-voffset="['300','180','180','180']"
                        data-fontsize="['300','200','200','80']"
                        data-lineheight="['66','66','48','38']"
                        data-width="['800','800','800','800']"
                        data-height="['none','none','none','none']"
                        data-whitespace="['normal','normal','normal','normal']"
                        data-type="text"
                        data-responsive_offset="on"
                        data-frames='[ 
                                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":1000,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                        ]'
                        data-textAlign="['left','left','left','left']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{
                          zIndex: 13,
                          whiteSpace: "normal",
                          fontWeight: 900,
                          color: "rgba(0,0,0,0)",
                        }}
                      >
                        <span
                          className="slider-text-outline"
                          style={{
                            fontFamily: "'Oswald', sans-serif",
                            textTransform: "uppercase",
                          }}
                        >
                          01
                        </span>
                      </div>

                      {/* <!-- LAYER NR. 3 [ Small title ] --> */}
                      <div
                        className="tp-caption   tp-resizeme"
                        id="slide-901-layer-3"
                        data-x="['left','left','left','left']"
                        data-hoffset="['40','40','40','40']"
                        data-y="['top','top','top','top']"
                        data-voffset="['540','340','340','270']"
                        data-fontsize="['24','24','24','24']"
                        data-lineheight="['34','34','34','34']"
                        data-width="['700','700','96%','96%']"
                        data-height="['none','none','none','none']"
                        data-whitespace="['normal','normal','normal','normal']"
                        data-type="text"
                        data-responsive_offset="on"
                        data-frames='[
                                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":1500,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                        ]'
                        data-textAlign="['left','left','left','left']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{
                          zIndex: 13,
                          whiteSpace: "normal",
                          fontWeight: 400,
                          color: "#fff",
                          borderWidth: "0px",
                        }}
                      >
                        <div
                          style={{
                            fontFamily: "'Oswald', sans-serif",
                            textTransform: "uppercase",
                          }}
                        >
                          <span
                            className="text-white"
                            style={{ letterSpacing: "20px" }}
                          >
                            Living
                          </span>
                          <br />
                        </div>
                      </div>

                      {/* <!-- LAYER NR. 4 [ large title ] --> */}
                      <div
                        className="tp-caption   tp-resizeme"
                        id="slide-901-layer-4"
                        data-x="['left','left','left','left']"
                        data-hoffset="['40','40','40','40']"
                        data-y="['top','top','top','top']"
                        data-voffset="['580','390','390','330']"
                        data-fontsize="['72','72','38','28']"
                        data-lineheight="['82','82','48','38']"
                        data-width="['700','700','96%','96%']"
                        data-height="['none','none','none','none']"
                        data-whitespace="['normal','normal','normal','normal']"
                        data-type="text"
                        data-responsive_offset="on"
                        data-frames='[
                                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2000,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                        ]'
                        data-textAlign="['left','left','left','left']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{
                          zIndex: 13,
                          whiteSpace: "normal",
                          fontWeight: 400,
                          color: "#fff",
                          borderWidth: "0px",
                        }}
                      >
                        <div
                          style={{
                            fontFamily: "'Oswald', sans-serif",
                            textTransform: "uppercase",
                          }}
                        >
                          <span className="text-white">Conceptual Designs</span>
                          <br />
                        </div>
                      </div>

                      {/* <!-- LAYER NR. 5 [ More About button ] --> */}
                      <div
                        className="tp-caption tp-resizeme"
                        id="slide-901-layer-5"
                        data-x="['left','left','left','left']"
                        data-hoffset="['40','40','40','40']"
                        data-y="['top','top','top','top']"
                        data-voffset="['700','490','490','400']"
                        data-lineheight="['none','none','none','none']"
                        data-width="['300','300','300','300']"
                        data-height="['none','none','none','none']"
                        data-whitespace="['normal','normal','normal','normal']"
                        data-type="text"
                        data-responsive_offset="on"
                        data-frames='[ 
                                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2500,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                        ]'
                        data-textAlign="['left','left','left','left']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{ zIndex: 13, textTransform: "uppercase" }}
                      >
                        <a
                          href=""
                          className="rev-slider-custom-btn"
                          style={{
                            fontFamily: "'Oswald', sans-serif",
                          }}
                        >
                          view The Projects
                        </a>
                      </div>

                      {/* <!-- LAYER NR. 5-line [ More About button Line ] --> */}
                      <div
                        className="tp-caption tp-resizeme bg-green"
                        id="slide-901-layer-5-line"
                        data-x="['left','left','left','left']"
                        data-hoffset="['40','40','40','40']"
                        data-y="['top','top','top','top']"
                        data-voffset="['710','500','500','410']"
                        data-lineheight="['none','none','none','none']"
                        data-whitespace="['normal','normal','normal','normal']"
                        data-type="text"
                        data-responsive_offset="on"
                        data-frames='[ 
                                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2500,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                        ]'
                        data-textAlign="['left','left','left','left']"
                        data-paddingtop="[1,1,1,1]"
                        data-paddingright="[30,30,30,30]"
                        data-paddingbottom="[1,1,1,1]"
                        data-paddingleft="[30,30,30,30]"
                        style={{ zIndex: 13 }}
                      ></div>

                      {/* <!-- LAYER NR. 6 [ Right block ] --> */}
                      <div
                        className="tp-caption rev-btn  tp-resizeme bg-secondry"
                        id="901-layer-6"
                        data-x="['left','right','right','right']"
                        data-hoffset="['1060','0','0','0']"
                        data-y="['middle','middle','middle','middle']"
                        data-voffset="['0','0','0','0']"
                        data-width="full"
                        data-height="full"
                        data-whitespace="nowrap"
                        data-type="text"
                        data-visibility="['on','off','off','off']"
                        data-responsive_offset="off"
                        data-frames='[{"from":"y:[-0%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":0,"to":"o:1;","delay":0,"ease":"Power3.easeInOut"},
                                        {"delay":"wait","speed":0,"to":"y:[-0%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power1.easeIn"}]'
                        data-textAlign="['right','right','right','right']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{
                          zIndex: 0,
                          width: "6000px",
                          height: "100vh",
                          backgroundImage:
                            "url('images/main-slider/slider1/right-bg.png')",
                          display: "block",
                          backgroundPosition: "left center",
                          backgroundRepeat: "no-repeat",
                        }}
                      ></div>

                      {/* <!-- LAYER NR. 7 [ Right part middle image ] --> */}
                      <div
                        className="tp-caption   tp-resizeme"
                        id="slide-901-layer-7"
                        data-x="['right','right','right','right']"
                        data-hoffset="['100','80','40','40']"
                        data-y="['top','top','top','top']"
                        data-voffset="['140','140','140','270']"
                        data-width="['400','400','96%','96%']"
                        data-height="['none','auto','none','none']"
                        data-visibility="['on','on','off','off']"
                        data-type="image"
                        data-responsive_offset="on"
                        data-frames='[{"from":"x:200px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2000,"ease":"Power4.easeOut"},{"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}]'
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{
                          zIndex: 13,
                          whiteSpace: "normal",
                          borderWidth: "0px",
                        }}
                      >
                        <img src="/assets/pic/headersmall2.avif" alt="" />
                      </div>
                    </li>

                    {/* <!-- SLIDE 2 --> */}
                    <li
                      data-index="rs-902"
                      data-transition="slidevertical"
                      data-slotamount="default"
                      data-hideafterloop="0"
                      data-hideslideonmobile="off"
                      data-easein="default"
                      data-easeout="default"
                      data-masterspeed="default"
                      data-thumb="images/main-slider/slider1/slide1.jpg"
                      data-rotate="0"
                      data-fsmasterspeed="300"
                      data-fsslotamount="7"
                      data-saveperformance="off"
                      data-title="Click"
                      data-param1=""
                      data-description=""
                    >
                      {/* <!-- MAIN IMAGE --> */}
                      <img
                        src="/assets/pic/header2.webp"
                        alt=""
                        data-lazyload="images/main-slider/slider1/slide2.jpg"
                        data-bgposition="center center"
                        data-bgfit="cover"
                        data-bgparallax="4"
                        className="rev-slidebg"
                        data-no-retina
                      />

                      {/* <!-- LAYER NR. 0 [ for overlay ] --> */}
                      <div
                        className="tp-caption tp-shape tp-shapewrapper "
                        id="slide-902-layer-0"
                        data-x="['center','center','center','center']"
                        data-hoffset="['0','0','0','0']"
                        data-y="['middle','middle','middle','middle']"
                        data-voffset="['0','0','0','0']"
                        data-width="full"
                        data-height="full"
                        data-whitespace="nowrap"
                        data-type="shape"
                        data-basealign="slide"
                        data-responsive_offset="off"
                        data-responsive="off"
                        data-frames='[
                                        {"from":"opacity:0;","speed":1000,"to":"o:1;","delay":0,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"opacity:0;","ease":"Power4.easeOut"}
                                        ]'
                        data-textAlign="['left','left','left','left']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{
                          zIndex: 1,
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          borderColor: "rgba(0, 0, 0, 0)",
                          borderWidth: "0px",
                        }}
                      ></div>

                      {/* <!-- LAYER NR. 2 [Number] --> */}
                      <div
                        className="tp-caption tp-resizeme"
                        id="slide-902-layer-2"
                        data-x="['left','left','left','left']"
                        data-hoffset="['30','30','30','40']"
                        data-y="['top','top','top','top']"
                        data-voffset="['300','180','180','180']"
                        data-fontsize="['300','200','200','80']"
                        data-lineheight="['66','66','48','38']"
                        data-width="['800','800','800','800']"
                        data-height="['none','none','none','none']"
                        data-whitespace="['normal','normal','normal','normal']"
                        data-type="text"
                        data-responsive_offset="on"
                        data-frames='[ 
                                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":1000,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                        ]'
                        data-textAlign="['left','left','left','left']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{
                          zIndex: 13,
                          whiteSpace: "normal",
                          fontWeight: 900,
                          color: "rgba(0,0,0,0)",
                        }}
                      >
                        <span
                          className="slider-text-outline"
                          style={{
                            fontFamily: "'Oswald', sans-serif",
                            textTransform: "uppercase",
                          }}
                        >
                          02
                        </span>
                      </div>

                      {/* <!-- LAYER NR. 3 [ Sma /ll title ] --> */}
                      <div
                        className="tp-caption   tp-resizeme"
                        id="slide-902-layer-3"
                        data-x="['left','left','left','left']"
                        data-hoffset="['40','40','40','40']"
                        data-y="['top','top','top','top']"
                        data-voffset="['540','340','340','270']"
                        data-fontsize="['24','24','24','24']"
                        data-lineheight="['34','34','34','34']"
                        data-width="['700','700','96%','96%']"
                        data-height="['none','none','none','none']"
                        data-whitespace="['normal','normal','normal','normal']"
                        data-type="text"
                        data-responsive_offset="on"
                        data-frames='[
                                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":1500,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                        ]'
                        data-textAlign="['left','left','left','left']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{
                          zIndex: 13,
                          whiteSpace: "normal",
                          fontWeight: 400,
                          color: "#fff",
                          borderWidth: "0px",
                        }}
                      >
                        <div
                          style={{
                            fontFamily: "'Oswald', sans-serif",
                            textTransform: "uppercase",
                          }}
                        >
                          <span
                            className="text-white"
                            style={{ letterSpacing: "20px" }}
                          >
                            Kitchens
                          </span>
                          <br />
                        </div>
                      </div>

                      {/* <!-- LAYER NR. 4 [ large title ] --> */}
                      <div
                        className="tp-caption   tp-resizeme"
                        id="slide-902-layer-4"
                        data-x="['left','left','left','left']"
                        data-hoffset="['40','40','40','40']"
                        data-y="['top','top','top','top']"
                        data-voffset="['580','390','390','330']"
                        data-fontsize="['72','72','38','28']"
                        data-lineheight="['82','82','48','38']"
                        data-width="['700','700','96%','96%']"
                        data-height="['none','none','none','none']"
                        data-whitespace="['normal','normal','normal','normal']"
                        data-type="text"
                        data-responsive_offset="on"
                        data-frames='[
                                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2000,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                        ]'
                        data-textAlign="['left','left','left','left']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{
                          zIndex: 13,
                          whiteSpace: "normal",
                          fontWeight: 400,
                          color: "#fff",
                          borderWidth: "0px",
                        }}
                      >
                        <div style={{ fontFamily: "'Oswald', sans-serif" }}>
                          <span className="text-white">
                            Stylish. Modified. Space.
                          </span>
                          <br />
                        </div>
                      </div>

                      {/* <!-- LAYER NR. 5 [ More About button ] --> */}
                      <div
                        className="tp-caption tp-resizeme"
                        id="slide-902-layer-5"
                        data-x="['left','left','left','left']"
                        data-hoffset="['40','40','40','40']"
                        data-y="['top','top','top','top']"
                        data-voffset="['700','490','490','400']"
                        data-lineheight="['none','none','none','none']"
                        data-width="['300','300','300','300']"
                        data-height="['none','none','none','none']"
                        data-whitespace="['normal','normal','normal','normal']"
                        data-type="text"
                        data-responsive_offset="on"
                        data-frames='[ 
                                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2500,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                        ]'
                        data-textAlign="['left','left','left','left']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{ zIndex: 13, textTransform: "uppercase" }}
                      >
                        <a
                          href=""
                          className="rev-slider-custom-btn"
                          style={{ fontFamily: "'Oswald', sans-serif" }}
                        >
                          view The Projects
                        </a>
                      </div>

                      {/* <!-- LAYER NR. 5-line [ More About button Line ] --> */}
                      <div
                        className="tp-caption tp-resizeme bg-green"
                        id="slide-902-layer-5-line"
                        data-x="['left','left','left','left']"
                        data-hoffset="['40','40','40','40']"
                        data-y="['top','top','top','top']"
                        data-voffset="['710','500','500','410']"
                        data-lineheight="['none','none','none','none']"
                        data-whitespace="['normal','normal','normal','normal']"
                        data-type="text"
                        data-responsive_offset="on"
                        data-frames='[ 
                                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2500,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                        ]'
                        data-textAlign="['left','left','left','left']"
                        data-paddingtop="[1,1,1,1]"
                        data-paddingright="[30,30,30,30]"
                        data-paddingbottom="[1,1,1,1]"
                        data-paddingleft="[30,30,30,30]"
                        style={{ zIndex: 13 }}
                      ></div>

                      {/* <!-- LAYER NR. 6 [ Right block ] --> */}
                      <div
                        className="tp-caption rev-btn  tp-resizeme bg-secondry"
                        id="902-layer-6"
                        data-x="['left','right','right','right']"
                        data-hoffset="['1060','0','0','0']"
                        data-y="['middle','middle','middle','middle']"
                        data-voffset="['0','0','0','0']"
                        data-width="full"
                        data-height="full"
                        data-whitespace="nowrap"
                        data-type="text"
                        data-visibility="['on','off','off','off']"
                        data-responsive_offset="off"
                        data-frames='[{"from":"y:[-0%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":0,"to":"o:1;","delay":0,"ease":"Power3.easeInOut"},
                                        {"delay":"wait","speed":0,"to":"y:[-0%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power1.easeIn"}]'
                        data-textAlign="['right','right','right','right']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{
                          zIndex: 0,
                          width: "6000px",
                          height: "100vh",
                          backgroundImage:
                            "url('images/main-slider/slider1/right-bg.png')",
                          display: "block",
                          backgroundPosition: "left center",
                          backgroundRepeat: "no-repeat",
                        }}
                      ></div>

                      {/* <!-- LAYER NR. 7 [ Right part middle image ] --> */}
                      <div
                        className="tp-caption   tp-resizeme"
                        id="slide-902-layer-7"
                        data-x="['right','right','right','right']"
                        data-hoffset="['100','80','40','40']"
                        data-y="['top','top','top','top']"
                        data-voffset="['140','140','140','270']"
                        data-width="['400','400','96%','96%']"
                        data-height="['none','auto','none','none']"
                        data-visibility="['on','on','off','off']"
                        data-type="image"
                        data-responsive_offset="on"
                        data-frames='[{"from":"x:200px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2000,"ease":"Power4.easeOut"},{"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}]'
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{
                          zIndex: 13,
                          whiteSpace: "normal",
                          borderWidth: "0px",
                        }}
                      >
                        <img src="/assets/pic/headersmall.avif" alt="" />
                      </div>
                    </li>

                    {/* <!-- SLIDE 3 --> */}
                    <li
                      data-index="rs-903"
                      data-transition="slidevertical"
                      data-slotamount="default"
                      data-hideafterloop="0"
                      data-hideslideonmobile="off"
                      data-easein="default"
                      data-easeout="default"
                      data-masterspeed="default"
                      data-thumb="images/main-slider/slider1/slide1.jpg"
                      data-rotate="0"
                      data-fsmasterspeed="300"
                      data-fsslotamount="7"
                      data-saveperformance="off"
                      data-title="Click"
                      data-param1=""
                      data-description=""
                    >
                      {/* <!-- MAIN IMAGE --> */}
                      <img
                        src="/assets/pic/header3.webp"
                        alt=""
                        data-lazyload="images/main-slider/slider1/slide3.jpg"
                        data-bgposition="center center"
                        data-bgfit="cover"
                        data-bgparallax="4"
                        className="rev-slidebg"
                        data-no-retina
                      />

                      {/* <!-- LAYER NR. 0 [ for overlay ] --> */}
                      <div
                        className="tp-caption tp-shape tp-shapewrapper "
                        id="slide-903-layer-0"
                        data-x="['center','center','center','center']"
                        data-hoffset="['0','0','0','0']"
                        data-y="['middle','middle','middle','middle']"
                        data-voffset="['0','0','0','0']"
                        data-width="full"
                        data-height="full"
                        data-whitespace="nowrap"
                        data-type="shape"
                        data-basealign="slide"
                        data-responsive_offset="off"
                        data-responsive="off"
                        data-frames='[
                                        {"from":"opacity:0;","speed":1000,"to":"o:1;","delay":0,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"opacity:0;","ease":"Power4.easeOut"}
                                        ]'
                        data-textAlign="['left','left','left','left']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{
                          zIndex: 1,
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          borderColor: "rgba(0, 0, 0, 0)",
                          borderWidth: "0px",
                        }}
                      ></div>

                      {/* <!-- LAYER NR. 2 [Number] --> */}
                      <div
                        className="tp-caption tp-resizeme"
                        id="slide-903-layer-2"
                        data-x="['left','left','left','left']"
                        data-hoffset="['30','30','30','40']"
                        data-y="['top','top','top','top']"
                        data-voffset="['300','180','180','180']"
                        data-fontsize="['300','200','200','80']"
                        data-lineheight="['66','66','48','38']"
                        data-width="['800','800','800','800']"
                        data-height="['none','none','none','none']"
                        data-whitespace="['normal','normal','normal','normal']"
                        data-type="text"
                        data-responsive_offset="on"
                        data-frames='[ 
                                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":1000,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                        ]'
                        data-textAlign="['left','left','left','left']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{
                          zIndex: 13,
                          whiteSpace: "normal",
                          fontWeight: 900,
                          color: "rgba(0,0,0,0)",
                        }}
                      >
                        <span
                          className="slider-text-outline"
                          style={{
                            fontFamily: "'Oswald', sans-serif",
                            textTransform: "uppercase",
                          }}
                        >
                          03
                        </span>
                      </div>

                      {/* <!-- LAYER NR. 3 [ Small title ] --> */}
                      <div
                        className="tp-caption   tp-resizeme"
                        id="slide-903-layer-3"
                        data-x="['left','left','left','left']"
                        data-hoffset="['40','40','40','40']"
                        data-y="['top','top','top','top']"
                        data-voffset="['540','340','340','270']"
                        data-fontsize="['24','24','24','24']"
                        data-lineheight="['34','34','34','34']"
                        data-width="['700','700','96%','96%']"
                        data-height="['none','none','none','none']"
                        data-whitespace="['normal','normal','normal','normal']"
                        data-type="text"
                        data-responsive_offset="on"
                        data-frames='[
                                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":1500,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                        ]'
                        data-textAlign="['left','left','left','left']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{
                          zIndex: 13,
                          whiteSpace: "normal",
                          fontWeight: 400,
                          color: "#fff",
                          borderWidth: "0px",
                        }}
                      >
                        <div
                          style={{
                            fontFamily: "'Oswald', sans-serif",
                            textTransform: "uppercase",
                          }}
                        >
                          <span
                            className="text-white"
                            style={{ letterSpacing: "20px" }}
                          >
                            Bedrooms
                          </span>
                          <br />
                        </div>
                      </div>

                      {/* <!-- LAYER NR. 4 [ large title ] --> */}
                      <div
                        className="tp-caption   tp-resizeme"
                        id="slide-903-layer-4"
                        data-x="['left','left','left','left']"
                        data-hoffset="['40','40','40','40']"
                        data-y="['top','top','top','top']"
                        data-voffset="['580','390','390','330']"
                        data-fontsize="['72','72','38','28']"
                        data-lineheight="['82','82','48','38']"
                        data-width="['700','700','96%','96%']"
                        data-height="['none','none','none','none']"
                        data-whitespace="['normal','normal','normal','normal']"
                        data-type="text"
                        data-responsive_offset="on"
                        data-frames='[
                                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2000,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                        ]'
                        data-textAlign="['left','left','left','left']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{
                          zIndex: 13,
                          whiteSpace: "normal",
                          fontWeight: 400,
                          color: "#fff",
                          borderWidth: "0px",
                        }}
                      >
                        <div style={{ fontFamily: "'Oswald', sans-serif" }}>
                          <span className="text-white">
                            Made-To-Measure Designs
                          </span>
                          <br />
                        </div>
                      </div>

                      {/* <!-- LAYER NR. 5 [ More About button ] --> */}
                      <div
                        className="tp-caption tp-resizeme"
                        id="slide-903-layer-5"
                        data-x="['left','left','left','left']"
                        data-hoffset="['40','40','40','40']"
                        data-y="['top','top','top','top']"
                        data-voffset="['700','490','490','400']"
                        data-lineheight="['none','none','none','none']"
                        data-width="['300','300','300','300']"
                        data-height="['none','none','none','none']"
                        data-whitespace="['normal','normal','normal','normal']"
                        data-type="text"
                        data-responsive_offset="on"
                        data-frames='[ 
                                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2500,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                        ]'
                        data-textAlign="['left','left','left','left']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{
                          zIndex: 13,
                          textTransform: "uppercase",
                        }}
                      >
                        <a
                          href=""
                          className="rev-slider-custom-btn"
                          style={{ fontFamily: " 'Oswald', sans-serif" }}
                        >
                          view The Projects
                        </a>
                      </div>

                      {/* <!-- LAYER NR. 5-line [ More About button Line ] --> */}
                      <div
                        className="tp-caption tp-resizeme bg-green"
                        id="slide-903-layer-5-line"
                        data-x="['left','left','left','left']"
                        data-hoffset="['40','40','40','40']"
                        data-y="['top','top','top','top']"
                        data-voffset="['710','500','500','410']"
                        data-lineheight="['none','none','none','none']"
                        data-whitespace="['normal','normal','normal','normal']"
                        data-type="text"
                        data-responsive_offset="on"
                        data-frames='[ 
                                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2500,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                        ]'
                        data-textAlign="['left','left','left','left']"
                        data-paddingtop="[1,1,1,1]"
                        data-paddingright="[30,30,30,30]"
                        data-paddingbottom="[1,1,1,1]"
                        data-paddingleft="[30,30,30,30]"
                        style={{ zIndex: 13 }}
                      ></div>

                      {/* <!-- LAYER NR. 6 [ Right block ] --> */}
                      <div
                        className="tp-caption rev-btn  tp-resizeme bg-secondry"
                        id="903-layer-6"
                        data-x="['left','right','right','right']"
                        data-hoffset="['1060','0','0','0']"
                        data-y="['middle','middle','middle','middle']"
                        data-voffset="['0','0','0','0']"
                        data-width="full"
                        data-height="full"
                        data-whitespace="nowrap"
                        data-type="text"
                        data-visibility="['on','off','off','off']"
                        data-responsive_offset="off"
                        data-frames='[{"from":"y:[-0%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":0,"to":"o:1;","delay":0,"ease":"Power3.easeInOut"},
                                        {"delay":"wait","speed":0,"to":"y:[-0%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power1.easeIn"}]'
                        data-textAlign="['right','right','right','right']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{
                          zIndex: 0,
                          width: "6000px",
                          height: "100vh",
                          backgroundImage:
                            "url('images/main-slider/slider1/right-bg.png')",
                          display: "block",
                          backgroundPosition: "left center",
                          backgroundRepeat: "no-repeat",
                        }}
                      ></div>

                      {/* <!-- LAYER NR. 7 [ Right part middle image ] --> */}
                      <div
                        className="tp-caption   tp-resizeme"
                        id="slide-903-layer-7"
                        data-x="['right','right','right','right']"
                        data-hoffset="['100','80','40','40']"
                        data-y="['top','top','top','top']"
                        data-voffset="['140','140','140','270']"
                        data-width="['400','400','96%','96%']"
                        data-height="['none','auto','none','none']"
                        data-visibility="['on','on','off','off']"
                        data-type="image"
                        data-responsive_offset="on"
                        data-frames='[{"from":"x:200px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2000,"ease":"Power4.easeOut"},{"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}]'
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{
                          zIndex: 13,
                          whiteSpace: "normal",
                          borderWidth: "0px",
                        }}
                      >
                        <img src="/assets/pic/headersmall3.avif" alt="" />
                      </div>
                    </li>
                  </ul>
                  <div
                    className="tp-bannertimer tp-bottom"
                    style={{
                      visibility: "hidden",
                    }}
                  ></div>
                </div>
              </div>

              <div className="slider-social-right">
                <ul>
                  <li>
                    <a href="https://www.facebook.com/login" target="_blank">
                      <span>
                        <i className="fa fa-facebook"></i>
                      </span>
                      Facebook
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://twitter.com/login"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>
                        <i className="fa fa-twitter"></i>
                      </span>
                      Twitter
                    </a>
                  </li>

                  <li>
                    <a href="">
                      <span>
                        <i className="fa fa-instagram"></i>
                      </span>
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- SLIDER END --> */}

            {/* <!--SLIDER-SOCIAL-RIGHT START--> */}
            <div className="slider-social-right">
              <ul>
                <li>
                  <a href="https://www.facebook.com/login" target="_blank">
                    <span>
                      <i className="fa fa-facebook"></i>
                    </span>
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/login"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>
                      <i className="fa fa-twitter"></i>
                    </span>
                    Twitter
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.instagram.com/accounts/login/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>
                      <i className="fa fa-instagram"></i>
                    </span>
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            {/* <!--SLIDER-SOCIAL-RIGHT END--> */}
          </div>
        </div>

        {/* <!-- slider END --> */}
        <div
          className="bg-gray overflow-hide v-title-outer"
          style={{
            padding: "100px 0px",
            background: "#000",
            borderBottom: "2px solid #B19777",
          }}
        >
          <div className="section-content">
            <div
              className="custom-block-outer clearfix bg-cover"
              style={{ backgroundImage: "url(images/background/video-bg.png)" }}
            >
              {/* <div className="custom-right-part "> */}
              <div className="custom-right-part-content">
                {/* <div className="video-section-outer"> */}
                <div className="section-head clearfix">
                  <div style={{ textAlign: "center" }}>
                    <small
                      className="wt-small-title"
                      style={{ color: "#B19777" }}
                    >
                      [ Latest Projects ]
                    </small>
                    <h2 className="m-b5">Our Projects</h2>
                  </div>
                </div>

                <div className="our-ability m-t50">
                  <div className="row">
                    <div className="col-md-4 col-sm-4">
                      <div className="m-b30 text-black wt-icon-box-wraper center">
                        <h1 className="counter font-weight-800 m-b5 site-text-primary">
                          132
                        </h1>
                        <h4 className="wt-tilte m-b0">Five stars rating</h4>
                      </div>
                    </div>

                    <div className="col-md-4 col-sm-4">
                      <div className="m-b30 text-black wt-icon-box-wraper center">
                        <h1 className="counter font-weight-800 m-b5 site-text-primary">
                          206
                        </h1>
                        <h4 className="wt-tilte m-b0">Happy customer</h4>
                      </div>
                    </div>

                    <div className="col-md-4 col-sm-4">
                      <div className="m-b30 text-black wt-icon-box-wraper center">
                        <h1 className="counter font-weight-800 m-b5 site-text-primary">
                          336
                        </h1>
                        <h4 className="wt-tilte m-b0">Project Complete</h4>
                      </div>
                    </div>
                  </div>
                </div>
                {/* </div> */}
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>

        {/* [ our services ] start  */}
        <div
          className="section-full p-t80 p-b50"
          style={{ background: "#000", borderBottom: "2px solid #B19777" }}
        >
          <div className="container">
            <div className="section-head clearfix">
              <div className="wt-tilte-main" style={{ display: "contents" }}>
                <small
                  className="wt-small-title"
                  style={{
                    justifyContent: "center",
                    display: "flex",
                    color: "#B19777",
                  }}
                >
                  [ our services ]
                </small>
                <h2
                  className="m-b5"
                  style={{ justifyContent: "center", display: "flex" }}
                >
                  Our Latest Services
                </h2>
              </div>
            </div>

            {/* card start  */}
            <motion.div className="container mt-5">
              <div className="portfolio-wrap mfp-gallery work-grid row clearfix">
                {[
                  { title: "Kitchen", img: "designn1.jpg" },
                  { title: "Bedroom", img: "design2.jpg" },
                  { title: "Home Office", img: "design3.jpg" },
                  { title: "Media Room", img: "design4.jpg" },
                  { title: "Bay Windows", img: "design5.jpg" },
                  { title: "Landing & Hallways", img: "design6.jpg" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="masonry-item col-lg-4 col-md-6 col-sm-12 m-b30"
                  >
                    <a href="/Kitchen-Service">
                      <div style={{ position: "relative", overflow: "hidden" }}>
                        <img
                          src={`/assets/pic/${item.img}`}
                          alt={item.title}
                          style={{
                            width: "100%",
                            opacity: "0.6",
                            transition: "transform 0.9s ease-in-out",
                          }}
                          onMouseEnter={(e) =>
                            (e.target.style.transform = "scale(1.1)")
                          }
                          onMouseLeave={(e) =>
                            (e.target.style.transform = "scale(1)")
                          }
                        />
                        <div
                          style={{
                            position: "absolute",
                            left: "38%",
                            top: "44%",
                            width: "100%",
                            fontSize: "30px",
                          }}
                        >
                          <h4 className="wt-tilte text-white">{item.title}</h4>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* card end  */}
            {/*  */}
          </div>
        </div>
        {/* [ our services ] end  */}
        {/* STEP INSPIRED SOLUTION start  */}
        <div
          className="section-full p-t80 p-b50 "
          style={{ background: "#000", borderBottom: "2px solid #B19777" }}
        >
          <div className="container">
            <div>
              <h2 style={{ display: "flex", justifyContent: "center" }}>
                OUR 4-STEP INSPIRED SOLUTION
              </h2>
            </div>
            <div
              className="section-content  "
              style={{ textAlign: "center", verticalAlign: "moddle" }}
            >
              <div className="col-12">
                <div className="row justify-content-center">
                  <div className="col-12 col-sm-12 col-md-3 p-3">
                    <a
                      href=""
                      className="wt-img-effect client-logo-media shadow"
                    >
                      <div>
                        <img src="/assets/pic/conversation (2).png" alt="" />
                      </div>
                      <div>
                        <p className="mt-3">DISCUSS & PLAN</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-12 col-sm-12 col-md-3 p-3">
                    <a
                      href=""
                      className="wt-img-effect client-logo-media shadow"
                    >
                      <div>
                        <img src="/assets/pic/staircase.png" alt="" />
                      </div>
                      <div>
                        <p className="mt-3">DESIGN & INNOVATE</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-12 col-sm-12 col-md-3 p-3">
                    <a
                      href=""
                      className="wt-img-effect client-logo-media shadow"
                    >
                      <div>
                        <img src="/assets/pic/industrial-park.png" alt="" />
                      </div>
                      <div>
                        <p className="mt-3">MANUFACTURE & DELIVER</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-12 col-sm-12 col-md-3 p-3">
                    <a
                      href=""
                      className="wt-img-effect client-logo-media shadow"
                    >
                      <div>
                        <img src="/assets/pic/puzzle.png" alt="" />
                      </div>
                      <div>
                        <p className="mt-3">FINAL FITTING</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <a
                  href="/Ourfactorytour"
                  className="site-button-link"
                  style={{
                    background: "#B19777",
                    color: "white",
                    padding: "18px",
                    textDecoration: "none",
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
                  our factory Tour
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* STEP INSPIRED SOLUTION end  */}

        {/* content start */}
        <div
          style={{
            padding: "70px 0px",
            background: "#000",
            borderBottom: "2px solid #B19777",
            position: "relative", // Ensures that we can position the background image separately
          }}
        >
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
                  [ Bespoke Luxury Wardrobes & Furniture - Crafted to Perfection
                  ]
                </small>
                <p
                  className="m-b5"
                  style={{
                    justifyContent: "center",
                    display: "flex",
                    fontSize: "18px",
                    paddingTop: "10px",
                    textAlign: "center",
                  }}
                >
                  DESIGNED TO FIT YOUR SPACE. BUILT TO ELEVATE YOUR LIFESTYLE.
                </p>
              </div>
            </div>
            <div className="col-12">
              <div className="row">
                <div
                  className="col-lg-6 col-md-12 col-sm-12"
                  style={{
                    position: "relative", // This will keep the text above the background image
                    // height: "450px",
                    zIndex:999,
                    overflow: "hidden", // Hide anything outside the bounds
                  }}
                >
                  {/* Background Image with Opacity and Rotation */}
                  <div
                    className="responsive-background"
                    // style={{
                    //   position: "absolute",

                    //   inset: "10px 100px 10px 10px",
                    //   backgroundImage: 'url("/assets/pic/backcms.png")',
                    //   backgroundSize: "cover",
                    //   backgroundPosition: "center",
                    //   transform: "rotate(-18deg)", // Rotates the background image
                    //   opacity: 0.4,  // Adjust the opacity of the background image
                    //   zIndex: 0,  // Ensure the background is behind the text
                    // }}
                  ></div>

                  <div
                    display="flex"
                    gap={0.5}
                    style={{ marginBottom: "20px" }}
                  >
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        sx={{ color: "#B19777", fontSize: 32 }}
                      />
                    ))}
                  </div>
                  <h2>Enjoy a Luxury Experience</h2>
                  <p style={{marginBottom:'50px'}}>
                    At Elite Living, we set the benchmark for refined luxury,
                    crafting spaces that epitomize sophistication and
                    exclusivity. Our bespoke services go beyond the ordinary,
                    transforming every detail into an extraordinary expression
                    of elegance. From the moment you step into our world, you
                    are embraced by a realm of tailored indulgence. With a
                    dedicated team of expert designers and artisans, we
                    meticulously bring your vision to life, ensuring each
                    element reflects your distinct taste and lifestyle. At Elite
                    Living, every creation is a testament to timeless beauty,
                    superior craftsmanship, and unparalleled luxury.
                  </p>
                
                   
                    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
                      <a
                        href="/GetFreeDesignConsultation"
                        style={{
                          background: "#B19777",
                          padding: "15px",
                          color: "white",
                          margin: "10px",
                          fontWeight: 500,
                          textDecoration: "none",
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
                        Get a Free Design Consultation
                      </a>

                      <a
                        href="/Startdesigning"
                        style={{
                          background: "#B19777",
                          padding: "15px",
                          color: "white",
                          margin: "10px",
                          fontWeight: 500,
                          textDecoration: "none",
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
                        Start Designing Now
                      </a>
                    </div>
                  
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <img
                    src="/assets/pic/bed.webp"
                    style={{ height: "450px", width: "100%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* content end */}
  {/* [ our bespoke ] start  */}
  <div
          className="section-full p-t80 p-b50"
          style={{ background: "#000", borderBottom: "2px solid #B19777" }}
        >
          <div className="container">
            <div className="section-head clearfix">
              <div className="wt-tilte-main" style={{ display: "contents" }}>
                <small
                  className="wt-small-title"
                  style={{
                    justifyContent: "center",
                    display: "flex",
                    color: "#B19777",
                  }}
                >
                  [ custom-fitted. elegantly craftd. ]
                </small>
                <p
                  
                  style={{ justifyContent: "center", display: "flex",fontSize:"16px",textAlign:'center' }}
                >
                  FROM WARDROBES TO MEDIA UNITS, WE DESIGN AND INSTALL BESPOKE FURNITURE THAT TRANSFORMS YOUR SPACE.
                </p>
              </div>
            </div>

            {/* card start  */}
            <motion.div className="container mt-5">
              <div className="portfolio-wrap mfp-gallery work-grid row clearfix">
                {[
                  { title: "sliding door wardrobes", img: "bespoke1.jpg", link: "/BespokeFurniture" },
                  { title: "plain hinge door wardrobes", img: "bespoke2.jpg",link:'/BespokeFurniture' },
                  { title: "shaker style fitted wardrobes", img: "bespoke3.jpg",link:'/BespokeFurniture' },
                  { title: "walk-in wardrobes", img: "bespoke4.jpg",link:'/BespokeFurniture' },
                  { title: "loft wardrobes", img: "bespoke5.jpg",link:'/BespokeFurniture' },
                  { title: "media units", img: "bespoke6.jpg" ,link:'/BespokeFurniture'},
                  { title: "fitted bookshelves", img: "bespoke7.jpg" ,link:'/BespokeFurniture'},
                  { title: "office cabinets", img: "bespoke8.jpg",link:'/BespokeFurniture' },
                  { title: "glass door wardrobe cabinets", img: "bespoke9.jpg",link:'/BespokeFurniture' },
                  { title: "small utility room storage", img: "bespoke10.jpg" ,link:'/BespokeFurniture'},
                  { title: "bedroom wardrobes", img: "bespoke11.jpg",link:'/BespokeFurniture' },
                  { title: "fretwork doors wardrobe", img: "bespoke12.jpg" ,link:'/BespokeFurniture'},
                ].map((item, index) => (
                  <div
                    key={index}  
                    className="masonry-item col-lg-4 col-md-6 col-sm-12 m-b30"
                  >
                    <a href={item.link}>
                      <div className="img-reflection" style={{ position: "relative", overflow: "hidden" }}>
                        <img
                          src={`/assets/pic/${item.img}`}
                          alt={item.title}
                          style={{
                            width: "100%",
                            opacity: "0.6",
                            transition: "transform 0.9s ease-in-out",
                          }}
                          onMouseEnter={(e) =>
                            (e.target.style.transform = "scale(1.1)")
                          }
                          onMouseLeave={(e) =>
                            (e.target.style.transform = "scale(1)")
                          }
                        />
                        <div
                         style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          height: "100%",
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "30px",
                        }}
                        >
                          <h4 className="wt-tilte text-white">{item.title}</h4>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
                <div style={{display:'flex',justifyContent:'center'}}>
                <a
                        href="/GetFreeDesignConsultation"
                        style={{
                          background: "#B19777",
                          padding: "15px",
                          color: "white",
                          margin: "10px",
                          fontWeight: 500,
                          textDecoration: "none",
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
                        Get a Free Design Consultation
                      </a>
                </div>
            </motion.div>

            {/* card end  */}
            {/*  */}
          </div>
        </div>
        {/* [ our bespoke ] end  */}
        {/* Testimonial start  */}
        <div
          className="section-full p-tb80 testimonial-slider-outer bg-cover bg-left-center"
          style={{ background: "#000", borderBottom: "2px solid #B19777" }}
        >
          <div className="container">
            <div className="section-head clearfix">
              <div className="wt-tilte-main bdr-r-3 bdr-primary bdr-solid">
                <small className="wt-small-title" style={{ color: "#B19777" }}>
                  [ Client Testimonial ]
                </small>
                <h2 className="m-b5">what our clients say</h2>
              </div>
              <div className="title-right-detail">
                <p>
                  We are uncompetitor in architectural solutions Friendly
                  neighbour there that power. Keep away Architecture who try to
                  Ambitions people do that really great.
                </p>
              </div>
            </div>

            <div className="testimonial-slider">
              <div id="sync1" className="owl-carousel owl-theme">
                <div className="item">
                  <div className="testimonial-slider-content clearfix">
                    <div className="testimonial-1 testimonial-1-no-img clearfix">
                      <div className="testimonial-text">
                        <div className="testimonial-paragraph">
                          <div className="quote-left"></div>
                          <p style={{ textAlign: "center" }}>
                            "Absolutely delighted with my new dining set from
                            CraftMySpace! The design is elegant, and the quality
                            is superb. It’s made our family dinners feel extra
                            special."
                          </p>
                        </div>
                        <div
                          style={{
                            color: "#B19777",
                            fontSize: "25px",
                            marginBottom: "10px",
                          }}
                        >
                          {" "}
                          ★ ★ ★ ★ ★
                        </div>
                        <div className="testimonial-detail ">
                          <h4 className="testimonial-name m-b5">
                            {" "}
                            Emily Thompson, London
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="testimonial-slider-content clearfix">
                    <div className="testimonial-1 testimonial-1-no-img clearfix">
                      <div className="testimonial-text">
                        <div className="testimonial-paragraph">
                          <div className="quote-left"></div>
                          <p style={{ textAlign: "center" }}>
                            "CraftMySpace exceeded my expectations. The custom
                            bookshelf I ordered fits perfectly and looks
                            stunning. Great service from start to finish!"
                          </p>
                        </div>
                        <div
                          style={{
                            color: "#B19777",
                            fontSize: "25px",
                            marginBottom: "10px",
                          }}
                        >
                          {" "}
                          ★ ★ ★ ★ ★
                        </div>
                        <div className="testimonial-detail ">
                          <h4 className="testimonial-name m-b5">
                            James Patel, Manchester
                          </h4>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>

                <div className="item">
                  <div className="testimonial-slider-content clearfix">
                    <div className="testimonial-1 testimonial-1-no-img clearfix">
                      <div className="testimonial-text">
                        <div className="testimonial-paragraph">
                          <div className="quote-left"></div>
                          <p style={{ textAlign: "center" }}>
                            "I’ve ordered furniture online before, but nothing
                            compares to the quality and style from CraftMySpace.
                            The sofa is incredibly comfortable and looks amazing
                            in our lounge."
                          </p>
                        </div>
                        <div
                          style={{
                            color: "#B19777",
                            fontSize: "25px",
                            marginBottom: "10px",
                          }}
                        >
                          {" "}
                          ★ ★ ★ ★ ★
                        </div>
                        <div className="testimonial-detail ">
                          <h4 className="testimonial-name m-b5">
                            Sophie Walker, Birmingham
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="testimonial-slider-content clearfix">
                    <div className="testimonial-1 testimonial-1-no-img clearfix">
                      <div className="testimonial-text">
                        <div className="testimonial-paragraph">
                          <div className="quote-left"></div>
                          <p style={{ textAlign: "center" }}>
                            "Excellent craftsmanship and quick delivery. The
                            team was super helpful when I had questions about
                            matching pieces for my home office."
                          </p>
                        </div>
                        <div
                          style={{
                            color: "#B19777",
                            fontSize: "25px",
                            marginBottom: "10px",
                          }}
                        >
                          {" "}
                          ★ ★ ★ ★ ★
                        </div>
                        <div className="testimonial-detail ">
                          <h4 className="testimonial-name m-b5">
                            Oliver Green, Leeds
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="sync2"
                className="owl-carousel owl-theme testimonial-1-thumb center"
              >
                <div className="item">
                  <div
                    className="wt-media"
                    style={{ border: "1px solid white" }}
                  >
                    <img src="/assets/pic/no-dp.jpg" alt="" />
                  </div>
                </div>
                <div className="item">
                  <div
                    className="wt-media"
                    style={{ border: "1px solid white" }}
                  >
                    <img src="/assets/pic/no-dp.jpg" alt="" />
                  </div>
                </div>
                <div className="item">
                  <div
                    className="wt-media"
                    style={{ border: "1px solid white" }}
                  >
                    <img src="/assets/pic/no-dp.jpg" alt="" />
                  </div>
                </div>
                <div className="item">
                  <div
                    className="wt-media"
                    style={{ border: "1px solid white" }}
                  >
                    <img src="/assets/pic/no-dp.jpg" alt="" />
                  </div>
                </div>
                {/* <div className="item">
                  <div className="wt-media">
                    <img src="/assets/pic/profile1.jpg" alt="" />
                  </div>
                </div>
                
                <div className="item">
                  <div className="wt-media">
                    <img src="/assets/pic/profile2.png" alt="" />
                  </div>
                </div> */}
              </div>
          </div>
          </div>
            <div style={{display:'flex',justifyContent:'center',marginTop:'20px',flexWrap:'wrap'}}>
                      <a
                        href="/"
                        style={{
                          background: "#B19777",
                          padding: "15px",
                          color: "white",
                          margin: "10px",
                          fontWeight: 500,
                          textDecoration: "none",
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
                        Read More Reviews
                      </a>

                      <a
                        href="/GetFreeDesignConsultation"
                        style={{
                          background: "#B19777",
                          padding: "15px",
                          color: "white",
                          margin: "10px",
                          fontWeight: 500,
                          textDecoration: "none",
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
                        Get a Free Consultation 
                      </a>
                    </div>
        </div>
        {/* Testimonial end  */}

        <div>
    <div className="section-head clearfix " style={{margin:"60px 0px 10px 0px"}}>
                  <div style={{ textAlign: "center" }}>
                    <small
                      className="wt-small-title"
                      style={{ color: "#B19777",fontSize:'25px' }}
                    >
                      [ DESIGN YOUR DREAM WARDROBE - IN REAL TIME! ]
                    </small>
                    <h2 className="m-b5" style={{fontSize:'18px'}}>CUSTOMIZE YOUR WARDROBE BY SELECTING SIZES, MATERIALA,COLORS,AND INTERNAL LAYOUTS.</h2>
                  </div>
                </div>
                <section className="container py-5 text-center">
   

    <div className="row g-4">
  {/* Step 1 */}
  <div className="col-md-4 mb-4">
    <div className="card h-100 shadow-sm" style={{border:'0px'}}>
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <img
          src="/assets/pic/no1 (3).jpg"
          alt="Design Visit"
          style={{
            width: '100%',
            height: '240px',
            display: 'block',
          }}
        />
        {/* Top-right white triangle overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: "-2px",
            width: '100px',
            height: '100px',
            backgroundColor: 'black ',
            clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
          }}
        />
        {/* Step number */}
        <span className="position-absolute top-0 start-0 m-2 bg-light rounded-circle px-3 py-1 fw-bold">1</span>
      </div>
      <div className="card-body text-center" style={{background:'#141414'}}> 
        <h5 className="card-title fw-bold" style={{color:'#B19777',fontSize:'20px',margin:'20px 0px'}}>Choose your Wardrobe type</h5>
        <p className="card-text " style={{color:'#fff'}}>
        Finding the perfect wardrobe for your space just got easier! Whether you’re looking for sleek sliding doors, classic hinged wardrobes, space-saving corner designs, or fully customized built-ins, we have something to match every style and need. 
        </p>
      </div>
    </div>
  </div>

  {/* Step 2 */}
  <div className="col-md-4 mb-4">
    <div className="card h-100 shadow-sm" style={{border:'0px'}}>
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <img
          src="/assets/pic/no2 (1).jpg"
          alt="Survey"
          style={{
            width: '100%',
            height: '240px',
            display: 'block',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: "-1px",
            right: "-2px",
            width: '100px',
            height: '100px',
            backgroundColor: 'black',
            clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
          }}
        />
        <span className="position-absolute top-0 start-0 m-2 bg-light rounded-circle px-3 py-1 fw-bold">2</span>
      </div>
      <div className="card-body text-center"  style={{background:'#141414'}}>
        <h5 className="card-title fw-bold" style={{color:'#B19777',fontSize:'20px',margin:'20px 0px'}}>select colors & Finishes</h5>
        <p className="card-text " style={{color:'#fff'}}>
        Add the perfect touch to your furniture with our wide range of colors and finishes. Whether you prefer warm wooden textures, glossy laminates, soft matte tones, or bold colors that make a statement – we have options to suit every mood and interior style. 
        </p>
      </div>
    </div>
  </div>

  {/* Step 3 */}
  <div className="col-md-4 mb-4" >
    <div className="card h-100 shadow-sm" style={{border:'0px'}}>
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <img
          src="/assets/pic/no3.jpg"
          alt="Installation"
          style={{
            width: '100%',
            height: '240px',
            display: 'block',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: "-1px",
            right: "-2px",
            width: '100px',
            height: '100px',
            backgroundColor: 'black',
            clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
          }}
        />
        <span className="position-absolute top-0 start-0 m-2 bg-light rounded-circle px-3 py-1 fw-bold">3</span>
      </div>
      <div className="card-body text-center"  style={{background:'#141414'}}>
        <h5 className="card-title fw-bold"  style={{color:'#B19777',fontSize:'20px',margin:'20px 0px'}}>visualize & Contact us </h5>
        <p className="card-text " style={{color:'#fff'}}>
        See your dream furniture come to life before you buy! With our visualization tools, you can preview designs, colors, and finishes in real-time—making it easier to picture how everything will look in your space.
        </p>
      </div>
    </div>
  </div>
</div>




    {/* <!-- Button --> */}
<div style={{display:'flex' ,justifyContent:'center',flexWrap:'wrap',marginTop:'60px'}}>

    <div style={{margin:'10px'}} >
                <a
                  href="/Startdesigning"
                  className="site-button-link"
                  style={{
                    background: "#B19777",
                    color: "white",
                    padding: "18px",
                    textDecoration: "none",
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
                    START DESIGNING NOW
                </a>
              </div>
              <div style={{margin:'10px'}}>
                <a
                  href="/Recentwork"
                  className="site-button-link"
                  style={{
                    background: "#B19777",
                    color: "white",
                    padding: "18px",
                    textDecoration: "none",
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
                  EXPLORE OUR GALLERY
                </a>
              </div>
</div>
    
  </section>

      </div>

        {/* <!-- VIDEO SECTION START --> */}
        <div style={{ borderBottom: "2px solid #B19777" }}>
          <div class="high-res-video-container">
            <video class="high-res-video" controls>
              <source src="/assets/pic/Modern Sliding Wardrobe Ideas That Maximize Space and Style _ Mirror Cupboard Sliding Doors.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* <!-- VIDEO  SECTION END -->

        {/* Why Choose start   */}
        <div
          className="section-full p-t80 p-b50 "
          style={{ background: "#000", borderBottom: "2px solid #B19777" }}
        >
          <div className="container">
            <div
              className="section-head clearfix"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div
                className="wt-tilte-main bdr-r-3 bdr-primary "
                style={{ textAlign: "center" }}
              >
                <small className="wt-small-title" style={{ color: "#B19777" }}>
                  [ Why Choose CraftMySpace ]
                </small>
                <h2 className="m-b5">
                  Why London's Homeowners & Businesses Trust Us
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <a href="/ContactUs">
                  <div className="wt-icon-box-wraper m-b30 p-lr30 p-tb25 data-title-large  v-icon-effect block-bg-hover bg-white1">
                    <div className="icon-content m-b30">
                      <h4 style={{color:'#B19777'}} className="wt-tilte-large m-t0" data-title="E">
                        Expert Craftsmanship
                      </h4>
                      <p style={{ color: "white" }}>
                        With over 15+ years of experience, CraftMySpace delivers
                        expert craftsmanship that combines timeless design with
                        lasting quality.
                      </p>
                    </div>
                    <div className="icon-xl inline-icon">
                      <span className="icon-cell">
                        <i
                          className="flaticon-mansion v-icon"
                          style={{ color: "#B19777" }}
                        ></i>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <a href="/ContactUs">
                  <div className="wt-icon-box-wraper m-b30 p-lr30 p-tb25 data-title-large  v-icon-effect block-bg-hover bg-white1">
                    <div className="icon-content m-b30">
                      <h4 style={{color:'#B19777'}} className="wt-tilte-large m-t0" data-title="P">
                        Premium Materials
                      </h4>
                      <p style={{ color: "white" }}>
                        CraftMySpace uses only premium materials, including
                        high-quality wood, glass, and flawless finishes, to
                        ensure every piece is both elegant.
                      </p>
                    </div>
                    <div className="icon-xl inline-icon">
                      <span className="icon-cell">
                        <i
                          className="flaticon-stair v-icon"
                          style={{ color: "#B19777" }}
                        ></i>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <a href="/ContactUs">
                  <div className="wt-icon-box-wraper m-b30 p-lr30 p-tb25 data-title-large  v-icon-effect block-bg-hover bg-white1">
                    <div className="icon-content m-b30">
                      <h4 style={{color:'#B19777'}} className="wt-tilte-large m-t0" data-title="t">
                        Tailored to your space
                      </h4>
                      <p style={{ color: "white" }}>
                        CraftMySpace offers 100% custom designs, thoughtfully
                        tailored to your space for a perfect blend of style,
                        comfort, and functionality.
                      </p>
                    </div>
                    <div className="icon-xl inline-icon">
                      <span className="icon-cell">
                        <i
                          className="flaticon-apartment v-icon"
                          style={{ color: "#B19777" }}
                        ></i>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <a href="/ContactUs">
                  <div className="wt-icon-box-wraper m-b30 p-lr30 p-tb25 data-title-large  v-icon-effect block-bg-hover bg-white1">
                    <div className="icon-content m-b30">
                      <h4 style={{color:'#B19777'}} className="wt-tilte-large m-t0" data-title="s">
                        Seamless installation
                      </h4>
                      <p style={{ color: "white" }}>
                        CraftMySpace ensures seamless installation with
                        hassle-free fitting and finishing, making your furniture
                        setup smooth and stress-free.
                      </p>
                    </div>
                    <div className="icon-xl inline-icon">
                      <span className="icon-cell">
                        <i
                          className="flaticon-photo v-icon"
                          style={{ color: "#B19777" }}
                        ></i>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <a href="/ContactUs">
                  <div className="wt-icon-box-wraper m-b30 p-lr30 p-tb25 data-title-large  v-icon-effect block-bg-hover bg-white1">
                    <div className="icon-content m-b30">
                      <h4 style={{color:'#B19777'}} className="wt-tilte-large m-t0" data-title="L">
                        Luxury look
                      </h4>
                      <p style={{ color: "white" }}>
                        CraftMySpace delivers a luxury look with sophisticated
                        designs and premium detailing that elevate every corner
                        of your home.
                      </p>
                    </div>
                    <div className="icon-xl inline-icon">
                      <span className="icon-cell">
                        <i
                          className="flaticon-sketch v-icon"
                          style={{ color: "#B19777" }}
                        ></i>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <a href="/ContactUs">
                  <div className="wt-icon-box-wraper m-b30 p-lr30 p-tb25 data-title-large  v-icon-effect block-bg-hover bg-white1 ">
                    <div className="icon-content m-b30">
                      <h4 style={{color:'#B19777'}} className="wt-tilte-large m-t0" data-title="A">
                        Affordable prices
                      </h4>
                      <p style={{ color: "white" }}>
                        CraftMySpace offers stylish, high-quality furniture at
                        affordable prices, making luxury living accessible for
                        every home.
                      </p>
                    </div>
                    <div className="icon-xl inline-icon">
                      <span className="icon-cell">
                        <i
                          className="flaticon-kitchen v-icon"
                          style={{ color: "#B19777" }}
                        ></i>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Why Choose end   */}

        {/* our blog start  */}
        <div
          className="section-full  p-t80 p-b80 "
          style={{ paddingBottom: "100px", background: "#000" }}
        >
          <div className="container">
            <div
              className="section-head clearfix"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className="wt-tilte-main bdr-r-3 bdr-primary  text-white">
                <small
                  className="wt-small-title"
                  style={{
                    justifyContent: "center",
                    display: "flex",
                    color: "#B19777",
                  }}
                >
                  [ our blog ]
                </small>
                <h2 className="m-b5">Furniture Inspiration & Expert Tips</h2>
              </div>
              {/* <div className="title-right-detail text-white">
                <p>
                  Our blog offers expert insights, tips, and inspiration on
                  furniture design, home decor, and space optimization. We share
                  the latest trends, DIY ideas, and advice to help you create
                  beautiful, functional spaces that reflect your personal style.
                </p>
              </div> */}
            </div>
          </div>

          <div className="section-content">
            <div className="container-fluid">
              <div className="container">
                <div className="projects-slider-two">
                  <div
                    className="owl-carousel projects-carousel-two owl-btn-vertical-center col-12"
                    style={{ display: "block" }}
                  >
                    <div className="row">
                      <div className="item col-12 col-md-6 col-lg-4 mb-4">
                        <div
                          className="projects-two-info text-white"
                          style={{ padding: "30px 30px 30px 30px" }}
                        >
                          <div>
                            <div className="wt-post-meta">
                              <ul>
                                <li className="post-author">
                                  <i className="fa fa-user"></i>
                                  <a href="" style={{ color: "#fff" }}>
                                    {" "}
                                    20 November 2024
                                  </a>
                                </li>
                                <li className="post-comment">
                                  <i className="fa fa-comments"></i>
                                  <a href="">
                                    {" "}
                                    <span style={{ color: "#fff" }}>
                                      CraftMyspace
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="wt-post-title">
                              <h4 className="post-title">
                                <a href="" style={{ color: "#fff" }}>
                                  how to choose the perfect wardrobe for your
                                  home
                                </a>
                              </h4>
                            </div>
                            <div className="wt-post-text">
                              <p style={{ fontFamily: "sans-serif" }}>
                                Choosing the perfect wardrobe involves balancing
                                style, space, and functionality. Measure your
                                room carefully to ensure the wardrobe fits well
                                without making the space feel cramped. Consider
                                your storage needs and pick a design that
                                complements your interior while keeping
                                everything organized.
                              </p>
                            </div>
                            <a
                              href="/Blog"
                              className="site-button-link"
                              style={{ color: "#fff" }}
                            >
                              Read More
                            </a>
                          </div>
                          <div className="wt-media img-reflection">
                            {/* <img src="assets/images/gallery/pic1.jpg" alt="" /> */}
                            <img src="/assets/pic/INSPIRATION1.webp" alt="" />
                          </div>
                        </div>
                      </div>

                      <div className="item col-12 col-md-6 col-lg-4 mb-4">
                        <div
                          className="projects-two-info text-white"
                          style={{ padding: "30px 30px 30px 30px" }}
                        >
                          <div>
                            <div className="wt-post-meta">
                              <ul>
                                {/* <li className="post-date"><span>Aug 2019</span></li> */}
                                <li className="post-author">
                                  <i className="fa fa-user"></i>
                                  <a href="" style={{ color: "#fff" }}>
                                    {" "}
                                    28 April 2024
                                  </a>
                                </li>
                                <li className="post-comment">
                                  <i className="fa fa-comments"></i>
                                  <a href="">
                                    {" "}
                                    <span style={{ color: "#fff" }}>
                                      CraftMyspace
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="wt-post-title">
                              <h4 className="post-title">
                                <a href="" style={{ color: "#fff" }}>
                                  maximizing space with loft wardrobes
                                </a>
                              </h4>
                            </div>
                            <div className="wt-post-text">
                              <p style={{ fontFamily: "sans-serif" }}>
                                Loft wardrobes are a smart solution for making
                                the most of vertical space in compact modern
                                rooms. They offer ample hidden storage without
                                taking up valuable floor area, keeping your home
                                neat and clutter-free. Custom loft wardrobes can
                                be perfectly tailored to fit awkward corners or
                                sloped ceilings, maximizing every inch
                                efficiently.
                              </p>
                            </div>
                            <a
                              href="/Blog"
                              className="site-button-link"
                              style={{ color: "#fff" }}
                            >
                              Read More
                            </a>
                          </div>
                          <div className="wt-media img-reflection">
                            {/* <img src="assets/images/gallery/pic2.jpg" alt="" /> */}
                            <img src="/assets/pic/bloggg2.jpg" alt="" />
                          </div>
                        </div>
                      </div>

                      <div className="item col-12 col-md-6 col-lg-4 mb-4">
                        <div
                          className="projects-two-info text-white"
                          style={{ padding: "30px 30px 30px 30px" }}
                        >
                          <div>
                            <div className="wt-post-meta">
                              <ul>
                                <li className="post-author">
                                  <i className="fa fa-user"></i>
                                  <a href="" style={{ color: "#fff" }}>
                                    {" "}
                                    24 June 2024
                                  </a>
                                </li>
                                <li className="post-comment">
                                  <i className="fa fa-comments"></i>
                                  <a href="">
                                    {" "}
                                    <span style={{ color: "#fff" }}>
                                      CraftMyspace
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="wt-post-title">
                              <h4 className="post-title">
                                <a href="" style={{ color: "#fff" }}>
                                  trending wardrobes designs for 2025
                                </a>
                              </h4>
                            </div>
                            <div className="wt-post-text">
                              <p style={{ fontFamily: "sans-serif" }}>
                                Wardrobe designs in 2025 are all about sleek
                                functionality and modern aesthetics. Trends like
                                mirrored finishes, integrated lighting, and
                                space-saving galley layouts are taking center
                                stage. Sustainable materials and custom corner
                                units are also gaining popularity for their
                                stylish, eco-friendly, and efficient appeal.
                              </p>
                            </div>
                            <a
                              href="/Blog"
                              className="site-button-link"
                              style={{ color: "#fff" }}
                            >
                              Read More
                            </a>
                          </div>
                          <div className="wt-media img-reflection">
                            {/* <img src="assets/images/gallery/pic3.jpg" alt="" /> */}
                            <img src="/assets/pic/blogg3.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* our blog end  */}

        <Footers />

        {/* <!-- BUTTON TOP START --> */}
        <button className="scroltop">
          <span className="fa fa-angle-up  relative" id="btn-vibrate"></span>
        </button>
      </div>
      <MeetDesignerForm />

      {/* <!-- LOADING AREA START ===== --> */}
      {/* <div className="loading-area">
                <div className="loading-box"></div>
                <div className="loading-pic">
                    <div id="loadFacebookG">
                        <div id="blockG_1" className="facebook_blockG"></div>
                        <div id="blockG_2" className="facebook_blockG"></div>
                        <div id="blockG_3" className="facebook_blockG"></div>
                    </div>
                </div>
            </div> */}
      {/* <!-- LOADING AREA  END ====== -->  */}

      {/* <!-- JAVASCRIPT  FILES ========================================= -->  */}
    </>
  );
}
