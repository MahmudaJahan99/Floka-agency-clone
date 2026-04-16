import React, { useEffect, useState } from 'react';
import '../styles/navbar.css';
import { CiMenuFries } from 'react-icons/ci';
import { IoCloseOutline } from 'react-icons/io5';
import logo from '../../assets/images/logo.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    }, [isOpen])

    return (
        <>
            <nav className="navbar dark-font inter-font">
                <div className="nav-container">
                    {/* Logo */}
                    <div className="logo">
                        <img src={logo} alt="Logo of Floka" className='w-3/5' />
                    </div>

                    {/* Links */}
                    <div className="nav-links">
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Services</a>
                        <a href="#">Contact</a>
                    </div>

                    <div className="menu-toggle" onClick={toggleMenu}>
                        {isOpen ? <IoCloseOutline /> : <CiMenuFries />}
                    </div>

                </div>

                {/* Mobile Menu */}
                <div className={`mobile-menu dark-font ${isOpen ? 'active' : ''}`}>
                    <a href="#" onClick={closeMenu}>Home</a>
                    <a href="#" onClick={closeMenu}>About</a>
                    <a href="#" onClick={closeMenu}>Services</a>
                    <a href="#" onClick={closeMenu}>Contact</a>
                </div>
            </nav>

            {/* Overlay */}
            <div className={`overlay ${isOpen ? 'active' : ''}`} onClick={closeMenu}></div>
        </>

    );
};

export default Navbar;