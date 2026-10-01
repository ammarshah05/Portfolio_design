import React from "react";
import { CiPen } from "react-icons/ci";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { MySkillsSec } from "./MySkillsSection";


export const ServiceSection = () => {
    return (
        <>
            <div className="services_container" id="services">
                <div className="servicesSec"  >
                    <div className="whatido">What I Do</div>
                    <h2 className="servicetitle">Services I Provide</h2>
                    <div className="service_container">
                        <div className="services_list">
                            <div className="graphics_detail">
                                <div className="iconbg"><CiPen className="penicon" /></div>
                                <div className="graphic_box">
                                    <div className="graphicTitle">Graphic Design</div>
                                    <div className="tasklist">Logos, Branding, Social Media, Posts, Banners, Flyers, Brochures & more</div>
                                </div>
                            </div>
                            <div className="graphics_detail">

                                <div className="iconbg"><AiOutlineVideoCamera className="penicon" /></div>
                                <div className="graphic_box">
                                    <div className="graphicTitle">Video Editing</div>
                                    <div>YouTube Videos, Reels, Ads , Promos & more</div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="view_servicebtn">
                        <div className="viewtext">View All Services</div>
                        <IoIosArrowForward  className="forwardarrow"/>
                    </div>
                </div>

                <div className="divider"></div>

                <MySkillsSec/>


                


            </div>




        </>


    );
};