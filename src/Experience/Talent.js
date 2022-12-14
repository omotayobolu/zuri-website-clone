import React from "react";
import ExpFooter from "./Experience Footer/ExpFooter";
import Impact from "./Impact/Impact";
import Skills from "./Skills/Skills";
import TalentHome from "./Talent Home/TalentHome";
import Nav from "./Talent Nav/Nav";
import TalentWhy from "./Why Us/TalentWhy";

const Talent = () => {
  return (
    <div className="talent-section">
      <Nav />
      <TalentHome />
      <Impact />
      <Skills />
      <TalentWhy />
      <ExpFooter />
    </div>
  );
};

export default Talent;
