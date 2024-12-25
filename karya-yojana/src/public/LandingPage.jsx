import React, { lazy, Suspense, useEffect } from 'react';

// Lazy-loaded components
const Body = lazy(() => import('./LnadingBody.jsx'));
const Head = lazy(() => import('../rct/Header.jsx'));
const Foot = lazy(() => import('../rct/Footer.jsx'));

function LandingPage() {
  useEffect(() => {
    // Scroll to top when landing page loads
    window.scrollTo(20, 0);
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Head />
      <Body />
      <Foot />
    </Suspense>
  );
}

export default LandingPage;
