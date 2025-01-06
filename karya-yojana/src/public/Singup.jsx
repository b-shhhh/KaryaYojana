import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Signup.css';

function Signup() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [contact, setContact] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [contactError, setContactError] = useState('');
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setPasswordVisible(prevState => !prevState);
    };

    const handleSignup = (e) => {
        e.preventDefault(); 
        let hasError = false;
        const passwordLengthValid = password.length >= 8; // Minimum 8 characters
        const containsUppercase = /[A-Z]/.test(password); // At least 1 uppercase letter
        const containsNumber = /\d/.test(password); // At least 1 number
        const containsSpecialChar = /[@$!%*?&#]/.test(password); // At least 1 special character
    
        // Password length validation
        if (!passwordLengthValid) {
            setPasswordError('Password must be at least 8 characters.');
            hasError = true;
        } else if (!containsUppercase || !containsNumber || !containsSpecialChar) {
            setPasswordError('Password must contain uppercase, number and special character.');
            hasError = true;
        } else if (password !== confirmPassword) {
            setPasswordError('Passwords do not match!');
            hasError = true;
        } else {
            setPasswordError('');
        }
        if (contact.length !== 10) {
            setContactError('Contact number must be exactly 10 digits!');
            hasError = true;
        } else {
            setContactError('');
        }
        if (!hasError) {
            console.log('Signup successful!');
            navigate('/login'); 
        }
    };

    return (
        <div className="signup">
            <div className="Box">
                <div className="Form-Box">
                    <form className="form" onSubmit={handleSignup}>
                        <h1>Sign Up</h1>

                        <div className="input-row">
                            <div className="input-group">
                                <label htmlFor="username">Username</label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    placeholder="Username"
                                    required
                                />
                            </div>

                            <div className="input-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                />
                            </div>
                        </div>

                        <div className="input-row">
                            <div className="input-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type={passwordVisible ? 'text' : 'password'}
                                    id="password"
                                    name="password"
                                    placeholder="Password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                 {passwordError && <p className="error-message">{passwordError}</p>}
                            </div>

                            <div className="input-group">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input
                                    type={passwordVisible ? 'text' : 'password'}
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    required
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                                 <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="show-password-btn"
                                >
                                    {passwordVisible ? 'Hide' : 'Show'} Password
                                </button>
                               
                            </div>
                        </div>

                        <div className="input-row">
                            <div className="input-group">
                                <label htmlFor="contact">Contact Number</label>
                                <input
                                    type="text"
                                    id="contact"
                                    name="contact"
                                    placeholder="Contact Number"
                                    required
                                    value={contact}
                                    onChange={(e) => setContact(e.target.value)}
                                />
                                  {contactError && <p className="error-message">{contactError}</p>}
                            </div>

                            <div className="input-group">
                                <label htmlFor="gender">Gender</label>
                                <select name="gender" id="gender" required>
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>

                        <div className="input-group">
                            <button type="submit" className="signup-btn">Sign Up</button>
                        </div>

                        <div className="login-link">
                            <p>Already have an account? <Link to="/login">Login here</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;
