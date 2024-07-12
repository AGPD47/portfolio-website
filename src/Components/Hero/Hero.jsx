import React from "react";
import "./Hero.css";

import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src="/images/person.jpeg" alt="" className="profile-img" />
      <h1>Priyanshu Dharmshaktu</h1>
      <h2>Front End Developer</h2>
      <hr
        style={{
          width: "20%",
          height: "4px",
          marginTop: "-10px",
          borderRadius: "6px",
          background: "white",
        }}
      />
      <p>Based in Nainital, Uttarakhand with hands on experience of 2 years.</p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Contact me
          </AnchorLink>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
