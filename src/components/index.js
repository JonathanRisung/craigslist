import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./nav.css";


const Navbar = () => {

    const [isActive, setIsActive] = useState(false);

    const showMoreNav = () => {
        setIsActive(current => !current);
    };
    
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = () => {
        setLoggedIn(current => !current);
    };

    return (
        <nav className="nav">
            <div className="navmenu">
                <NavLink to="/" className="navlink">
                    <span className="mainNavActive">
                        <button id="moreNavBtn" onClick={showMoreNav}>≡</button> New York
                    </span>
                </NavLink>
                <NavLink to="*" className="navlink" style={{ display: isActive ? 'flex' : 'none'}}>
                    <span>Mnh</span>
                </NavLink>
                <NavLink to="*" className="navlink" style={{ display: isActive ? 'flex' : 'none'}}>
                    <span>Brk</span>
                </NavLink>
                <NavLink to="*" className="navlink" style={{ display: isActive ? 'flex' : 'none' }}>
                    <span>Que</span>
                </NavLink>
                <NavLink to="*" className="navlink" style={{ display: isActive ? 'flex' : 'none' }}>
                    <span>Brx</span>
                </NavLink>
                <NavLink to="*" className="navlink" style={{ display: isActive ? 'flex' : 'none' }}>
                    <span>Stn</span>
                </NavLink>
                <NavLink to="*" className="navlink" style={{ display: isActive ? 'flex' : 'none' }}>
                    <span>Jsy</span>
                </NavLink>
                <NavLink to="*" className="navlink" style={{ display: isActive ? 'flex' : 'none' }}>
                    <span>Lgi</span>
                </NavLink>
                <NavLink to="*" className="navlink" style={{ display: isActive ? 'flex' : 'none' }}>
                    <span>Wch</span>
                </NavLink>
                <NavLink to="*" className="navlink" style={{ display: isActive ? 'flex' : 'none' }}>
                    <span>Fct</span>
                </NavLink>

                <NavLink to="" className="navlink login" style={{ display: isActive ? 'none' : 'flex' }}>
                    <span onClick={handleLogin}>
                        {loggedIn ? "Profile" : "Login"}
                    </span>
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;