import React from "react";
import { Suspense } from "react";
const HeaderMain=React.lazy(()=>import("./HeaderMain"));
const Footer=React.lazy(()=>import("../rct/Footer"))
const ApplicantProfile=React.lazy(()=>import("./ApplicantProfile"))
const Features=()=>{
    return(
        <>
        <Suspense>
            <HeaderMain />
            <ApplicantProfile/>
            <Footer/>
        </Suspense>
        </>
    )
}

export default Features;