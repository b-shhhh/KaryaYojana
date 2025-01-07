import React from "react";
import logo from "../assets/Untitled.png"
import '../css/mainHeader.css'
const HeaderMain=()=>{
    return(
        <>
        <div className="header-main">
            <div className="main-logo">
                <img src={logo} alt="Logo"/>
            </div>
            </div>
        </>
    );
}

export default HeaderMain;