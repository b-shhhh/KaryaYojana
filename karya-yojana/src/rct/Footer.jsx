import React, { useEffect, useState } from 'react';
import '../css/landingstyle.css';

function Footer(){
    const [showAboutSection, setShowAboutSection] = useState(false);
     useEffect(() => {
        const timers = [];
    timers.push(setTimeout(() => setShowAboutSection(true), 2000));
    return () => timers.forEach(timer => clearTimeout(timer));
}, []);
    return (
        <footer>
            {showAboutSection && (
        <div className="footer">
            <div className="footer__container">
            <div className="mid-foot">
                <h2>Our Services</h2>
                <ul>
                    <li>Connecting Applicants and Employers</li>
                    <li>Resume Building</li>
                    <li>Interview Preparation</li>
                    <li>Resume Review</li>
                </ul>
            </div>
            <div className="mid-foot">
                <h2>Useful Website</h2>
                <ul>
                    <li><a href="https://www.myperfectresume.com/career-center/resumes/how-to/write">Resume Guide</a></li>
                    <li><a href="https://www.themuse.com/advice/interview-questions-and-answers">Interview</a></li>
                    <li><a href="https://www.investopedia.com/terms/s/soft-skills.asp">Develope SoftSkills</a></li>
                </ul>
            </div>
            <div className="mid-foot">
                <h2>Our Team</h2>
                <ul>
                    <li>Bishruti Koirala</li>
                    <li>Saurav Maharjan</li>
                    <li>Prajwol Khadka</li>
                    <li>Garima Shrestha</li>
                </ul>
            </div>
            <div className="Touch">
                <h2>
                    Contact Us:
                </h2>
                <ul>
                    <li>Phone: 984-123-4567</li>
                    <li>Address: Kathmandu, Nepal</li>
                    <li>Mail Us: <a href="mailto:prazolkhadka67@gmail.com">KaryaYojana</a></li>
                </ul>
            </div>
            </div>
        </div>
            )}
        </footer>
    );
}

export default Footer;