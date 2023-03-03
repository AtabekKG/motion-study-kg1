import React from 'react';
import "./Other-exams.scss";
import otherExamsImg from "./../../../../image/Home-other-exams.png";

const OtherExams = () => {
    return (
        <div id="other-exams">
            <div className="container">
                <div className="other-exams">
                    <h1 className="other-exams_title">Other exams</h1>
                    <div className="other-exams_line"></div>
                    <div className="other-exams_bg">
                        <img src={otherExamsImg} alt=""/>
                    </div>
                    <h2 className="other-exams_h2">Paper Exams –Third party</h2>
                    <p>Our office is also willing to proctor paper exams on behalf of other schools or private
                        institutions. Please keep the following in mind:</p>
                    <ul className="other-exams_list list-1">
                        <li> Send over any proctor agreements as quickly as possible to avoid delays. You can e-mail us
                            at:
                        </li>
                        <li> When scheduling an exam, please allow time for the exam to be mailed to us.
                        </li>
                        <li> Some schools & institutions require the client (you) to pay for return shipping. Please
                            bring an envelope & postage for us to use.
                        </li>
                        <li> Consider the time needed to mail the exam (each way) and grade the exam when scheduling
                            appointments on tight deadlines
                        </li>
                    </ul>
                    <h2>ID Requirements</h2>
                    <ul className="other-exams_list list-2">
                        <li className="bold">Each school & institution is different, consequently ID requirements are set by the school we proctor for. We encourage you to reach out to your program to find out what form of ID you need.</li>
                    </ul>
                    <h2>Frequently Asked Questions</h2>
                    <ul className="other-exams_list list-3">
                        <li className="title">Where can I park?</li>
                        <li>Parking information including instructions on how to pay for parking can be found [here].</li>
                        <li className="title">What do I need to bring?</li>
                        <li>You will need to bring proper identification (see above) and a good attitude! A small snack or water is also encouraged. We will have everything else you will need to take the test.</li>
                        <li className="title">How long is the exam?</li>
                        <li>The exam time is dependent on the exam itself. Every exam we do for others' schools is different and a UT High School test is certainly different from the University of Buffalo.</li>
                        <li className="title">Where will I store my personal belongings during the test?</li>
                        <li>You will be provided a secure locker for your personal belongings before testing begins</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default OtherExams;