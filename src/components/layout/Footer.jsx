import React from 'react';
import '../styles/footer.css'
import footerHero from '../../assets/images/home1-bg-img14-645x500.jpg'
import logo from '../../assets/images/footer-logo.svg'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-box">
                {/* -- Top Title -- */}
                <div className="footer-heading">
                    <p>
                        Let's
                        <br></br>
                        connect
                    </p>
                </div>

                {/* -- Content -- */}
                <div className="footer-content">

                    {/* -- Section 1 -- */}
                    <div className="footer-img-container">
                        <div className='footer-img-wrapper'>
                            <img src={footerHero} className="main-img" />
                            <img src={logo} className="footer-logo-img" />
                        </div>

                        <div className='footer-logo-heading'>
                            <h3 className="brand-text">FLOKA</h3>
                        </div>

                    </div>

                    {/* -- Section 2 -- */}
                    <div className="footer-col footer-links">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                    {/* -- Section 3 -- */}
                    <div className="footer-col footer-info">
                        <div className="info-bg">
                            <p>
                                At <span>Floka</span>, we believe furniture should be more than just functional—it should tell your story. With a focus on timeless design, sustainable materials, and expert craftsmanship, we create pieces that feel personal.
                            </p>

                            <div className="address">
                                <p>info@floka.com</p>
                                <p>+123 456 789 10</p>
                                <p>12/A, Dhaka, Bangladesh</p>
                            </div>

                            <div className="socials">
                                <a href="#">F</a>
                                <a href="#">T</a>
                                <a href="#">L</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* -- Copyright -- */}
            <p className="copyright">
                © 2026 FLOKA. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;