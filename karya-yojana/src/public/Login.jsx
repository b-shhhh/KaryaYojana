import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css';

function LoginApplicant() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const togglePasswordVisibility = () => {
        setPasswordVisible((prevState) => !prevState);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Get user input
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
    
        // Retrieve stored user data from localStorage
        const storedUserData = JSON.parse(localStorage.getItem('userData'));
    
        // Authentication logic
        if (storedUserData && storedUserData.email === email && storedUserData.password === password) {
            navigate('/ApplicantHome');
            setPasswordError('Email or Password correct!');
            // Redirect user after successful login
            // You can use `useNavigate` or update the state to indicate successful login
        } else {
            setPasswordError('Email or Password isnt correct!');
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="login-form-box">
                    <form className="login-form" onSubmit={handleSubmit}>
                        <h1>Login</h1>

                        <div className="login-input-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                required
                                aria-label="Email"
                            />
                        </div>

                        <div className="login-input-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type={passwordVisible ? 'text' : 'password'}
                                id="password"
                                name="password"
                                placeholder="Password"
                                required
                                aria-label="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="login-show-password-btn"
                                aria-label="Toggle password visibility"
                            >
                                {passwordVisible ? 'Hide' : 'Show'} Password
                            </button>
                            {passwordError && <p className="error-message">{passwordError}</p>}
                        </div>

                        <div className="login-input-group login-remember-me-group">
                            <input type="checkbox" id="remember" name="remember" />
                            <label htmlFor="remember">Remember Me</label>
                        </div>

                        <div className="login-input-group">
                            <button type="submit" className="login-btn">Login</button>
                        </div>

                        <div className="login-signup-link">
                            <p>New here? <Link to="/signup">Signup here</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginApplicant;
