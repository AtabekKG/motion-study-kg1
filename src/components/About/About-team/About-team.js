import React from 'react';
import "./About-team.scss";
import about2 from "./../../../image/about3.png"
import about3 from "./../../../image/about4.png"
import about4 from "./../../../image/about5.png"
import about5 from "./../../../image/about6.png"
import about6 from "./../../../image/about7.png"
import about7 from "./../../../image/about8.png"
const AboutTeam = () => {
    return (
        <div id="our-team">
            <div className="container">
                <div className="our-team"><h1 className="our-team_title">Our Team</h1>
                    <div className="our-team_blocks">
                        <div className="our-team_blocks-block">
                            <div className="our-team_blocks-block_bg"><img src={about2} alt=""/>
                            </div>
                            <p>Miss.Anushin oont </p>
                            <span>CEO & co-Founder</span></div>
                        <div className="our-team_blocks-block">
                            <div className="our-team_blocks-block_bg">
                                <img src={about3} alt=""/></div>
                            <p>mr.Vishmas s. </p>                            <span>CTO & co-Founder</span>
                        </div>
                        <div className="our-team_blocks-block">
                            <div className="our-team_blocks-block_bg"><img src={about4} alt=""/>
                            </div>
                            <p>Miss.Tanisha kaduu </p>
                            <span>VP Of Technology</span></div>
                        <div className="our-team_blocks-block">
                            <div className="our-team_blocks-block_bg">
                                <img src={about5} alt=""/></div>
                            <p>Mr.KL Rahul </p>                            <span>Head of design</span>
                        </div>
                        <div className="our-team_blocks-block">
                            <div className="our-team_blocks-block_bg"><img src={about6} alt=""/>
                            </div>
                            <p>Miss.vashika g. </p>
                            <span>vP Of Finance</span></div>
                        <div className="our-team_blocks-block">
                            <div className="our-team_blocks-block_bg">
                                <img src={about7} alt=""/></div>
                            <p>Mr.Aryan Singh </p>                            <span>Head of Marketing</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
};
export default AboutTeam;