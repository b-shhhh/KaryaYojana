
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/EmployerAuth.css';

function EmpSignup(){
    const [passwordVisible, setPasswordVisible] = useState(false);
    
        const togglePasswordVisibility = () => {
            setPasswordVisible(prevState => !prevState);
        };
    return(
          <div className="signup">
                    <div className="Box">
                        <div className="Form-Box">
                            <form className="form">
                                <h1>Company Register</h1>
        
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
                                    />
                                    <button 
                                        type="button" 
                                        onClick={togglePasswordVisibility} 
                                        className="show-password-btn"
                                    >
                                        {passwordVisible ? 'Hide' : 'Show'} Password
                                    </button>
                                </div>
        
                                <div className="input-group">
                                    <label htmlFor="contact">Contact Number</label>
                                    <input 
                                        type="text" 
                                        id="contact"
                                        name="contact" 
                                        placeholder="Contact Number / सम्पर्क नम्बर" 
                                        required 
                                    />
                                </div>
        
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
                                    <p>Already have an account? <Link to="/EmpLogin">Login here</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
    )
}

export default EmpSignup;