import React from "react";
import "./ExpFooter.css";
import LogoFooter from "../../ZuriImg/logo (1).svg";
import Facebook from "../../ZuriImg/facebook (1).svg";
import LinkedIn from "../../ZuriImg/linkd (1).svg";
import Twitter from "../../ZuriImg/twit.png";
import Youtube from "../../ZuriImg/youtube (1).svg";

const ExpFooter = () => {
  const mobile = window.innerWidth <= 768 ? true : false;

  return (
    <div className="experience-footer">
      <div className="ef1">
        <img src={LogoFooter} alt="" />
        <div className="socials-exp">
          <img src={Facebook} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Twitter} alt="" />
          <img src={Youtube} alt="" />
        </div>
      </div>
      <div className="ef2">
        <p>© Copyright 2022 ZURI TEAM. All rights Reserved</p>
        {mobile && (
          <hr
            style={{
              margin: 0,
              flexShrink: 0,
              borderWidth: "0px 0px thin",
              borderStyle: "solid",
              borderColor: "var(--talent-p-color)",
              width: "100%",
            }}
          />
        )}
        <p>talent@zuri.team</p>
      </div>
    </div>
  );
};

export default ExpFooter;
