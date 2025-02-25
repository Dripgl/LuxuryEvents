import React, { useState } from "react";
import "../style/Navbar.css";
import LogoMdf from "../assets/logo/LogoMdf.png";
import { Link } from "react-router-dom";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="frame-group">

            <div className="language-switch">
                <button
                    className="language-button"
                    onClick={() => alert("Lingua impostata su Italiano")}
                >
                    Italiano
                </button>
                /
                <button
                    className="language-button"
                    onClick={() => alert("Lingua impostata su Inglese")}
                >
                    Inglese
                </button>
            </div>

            <div className="nav-title">
                <Link to="/home">
                    <img className="img-logo" src={LogoMdf} alt="Logo" />
                </Link>
            </div>

            <div className={`hamburger ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/* Sliding Menu */}
            <div className={`menu ${isMenuOpen ? "menu-open" : ""}`}>
                <ul>
                    <li>
                        <Link to="/home" className="nav_link">
                            HOME
                        </Link>
                    </li>
                    <li>
                        <Link to="/ourWorld" className="nav_link">
                            WELCOME TO <span className="petiText_nav"> Our World </span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="nav_link">
                            ARCHITECTS OF TOMORROW
                        </Link>
                    </li>
                    <li className="petiText_nav">
                        <Link to="/travel" className="nav_link">
                            Journey With Us
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="nav_link">
                            ROMANTIC <span className="petiText_nav">"I Do's"</span> CURATORS
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="nav_link">
                            CONTACTS
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
