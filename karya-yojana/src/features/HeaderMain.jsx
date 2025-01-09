import React, { useState } from "react";
import logo from "../assets/Untitled.png";
import "../css/mainHeader.css";

const HeaderMain = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="header-main">
        <div className="main-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="main-menu">
          <ul>
            <li>Home</li>
            <li>Interview Preparation</li>
            <li>Resume Builder</li>
            <li>My Applications</li>
          </ul>
        </div>
        <div className="profile" onClick={toggleDropdown}>
          <img src="../assests/person.svg"></img>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <ul>
                <li onClick={() => window.location.href = "/profile"}>Profile</li>
                <li onClick={() => window.location.href = "/logout"}>Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HeaderMain;
