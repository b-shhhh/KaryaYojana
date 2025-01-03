
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/EmployerAuth.css';

function EmpSignup(){
    const [passwordVisible, setPasswordVisible] = useState(false);
    
        const togglePasswordVisibility = () => {
            setPasswordVisible(prevState => !prevState);
        };
    return(
        <div className="register-container">
        <div className="register-box">
            <div className="form-box">
                <form className="register-form">
                    <h1>Company Register</h1>

                    <div className="form-group">
                        <label htmlFor="username">Company Name</label>
                        <input 
                            type="text" 
                            id="username"
                            name="username" 
                            placeholder="Company Name" 
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email"
                            name="email" 
                            placeholder="Email" 
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            type={passwordVisible ? 'text' : 'password'} 
                            id="password"
                            name="password" 
                            placeholder="Password" 
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input 
                            type={passwordVisible ? 'text' : 'password'} 
                            id="confirmPassword"
                            name="confirmPassword" 
                            placeholder="Confirm Password" 
                            required 
                        />
                    </div>
                    
                    <div className="form-group">
                                    <button 
                                        type="button" 
                                        onClick={togglePasswordVisibility} 
                                        className="toggle-password-btn"
                                    >
                                        {passwordVisible ? 'Hide' : 'Show'} Password
                                    </button>
                                </div>

                    <div className="form-group">
                        <label htmlFor="contact">Contact Number</label>
                        <input 
                            type="text" 
                            id="contact"
                            name="contact" 
                            placeholder="+977-xxxxxxxxx/01-xxxxxxx" 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input 
                            type="text" 
                            id="address"
                            name="address" 
                            placeholder="Address,Nepal" 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Pan">Pan Number</label>
                        <input 
                            type="text" 
                            id="contactcompany"
                            name="contact" 
                            placeholder="xxxxxx" 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="sector">Company Type</label>
                        <select name="sector" id="sector" required>
                            <option value="">Select type</option>
                            <option value="male">Private</option>
                            <option value="female">NGO/INGO</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <button type="submit" className="register-btn">Sign Up</button>
                    </div>

                    <div className="login-link">
                        <p>Already have an account? <Link to="/EmpLogin">Login here</Link></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}

export default EmpSignup;