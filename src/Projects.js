import React, { useState } from "react";
import "./projects.css";
import coding from "./assets/coding.png";
import Tilt from "react-parallax-tilt";

function Projects() {
  const [projects, setProjects] = useState([
    {
      name: "Ecommerce website",
      description: "ReactJs, JavaScript, Css",
      view: "https://prepaidfriends.netlify.app/",
    },
    {
      name: "To-do List Dashboard",
      description: "ReactJs, Redux, JavaScript, Css",
      view: "https://dashboardtodo.netlify.app/",
    },
    {
      name: "Gallery App",
      description: "ReactJs, Redux, JavaScript, Css",
      view: "https://galleryapp-web.netlify.app/",
    },
    {
      name: "Whatapp Clone",
      description: "ReactJs, Redux, JavaScript, FireBase, Css",
      view: "https://whatsapp-clone-b608b.web.app/",
    },
    {
      name: "Covid-19 tracker",
      description: "ReactJs, JavaScript, Html, Css,",
      view: "https://covid-19-tracker-59515.web.app/",
    },
  ]);

  return (
    <div className="projects" id="projectss">
      <div className="projects-header">
        <img src={coding}></img>
        <h1 style={{ textAlign: "center", color: "white" }}>
          Personal <span style={{ color: "orange" }}>Projects</span>
        </h1>
      </div>
      <div className="projects-content">
        {projects.map((data) => {
          return (
            <Tilt className="tiles">
              <h2 style={{}}>{data.name}</h2>
              <div style={{ width: "90%", margin: "auto" }}>
                {" "}
                <p
                  style={{
                    fontSize: "15px",
                    color: "white",
                    width: "100%",
                  }}
                >
                  TechStack: {data.description}
                </p>
              </div>
              <a href={data.view} target="_blank">
                <button>View</button>
              </a>
            </Tilt>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
