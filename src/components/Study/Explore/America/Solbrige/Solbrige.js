import React, {useState} from 'react';
import "./Solbrige.scss";
import solbrigeImg from "../../../../../image/solbridge-university.png";
import TabsStudy from "../../../ui/Tabs-study";

const Solbrige = () => {
    return (
        <div id="solbrige">
            <div className="container">
                <div className="solbrige">
                    <h1 className="solbrige-title">Solbrige University</h1>
                    <div className="solbrige-group">
                        <div className="solbrige-group_bg">
                            <img src={solbrigeImg} alt=""/>
                        </div>
                        <div className="solbrige-group_desc">
                            <div className="solbrige-group_desc-block">
                                <span>Location :</span>
                                <p>Australia,Milan,Rim</p>
                            </div>
                            <div className="solbrige-group_desc-block">
                                <span> Date of foundation :</span>
                                <p>1996</p>
                            </div>
                            <div className="solbrige-group_desc-block">
                                <span>Type of programs  :</span>
                                <p>Bachelor Course <br/> Magistracy</p>
                            </div>
                            <div className="solbrige-group_desc-block job-block">
                                <span>Specialities :</span>
                                <div className="solbrige-group_desc-block_wrap">
                                    <p>Fashion and Design</p>
                                    <p>Jewerly design</p>
                                    <p>Shoe design</p>
                                    <p>Interior design</p>
                                    <p>landscape design</p>
                                    <p>Car design</p>
                                    <p>Photography</p>
                                </div>
                            </div>
                            <div className="solbrige-group_desc-block">
                                <span>Language :</span>
                                <p>English,Italian</p>
                            </div>
                        </div>
                    </div>
                    <TabsStudy/>
                </div>
            </div>
        </div>
    );
};

export default Solbrige;