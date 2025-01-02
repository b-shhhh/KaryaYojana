import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Login.css';

function EmpLogin() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(prevState => !prevState);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form from reloading the page
        // Add your form submission logic here
    };

    return (
        <div className="login">
            <div className="Box">
                <div className="Form-Box">
                    <form className="form" onSubmit={handleSubmit}>
                        <h1>Login</h1>
                        
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="email" 
                                id="email"
                                name="email" 
                                placeholder="Email / ईमेल" 
                                required 
                                aria-label="Email"
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input 
                                type={passwordVisible ? 'text' : 'password'} 
                                id="password"
                                name="password" 
                                placeholder="Password / पासवोर्ड" 
                                required 
                                aria-label="Password"
                            />
                            <button 
                                type="button" 
                                onClick={togglePasswordVisibility} 
                                className="show-password-btn" 
                                aria-label="Toggle password visibility"
                            >
                                {passwordVisible ? 'Hide' : 'Show'} Password
                            </button>
                        </div>
                        
                        <div className="input-group remember-me-group">
                            <input 
                                type="checkbox" 
                                id="remember"
                                name="remember" 
                            />
                            <label htmlFor="remember">Remember Me</label>
                        </div>

                        <div className="input-group">
                            <button type="submit" className="login-btn">Login</button>
                        </div>

                        <div className="signup-link">
                            <p>New here? <Link to="/Empsignup">Signup here</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EmpLogin;
