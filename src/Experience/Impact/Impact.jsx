import React from "react";
import "./Impact.css";
import { countriesData } from "../../Data/CountriesData";
import ImpactImage from "../../ZuriImg/section2.png";

const Impact = () => {
  return (
    <section className="impact" id="Impact">
      <div className="impact-l">
        <h1>
          We have impacted the lives of <span className="red">thousands </span>
          around the world
        </h1>
        <h5>6,000 trained in 14 months</h5>
        <p>Talent Placed in 5 countries</p>
        <div className="countries">
          {countriesData.map((country) => (
            <div className="country">{country.country}</div>
          ))}
        </div>
      </div>
      <div className="impact-r">
        <img src={ImpactImage} alt="" />
      </div>
    </section>
  );
};

export default Impact;
