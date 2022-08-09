import React from "react";
import "./Program.css";
import Wire from "../../ZuriImg/section6.svg";
import { ProgramData } from "../../Data/ProgramData";

const Program = () => {
  return (
    <section className="Program" id="programs">
      <div className="program-heading">
        <p>Scope Of Program</p>
        <h2>
          Here is the list of areas that will be explored in the training.
        </h2>
        <img src={Wire} alt="" />
      </div>
      <div className="training-available">
        {ProgramData.map((programs) => (
          <div className="programs">
            <h3>{programs.title}</h3>
            <div className="programsImages">
              {programs.image1}
              {programs.image2}
              {programs.image3}
              {programs.image4}
            </div>
            <p>{programs.description}</p>
          </div>
        ))}
      </div>
      <button>Enroll Now</button>
      <hr
        style={{
          margin: 0,
          flexShrink: 0,
          borderWidth: "0px 0px thin",
          borderStyle: "solid",
          borderColor: "rgba(0, 0, 0, 0.12)",
        }}
      />
    </section>
  );
};

export default Program;
