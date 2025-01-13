import React, { useState } from "react";
import logo from "../assets/Untitled.png";
import "../css/mainHeader.css";
import { Link } from "react-router-dom";
const HeaderMain = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="header-main">
        <div className="main-logo">
          <Link to="/ApplicantHome">
          <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="main-menu">
        <ul>
            <li>
              <Link to="/ApplicantHome">Home</Link>
            </li>
            <li>
              <Link to="/preparation">Interview Preparation</Link>
            </li>
            <li>
              <Link to="/profileApplicant">Resume Builder</Link>
            </li>
            <li>
              <Link to="/applications">My Applications</Link>
            </li>
          </ul>
        </div>
        <div className="profile" onClick={toggleDropdown}>
          <img src="../assests/person.svg"></img>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <ul>
                <li onClick={() => window.location.href = "/profileApplicant"}>Profile</li>
                <li onClick={() => window.location.href = "/login"}>Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HeaderMain;
