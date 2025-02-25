import React from "react";
import "../style/Footer.css";

import LogoMdf from "../assets/logo/LogoMdf.png";
import LogoIncentives from "../assets/logo/LogoIncentives.png";
import LogoTour from "../assets/logo/LogoTour.png";
import LogoWedding from "../assets/logo/LogoWedding.png";


function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="logo_container">
                    <img className="logo_principal" src={LogoMdf} alt="Logo" />

                    <div className="second_section">
                        <img className="logo_footer" src={LogoIncentives} alt="Logo" />
                        <img className="logo_footer" src={LogoTour} alt="Logo" />
                        <img className="logo_footer" src={LogoWedding} alt="Logo" />
                    </div>

                </div>

                <div className="footer-column">
                    <p><strong>MDF Incentives&Slow Tours di Maria di Fede</strong></p>
                    <p>Tel: +39 393 7735377</p>
                    <p>Address: VIA LANDOLINA, 21 - 95045, Misterbianco (CT)</p>
                    <p>P.IVA: 054536310878</p>
                </div>


                <div className="footer-column">
                    <p><strong>Navigate</strong></p>
                    <ul>
                        <li><a href="#">Incentives</a></li>
                        <li><a href="#">Slow Tours</a></li>
                        <li><a href="#">Weddings</a></li>
                        <li><a href="#">Mission</a></li>
                    </ul>
                </div>


                <div className="footer-column">
                    <p><strong>Info</strong></p>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Request</a></li>
                        <li><a href="#">Contacts</a></li>
                    </ul>
                </div>


                <div className="footer-column">
                    <p><strong>Legal Details</strong></p>
                    <ul>
                        <li><a href="#">Cookie Policy</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>


            <div className="footer-bottom">
                  <p>Designed by Se.Me.Te SRL</p>
                    <p>2025 Copyright MDF Incentives&Slow Tour</p>
                    <div>
                        <a href='' className='me-4 text-reset'>
                            <fab icon="facebook-f" />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <fab icon="google" />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <fab icon="instagram" />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <fab icon="linkedin" />
                        </a>
                    </div>
            </div>
        </footer>

    )
}


export default Footer;