import React from "react";
import { IoMdDownload } from "react-icons/io";
import { MdOutlinePlayArrow } from "react-icons/md";
import { AiOutlineBehance } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


export const HeroSection = () => {
  return (
    <>
      <div className="herosection" id="hero">
        <div className="left">
          <div className="hellotext">Hello, I'm</div>
          <div className="heroname">Ammar Shah</div>
          <div className="jobtitle">Graphic Designer & Video Editor</div>
          <hr className="line"/>
          <p className="descrpt">I create stunning visual designs and engaging videos that help brands tell their story and connect with their audience.</p>
           
           <div className="btnContainer">
             <div className="cvbtn">
              <IoMdDownload className="downloadicon" />
               <div>Download CV</div>
             </div>
             <div className="viewwork">
              <MdOutlinePlayArrow  className="viewicon"/>
                <div className="viewtext">View My Work</div>
                  
             </div>
           
           </div>
           <div className="socialicon">
             <div className="iconcircle"> <AiOutlineBehance  className="icons"/></div>
             <div className="iconcircle"> <FaFacebookF className="icons" /></div>
             <div className="iconcircle"> <FaInstagram className="icons"/></div>
             <div className="iconcircle"> <FaLinkedinIn className="icons"/></div>
           </div>

        </div>
        <div className="right">
            <img src="ammarpng.png" alt="image"  className="gradient_fadeimage"/>
        </div>
      </div>
    </>
  );
};
