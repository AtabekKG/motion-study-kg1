import React from 'react';
import "./First-content.scss";
import solbrigeTabImg from "./../../../../image/solbrigetab.svg";
import tabBlock1 from "./../../../../image/tabblock1.svg";
import tabBlock2 from "./../../../../image/tabblock2.svg";
import {BsInstagram, BsWhatsapp} from "react-icons/bs";
import {FaTelegramPlane} from "react-icons/fa";

const FirstContent = () => {
    return (
        <div className="description">
            <div className="description-desc">
                <div className="description-desc_group">
                    <div className="description-desc_group-bg">
                        <img src={solbrigeTabImg} alt=""/>
                    </div>
                    <div className="description-desc_group-desc">
                        <h2>landscape design</h2>
                        <p>University of Fashion and Design</p>
                    </div>
                </div>
                <div className="description-desc_desc">
                    <div className="description-desc_desc-group group-1">
                        <span>Nominal duration: </span>
                        <p>4.5 years(240 ECTS)</p>
                    </div>
                    <div className="description-desc_desc-group group-2">
                        <span>Awards:</span>
                        <p><b>B.Sc.</b> (Professional Bachelor’s degree in Business Management, qualification:
                            Business Manager or E-Business Manager)</p>
                    </div>
                    <div className="description-desc_desc-group group-3">
                        <span>Tuition fee:</span>
                        <p className="short-line1">€1,400 per semester
                            US$1,502.87</p>
                    </div>
                    <div className="description-desc_desc-group group-4">
                        <span>Application fee:</span>
                        <p className="short-line1">€120 one-time
                            US$128.83</p>
                    </div>
                    <div className="description-desc_desc-group group-5">
                        <span>Registration fee:</span>
                        <p>
                            <p className="first-p">US$150 one-time</p>
                            You need to choose student status:
                            Base – 150 USD
                            Standard – 500 USD
                            VIP – 900 USD
                        </p>
                    </div>
                    <div className="description-desc_desc-group group-6">
                        <span>Tuition fee:</span>
                        <p className="short-line1">
                            <b>High school / secondary education (or higher)</b>
                            Completed Secondary Education ( 12 years, in some countries 11 years)</p>
                    </div>
                    <div className="description-desc_desc-group">
                        <span>Entry qualication:</span>
                        <p className="entry-parag">The entry qualification documents are accepted in the following languages: English /
                            Lithuanian.Often you can get a suitable transcript from your school. If this is not the
                            case, you will need official translations along with verified copies of the
                            original.</p>
                    </div>
                </div>
            </div>
            <div className="description-block">
                <div className="description-block_top">
                    <p><span>Apply Now!!!</span> Fall semester 2023</p>
                </div>
                <div className="description-block_group">
                    <div className="description-block_group-bg">
                        <img src={tabBlock1} alt=""/>
                    </div>
                    <div className="description-block_group-desc">
                        <span>Pre-deadline</span>
                        <p className="p1">20 Jun 2023, 23:59:59Eastern European Time</p>
                        <p>Please ask your manager in Baltic Center about correct deadline for your country</p>
                    </div>
                </div>
                <div className="description-block_group">
                    <div className="description-block_group-bg">
                        <img src={tabBlock1} alt=""/>
                    </div>
                    <div className="description-block_group-desc">
                        <span>Application deadline</span>
                        <p className="p1">31 Aug 2023, 23:59:59Eastern European Time</p>
                        <p> Autumn Intake</p>
                    </div>
                </div>
                <div className="description-block_group">
                    <div className="description-block_group-bg">
                        <img src={tabBlock2} alt=""/>
                    </div>
                    <div className="description-block_group-desc">
                        <span>Studies commence</span>
                        <p>4 Sept 2023</p>
                    </div>
                </div>
                <div className="description-block_block">
                    <span>Apply Now!!!</span>
                    <p>Spring semester 2023</p>
                </div>
                <div className="description-block_message">
                    <div className="description-block_message-circle">
                        !
                    </div>
                    <p>Application period has ended</p>
                </div>
                <div className="description-block_group group3">
                    <div className="description-block_group-bg">
                        <img src={tabBlock2} alt=""/>
                    </div>
                    <div className="description-block_group-desc">
                        <span>Studies commence</span>
                        <p>4 Sept 2023</p>
                    </div>
                </div>
                <div className="description-block_social">
                    <span>Share on:</span>
                    <div className="description-block_social-blocks">
                        <div className="description-block_social-blocks_circle whatsapp">
                            <BsWhatsapp className="description-block_social-blocks_circle-icon"/>
                        </div>
                        <div className="description-block_social-blocks_circle instagram">
                            <BsInstagram className="description-block_social-blocks_circle-icon"/>
                        </div>
                        <div className="description-block_social-blocks_circle telegram">
                            <FaTelegramPlane className="description-block_social-blocks_circle-icon"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FirstContent;