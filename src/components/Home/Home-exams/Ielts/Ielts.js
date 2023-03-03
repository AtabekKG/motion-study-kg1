import React from 'react';
import ieltsImg from "./../../../../image/Home-ielts.png";

const Ielts = () => {
    return (
        <div id="aptis">
            <div className="container">
                <div className="aptis">
                    <h1 className="aptis-title">What is IELTS?</h1>
                    <div className="aptis-line"></div>
                    <div className="aptis-bg">
                        <img src={ieltsImg} alt=""/>
                    </div>
                    <h2 className="aptis-h2">What Is IELTS? A Complete Introduction</h2>
                    <p className="p-1">Introduced in 1989, IELTS, the International English Language Testing System, is an English language proficiency test internationally recognized for testing English language ability in four categories:</p>
                    <ul className="aptis-list">
                        <li>Listening</li>
                        <li>Reading</li>
                        <li>Writing</li>
                        <li>Speaking</li>
                    </ul>
                    <h2 className="aptis-h2">Types Of IELTS test</h2>
                    <p className="p-2">Anyone can take the IELTS test irrespective of age, gender, race, nationality or religion. IELTS administrators (IDP or British Council) has set no age limit to take the IELTS test. This is one of the IELTS advantages. However, for candidates below 16 years, it is not recommended. Although if they wish, they can also take the test. Anyone who wishes to pursue higher studies abroad or work abroad can attempt the IELTS exam (Academic and General Training). However, candidates should always check the educational institution’s eligibility criteria or organization where they are applying.</p>
                    <ul className="aptis-list2">
                        <li>Reliable Experts: Developed by Cambridge experts and well supported by a strong research and development team, IELTS is the most trusted name for the English efficiency test.</li>
                        <li>Frequency of Test: Due to the tests’ easy availability, it is the most convenient for test-takers. It is available up to 4 dates a month.</li>
                        <li>Accepted by Most Organizations: More than 10,000 organizations globally trust IELTS and accept the score to validate language proficiency. accepted by over 8,000 universities, employers and immigration organizations worldwide</li>
                        <li>Face to Face Testing: It is known to be the fairest of all tests and is the only one that includes a face-to-face interaction.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Ielts;