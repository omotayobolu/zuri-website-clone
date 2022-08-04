import React from "react";
import "./NewHome.css";
import Homepic1 from "../../ZuriImg/lady1.jpg";
import Line from "../../ZuriImg/line.svg";
import section1wire from "../../ZuriImg/section1wire.svg";
import Male from "../../ZuriImg/male1.jpg";

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
          <button>Enroll Now</button>
          <img src={section1wire} alt="" />
        </div>
        <img src={Male} alt="" />
      </div>
    </section>
  );
};

export default Newhome;
