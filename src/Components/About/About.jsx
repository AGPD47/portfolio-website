import React from "react";
import "./About.css";
import profile_img from "../../assets/about_profile.svg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="title-box">
        <h1>About me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left"></div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Hello! I am currently pursuing B. Tech in Chemical Engineering
              with a deep passion for web development and technology.
            </p>
            <p>
              I specialize in frontend development, proficient in HTML, CSS,
              Javascript and React Js.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "56%" }} />
            </div>
            <div className="about-skill">
              <p>Node JS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Bootstrap</p>
              <hr style={{ width: "40%" }} />
            </div>
            <div className="about-skill">
              <p>C++</p>
              <hr style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>2+</h1>
          <p>Years Experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>3+</h1>
          <p>Main Projects</p>
        </div>
      </div>
    </div>
  );
};

export default About;
