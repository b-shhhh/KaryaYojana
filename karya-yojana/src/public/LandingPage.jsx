import { lazy, default as React, Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// Lazy-loaded components
const Body = lazy(() => import('./LnadingBody.jsx'));
const Head = lazy(() => import('../rct/Header.jsx'));
const Foot = lazy(() => import('../rct/Footer.jsx'));
const Signup = lazy(() => import('./Singup.jsx'));
const LoginApplicant = lazy(() => import('./Login.jsx'));
const AuthHeader = lazy(() => import('./AuthHeader.jsx'));

function LandingPage() {

    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    {/* Default Landing Page */}
                    <Route
                        path="/"
                        element={
                            <>
                                <Head />
                                <Body />
                                <Foot />
                            </>
                        }
                    />

                    {/* Authentication Pages */}
                    <Route
                        path="/signup"
                        element={
                            <>
                                <AuthHeader />
                                <Signup />
                                <Foot />
                            </>
                        }
                    />
                    <Route
                        path="/login"
                        element={
                            <>
                                <AuthHeader />
                                <LoginApplicant />
                                <Foot />
                            </>
                        }
                    />
                </Routes>
            </Suspense>
        </Router>
    );
}

export default LandingPage;
