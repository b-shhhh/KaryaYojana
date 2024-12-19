import React, { useEffect, useState } from 'react';
import logo from '../assets/Untitled.png';
import '../css/landingstyle.css';

function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) { // Scroll more than smth px
                setScrolled(true);
            } else if (window.scrollY <= 1.5) {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`head ${scrolled ? 'head-small' : ''}`}>
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="title">
                <ul>
                    <li className="programs-bg"><a href="#">Programs</a></li>
                    <li className="about-bg"><a href="#about">About</a></li>
                    <li className="plans-bg"><a href="#plans">Plans</a></li>
                </ul>
            </div>
            <div className="buttons">
                <a href="Signup.html">Signup</a>
                <a href="Login.html">Login</a>
                <span>|</span>
                <a href="Employer.html" id="empr">Employer Zone</a>
            </div>
        </nav>
    );
}

export default Header;
