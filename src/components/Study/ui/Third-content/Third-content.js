import React from 'react';
import "./Third-content.scss";
import tabImg1 from "../../../../image/tabimg1.png";
import tabImg2 from "../../../../image/tabimg2.png";
import tabImg3 from "../../../../image/tabimg3.png";
import tabImg4 from "../../../../image/tabimg4.png";
import tabImg5 from "../../../../image/tabimg5.png";
import tabImg6 from "../../../../image/tabimg6.png";

const ThirdContent = () => {
    return (
        <div className="photos">
            <div className="photos-bg">
                <img src={tabImg1} alt=""/>
            </div>
            <div className="photos-bg">
                <img src={tabImg2} alt=""/>
            </div>
            <div className="photos-bg">
                <img src={tabImg3} alt=""/>
            </div>
            <div className="photos-bg">
                <img src={tabImg4} alt=""/>
            </div>
            <div className="photos-bg">
                <img src={tabImg5} alt=""/>
            </div>
            <div className="photos-bg">
                <img src={tabImg6} alt=""/>
            </div>
        </div>
    );
};

export default ThirdContent;