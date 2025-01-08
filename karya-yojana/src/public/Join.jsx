import React from 'react';
import '../css/landingstyle.css';

function JoinUs() {
    return (
        <section className="Joinus" id="plans">
            <div className="image-container">
                <img
                    src="../assests/join.png"
                    alt="About-Us"
                    className="full-width-image"
                    loading="lazy"
                />
                <button className="on-image-button">
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=prazolkhadka67@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Send us a mail!
                    </a>
                </button>
            </div>
        </section>
    );
}

export default JoinUs;
