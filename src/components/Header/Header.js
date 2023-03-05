import React, {useEffect, useState} from "react";
import OutsideClickHandler from 'react-outside-click-handler';
import {Link, NavLink} from "react-router-dom";
import "./Header.scss";
import Logo from "./../../image/logo.svg";
import {CiSearch} from "react-icons/ci";
import BurgerMenu from "./Burger/Burger-menu.js";
import {Scroll} from "../../Scroll/Scroll";

const Header = () => {
    const [searchContent, setSearchContent] = useState(false);
    const [load, setLoad] = useState(true)

    useEffect(() => {
        setLoad(true)

        setTimeout(() => {
            setLoad(false)
        }, 3100)
    }, [])

    return (
        <>
            <header id="header" style={{
                display: load ? 'none' : 'block'
            }}>
                <div className="container">
                    <div className="header">
                        <div className="header-logo">
                            <NavLink to={"/"}>
                                <img src={Logo} alt={'#'}/>
                            </NavLink>
                        </div>
                        <div className="header-right">
                            <nav className="header-right_nav">
                                <NavLink className="header-right_nav-item" to={"/"}>
                                    <span>Home</span>
                                    <div className="nav-circle"></div>
                                </NavLink>
                                <NavLink onClick={Scroll} className="header-right_nav-item" to={"/About"}>
                                    <span>About Us</span>
                                    <div className="nav-circle"></div>
                                </NavLink>
                                <NavLink onClick={Scroll} className="header-right_nav-item" to={"/Study"}>
                                    <span>Study Abroad</span>
                                    <div className="nav-circle"></div>
                                </NavLink>
                                <Link onClick={Scroll} to={'/'} className="header-right_nav-item">
                                    <span>Contacts</span>
                                    <div className="nav-circle"></div>
                                </Link>
                            </nav>
                            <NavLink to={"/America"} onClick={() => setSearchContent(true)}
                                     className="header-right_search">
                                <CiSearch className="header-right_search-icon"/>
                                <input className="header-right_search-input" style={{
                                    outline: searchContent ? 'none' : '',
                                    border: searchContent ? 'none' : '',
                                }} type="text" placeholder="Поиск..."/>
                                {searchContent && (
                                    <OutsideClickHandler
                                        onOutsideClick={() => setSearchContent(false)}
                                    >
                                        <div id="search-wrap">
                                            <div className="search-content">
                                                <NavLink to={'#'} className="search-content_item">United States</NavLink>
                                                <NavLink to={'#'} className="search-content_item">Korea</NavLink>
                                                <NavLink to={'#'} className="search-content_item">Australia</NavLink>
                                                <NavLink to={'#'} className="search-content_item">Malaysia</NavLink>
                                                <NavLink to={'#'} className="search-content_item">Germany</NavLink>
                                            </div>
                                        </div>
                                    </OutsideClickHandler>
                                )}
                            </NavLink>
                            <div className="header-right_langs">
                                <select>
                                    <option>ENG</option>
                                    <option>RU</option>
                                    <option>KG</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <BurgerMenu/>
        </>
    );
};

export default Header;
