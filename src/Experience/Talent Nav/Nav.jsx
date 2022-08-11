import React from "react";
import "./Nav.css";
import Logo from "../../ZuriImg/logo2.svg";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav>
      <img src={Logo} alt="" />
      <ul className="nav-items">
        <li>
          <Link to="Home" spy={true} smooth={true}>
            Home
          </Link>
        </li>

        <li>
          <Link to="Impact" spy={true} smooth={true}>
            Impact
          </Link>
        </li>
        <li>
          <Link to="WhyHire" spy={true} smooth={true}>
            Why Us
          </Link>
        </li>
        <button>Hire talents</button>
      </ul>
    </nav>
  );
};

export default Nav;
