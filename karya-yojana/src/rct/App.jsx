import React, { useState, Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

// Lazy-loaded pages
const LandingPage = React.lazy(() => import('../public/LandingPage.jsx'));
const Authentication = React.lazy(() => import('../public/Authenticaiton.jsx'));
const Feature = React.lazy(() => import('../features/Feature.jsx'));

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Landing Page Route */}
          <Route path="/" element={<LandingPage />} />

          {/* Jatii pani login signup wala portion xa sabb */}
          <Route path="/signup" element={<Authentication />} />
          <Route path="/login" element={<Authentication />} />
          <Route path="/Empsignup" element={<Authentication />} />
          <Route path="/EmpLogin" element={<Authentication />} />

          {/* Authenticated xain vane login*/}
          <Route
            path="/features"
            element={
              // <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Feature />
              // </ProtectedRoute>
            }
          />
            <Route
            path="/ApplicantHome"
            element={
              // <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Feature />
              // </ProtectedRoute>
            }
          />
            <Route
            path="/profileApplicant"
            element={
              // <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Feature />
              // </ProtectedRoute>
            }
          />
            <Route
            path="/preparation"
            element={
              // <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Feature />
              // </ProtectedRoute>
            }
          />
            <Route
            path="/applications"
            element={
              // <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Feature />
              // </ProtectedRoute>
            }
          />
          <Route
            path="/appManageAcc"
            element={
              // <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Feature />
              // </ProtectedRoute>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
