import React from 'react';
import "./Tabs.scss";
import {GoChevronDown} from "react-icons/go";
import {NavLink} from "react-router-dom";

const Tabs = () => {
    return (
        <div className="explore-tabs">
            <div className="explore-tabs_tab tab1">
                <input type="checkbox" id="toggle-input1"/>
                <label htmlFor="toggle-input1" className="explore-tabs_tab-label">
                    <span>Higher Education</span>
                    <GoChevronDown className="explore-tabs_tab-label_icon"/>
                </label>
                <div className="explore-tabs_tab-wrap">
                    <div className="explore-tabs_tab-wrap_block">
                        <NavLink>Secondary Education</NavLink>
                        <NavLink>Higher Education</NavLink>
                        <NavLink>Language courses for youth</NavLink>
                        <NavLink>Children's language camps</NavLink>
                    </div>
                </div>
            </div>
            <div className="explore-tabs_tab tab2">
                <input type="checkbox" id="toggle-input2"/>
                <label htmlFor="toggle-input2" className="explore-tabs_tab-label">
                    <span>Specialization</span>
                    <GoChevronDown className="explore-tabs_tab-label_icon"/>
                </label>
                <div className="explore-tabs_tab-wrap">
                    <div className="explore-tabs_tab-wrap_block">
                        <NavLink>IT Technologies</NavLink>
                        <NavLink>Bisiness</NavLink>
                        <NavLink>Medicine</NavLink>
                        <NavLink>International Relationships</NavLink>
                        <NavLink>Tourism</NavLink>
                    </div>
                </div>
            </div>
            <div className="explore-tabs_tab tab3">
                <input type="checkbox" id="toggle-input3"/>
                <label htmlFor="toggle-input3" className="explore-tabs_tab-label">
                    <span>Сountries</span>
                    <GoChevronDown className="explore-tabs_tab-label_icon"/>
                </label>
                <div className="explore-tabs_tab-wrap">
                    <div className="explore-tabs_tab-wrap_block">
                        <NavLink>America</NavLink>
                        <NavLink>Germany</NavLink>
                        <NavLink>Indonesia</NavLink>
                        <NavLink>South Korea</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tabs;