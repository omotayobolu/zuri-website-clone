import React from "react";
import "./Join.css";
import { joinData } from "../../Data/joinData";
// import { nanoid } from "nanoid";

const Join = () => {
  return (
    <section className="join">
      <div className="join-header">
        <div>BY ZURI Team</div>
        <p>We cater for every level of expertise and needs in the industry.</p>
      </div>
      <div className="join-contents">
        {joinData.map((join, i) => (
          <div className="join-content" key={i}>
            <div>{join.image}</div>
            <div>{join.text}</div>
            <div>{join.link}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Join;
