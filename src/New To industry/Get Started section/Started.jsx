import React from "react";
import "./Started.css";
import Round from "../../ZuriImg/round.svg";
import Bend from "../../ZuriImg/bend1.svg";
import Curve from "../../ZuriImg/curve2.svg";
import Mains from "../../ZuriImg/mains.png";

const Started = () => {
  return (
    <div className="get-started">
      <p>Get Started</p>
      <h1>Break into the tech industry like a Pro</h1>
      <button>Enroll Now</button>
      <img className="round" src={Round} alt="" />
      <img className="bend" src={Bend} alt="" />
      <img className="curve" src={Curve} alt="" />
      <img className="mains" src={Mains} alt="" />
    </div>
  );
};

export default Started;
