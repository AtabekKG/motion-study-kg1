import React from 'react';
import "./Home-about.scss";
import aboutUsImg from "./../../../image/home-aboutus.png";
import firstBlockImg from "./../../../image/Home-book.svg";
import secondBlockImg from "./../../../image/Home-men.svg";
import thirdBlockImg from "./../../../image/Home-time.svg";
import fourthBlockImg from "./../../../image/Home-dollar.svg";

const HomeAbout = () => {
    return (
        <div id="about-us">
            <div className="container">
                <div className="about-us">
                    <div className="about-us_desc">
                        <h1 className="about-us_desc-title">This is why we are best from others</h1>
                        <p>We provide full support at all stages of preparation, including assistance in filing documents and preparing for an interview. Contact us  and start your journey to higher education abroad!</p>
                        <div className="about-us_desc-bg">
                            <img src={aboutUsImg} alt=""/>
                        </div>
                    </div>
                    <div className="about-us_blocks">
                        <div className="about-us_blocks-block">
                            <div className="about-us_blocks-block_bg">
                                <img src={firstBlockImg} alt=""/>
                            </div>
                            <h4>1000+ Partners</h4>
                            <p>over 1000+ partners worldwide enter the best universities in the world</p>
                        </div>
                        <div className="about-us_blocks-block">
                            <div className="about-us_blocks-block_bg">
                                <img src={secondBlockImg} alt=""/>
                            </div>
                            <h4>Experts</h4>
                            <p>We are experts in our field. help you reach new heights</p>
                        </div>
                        <div className="about-us_blocks-block">
                            <div className="about-us_blocks-block_bg">
                                <img src={thirdBlockImg} alt=""/>
                            </div>
                            <h4>Time</h4>
                            <p>we will help you save your time and nerves when applying to the best university.</p>
                        </div>
                        <div className="about-us_blocks-block">
                            <div className="about-us_blocks-block_bg">
                                <img src={fourthBlockImg} alt=""/>
                            </div>
                            <h4>Affordable prices</h4>
                            <p>reasonable prices will always please you. sign up for a consultation</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAbout;