import React from 'react';
import '../styles/footer.css'
import footerHero from '../../assets/images/home1-bg-img14-645x500.jpg'
import logo from '../../assets/images/footer-logo.svg'
import starBg from '../../assets/images/footer-icon-bg.png'

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

                    {/* Links */}
                    <div className="footer-links nav-links flex flex-col gap-5 text-center">
                        <span><a href="#">Home</a></span>
                        <span><a href="#">About</a></span>
                        <span><a href="#">Services</a></span>
                        <span><a href="#">Portfolio</a></span>
                        <span><a href="#">Contact</a></span>
                    </div>

                    {/* -- Section 3 -- */}
                    <div className="footer-col footer-info">

                        <img src={starBg} alt="" />
                        <p>
                            At <a href="#" className='text-white font-semibold'>Floka</a>, we believe furniture should be more than just functional—it should tell your story. With a focus on timeless design, sustainable materials, and expert craftsmanship, we create pieces that feel personal.
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
            {/* -- Copyright -- */}
            <p className="copyright">
                © 2026 FLOKA. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;