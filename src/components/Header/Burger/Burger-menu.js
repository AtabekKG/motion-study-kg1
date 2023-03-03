import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import './Burger.scss';
import {FaTelegramPlane} from "react-icons/fa";
import {AiFillInstagram} from "react-icons/ai";
import {FiPhoneCall} from "react-icons/fi";
import {MdEmail} from "react-icons/md";

const BurgerMenu = () => {
    const [isBurger, setIsBurger] = useState(false);

    return (
        <div id="burger">
            <div className="container">
                <div className="burger">
                    <div onClick={() => setIsBurger(true) } className="burger-menu">
                        <div className="burger-menu_lg-line"></div>
                        <div className="burger-menu_sm-line"></div>
                    </div>
                </div>
            </div>
            {isBurger && (
                <>
                    <div className="burger-content">
                        <div className="burger-content_close" onClick={() => setIsBurger(false)}>
                            <div className="burger-content_close-first"></div>
                            <div className="burger-content_close-second"></div>
                        </div>
                        <nav className="burger-content_nav">
                            <NavLink className="burger-content_nav-item" to={"/Home"} onClick={() => setIsBurger(false)}>
                                Home
                            </NavLink>
                            <NavLink className="burger-content_nav-item" to={"/About"} onClick={() => setIsBurger(false)}>
                                About Us
                            </NavLink>
                            <NavLink className="burger-content_nav-item" to={"/Study"} onClick={() => setIsBurger(false)}>
                                Study Abroad
                            </NavLink>
                            <NavLink className="burger-content_nav-item" onClick={() => setIsBurger(false)}>
                                Contacts
                            </NavLink>
                        </nav>
                        <div className="burger-content_lang-block">
                            <button>EN</button>
                            <button>RU</button>
                            <button>KG</button>
                        </div>
                        <div className="burger-content_icons">
                            <FaTelegramPlane className="burger-content_icons-icon"/>
                            <AiFillInstagram className="burger-content_icons-icon"/>
                            <FiPhoneCall className="burger-content_icons-icon"/>
                            <MdEmail className="burger-content_icons-icon"/>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default BurgerMenu;