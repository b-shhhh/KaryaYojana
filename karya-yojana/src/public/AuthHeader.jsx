import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/Untitled.png';
import '../css/Signup.css';

function AuthHeader() {
    const location = useLocation();

    // Check the current route
    const isLoginPage = location.pathname === '/login';

    return (
        <nav className="head-small">
            <Link to="/">
            <div className="logo">
                <img src={logo} alt="KaryaYojana" />
            </div>
            </Link>
            <div className="title">
                <ul>
                    <li>
                        {/* Toggle the Link text and route */}
                        <Link to={isLoginPage ? '/signup' : '/login'}>
                            {isLoginPage ? 'Signup' : 'Login'}
                        </Link>
                    </li>
                    <li>
                        <a href="#">Employer Zone</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default AuthHeader;
