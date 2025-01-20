import React from "react";
import { Suspense } from "react";
import { useLocation } from 'react-router-dom';
const HeaderMain=React.lazy(()=>import("./HeaderMain"));
const Footer=React.lazy(()=>import("../rct/Footer"))
const ApplicantProfile=React.lazy(()=>import("./ApplicantProfile"))
const ApplicantDash=React.lazy(()=>import("./ApplicantDash"))
const Prep=React.lazy(()=>import("./Prep.jsx"))
const Applications=React.lazy(()=>import("./Applications.jsx"))
const ManageAcc=React.lazy(()=>import("./ManageAccount.jsx"))
const Features=()=>{
    const location = useLocation();
    return(
        <>
        <Suspense fallback={<div>Loading...</div>}>
            <HeaderMain />
            {location.pathname === '/ApplicantHome' ? (
        <>
        <ApplicantDash/>
        </>
      ) : location.pathname === '/profileApplicant' ? (
        <>
            <ApplicantProfile/>
        </>
      ) : location.pathname === '/preparation' ? (
        <>
        <Prep/>
        </>
      ) : location.pathname === '/applications' ? (
        <>
        <Applications/>
        </>
      ) : location.pathname === '/appManageAcc' ? (
        <>
        <ManageAcc/>
        </>
      ): (
        <div>404 Page Not Found</div>
      )}
        <Footer/>
        </Suspense>
        </>
    )
}

export default Features;