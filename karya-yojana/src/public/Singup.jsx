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
        if (password !== confirmPassword) {
            setPasswordError('Passwords do not match!');
            hasError = true;
        } else {
            setPasswordError('');
        }
        if (contact.length !== 10 || isNaN(contact)) {
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

                        <div className="input-group">
                            <label htmlFor="username">Username</label>
                            <input 
                                type="text" 
                                id="username"
                                name="username" 
                                placeholder="Username / पुरा नाम" 
                                required 
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="email" 
                                id="email"
                                name="email" 
                                placeholder="Email / ईमेल" 
                                required 
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
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input 
                                type={passwordVisible ? 'text' : 'password'} 
                                id="confirmPassword"
                                name="confirmPassword" 
                                placeholder="Confirm Password / पुष्टि गर्नुहोस्" 
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

                        {/* Password error displayed below the Show Password button */}
                        {passwordError && <p className="error-message">{passwordError}</p>}

                        <div className="input-group">
                            <label htmlFor="contact">Contact Number</label>
                            <input 
                                type="text" 
                                id="contact"
                                name="contact" 
                                placeholder="Contact Number / सम्पर्क नम्बर" 
                                required 
                                value={contact}
                                onChange={(e) => setContact(e.target.value)}
                            />
                        </div>

                        {/* Contact number error displayed below the input field */}
                        {contactError && <p className="error-message">{contactError}</p>}

                        <div className="input-group">
                            <label htmlFor="gender">Gender</label>
                            <select name="gender" id="gender" required>
                                <option value="">Select Gender / लिङ्ग छान्नुहोस्</option>
                                <option value="male">Male / पुरुष</option>
                                <option value="female">Female / महिला</option>
                                <option value="other">Other / अन्य</option>
                            </select>
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
