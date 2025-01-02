import React, { lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';

// Lazy-loaded components
const Signup = lazy(() => import('./Singup.jsx'));
const LoginApplicant = lazy(() => import('./Login.jsx'));
const EmpSignup = lazy(() => import('./EmployerSignup.jsx'));
const EmpLogin = lazy(() => import('./EmpLogin.jsx'));
const AuthHeader = lazy(() => import('./AuthHeader.jsx'));
const EmpHeaderAuth = lazy(() => import('./EmpHeaderAuth.jsx'));
const Foot = lazy(() => import('../rct/Footer.jsx'));

function Authentication() {
  const location = useLocation();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {location.pathname === '/signup' ? (
        <>
          <AuthHeader />
          <Signup />
        </>
      ) : location.pathname === '/login' ? (
        <>
          <AuthHeader />
          <LoginApplicant />
        </>
      ) : location.pathname === '/Empsignup' ? (
        <>
          <EmpHeaderAuth />
          <EmpSignup />
        </>
      ) : location.pathname === '/EmpLogin' ? (
        <>
          <EmpHeaderAuth />
          <EmpLogin />
        </>
      ) : (
        <div>404 Page Not Found</div>
      )}
      <Foot />
    </Suspense>
  );
}

export default Authentication;
