import React from "react";
import "./About.css";
import Ingressive from "../../ZuriImg/ingresive.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="About">
      <hr />
      <div className="about-us">
        <p>
          INGRESSIVE FOR GOOD WAS LAUNCHED IN JULY 2020 WITH NO DOLLAR IN
          DONATION...
        </p>
        <img src={Ingressive} alt="" />
        <p>
          to help increase the earning power of African youths by providing them
          with tech skills, community, tools, resources, and jobs...{" "}
          <Link className="read-link" to="https://ingressive.org/i4g-in-2021/">
            Read More
          </Link>
        </p>
      </div>
    </section>
  );
};

export default About;
