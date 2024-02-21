import React, { useState } from "react";
import "./Navigation.css";
import closeIcon from '../assets/close-icon.svg'
import OpenHam from '../assets/hamburger-open.svg'
import SiteLogo from '../assets/dummy logo01 2.png'
 function Navigation() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
            <span><img src={SiteLogo} alt=""  className="siteLogo"/></span>


          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <div
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </div>
            </li>
            <li className="nav-item">
              <div
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Features
              </div>
            </li>
            <li className="nav-item">
              <div
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Who We Serve
              </div>
            </li>
            <li className="nav-item">
              <div
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact
              </div>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>

            {click ? (
              <span className="icon">
                <img src={closeIcon} alt="" />
              </span>
            ) : (
              <span className="icon">
                <img src={OpenHam} alt="" />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;