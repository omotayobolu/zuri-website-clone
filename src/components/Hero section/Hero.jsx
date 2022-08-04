import React from "react";
import "./Hero.css";
import MainLogo from "../../ZuriImg/zuri-logo-full.svg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="Hero">
      <div className="hero-content">
        <img className="logo" src={MainLogo} alt="" />
        <div className="hero-header">Learn, Build, Grow.</div>
        <p>
          Unlock your Brilliance with our hands-on{" "}
          <span className="a-link">beginner</span> and{" "}
          <span className="a-link">expert training</span>. Zuri Team has been
          immensely successful in creating a global network of a highly adept
          intelligent workforce that can help your company achieve their
          mission-critical <span className="a-link">projects and goals</span>
        </p>
        <div className="hero-btns">
          <Link class to="New">
            <button className="btn new">I'm new to the industry</button>
          </Link>
          <Link to="Experienced">
            <button className="btn experienced">
              I need industry experience
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
