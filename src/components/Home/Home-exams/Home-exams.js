import React from 'react';
import {NavLink} from "react-router-dom";
import "./Home-exams.scss";
import examsGirlImg from "./../../../image/Home-exams-girl2.png";
import examImg2 from "./../../../image/examscreen1.png";
import examImg3 from "./../../../image/Home-exams3.svg";
import examImg4 from "./../../../image/Home-exams4.svg";
import {Scroll} from "../../../Scroll/Scroll";

const HomeExams = () => {
    return (
        <>
            <div id="exams">
                <div className="container">
                    <div className="exams">
                        <h1 className="exams-title">exams</h1>
                        <p className="exams-p">Exams are tests that assess a person's knowledge, skills, aptitude, or other qualifications in a specific subject or area of study. They are used to evaluate academic performance.</p>
                        <div className="exams-group">
                            <div className="exams-group_block">
                                <div className="exams-group_block-bg">
                                    <img src={examsGirlImg} alt=""/>
                                </div>
                                <div className="exams-group_block-desc">
                                    <span className="exams-group_block-desc_subtitle">cambrige English exams</span>
                                    <h4 className="exams-group_block-desc_title">Your path to learning English, step by step.</h4>
                                    <p>Cambridge English Qualifications are in-depth exams
                                        that make learning English enjoyable, effective and rewarding.
                                        Our qualifications are based on research into effective
                                        teaching and learning.</p>
                                    <NavLink className="exams-group_block-desc_link" onClick={Scroll}
                                             to={"/Discover-more"}>Discover more</NavLink>
                                </div>
                            </div>
                            <div className="exams-group_blocks">
                                <div className="exams-group_blocks-block">
                                    <div className="exams-group_blocks-block_bg">
                                        <img src={examImg2} alt=""/>
                                    </div>
                                    <div className="exams-group_blocks-block_desc">
                                        <NavLink to={"/Aptis"} onClick={Scroll} className="exams-group_blocks-block_desc-link">aptis</NavLink>
                                        <h4>Choose Aptis for your assessment needs</h4>
                                        <p>Aptis is a computer basedtest which provides fast
                                            results reliably marked by our exsaminest.
                                        </p>
                                    </div>
                                </div>
                                <div className="exams-group_blocks-block">
                                    <div className="exams-group_blocks-block_bg">
                                        <img src={examImg3} alt=""/>
                                    </div>
                                    <div className="exams-group_blocks-block_desc">
                                        <NavLink to={"/Ielts"} onClick={Scroll} className="exams-group_blocks-block_desc-link">iELTS</NavLink>
                                        <h4>Here’s all you need to know about IELTS</h4>
                                        <p>IELTS (the International English Language Testing
                                            is the world’s most popular.
                                        </p>
                                    </div>
                                </div>
                                <div className="exams-group_blocks-block">
                                    <div className="exams-group_blocks-block_bg">
                                        <img src={examImg4} alt=""/>
                                    </div>
                                    <div className="exams-group_blocks-block_desc">
                                        <NavLink to={"/Other-exams"} onClick={Scroll} className="exams-group_blocks-block_desc-link">other exams</NavLink>
                                        <h4>There are a variety of competitive exams besides.</h4>
                                        <p>But covering them
                                            is no big deal. Just study ncert books for these.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeExams;