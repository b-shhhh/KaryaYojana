import React, { lazy, Suspense } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

const Foot = lazy(() => import('../rct/Footer.jsx'));
const Signup = lazy(() => import('./Singup.jsx'));
const LoginApplicant = lazy(() => import('./Login.jsx'));
const AuthHeader = lazy(() => import('./AuthHeader.jsx'));
const Lander = lazy(() => import('./LandingPage.jsx'));

function Authentication() {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <AuthHeader />
                <Routes>
                    {/* Default route */}
                    <Route path="/" element={<Lander key={location.key}/>} />
                    <Route path="/signup" element={<Navigate to="/signup" />} />
                    {/* Other routes */}
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<LoginApplicant />} />
                </Routes>
                <Foot />
            </Suspense>
        </Router>
    );
}

export default Authentication;
