import React from "react";
import "./skills.css";
import coding from "./assets/coding.png";

import Reactt from "./assets/React.png";
import CSS from "./assets/css.png";
import java from "./assets/java.png";
import REDUX from "./assets/redux.png";
import git from "./assets/git.png";
import js from "./assets/js.png";

function Skills() {
  return (
    <div className="skills" id="skillss">
      <div className="skills-header">
        <img src={coding}></img>
        <h1 style={{ textAlign: "center", color: "white" }}>
          Skills & <span style={{ color: "orange" }}>Abilites</span>
        </h1>
      </div>
      <div className="skills-content">
        <div>
          <img src={Reactt}></img>
          <span>ReactJs</span>
        </div>
        <div>
          <img src={CSS}></img>
          <span>Css3</span>
        </div>
        <div>
          <img src={java}></img>
          <span>Java</span>
        </div>
        <div>
          <img src={REDUX}></img>
          <span>Redux</span>
        </div>
        <div>
          <img src={git}></img>
          <span>Github</span>
        </div>
        <div>
          <img src={js}></img>
          <span>JavaScript</span>
        </div>
      </div>
    </div>
  );
}

export default Skills;
