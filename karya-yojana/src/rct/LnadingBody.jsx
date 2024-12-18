import React, { useEffect, useState } from 'react';
import '../css/landingstyle.css';

const images = [
    '/assests/work!.png',
    '/assests/find.png',
    '/assests/search.png',
];

function LandingBody() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [visibleElements, setVisibleElements] = useState({
        heading: false,
        span: false,
        paragraph: false,
        slideshow: false,
        downscrolllink:false,
    });
    const [showAboutSection, setShowAboutSection] = useState(false); // New state for About Section visibility

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
        }, 7000);
        return () => clearInterval(slideInterval);
    }, []);

    useEffect(() => {
        const timers = [];
        timers.push(setTimeout(() => setVisibleElements((prev) => ({ ...prev, heading: true })), 500));
        timers.push(setTimeout(() => setVisibleElements((prev) => ({ ...prev, span: true })), 650));
        timers.push(setTimeout(() => setVisibleElements((prev) => ({ ...prev, paragraph: true })), 750));
        timers.push(setTimeout(() => setVisibleElements((prev) => ({ ...prev, slideshow: true })), 860));
        timers.push(setTimeout(() => setVisibleElements((prev) => ({ ...prev, downscrolllink: true })), 880));

        // Delay showing the About Section
        timers.push(setTimeout(() => setShowAboutSection(true), 2000)); // Adjust the delay here (e.g., 2000ms)

        return () => timers.forEach(timer => clearTimeout(timer));
    }, []);

    return (
        <div className='Supreme' >
            <div className='main' id="main">
                <section className="content-1">
                    <div className="content-1-left">
                        <h1 className={visibleElements.heading ? 'fade-in' : 'hidden'}>
                            KaryaYojana<span id="com">.com</span>
                        </h1>
                        <span id="spanSoch" className={visibleElements.span ? 'fade-in' : 'hidden'}>
                            साेच. <span id="apply">प्रयास</span>. परिवर्तन.
                        </span>
                        <p className={visibleElements.paragraph ? 'fade-in' : 'hidden'}>
                            Opportunities don’t just happen.
                            <br />
                            With the right guidance,
                            <br />
                            <span id="quote">you’re one step closer to the career</span>
                            <br />
                            you’ve always wanted.
                        </p>
                        <a href="#about" className={visibleElements.downscrolllink ? 'fade-in' : 'hidden'}>
                        <div className="downn">
                            <img 
                                src="/assests/down.svg" 
                                alt="Bouncing SVG" 
                                className="bouncing-svg"
                            />
                            <span>Scroll Down!</span>
                            </div>
                            </a>
                    </div>
                </section>

                <section className="content-2">
                    <div className="content-2-right">
                        {visibleElements.slideshow && (
                            <div className="slideshow fade-in-slow">
                                {images.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`Slide ${index + 1}`}
                                        className={`${index === currentSlide ? 'active' : 'inactive'}`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            </div>

            {/* About Section - Conditionally Rendered */}
            {showAboutSection && (
                <section className='double'>
                <section className="About" id="about">
                    <div className='about-left'>
                        <h1 className='fade-in'>Who Are We?</h1>
                        <span className='fade-in'>
                            At KaryaYojana, we bridge the gap between talented job seekers and their dream opportunities.
                            As a dynamic job portal, we are committed to empowering individuals by connecting them with top 
                            employers across various industries. Our platform is designed to make job searching 
                            <span id="spanhighlight"> effortless,
                            efficient, and impactful,</span> ensuring that every candidate finds a role where they can thrive.
                            Driven by innovation and a passion for progress, KaryaYojana also supports businesses in 
                            discovering the right talent to fuel their success. We believe in building meaningful 
                            connections that transform careers and organizations alike.
                            Join us on a journey to unlock potential and create opportunities, one job at a time.
                        </span>
                    </div>
                    <div className='ImageSec'>
                        <div className="about-right ">
                            <div className="aboutimage">
                                <img
                                    src={images[0]}
                                    alt="About Us"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className='scrollBrands'>
                </section>
                </section>
            )}
            {/* {showAboutSection && (
            )} */}
        </div>
    );
}

export default LandingBody;
