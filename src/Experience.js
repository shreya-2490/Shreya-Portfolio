import React from "react";
import work from "./assets/work.png";
import "./experience.css";

function Experience() {
  return (
    <div className="experience" id="experirncee">
      <div className="experience-header">
        <img src={work}></img>
        <h1 style={{ textAlign: "center", color: "Black" }}>Experience</h1>
      </div>
      <div className="experience-content">
        <div className="vertcal-timeline">
          <div className="box">
            <img src={work}></img>
          </div>
          <div className="experince-box">
            <h3 style={{ marginLeft: "30px" }}>
              Frontend developer | Oriserve (Unlax Consumer Solutions Pvt Ltd){" "}
              <span style={{ fontSize: "15px", fontWeight: "normal" }}>
                May 2022-June 2023
              </span>
            </h3>
            <ul>
              <li>
                It was 13 months internship in which I developed different components & 
                functionalities for different brands such as autosuggestion feature in Vodafone,
                 Flynas and Air Arabia etc.
              </li>
              <li>
                Reactjs was used for developing the frontend and Redux was used
                for the state management of the app, React-router was used for
                routing.
              </li>
              <li>
                Worked on developing the frontend UI ,Integrating the backend
                Apis to frontend, developed different reusable components for
                the web app.
              </li>
              <li>
              Developed multilingual chatbot for Ikea (Qatar, UAE, Egypt, Oman) 
              which increased up-sell and cross-sell instances driving
              8.75% increase in cart value through contextual triggers.
              </li>
              <li>
              Developed and designed Oriserve website on wordpress 
              and designed responsive testimonial section on it
              </li>
            </ul>
          </div>
          {/** */}
        </div>
      </div>
    </div>
  );
}

export default Experience;
