import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skill-1">
        <div className="skills-header">
          <h1>
            Skills of our <span className="red">talents</span> that you will
            need
          </h1>
        </div>
        <ul>
          <li>UI/UX Designers</li>
          <li>Backend Developers</li>
          <li>DevOps Engineers</li>
          <li>Frontend Developers</li>
        </ul>
      </div>
      <div className="skill-2">
        <h1>Where our talents work</h1>
        <ul>
          <li>Github</li>
          <li>Microsoft</li>
          <li>ReSkill Americans</li>
          <li>Flutterwave</li>
          <li>Google</li>
          <li>Career Transitioners</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
