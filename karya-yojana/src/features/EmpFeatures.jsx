import React, { Suspense, lazy } from "react";
import { useLocation } from "react-router-dom";

const EmpHeader = lazy(() => import("./EmpHeader.jsx"));
const EmpFooter = lazy(() => import("./EmpFooter.jsx"));
const Dash = lazy(() => import("./EmpDashboard.jsx"));

const EmpFeature = () => {
  const location = useLocation();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EmpHeader />
      
      {location.pathname === "/empDash" ? <Dash /> : <div>404 Page Not Found</div>}

      <EmpFooter />
    </Suspense>
  );
};

export default EmpFeature;
