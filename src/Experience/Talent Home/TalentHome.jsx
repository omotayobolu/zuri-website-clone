import React from "react";
import "./TalentHome.css";
import ThickLine from "../../ZuriImg/thick2.svg";
import section1Img from "../../ZuriImg/section1.png";

const TalentHome = () => {
  return (
    <section className="home" id="Home">
      <div className="home-l">
        <h1>
          Vetted and Trusted <span className="red">talents</span>
          <img src={ThickLine} alt="" />
        </h1>
        <p>
          At Zuri Team, we train, test and place talent in various industries.
          We have access to the best pool of skills in the tech Industry.
        </p>
        <div className="btn-home">
          <button>Hire Talent</button>
          <button>Join Talent Pool</button>
        </div>
      </div>
      <div className="home-r">
        <img src={section1Img} alt="" />
      </div>
    </section>
  );
};

export default TalentHome;
