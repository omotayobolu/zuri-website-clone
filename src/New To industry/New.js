import React from "react";
import Nav from "./Nav section/Nav";
import Newhome from "./NewHome section/Newhome";
import About from "./About Section/About";
import Why from "./Why section/Why";
import Enroll from "./Enroll Section/Enroll";
import Program from "./Program Section/Program";
import Questions from "./Questions section/Questions";
import Structure from "./Structure section/Structure";

const New = () => {
  return (
    <div className="new-section">
      <Nav />
      <Newhome />
      <About />
      <Why />
      <Enroll />
      <Program />
      <Questions />
      <Structure />
    </div>
  );
};

export default New;
