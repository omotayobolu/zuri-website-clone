import React from "react";
import "./Enroll.css";
import Wire from "../../ZuriImg/section5wire.svg";
import Hand from "../../ZuriImg/hand.svg";
import Mentor from "../../ZuriImg/mentor.svg";
import Practice from "../../ZuriImg/practice.svg";
import Games from "../../ZuriImg/games.svg";
import dotSection from "../../ZuriImg//dotsection5.svg";
import Section5image from "../../ZuriImg/section5-image.png";

const Enroll = () => {
  return (
    <section className="Enroll">
      <div className="Enroll-l">
        <img src={Wire} alt="" />
        <h5>We will help you get started</h5>
        <h2>High quality training with hands-on practice</h2>
        <p>
          We give you weekly tasks, ranging from easy to complex, as you
          progress from stage to stage; making it to the final stage means you
          are now ready to continue learning and growing independently.
        </p>
        <button>Enroll Now</button>
        <div className="enroll-bonus">
          <p>
            <img src={Hand} alt="" />
            Teamwork
          </p>
          <p>
            <img src={Mentor} alt="" />
            Mentorship
          </p>
          <p>
            <img src={Practice} alt="" />
            Practice
          </p>
          <p>
            <img src={Games} alt="" />
            Fun & Games
          </p>
        </div>
        <img className="dot-image" src={dotSection} alt="" />
      </div>
      <div className="Enroll-r">
        <img src={Section5image} alt="" />
      </div>
    </section>
  );
};

export default Enroll;
