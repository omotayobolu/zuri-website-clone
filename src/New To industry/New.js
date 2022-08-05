import React from "react";
import Nav from "./Nav section/Nav";
import Newhome from "./NewHome section/Newhome";
import About from "./About Section/About";
import Why from "./Why section/Why";

const New = () => {
  return (
    <div className="new-section">
      <Nav />
      <Newhome />
      <About />
      <Why />
    </div>
  );
};

export default New;
