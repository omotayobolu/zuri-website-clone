import React from "react";
import "./NewHome.css";
import Homepic1 from "../../ZuriImg/lady1.jpg";
import Line from "../../ZuriImg/line.svg";
import section1wire from "../../ZuriImg/section1wire.svg";
import Male from "../../ZuriImg/male1.jpg";
import MaleFace from "../../ZuriImg/maleface.svg";

const Newhome = () => {
  return (
    <section className="Home">
      <div className="home-contents">
        <img src={Homepic1} alt="" />
        <div className="home-text">
          <p>And now your search has ended...</p>
          <h1>
            Gain knowledge to help you scale through the tech industry for free.
          </h1>
          <img src={Line} alt="" />
          <p>
            A basic introduction to software development and product design
            aimed at complete beginners, which anyone can join
          </p>
          <img className="male-face" src={MaleFace} alt="" />
          <button className="btn">Enroll Now</button>
          <img className="one-wire" src={section1wire} alt="" />
        </div>
        <img className="male-pic" src={Male} alt="" />
      </div>
    </section>
  );
};

export default Newhome;
