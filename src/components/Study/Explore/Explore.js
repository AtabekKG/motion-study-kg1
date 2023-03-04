import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import "./Explore.scss";
import TabsStudy from "../ui/Tabs-study";
import americaImg from "./../../../image/study-america.svg";
import britainImg from "./../../../image/study-britain.svg";
import austriaImg from "./../../../image/study-austria.png";
import germanyImg from "./../../../image/study-germany.png";
import hollandImg from "./../../../image/study-holland.png";
import irelandImg from "./../../../image/study-ireland.png";
import spainImg from "./../../../image/study-spain.png";
import italyImg from "./../../../image/study-italy.png";
import canadaImg from "./../../../image/study-canada.png";
import cyprusImg from "./../../../image/study-cyprus.png";
import chinaImg from "./../../../image/study-china.png";
import latviaImg from "./../../../image/study-latvia.png";
import Tabs from "../Tabs/Tabs";
import {Scroll} from "../../../Scroll/Scroll";

const Explore = () => {
    return (
        <div id="explore">
            <div className="container">
                <div className="explore">
                    <h1 className="explore-title">Choose the country</h1>
                    <Tabs/>
                    <div className="explore-blocks">
                        <div className="explore-blocks_block">
                            <NavLink to={"/America"} onClick={Scroll} className="explore-blocks_block-link">
                                <div className="explore-blocks_block-bg">
                                    <img src={americaImg} alt=""/>
                                </div>
                                <h4 className="explore-blocks_block-title">America</h4>
                                <h4 className="explore-blocks_block_invisible-heading">Higher education in America</h4>
                            </NavLink>
                        </div>
                        <div className="explore-blocks_block">
                            <NavLink onClick={Scroll} className="explore-blocks_block-link">
                                <div className="explore-blocks_block-bg">
                                    <img src={britainImg} alt=""/>
                                </div>
                                <h4 className="explore-blocks_block-title">Great Britain</h4>
                                <h4 className="explore-blocks_block_invisible-heading">Higher education in the UK</h4>
                            </NavLink>
                        </div>
                        <div className="explore-blocks_block">
                           <NavLink onClick={Scroll} className="explore-blocks_block-link">
                               <div className="explore-blocks_block-bg">
                                   <img src={austriaImg} alt=""/>
                               </div>
                               <h4 className="explore-blocks_block-title">Australia</h4>
                               <h4 className="explore-blocks_block_invisible-heading">higher education in Australia</h4>
                           </NavLink>
                        </div>
                        <div className="explore-blocks_block">
                            <NavLink onClick={Scroll} className="explore-blocks_block-link">
                                <div className="explore-blocks_block-bg">
                                    <img src={germanyImg} alt=""/>
                                </div>
                                <h4 className="explore-blocks_block-title">Germany</h4>
                                <h4 className="explore-blocks_block_invisible-heading">higher education in Germany</h4>
                            </NavLink>
                        </div>
                        <div className="explore-blocks_block">
                            <NavLink onClick={Scroll} className="explore-blocks_block-link">
                                <div className="explore-blocks_block-bg">
                                    <img src={hollandImg} alt=""/>
                                </div>
                                <h4 className="explore-blocks_block-title">Holland</h4>
                                <h4 className="explore-blocks_block_invisible-heading">higher education in Holland</h4>
                            </NavLink>
                        </div>
                        <div className="explore-blocks_block">
                           <NavLink onClick={Scroll} className="explore-blocks_block-link">
                               <div className="explore-blocks_block-bg">
                                   <img src={irelandImg} alt=""/>
                               </div>
                               <h4 className="explore-blocks_block-title">Ireland</h4>
                               <h4 className="explore-blocks_block_invisible-heading">higher education in Ireland</h4>
                           </NavLink>
                        </div>
                        <div className="explore-blocks_block">
                            <NavLink onClick={Scroll} className="explore-blocks_block-link">
                                <div className="explore-blocks_block-bg">
                                    <img src={spainImg} alt=""/>
                                </div>
                                <h4 className="explore-blocks_block-title">Spain</h4>
                                <h4 className="explore-blocks_block_invisible-heading">higher education in Spain</h4>
                            </NavLink>
                        </div>
                        <div className="explore-blocks_block">
                            <NavLink onClick={Scroll} className="explore-blocks_block-link">
                                <div className="explore-blocks_block-bg">
                                    <img src={italyImg} alt=""/>
                                </div>
                                <h4 className="explore-blocks_block-title">Italy</h4>
                                <h4 className="explore-blocks_block_invisible-heading">higher education in Italy</h4>
                            </NavLink>
                        </div>
                        <div className="explore-blocks_block">
                            <NavLink onClick={Scroll} className="explore-blocks_block-link">
                                <div className="explore-blocks_block-bg">
                                    <img src={canadaImg} alt=""/>
                                </div>
                                <h4 className="explore-blocks_block-title">Canada</h4>
                                <h4 className="explore-blocks_block_invisible-heading">higher education in Canada</h4>
                            </NavLink>
                        </div>
                        <div className="explore-blocks_block">
                            <NavLink className="explore-blocks_block-link">
                                <div className="explore-blocks_block-bg">
                                    <img src={cyprusImg} alt=""/>
                                </div>
                                <h4 className="explore-blocks_block-title">Cyprus</h4>
                                <h4 className="explore-blocks_block_invisible-heading">higher education in Cyprus</h4>
                            </NavLink>
                        </div>
                        <div className="explore-blocks_block">
                            <NavLink onClick={Scroll} className="explore-blocks_block-link">
                                <div className="explore-blocks_block-bg">
                                    <img src={chinaImg} alt=""/>
                                </div>
                                <h4 className="explore-blocks_block-title">China</h4>
                                <h4 className="explore-blocks_block_invisible-heading">higher education in Chine</h4>
                            </NavLink>
                        </div>
                        <div className="explore-blocks_block">
                            <NavLink onClick={Scroll} className="explore-blocks_block-link">
                                <div className="explore-blocks_block-bg">
                                    <img src={latviaImg} alt=""/>
                                </div>
                                <h4 className="explore-blocks_block-title">Latvia</h4>
                                <h4 className="explore-blocks_block_invisible-heading">higher education in Latvia</h4>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Explore;