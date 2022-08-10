import React from "react";
import "./Nav.css";
import Logo from "../../ZuriImg/logo2.svg";

const Nav = () => {
  return (
    <nav>
      <img src={Logo} alt="" />
      <ul className="nav-items">
        <li>Home</li>
        <li>Impact</li>
        <li>Why Us</li>
        <button>Hire talents</button>
      </ul>
    </nav>
  );
};

export default Nav;
