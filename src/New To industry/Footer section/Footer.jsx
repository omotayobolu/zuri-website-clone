import React from "react";
import "./Footer.css";
import Logo from "../../ZuriImg/logo.svg";

import Fb from "../../ZuriImg/facebook.svg";
import In from "../../ZuriImg/linkd.svg";
import Twi from "../../ZuriImg/twitter.svg";
import Yt from "../../ZuriImg/youtube.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer1">
        <img src={Logo} alt="" />
        <div className="socials">
          <img src={Fb} alt="" />
          <img src={In} alt="" />
          <img src={Twi} alt="" />
          <img src={Yt} alt="" />
        </div>
      </div>
      <div className="footer2">
        <p>© 2022 Zuri Training</p>
        <div className="last-content">
          <p>Privacy Policy</p>
          <p>Ingressive For Good</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
