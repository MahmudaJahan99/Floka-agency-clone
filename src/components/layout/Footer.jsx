import React from 'react';
import '../styles/footer.css'
import footerHero from '../../assets/images/footer-models.jpg'
import logo from '../../assets/images/footer-logo.svg'
import starBg from '../../assets/images/star-bg.png'
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="section">
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
                    <div className="footer-links nav-links flex flex-col gap-5 text-center lg:justify-self-center">
                        <span><a href="#">Home</a></span>
                        <span><a href="#about">About</a></span>
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
                            <a href="#"><FaFacebookF /></a>
                            <a href="#"><FaXTwitter /></a>
                            <a href="#"><FaLinkedinIn /></a>
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