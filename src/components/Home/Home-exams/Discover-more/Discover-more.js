import React from 'react';
import "./Discover-more.scss";
import discoverImg from "./../../../../image/Home-discover-more.png";
import {BsCheckLg} from "react-icons/bs";

const DiscoverMore = () => {
    return (
        <div id="discover">
            <div className="container">
                <div className="discover">
                    <h1 className="discover-title">Cambridge English Exam</h1>
                    <div className="discover-line"></div>
                    <div className="discover-bg">
                        <img src={discoverImg} alt=""/>
                    </div>
                    <h2 className="discover-h2">Who are the Cambridge English exams for?.</h2>
                    <p className="p-1">The Cambridge English exams are strongly recommended for anyone who plans to work in
                        international business or study and/or work overseas. Wherever life takes you, you will be able
                        to prove your English level with your Cambridge Certificate</p>
                    <h2 className="discover-h2">What do the Cambridge exams involve?</h2>
                    <h3 className="discover-h3">Official recognition</h3>
                    <p>Cambridge English Qualifications are accepted worldwide. They are a mark of excellence trusted by
                        thousands of leading higher education institutions, governments and employers. With a Cambridge
                        English Qualification, you'll open doors to a world of opportunities – literally!</p>
                    <p className="p-3"> When you pass the exam, you'll be awarded a certificate delivered by Cambridge Assessment
                        English, the ESOL accreditation body of the University of Cambridge. Each year, more than
                        300,000 people from over 100 different countries choose to sit a Cambridge exam\.</p>
                    <p>Depending on the level you are looking to achieve, you might choose from one of the following
                        exam preparation courses:
                    </p>
                    <ul className="discover-list">
                        <div>
                            <BsCheckLg className="discover-list_icon"/>
                            <li className="discover-list_item">B2 First (FCE)</li>
                        </div>
                        <div>
                            <BsCheckLg className="discover-list_icon"/>
                            <li className="discover-list_item">C1 Advanced (CAE)</li>
                        </div>
                        <div>
                            <BsCheckLg className="discover-list_icon"/>
                            <li className="discover-list_item">C2 Proficiency (CPE)</li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DiscoverMore;