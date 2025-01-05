import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/EmployerLogin.css';

function EmpLogin() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible((prevState) => !prevState);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form from reloading the page
        // Add your form submission logic here
    };

    return (
        <div className="emp-login">
            <div className="emp-box">
                <div className="emp-form-box">
                    <form className="emp-form" onSubmit={handleSubmit}>
                        <h1>Employer Login</h1>
                        
                        <div className="emp-input-group">
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

                        <div className="emp-input-group">
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
                                className="emp-show-password-btn" 
                                aria-label="Toggle password visibility"
                            >
                                {passwordVisible ? 'Hide' : 'Show'} Password
                            </button>
                        </div>
                        
                        <div className="emp-input-group emp-remember-me-group">
                            <input 
                                type="checkbox" 
                                id="remember"
                                name="remember" 
                            />
                            <label htmlFor="remember">Remember Me</label>
                        </div>

                        <div className="emp-input-group">
                            <button type="submit" className="emp-login-btn">Login</button>
                        </div>

                        <div className="emp-signup-link">
                            <p>New here? <Link to="/Empsignup">Signup here</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EmpLogin;
