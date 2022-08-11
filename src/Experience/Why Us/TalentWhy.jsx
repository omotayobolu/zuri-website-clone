import React from "react";
import "./TalentWhy.css";
import { HireTalent } from "../../Data/HireTalent";
import Rope from "../../ZuriImg/rope.svg";

const TalentWhy = () => {
  return (
    <section className="why" id="WhyHire">
      <h1>
        Why Hire our <span className="red">Talents</span>
      </h1>
      <div className="talents">
        {HireTalent.map((talent) => (
          <div className="talent" key={talent.id}>
            {talent.image}
            <p>{talent.description}</p>
          </div>
        ))}
        <img className="rope" src={Rope} alt="" />
      </div>
      <div className="btn-home btn-talent">
        <button>Hire Talent</button>
        <button>Join Talent Pool</button>
      </div>
    </section>
  );
};

export default TalentWhy;
