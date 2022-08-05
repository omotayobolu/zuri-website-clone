import React from "react";
import "./Why.css";
import Wire from "../../ZuriImg/section3wire.svg";
import Star from "../../ZuriImg/Star.jpg";
import { WhyUs } from "../../Data/WhyUs";

const Why = () => {
  return (
    <section className="Why">
      <div className="why-us">
        <div className="why-us-l">
          <img src={Wire} alt="" />
          <p>Why Zuri Training?</p>
          <h2>
            Here at Zuri, you gain access to enough knowledge to introduce and
            aid your success in the tech industry.
          </h2>
        </div>
        <img src={Star} alt="" />
      </div>

      <div className="why-reasons">
        {WhyUs.map((why) => (
          <div className="reason" key={why.id}>
            {why.image}
            <h2>{why.id}</h2>
            <h1>{why.heading}</h1>
            <p>{why.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Why;
