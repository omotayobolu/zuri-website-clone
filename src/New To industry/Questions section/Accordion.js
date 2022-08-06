import React, { useState } from "react";
import "./Questions.css";

const Accordion = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="question-and-answer">
      <div className="question" onClick={() => setIsActive(!isActive)}>
        <h3>{question}</h3>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      <div className="answer">{isActive && <p>{answer}</p>}</div>
    </div>
  );
};

export default Accordion;
