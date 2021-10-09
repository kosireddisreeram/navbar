/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./navbar.css";
import { BsBag } from "react-icons/bs";
import {CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [Menu, setMenu] = useState();
  return (
    <>
      <nav className="main-nav">
        {/* logo section */}
        <div className="logo">
          <h2>
            <span>o</span>ota
            </h2>
        </div>
{/* 2nd menu part  */}
        <div
           className={
             Menu ? "menu-link " : "menu-link"
           }>
          <ul>
            <li>
              <NavLink to="/">Menu</NavLink>
            </li>
            <li>
              <NavLink to="/subscription">Subscription</NavLink>
            </li>
            <li>
              <NavLink to="/about us">About-Us</NavLink>
            </li>
            <li>
              <NavLink to="/data">Data</NavLink>
            </li>
          </ul>
        </div>
        {/* 3rd icon section */}
        <div className="icon-section">
          <ul className="icons">
          <li>
            <a href="#" >
              <BsBag className="bag"/>
              </a>
            </li>
            <li>
            <a href="#">
                <CgProfile className="profile"/>
                </a>
            </li>
            </ul>
           {/* hamburger menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setMenu(!Menu)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
   </>
  );
};
export default Navbar;
