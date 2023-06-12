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
            I am a passionate and skilled Frontend Web Developer with a BTech degree
            Chitkara University. My expertise lies in ReactJS, Redux, and JavaScript, and I enjoy solving programming problems using my strong understanding of data structures and algorithms. With a focus on continuous improvement, I strive to enhance my skills and stay up-to-date with the latest technologies.
            I take pride in delivering high-quality solutions and thrive on new challenges.
            Let's connect and discuss how I can contribute to your next project.
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
              <span style={{ color: "orange" }}>Place</span>: Yamuna Nagar, Haryana, India
              135001
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
