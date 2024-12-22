import React, { lazy, Suspense } from 'react';
// import Body from './LnadingBody.jsx';
const Body = lazy(() => import('./LnadingBody.jsx'));
const Head = lazy(() => import('../rct/Header.jsx'));
const Foot = lazy(() => import('../rct/Footer.jsx'));
const Signup = lazy(()=> import("./Singup.jsx"));
function LandingPage(){
    return(
        <Suspense fallback={<div>Loading...</div>}>
        <Head/>
        <Body/>
        {/* <Signup/> */}
        <Foot/>
        </Suspense>
    )
}
export default LandingPage