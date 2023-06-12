import React from "react";
import "./education.css";
import education from "./assets/education.png";
import chitkara from "./assets/chitkara.jpg";
import tenth from "./assets/10th.jpg";
import twelve from "./assets/12th.jpg";

function Education() {
  return (
    <div className="education" id="educationn">
      <div className="education-header">
        <img src={education}></img>
        <h1 style={{ textAlign: "center" }}>
          My <span style={{ color: "#e68a00" }}>Education</span>
        </h1>
      </div>

      <div className="education-content">
        <div>
          <img src={chitkara}></img>
          <div>
            <p
              style={{
                fontSize: "25px",
                fontWeight: "bolder",
                color: "#001e80",
                marginBottom: "10px",
              }}
            >
              Chitkara University Institute Of Engineering & Technology
            </p>
            <p>Bachelor of Technology | C.G.P.A - 9.49 </p>
            <p>2019-2023</p>
          </div>
        </div>
        <div>
          <img src={twelve}></img>
          <div>
            <p
              style={{
                fontSize: "25px",
                fontWeight: "bolder",
                color: "#001e80",
                marginBottom: "10px",
              }}
            >
              SD Public School
            </p>
            <p>12th | CBSE Board | 82% </p>
            <p>2018-2019</p>
          </div>
        </div>
        <div>
          <img src={tenth}></img>
          <div>
            <p
              style={{
                fontSize: "25px",
                fontWeight: "bolder",
                color: "#001e80",
                marginBottom: "10px",
              }}
            >
              St. Thomas School
            </p>
            <p>10th | ICSE | 79%</p>
            <p>2016-2017</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
