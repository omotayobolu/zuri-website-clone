import React from "react";
import "./Nav.css";
import Logo from "../../ZuriImg/logo.svg";
import Thumbs from "../../ZuriImg/thumbs.png";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="New-nav">
      <div className="nav-contents">
        <img src={Logo} alt="" />
        <ul className="nav-btns">
          <li>
            <Link to="about" spy={true} smooth={true}>
              About
            </Link>
          </li>
          <li>
            <Link to="why-us" spy={true} smooth={true}>
              Why Us?
            </Link>
          </li>
          <li>
            <Link to="programs" spy={true} smooth={true}>
              Stacks Covered
            </Link>
          </li>
          <li>
            <Link to="questions" spy={true} smooth={true}>
              FAQs
            </Link>
          </li>
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
