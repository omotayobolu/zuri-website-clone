import React from "react";
import "./Nav.css";
import Logo from "../../ZuriImg/logo.svg";
import Thumbs from "../../ZuriImg/thumbs.png";

const Nav = () => {
  return (
    <nav className="New-nav">
      <div className="nav-contents">
        <img src={Logo} alt="" />
        <ul className="nav-btns">
          <li>About</li>
          <li>Why Us?</li>
          <li>Stacks Covered</li>
          <li>FAQs</li>
        </ul>
        <button className="enroll-now">
          <img src={Thumbs} alt="" />
          <div className="thumbs">
            <p>Enroll Now</p>
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
