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
                    <a className="logo" href="#">
                        <img src={logo} alt="Logo of Floka" className='w-3/5' />
                    </a>

                    {/* Links */}
                    <div className="nav-links text-xl">
                        <a href="#">Home</a>
                        <a href="#about">About</a>
                        <a href="#services">Services</a>
                        <a href="#contact">Contact</a>
                    </div>

                    <div className="menu-toggle" onClick={toggleMenu}>
                        {isOpen ? <IoCloseOutline /> : <CiMenuFries />}
                    </div>

                </div>

                {/* Mobile Menu */}
                <div className={`mobile-menu text-xl ${isOpen ? 'active' : ''}`}>
                    <a href="#" onClick={closeMenu}>Home</a>
                    <a href="#about" onClick={closeMenu}>About</a>
                    <a href="#services" onClick={closeMenu}>Services</a>
                    <a href="#contact" onClick={closeMenu}>Contact</a>
                </div>
            </nav>

            {/* Overlay */}
            <div className={`overlay ${isOpen ? 'active' : ''}`} onClick={closeMenu}></div>
        </>

    );
};

export default Navbar;