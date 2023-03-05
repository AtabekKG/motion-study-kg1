import React from 'react';
import {NavLink} from "react-router-dom";
import "./Study.scss";
import studyImg from "./../../image/study-hero.png";
import {Scroll} from "../../Scroll/Scroll";

const Study = () => {
    return (
        <div id="study">
            <div className="container">
                <div className="study">
                    <div className="study-title">
                        <h1>Study Abroad</h1>
                        <div></div>
                    </div>
                    <div className="study-group">
                        <div className="study-group_bg">
                            <div className="study-group_bg-img">
                                <img src={studyImg} alt=""/>
                            </div>
                            <div className="study-group_bg-frame"></div>
                        </div>
                        <div className="study-group_desc">
                            <p className="study-group_desc-p"><b>Motion Study</b> for International Education
                                offers its clients various study abroad opportunities – language courses, secondary,
                                professional and higher education, professional development programmes for teachers and
                                specialists of companies and organizations.</p>
                            <ul>
                                <span><b>Our partners include:</b></span>
                                <li>Universities and higher education establishments.</li>
                                <li>Private schools and colleges.</li>
                                <li>State schools and colleges.</li>
                                <li>World known language schools for adults.</li>
                                <li>International language schools for 7-18 y.o. schoolchildren.</li>
                                <li>Business schools</li>
                                <li>Executive centres</li>
                                <li>Summer camps</li>
                                <li>Guardianship companies</li>
                            </ul>
                            <div className='btn-study'>
                                <NavLink to={"/Explore"} onClick={Scroll} className="study-group_desc-btn">Explore</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Study;