import React, { useEffect, useState } from 'react';
import logo from '../assets/Untitled.png';
import '../css/landingstyle.css';

function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else if (window.scrollY <= 1.5) {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        const headerHeight = document.querySelector('.head')?.offsetHeight || 70; // Get header height dynamically
        const offset = headerHeight + 20; // Add 20px extra offset
        if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: elementPosition - offset, // Scroll to position minus offset
                behavior: 'smooth',
            });
        }
    };

    return (
        <nav className={`head ${scrolled ? 'head-small' : ''}`}>
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="title">
                <ul>
                    <li className="programs-bg">
                        <a href="#" onClick={() => scrollToSection('programs')}>Programs</a>
                    </li>
                    <li className="about-bg">
                        <a href="#" onClick={() => scrollToSection('about')}>About</a>
                    </li>
                    <li className="plans-bg">
                        <a href="#" onClick={() => scrollToSection('plans')}>Plans</a>
                    </li>
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
