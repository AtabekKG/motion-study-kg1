import React, {useState} from 'react';
import OutsideClickHandler from "react-outside-click-handler";
import "./Home-form.scss";
import {FiPhoneCall} from "react-icons/fi";
import {TfiEmail} from "react-icons/tfi";
import {FaFacebookF, FaTelegramPlane} from "react-icons/fa";
import {BsInstagram, BsWhatsapp} from "react-icons/bs";
import {SlLink} from "react-icons/sl";

const HomeForm = () => {
    const [isSocialModal, setIsSocialModal] = useState(false);

    return (
        <div id="info">
            <div className="container">
                <div className="info">
                    <form className="info-form">
                        <h2 className="info-form_title">Send a message</h2>
                        <div className="info-form_group">
                            <input type="text" placeholder="First Name" className="input1"/>
                            <input type="text" placeholder="Last Name" className="input2"/>
                            <input type="tel" placeholder="phone" className="input3"/>
                            <input type="email" placeholder="email" className="input4"/>
                            <input className="info-form_group_last-input" type="text" placeholder="Group or Company"/>
                        </div>
                        <textarea className="info-form_comment" placeholder="how can we help?"></textarea>
                        <button className="info-form_btn">Submit</button>
                    </form>
                    <div className="info-address">
                        <h4>Contact Info</h4>
                        <div className="info-address_group">
                            <FiPhoneCall className="info-address_group-icon"/>
                            <span>+996 500 34 84 39</span>
                        </div>
                        <div className="info-address_group">
                            <TfiEmail className="info-address_group-icon"/>
                            <span>motionweb312@gmail.com</span>
                        </div>
                        <div className="info-address_icons">
                            <FaTelegramPlane className="info-address_icons-icon"/>
                            <BsWhatsapp className="info-address_icons-icon"/>
                            <BsInstagram className="info-address_icons-icon"/>
                        </div>
                        <div className="info-address_location">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11694.684516598785!2d74.56904770781252!3d42.87978510000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec9fc655f0bb9%3A0x20d210594faeb18!2sMotion%20Web!5e0!3m2!1sen!2skg!4v1675928666347!5m2!1sen!2skg"
                                allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>
                    <div className="info_social-links">
                        <button onClick={() => setIsSocialModal(true)} className="info_social-links_circle">
                            <SlLink className="info_social-links_circle-icon"/>
                        </button>
                    </div>
                    <div onClick={() => setIsSocialModal(true)} className="info_social-links2">
                        <button className="info_social-links2_circle">
                            <SlLink className="info_social-links2_circle-icon"/>
                        </button>
                        <span>Copy the link</span>
                    </div>
                </div>
            </div>
            {isSocialModal && (
                <div id="social-modal">
                    <OutsideClickHandler onOutsideClick={() => setIsSocialModal(false)}>
                        <div className="social-modal">
                            <h2>Send</h2>
                            <p className="social-modal_invisible-p">Share this site with your friends</p>
                            <div className="social-modal_icons">
                                <div className="social-modal_icons-block whatsapp">
                                    <BsWhatsapp className="social-modal_icons-block_icon"/>
                                </div>
                                <div className="social-modal_icons-block instagram">
                                    <BsInstagram className="social-modal_icons-block_icon"/>
                                </div>
                                <div className="social-modal_icons-block facebook">
                                    <FaFacebookF className="social-modal_icons-block_icon"/>
                                </div>
                                <div className="social-modal_icons-block telegram">
                                    <FaTelegramPlane className="social-modal_icons-block_icon"/>
                                </div>
                            </div>
                            <button onClick={() => setIsSocialModal(false)} className="social-modal_btn">Done</button>
                        </div>
                    </OutsideClickHandler>
                </div>
            )}
        </div>
    );
};

export default HomeForm;