import React from "react";
import "./Structure.css";
import Star from "../../ZuriImg/Star1.svg";
import Wire from "../../ZuriImg/section7wire.svg";
import Clarity from "../../ZuriImg/clarity.svg";
import Move from "../../ZuriImg/move.svg";
import Circle from "../../ZuriImg/circle.png";

const Structure = () => {
  return (
    <section className="Structure">
      <img src={Wire} alt="" />
      <img src={Star} alt="" />
      <div className="structure-header">
        <h5>Structure</h5>
        <h3>Program Structure</h3>
        <p>
          There are 2 broad paths in this program based on your availability.
        </p>
      </div>
      <div className="program-structures">
        <div className="struct structure1">
          <h3>Full-time</h3>
          <p>Requires at least 25 hours weekly on program content.</p>
          <h6>Available Tracks:</h6>
          <ul>
            <li>
              Full Stack: Backend (Python, JavaScript), Frontend (HTML, CSS,
              JavaScript) & DevOps
            </li>
            <li>Design: Figma, Adobe XD</li>
          </ul>
          <h6>Phases:</h6>
          <ul>
            <li>Training Phase</li>
            <li>Project Phase</li>
          </ul>
          <h6>Post Program:</h6>
          <div className="struct">
            <ul>
              <li>Certification of Attendance</li>
              <li className="clarity">
                <li>Zuri Internship</li>
                <img src={Clarity} alt="" />
              </li>
              <li className="clarity">
                <li>Laptop Reward (upgrade or new one)</li>{" "}
                <img src={Clarity} alt="" />
              </li>
              <li className="clarity">
                <li>Job Placement</li>
                <img src={Clarity} alt="" />
              </li>

              <li>Zuri Talent Pool</li>
              <li className="clarity">
                <li>More Training:</li>
                <img src={Clarity} alt="" />
              </li>
            </ul>
            <div className="more-training">
              <p>Interview Prep</p>
              <p>Algorithms & Data Structure</p>
              <p>Freelance Setup & Training</p>
              <p>LinkedIn Optimization</p>
              <p>CV Review</p>
            </div>
          </div>
        </div>
        <div className="struct structure2">
          <h3>Part-time</h3>
          <p>Requires at least 11 hours weekly on program content.</p>
          <h6>Available Tracks:</h6>
          <ul>
            <li>
              Frontend: <br />
              HTML, CSS, JavaScript
            </li>
          </ul>
          <br />
          <ul>
            <li>
              Backend: Can only select one backend language
              <br />
              Python,
              <br />
              PHP,
              <br />
              JavaScript
            </li>
          </ul>

          <ul>
            <li>
              Design: <br />
              Figma
            </li>
          </ul>
          <h6>Phases:</h6>
          <ul>
            <li>Training Phase</li>
          </ul>
          <h6>Post Program:</h6>
          <ul>
            <li>Certification of Attendance</li>
            <li>Zuri Internship</li>
          </ul>
        </div>
      </div>
      <img className="move" src={Move} alt="" />
      <img className="circle1" src={Circle} alt="" />
      <img className="circle2" src={Circle} alt="" />
    </section>
  );
};

export default Structure;
