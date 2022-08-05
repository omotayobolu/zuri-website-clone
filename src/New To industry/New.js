import React from "react";
import Nav from "./Nav section/Nav";
import Newhome from "./NewHome section/Newhome";
import About from "./About Section/About";
import Why from "./Why section/Why";
import Enroll from "./Enroll Section/Enroll";
import Program from "./Program Section/Program";

const New = () => {
  return (
    <div className="new-section">
      <Nav />
      <Newhome />
      <About />
      <Why />
      <Enroll />
      <Program />
    </div>
  );
};

export default New;
