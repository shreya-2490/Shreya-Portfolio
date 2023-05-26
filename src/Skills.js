import React from "react";
import "./skills.css";
import coding from "./assets/coding.png";
import Reactt from "./assets/React.png";
import CSS from "./assets/css.png";
import java from "./assets/Java.jfif";
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
          <img src={Reactt}></img><br/>
          <div>ReactJs</div>
        </div>
        <div>
          <img src={CSS}></img>
          <div>Css3</div>
        </div>
        <div>
          <img src={java}></img>
          <div>Java</div>
        </div>
        <div>
          <img src={REDUX}></img>
          <div>Redux</div>
        </div>
        <div>
          <img src={git}></img>
          <div>Github</div>
        </div>
        <div>
          <img src={js}></img>
          <div>JavaScript</div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
