import React from 'react';
import {NavLink} from "react-router-dom";
import {SlLocationPin} from "react-icons/sl";
import "./America.scss";
import americaImg1 from "./../../../../image/america1.png";
import americaImg2 from "./../../../../image/america2.png";
import americaImg3 from "./../../../../image/america3.png";
import americaImg4 from "./../../../../image/america4.png";
import americaImg5 from "./../../../../image/america5.png";
import americaImg6 from "./../../../../image/america6.png";
import americaImg7 from "./../../../../image/america8.png";
import Tabs from "../../Tabs/Tabs";
import {Scroll} from "../../../../Scroll/Scroll";

const America = () => {
    return (
        <div id="america">
            <div className="container">
                <div className="america">
                    <h1 className="america-title">United Stated</h1>
                    <Tabs/>
                    <div className="america-blocks">
                        <div className="america-blocks_block">
                            <div className="america-blocks_block-bg">
                                <img src={americaImg1} alt=""/>
                            </div>
                            <NavLink to={"/Solbrige"} className="america-blocks_block-name">
                                <span>Name:</span>
                                <h3>Solbrige University</h3>
                            </NavLink>
                            <div className="america-blocks_block-location">
                                <div className="america-blocks_block-location_group">
                                    <span>Location</span>
                                    <SlLocationPin className="america-blocks_block-location_group-icon"/>
                                </div>
                                <p>Perth</p>
                            </div>
                            <div className="america-blocks_block-age">
                                <span>Age:</span>
                                <p>From 16</p>
                            </div>
                        </div>
                        <div className="america-blocks_block">
                            <div className="america-blocks_block-bg">
                                <img src={americaImg2} alt=""/>
                            </div>
                            <NavLink to={"/Solbrige"} onClick={Scroll} className="america-blocks_block-name">
                                <span>Name:</span>
                                <h3>La Trobe University</h3>
                            </NavLink>
                            <div className="america-blocks_block-location">
                                <div className="america-blocks_block-location_group">
                                    <span>Location</span>
                                    <SlLocationPin className="america-blocks_block-location_group-icon"/>
                                </div>
                                <p>Riga</p>
                            </div>
                            <div className="america-blocks_block-age">
                                <span>Age:</span>
                                <p>From 16</p>
                            </div>
                        </div>
                        <div className="america-blocks_block">
                            <div className="america-blocks_block-bg">
                                <img src={americaImg3} alt=""/>
                            </div>
                            <NavLink to={"/Solbrige"} onClick={Scroll} className="america-blocks_block-name">
                                <span>Name:</span>
                                <h3>TSI University</h3>
                            </NavLink>
                            <div className="america-blocks_block-location">
                                <div className="america-blocks_block-location_group">
                                    <span>Location</span>
                                    <SlLocationPin className="america-blocks_block-location_group-icon"/>
                                </div>
                                <p>Riga</p>
                            </div>
                            <div className="america-blocks_block-age">
                                <span>Age:</span>
                                <p>From 16</p>
                            </div>
                        </div>
                        <div className="america-blocks_block">
                            <div className="america-blocks_block-bg">
                                <img src={americaImg4} alt=""/>
                            </div>
                            <NavLink to={"/Solbrige"} onClick={Scroll} className="america-blocks_block-name">
                                <span>Name:</span>
                                <h3>Solbrige University</h3>
                            </NavLink>
                            <div className="america-blocks_block-location">
                                <div className="america-blocks_block-location_group">
                                    <span>Location</span>
                                    <SlLocationPin className="america-blocks_block-location_group-icon"/>
                                </div>
                                <p>Perth</p>
                            </div>
                            <div className="america-blocks_block-age">
                                <span>Age:</span>
                                <p>From 16</p>
                            </div>
                        </div>
                        <div className="america-blocks_block">
                            <div className="america-blocks_block-bg">
                                <img src={americaImg5} alt=""/>
                            </div>
                            <NavLink to={"/Solbrige"} onClick={Scroll} className="america-blocks_block-name">
                                <span>Name:</span>
                                <h3>Edith University</h3>
                            </NavLink>
                            <div className="america-blocks_block-location">
                                <div className="america-blocks_block-location_group">
                                    <span>Location</span>
                                    <SlLocationPin className="america-blocks_block-location_group-icon"/>
                                </div>
                                <p>Melbourne</p>
                            </div>
                            <div className="america-blocks_block-age">
                                <span>Age:</span>
                                <p>From 16</p>
                            </div>
                        </div>
                        <div className="america-blocks_block">
                            <div className="america-blocks_block-bg">
                                <img src={americaImg6} alt=""/>
                            </div>
                            <NavLink to={"/Solbrige"} onClick={Scroll} className="america-blocks_block-name">
                                <span>Name:</span>
                                <h3>DCU University</h3>
                            </NavLink>
                            <div className="america-blocks_block-location">
                                <div className="america-blocks_block-location_group">
                                    <span>Location</span>
                                    <SlLocationPin className="america-blocks_block-location_group-icon"/>
                                </div>
                                <p>Riga</p>
                            </div>
                            <div className="america-blocks_block-age">
                                <span>Age:</span>
                                <p>From 16</p>
                            </div>
                        </div>
                        <div className="america-blocks_block">
                            <div className="america-blocks_block-bg">
                                <img src={americaImg7} alt=""/>
                            </div>
                            <NavLink to={"/Solbrige"}  onClick={Scroll}className="america-blocks_block-name">
                                <span>Name:</span>
                                <h3>Cowan University</h3>
                            </NavLink>
                            <div className="america-blocks_block-location">
                                <div className="america-blocks_block-location_group">
                                    <span>Location</span>
                                    <SlLocationPin className="america-blocks_block-location_group-icon"/>
                                </div>
                                <p>Boston</p>
                            </div>
                            <div className="america-blocks_block-age">
                                <span>Age:</span>
                                <p>From 16</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default America;