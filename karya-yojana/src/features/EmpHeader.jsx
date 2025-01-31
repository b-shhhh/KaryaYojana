import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Untitled.png";
import "../css/mainHeader.css";

const HeaderMain = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation(); // Get the current location

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Helper function to check if the link is active
  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };
  const handleLogout=()=>{
    localStorage.removeItem('token')
    window.location.reload()
  }
  return (
    <div className="header-main">
      <div className="main-logo">
        <Link to="/EmpHome">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="main-menu">
        <ul>
          <li className={isActive("/EmpHome")}>
            <Link to="/EmpHome">Home</Link>
          </li>
          <li className={isActive("/profileEmp")}>
            <Link to="/profileEmp">Resume Builder</Link>
          </li>
          <li className={isActive("/requests")}>
            <Link to="/applications">My Ads</Link>
          </li>
        </ul>
      </div>
      <div className="profile" onClick={toggleDropdown}>
        <img src="../assests/person.svg" alt="Profile" />
        {isDropdownOpen && (
          <div className="dropdown-menu">
            <ul>
              <li onClick={() => window.location.href = "/profileEmp"}>Profile</li>
              <li onClick={() => window.location.href = "/empManageAcc"}>Manage Account</li>
              <li onClick={handleLogout}>Logout</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderMain;
