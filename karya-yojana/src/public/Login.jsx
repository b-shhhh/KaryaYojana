import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Login.css';

function LoginApplicant() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible((prevState) => !prevState);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic for login here
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
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="login-show-password-btn"
                                aria-label="Toggle password visibility"
                            >
                                {passwordVisible ? 'Hide' : 'Show'} Password
                            </button>
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
