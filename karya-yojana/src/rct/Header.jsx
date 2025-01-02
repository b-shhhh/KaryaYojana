import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Untitled.png';
import '../css/landingstyle.css';

function Header() {
    const [scrolled, setScrolled] = useState(false);

    // Dynamically set scroll state when the component is rendered
    if (typeof window !== 'undefined') {
        window.onscroll = () => {
            if (window.scrollY > 10 && !scrolled) {
                setScrolled(true);
            } else if (window.scrollY <= 1.5 && scrolled) {
                setScrolled(false);
            }
        };
    }

    const scrollToSection = (e, id) => {
        e.preventDefault(); // Prevent default anchor behavior
        const element = document.getElementById(id);
        const headerHeight = document.querySelector('.head')?.offsetHeight || 70; // Get header height dynamically
        const offset = headerHeight + 5; // Add 5px extra offset
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
                        <a href="#" onClick={(e) => scrollToSection(e, 'about')}>About</a>
                    </li>
                    <li className="plans-bg">
                        <a href="#" onClick={(e) => scrollToSection(e, 'plans')}>Collaborators</a>
                    </li>
                </ul>
            </div>
            <div className="buttons">
                <Link to="../signup">Signup</Link>
                <Link to="../login">Login</Link>
                <span>|</span>
                <Link to="../Empsignup">Employer Zone</Link>
            </div>
        </nav>
    );
}

export default Header;
