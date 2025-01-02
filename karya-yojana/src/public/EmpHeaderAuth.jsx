import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/Untitled.png';
import '../css/Signup.css';

function EmpHeader() {
    const location = useLocation();

    // Check the current route
    const isLoginPage = location.pathname === '/EmpLogin';

    return (
        <nav className="head-small">
            <Link to="/" onClick={() => {
            window.location.href = "/";
        }}>
            <div className="logo">
                <img src={logo} alt="KaryaYojana" />
            </div>
            </Link>
            <div className="title">
                <ul>
                    <li>
                        {/* Toggle the Link text and route */}
                        <Link to={isLoginPage ? '/Empsignup' : '/EmpLogin'}>
                            {isLoginPage ? 'EmpSignup' : 'EmpLogin'}
                        </Link>
                    </li>
                    <li>
                        <Link to='/signup'>Applicant Zone</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default EmpHeader;
