import React, { useEffect, useState } from 'react'; // Import useEffect
import '../css/landingstyle.css';

const images = [
   "/assests/work!.png"
];

function About() {
    const [visibleElements, setVisibleElements] = useState({
        headingabout: false,
        span: false,
        spanhighlight: false,
    });

    useEffect(() => {
        const timers = [];
        timers.push(setTimeout(() => setVisibleElements((prev) => ({ ...prev, headingabout: true })), 500));
        timers.push(setTimeout(() => setVisibleElements((prev) => ({ ...prev, span: true })), 650));
        timers.push(setTimeout(() => setVisibleElements((prev) => ({ ...prev, spanhighlight: true })), 750));
        return () => timers.forEach(timer => clearTimeout(timer));
    }, []);

    return (
        <main>
           
        </main>
    );
}

export default About;