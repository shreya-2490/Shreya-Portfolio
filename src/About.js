import React from "react";
import "./about.css";
import user from "./assets/user.png";
import pp from "./assets/pp.jpg";

function About() {
  return (
    <div className="about" id="aboutt">
      <div className="about-header">
        <img src={user}></img>
        <h1 style={{ textAlign: "center" }}>
          About <span style={{ color: "orange" }}>Me</span>
        </h1>
      </div>
      <div className="about-content">
        <div className="about-left">
          <img src={pp}></img>
        </div>
        <div className="about-right">
          <p style={{ fontWeight: "bold", fontSize: "25px" }}>I'm Shreya</p>
          <p
            style={{
              fontSize: "15px",
              color: "orange",
              marginTop: "-20px",
              fontWeight: "bold",
            }}
          >
            Frontend Web Developer
          </p>
          <p style={{ fontSize: "15px", color: "gray" }}>
            I am a Frontend web Developer.I completed my BTech from Chitkara University.
            I am passionate for coding i love solving programming problems.I
            have a good knowledge of data structures and algorithms as well. In
            Frontend web development I am skilled in ReactJs,Redux,JavaScript.
            Everyday working on myself to improve my skills as well as gain new
            skills.
          </p>
          <div className="about-fields">
            <div>
              <span style={{ color: "orange" }}>Age</span>: 22
            </div>
            <div>
              <span style={{ color: "orange" }}>Email</span>:
              s07hreya@gmail.com
            </div>
            <div>
              <span style={{ color: "orange" }}>Phone</span>: +91 8930400577
            </div>
            <div>
              <span style={{ color: "orange" }}>Place</span>: Yamuna Nagar,India
              135001
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
