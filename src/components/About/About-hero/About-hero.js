import React from 'react';
import "./About-hero.scss";
import about1 from "../../../image/aboutus1.png";

const AboutHero = () => {
    return (<div id="about-hero">
        <div className="container">
            <div className="about-hero">
                <div className="about-hero_bg"><img src={about1} alt=""/>
                </div>
                <div className="about-hero_desc">
                    <span className="about-hero_desc-subtitle">About Us</span>                        <h1
                    className="about-hero_desc-title">Best Education Platform</h1>
                    <span className="about-hero_desc-bold">Apparently we had reached a great height in the atmosphere, for the sky was a dead black.</span>
                    <p>By the same illusion which lifts the horizon of the sea to the level of the spectator on a
                        hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle.</p>
                </div>
                <div className="about-hero_frame"></div>
            </div>
        </div>
    </div>);
};
export default AboutHero;