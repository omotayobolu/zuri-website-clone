import React from "react";
import "./Questions.css";
import Wire from "../../ZuriImg/section7wire.svg";
import Accordion from "./Accordion";
import { QuestionsData } from "../../Data/QuestionsData";
import Twitter from "../../ZuriImg/twitter.svg";
import { Link } from "react-router-dom";

const Questions = () => {
  return (
    <section className="Questions" id="questions">
      <div className="question-heading">
        <img src={Wire} alt="" />
        <p>Got Questions</p>
        <h3>Frequently Asked Questions</h3>
      </div>
      <div className="faqs">
        {QuestionsData.map(({ question, answer }) => (
          <Accordion question={question} answer={answer} />
        ))}
      </div>
      <div className="question-footer">
        <p>Still got questions?</p>
        <Link to="https://twitter.com/thezuriteam">
          <button>
            <img src={Twitter} alt="" />
            <p>Tweet them at us</p>
          </button>
        </Link>
      </div>
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

export default Questions;
