import React, { lazy, Suspense } from 'react';
// import Body from './LnadingBody.jsx';
const Body = lazy(() => import('./LnadingBody.jsx'));
const Head = lazy(() => import('./Header.jsx'));
const Foot = lazy(() => import('./Footer.jsx'));
function LandingPage(){
    return(
        <Suspense fallback={<div>Loading...</div>}>
        <Head/>
        <Body/>
        <Foot/>
        </Suspense>
    )
}
export default LandingPage