import React, { lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';

// Lazy-loaded components
const Signup = lazy(() => import('./Singup.jsx'));
const LoginApplicant = lazy(() => import('./Login.jsx'));
const AuthHeader = lazy(() => import('./AuthHeader.jsx'));
const Foot = lazy(() => import('../rct/Footer.jsx'));

function Authentication() {
  const location = useLocation();
  

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthHeader />
      {location.pathname === '/signup' ? <Signup /> : <LoginApplicant />}
      <Foot />
    </Suspense>
  );
}

export default Authentication;
