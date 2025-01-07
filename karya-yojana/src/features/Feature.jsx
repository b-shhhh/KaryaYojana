import React from "react";
import { Suspense } from "react";
const HeaderMain=React.lazy(()=>import("./HeaderMain"));

const Features=()=>{
    return(
        <>
        <Suspense>
            <HeaderMain />
        </Suspense>
        </>
    )
}

export default Features;