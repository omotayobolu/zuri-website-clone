import React from "react";
import "./Contact.css";
import TeamImg from "../../ZuriImg/zuri-logo-full.svg";
import fb from "../../ZuriImg/fb.png";
import twitter from "../../ZuriImg/twitter.png";
import ig from "../../ZuriImg/IG.png";
import linkedIn from "../../ZuriImg/in.png";

const Contact = () => {
  return (
    <div className="Contacts">
      <div className="contacts-contents">
        <img src={TeamImg} alt="" />
        <div className="links flex-contacts">
          <h4>Links</h4>
          <ul className="flex-contacts">
            <li className="a-link">Store</li>
            <li className="a-link">Blog</li>
          </ul>
        </div>
        <div className="contact flex-contacts">
          <h4>Contact</h4>
          <p>8 Jubliee-CMD Road, Magodo, Lagos State</p>
          <span className="a-link">hello@zuri.team</span>
        </div>
        <div className="socialMedia">
          <h4>Follow Us</h4>
          <div className="social-links">
            <img src={fb} alt="" />
            <img src={twitter} alt="" />
            <img src={ig} alt="" />
            <img src={linkedIn} alt="" />
          </div>
        </div>
      </div>
      <hr
        style={{
          color: "var(--text-color)",
          height: "1px",
          borderColor: "var(--text-color)",
        }}
      />
      <div className="footer">© 2020 ZURI TEAM</div>
    </div>
  );
};

export default Contact;
