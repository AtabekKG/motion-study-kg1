import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import "./Tabs-study.scss";
import ThirdContent from "./Third-content/Third-content";
import SecondContent from "./Second-content/Second-content";
import FirstContent from "./First-content/First-content";

const TabsStudy = () => {
    const [index, setIndex] = useState(0);

    return (
        <div className="tabs">
            <div className="tabs-headings">
                <div className={`tabs-headings_heading ${index === 0}`} onClick={() => {
                    setIndex(0)
                }}>
                    <span>Description</span>
                </div>
                <div className={`tabs-headings_heading ${index === 1}`} onClick={() => {
                    setIndex(1)
                }}>
                    <span> Cost</span>
                </div>
                <div className={`tabs-headings_heading ${index === 2}`} onClick={() => {
                    setIndex(2)
                }}>
                    <span>Photo</span>
                </div>
            </div>
            <div className="tabs-content" hidden={index !== 0}>
                <div className="line-tab" hidden={index !== 0}></div>
                <FirstContent/>
            </div>
            <div className="tabs-content" hidden={index !== 1}>
                <div className="line-tab2"></div>
                <SecondContent/>
            </div>
            <div className="tabs-content" hidden={index !== 2}>
                <div className="line-tab3"></div>
                <ThirdContent/>
            </div>
        </div>
    );
};

export default TabsStudy;